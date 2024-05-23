import { Card, Badge, Button } from "flowbite-react";
import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const PlaceDetails = ({ place, onSelect }) => {
  const rating = Math.floor(place.rating);
  const hasHalfStar = place.rating % 1 !== 0;

  return (
    <Card
      className="fixed-size-card mx-auto overflow-hidden rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 cursor-pointer"
      onClick={onSelect}
    >
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
          <i className="fas fa-map-marker-alt mr-2"></i>
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
        <div className="flex flex-col items-center gap-2 mt-4">
          <p className="mt-2 text-sm text-gray-700 dark:text-gray-400">
            <i className="fas fa-phone-alt mr-2"></i>
            {place.phone}
          </p>
          <Button
            size="small"
            color="primary"
            className="flex items-center justify-center"
            onClick={() => window.open(place.web_url, "_blank")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.64em"
              height="1em"
              viewBox="0 0 2304 1408"
              className="mr-2"
            >
              <path
                fill="currentColor"
                d="M651 805q0 39-27.5 66.5T558 899q-39 0-66.5-27.5T464 805q0-38 27.5-65.5T558 712q38 0 65.5 27.5T651 805m1154-1q0 39-27.5 66.5T1711 898t-66.5-27.5T1617 804t27.5-66t66.5-27t66.5 27t27.5 66m-1040 1q0-79-56.5-136T572 612t-136.5 56.5T379 805t56.5 136.5T572 998t136.5-56.5T765 805m1153-1q0-80-56.5-136.5T1725 611q-79 0-136 56.5T1532 804t56.5 136.5T1725 997t136.5-56.5T1918 804m-1068 1q0 116-81.5 197.5T572 1084q-116 0-197.5-82T293 805t82-196.5T572 527t196.5 81.5T850 805m1154-1q0 115-81.5 196.5T1725 1082q-115 0-196.5-81.5T1447 804t81.5-196.5T1725 526q116 0 197.5 81.5T2004 804m-964 3q0-191-135.5-326.5T578 345q-125 0-231 62T179 575.5T117 807t62 231.5T347 1207t231 62q191 0 326.5-135.5T1040 807m668-573q-254-111-556-111q-319 0-573 110q117 0 223 45.5T984.5 401t122 183t45.5 223q0-115 43.5-219.5t118-180.5T1491 284t217-50m479 573q0-191-135-326.5T1726 345t-326.5 135.5T1264 807t135.5 326.5T1726 1269t326-135.5T2187 807m-266-566h383q-44 51-75 114.5T2189 470q110 151 110 337q0 156-77 288t-209 208.5t-287 76.5q-133 0-249-56t-196-155q-47 56-129 179q-11-22-53.5-82.5T1024 1168q-80 99-196.5 155.5T578 1380q-155 0-287-76.5T82 1095T5 807q0-186 110-337q-9-51-40-114.5T0 241h365Q514 141 720 84.5T1152 28q224 0 421 56t348 157"
              />
            </svg>
            <span className="text-sm text-gray-700 dark:text-gray-400">
              Tripadvisor
            </span>
          </Button>
          <Button
            size="small"
            color="primary"
            className="flex items-center justify-center"
            onClick={() => window.open(place.website, "_blank")}
          >
            <i className="fas fa-globe mr-2"></i>
            <span className="text-sm text-gray-700 dark:text-gray-400">
              Website
            </span>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default PlaceDetails;
