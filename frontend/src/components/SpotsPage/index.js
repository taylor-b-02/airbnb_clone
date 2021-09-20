import React, { useEffect } from 'react';
import * as spotActions from '../../store/spot';
import { useDispatch, useSelector } from 'react-redux';
import SpotCard from './SpotCard';
import './SpotsPage.css';

const SpotsPage = () => {
	const dispatch = useDispatch();
	const spotsList = useSelector((state) => state.spot.spots);

	useEffect(() => {
		dispatch(spotActions.getAllSpots());
	}, [dispatch]);

	if (!spotsList) return null;

	return (
		<>
			<div id="left-container">
				<h1>Spots</h1>
				{spotsList.map((spot) => {
					return (
						<SpotCard
							key={spot.id}
							name={spot.name}
							price={spot.price}
							spotId={spot.id}
						/>
					);
				})}
			</div>
			<div id="map-container"></div>
		</>
	);
};

export default SpotsPage;
