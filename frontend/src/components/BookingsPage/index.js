import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BookingCard from './BookingCard';
import * as bookingActions from '../../store/booking';
import './BookingsPage.css';

const BookingsPage = () => {
	const dispatch = useDispatch();
	const sessionUser = useSelector((state) => state.session.user);
	const bookings = useSelector((state) => state.booking.bookings);
	let userId;
	if (sessionUser) userId = sessionUser.id;

	useEffect(() => {
		dispatch(bookingActions.getBookingsById(userId));
	}, [dispatch]);

	if (!bookings) return null;

	return (
		<div id="bookings-container">
			<div id="bookings-heading">
				<h1>Your Bookings</h1>
			</div>
			{bookings.map((booking) => {
				return (
					<BookingCard
						key={booking.id}
						spotName={booking.Spot.name}
						price={booking.Spot.price}
						startDay={booking.startDate}
						endDay={booking.endDate}
					/>
				);
			})}
		</div>
	);
};

export default BookingsPage;
