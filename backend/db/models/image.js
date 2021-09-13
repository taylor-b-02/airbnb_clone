'use strict';
module.exports = (sequelize, DataTypes) => {
	const Image = sequelize.define(
		'Image',
		{
			spotId: {
				allowNull: false,
				type: DataTypes.INTEGER,
			},
			url: {
				allowNull: false,
				type: DataTypes.STRING,
				unique: true,
			},
		},
		{}
	);
	Image.associate = function (models) {
		// associations can be defined here
		Image.belongsTo(models.Spot, { foreignKey: 'spotId' });
	};
	return Image;
};
