/* global document */

import 'typeface-roboto';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'mobx-react';

import { RootStore, UIStore } from './stores';
import Homepage from './smart/Homepage.smart';
import AppBar from './dumb/appbar';


// import './client';

const rootStore = new RootStore();
const uiStore = new UIStore(rootStore);

const stores = {
  rootStore,
  uiStore
};

rootStore.setStore(stores);

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '  #0d94a3',
      main: '#084c61',
      dark: ' #050f42',
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
          <Grid item xs={6}>
            <Route exact path="/" component={Homepage} />
          </Grid>
        </Grid>
      </div>
    </Router>
  </MuiThemeProvider>
);

ReactDOM.render(
  <Provider {...stores}>
    <Index />
  </Provider>,
  document.getElementById('app'));
