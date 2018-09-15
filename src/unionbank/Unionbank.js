import axios from 'axios';

class Unionbank {
  async createNewAccount(username, password, accountName) {
    axios.defaults.baseURL = 'https://api-uat.unionbankph.com/partners/sb';
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios.defaults.headers.post['accept'] = 'application/json';
    axios.defaults.headers.post['x-ibm-client-id'] = 'a2bed6de-fa69-417a-bd39-edde532ff727';
    axios.defaults.headers.post['x-ibm-client-secret'] = 'gW1uV0dH8tG5tR0jN6bA8wN3uM1iC6dI4rT0tX4oT6qJ7fD3xC';

    const path = '/sandbox/v1/accounts';
    const data = JSON.stringify({
      username,
      password,
      account_name: accountName
    });
    const response = await axios.post(path, data);
    return response;
  }

  async getBalance() {
    axios.defaults.baseURL = 'https://api-uat.unionbankph.com/partners/sb';
    axios.defaults.headers.get['content-type'] = 'application/json';
    axios.defaults.headers.get['accept'] = 'application/json';
    axios.defaults.headers.get['x-ibm-client-id'] = 'a2bed6de-fa69-417a-bd39-edde532ff727';
    axios.defaults.headers.get['x-ibm-client-secret'] = 'gW1uV0dH8tG5tR0jN6bA8wN3uM1iC6dI4rT0tX4oT6qJ7fD3xC';
    const path = '/accounts/v1/balances';
    const auth = JSON.parse(window.localStorage.getItem('accessToken'));
    axios.defaults.headers.get['authorization'] = 'Bearer ' + auth.access_token;
    
    const response = await axios.get(path);
    return response.data[0].amount;
  }

  async transfer(recipient, amount) {
    console.log('Logging in...');
    axios.defaults.baseURL = '/';
    const token = JSON.parse(window.localStorage.accessToken);
    const response = await axios.get(`/unionbank/transfer/${recipient}/${amount}/${token.access_token}`);
    console.log(response.data);
  }

  async login(scope) {
    console.log('Logging in...');
    axios.defaults.baseURL = '/';
    axios.defaults.headers.get['Content-Type'] = 'application/json';
    axios.defaults.headers.get['accept'] = 'application/json';
    axios.defaults.headers.get['x-ibm-client-id'] = 'a2bed6de-fa69-417a-bd39-edde532ff727';
    axios.defaults.headers.get['x-ibm-client-secret'] = 'gW1uV0dH8tG5tR0jN6bA8wN3uM1iC6dI4rT0tX4oT6qJ7fD3xC';
    const response = await axios.get('/unionbank/login/' + scope);
    console.log(response.data);
    window.location.href = response.data.redirectTo;
  }

  async receiveAuth() {
    const accessToken = window.location.search.split('=')[1];
    window.localStorage.setItem('accessToken', accessToken);
    console.log('Access token set: ' + accessToken);
    await this.requestAuthorize();
  }

  async requestAuthorize() {
    console.log('Requesting token...');
    const response = await axios.get('/unionbank/authorize/' + window.localStorage.getItem('accessToken'));
    console.log(response.data);
    window.localStorage.setItem('accessToken', response.data);
    console.log(JSON.parse(window.localStorage.getItem('accessToken')));
  }
}

export default Unionbank;