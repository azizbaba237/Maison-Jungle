import React from "react";
import logo from "../assets/logo.png";
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { AiOutlineMenu } from 'react-icons/ai'

function Banner() {
  return (
    <div className="">
      <div className="">
        <img src={logo} alt="La maison jungle" className="w-10 h-10" />
        <a href="" className="font-semibold ">La maison jungle</a>
      </div>
      <button>
        <AiOutlineMenu />
      </button>
      <div>
        
      </div>
    </div>
  );
}

export default Banner;
