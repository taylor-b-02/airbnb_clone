const CREATE_SPOT = 'spot/createSpot';
const DELETE_SPOT = 'spot/deleteSpot';
const GET_ALL_SPOTS = 'spot/getAllSpots';

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

const initialState = { spots: [] };

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
