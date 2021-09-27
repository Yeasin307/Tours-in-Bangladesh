import React from 'react';
import './SelectedDestination.css';

const SelectedDestination = (props) => {
    const { destinations } = props;
    let total = 0;
    for (const destination of destinations) {
        total += destination.cost;
    }
    return (
        <div className="destination">
            <h3 className="text-center">Your Selected Destinations</h3>
            <h3>Your Selected Places: {props.destinations.length}</h3>
            <h3>Total Cost: {total}</h3>
        </div>
    );
};

export default SelectedDestination;