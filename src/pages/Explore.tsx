import React, { useState, useEffect } from "react";
import Map from "../components/Map.tsx";
import SearchBar from "../components/SearchBar.tsx";
import PlaceDetails from "../components/PlaceDetails.tsx";
import { getPlacesData } from "../api/GetPlace.js";
import { Label } from "flowbite-react";

const Explore = () => {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  const [selectedPlace, setSelectedPlace] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) =>
        setCoordinates({ lat: latitude, lng: longitude })
    );
  }, []);

  useEffect(() => {
    if (bounds.sw && bounds.ne) {
      getPlacesData(bounds.sw, bounds.ne).then((data) => {
        console.log(data);
        setPlaces(data);
      });
    }
  }, [bounds]);

  // Function to sort places by rating
  const sortPlacesByRating = (places) => {
    return places.sort((a, b) => b.rating - a.rating);
  };

  return (
    <div className="flex flex-col h-screen p-4 bg-gray-50">
      <div className="bg-white p-6 rounded-lg shadow-md mb-4">
        <Label className="text-4xl font-extrabold text-left text-gray-800">
          Explore
        </Label>
      </div>
      <div className="flex flex-grow mt-4">
        <div className="flex-1 flex flex-col">
          <div className="my-4">
            <SearchBar />
          </div>
          <div className="card p-4 m-4 flex-1 bg-white rounded shadow-lg">
            <div className="scrollable-list">
              {places && places.length > 0 ? (
                <div className="flex flex-wrap -mx-4">
                  {sortPlacesByRating(places)
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
                    .map((place, index) => (
                      <div key={index} className="w-full sm:w-1/2 px-4 mb-4">
                        <PlaceDetails
                          place={place}
                          onSelect={() =>
                            setSelectedPlace({
                              lat: Number(place.latitude),
                              lng: Number(place.longitude),
                            })
                          }
                        />
                      </div>
                    ))}
                </div>
              ) : (
                <p className="text-center text-gray-500">No places found.</p>
              )}
            </div>
          </div>
        </div>
        <div className="flex-1 my-6 flex items-stretch">
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={places}
            selectedPlace={selectedPlace}
          />
        </div>
      </div>
    </div>
  );
};

export default Explore;
