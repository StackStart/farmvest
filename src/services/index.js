const owner = require('./owner/owner.service.js');
const farm = require('./farm/farm.service.js');
const cooperative = require('./cooperative/cooperative.service.js');
const cycle = require('./cycle/cycle.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(owner);
  app.configure(farm);
  app.configure(cooperative);
  app.configure(cycle);
};
