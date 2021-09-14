const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Spot } = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

const validateSpot = [
	check('property1')
		.exists({ checkFalsy: true })
		.withMessage('Something something something'),
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
