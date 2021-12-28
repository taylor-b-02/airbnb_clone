import React from 'react';
// import * as sessionActions from '../../store/session';
// import { useDispatch, useSelector } from 'react-redux';
// import ExploreButton from './ExploreButton';
import css from './Home.module.css';

const Home = () => {
    return (
        <div id={css.container}>
            <div id={css.nav}>Nav</div>
            <div id={css.contentContainer}>
                <div className={css.contentCard}>
                    <img id={css.mainImage}
                         alt={"Stylish camping in the woods"}
                         src="https://a0.muscache.com/im/pictures/53e51dcb-8fad-4ce8-b61c-8a7a369267bf.jpg?im_q=highq&im_w=1920"/>
                    <div id={css.imageHeader}>
                        <div id={css.imageText}>Not sure where to go? Perfect.</div>
                        <button id={css.imageButton}><span id={css.imageButtonText}>I'm flexible</span></button>
                    </div>
                </div>
                <div className={css.contentCard} id={css.locationCardContainer}>
                    <span id={css.locationHeader}>Inspiration for your next trip</span>
                    <div id={css.locationCardWrapper}>
                        {/*https://a0.muscache.com/im/pictures/1cdb5298-1e10-4d5a-ac27-20c80b53b4af.jpg?im_w=320 1x, https://a0.muscache.com/im/pictures/1cdb5298-1e10-4d5a-ac27-20c80b53b4af.jpg?im_w=720 2x*/}
                        {/*<div className={css.locationCard}><img src={"https://a0.muscache.com/im/pictures/1cdb5298-1e10-4d5a-ac27-20c80b53b4af.jpg?im_w=720"} id={css.locationCardImage}/> Scranton</div>*/}
                        <div className={css.locationCard} id={css.location1}>
                            <img
                                src={"https://a0.muscache.com/im/pictures/1cdb5298-1e10-4d5a-ac27-20c80b53b4af.jpg?im_w=320"}
                                className={css.locationCardImage}
                                alt={"Lake surrounded by mountains"}
                            />
                            <div className={css.locationTextContainer}>
                                <div className={css.locationCardCity}>Scranton</div>
                                <div className={css.locationCardDistance}>{69} miles away</div>
                            </div>
                        </div>
                        <div className={css.locationCard} id={css.location2}>
                            <img
                                src={"https://a0.muscache.com/im/pictures/1cdb5298-1e10-4d5a-ac27-20c80b53b4af.jpg?im_w=320"}
                                id={css.locationCardImage}
                                alt={"Lake surrounded by mountains"}
                            /></div>
                        <div className={css.locationCard} id={css.location3}>
                            <img
                                src={"https://a0.muscache.com/im/pictures/1cdb5298-1e10-4d5a-ac27-20c80b53b4af.jpg?im_w=320"}
                                id={css.locationCardImage}
                                alt={"Lake surrounded by mountains"}
                            />
                        </div>
                        <div className={css.locationCard} id={css.location4}>
                            <img
                                src={"https://a0.muscache.com/im/pictures/1cdb5298-1e10-4d5a-ac27-20c80b53b4af.jpg?im_w=320"}
                                id={css.locationCardImage}
                                alt={"Lake surrounded by mountains"}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <footer id={css.footerContainer}>Foot</footer>
        </div>
    );
};

export default Home;
