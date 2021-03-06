// Initializes the `cycle` service on path `/api/cycle`
const createService = require('feathers-mongodb');
const hooks = require('./cycle.hooks');

module.exports = function (app) {
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/api/cycle', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('api/cycle');

  mongoClient.then(db => {
    service.Model = db.collection('cycle');
  });

  service.hooks(hooks);
};
