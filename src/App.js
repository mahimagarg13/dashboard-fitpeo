import React from 'react';
import { CssBaseline, Box } from '@mui/material';
import Header from './components/Header';
import Tabs from './components/Tabs';

const App = () => {
  return (
    <Box sx={{ display: 'flex',flexDirection:'column' ,height:'100vh'}}>
      <CssBaseline />
      <Header/>
      <Tabs/>
    </Box>
  );
};

export default App;