import React, { useEffect, useState } from 'react';
import Place from '../Place/Place';
import SelectedDestination from '../SelectedDestination/SelectedDestination';
import ShowDestination from '../ShowDestination/ShowDestination';
import './Places.css';

const Places = () => {
    const [places, setPlaces] = useState([]);
    const [destinations, setDestionations] = useState([]);
    useEffect(() => {
        fetch('./touristinfo.json')
            .then(res => res.json())
            .then(data => setPlaces(data));
    }, [])
    const handleSelectForGoing = place => {
        const newDestinations = [...destinations, place];
        setDestionations(newDestinations);
    }
    return (
        <div className="tourist-container">
            <div className="place">
                {
                    places.map(place => <Place
                        key={place.placename}
                        place={place}
                        handleSelectForGoing={handleSelectForGoing}
                    ></Place>)
                }
            </div>
            <div className="select-place">
                <SelectedDestination
                    destinations={destinations}
                ></SelectedDestination>
                <ShowDestination
                    destinations={destinations}
                ></ShowDestination>
            </div>
        </div>
    );
};

export default Places;

/* const handleSelectForGoing = place => {
    let newDestinations;
    if (destinations.length === 0) {
        newDestinations = [...destinations, place];
        // setDestionations(newDestinations);
    }
    else {
        for (const destination of destinations) {
            if (destination.placename !== place.placename) {
                newDestinations = [...destinations, place];
                // const newDestinations = [...destinations, place];
                // setDestionations(newDestinations);
            }
        }
    }
    setDestionations(newDestinations);
} */
