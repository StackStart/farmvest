import React from 'react';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import Unionbank from '../../unionbank/Unionbank';
const unionBank = new Unionbank();


const styles = {
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    marginTop: '10%'
  },
  outerLayer: {
    display: 'flex'
  },
  innerContainer: {
    width: '60%',
    height: '50%',
    top: '2%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
    margin: '10px',
    alignItems: 'center',
    padding: '5%',
    flexDirection: 'column'
  },
  paddingData: {
    padding: '8px',
    margin: '8px'
  },
  accountsDiv: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  layerTop: {
    top: '2%',
  }
};

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.navigateTo = this.navigateTo.bind(this);
  }

  navigateTo(path) {
    this.props.history.push(`/${path}`);
  }
  render() {
    return (
      <div style={styles.container}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Grid container justify='center' style={{ alignItems: 'center', justifyContent: 'center', paddingBottom: '8%' }} direction='column'>
              <Grid item>
                <img src='/images/logo.png' alt='Logo sample' />
              </Grid>
              <Grid item>
                <h5>
                  your farm investment
                </h5>
              </Grid>
              <Grid item style={{padding: '3%'}}>
                <Grid container direction='row' justify='center' style={{ alignItems: 'center' }}>
                  <Grid item lg={3} xs={4}>
                    <Button variant="extendedFab" style={styles.paddingData} onClick={() => this.navigateTo('farms')}>
                      <AccountCircle />
                      Investor
                    </Button>
                  </Grid>
                  <Grid item lg={3} xs={4}>
                    <Button variant="extendedFab" style={styles.paddingData} onClick={async () => {
                      window.localStorage.setItem('action', 'balance');
                      await unionBank.login('account_balances');
                    }} >
                      <AccountCircle />
                      Farm Owner
                    </Button>
                  </Grid>
                  <Grid lg={6}item>
                    <Button variant="extendedFab" style={styles.paddingData} onClick={() => this.navigateTo('cooperative/farms')}>
                      <AccountCircle />
                      Cooperation Guild
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withRouter(Homepage);
