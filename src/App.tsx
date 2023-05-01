import './App.css';
import { Box, ThemeProvider, Typography } from '@mui/material';
import { Header } from './components/Header';
import { Layout } from './components/Layout';
import { appTheme } from './config/appTheme';
import { Route, Routes } from 'react-router-dom';
import { CreateCategory } from './features/categories/CreateCategory';
import { EditCategory } from './features/categories/EditCategory';
import { ListCategory } from './features/categories/ListCategory';


function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Box
        component="main"
        sx={{
          height: '100vh',
          backgroundColor: theme => theme.palette.grey[900]
        }}
      >
        <Header/>
        <Layout>
          <h1>Welcome to react Router!</h1>
          <Routes>
            <Route path={'/'} element={<ListCategory />}/>
            <Route path={'/categories'} element={<ListCategory />}/>
            <Route path={'/categories/create'} element={<CreateCategory />}/>
            <Route path={'/categories/edit/:id'} element={<EditCategory />}/>
            <Route 
              path='*'
              element={
                <Box sx={{ color: 'white' }}>
                  <Typography variant='h1'>404</Typography>
                  <Typography variant='h2'>Page not found</Typography>
                </Box>
              }
            />
          </Routes>
        </Layout>
      </Box>
    </ThemeProvider>
  );
}

export default App;
