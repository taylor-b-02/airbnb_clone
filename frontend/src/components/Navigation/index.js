import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
	const sessionUser = useSelector((state) => state.session.user);

	let sessionLinks;
	if (sessionUser) {
		sessionLinks = <ProfileButton user={sessionUser} />;
	} else {
		sessionLinks = (
			<>
				<NavLink to="/login">Log In</NavLink>
				<NavLink to="/signup">Sign Up</NavLink>
			</>
		);
	}

	return (
		<div id="nav-div-container">
			<div id="nav-div-inner">
				<div>
					<NavLink exact to="/" id="home-link">
						AirBnB
					</NavLink>
				</div>
				<div id="spacer-div" />
				<div id="other-links">{isLoaded && sessionLinks}</div>
			</div>
		</div>
	);
}

export default Navigation;
