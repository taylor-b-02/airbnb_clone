import React from 'react';
import './BookingCard.css';
const BookingCard = ({ spotName, startDay, endDay, price }) => {
	const endObj = new Date(endDay);
	const startObj = new Date(startDay);

	const days = (endObj.getTime() - startObj.getTime()) / (1000 * 3600 * 24);

	return (
		<div id="booking-list-card">
			<img
				src="https://cdn.shortpixel.ai/spai/w_2688+q_lossless+ret_img+to_webp/https://helloavenir.com/wp-content/uploads/2020/06/DSC05610.jpg"
				alt="Spot"
				id="booking-card-thumbnail"
			/>
			<span id="booking-name-span">{spotName}</span>
			<span id="spot-price-span">{`$${price * days}`}</span> for {days}{' '}
			nights
			<div id="spot-price"></div>
		</div>
	);
};

export default BookingCard;
