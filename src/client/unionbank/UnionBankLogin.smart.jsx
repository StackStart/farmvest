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

  execute() {
    const unionBank = new UnionBank();
    unionBank.login();
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