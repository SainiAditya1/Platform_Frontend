
import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '100vh',
};

const initialCenter = {
    lat: 27.1766701,
    lng: 78.008074,
};

const locationCoordinates = {
    'Pune Station': { lat: 18.5289, lng: 73.8745 },
    'MG Road': { lat: 18.5167, lng: 73.8563 },
    'Kothrud': { lat: 18.5074, lng: 73.8077 },
    'Hadapsar': { lat: 18.5088, lng: 73.925 },
    'Baner': { lat: 18.559, lng: 73.789 },
    'Aundh': { lat: 18.5603, lng: 73.8077 },
    'Viman Nagar': { lat: 18.5679, lng: 73.9143 },
    'Pimple Saudagar': { lat: 18.5986, lng: 73.7898 },
    'Kharadi': { lat: 18.5514, lng: 73.9405 },
    'Wakad': { lat: 18.5977, lng: 73.758 },
    'Hinjewadi': { lat: 18.5975, lng: 73.7181 },
    'Shivaji Nagar': { lat: 18.5308, lng: 73.8478 },
    'Dhayari': { lat: 18.4466, lng: 73.8295 },
    'Kalyani Nagar': { lat: 18.5486, lng: 73.9021 },
    'Yerwada': { lat: 18.5635, lng: 73.8992 },
    'Sinhagad Road': { lat: 18.4572, lng: 73.8181 },
};

function GoogleMapComponent({ pickupLocation, dropOffLocation }) {
    const [mapCenter, setMapCenter] = useState(initialCenter);
    const [markers, setMarkers] = useState([]);

    useEffect(() => {
        const newMarkers = [];
        if (pickupLocation && locationCoordinates[pickupLocation]) {
            newMarkers.push(locationCoordinates[pickupLocation]);
        }
        if (dropOffLocation && locationCoordinates[dropOffLocation]) {
            newMarkers.push(locationCoordinates[dropOffLocation]);
        }

        setMarkers(newMarkers);

        // Center the map between pickup and drop-off locations if both are selected
        if (newMarkers.length === 2) {
            const lat = (newMarkers[0].lat + newMarkers[1].lat) / 2;
            const lng = (newMarkers[0].lng + newMarkers[1].lng) / 2;
            setMapCenter({ lat, lng });
        } else if (newMarkers.length === 1) {
            setMapCenter(newMarkers[0]);
        } else {
            setMapCenter(initialCenter);
        }
    }, [pickupLocation, dropOffLocation]);

    return (
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={mapCenter}
                zoom={markers.length > 0 ? 12 : 10}
            >
                {markers.map((position, index) => (
                    <Marker key={index} position={position} />
                ))}
            </GoogleMap>
        </LoadScript>
    );
}

export default GoogleMapComponent;
