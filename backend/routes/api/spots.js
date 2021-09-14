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
module.exports = router;
