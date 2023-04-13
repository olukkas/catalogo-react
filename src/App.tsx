import React from 'react';
import './App.css';
import { Box, ThemeProvider } from '@mui/material';
import { Header } from './components/Header';
import { Layout } from './components/Layout';
import { appTheme } from './config/appTheme';



function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Box
        component="main"
        sx={{height: '100vh', backgroundColor: '#000'}}>
        <Header />
        <Layout>
          <h1>Olá mundo</h1>
        </Layout>
      </Box>
    </ThemeProvider>
  );
}

export default App;
