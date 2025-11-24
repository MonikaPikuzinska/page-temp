import { useState } from 'react'
import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box
      component="main"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        px: 2,
      }}
    >
      <Card sx={{ width: '100%', maxWidth: 420, boxShadow: 4 }}>
        <CardContent>
          <Typography variant="h5" component="h1" gutterBottom>
            Vite + Material UI
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This starter uses Material UI components so you can focus on building
            product features faster.
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center" sx={{ mt: 3 }}>
            <Button
              variant="contained"
              onClick={() => setCount((prev) => prev + 1)}
            >
              Increment
            </Button>
            <Typography variant="h6" component="span">
              {count}
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  )
}

export default App
