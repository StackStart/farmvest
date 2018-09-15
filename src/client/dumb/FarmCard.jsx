import React from 'react';
import { Card, Grid, CardMedia, CardActions, CardContent, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%',
  },
  cardContent: {
    flexGrow: 1,
  },
};

const FarmCard = props => {
  const { imgUrls, address, name, cropType, description } = props.farm;
  return (
    <Grid style={{height: '40%'}} item sm={6} md={4} lg={3}>
      <CardActions onClick={props.handleFarm}>
        <Card style={styles.card}>
          <CardMedia style={styles.cardMedia} image={imgUrls[0]} title="Farm image" />
          <CardContent style={styles.cardContent}>
            <Typography gutterBottom variant="headline" component="h4">
              {`${name} (${cropType})`}
            </Typography>
            <Typography component="p">
              {address}
            </Typography>
            <Typography component="p">
              {description}
            </Typography>
          </CardContent>
        </Card>
      </CardActions>
    </Grid>
  );
};

export default FarmCard;