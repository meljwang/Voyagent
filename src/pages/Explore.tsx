import React from "react";
import Map from "../components/Map.tsx";
import SearchBar from "../components/SearchBar.tsx";
import PlaceCard from "../components/PlaceCard.tsx";

const Explore = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-grow">
        <div className="flex-1">
          <div className="my-8">
            <SearchBar />
          </div>
          <div>
            <PlaceCard />
          </div>
        </div>
        <div className="flex-1 my-6">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Explore;
