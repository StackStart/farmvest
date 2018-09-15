/* eslint-disable no-console */
require('babel-core/register');
require('babel-polyfill');

const path = require('path');
const favicon = require('serve-favicon');
const compress = require('compression');
const helmet = require('helmet');
const cors = require('cors');
const logger = require('winston');

const feathers = require('@feathersjs/feathers');
const configuration = require('@feathersjs/configuration');
const express = require('@feathersjs/express');
const socketio = require('@feathersjs/socketio');


const middleware = require('./middleware');
const services = require('./services');
const appHooks = require('./app.hooks');
const channels = require('./channels');

const axios = require('axios');
const { exec } = require('child_process');

const mongodb = require('./mongodb');

const app = express(feathers());

// Load app configuration
app.configure(configuration());
// Enable security, CORS, compression, favicon and body parsing
app.use(helmet());
app.use(cors());
app.use(compress());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(favicon(path.join(app.get('public'), 'favicon.ico')));

// Host the public folder
app.use('/', express.static(path.resolve('public')));

app.get('/unionbank', (req, res) => {
  console.log(req);
  res.send('OK');
});

app.get('/unionbank/login/:scope', async (req, res) => {
  console.log('Retrieving unionbank login URI');
  const scope = req.params.scope;
  axios.defaults.baseURL = 'https://api-uat.unionbankph.com/partners/sb';
  axios.defaults.headers.post['Content-Type'] = 'text/html';
  axios.defaults.headers.post['accept'] = 'application/x-www-form-urlencoded';
  axios.defaults.headers.post['x-ibm-client-id'] = 'a2bed6de-fa69-417a-bd39-edde532ff727';
  axios.defaults.headers.post['x-ibm-client-secret'] = 'gW1uV0dH8tG5tR0jN6bA8wN3uM1iC6dI4rT0tX4oT6qJ7fD3xC';
  const path = `/convergent/v1/oauth2/authorize?client_id=a2bed6de-fa69-417a-bd39-edde532ff727&response_type=code&scope=${scope}&redirect_uri=http%3A%2F%2Flocalhost%3A3030%2Funionbank-receive-auth`;
  const response = await axios.get(path);
  const redirectURI = response.request.res.req.agent.protocol + '//' + response.request.res.connection._host + response.request.path;
  res.json({
    redirectTo: redirectURI
  });
});

app.get('/unionbank/authorize/:code', (req, res) => {
  /**
    * Resorted to using cURL because request() and axios() failed to work.
    * Getting { "error":"invalid_grant" } consistently. #hack
   */
  const code = req.params.code;

  const command = `curl https://api-uat.unionbankph.com/partners/sb/convergent/v1/oauth2/token -H "accept: application/json" -H "content-type: application/x-www-form-urlencoded" -H "x-ibm-client-id: a2bed6de-fa69-417a-bd39-edde532ff727" -H "x-ibm-client-secret: gW1uV0dH8tG5tR0jN6bA8wN3uM1iC6dI4rT0tX4oT6qJ7fD3xC" -X POST -d "grant_type=authorization_code&client_id=a2bed6de-fa69-417a-bd39-edde532ff727&redirect_uri=http%3A%2F%2Flocalhost%3A3030%2Funionbank-receive-auth&code=${code}"`;
  
  exec(command, (err, stdout) => {
    if (err) {
      console.log(err);
      res.send();
      return;
    }

    console.log(`${stdout}`);
    res.json(stdout);
  });
});

app.get('/unionbank/transfer/:to/:amount/:token', (req, res) => {
  const to = req.params.to;
  const amount = req.params.amount;
  const token = req.params.token;

  const command = `curl https://api-uat.unionbankph.com/partners/sb/online/v1/transfers/single -H 'accept: application/json' -H 'content-type: application/json' -H 'x-ibm-client-id: a2bed6de-fa69-417a-bd39-edde532ff727' -H 'x-ibm-client-secret: gW1uV0dH8tG5tR0jN6bA8wN3uM1iC6dI4rT0tX4oT6qJ7fD3xC' -H 'authorization: Bearer ${token}' -H 'x-partner-id: 01bbb51e-1e6c-4bd4-af9c-450957522aac' -X POST -d '{"senderTransferId": ${Math.ceil(Math.random() * 99999)},"transferRequestDate": "${new Date().toISOString().split('.')[0] + 'Z'}","accountNo":"${to}","amount": {"currency":"PHP","value":"${parseInt(amount)}"},"remarks":"Transfer remarks","particulars":"Transfer particulars","info": []}'`;

  console.log(command);

  exec(command, (err, stdout) => {
    if (err) {
      console.log(err);
      res.send();
      return;
    }

    console.log(`${stdout}`);
    res.json(stdout);
  });
});

app.use('*', express.static(path.resolve('public')));

// Set up Plugins and providers
app.configure(express.rest());
app.configure(socketio());

app.configure(mongodb);

// Configure other middleware (see `middleware/index.js`)
app.configure(middleware);
// Set up our services (see `services/index.js`)
app.configure(services);
// Set up event channels (see channels.js)
app.configure(channels);

// Configure a middleware for 404s and the error handler
app.use(express.notFound());
app.use(express.errorHandler({
  logger
}));

app.hooks(appHooks);

module.exports = app;
