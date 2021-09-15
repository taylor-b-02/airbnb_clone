import React, { useState } from 'react';
// import * as sessionActions from '../../store/session';
// import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import './ExploreButton.css';

const ExploreButton = ({ name, travelTime }) => {
	return (
		<Link to="/" id="explore-container">
			<img
				id="explore-img"
				// src="../../../public/images/be4d3ba5-08d7-4afe-95a7-f2da6453886a.webp"
				src="https://a0.muscache.com/im/pictures/be4d3ba5-08d7-4afe-95a7-f2da6453886a.jpg?im_q=medq&im_w=240"
			/>
			<div id="explore-text-container">
				<div id="explore-name">{name}</div>
				<div id="explore-drive-time">{`${travelTime} drive`}</div>
			</div>
		</Link>
	);
};

export default ExploreButton;
