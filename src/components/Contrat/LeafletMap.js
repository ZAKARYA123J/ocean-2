import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet's CSS

import iconShadowUrl from 'leaflet/dist/images/marker-shadow.png'; // Leaflet's default shadow

const LeafletMap = ({ contracts }) => {
  const mapRef = useRef(null); // Ref to store the map instance
  const mapContainerRef = useRef(null); // Ref to the map DOM element

  useEffect(() => {
    // Initialize the map once
    if (!mapRef.current) {
      mapRef.current = L.map(mapContainerRef.current).setView([51.505, -0.09], 3); // Default view coordinates

      // Add a tile layer to the map
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapRef.current);
    }

    // Remove existing markers if the contracts array changes
    mapRef.current.eachLayer((layer) => {
      if (layer instanceof L.Marker) {
        mapRef.current.removeLayer(layer);
      }
    });

    // Add contract markers with dynamic custom icons
    contracts.forEach((contract) => {
      if (contract.latitude && contract.longitude && contract.icon) {
        // Define a custom icon for each contract
        const customIcon = L.icon({
          iconUrl: contract.icon, // Path to contract-specific icon
          shadowUrl: iconShadowUrl, // Optional shadow URL
          iconSize: [25, 41], // Size of the icon [width, height]
          iconAnchor: [12, 41], // Point of the icon which will correspond to marker's location
          popupAnchor: [1, -34], // Point from which the popup should open relative to the iconAnchor
          shadowSize: [41, 41], // Size of the shadow
        });

        L.marker([contract.latitude, contract.longitude], { icon: customIcon })
          .addTo(mapRef.current)
          .bindPopup(`<b>${contract.country}</b><br>${contract.sector}`);
      }
    });

    // Cleanup function to remove map on component unmount
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null; // Set mapRef to null to prevent further operations on unmounted map
      }
    };
  }, [contracts]); // Run this effect when contracts change

  return (
    <div 
      ref={mapContainerRef} 
      className="w-full h-[400px] rounded-lg shadow-lg overflow-hidden" 
      style={{ borderRadius: '20px' }} // Optional inline style for more curve control
    />
  );
};

export default LeafletMap;
