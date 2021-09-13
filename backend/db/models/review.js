'use strict';
module.exports = (sequelize, DataTypes) => {
	const Review = sequelize.define(
		'Review',
		{
			id: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			userId: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			spotId: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			review: {
				allowNull: false,
				type: DataTypes.TEXT,
			},
			starCount: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
		},
		{}
	);
	Review.associate = function (models) {
		// associations can be defined here
	};
	return Review;
};
