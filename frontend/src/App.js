import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/SignupFormPage';
import * as sessionActions from './store/session';
import Navigation from './components/Navigation';
import Home from './components/Home';
import SpotsPage from './components/SpotsPage';
import Spot from './components/Spot';
import SpotCreationPage from './components/SpotCreationPage';
import BookingsPage from './components/BookingsPage';
import HostPage from './components/HostPage';

function App() {
	const dispatch = useDispatch();
	const [isLoaded, setIsLoaded] = useState(false);
	useEffect(() => {
		dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
	}, [dispatch]);

	return (
		<>
			<Navigation isLoaded={isLoaded} />
			{isLoaded && (
				<Switch>
					<Route path="/login">
						<LoginFormPage />
					</Route>
					<Route path="/signup">
						<SignupFormPage />
					</Route>
				</Switch>
			)}
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/spots">
					<SpotsPage />
				</Route>
				<Route exact path="/spots/create">
					<SpotCreationPage />
				</Route>
				<Route path="/spots/:id">
					<Spot />
				</Route>
				<Route path="/my-bookings">
					<BookingsPage />
				</Route>
				<Route path="/host">
					<HostPage />
				</Route>
			</Switch>
		</>
	);
}

export default App;
