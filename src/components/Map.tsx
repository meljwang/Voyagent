import React from "react";
import GoogleMapReact from "google-map-react";

const Map = () => {
  const coordinates = { lat: 37.7749, lng: -122.4194 }; // Example coordinates for San Francisco

  return (
    <div
      style={{
        height: "90vh",
        width: "95%",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCLp0V-GRfWodqixLvMK01d_rAX2pgQ31w" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{}}
        onChange={() => {}}
        onChildClick={() => {}}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
