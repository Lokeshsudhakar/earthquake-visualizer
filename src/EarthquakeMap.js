import { MapContainer, TileLayer, Circle, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function EarthquakeMap({ earthquakes }) {
  return (
    <MapContainer center={[20, 0]} zoom={2} style={{ height: '80vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {earthquakes.map(eq => (
        <Circle
          key={eq.id}
          center={[
            eq.geometry.coordinates[1],
            eq.geometry.coordinates[0]
          ]}
          radius={eq.properties.mag * 20000}
          pathOptions={{
            color:
              eq.properties.mag > 6 ? 'red'
              : eq.properties.mag > 4 ? 'orange'
              : 'yellow'
          }}
        >
          <Popup>
            <strong>Location:</strong> {eq.properties.place}<br />
            <strong>Magnitude:</strong> {eq.properties.mag}<br />
            <strong>Time:</strong> {new Date(eq.properties.time).toLocaleString()}
          </Popup>
        </Circle>
      ))}
    </MapContainer>
  );
}

export default EarthquakeMap;
