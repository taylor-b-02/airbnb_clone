import React, { useState } from 'react';
// import * as sessionActions from '../../store/session';
// import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import SpotCard from './SpotCard';
import './SpotsPage.css';

const SpotsPage = () => {
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
