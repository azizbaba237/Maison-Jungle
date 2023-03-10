import React from "react";
import CareScale from "./CareScale";

function handleClick(plantName) {
  alert(`vous voullez acheter 1 ${plantName} ? Tres bon choix 🌱✨ `);
}

function plantItem({ id, cover, name, water, light, price }) {
  return (
    <li
      className="relative flex-col capitalize m-3"
      onClick={() => handleClick}
    >
      <span className="absolute rounded-t-[20px] rounded-br-[20px] bg-[#31b472] text-white p-[10px] right-0 top-0 font-semibold">
        {price}€
      </span>
      <img
        src={cover}
        alt={`${name} cover`}
        className="w-60 h-60 object-cover rounded-3xl"
      />
      <div>{name}</div>
      <div className="flex items-start justify-center flex-col">
        <CareScale careType="water" scaleValue={water} />
        <CareScale careType="light" scaleValue={light} />
      </div>
    </li>
  );
}

export default plantItem;
