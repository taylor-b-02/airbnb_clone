'use strict';
module.exports = (sequelize, DataTypes) => {
	const Spot = sequelize.define(
		'Spot',
		{
			hostId: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			address: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			city: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			state: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			country: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			lat: {
				allowNull: false,
				type: DataTypes.FLOAT,
			},
			lng: {
				allowNull: false,
				type: DataTypes.FLOAT,
			},
			name: {
				allowNull: false,
				type: DataTypes.STRING,
			},
			price: {
				allowNull: false,
				type: DataTypes.FLOAT,
			},
		},
		{}
	);
	Spot.associate = function (models) {
		// associations can be defined here
	};
	return Spot;
};
