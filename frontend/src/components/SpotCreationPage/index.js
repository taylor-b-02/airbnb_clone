import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import * as spotActions from '../../store/spot';
import './SpotCreationPage.css';

const SpotCreationPage = () => {
	const dispatch = useDispatch();
	const sessionUser = useSelector((state) => state.session.user);
	const history = useHistory();

	const [address, setAddress] = useState('');
	const [city, setCity] = useState('');
	const [state, setState] = useState('');
	const [country, setCountry] = useState('');
	const [lat, setLat] = useState('');
	const [lng, setLng] = useState('');
	const [name, setName] = useState('');
	const [price, setPrice] = useState('');

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

			const response = await dispatch(spotActions.postSpot(spotInfo));

			if (response) history.push('/spots');
		}
	};

	return (
		<div id="spot-creation-container">
			<div id="spot-creation-left-container">Text</div>
			<div id="spot-creation-right-container">
				<form onSubmit={handleSubmit}>
					<label for="address">Address</label>
					<input
						type="text"
						name="address"
						value={address}
						onChange={updateAddress}
					/>
					<label for="city">City</label>
					<input
						type="text"
						name="city"
						value={city}
						onChange={updateCity}
					/>
					<label for="state">State</label>
					<input
						type="text"
						name="state"
						value={state}
						onChange={updateState}
					/>
					<label for="state">Country</label>
					<input
						type="text"
						name="state"
						value={country}
						onChange={updateCountry}
					/>
					<label for="lat">Latitude</label>
					<input
						type="text"
						name="lat"
						value={lat}
						onChange={updateLat}
					/>
					<label for="lng">Longitude</label>
					<input
						type="text"
						name="lng"
						value={lng}
						onChange={updateLng}
					/>
					<label for="name">Name</label>
					<input
						type="text"
						name="name"
						value={name}
						onChange={updateName}
					/>
					<label for="price">Price</label>
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

export default SpotCreationPage;
