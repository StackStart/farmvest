import React from 'react';
import UnionBank from '../../unionbank/Unionbank';

class UnionBankPlayground extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello World'
    };
    this.execute();
  }

  execute() {
    const unionBank = new UnionBank();
    unionBank.getBalance();
  }

  render() {
    return (
      <div>
        {this.state.message}
      </div>
    );
  }
}

export default UnionBankPlayground;