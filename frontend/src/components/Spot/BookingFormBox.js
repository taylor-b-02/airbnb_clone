import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as bookingActions from '../../store/booking';
import './BookingFormBox.css';

const BookingFormBox = ({ price, spotId }) => {
	const dispatch = useDispatch();
	const sessionUser = useSelector((state) => state.session.user);

	console.log('USERID:', sessionUser);
	const [startDate, setStartDate] = useState('');
	const [endDate, setEndDate] = useState('');
	const [guestCount, setGuestCount] = useState(1);

	const updateStart = (e) => setStartDate(e.target.value);
	const updateEnd = (e) => setEndDate(e.target.value);
	const updateGuests = (e) => setGuestCount(e.target.value);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (sessionUser) {
			const userId = sessionUser.id;

			const bookingInfo = {
				startDate,
				endDate,
				guestCount,
				userId,
				spotId,
			};

			const createdBooking = await dispatch(
				bookingActions.postBooking(bookingInfo)
			);
		}
	};

	return (
		<div id="booking-card-container">
			<div id="booking-card-price">
				<span id="booking-price-span">{`$${price}`}</span> / night
			</div>
			<form onSubmit={handleSubmit}>
				<input
					type="date"
					name="startDate"
					value={startDate}
					onChange={updateStart}
				/>
				<input
					type="date"
					name="endDate"
					value={endDate}
					onChange={updateEnd}
				/>
				<input
					type="number"
					name="guestCount"
					value={guestCount}
					onChange={updateGuests}
				/>
				<button type="submit">Book</button>
			</form>
		</div>
	);
};

export default BookingFormBox;
