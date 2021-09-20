import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import * as spotActions from '../../store/spot';
import '../SpotCreationPage/SpotCreationPage.css';

const SpotEditPage = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const { id } = useParams();
	const sessionUser = useSelector((state) => state.session.user);
	const spot = useSelector((state) => state.spot.singleSpot);

	useEffect(() => {
		(async () => {
			await dispatch(spotActions.getSpotById(id));
		})();
	}, [id, dispatch]);

	// const [address, setAddress] = useState('');
	// const [city, setCity] = useState('');
	// const [state, setState] = useState('');
	// const [country, setCountry] = useState('');
	// const [lat, setLat] = useState('');
	// const [lng, setLng] = useState('');
	// const [name, setName] = useState('');
	// const [price, setPrice] = useState('');

	const [address, setAddress] = useState(spot?.address);
	const [city, setCity] = useState(spot?.city);
	const [state, setState] = useState(spot?.state);
	const [country, setCountry] = useState(spot?.country);
	const [lat, setLat] = useState(spot?.lat);
	const [lng, setLng] = useState(spot?.lng);
	const [name, setName] = useState(spot?.name);
	const [price, setPrice] = useState(spot?.price);

	// if (spot) {
	// 	setAddress(spot.address);
	// 	setCity(spot.city);
	// 	setState(spot.state);
	// 	setCountry(spot.country);
	// 	setLat(spot.lat);
	// 	setLng(spot.lng);
	// 	setName(spot.name);
	// 	setPrice(spot.price);
	// }

	const updateAddress = (e) => setAddress(e.target.value);
	const updateCity = (e) => setCity(e.target.value);
	const updateState = (e) => setState(e.target.value);
	const updateCountry = (e) => setCountry(e.target.value);
	const updateLat = (e) => setLat(e.target.value);
	const updateLng = (e) => setLng(e.target.value);
	const updateName = (e) => setName(e.target.value);
	const updatePrice = (e) => setPrice(e.target.value);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (sessionUser) {
			const hostId = sessionUser.id;

			const spotInfo = {
				id,
				hostId,
				address,
				city,
				state,
				country,
				lat,
				lng,
				name,
				price,
			};

			const response = await dispatch(spotActions.editSpot(spotInfo));

			if (response) history.push('/spots');
		}
	};

	return (
		<div id="spot-creation-container">
			<div id="spot-creation-left-container">
				<h2>Edit Your Spot</h2>
			</div>
			<div id="spot-creation-right-container">
				<form onSubmit={handleSubmit}>
					<label htmlFor="address">Address</label>
					<input
						type="text"
						name="address"
						value={address}
						onChange={updateAddress}
					/>
					<label htmlFor="city">City</label>
					<input
						type="text"
						name="city"
						value={city}
						onChange={updateCity}
					/>
					<label htmlFor="state">State</label>
					<input
						type="text"
						name="state"
						value={state}
						onChange={updateState}
					/>
					<label htmlFor="state">Country</label>
					<input
						type="text"
						name="state"
						value={country}
						onChange={updateCountry}
					/>
					<label htmlFor="lat">Latitude</label>
					<input
						type="text"
						name="lat"
						value={lat}
						onChange={updateLat}
					/>
					<label htmlFor="lng">Longitude</label>
					<input
						type="text"
						name="lng"
						value={lng}
						onChange={updateLng}
					/>
					<label htmlFor="name">Name</label>
					<input
						type="text"
						name="name"
						value={name}
						onChange={updateName}
					/>
					<label htmlFor="price">Price</label>
					<input
						type="text"
						name="price"
						value={price}
						onChange={updatePrice}
					/>
					<button type="submit">Submit</button>
				</form>
			</div>
		</div>
	);
};

export default SpotEditPage;
