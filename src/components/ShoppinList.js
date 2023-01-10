import React from "react";
import { plantList } from "../data/plantList";
import PlantItem from "./PlantItem";

function ShoppinList() {
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

  return (
    <div className="w-[100%]">
      <ul className="text-center">
        {categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
      <ul className="p-10 p-8 flex justify-center flex-wrap">
        {plantList.map(({ id, cover, name, water, light }) => (
          <PlantItem
            id={id}
            cover={cover}
            name={name}
            water={water}
            light={light}
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppinList;
