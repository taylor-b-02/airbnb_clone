'use strict';
module.exports = (sequelize, DataTypes) => {
	const Review = sequelize.define(
		'Review',
		{
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
		Review.belongsTo(models.Spot, { foreignKey: 'spotId' });
		Review.belongsTo(models.User, { foreignKey: 'userId' });
	};
	return Review;
};
