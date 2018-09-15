import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { SwipeableDrawer, List, Divider } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { inject, observer } from 'mobx-react';

const styles = {
  list: {
    width: 250,
  },
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const MenuAppBar = ({ classes, uiStore: { handleClose, handleMenu, auth, open, anchorEl, left, toggleDrawer } }) => (
  <div className={classes.root}>
    <SwipeableDrawer
      open={left}
      onClose={() => toggleDrawer('left')}
      onOpen={() => toggleDrawer('left')}
    >
      <div
        tabIndex={0}
        role="button"
        onClick={() => toggleDrawer('left')}
        onKeyDown={() => toggleDrawer('left')}
      >
        <div className={classes.list}>
          <List>Hello</List>
          <Divider />
          <List>Hello too</List>
        </div>
      </div>
    </SwipeableDrawer>
    <AppBar position="static">
      <Toolbar>
        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={() => toggleDrawer('left')}>
          <MenuIcon />
        </IconButton>
        <Typography variant="title" color="inherit" className={classes.grow}>
                StackStart
        </Typography>
        {auth && (
          <div>
            <IconButton
              aria-owns={open ? 'menu-appbar' : null}
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
          </div>
        )}
      </Toolbar>
    </AppBar>
  </div>
);

export default withStyles(styles)(inject('uiStore')(observer(MenuAppBar)));
