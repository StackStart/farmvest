const assert = require('assert');
const app = require('../../src/app');

describe('\'owner\' service', () => {
  it('registered the service', () => {
    const service = app.service('api/owner');

    assert.ok(service, 'Registered the service');
  });
});
