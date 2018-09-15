import React from 'react';
import PropTypes from 'prop-types';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';

const styles = {
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C3DBAB'
  },
  innerContainer: {
    width: '60%',
    height: '60%',
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
  }
};

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello World'
    };
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.innerContainer}>
          <div style={styles.row}>
            <h2>
              Welcome to
            </h2>
            <h1>
              Farmvest
            </h1>
          </div>
          <div>
            <h3>
              Choose your account:
            </h3>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
            <Button variant="extendedFab" aria-label="Edit" style={styles.paddingData}>
              <AccountCircle fontSize={60} />
              Farm Owner
            </Button>
            <Button variant="extendedFab" aria-label="Edit" style={styles.paddingData}>
              <AccountCircle fontSize={60} />
              Investor
            </Button>
            <Button variant="extendedFab" aria-label="Edit" style={styles.paddingData}>
              <AccountCircle fontSize={60} />
              Guild
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

Homepage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Homepage;