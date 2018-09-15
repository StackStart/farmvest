/* global document */

import 'typeface-roboto';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import Homepage from './smart/Homepage.smart';
import AppBar from './smart/AppBarComponent';
import FarmView from './smart/FarmView';

// import './client';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#0d94a3',
      dark: '#084c61',
      main: '#050f42',
      contrastText: '#ffd0aa',
    },
    secondary: {
      light: '#ff867c',
      main: '#ef5350',
      dark: '#b61827',
      contrastText: '#000000',
    },
  },
});

const Index = () => (
  <MuiThemeProvider theme={theme}>
    <Router>
      <div>
        <Grid container style={{flexGrow: 1}}>
          <Grid item xs={12}>
            <AppBar />  
          </Grid>
          <Grid item xs={12}>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/farm" component={FarmView} />
          </Grid>
        </Grid>
      </div>
    </Router>
  </MuiThemeProvider>
);

ReactDOM.render(
  <Index />, document.getElementById('app'));