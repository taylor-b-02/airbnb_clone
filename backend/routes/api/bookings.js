const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Booking } = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

const bookingValidator = [
	check('userId')
		.exists({ checkFalsy: true })
		.withMessage('A user ID must be included'),
	check('spotId')
		.exists({ checkFalsy: true })
		.withMessage('A spot ID must be included'),
	check('startDate')
		.exists({ checkFalsy: true })
		.withMessage('A start date must be included'),
	check('startDate')
		.isDate()
		.withMessage('Start date must have a valid format'),
	check('endDate')
		.exists({ checkFalsy: true })
		.withMessage('An end date must be included'),
	check('startDate')
		.isDate()
		.withMessage('End date must have a valid format'),
	handleValidationErrors,
];

// Get all bookings
router.get(
	'/',
	requireAuth,
	asyncHandler(async (req, res, next) => {
		const bookings = await Booking.findAll();

		return res.json(bookings);
	})
);

// Get all bookings for a particular spot
router.get(
	'/spot/:spotId(\\d+)',
	requireAuth,
	asyncHandler(async (req, res, next) => {
		const { spotId } = req.params;

		const bookings = await Booking.findAll({
			where: {
				spotId: spotId,
			},
		});

		return res.json(bookings);
	})
);

// Get a booking by its id
router.get(
	'/:id(\\d+)',
	requireAuth,
	asyncHandler(async (req, res, next) => {
		const { id } = req.params;

		const booking = await Booking.findByPk(id);

		return res.json(booking);
	})
);

// Delete a specific booking by its id
router.delete(
	'/:id(\\d+)',
	requireAuth,
	asyncHandler(async (req, res, next) => {
		const { id } = req.params;

		const booking = await Booking.findByPk(id);

		booking.destroy();

		return res.json('Successfully deleted booking');
	})
);

// Create a booking for a spot
router.post(
	'/',
	bookingValidator,
	requireAuth,
	asyncHandler(async (req, res, next) => {
		const { userId, spotId, startDate, endDate } = req.body;

		const newBooking = await Booking.create({
			userId,
			spotId,
			startDate,
			endDate,
		});

		return res.json(newBooking);
	})
);

module.exports = router;
