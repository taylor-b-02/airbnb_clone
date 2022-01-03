import React from 'react';
// import * as sessionActions from '../../store/session';
// import { useDispatch, useSelector } from 'react-redux';
// import ExploreButton from './ExploreButton';
import LocationCard from "./LocationCard";
import css from './Home.module.css';

const Home = () => {
    return (
        <div id={css.container}>
            <div id={css.lowerBackground}>
                <div id={css.upperBackground}>
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
                        <div className={css.contentCard} id={css.giftCardContainer}>
                            <div id={css.leftGCContainer}>
                                <div id={css.littleHeaderGC}>Introducing</div>
                                <div id={css.bigHeaderGC}>Airbnb gift cards</div>
                                <div id={css.GCButton}>
                                    <span id={css.GBButtonText}>Shop now</span>
                                </div>
                            </div>
                            <div id={css.rightGCContainer}></div>
                        </div>
                        <div className={css.contentCard} id={css.locationCardContainer}>
                            <span id={css.locationHeader}>Inspiration for your next trip</span>
                            <div id={css.locationCardWrapper}>
                                <LocationCard bgColor={"#BC196D"} name={"Scranton"} distance={69}/>
                                <LocationCard bgColor={"#DD3150"} name={"New York"} distance={69}/>
                                <LocationCard bgColor={"#CC2D4A"} name={"Third Thing"} distance={69}/>
                                <LocationCard bgColor={"#D93A30"} name={"Los Angeles"} distance={69}/>
                            </div>
                        </div>
                        <footer id={css.footerContainer}>Foot</footer>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
};

export default Home;
