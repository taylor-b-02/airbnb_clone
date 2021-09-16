import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import BookingFormBox from './BookingFormBox';
import './Spot.css';

const Spot = () => {
	const { id } = useParams();
	return (
		<div id="spot-pageframe">
			<h1 id="spot-name-h1">NAME HERE</h1>
			<div id="spot-img-div">Image goes here</div>
			<div id="spot-info">
				<div id="spot-info-left"></div>
				<div id="spot-info-right">
					<BookingFormBox />
				</div>
			</div>
		</div>
	);
};

export default Spot;
