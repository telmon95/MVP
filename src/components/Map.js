import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS

const Map = ({ city }) => {
    const [coordinates, setCoordinates] = useState(null);

    useEffect(() => {
        // Geocoding API (using OpenCageData)
        const geocodingApiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=YOUR_OPENCAGEDATA_API_KEY`;

        fetch(geocodingApiUrl)
            .then(response => response.json())
            .then(data => {
                if (data.results && data.results.length > 0) {
                    const { lat, lng } = data.results[0].geometry;
                    setCoordinates({ lat, lng });
                } else {
                    console.error("Geocoding failed for:", city);
                    setCoordinates(null);
                }
            })
            .catch(error => {
                console.error("Error during geocoding:", error);
                setCoordinates(null);
            });
    }, [city]);

    if (!coordinates) {
        return <p>Map not available for this city.</p>;
    }

    return (
        <MapContainer center={[coordinates.lat, coordinates.lng]} zoom={10} style={{ height: '300px', width: '100%' }}>
            <TileLayer
                attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[coordinates.lat, coordinates.lng]}>
                <Popup>
                    {city}
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default Map;