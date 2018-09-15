import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import {CardActionArea} from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { LinearProgress, Grid } from '@material-ui/core';

const styles = {
  card: {
    margin: '0 auto',
    // maxWidth: 345,
    width: '100%',
  },
  media: {
    // ⚠️ object-fit is not supported by IE11.
    objectFit: 'cover',
    height: '80%',
    position: 'relative',
  },
  div: {
    position: 'absolute',
    top: '45%',
    zIndex: 100000,
    width: '100%',
    height: '15%',
    backgroundColor: '#E55300',
    opacity: 0.7,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  pos: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  root: {
    flexGrow: 1,
    width: '90%'
  },
};

const CheckFarm = ({ classes }) => (
  <React.Fragment>
    <Card className={classes.card}>
      {/* <CardActionArea> */}
      <CardMedia
        component="img"
        className={classes.media}
        image="/images/sample1.jpg"
        title="Sample Farm"
      />
      <div className={classes.div}>
        <Typography variant="headline" component="h1" className={classes.title}>
            Farm Name
        </Typography>
        <Typography className={classes.pos}>
            Farm type
        </Typography>
      </div>
      <CardContent>
        <Grid container spacing={16}>
          <Grid item xs={6}>
            <div className={classes.root}>
              <h3>Duration:</h3>
              <br/>
              <LinearProgress variant="determinate" value={50} />
            </div>
            <Typography component="p">
            Duration: 105-120 days
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <br/>
            <Typography component="p">
                60% funded from 5 investor
              <br/>
                Expected growth: 47%
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      {/* </CardActionArea> */}
      <CardActions>
        <Button size="small" color="primary">
          Invest
        </Button>
        <Button size="small" color="primary">
          View Other Farm
        </Button>
      </CardActions>
    </Card>
  </React.Fragment>
);


export default withStyles(styles)(CheckFarm);