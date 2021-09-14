'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			'Users',
			[
				{
					firstName: 'Demo',
					lastName: 'User',
					isHost: false,
					email: 'demo@user.io',
					username: 'Demo-lition',
					hashedPassword: bcrypt.hashSync('password'),
				},
				{
					firstName: 'Jim',
					lastName: 'Bo',
					isHost: false,
					email: faker.internet.email(),
					username: 'FakeUser1',
					hashedPassword: bcrypt.hashSync(faker.internet.password()),
				},
				{
					firstName: faker.name.firstName(),
					lastName: faker.name.lastName(),
					isHost: true,
					email: faker.internet.email(),
					username: 'FakeUser2',
					hashedPassword: bcrypt.hashSync(faker.internet.password()),
				},
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		const Op = Sequelize.Op;
		return queryInterface.bulkDelete('Users', null, {
			truncate: true,
			cascade: true,
			restartIdentity: true,
		});
	},
};