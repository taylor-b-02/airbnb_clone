import React from 'react';
// import * as sessionActions from '../../store/session';
// import { useDispatch, useSelector } from 'react-redux';
import ExploreButton from './ExploreButton';
import './Home.css';

const Home = () => {
	return (
		<div id="home-container">
			<img
				src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
				id="main-pic"
				alt="Splash Page"
			/>
			<div id="explore-nearby-span">Explore Nearby</div>
			<div id="explore-container">
				<ExploreButton
					name="New York"
					travelTime="45 minute"
					imageURL="https://a0.muscache.com/im/pictures/be4d3ba5-08d7-4afe-95a7-f2da6453886a.jpg?im_q=medq&im_w=240"
				/>
				<ExploreButton
					name="Washington"
					travelTime="5 hour"
					imageURL="https://a0.muscache.com/im/pictures/7253e011-7c22-48fd-b75d-d0da35372397.jpg?im_q=medq&im_w=240"
				/>
				<ExploreButton
					name="Philadelphia"
					travelTime="2.5 hour"
					imageURL="https://a0.muscache.com/im/pictures/76e5f1c6-a788-418c-a28b-f0ee29cffd41.jpg?im_q=medq&im_w=240"
				/>
				<ExploreButton
					name="Boston"
					travelTime="5 hour"
					imageURL="https://a0.muscache.com/im/pictures/847cfb7f-788d-42dc-9148-f375348dde76.jpg?im_q=medq&im_w=240"
				/>
				<ExploreButton
					name="Arlington"
					travelTime="5 hour"
					imageURL="https://a0.muscache.com/im/pictures/560c06e1-a396-4414-9e38-4fbe8e9f04c4.jpg?im_q=medq&im_w=240"
				/>
				<ExploreButton
					name="Portland"
					travelTime="7 hour"
					imageURL="https://a0.muscache.com/im/pictures/71ae2609-6082-4f31-aa20-8629d7fab7d7.jpg?im_q=medq&im_w=240"
				/>
				<ExploreButton
					name="North Bergen"
					travelTime="30 minute"
					imageURL="https://a0.muscache.com/im/pictures/a161fb95-6875-4aaa-aecd-3a46dead3220.jpg?im_q=medq&im_w=240"
				/>
				<ExploreButton
					name="Baltimore"
					travelTime="4.5 hour"
					imageURL="https://a0.muscache.com/im/pictures/f3ebcc73-30b2-469f-b6ba-0578fdaaa649.jpg?im_q=medq&im_w=240"
				/>
			</div>
		</div>
	);
};

export default Home;
