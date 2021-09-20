import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import * as spotActions from '../../store/spot';
import './HostPage.css';
const HostCard = ({ spotName, price, spotId }) => {
	const dispatch = useDispatch();
	const history = useHistory();

	const handleDelete = (e) => {
		e.preventDefault();
		dispatch(spotActions.deleteSpotById(spotId));
	};

	const handleEdit = (e) => {
		e.preventDefault();
		history.push(`/spot/edit/${spotId}`);
	};

	return (
		<div id="booking-list-card">
			<img
				src="https://cdn.shortpixel.ai/spai/w_2688+q_lossless+ret_img+to_webp/https://helloavenir.com/wp-content/uploads/2020/06/DSC05610.jpg"
				alt="Spot"
				id="booking-card-thumbnail"
			/>
			<span id="booking-name-span">{spotName}</span>
			<span id="spot-price-span">{`$${price}`}</span> / night
			<button id="spot-edit-button" onClick={handleEdit}>
				Edit
			</button>
			<button id="spot-delete-button" onClick={handleDelete}>
				Delete
			</button>
		</div>
	);
};

export default HostCard;
