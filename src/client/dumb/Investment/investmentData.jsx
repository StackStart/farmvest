import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Paper, Grid, Typography} from '@material-ui/core';

const styles = {
  title: {
    marginBottom: 16,
    fontWeight: 'bold',
    fontSize: 16,
  },
  pos: {
    marginBottom: 12,
    fontWeight: 'bold',
    fontSize: 14,
  },
  div: {
    marginLeft: '60%',
    marginTop: '15%'
  },
  image2: {
    marginLeft: '60%',
    width: '40%',
  },
  image: {
    marginLeft: '5%',
  },
  div2: {
    marginLeft: '5%',
    marginTop: '10%',
    backgoundColor: 'red',
  }
};

const InvestmentData = ({classes}) => (
  <React.Fragment>
    <Paper>
      <Grid container spacing={16}>
        <Grid item xs={6}>
          <div className={classes.div}>
            <Typography variant="headline" component="h1" className={classes.title}>
            Farm Owner Name
            </Typography>
            <Typography className={classes.pos}>
            Rice Crops
              <br/>
            Address: xxx xx.,xxx,xxx
              <br/>
            xx hectares
            </Typography>
          </div>
        </Grid>
        <Grid item xs={6}>
          <img src='/images/sample4.jpg' alt="Sample map" className={classes.image}/>
        </Grid>
        <Grid item xs={6}>
          <img src='/images/sample6.jpg' alt="Sample map" className={classes.image2}/>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.div2}>
            <Typography variant="headline" component="h1" className={classes.title}>
            Farm Owner Name
            </Typography>
            <Typography className={classes.pos}>
            Rice Crops
              <br/>
            Address: xxx xx.,xxx,xxx
              <br/>
            xx hectares
            </Typography>
          </div>
        </Grid>
      </Grid>

    </Paper>
  </React.Fragment>
);

export default withStyles(styles)(InvestmentData);