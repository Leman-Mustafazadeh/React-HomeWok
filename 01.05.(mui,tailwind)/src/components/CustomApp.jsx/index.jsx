import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const CustomAppBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          My Music App
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;