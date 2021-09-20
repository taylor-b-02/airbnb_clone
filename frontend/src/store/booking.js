import { csrfFetch } from './csrf';

const CREATE_BOOKING = 'spot/createBooking';
const GET_USER_BOOKINGS = 'booking/getUserBooking';

const createBooking = (bookingInfo) => {
	return {
		type: CREATE_BOOKING,
		payload: bookingInfo,
	};
};

const getUserBookings = (bookingList) => {
	return {
		type: GET_USER_BOOKINGS,
		payload: bookingList,
	};
};

const initialState = { bookings: [] };

const bookingReducer = (state = initialState, action) => {
	let newState;
	switch (action.type) {
		case CREATE_BOOKING:
			newState = Object.assign({}, state);
			newState.bookings.push(action.payload);
			return newState;
		case GET_USER_BOOKINGS:
			newState = Object.assign({}, state);
			newState.bookings.push(...action.payload);
			return newState;
		default:
			return state;
	}
};

export default bookingReducer;

export const postBooking = (booking) => async (dispatch) => {
	const { userId, spotId, startDate, endDate } = booking;

	const response = await csrfFetch('/api/bookings', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			userId,
			spotId,
			startDate,
			endDate,
		}),
	});

	if (response.ok) {
		const newBooking = await response.json();
		dispatch(createBooking(newBooking));
		return newBooking;
	}
};

export const getBookingsById = (userId) => async (dispatch) => {
	const response = await fetch(`/api/bookings/user/${userId}`);

	if (response.ok) {
		const bookings = await response.json();
		dispatch(getUserBookings(bookings));
		return bookings;
	}
};
