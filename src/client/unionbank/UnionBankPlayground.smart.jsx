import React from 'react';
import UnionBank from '../../unionbank/Unionbank';
import TextField from '@material-ui/core/TextField';
import { Button, Divider } from '@material-ui/core';

class UnionBankPlayground extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello World',
      balance: 0,
      form: {
        amount: '',
        to: ''
      }
    };
    this.onChange = this.onChange.bind(this);
    this.sendPayment = this.sendPayment.bind(this);
    this.execute();
  }

  async execute() {
    const unionBank = new UnionBank();
    const balance = await unionBank.getBalance();
    this.setState({
      balance
    });
  }

  async getToken(type) {
    const unionBank = new UnionBank();
    unionBank.login(type);
  }

  onChange(evt) {
    const form = this.state.form;
    form[evt.target.name] = evt.target.value;
    this.setState({
      form
    });
  }

  async sendPayment() {
    const unionBank = new UnionBank();
    const response = await unionBank.transfer(this.state.form.to, this.state.form.amount);
    console.log(response);
  }

  render() {
    return (
      <div style={{margin: '100px'}}>
        <div>
          Balance: {this.state.balance}
        </div>
        <Divider style={{margin: '10px'}} />
        <div>
          <Button onClick={() => {this.getToken('transfers');}} variant="outlined">Get access token for payment</Button><br />
          Amount: <TextField name='amount' onChange={this.onChange}></TextField><br />
          To: <TextField name='to' onChange={this.onChange}></TextField><br />
          <Button onClick={this.sendPayment} variant="outlined">Send Payment</Button>
        </div>
      </div>
    );
  }
}

export default UnionBankPlayground;