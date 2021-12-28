import React from 'react';
// import * as sessionActions from '../../store/session';
// import { useDispatch, useSelector } from 'react-redux';
import ExploreButton from './ExploreButton';
import css from './Home.module.css';

const Home = () => {
	return (
		<div id={css.container}>
			<div id={css.upperContainer}></div>
			<div id={css.contentContainer}>
				<img id={css.mainImage} src="https://a0.muscache.com/im/pictures/53e51dcb-8fad-4ce8-b61c-8a7a369267bf.jpg?im_q=highq&im_w=1920"/>
			</div>
			<footer id={css.footerContainer}></footer>
		</div>
	);
};

export default Home;
