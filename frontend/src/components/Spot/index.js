import React, { useState, useEffect } from 'react';
import * as spotActions from '../../store/spot';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import BookingFormBox from './BookingFormBox';
import './Spot.css';

const Spot = () => {
	const { id } = useParams();
	console.log('ID FROM SPOT PAGE:', id);
	const dispatch = useDispatch();
	const spot = useSelector((state) => state.spot.singleSpot);

	useEffect(() => {
		dispatch(spotActions.getSpotById(id));
	}, [id, dispatch]);

	if (!spot) return null;

	return (
		<div id="spot-pageframe">
			<div id="spot-heading">
				<h1 id="spot-name-h1">{spot.name}</h1>
				<span>{`${spot.city}, ${spot.country}`}</span>
			</div>
			<div id="spot-img-div">
				<img
					alt="Spot"
					src="https://media.architecturaldigest.com/photos/5ec692fe0c3e0ef2c4b32d99/master/pass/SeanLitchfield_LexingtonBK_0139_2.jpg"
				/>
			</div>
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
					<BookingFormBox price={spot.price} spotId={id} />
				</div>
			</div>
		</div>
	);
};

export default Spot;
