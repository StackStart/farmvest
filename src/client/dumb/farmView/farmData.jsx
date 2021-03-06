
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography, Grid, Button, CardActions } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Unionbank from '../../../unionbank/Unionbank';
const unionbank = new Unionbank();
    
const styles = (theme) => ({
  image: {
    width: '90%',
    height: '50%',
  },
  card: {
    height: '50%',
    minWidth: 275,
    padding: '2%',
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
  button: {
    margin: theme.spacing.unit * 3,
    backgroundColor: '#FF6900',
  },
});
const FarmData = ({ classes }) => (
  <React.Fragment>
    <Card className={classes.card}>
      <Typography variant="headline" component="h1" className={classes.title}>
            Farm Information
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={6}>
          <CardContent>
            <Link to="/">	
              <Typography variant="headline" component="h3">
            		Juan Dela Cruz
              </Typography>
            </Link>
            <Typography className={classes.pos}>
            134 Palayan Street, Brgy. Sitio Mais, Jarow, Iloilo City
            </Typography>
            <Typography component="p">
            Other Information
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" className={classes.button} onClick={() => {window.location.href = '/investment';}} >
        			See Listing
            </Button>
            <Button variant="contained" className={classes.button} onClick={async () => {
              window.localStorage.setItem('action', 'distribute');
              await unionbank.login('transfers');
            }} >
        			Distribute Funds
            </Button>
          </CardActions>
        </Grid>
        <Grid item xs={6}>
          <CardContent>
            <Typography variant="headline" component="h3">
            Farm Location
            </Typography>
            <img className={classes.image} src="/images/sample4.jpg" alt="Sample Image" />
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  </React.Fragment>
);
    
export default withStyles(styles)(FarmData);