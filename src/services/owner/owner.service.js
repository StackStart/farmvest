// Initializes the `owner` service on path `/api/owner`
const createService = require('feathers-mongodb');
const hooks = require('./owner.hooks');

module.exports = function (app) {
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/api/owner', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('api/owner');

  mongoClient.then(db => {
    service.Model = db.collection('owner');
  });

  service.hooks(hooks);
};
