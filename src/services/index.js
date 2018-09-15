const owner = require('./owner/owner.service.js');
const farm = require('./farm/farm.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(owner);
  app.configure(farm);
};
