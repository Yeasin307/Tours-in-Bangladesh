import React from 'react';
import './Place.css';

const Place = (props) => {
    console.log(props.place);
    const { placename, district, division, image, attraction, duration, cost } = props.place;
    return (
        <div className="place-card">
            <img src={image} alt="" />
            <h4 className="info">Place Name: {placename}</h4>
            <h4 className="info">District: {district}</h4>
            <h4 className="info">Division: {division}</h4>
            <h4 className="info">Attraction: {attraction}</h4>
            <h4 className="info">Duration: {duration}</h4>
            <h2 className="info">Cost: {cost}</h2>
        </div>
    );
};

export default Place;