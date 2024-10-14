import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet's CSS

import iconShadowUrl from 'leaflet/dist/images/marker-shadow.png'; // Leaflet's default shadow

const LeafletMap = ({ contracts }) => {
  const mapRef = useRef(null); 
  const mapContainerRef = useRef(null); 

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map(mapContainerRef.current).setView([51.505, -0.09], 3); // Default view coordinates

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapRef.current);
    }

    mapRef.current.eachLayer((layer) => {
      if (layer instanceof L.Marker) {
        mapRef.current.removeLayer(layer);
      }
    });

    contracts.forEach((contract) => {
      if (contract.latitude && contract.longitude && contract.icon) {
        const customIcon = L.icon({
          iconUrl: contract.icon, 
          shadowUrl: iconShadowUrl, 
          iconSize: [25, 41], 
          iconAnchor: [12, 41], 
          popupAnchor: [1, -34], 
          shadowSize: [41, 41], 
        });

        L.marker([contract.latitude, contract.longitude], { icon: customIcon })
          .addTo(mapRef.current)
          .bindPopup(`<b>${contract.country}</b><br>${contract.sector}`);
      }
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null; 
      }
    };
  }, [contracts]); 
  return (
    <div 
      ref={mapContainerRef} 
      className="w-full h-[400px] rounded-xl shadow-lg overflow-hidden" 
      style={{ borderRadius: '20px' }} 
    />
  );
};

export default LeafletMap;
