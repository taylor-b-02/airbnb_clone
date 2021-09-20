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
			'Spots',
			[
				{
					hostId: 1,
					address: faker.address.streetAddress(),
					city: faker.address.city(),
					state: faker.address.state(),
					country: faker.address.country(),
					lat: 37.332,
					lng: 122.0309,
					name: 'Uninsulated Attic',
					price: 1.99,
				},
				{
					hostId: 1,
					address: faker.address.streetAddress(),
					city: faker.address.city(),
					state: faker.address.state(),
					country: faker.address.country(),
					lat: 37.3861,
					lng: 122.0839,
					name: 'Overvalued Apartment',
					price: 300,
				},
				{
					hostId: 1,
					address: faker.address.streetAddress(),
					city: faker.address.city(),
					state: faker.address.state(),
					country: faker.address.country(),
					lat: 37.3861,
					lng: 122.0839,
					name: 'Cupboard Under The Stairs',
					price: 4.99,
				},
				{
					hostId: 1,
					address: faker.address.streetAddress(),
					city: faker.address.city(),
					state: faker.address.state(),
					country: faker.address.country(),
					lat: 37.3861,
					lng: 122.0839,
					name: 'Apt A',
					price: 20,
				},
				{
					hostId: 1,
					address: faker.address.streetAddress(),
					city: faker.address.city(),
					state: faker.address.state(),
					country: faker.address.country(),
					lat: 37.3861,
					lng: 122.0839,
					name: 'Apt B',
					price: 100100,
				},
				{
					hostId: 1,
					address: faker.address.streetAddress(),
					city: faker.address.city(),
					state: faker.address.state(),
					country: faker.address.country(),
					lat: 37.3861,
					lng: 122.0839,
					name: 'Apt C',
					price: 599,
				},
				{
					hostId: 1,
					address: faker.address.streetAddress(),
					city: faker.address.city(),
					state: faker.address.state(),
					country: faker.address.country(),
					lat: 37.3861,
					lng: 122.0839,
					name: 'Apt D',
					price: 35,
				},
				{
					hostId: 1,
					address: faker.address.streetAddress(),
					city: faker.address.city(),
					state: faker.address.state(),
					country: faker.address.country(),
					lat: 37.3861,
					lng: 122.0839,
					name: 'Loft E',
					price: 50,
				},
				{
					hostId: 1,
					address: faker.address.streetAddress(),
					city: faker.address.city(),
					state: faker.address.state(),
					country: faker.address.country(),
					lat: 37.3861,
					lng: 122.0839,
					name: "Ish's Basement",
					price: 1000,
				},
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		const Op = Sequelize.Op;
		return queryInterface.bulkDelete('Spots', null, {
			truncate: true,
			cascade: true,
			restartIdentity: true,
		});
	},
};
