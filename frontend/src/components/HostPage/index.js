import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as spotActions from '../../store/spot';
import './HostPage.css';
import HostCard from './HostCard.js';

const HostPage = () => {
	const dispatch = useDispatch();
	const sessionUser = useSelector((state) => state.session.user);
	const spots = useSelector((state) => state.spot.spots);

	let userId;
	if (sessionUser) userId = sessionUser.id;

	useEffect(() => {
		dispatch(spotActions.getHostedSpots(userId));
	}, [dispatch, userId]);

	if (!spots) return null;

	return (
		<div id="spots-container">
			<div id="spots-heading">
				<h1>Your spots</h1>
			</div>
			{spots.map((spot) => {
				return (
					<HostCard
						key={spot.id}
						spotName={spot.name}
						price={spot.price}
						spotId={spot.id}
					/>
				);
			})}
		</div>
	);
};

export default HostPage;
