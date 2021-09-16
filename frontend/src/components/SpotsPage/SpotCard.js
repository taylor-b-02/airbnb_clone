import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import './SpotCard.css';

const SpotCard = ({ name, price, spotId }) => {
	return (
		<div id="spot-card-outer">
			<div id="spot-card-border-top" />
			<Link to={`/spots/${spotId}`}>
				<div id="spot-card-container">
					<img
						src="https://cdn.shortpixel.ai/spai/w_2688+q_lossless+ret_img+to_webp/https://helloavenir.com/wp-content/uploads/2020/06/DSC05610.jpg"
						alt="Spot"
						id="spot-card-thumbnail"
					/>
					<div id="spot-info-container">
						<span id="spot-name-span">{name}</span>
						<div id="spot-info-linebreak"></div>

						<div className="spot-features-list">
							3 guests &#183; 1 bedroom
						</div>
						<div className="spot-features-list">
							Wifi &#183; Indoor Plumbing &#183; Third Thing
						</div>
						<div id="spot-price-container">
							<div id="spot-price">
								<span id="spot-price-span">{`$${price}`}</span>{' '}
								/ night
							</div>
						</div>
					</div>
				</div>
			</Link>
			<div id="spot-card-border-bottom" />
		</div>
	);
};

export default SpotCard;

//· (Middle dot character)
