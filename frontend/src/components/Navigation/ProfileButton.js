import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
	const dispatch = useDispatch();
	const [showMenu, setShowMenu] = useState(false);

	const openMenu = () => {
		if (showMenu) return;
		setShowMenu(true);
	};

	useEffect(() => {
		if (!showMenu) return;

		const closeMenu = () => {
			setShowMenu(false);
		};

		document.addEventListener('click', closeMenu);

		return () => document.removeEventListener('click', closeMenu);
	}, [showMenu]);

	const logout = (e) => {
		e.preventDefault();
		dispatch(sessionActions.logout());
	};

	return (
		<>
			<button onClick={openMenu}>
				<i className="fas fa-user-circle" />
			</button>
			{showMenu && (
				<ul className="profile-dropdown">
					<li>{user.username}</li>
					<li>{user.email}</li>
					<li>
						<Link to="/my-bookings">My Bookings</Link>
					</li>
					<li>
						<Link to="/host">My Spots</Link>
					</li>
					<li>
						<Link to="/spots/create">List a Spot</Link>
					</li>
					<li>
						<button onClick={logout}>Log Out</button>
					</li>
				</ul>
			)}
		</>
	);
}

export default ProfileButton;
