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
import Login from './smart/LoginPage.smart';
import FarmList from './smart/FarmList';
import UserProfile from './smart/Userpage.smart';


import AppBar from './smart/AppBarComponent';
import FarmView from './smart/FarmView';


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
            <Route exact path="/login" component={Login} />
            <Route exact path="/user:id" component={UserProfile} />
            <Route exact path="/farms" component={FarmList} />
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
