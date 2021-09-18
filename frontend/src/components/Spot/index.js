import React, { useState, useEffect } from 'react';
import * as spotActions from '../../store/spot';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import BookingFormBox from './BookingFormBox';
import './Spot.css';

const Spot = () => {
	const { id: spotId } = useParams();
	const dispatch = useDispatch();
	const spot = useSelector((state) => state.spot.singleSpot);

	useEffect(() => {
		dispatch(spotActions.getSpotById(spotId));
	}, [spotId, dispatch]);

	if (!spot) return null;

	return (
		<div id="spot-pageframe">
			<div id="spot-heading">
				<h1 id="spot-name-h1">{spot.name}</h1>
				<span>{`${spot.city}, ${spot.country}`}</span>
			</div>
			<div id="spot-img-div">IMAGE (⌐■_■) HERE 🖼️</div>
			<div id="spot-info">
				<div id="spot-info-left">
					<div>Something</div>
					<div>Something Else</div>
					<div>Something Third</div>
					<div id="review-outer-container">
						<div id="review-heading">{`${9000000} reviews`}</div>
						<div id="review-card-container">
							{/* <ReviewCard /> */}
						</div>
					</div>
				</div>
				<div id="spot-info-right">
					<BookingFormBox price={spot.price} />
				</div>
			</div>
		</div>
	);
};

export default Spot;
