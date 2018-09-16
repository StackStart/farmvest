import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import Unionbank from '../../unionbank/Unionbank';
const unionbank = new Unionbank();

class BalanceView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 0
    };
  }

  async componentDidMount() {
    const balance = await unionbank.getBalance();
    this.setState({
      balance
    });
  }

  render() {
    return (
      <Grid container style={{marginTop: '100px'}}>
        <Grid item xs={12}>
          <Grid container justify="center">
            <Paper style={{padding: '25px'}}>
                Welcome, Juan Dela Cruz!<br />
                Your balance is: <b>₱{this.state.balance}</b>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default BalanceView;