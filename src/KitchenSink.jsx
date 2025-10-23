import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Box,
  Container,
  Typography,
  Button,
  IconButton,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  Switch,
  Slider,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Paper,
  Chip,
  Avatar,
  Badge,
  Tooltip,
  Alert,
  AlertTitle,
  LinearProgress,
  CircularProgress,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Tabs,
  Tab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
  Breadcrumbs,
  Link,
  Rating,
  ToggleButton,
  ToggleButtonGroup,
  ButtonGroup,
  Fab,
  Stack,
  Grid,
} from '@mui/material'
import {
  LineChart,
  BarChart,
  PieChart,
  ScatterChart,
  SparkLineChart,
  Gauge,
} from '@mui/x-charts'
import {
  Save as SaveIcon,
  Delete as DeleteIcon,
  Send as SendIcon,
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
  Home as HomeIcon,
  Settings as SettingsIcon,
  AccountCircle as AccountCircleIcon,
  Mail as MailIcon,
  Notifications as NotificationsIcon,
  ExpandMore as ExpandMoreIcon,
  Add as AddIcon,
  Search as SearchIcon,
  CloudUpload as CloudUploadIcon,
  Menu as MenuIcon,
  ArrowBack as ArrowBackIcon,
} from '@mui/icons-material'

function KitchenSink() {
  const navigate = useNavigate()
  const [tabValue, setTabValue] = useState(0)
  const [sliderValue, setSliderValue] = useState(30)
  const [switchChecked, setSwitchChecked] = useState(true)
  const [checkboxChecked, setCheckboxChecked] = useState(false)
  const [radioValue, setRadioValue] = useState('option1')
  const [selectValue, setSelectValue] = useState('option1')
  const [dialogOpen, setDialogOpen] = useState(false)
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [ratingValue, setRatingValue] = useState(3.5)
  const [alignment, setAlignment] = useState('left')

  return (
    <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="lg">
        {/* Back Button */}
        <Button 
          startIcon={<ArrowBackIcon />} 
          onClick={() => navigate('/')}
          sx={{ mb: 3 }}
        >
          Back to Home
        </Button>

        {/* Header */}
        <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ mb: 4, fontWeight: 'bold', color: '#1976d2' }}>
          MUI Kitchen Sink
        </Typography>
        <Typography variant="subtitle1" align="center" sx={{ mb: 6, color: '#666' }}>
          A comprehensive showcase of Material-UI components
        </Typography>

        {/* Breadcrumbs */}
        <Paper sx={{ p: 2, mb: 3 }}>
          <Breadcrumbs>
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Link underline="hover" color="inherit" href="/components">
              Components
            </Link>
            <Typography color="text.primary">Kitchen Sink</Typography>
          </Breadcrumbs>
        </Paper>

        {/* Buttons Section */}
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h5" gutterBottom sx={{ mb: 3, fontWeight: 'bold' }}>
            Buttons
          </Typography>
          
          <Stack spacing={2}>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button variant="contained">Contained</Button>
              <Button variant="outlined">Outlined</Button>
              <Button variant="text">Text</Button>
              <Button variant="contained" color="secondary">Secondary</Button>
              <Button variant="contained" color="success">Success</Button>
              <Button variant="contained" color="error">Error</Button>
              <Button variant="contained" color="warning">Warning</Button>
              <Button variant="contained" color="info">Info</Button>
            </Box>

            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
              <Button variant="contained" size="small">Small</Button>
              <Button variant="contained" size="medium">Medium</Button>
              <Button variant="contained" size="large">Large</Button>
              <Button variant="contained" disabled>Disabled</Button>
            </Box>

            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
              <Button variant="contained" startIcon={<SaveIcon />}>Save</Button>
              <Button variant="contained" endIcon={<SendIcon />}>Send</Button>
              <Button variant="outlined" startIcon={<DeleteIcon />} color="error">Delete</Button>
            </Box>

            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
              <ButtonGroup variant="contained">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
              </ButtonGroup>

              <ToggleButtonGroup
                value={alignment}
                exclusive
                onChange={(e, newAlignment) => setAlignment(newAlignment)}
              >
                <ToggleButton value="left">Left</ToggleButton>
                <ToggleButton value="center">Center</ToggleButton>
                <ToggleButton value="right">Right</ToggleButton>
              </ToggleButtonGroup>
            </Box>

            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', alignItems: 'center' }}>
              <IconButton color="primary">
                <FavoriteIcon />
              </IconButton>
              <IconButton color="secondary">
                <SearchIcon />
              </IconButton>
              <IconButton color="success">
                <AddIcon />
              </IconButton>
              <Fab color="primary" size="small">
                <AddIcon />
              </Fab>
              <Fab color="secondary">
                <AddIcon />
              </Fab>
            </Box>
          </Stack>
        </Paper>

        {/* Form Inputs Section */}
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h5" gutterBottom sx={{ mb: 3, fontWeight: 'bold' }}>
            Form Inputs
          </Typography>
          
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Standard"
                variant="outlined"
                placeholder="Enter text"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="With Helper Text"
                variant="outlined"
                helperText="This is helper text"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Required"
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Error State"
                variant="outlined"
                error
                helperText="Something went wrong"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Disabled"
                variant="outlined"
                disabled
                value="Disabled input"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Multiline"
                multiline
                rows={4}
                placeholder="Enter multiple lines"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel>Select Option</InputLabel>
                <Select
                  value={selectValue}
                  label="Select Option"
                  onChange={(e) => setSelectValue(e.target.value)}
                >
                  <MenuItem value="option1">Option 1</MenuItem>
                  <MenuItem value="option2">Option 2</MenuItem>
                  <MenuItem value="option3">Option 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Paper>

        {/* Checkboxes, Radio, Switches */}
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h5" gutterBottom sx={{ mb: 3, fontWeight: 'bold' }}>
            Selection Controls
          </Typography>
          
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>Checkboxes</Typography>
              <FormControlLabel
                control={<Checkbox checked={checkboxChecked} onChange={(e) => setCheckboxChecked(e.target.checked)} />}
                label="Checkbox"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Checked"
              />
              <FormControlLabel
                control={<Checkbox disabled />}
                label="Disabled"
              />
              <FormControlLabel
                control={<Checkbox icon={<FavoriteBorderIcon />} checkedIcon={<FavoriteIcon />} />}
                label="Custom Icon"
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>Radio Buttons</Typography>
              <RadioGroup value={radioValue} onChange={(e) => setRadioValue(e.target.value)}>
                <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
                <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
                <FormControlLabel value="option3" control={<Radio />} label="Option 3" />
                <FormControlLabel value="disabled" control={<Radio />} label="Disabled" disabled />
              </RadioGroup>
            </Grid>

            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>Switches</Typography>
              <FormControlLabel
                control={<Switch checked={switchChecked} onChange={(e) => setSwitchChecked(e.target.checked)} />}
                label="Switch"
              />
              <FormControlLabel
                control={<Switch defaultChecked />}
                label="Checked"
              />
              <FormControlLabel
                control={<Switch disabled />}
                label="Disabled"
              />
              <FormControlLabel
                control={<Switch defaultChecked color="secondary" />}
                label="Secondary"
              />
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>Sliders</Typography>
              <Box sx={{ px: 2 }}>
                <Typography gutterBottom>Basic Slider</Typography>
                <Slider
                  value={sliderValue}
                  onChange={(e, newValue) => setSliderValue(newValue)}
                  valueLabelDisplay="auto"
                />
                <Typography gutterBottom sx={{ mt: 2 }}>Range Slider</Typography>
                <Slider defaultValue={[20, 60]} valueLabelDisplay="auto" />
                <Typography gutterBottom sx={{ mt: 2 }}>Discrete Slider</Typography>
                <Slider defaultValue={30} step={10} marks min={0} max={100} valueLabelDisplay="auto" />
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>Rating</Typography>
              <Rating
                value={ratingValue}
                onChange={(e, newValue) => setRatingValue(newValue)}
                precision={0.5}
              />
              <Rating value={3} readOnly sx={{ ml: 2 }} />
              <Rating value={4} disabled sx={{ ml: 2 }} />
            </Grid>
          </Grid>
        </Paper>

        {/* Cards Section */}
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h5" gutterBottom sx={{ mb: 3, fontWeight: 'bold' }}>
            Cards
          </Typography>
          
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Card>
                <CardMedia
                  component="div"
                  sx={{ height: 140, bgcolor: '#1976d2' }}
                />
                <CardContent>
                  <Typography variant="h6" component="h2">
                    Card Title
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    This is a basic card with an image placeholder, content, and actions.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="h6" component="h2" gutterBottom>
                    Outlined Card
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    This card uses the outlined variant for a lighter appearance.
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <Chip label="Tag 1" size="small" sx={{ mr: 1 }} />
                    <Chip label="Tag 2" size="small" color="primary" />
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card sx={{ bgcolor: '#1976d2', color: 'white' }}>
                <CardContent>
                  <Typography variant="h6" component="h2" gutterBottom>
                    Colored Card
                  </Typography>
                  <Typography variant="body2">
                    This card has a custom background color to stand out.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" sx={{ color: 'white' }}>Action</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Paper>

        {/* Chips & Avatars */}
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h5" gutterBottom sx={{ mb: 3, fontWeight: 'bold' }}>
            Chips & Avatars
          </Typography>
          
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom>Chips</Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              <Chip label="Basic Chip" />
              <Chip label="Clickable" onClick={() => alert('Clicked!')} />
              <Chip label="Deletable" onDelete={() => alert('Deleted!')} />
              <Chip label="Primary" color="primary" />
              <Chip label="Secondary" color="secondary" />
              <Chip label="Success" color="success" />
              <Chip label="Error" color="error" />
              <Chip label="With Icon" icon={<FavoriteIcon />} />
              <Chip label="With Avatar" avatar={<Avatar>M</Avatar>} />
              <Chip label="Outlined" variant="outlined" />
            </Stack>
          </Box>

          <Box>
            <Typography variant="h6" gutterBottom>Avatars & Badges</Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar>A</Avatar>
              <Avatar sx={{ bgcolor: '#1976d2' }}>B</Avatar>
              <Avatar sx={{ bgcolor: '#2e7d32' }}>C</Avatar>
              <Avatar alt="User" src="/static/images/avatar/1.jpg" />
              <Avatar sx={{ width: 56, height: 56 }}>L</Avatar>
              
              <Badge badgeContent={4} color="primary">
                <MailIcon />
              </Badge>
              <Badge badgeContent={99} color="secondary">
                <NotificationsIcon />
              </Badge>
              <Badge variant="dot" color="error">
                <MailIcon />
              </Badge>
              <Badge badgeContent={4} color="primary">
                <Avatar>U</Avatar>
              </Badge>
            </Stack>
          </Box>
        </Paper>

        {/* Alerts & Progress */}
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h5" gutterBottom sx={{ mb: 3, fontWeight: 'bold' }}>
            Alerts & Progress Indicators
          </Typography>
          
          <Stack spacing={2}>
            <Alert severity="success">
              <AlertTitle>Success</AlertTitle>
              This is a success alert with a title!
            </Alert>
            <Alert severity="info">This is an info alert.</Alert>
            <Alert severity="warning">This is a warning alert.</Alert>
            <Alert severity="error">This is an error alert.</Alert>
            <Alert severity="info" variant="outlined">This is an outlined alert.</Alert>
            <Alert severity="success" variant="filled">This is a filled alert.</Alert>

            <Divider sx={{ my: 2 }} />

            <Typography variant="h6" gutterBottom>Progress Indicators</Typography>
            <LinearProgress />
            <LinearProgress color="secondary" />
            <LinearProgress variant="determinate" value={sliderValue} />
            
            <Box sx={{ display: 'flex', gap: 3, alignItems: 'center', mt: 2 }}>
              <CircularProgress />
              <CircularProgress color="secondary" />
              <CircularProgress variant="determinate" value={sliderValue} />
              <CircularProgress size={60} thickness={5} />
            </Box>
          </Stack>
        </Paper>

        {/* Lists */}
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h5" gutterBottom sx={{ mb: 3, fontWeight: 'bold' }}>
            Lists
          </Typography>
          
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>Basic List</Typography>
              <List>
                <ListItem>
                  <ListItemText primary="Item 1" secondary="Secondary text" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Item 2" secondary="Secondary text" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Item 3" secondary="Secondary text" />
                </ListItem>
              </List>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom>List with Icons</Typography>
              <List>
                <ListItemButton>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <SettingsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Settings" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <AccountCircleIcon />
                  </ListItemIcon>
                  <ListItemText primary="Profile" />
                </ListItemButton>
              </List>
            </Grid>
          </Grid>
        </Paper>

        {/* Accordions */}
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h5" gutterBottom sx={{ mb: 3, fontWeight: 'bold' }}>
            Accordions
          </Typography>
          
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                This is the content of the first accordion. You can put any content here.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Accordion 2</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                This is the content of the second accordion with different information.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Accordion 3</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                This is the content of the third accordion.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Paper>

        {/* Tabs */}
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h5" gutterBottom sx={{ mb: 3, fontWeight: 'bold' }}>
            Tabs
          </Typography>
          
          <Tabs value={tabValue} onChange={(e, newValue) => setTabValue(newValue)}>
            <Tab label="Tab 1" />
            <Tab label="Tab 2" />
            <Tab label="Tab 3" />
            <Tab label="Disabled" disabled />
          </Tabs>
          <Box sx={{ p: 3 }}>
            {tabValue === 0 && <Typography>Content for Tab 1</Typography>}
            {tabValue === 1 && <Typography>Content for Tab 2</Typography>}
            {tabValue === 2 && <Typography>Content for Tab 3</Typography>}
          </Box>
        </Paper>

        {/* Dialogs & Tooltips */}
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h5" gutterBottom sx={{ mb: 3, fontWeight: 'bold' }}>
            Dialogs, Snackbars & Tooltips
          </Typography>
          
          <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
            <Button variant="contained" onClick={() => setDialogOpen(true)}>
              Open Dialog
            </Button>
            <Button variant="contained" onClick={() => setSnackbarOpen(true)}>
              Open Snackbar
            </Button>
            <Tooltip title="This is a tooltip">
              <Button variant="outlined">Hover for Tooltip</Button>
            </Tooltip>
            <Tooltip title="Top placement" placement="top">
              <Button variant="outlined">Top</Button>
            </Tooltip>
            <Tooltip title="Right placement" placement="right">
              <Button variant="outlined">Right</Button>
            </Tooltip>
            <Tooltip title="Bottom placement" placement="bottom">
              <Button variant="outlined">Bottom</Button>
            </Tooltip>
            <Tooltip title="Left placement" placement="left">
              <Button variant="outlined">Left</Button>
            </Tooltip>
          </Stack>
        </Paper>

        {/* Dialog Component */}
        <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogContent>
            <Typography>
              This is a dialog. It can contain any content you want, including forms, text, or other components.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
            <Button variant="contained" onClick={() => setDialogOpen(false)}>
              Confirm
            </Button>
          </DialogActions>
        </Dialog>

        {/* Snackbar Component */}
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={() => setSnackbarOpen(false)}
          message="This is a snackbar notification"
        />

        {/* Charts Section */}
        <Paper sx={{ p: 3, mb: 3 }}>
          <Typography variant="h5" gutterBottom sx={{ mb: 3, fontWeight: 'bold' }}>
            Charts & Data Visualization
          </Typography>
          
          <Grid container spacing={3}>
            {/* Line Chart */}
            <Grid item xs={12} lg={6}>
              <Typography variant="h6" gutterBottom>Line Chart</Typography>
              <Paper variant="outlined" sx={{ p: 2, height: 300 }}>
                <LineChart
                  xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }]}
                  series={[
                    {
                      data: [2, 5.5, 2, 8.5, 1.5, 5, 3, 7, 4, 9],
                      label: 'Series A',
                      color: '#1976d2',
                    },
                    {
                      data: [3, 3, 4, 4, 5, 6, 7, 8, 8, 9],
                      label: 'Series B',
                      color: '#2e7d32',
                    },
                  ]}
                  height={250}
                />
              </Paper>
            </Grid>

            {/* Bar Chart */}
            <Grid item xs={12} lg={6}>
              <Typography variant="h6" gutterBottom>Bar Chart</Typography>
              <Paper variant="outlined" sx={{ p: 2, height: 300 }}>
                <BarChart
                  xAxis={[{ 
                    scaleType: 'band', 
                    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] 
                  }]}
                  series={[
                    { data: [4, 3, 5, 8, 7, 6], label: '2023', color: '#1976d2' },
                    { data: [5, 4, 6, 7, 9, 8], label: '2024', color: '#2e7d32' },
                  ]}
                  height={250}
                />
              </Paper>
            </Grid>

            {/* Pie Chart */}
            <Grid item xs={12} lg={6}>
              <Typography variant="h6" gutterBottom>Pie Chart</Typography>
              <Paper variant="outlined" sx={{ p: 2, height: 300, display: 'flex', justifyContent: 'center' }}>
                <PieChart
                  series={[
                    {
                      data: [
                        { id: 0, value: 30, label: 'Product A', color: '#1976d2' },
                        { id: 1, value: 25, label: 'Product B', color: '#2e7d32' },
                        { id: 2, value: 20, label: 'Product C', color: '#ed6c02' },
                        { id: 3, value: 15, label: 'Product D', color: '#9c27b0' },
                        { id: 4, value: 10, label: 'Product E', color: '#d32f2f' },
                      ],
                    },
                  ]}
                  width={400}
                  height={250}
                />
              </Paper>
            </Grid>

            {/* Donut Chart */}
            <Grid item xs={12} lg={6}>
              <Typography variant="h6" gutterBottom>Donut Chart</Typography>
              <Paper variant="outlined" sx={{ p: 2, height: 300, display: 'flex', justifyContent: 'center' }}>
                <PieChart
                  series={[
                    {
                      data: [
                        { id: 0, value: 35, label: 'Desktop', color: '#1976d2' },
                        { id: 1, value: 45, label: 'Mobile', color: '#2e7d32' },
                        { id: 2, value: 20, label: 'Tablet', color: '#ed6c02' },
                      ],
                      innerRadius: 60,
                      outerRadius: 100,
                      paddingAngle: 2,
                      cornerRadius: 5,
                    },
                  ]}
                  width={400}
                  height={250}
                />
              </Paper>
            </Grid>

            {/* Scatter Chart */}
            <Grid item xs={12} lg={6}>
              <Typography variant="h6" gutterBottom>Scatter Chart</Typography>
              <Paper variant="outlined" sx={{ p: 2, height: 300 }}>
                <ScatterChart
                  series={[
                    {
                      label: 'Series A',
                      data: [
                        { x: 1, y: 2, id: 1 },
                        { x: 2, y: 5.5, id: 2 },
                        { x: 3, y: 2, id: 3 },
                        { x: 4, y: 8.5, id: 4 },
                        { x: 5, y: 1.5, id: 5 },
                        { x: 6, y: 5, id: 6 },
                        { x: 7, y: 7, id: 7 },
                        { x: 8, y: 3, id: 8 },
                      ],
                      color: '#1976d2',
                    },
                    {
                      label: 'Series B',
                      data: [
                        { x: 1, y: 3, id: 1 },
                        { x: 2, y: 3, id: 2 },
                        { x: 3, y: 4, id: 3 },
                        { x: 4, y: 4, id: 4 },
                        { x: 5, y: 5, id: 5 },
                        { x: 6, y: 6, id: 6 },
                        { x: 7, y: 8, id: 7 },
                        { x: 8, y: 8, id: 8 },
                      ],
                      color: '#2e7d32',
                    },
                  ]}
                  height={250}
                />
              </Paper>
            </Grid>

            {/* Area Chart (Line with area) */}
            <Grid item xs={12} lg={6}>
              <Typography variant="h6" gutterBottom>Area Chart</Typography>
              <Paper variant="outlined" sx={{ p: 2, height: 300 }}>
                <LineChart
                  xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8] }]}
                  series={[
                    {
                      data: [30, 40, 35, 50, 45, 60, 55, 70],
                      label: 'Revenue',
                      area: true,
                      color: '#1976d2',
                    },
                    {
                      data: [20, 25, 30, 35, 40, 45, 50, 55],
                      label: 'Costs',
                      area: true,
                      color: '#d32f2f',
                    },
                  ]}
                  height={250}
                />
              </Paper>
            </Grid>

            {/* Stacked Bar Chart */}
            <Grid item xs={12} lg={6}>
              <Typography variant="h6" gutterBottom>Stacked Bar Chart</Typography>
              <Paper variant="outlined" sx={{ p: 2, height: 300 }}>
                <BarChart
                  xAxis={[{ 
                    scaleType: 'band', 
                    data: ['Q1', 'Q2', 'Q3', 'Q4'] 
                  }]}
                  series={[
                    { data: [40, 45, 50, 55], label: 'Sales', color: '#1976d2', stack: 'total' },
                    { data: [30, 35, 40, 45], label: 'Marketing', color: '#2e7d32', stack: 'total' },
                    { data: [20, 25, 30, 35], label: 'Support', color: '#ed6c02', stack: 'total' },
                  ]}
                  height={250}
                />
              </Paper>
            </Grid>

            {/* Sparkline Charts */}
            <Grid item xs={12} lg={6}>
              <Typography variant="h6" gutterBottom>Sparkline Charts</Typography>
              <Paper variant="outlined" sx={{ p: 2, height: 300 }}>
                <Stack spacing={2}>
                  <Box>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      Revenue Trend
                    </Typography>
                    <SparkLineChart
                      data={[5, 10, 5, 20, 15, 30, 25, 40, 35, 50]}
                      height={60}
                      color="#1976d2"
                    />
                  </Box>
                  <Box>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      User Growth
                    </Typography>
                    <SparkLineChart
                      data={[10, 15, 20, 18, 25, 30, 28, 35, 40, 45]}
                      height={60}
                      color="#2e7d32"
                    />
                  </Box>
                  <Box>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      Traffic
                    </Typography>
                    <SparkLineChart
                      data={[20, 25, 22, 30, 28, 35, 32, 40, 38, 45]}
                      height={60}
                      color="#ed6c02"
                    />
                  </Box>
                </Stack>
              </Paper>
            </Grid>

            {/* Gauge Charts */}
            <Grid item xs={12} lg={6}>
              <Typography variant="h6" gutterBottom>Gauge Charts</Typography>
              <Paper variant="outlined" sx={{ p: 2, height: 300 }}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Typography variant="body2" color="text.secondary" align="center" gutterBottom>
                      Performance
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                      <Gauge
                        width={150}
                        height={150}
                        value={75}
                        valueMin={0}
                        valueMax={100}
                        startAngle={-90}
                        endAngle={90}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" color="text.secondary" align="center" gutterBottom>
                      Completion
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                      <Gauge
                        width={150}
                        height={150}
                        value={85}
                        valueMin={0}
                        valueMax={100}
                        startAngle={0}
                        endAngle={360}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>

            {/* Horizontal Bar Chart */}
            <Grid item xs={12} lg={6}>
              <Typography variant="h6" gutterBottom>Horizontal Bar Chart</Typography>
              <Paper variant="outlined" sx={{ p: 2, height: 300 }}>
                <BarChart
                  layout="horizontal"
                  yAxis={[{ 
                    scaleType: 'band', 
                    data: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'] 
                  }]}
                  series={[
                    { data: [65, 59, 80, 81, 56], color: '#1976d2' },
                  ]}
                  height={250}
                />
              </Paper>
            </Grid>

            {/* Multi-Series Line Chart */}
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>Multi-Series Line Chart with Curve</Typography>
              <Paper variant="outlined" sx={{ p: 2 }}>
                <LineChart
                  xAxis={[{ 
                    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    scaleType: 'point',
                  }]}
                  series={[
                    {
                      data: [30, 35, 33, 40, 42, 45, 50, 48, 55, 58, 60, 65],
                      label: 'Revenue',
                      color: '#1976d2',
                      curve: 'natural',
                    },
                    {
                      data: [20, 25, 28, 30, 32, 35, 38, 40, 42, 45, 48, 50],
                      label: 'Profit',
                      color: '#2e7d32',
                      curve: 'natural',
                    },
                    {
                      data: [10, 12, 15, 18, 20, 22, 25, 28, 30, 33, 35, 38],
                      label: 'Expenses',
                      color: '#d32f2f',
                      curve: 'natural',
                    },
                  ]}
                  height={350}
                />
              </Paper>
            </Grid>
          </Grid>
        </Paper>

      </Container>
    </Box>
  )
}

export default KitchenSink

