import React from "react";

import css from './LocationCard.module.css';

const LocationCard = (props) => {
    return (
        <div className={css.locationCard} style={{backgroundColor:props.bgColor}}>
            <img
                src={"https://a0.muscache.com/im/pictures/1cdb5298-1e10-4d5a-ac27-20c80b53b4af.jpg?im_w=320"}
                className={css.locationCardImage}
                alt={"Landscape Drawing"}
            />
            <div className={css.locationTextContainer}>
                <div className={css.locationCardCity}>{props.name}</div>
                <div className={css.locationCardDistance}>{props.distance} miles away</div>
            </div>
        </div>
    );
}

export default LocationCard;