import React from "react";
import GoogleMapReact from "google-map-react";

const Map = ({ setCoordinates, setBounds, coordinates }) => {
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
        bootstrapURLKeys={{ key: process.env.REACT_APP_TRIPADVISOR_API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{}}
        onChange={(e) => {
          console.log(e);
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={() => {}}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
