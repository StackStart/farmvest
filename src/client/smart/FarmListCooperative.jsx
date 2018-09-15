import React, { Component } from 'react';
import { Typography, Grid } from '@material-ui/core';
import FarmCard from '../dumb/FarmCard';
import farmData from '../database/farms';

const styles = {
  layout: {
    width:'auto',
    marginLeft: '5%',
    marginRight: '5%',
    padding: '15px',
  },
};

class FarmListCooperative extends Component {

  constructor(props) {
    super(props);
    this.state = {
      farms: farmData
    };
  }

  componentDidMount() {
    const farms = farmData;
    this.setState({ farms });
  }

  handleFarm() {
    window.location.href = '/farm';
  }

  render() {
    const { farms } = this.state;
    return (
      <div>
        <Typography variant="display3" align="center" color="textPrimary" gutterBottom>
          List of Farms
        </Typography>
        <div style={styles.layout}>
          <Grid container spacing={40}>
            {
              farms.map(farm => <FarmCard key={farm.id} farm={farm} handleFarm={this.handleFarm} />)
            }
          </Grid>
        </div>
      </div>
    );
  }
}

export default FarmListCooperative;