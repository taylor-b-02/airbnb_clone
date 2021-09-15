const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Review } = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

const reviewValidator = [
	check('userId')
		.exists({ checkFalsy: true })
		.withMessage('A user ID must be included'),
	check('spotId')
		.exists({ checkFalsy: true })
		.withMessage('A spot ID must be included'),
	check('review')
		.exists({ checkFalsy: true })
		.withMessage('A review must be includled'),
	check('starCount')
		.exists({ checkFalsy: true })
		.withMessage('A star count must be included'),
	check('starCount')
		.isInt({ min: 0, max: 5 })
		.withMessage('Star count must be an integer between 0 and 5'),
	handleValidationErrors,
];

// Get all the reviews for a specific spot
router.get(
	'/spot/:spotId(\\d+)',
	asyncHandler(async (req, res, next) => {
		const { spotId } = req.params;

		const reviews = await Review.findAll({
			where: {
				spotId: spotId,
			},
		});

		return res.json(reviews);
	})
);

// Get a specific review
router.get(
	'/:id(\\d+)',
	asyncHandler(async (req, res, next) => {
		const { id } = req.params;

		const review = await Review.findByPk(id);

		return res.json(review);
	})
);

// Create a review
router.post(
	'/',
	requireAuth,
	asyncHandler(async (req, res, next) => {
		const { userId, spotId, review, starCount } = req.body;

		const newReview = await Review.create({
			userId,
			spotId,
			review,
			starCount,
		});

		return res.json(newReview);
	})
);

// Edit a review
router.put(
	'/:id(\\d+)',
	requireAuth,
	asyncHandler(async (req, res, next) => {
		const { id } = req.params;
		const { userId, spotId, review, starCount } = req.body;

		const updatedReview = await Review.findByPk(id);

		await updatedReview.update({ userId, spotId, review, starCount });

		return res.json(updatedReview);
	})
);

// Delte a review
router.delete(
	'/:id(\\d+)',
	requireAuth,
	asyncHandler(async (req, res, next) => {
		const { id } = req.params;

		const review = await Review.findByPk(id);

		review.destroy();

		return res.json('Successfully Deleted');
	})
);
module.exports = router;
