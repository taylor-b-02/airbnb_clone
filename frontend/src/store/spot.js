import { csrfFetch } from './csrf';

const CREATE_SPOT = 'spot/createSpot';
const DELETE_SPOT = 'spot/deleteSpot';
const GET_ALL_SPOTS = 'spot/getAllSpots';
const GET_SPOT = 'spot/getSpot';

const createSpot = (spotObj) => {
	return {
		type: CREATE_SPOT,
		payload: spotObj,
	};
};

const deleteSpot = (spotId) => {
	return {
		type: DELETE_SPOT,
		payload: spotId,
	};
};

const loadAllSpots = (spots) => {
	return {
		type: GET_ALL_SPOTS,
		payload: spots,
	};
};

const loadSingleSpot = (spot) => {
	return {
		type: GET_SPOT,
		payload: spot,
	};
};

const initialState = { spots: null, singleSpot: null };

const spotReducer = (state = initialState, action) => {
	let newState;
	switch (action.type) {
		case CREATE_SPOT:
			return;
		case DELETE_SPOT:
			return;
		case GET_ALL_SPOTS:
			newState = Object.assign({}, state);
			newState.spots = action.payload;
			return newState;
		case GET_SPOT:
			newState = Object.assign({}, state);
			newState.singleSpot = action.payload;
			return newState;
		default:
			return state;
	}
};

export default spotReducer;

export const getAllSpots = () => async (dispatch) => {
	const response = await fetch(`/api/spots/`);

	if (response.ok) {
		const spots = await response.json();
		dispatch(loadAllSpots(spots));
	}
};

export const getSpotById = (id) => async (dispatch) => {
	const response = await fetch(`/api/spots/${id}`);

	if (response.ok) {
		const spot = await response.json();
		dispatch(loadSingleSpot(spot));
	}
};

export const postSpot = (spot) => async (dispatch) => {
	const { hostId, address, city, state, country, lat, lng, name, price } =
		spot;
	console.log('SPOT IN REDUCER:', spot);
	const response = await csrfFetch('/api/spots', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			hostId,
			address,
			city,
			state,
			country,
			lat,
			lng,
			name,
			price,
		}),
	});

	if (response.ok) {
		const newSpot = await response.json();
		dispatch(createSpot(newSpot));
		return newSpot;
	}
};
