import React from 'react';
import './App.css';
import { Box, createTheme, ThemeProvider } from '@mui/material';
import { Header } from './components/Header';


const theme = createTheme({})


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        component="main"
        sx={{
          height: '100vh',
          bgcolor: '#000'
        }}
      >
        <Header />
      </Box>
    </ThemeProvider>
  );
}

export default App;
