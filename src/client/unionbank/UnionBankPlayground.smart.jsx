import React from 'react';
import UnionBank from '../../unionbank/Unionbank';

class UnionBankPlayground extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello World',
      balance: 0
    };
    this.execute();
  }

  async execute() {
    const unionBank = new UnionBank();
    const balance = await unionBank.getBalance();
    this.setState({
      balance
    });
  }

  render() {
    return (
      <div style={{margin: '100px'}}>
        Balance: {this.state.balance}
      </div>
    );
  }
}

export default UnionBankPlayground;