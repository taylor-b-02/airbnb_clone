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
	const response = await fetch('/api/bookings', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(booking),
	});

	if (response.ok) {
		const newBooking = await response.json();
		dispatch(createBooking(newBooking));
		return newBooking;
	}
};
