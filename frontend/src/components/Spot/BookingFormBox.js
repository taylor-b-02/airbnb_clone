import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as bookingActions from '../../store/booking';
import './BookingFormBox.css';

const BookingFormBox = ({ price, spotId }) => {
	const dispatch = useDispatch();
	const sessionUser = useSelector((state) => state.session.user);

	const [startDate, setStartDate] = useState('');
	const [endDate, setEndDate] = useState('');
	// const [guestCount, setGuestCount] = useState(1);

	const updateStart = (e) => setStartDate(e.target.value);
	const updateEnd = (e) => setEndDate(e.target.value);
	// const updateGuests = (e) => setGuestCount(e.target.value);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (sessionUser) {
			const userId = sessionUser.id;

			const bookingInfo = {
				startDate,
				endDate,
				userId,
				spotId,
				// guestCount,
			};

			// const createdBooking = await dispatch(
			// 	bookingActions.postBooking(bookingInfo)
			// );
			await dispatch(bookingActions.postBooking(bookingInfo));
		}
	};

	return (
		<div id="booking-card-container">
			<div id="booking-card-inner-container">
				<div id="booking-card-price">
					<span id="booking-price-span">{`$${price}`}</span> / night
				</div>
				<form id="booking-form" onSubmit={handleSubmit}>
					<div id="booking-form-inner-container">
						<div id="booking-form-date-div">
							<input
								type="date"
								name="startDate"
								className="date-input"
								id="date-start"
								value={startDate}
								onChange={updateStart}
							/>
							<input
								type="date"
								name="endDate"
								className="date-input"
								id="date-end"
								value={endDate}
								onChange={updateEnd}
							/>
						</div>
						{/* <input
							type="number"
							name="guestCount"
							id="guest-input"
							value={guestCount}
							onChange={updateGuests}
						/> */}
					</div>
					<button type="submit" id="submit-btn">
						Book
					</button>
				</form>
			</div>
		</div>
	);
};

export default BookingFormBox;
