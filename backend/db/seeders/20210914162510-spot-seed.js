'use strict';
const faker = require('faker');

module.exports = {
	up: (queryInterface, Sequelize) => {
		/*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
		return queryInterface.bulkInsert(
			'Users',
			[
				{
					hostId: 9,
					address: faker.address.streetAddress(),
					city: faker.address.city(),
					state: faker.address.state(),
					country: faker.address.country(),
					lat: 37.332,
					lng: 122.0309,
					name: 'Google',
					price: 4.99,
				},
				{
					hostId: 9,
					address: faker.address.streetAddress(),
					city: faker.address.city(),
					state: faker.address.state(),
					country: faker.address.country(),
					lat: 37.3861,
					lng: 122.0839,
					name: 'Apple',
					price: 4.99,
				},
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		/*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
	},
};
