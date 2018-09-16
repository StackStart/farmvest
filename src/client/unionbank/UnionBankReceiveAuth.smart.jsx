import React from 'react';
import UnionBank from '../../unionbank/Unionbank';
import CircularProgress from '@material-ui/core/CircularProgress';
const unionBank = new UnionBank();

class UnionBankReceiveAuth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello World'
    };
    this.execute();
  }

  async execute() {
    await unionBank.receiveAuth();

    const action = window.localStorage.getItem('action');
    if (action === 'invest') {
      const amount = window.localStorage.getItem('amount');
      const recipient = window.localStorage.getItem('recipient');
      await unionBank.transfer(recipient, amount);
      window.localStorage.removeItem('amount');
      window.localStorage.removeItem('recipient');
      window.localStorage.removeItem('action');
      alert('Transfer successful');
      window.location.href = '/farms';
    } else if (action === 'balance') {
      window.localStorage.removeItem('action');
      window.location.href = '/user/balance';
    } else if (action === 'distribute') {
      window.location.href = '/investments/results';
    } else {
      alert('Login Success!');
    }
  }

  render() {
    return (
      <div>
        <center>
          <CircularProgress size={50} />
        </center>
      </div>
    );
  }
}

export default UnionBankReceiveAuth;