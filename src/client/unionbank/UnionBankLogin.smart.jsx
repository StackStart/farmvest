import React from 'react';
import UnionBank from '../../unionbank/Unionbank';

class UnionBankLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello World'
    };
    this.execute();
  }

  async execute() {
    const unionBank = new UnionBank();
    await unionBank.login('account_balances');
    window.localStorage.setItem('action', 'balance');
  }

  render() {
    return (
      <div>
        {this.state.message}
      </div>
    );
  }
}

export default UnionBankLogin;