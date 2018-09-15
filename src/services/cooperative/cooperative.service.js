// Initializes the `farm` service on path `/api/cooperative`
const createService = require('feathers-mongodb');
const hooks = require('./cooperative.hooks');

module.exports = function (app) {
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/api/cooperative', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('api/cooperative');

  mongoClient.then(db => {
    service.Model = db.collection('cooperative');
  });

  service.hooks(hooks);
};
