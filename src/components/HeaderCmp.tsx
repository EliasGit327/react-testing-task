import React from 'react';
import { AppBar, Button, IconButton, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

const HeaderCmp = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            TestingApp
          </Typography>

          <div style={{flex: 1}}></div>

          <Button color="inherit">Something</Button>
        </Toolbar>
      </AppBar>
    </>
  )
};

export default HeaderCmp;
