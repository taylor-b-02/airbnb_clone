import { csrfFetch } from './csrf';

const CREATE_BOOKING = 'spot/createBooking';

const createBooking = (bookingInfo) => {
	return {
		type: CREATE_BOOKING,
		payload: bookingInfo,
	};
};

const initialState = { bookings: null };

const bookingReducer = (state = initialState, action) => {
	let newState;
	switch (action.type) {
		case CREATE_BOOKING:
			newState = Object.assign({}, state);
			newState.bookings = action.payload;
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
