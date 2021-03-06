'use strict';
const { Validator } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define(
		'User',
		{
			firstName: {
				type: DataTypes.STRING(20),
				allowNull: false,
				unique: false,
			},
			lastName: {
				type: DataTypes.STRING(30),
				allowNull: false,
				unique: false,
			},
			isHost: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
				defaultValue: 'false',
			},
			username: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [3, 30],
					isNotEmail(value) {
						if (Validator.isEmail(value)) {
							throw new Error('Cannot be an email.');
						}
					},
				},
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					len: [3, 256],
				},
			},
			hashedPassword: {
				type: DataTypes.STRING.BINARY,
				allowNull: false,
				validate: {
					len: [60, 60],
				},
			},
		},
		{
			defaultScope: {
				attributes: {
					exclude: [
						'hashedPassword',
						'email',
						'createdAt',
						'updatedAt',
					],
				},
			},
			scopes: {
				currentUser: {
					attributes: { exclude: ['hashedPassword'] },
				},
				loginUser: {
					attributes: {},
				},
			},
		}
	);

	User.prototype.toSafeObject = function () {
		// remember, this cannot be an arrow function
		const { id, username, email, firstName, lastName, isHost } = this; // context will be the User instance
		return { id, username, email, firstName, lastName, isHost };
	};

	User.prototype.validatePassword = function (password) {
		return bcrypt.compareSync(password, this.hashedPassword.toString());
	};

	User.getCurrentUserById = async function (id) {
		return await User.scope('currentUser').findByPk(id);
	};

	User.login = async function ({ credential, password }) {
		const { Op } = require('sequelize');
		const user = await User.scope('loginUser').findOne({
			where: {
				[Op.or]: {
					username: credential,
					email: credential,
				},
			},
		});
		if (user && user.validatePassword(password)) {
			return await User.scope('currentUser').findByPk(user.id);
		}
	};

	User.signup = async function ({
		firstName,
		lastName,
		username,
		email,
		password,
		isHost,
	}) {
		const hashedPassword = bcrypt.hashSync(password);
		const user = await User.create({
			firstName,
			lastName,
			username,
			email,
			hashedPassword,
			isHost,
		});
		return await User.scope('currentUser').findByPk(user.id);
	};

	User.associate = function (models) {
		User.hasMany(models.Spot, { foreignKey: 'hostId' });
		User.hasMany(models.Review);
	};
	return User;
};
