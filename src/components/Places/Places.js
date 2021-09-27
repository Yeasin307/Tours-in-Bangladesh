import React, { useEffect, useState } from 'react';
import Place from '../Place/Place';
import './Places.css';

const Places = () => {
    const [places, setPlaces] = useState([]);
    useEffect(() => {
        fetch('./touristinfo.json')
            .then(res => res.json())
            .then(data => setPlaces(data));
    }, [])
    return (
        <div className="tourist-container">
            <div className="place">
                {
                    places.map(place => <Place place={place}></Place>)
                }
            </div>
            <div className="select-place">

            </div>
        </div>
    );
};

export default Places;
