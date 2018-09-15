import client from '../client';
import faker from 'faker';

class Seeder {
  async seedOwners() {
    const ownerData = {
      firstName: faker.name.firstName(),
      middleName: faker.name.lastName(),
      lastName: faker.name.lastName(),
      contactNumber: faker.phone(),
      email: faker.internet.email(),
      imgUrl: faker.random.image(),
      farmId: 0
    };
    const response = await client.service('api/owner').create(ownerData);
    console.log(response);
  }

  async seedFarms() {
    const farmData = {
      name: faker.random.words(1),
      description: faker.random.words(10),
      cropType: faker.random.words(1),
      address: faker.address(),
      hectares: faker.random.number({max: 100}),
      cooperativeId: 0,
      farmId: 0
    };
    const response = await client.service('api/farm').create(farmData);
    console.log(response);
  }
}

export default Seeder;