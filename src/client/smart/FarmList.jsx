import React, { Component } from 'react';
import { Typography, Grid } from '@material-ui/core';
import FarmCard from '../dumb/FarmCard';

const styles = {
  layout: {
    width:'auto',
    marginLeft: '5%',
    marginRight: '5%',
    padding: '15px',
  },
};

class FarmList extends Component {

  constructor() {
    super();
    this.state = {
      farms: []
    };
  }

  componentDidMount() {
    const farms = [
      {
        id: '1',
        name: 'Farmvest',
        cropType: 'Rice',
        imgUrls: ['https://images.pexels.com/photos/158179/lake-constance-sheep-pasture-sheep-blue-158179.jpeg?auto=compress&cs=tinysrgb&h=350'],
        description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet'
      },
      {
        id: '2',
        name: 'Farmville',
        cropType: 'Rice',
        imgUrls: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCfxm4gTiTR6UH66my6oWg88S08hlSPkyvU7TSQq42jQRbafqx'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales neque sapien'
      },
      {
        id: '3',
        name: 'Farmville',
        cropType: 'Rice',
        imgUrls: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCfxm4gTiTR6UH66my6oWg88S08hlSPkyvU7TSQq42jQRbafqx'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales neque sapien'
      },
      {
        id: '4',
        name: 'Farmville',
        cropType: 'Rice',
        imgUrls: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCfxm4gTiTR6UH66my6oWg88S08hlSPkyvU7TSQq42jQRbafqx'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales neque sapien'
      },
      {
        id: '5',
        name: 'Farmville',
        cropType: 'Rice',
        imgUrls: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCfxm4gTiTR6UH66my6oWg88S08hlSPkyvU7TSQq42jQRbafqx'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales neque sapien'
      },
      {
        id: '6',
        name: 'Farmville',
        cropType: 'Rice',
        imgUrls: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCfxm4gTiTR6UH66my6oWg88S08hlSPkyvU7TSQq42jQRbafqx'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales neque sapien'
      },
      {
        id: '7',
        name: 'Farmville',
        cropType: 'Rice',
        imgUrls: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCfxm4gTiTR6UH66my6oWg88S08hlSPkyvU7TSQq42jQRbafqx'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales neque sapien'
      },
      {
        id: '8',
        name: 'Farmville',
        cropType: 'Rice',
        imgUrls: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCfxm4gTiTR6UH66my6oWg88S08hlSPkyvU7TSQq42jQRbafqx'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales neque sapien'
      }
    ];
    this.setState({ farms });
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
              farms.map(farm => <FarmCard key={farm.id} farm={farm} />)
            }
          </Grid>
        </div>
      </div>
    );
  }
}

export default FarmList;