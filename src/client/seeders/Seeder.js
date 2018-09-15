import client from '../client';
import faker from 'faker';

class Seeder {
  async seedOwners() {
    const ownerData = {
      firstName: faker.name.firstName(),
      middleName: faker.name.lastName(),
      lastName: faker.name.lastName(),
      contactNumber: faker.phone.phoneNumberFormat(),
      email: faker.internet.email(),
      imgUrl: faker.random.image(),
    };
    const response = await client.service('api/owner').create(ownerData);
    console.log(JSON.stringify(response));
    return response;
  }

  async seedFarms(ownerId, coopId) {
    const farmData = {
      name: faker.random.words(1),
      description: faker.random.words(10),
      cropType: faker.random.words(1),
      address: faker.address.city(),
      hectares: faker.random.number({max: 100}),
      cooperativeId: ownerId || 0,
      imageUrls: [faker.random.image()],
      ownerId: coopId || 1,
    };
    const response = await client.service('api/farm').create(farmData);
    console.log(response);
    return response;
  }

  async seedCooperatives() {
    const coopData = {
      name: faker.company.companyName(),
    };
    const response = await client.service('api/cooperative').create(coopData);
    console.log(response);
    return response;
  }

  async seedCycles(farmId) {
    const productionCost = faker.random.number({ min: 30000, max: 65000 });
    const cycleData = {
      farmId: farmId || 0,
      productionCost,
      estimateProfit: faker.random.number(productionCost * 1.4, productionCost * 2),
      duration: '105-120 days',
      startDate: '2018-09-25T18:01:27.486Z',
      endDate: '2018-01-20T19:01:27.486Z',
      investors: [],
    };
    const response = await client.service('api/cycle').create(cycleData);
    console.log(response);
    return response;
  }

  async seedAll() {
    const owner = await this.seedOwners();
    const cooperative = await this.seedCooperatives();
    const farm = await this.seedFarms(owner._id, cooperative._id);
    const cycle = await this.seedCycles(farm._id);
    console.log(owner);
    console.log(cooperative);
    console.log(farm);
    console.log(cycle);
  }
}

export default Seeder;