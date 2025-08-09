import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import mapIcon from "./images/icon-location.svg";
import RecenterMap from "./RecenterMap";

const Map = ({ lat, lng }) => {
  const customIcon = L.icon({
    iconUrl: mapIcon,
    iconSize: [46, 56], // adjust size
    iconAnchor: [23, 56], // tip of the marker icon
    popupAnchor: [0, -56], // popup appears above icon
  });
  return (
    <div className="h-full w-full">
      <MapContainer
        center={[lat, lng]}
        zoom={9}
        maxZoom={20}
        scrollWheelZoom={false}
        /* zoomControl={false} */
        className="h-full w-full z-0"
      >
        <RecenterMap lat={lat} lng={lng} />
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lng]} icon={customIcon}>
          <Popup>
            Location: {lat}, {lng}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
