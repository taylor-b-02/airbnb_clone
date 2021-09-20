import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as bookingActions from '../../store/booking';

const BookingsPage = () => {
	const dispatch = useDispatch();
	// const sessionUser = useSelector((state) => state.session.user);
	const bookings = useSelector((state) => state.booking.bookings);

	useEffect(() => {
		dispatch(bookingActions.getBookingsById(4));
	}, [dispatch]);

	if (!bookings) return null;

	return (
		<div id="bookings-container">
			<h1>Your Bookings</h1>
			{bookings.map((booking) => {
				return <div key={booking.id}>{booking.Spot.name}</div>;
			})}
		</div>
	);
};

export default BookingsPage;
