import { Card, Badge } from "flowbite-react";
import React from "react";

const PlaceDetails = ({ place }) => {
  const rating = Math.floor(place.rating);
  const hasHalfStar = place.rating % 1 !== 0;

  return (
    <Card className="fixed-size-card mx-auto overflow-hidden rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
      <img
        className="w-full h-40 object-cover"
        src={
          place.photo
            ? place.photo.images.large.url
            : "src/assets/restaurant_default.png"
        }
        alt={place.name}
      />
      <div className="p-4">
        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
          {place.name}
        </h5>
        <p className="text-sm text-gray-700 dark:text-gray-400 mb-4">
          {place.address}
        </p>
        <div className="flex items-center mb-4">
          <span className="text-yellow-500 font-bold mr-2">{place.rating}</span>
          <div className="flex">
            {rating > 0 &&
              rating <= 5 &&
              Array(rating)
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
          <span className="text-gray-500 dark:text-gray-400 ml-2 text-sm">
            ({place.num_reviews} reviews)
          </span>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {place.cuisine?.map((cuisine, index) => (
            <Badge
              key={index}
              className="bg-gray-800 text-white rounded-full px-2 py-0.5 text-xs"
            >
              {cuisine.name}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default PlaceDetails;
