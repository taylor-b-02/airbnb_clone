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

const initialState = { spots: null };

const spotReducer = (state = initialState, action) => {
	let newState;
	console.log('Entered ');
	switch (action.type) {
		case CREATE_SPOT:
			return;
		case DELETE_SPOT:
			return;
		case GET_ALL_SPOTS:
			newState = Object.assign({}, state);
			console.log('ACTION.PAYLOAD:', action.payload);
			newState.spots = action.payload;

			console.log('UPDATED newState:', newState);
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
