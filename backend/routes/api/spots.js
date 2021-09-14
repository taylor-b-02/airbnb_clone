const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Spot } = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

const validateSpot = [
	check('hostId')
		.exists({ checkFalsy: true })
		.withMessage('Host ID must be included'),
	check('address')
		.exists({ checkFalsy: true })
		.withMessage('Street address must be included'),
	check('city')
		.exists({ checkFalsy: true })
		.withMessage('City must be included'),
	check('state')
		.exists({ checkFalsy: true })
		.withMessage('State must be included'),
	check('country')
		.exists({ checkFalsy: true })
		.withMessage('Country must be included'),
	check('lat')
		.exists({ checkFalsy: true })
		.withMessage('Lattitude must be included'),
	check('lng')
		.exists({ checkFalsy: true })
		.withMessage('Longitude must be included'),
	check('name')
		.exists({ checkFalsy: true })
		.withMessage('Name must be included'),
	check('price')
		.exists({ checkFalsy: true })
		.withMessage('Price Per Night must be included'),
	handleValidationErrors,
];

// Get all spots
router.get(
	'/',
	asyncHandler(async (req, res, next) => {
		const spots = await Spot.findAll();

		return res.json(spots);
	})
);

//Get spot by id
router.get(
	'/:id(\\d+)',
	asyncHandler(async (req, res, next) => {
		const { id } = req.params;
		console.log('SPOT ID URL PARAM:', id);
		const spot = await Spot.findByPk(id);

		return res.json(spot);
	})
);

// Create a spot
router.post(
	'/',
	requireAuth,
	validateSpot,
	asyncHandler(async (req, res, next) => {
		const { hostId, address, city, state, country, lat, lng, name, price } =
			req.body;

		const newSpot = await Spot.create({});

		return res.json(newSpot);
	})
);

//TODO: Double check auth to make sure only the host can update a spot
// Update a spot
router.put(
	'/:id(\\d+)',
	requireAuth,
	validateSpot,
	asyncHandler(async (req, res, next) => {
		const { id } = req.params;
		const { hostId, address, city, state, country, lat, lng, name, price } =
			req.body;

		const spot = await Spot.findByPk(id);
		await spot.update({
			hostId,
			address,
			city,
			state,
			country,
			lat,
			lng,
			name,
			price,
		});

		return res.json(spot);
	})
);

// Delete a spot
router.delete(
	'/:id(\\d+)',
	requireAuth,
	asyncHandler(async (req, res, next) => {
		const { id } = req.params;

		const spot = await Spot.findByPk(id);

		spot.destroy();

		return res.json('Successfully deleted');
	})
);

module.exports = router;
