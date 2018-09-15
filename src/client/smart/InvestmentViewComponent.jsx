import React from 'react';

import InvestmentView from '../dumb/Investment/investmentView';

class InvestmentViewComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      amount: ''
    };

    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(prop) {
      return (event) => {
    this.setState({ [prop]: event.target.value });
  }

  handleClickOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  render() {
    const {open, amount} = this.state;
    return (
      <InvestmentView 
        open={open}
        amount={amount}
        handleClickOpen={this.handleClickOpen}
        handleClose={this.handleClose}
        handleChange={this.handleChange}
      />
    );
  }
}

export default InvestmentViewComponent;