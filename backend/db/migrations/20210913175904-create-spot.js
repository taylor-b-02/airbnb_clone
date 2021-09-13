'use strict';
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('Spots', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			hostId: {
				allowNull: false,
				type: Sequelize.INTEGER,
			},
			address: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			city: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			state: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			country: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			lat: {
				allowNull: false,
				type: Sequelize.FLOAT,
			},
			lng: {
				allowNull: false,
				type: Sequelize.FLOAT,
			},
			name: {
				allowNull: false,
				type: Sequelize.STRING,
			},
			price: {
				allowNull: false,
				type: Sequelize.FLOAT,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('Spots');
	},
};
