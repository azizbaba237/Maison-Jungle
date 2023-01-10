import React from "react";
import sun from "../assets/sun.svg";
import water from "../assets/water.svg";

const quantityLabel = {
  1: "peu",
  2: "moderement",
  3: "beaucoup",
};

function CareScale({ scaleValue, careType }) {
  const range = [1, 2, 3];
  const scaleType =
    careType === "light" ? (
      <img src={sun} alt="sun-icon" />
    ) : (
      <img src={water} alt="water-icon" />
    );

  return (
    <div
      className="flex flex-row m-1 "
      onClick={() =>
        alert(
          `Cette plante require ${quantityLabel[scaleValue]} ${
            careType === "light" ? "de lumiere" : "d'arrosage"
          }`
        )
      }
    >
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <span key={rangeElem.toString()}>{scaleType}</span>
        ) : null
      )}
    </div>
  );
}

export default CareScale;
