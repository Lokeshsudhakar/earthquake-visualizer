import React, { useEffect, useState } from 'react';
import EarthquakeMap from './EarthquakeMap';

function App() {
  const [earthquakes, setEarthquakes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [minMag, setMinMag] = useState(0); // magnitude filter

  useEffect(() => {
    fetch(
      'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2025-10-22&endtime=2025-10-29'
    )
      .then((res) => res.json())
      .then((data) => {
        setEarthquakes(data.features);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const filteredQuakes = earthquakes.filter(eq => eq.properties.mag >= minMag);

  if (loading) return (
  <div style={{textAlign:"center",marginTop:"3em"}}>
    <div className="spinner"></div>
    <div>Loading earthquake data...</div>
  </div>
);

  if (error) return <div>Error fetching earthquake data.</div>;

  return (
    <div>
      <h1>Earthquake Visualizer</h1>
      {/* Legend block ... */}
      <div>
        <label>
        <strong>Minimum Magnitude:</strong> {minMag}
          <input
            type="range"
            min="0"
            max="10"
            step="0.1"
            value={minMag}
            onChange={e => setMinMag(Number(e.target.value))}
            style={{ width: "300px", marginLeft: "1em" }}
          />
        </label>
      </div>
      <EarthquakeMap earthquakes={filteredQuakes} />
    </div>
  );
}

export default App;
