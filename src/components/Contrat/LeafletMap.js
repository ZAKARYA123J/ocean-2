import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet's CSS

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
      if (contract.latitude && contract.longitude) {
        const customIcon = L.divIcon({
          html: `
            <div style="position: relative; display: flex; align-items: center;">
              <img src="${contract.icon}" alt="icon" style="width: 25px; height: 41px;" />
              <span style="background-image: linear-gradient(to right, #2563EB, #DC2626); padding: 2px 5px; border-radius: 3px; margin-left: 2px; font-size: 12px; font-weight: bold; color: white;">
                ${contract.label}
              </span>
            </div>          `,
          iconSize: [50, 50],
          iconAnchor: [25, 41],
          popupAnchor: [0, -41],
          className: '',
        });

        L.marker([contract.latitude, contract.longitude], { icon: customIcon })
          .addTo(mapRef.current)
          .bindPopup(`
            <div class="flex w-64 h-40">
              <div class="w-2/5 h-full relative">
                <a href="#">
                  <img
                    src="${contract.imageUrl}"
                    alt="${contract.country}"
                    style="width: 100%; height: 100%; object-fit: cover; border-radius: 0.375rem 0 0 0.375rem;"
                  />
                </a>
              </div>
              <div class="w-3/5 p-2 bg-white" style="border-radius: 0 0.375rem 0.375rem 0;">
                <a href="#">
                  <h3 class="text-md font-bold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">${contract.country}</h3>
                </a>
                <p class="text-sm text-gray-600 mb-1">${contract.sector}</p>
                <a href="#">
                  <p class="text-md font-bold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">${contract.contractDuration}</p>
                </a>
              </div>
            </div>
          `);
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
      className="w-full h-[200px] md:h-[400px] rounded-xl shadow-lg overflow-hidden"
      style={{ borderRadius: '20px' }}
    />
  );
};

export default LeafletMap;
