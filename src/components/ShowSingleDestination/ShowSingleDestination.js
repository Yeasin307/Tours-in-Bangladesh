import React from 'react';
import './ShowSingleDestination.css';

const ShowSingleDestination = (props) => {
    const { placename, attraction } = props.destination;
    return (
        <div className="places-info">
            <h4>Name: {placename}</h4>
            <h4>Attraction: {attraction}</h4>
        </div>
    );
};

export default ShowSingleDestination;