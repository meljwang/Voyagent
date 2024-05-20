import React from "react";
import { Card } from "flowbite-react";

export function PlaceCard() {
  return (
    <Card
      className="ml-5"
      imgSrc="/images/blog/image-4.jpg"
      imgAlt="Photo"
      horizontal
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Place
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Place Descripton
      </p>
    </Card>
  );
}

export default PlaceCard;
