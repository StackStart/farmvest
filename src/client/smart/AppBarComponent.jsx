import React from 'react';

import AppBarView from '../dumb/appbar';

class AppBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: true,
      anchorEl: null,
      left: false,
    };

    this.handleMenu = this.handleMenu.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  handleMenu(event) {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleClose() {
    this.setState({ anchorEl: null });
  }

  toggleDrawer(side) {
    this.setState({
      [side]: !this.state[side],
    });
  }

  render() {
    const { auth, anchorEl, left } = this.state;
    const open = Boolean(anchorEl);

    return (
      <AppBarView
        handleClose={this.handleClose}
        handleMenu={this.handleMenu}
        auth={auth}
        open={open}
        anchorEl={anchorEl}
        left={left}
        toggleDrawer={this.toggleDrawer}
      />
    );
  }
}

export default AppBar;
