import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Slide, Grid, LinearProgress, DialogContentText, FormControl, InputLabel, Input, InputAdornment} from '@material-ui/core';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  }
});

const InvestModal = ({ classes, handleClose, open, amount, handleChange}) => (
  <div>
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
      style={{ zIndex: 20 }}
    >
      <DialogTitle id="alert-dialog-slide-title">
        {'Investment'}
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={16}>
          <Grid item xs={6}>
            <LinearProgress variant="determinate" value={50} />
            <br/>
            <br/>
            <DialogContentText>
              <b>
                Production Cost: Php xxxxx
                Expected Profit: Php xxxxx
                Percentage Growth: xx.xx %
              </b>
            </DialogContentText>
          </Grid>
          <Grid item xs={6}>
            60% invested from investors
            <br/>
            <br/>
            <DialogContentText>
              <b>

                Handled By: xxxxxxx
                Duration: xx days
              </b>
            </DialogContentText>
          </Grid>
        </Grid>
        <br/>
        <FormControl fullWidth className={classes.margin}>
          <InputLabel htmlFor="adornment-amount">Amount</InputLabel>
          <Input
            id="adornment-amount"
            value={amount}
            onChange={() => handleChange('amount')}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>
        <DialogContentText>
          <b>
            Expected funds value after harvest: Php xxx.xx
          </b>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
              Cancel
        </Button>
        <Button onClick={handleClose} color="primary">
              Invest
        </Button>
      </DialogActions>
    </Dialog>
  </div>
);

export default withStyles(styles)(InvestModal);