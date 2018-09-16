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
    marginTop: '7.5%'
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
            Juan dela Cruz
            </Typography>
            <Typography className={classes.pos}>
            Rice Crops
              <br/>
            Address: Brgy. Tabuc Suba, Jaro, Iloilo City
              <br/>
            3 hectares
              <br/>
            Est nulla dolore dolore nulla sunt aliquip non laboris. Consequat tempor cillum dolor cupidatat officia.
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
            Meet the farmer
            </Typography>
            <Typography style={{ marginRight: '30%'}} className={classes.pos}>
              {/* Rice Crops
              <br/>
            Address: xxx xx.,xxx,xxx
              <br/>
            xx hectares */}
              {/* <br/> */}
            Veniam quis ut consequat qui cupidatat Lorem sit. Dolore enim anim nisi dolore. Voluptate sunt cillum id quis dolor qui tempor ad voluptate fugiat excepteur veniam. Laboris dolor sint tempor do et.
            </Typography>
          </div>
        </Grid>
      </Grid>

    </Paper>
  </React.Fragment>
);

export default withStyles(styles)(InvestmentData);