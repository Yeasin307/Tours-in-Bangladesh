import React from 'react';
import ShowSingleDestination from '../ShowSingleDestination/ShowSingleDestination';
import './ShowDestination.css';

const ShowDestination = (props) => {
    const { destinations } = props;
    return (
        <div className="show-places">
            <h3>Showing Selected Places</h3>
            {
                destinations.map(destination => <ShowSingleDestination
                    key={destination.placename}
                    destination={destination}
                ></ShowSingleDestination>
                )
            }
        </div>
    );
};

export default ShowDestination;
