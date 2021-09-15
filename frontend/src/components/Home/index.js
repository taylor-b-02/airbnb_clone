import React, { useState } from 'react';
// import * as sessionActions from '../../store/session';
// import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ExploreButton from './ExploreButton';
import './Home.css';

const Home = () => {
	return (
		<div id="home-container">
			<img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
			<div id="explore-container">
				<h3>Explore Nearby</h3>
				<ExploreButton name="New York" travelTime="45 minute" />
			</div>
		</div>
	);
};

export default Home;
