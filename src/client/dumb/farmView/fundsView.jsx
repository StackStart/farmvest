
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Paper, Grid } from '@material-ui/core';
    
const styles =  {
  image: {
    width: '100%',
  },
  card: {
    minWidth: 275,
    padding: '5%',
    height: '50%',
  },
  title: {
    marginBottom: 16,
    fontWeight: 'bold',
    fontSize: 36,
  },
  pos: {
    marginBottom: 12,
    fontWeight: 'bold',
    fontSize: 16,
  },
};

const FarmData = ({ classes }) => (
  <React.Fragment>
    <Paper className={classes.card}>
      <Typography variant="headline" component="h1" className={classes.title}>
            Funds Distribution
      </Typography>
      <br/>
      <Grid container spacing={16}>
        <Grid item xs={6}>
          <Paper className={classes.image}>
            <img src="/images/sample3.jpg" alt="Sample Chart" />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.image}>
            <img src="/images/sample5.jpg" alt="Sample Chart" width="100%"/>
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  </React.Fragment>
);
    
export default withStyles(styles)(FarmData);