import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    fetch('./touristinfo.json')
      .then(res => res.json())
      .then(data => setPlaces(data));
  }, [])
  return (
    <div className="App">
      {
        places.map(place => <li>{place.district}</li>)
      }
    </div>
  );
}

export default App;