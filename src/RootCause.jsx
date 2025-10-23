import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Box,
  Container,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Paper,
  Stack,
  Button,
  Alert,
} from '@mui/material'
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material'
import { LineChart } from '@mui/x-charts'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import dayjs from 'dayjs'

function RootCause() {
  const navigate = useNavigate()
  const [timeRange, setTimeRange] = useState('custom')
  const [startDate, setStartDate] = useState(dayjs('2025-09-17'))
  const [endDate, setEndDate] = useState(dayjs('2025-09-29'))
  const [rule, setRule] = useState('rolling-voltage')

  // Handle time range changes
  const handleTimeRangeChange = (newRange) => {
    setTimeRange(newRange)
    const end = dayjs()
    let start = dayjs()
    
    switch(newRange) {
      case '7days':
        start = end.subtract(7, 'day')
        break
      case '30days':
        start = end.subtract(30, 'day')
        break
      case '90days':
        start = end.subtract(90, 'day')
        break
      case 'custom':
        // Keep existing dates for custom
        return
    }
    
    setStartDate(start)
    setEndDate(end)
  }

  // Fixed historical alert dates (these are the 3 times the alert was triggered in history)
  const getHistoricalAlertDates = () => {
    const now = new Date()
    return [
      {
        start: new Date(now.getTime() - 8 * 24 * 60 * 60 * 1000),  // 8 days ago
        end: new Date(now.getTime() - 6 * 24 * 60 * 60 * 1000)     // 6 days ago (2 day duration)
      },
      {
        start: new Date(now.getTime() - 15 * 24 * 60 * 60 * 1000), // 15 days ago
        end: new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000)    // 14 days ago (1 day duration)
      },
      {
        start: new Date(now.getTime() - 25 * 24 * 60 * 60 * 1000), // 25 days ago
        end: new Date(now.getTime() - 22 * 24 * 60 * 60 * 1000)    // 22 days ago (3 day duration)
      }
    ]
  }

  // Convert historical alert dates to data point indices based on current date range
  const getAlertPeriods = (dates) => {
    const historicalAlerts = getHistoricalAlertDates()
    const startDate = dates[0]
    const endDate = dates[dates.length - 1]
    const periods = []

    historicalAlerts.forEach(alert => {
      // Check if this alert falls within the current time range
      if (alert.end >= startDate && alert.start <= endDate) {
        // Find the closest data point indices
        let startIndex = dates.findIndex(d => d >= alert.start)
        let endIndex = dates.findIndex(d => d >= alert.end)
        
        // Handle edge cases
        if (startIndex === -1) startIndex = 0
        if (endIndex === -1) endIndex = dates.length - 1
        if (startIndex > endIndex) startIndex = endIndex
        
        periods.push({ start: startIndex, end: endIndex })
      }
    })

    return periods
  }

  // Generate sample data based on rule type
  const generateTimeSeriesData = () => {
    const dates = []
    let metricData = []
    let thresholdData = []
    
    // Create dates from start to end
    const start = startDate.toDate()
    const end = endDate.toDate()
    
    // Data cutoff: Only data available for last 50 days
    const now = new Date()
    const dataStartLimit = new Date(now.getTime() - 50 * 24 * 60 * 60 * 1000)
    
    // Adjust start date if it's before our data availability
    const effectiveStart = start < dataStartLimit ? dataStartLimit : start
    
    const totalDays = Math.ceil((end - effectiveStart) / (1000 * 60 * 60 * 24))
    const pointsPerDay = 4
    const totalPoints = totalDays * pointsPerDay
    
    for (let i = 0; i <= totalPoints; i++) {
      const date = new Date(effectiveStart)
      date.setHours(effectiveStart.getHours() + (i * 6))
      
      // Only add dates that are within data availability and within selected range
      if (date >= dataStartLimit && date <= end) {
        dates.push(date)
      }
    }

    const alertPeriods = getAlertPeriods(dates)
    
    // Generate data based on rule type
    switch(rule) {
      case 'rolling-voltage':
        // Voltage deviation data
        thresholdData = new Array(dates.length).fill(10)
        metricData = dates.map((_, i) => {
          let value = 5 + (Math.random() - 0.5) * 2 // Base normal voltage
          
          // Add spikes during alert periods
          alertPeriods.forEach(period => {
            if (i >= period.start && i <= period.end) {
              const progress = (i - period.start) / (period.end - period.start)
              value = 10 + 4 * Math.sin(progress * Math.PI) + Math.random() * 2
            }
          })
          
          return value
        })
        break
        
      case 'voltage-sag':
        // Voltage sag detection - drops during alert periods
        thresholdData = new Array(dates.length).fill(110)
        metricData = dates.map((_, i) => {
          let value = 120 + (Math.random() - 0.5) * 3 // Normal voltage ~120V
          
          // Sags during alert periods
          alertPeriods.forEach(period => {
            if (i >= period.start && i <= period.end) {
              const progress = (i - period.start) / (period.end - period.start)
              value = 110 - 15 * Math.sin(progress * Math.PI) - Math.random() * 10
            }
          })
          
          return value
        })
        break
        
      case 'power-surge':
        // Power surge events - spikes during alert periods
        thresholdData = new Array(dates.length).fill(130)
        metricData = dates.map((_, i) => {
          let value = 120 + (Math.random() - 0.5) * 3 // Normal voltage ~120V
          
          // Surges during alert periods
          alertPeriods.forEach(period => {
            if (i >= period.start && i <= period.end) {
              const progress = (i - period.start) / (period.end - period.start)
              value = 130 + 25 * Math.sin(progress * Math.PI) + Math.random() * 15
            }
          })
          
          return value
        })
        break
        
      case 'frequency-drift':
        // Frequency oscillation - deviation during alert periods
        thresholdData = new Array(dates.length).fill(0.5)
        metricData = dates.map((_, i) => {
          let value = (Math.random() - 0.5) * 0.15 // Normal small variation
          
          // Drift events during alert periods
          alertPeriods.forEach(period => {
            if (i >= period.start && i <= period.end) {
              const progress = (i - period.start) / (period.end - period.start)
              value = 0.5 + 0.4 * Math.sin(progress * Math.PI * 2 + i / 5) + Math.random() * 0.2
            }
          })
          
          return value
        })
        break
        
      default:
        thresholdData = new Array(dates.length).fill(10)
        metricData = new Array(dates.length).fill(5)
    }
    
    // Ensure arrays match dates length
    while (metricData.length < dates.length) {
      metricData.push(metricData[metricData.length - 1] || 0)
    }
    metricData = metricData.slice(0, dates.length)
    
    return { dates, voltageData: metricData, thresholdData }
  }

  const { dates, voltageData, thresholdData } = generateTimeSeriesData()

  // Check if selected range extends beyond available data
  const now = new Date()
  const dataStartLimit = new Date(now.getTime() - 50 * 24 * 60 * 60 * 1000)
  const hasPartialData = startDate.toDate() < dataStartLimit

  // Get rule configuration
  const getRuleConfig = () => {
    switch(rule) {
      case 'rolling-voltage':
        return {
          name: 'Rolling Voltage Deviation',
          unit: 'V',
          yAxisLabel: 'Voltage (V)',
          compareAbove: true
        }
      case 'voltage-sag':
        return {
          name: 'Voltage Sag Detection',
          unit: 'V',
          yAxisLabel: 'Voltage (V)',
          compareAbove: false
        }
      case 'power-surge':
        return {
          name: 'Power Surge Events',
          unit: 'V',
          yAxisLabel: 'Voltage (V)',
          compareAbove: true
        }
      case 'frequency-drift':
        return {
          name: 'Frequency Drift',
          unit: 'Hz',
          yAxisLabel: 'Frequency Deviation (Hz)',
          compareAbove: true
        }
      default:
        return {
          name: 'Rolling Voltage Deviation',
          unit: 'V',
          yAxisLabel: 'Voltage (V)',
          compareAbove: true
        }
    }
  }

  const ruleConfig = getRuleConfig()

  // Get fixed alert regions (same for all rules) - based on actual dates
  const alertRegions = getAlertPeriods(dates)

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ bgcolor: '#fafafa', minHeight: '100vh', py: 4 }}>
        <Container maxWidth="xl">
        {/* Back Button */}
        <Button 
          startIcon={<ArrowBackIcon />} 
          onClick={() => navigate('/')}
          sx={{ mb: 3 }}
        >
          Back to Home
        </Button>

        {/* Header */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 500 }}>
            Power Supply Instability
          </Typography>
        </Box>

        {/* Data Availability Warning */}
        {hasPartialData && (
          <Alert severity="warning" sx={{ mb: 3 }}>
            Data is only available for the last 50 days. Showing available data from {dataStartLimit.toLocaleDateString()}.
          </Alert>
        )}

        {/* Controls and Chart Section */}
        <Paper sx={{ p: 3, position: 'relative' }}>
          {/* Root Cause Header and Controls */}
          <Stack 
            direction={{ xs: 'column', md: 'row' }} 
            spacing={2} 
            sx={{ mb: 4, justifyContent: 'space-between', alignItems: { xs: 'flex-start', md: 'center' } }}
          >
            <Typography variant="h5" sx={{ fontWeight: 500 }}>
              Root Cause
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            {/* Time Range */}
            <FormControl sx={{ minWidth: 200 }}>
              <InputLabel>Time Range</InputLabel>
              <Select
                value={timeRange}
                label="Time Range"
                onChange={(e) => handleTimeRangeChange(e.target.value)}
              >
                <MenuItem value="custom">Custom Range</MenuItem>
                <MenuItem value="7days">Last 7 Days</MenuItem>
                <MenuItem value="30days">Last 30 Days</MenuItem>
                <MenuItem value="90days">Last 90 Days</MenuItem>
              </Select>
            </FormControl>

            {/* Start Date */}
            <DatePicker
              label="Select Start Date"
              value={startDate}
              onChange={(newValue) => setStartDate(newValue)}
              slotProps={{
                textField: {
                  sx: { minWidth: 180 }
                }
              }}
            />

            {/* End Date */}
            <DatePicker
              label="Select End Date"
              value={endDate}
              onChange={(newValue) => setEndDate(newValue)}
              slotProps={{
                textField: {
                  sx: { minWidth: 180 }
                }
              }}
            />

            {/* Rule */}
            <FormControl sx={{ minWidth: 220 }}>
              <InputLabel>Rule</InputLabel>
              <Select
                value={rule}
                label="Rule"
                onChange={(e) => setRule(e.target.value)}
              >
                <MenuItem value="rolling-voltage">Rolling Voltage Deviation</MenuItem>
                <MenuItem value="voltage-sag">Voltage Sag Detection</MenuItem>
                <MenuItem value="power-surge">Power Surge Events</MenuItem>
                <MenuItem value="frequency-drift">Frequency Drift</MenuItem>
              </Select>
            </FormControl>
            </Stack>
          </Stack>

          {/* Chart */}
          {/* Legend */}
          <Stack 
            direction="row" 
            spacing={3} 
            justifyContent="center" 
            sx={{ mb: 4, pb: 2, borderBottom: '1px solid #e0e0e0' }}
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <Box sx={{ width: 16, height: 16, bgcolor: '#ffcdd2', border: '1px solid #ef9a9a' }} />
              <Typography variant="body2" color="text.secondary">Alert Triggered</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <Box sx={{ width: 40, height: 2, borderTop: '2px solid #999' }} />
              <Typography variant="body2" color="text.secondary">Threshold</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <Box sx={{ width: 40, height: 2, bgcolor: '#00bcd4' }} />
              <Typography variant="body2" color="text.secondary">{ruleConfig.name}</Typography>
            </Stack>
          </Stack>

          {/* Chart Container with Alert Regions */}
          <Box sx={{ position: 'relative', width: '100%', height: 450, mt: 3 }}>
            {/* The Chart */}
            <LineChart
              xAxis={[
                {
                  id: 'x-axis-id',
                  data: dates,
                  scaleType: 'time',
                  valueFormatter: (date) => {
                    const d = new Date(date)
                    return `${(d.getMonth() + 1).toString().padStart(2, '0')}/${d.getDate().toString().padStart(2, '0')}/${d.getFullYear().toString().slice(-2)}`
                  },
                },
              ]}
              yAxis={[
                {
                  id: 'y-axis-id',
                  label: ruleConfig.yAxisLabel,
                },
              ]}
              series={[
                // Threshold line (first so it's in back)
                {
                  type: 'line',
                  data: thresholdData,
                  label: 'Threshold',
                  color: '#999',
                  curve: 'linear',
                  showMark: false,
                  lineStyle: {
                    strokeDasharray: '5 5',
                  },
                },
                // Main metric line
                {
                  type: 'line',
                  data: voltageData,
                  label: ruleConfig.name,
                  color: '#00bcd4',
                  curve: 'linear',
                  showMark: false,
                  lineStyle: {
                    strokeWidth: 2,
                  },
                },
              ]}
              height={450}
              margin={{ top: 20, right: 40, bottom: 60, left: 80 }}
              grid={{ vertical: false, horizontal: false }}
              zoom={[
                { axisId: 'x-axis-id', minSpan: 1000 * 60 * 60 * 24 }, // Minimum span of 1 day
                { axisId: 'y-axis-id' }
              ]}
              sx={{
                '& .MuiChartsLegend-root': {
                  display: 'none',
                },
              }}
            />

            {/* Background alert regions - using native overlay */}
            <Box sx={{ 
              position: 'absolute', 
              top: 0, 
              left: '144px', 
              right: '40px', 
              bottom: '60px', 
              pointerEvents: 'none', 
              overflow: 'hidden',
              height: '81%',
              width: 'calc(100% - 185px)'
            }}>
              {alertRegions.map((region, index) => {
                const totalPoints = voltageData.length
                const startPercent = (region.start / totalPoints) * 100
                const widthPercent = ((region.end - region.start) / totalPoints) * 100
                
                return (
                  <Box
                    key={index}
                    sx={{
                      position: 'absolute',
                      left: `${startPercent}%`,
                      width: `${widthPercent}%`,
                      top: 0,
                      bottom: 0,
                      bgcolor: 'rgba(255, 205, 210, 0.4)',
                      borderLeft: '1px solid rgba(239, 154, 154, 0.3)',
                      borderRight: '1px solid rgba(239, 154, 154, 0.3)',
                    }}
                  />
                )
              })}
            </Box>
          </Box>
        </Paper>
        </Container>
      </Box>
    </LocalizationProvider>
  )
}

export default RootCause

