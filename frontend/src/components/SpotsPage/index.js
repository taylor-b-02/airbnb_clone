import React, { useState, useEffect } from 'react';
import * as spotActions from '../../store/spot';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import SpotCard from './SpotCard';
import './SpotsPage.css';

const SpotsPage = () => {
	const dispatch = useDispatch();
	const spotsList = useSelector((state) => state.spots);

	useEffect(() => {
		dispatch(spotActions.getAllSpots());
		console.log(spotActions);
	});
	console.log('SPOTS LIST?:', spotsList);
	return (
		<>
			<div id="left-container">
				<h1>Spots</h1>
				<SpotCard />
			</div>
			<div id="map-container"></div>
		</>
	);
};

export default SpotsPage;
