import React, { useState } from 'react';
// import * as sessionActions from '../../store/session';
// import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import './ExploreButton.css';

const ExploreButton = ({ name, travelTime, imageURL }) => {
	return (
		<Link to="/" id="explore-button-container">
			<img id="explore-img" src={imageURL} />
			<div id="explore-text-container">
				<b id="explore-name">{name}</b>
				<span id="explore-drive-time">{`${travelTime} drive`}</span>
			</div>
		</Link>
	);
};

export default ExploreButton;
