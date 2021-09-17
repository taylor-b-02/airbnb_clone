import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import './BookingFormBox.css';

const BookingFormBox = ({ price }) => {
	const [startDate, setStartDate] = useState('');
	const [endDate, setEndDate] = useState('');
	const [guestCount, setGuestCount] = useState(1);

	const updateStart = (e) => setStartDate(e.target.value);
	const updateEnd = (e) => setEndDate(e.target.value);
	const updateGuests = (e) => setGuestCount(e.target.value);

	const handleSubmit = async (e) => {
		e.preventDefault();
	};

	return (
		<div id="booking-card-container">
			<div id="booking-card-price">
				<span id="booking-price-span">{`$${price}`}</span> / night
			</div>
			<form>
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
				<button type="submit" onSubmit={handleSubmit}>
					Book
				</button>
			</form>
		</div>
	);
};

export default BookingFormBox;
