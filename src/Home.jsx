import { Box, Container, Typography, Stack } from '@mui/material'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <Box sx={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      bgcolor: 'white'
    }}>
      <Container maxWidth="sm">
        <Typography 
          variant="h3" 
          component="h1" 
          align="center" 
          sx={{ mb: 6, fontWeight: 300, color: '#333' }}
        >
          MUI Playground
        </Typography>

        <Stack spacing={2} alignItems="center">
          <Link 
            to="/kitchen-sink" 
            style={{ 
              textDecoration: 'none', 
              color: '#1976d2',
              fontSize: '1.25rem',
              transition: 'opacity 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.opacity = '0.7'}
            onMouseLeave={(e) => e.target.style.opacity = '1'}
          >
            Kitchen Sink
          </Link>
          
          <Link 
            to="/root-cause" 
            style={{ 
              textDecoration: 'none', 
              color: '#1976d2',
              fontSize: '1.25rem',
              transition: 'opacity 0.2s'
            }}
            onMouseEnter={(e) => e.target.style.opacity = '0.7'}
            onMouseLeave={(e) => e.target.style.opacity = '1'}
          >
            Root Cause
          </Link>
        </Stack>
      </Container>
    </Box>
  )
}

export default Home

