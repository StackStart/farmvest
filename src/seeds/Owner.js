import app from '../app';

const ownerData = {
  firstName: 'Rave',
  middleName: 'Sambo',
  lastName: 'Arevalo',
  contactNumber: '09474894053',
  email: 'nironjin@gmail.com',
  imgUrl: 'user.jpg',
  farmId: 0
};

(async function execute() {
  try {
    console.log(app.service('api/owners').find());
    // const result = await app.service('api/owners').create(ownerData);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
})();