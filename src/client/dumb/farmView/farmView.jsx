import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import FarmDetails from './farmData';
import ExpenseTable from './expenseTable';
import Funds from './fundsView';
import InvestorTable from './investorList';

const styles = {
  root: {
    flexGrow: 1,
    padding: '10px',
  },
};

const FundsView = ({ classes, rows }) => (
  <React.Fragment>
    <Grid container className={classes.root} spacing={8}>
      <Grid item xs={6}>
        <FarmDetails />
      </Grid>
      <Grid item xs={6}>
        <InvestorTable rows={rows} />
      </Grid>
      <Grid item xs={6}>
        <Funds />
      </Grid>
      <Grid item xs={6}>
        <ExpenseTable rows={rows}/>
      </Grid>
    </Grid>
  </React.Fragment>
);

export default withStyles(styles)(FundsView);