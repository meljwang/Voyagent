import React, { useEffect } from "react";
import GoogleMapReact from "google-map-react";
import { Card } from "flowbite-react";

const Map = ({
  setCoordinates,
  setBounds,
  coordinates,
  places,
  selectedPlace,
}) => {
  useEffect(() => {
    if (selectedPlace) {
      setCoordinates(selectedPlace);
    }
  }, [selectedPlace, setCoordinates]);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
      <div className="flex">
        {Array(fullStars)
          .fill(0)
          .map((_, i) => (
            <svg
              key={i}
              className="w-4 h-4 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.429 4.419a1 1 0 00.95.691h4.646c.969 0 1.372 1.24.588 1.81l-3.757 2.729a1 1 0 00-.364 1.118l1.429 4.42c.3.921-.755 1.688-1.54 1.118l-3.757-2.729a1 1 0 00-1.176 0l-3.757 2.729c-.785.57-1.84-.197-1.54-1.118l1.429-4.42a1 1 0 00-.364-1.118L2.486 9.847c-.784-.57-.38-1.81.588-1.81h4.646a1 1 0 00.95-.691l1.429-4.419z" />
            </svg>
          ))}
        {hasHalfStar && (
          <svg
            className="w-4 h-4 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <defs>
              <linearGradient id="half">
                <stop offset="50%" stopColor="currentColor" />
                <stop offset="50%" stopColor="transparent" />
              </linearGradient>
            </defs>
            <path
              fill="url(#half)"
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.429 4.419a1 1 0 00.95.691h4.646c.969 0 1.372 1.24.588 1.81l-3.757 2.729a1 1 0 00-.364 1.118l1.429 4.42c.3.921-.755 1.688-1.54 1.118l-3.757-2.729a1 1 0 00-1.176 0l-3.757 2.729c-.785.57-1.84-.197-1.54-1.118l1.429-4.42a1 1 0 00-.364-1.118L2.486 9.847c-.784-.57-.38-1.81.588-1.81h4.646a1 1 0 00.95-.691l1.429-4.419z"
            />
          </svg>
        )}
      </div>
    );
  };

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
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{}}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={() => {}}
      >
        {places
          .filter(
            (place) =>
              place &&
              place.photo &&
              place.photo.images.large.url &&
              place.name &&
              place.address &&
              place.rating &&
              place.num_reviews &&
              place.price_level &&
              place.ranking
          )
          .map((place, i) => (
            <div
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
              key={i}
              style={{
                position: "relative",
                transform: "translate(-50%, -50%)",
              }}
            >
              <Card style={{ width: "250px" }}>
                <img
                  src={
                    place.photo
                      ? place.photo.images.large.url
                      : "src/assets/restaurant_default.png"
                  }
                  alt={place.name}
                  style={{ width: "100%", height: "100px", objectFit: "cover" }}
                />
                <div>
                  <h5 style={{ marginTop: "5px", fontSize: "14px" }}>
                    {place.name}
                  </h5>
                  <p style={{ fontSize: "12px", color: "#666" }}>
                    {place.address}
                  </p>
                  <div className="flex items-center mb-4">
                    <span className="text-yellow-500 font-bold mr-2">
                      {place.rating}
                    </span>
                    {renderStars(place.rating)}
                    <span className="text-gray-500 dark:text-gray-400 ml-2 text-sm">
                      ({place.num_reviews} reviews)
                    </span>
                  </div>
                  <p style={{ fontSize: "12px", color: "#666" }}>
                    {place.price_level}
                  </p>
                </div>
              </Card>
            </div>
          ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
