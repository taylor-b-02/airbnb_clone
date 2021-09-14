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

router.get('/', async (req, res, next) => {
	return await Spot.findAll({
		limit: 50,
	});
});

module.exports = router;
