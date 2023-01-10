import React from "react";
import logo from "../assets/logo.png";

function Banner() {

  

  return (
    <div
    className="p[32px] border border-b-black border-b-[3px] flex justify-end items-center "
    >
      <img src={logo} alt="La maison jungle" className="w-10 h-10" />
      <h1 className="p-[32px] font-semibold">La maison jungle</h1>
    </div>
  );
}

export default Banner;
