import { Box, Container, Typography, Card, CardContent, CardActionArea, Grid, Paper } from '@mui/material'
import { Link } from 'react-router-dom'
import DashboardIcon from '@mui/icons-material/Dashboard'
import ShowChartIcon from '@mui/icons-material/ShowChart'

function Home() {
  return (
    <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100vh', py: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ mb: 2, fontWeight: 'bold', color: '#1976d2' }}>
          MUI Playground
        </Typography>
        <Typography variant="h6" align="center" sx={{ mb: 6, color: '#666' }}>
          Choose a page to explore
        </Typography>

        <Grid container spacing={4}>
          {/* Kitchen Sink Card */}
          <Grid item xs={12} md={6}>
            <Card 
              component={Link} 
              to="/kitchen-sink"
              sx={{ 
                height: '100%',
                textDecoration: 'none',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 6,
                }
              }}
            >
              <CardActionArea sx={{ height: '100%', p: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                  <DashboardIcon sx={{ fontSize: 80, color: '#1976d2' }} />
                </Box>
                <CardContent>
                  <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
                    Kitchen Sink
                  </Typography>
                  <Typography variant="body1" color="text.secondary" align="center">
                    Comprehensive showcase of all MUI components including buttons, forms, cards, charts, and more.
                  </Typography>
                  <Paper sx={{ mt: 3, p: 2, bgcolor: '#e3f2fd' }}>
                    <Typography variant="body2" color="text.secondary">
                      ✨ 50+ Components<br />
                      📊 Multiple Chart Types<br />
                      🎨 Interactive Examples
                    </Typography>
                  </Paper>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          {/* Root Cause Card */}
          <Grid item xs={12} md={6}>
            <Card 
              component={Link} 
              to="/root-cause"
              sx={{ 
                height: '100%',
                textDecoration: 'none',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 6,
                }
              }}
            >
              <CardActionArea sx={{ height: '100%', p: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                  <ShowChartIcon sx={{ fontSize: 80, color: '#2e7d32' }} />
                </Box>
                <CardContent>
                  <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
                    Root Cause
                  </Typography>
                  <Typography variant="body1" color="text.secondary" align="center">
                    Advanced analytics dashboard with time-series data visualization and threshold monitoring.
                  </Typography>
                  <Paper sx={{ mt: 3, p: 2, bgcolor: '#e8f5e9' }}>
                    <Typography variant="body2" color="text.secondary">
                      📈 Time Series Chart<br />
                      🚨 Alert Detection<br />
                      ⚙️ Advanced Filters
                    </Typography>
                  </Paper>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>

        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            Built with Material-UI, React, and Vite
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Home

