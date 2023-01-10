import React, { useState } from "react";

function Cart() {
  const [cart, setCart] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const monsteraPrice = 8;

  return isOpen ? (
    <div className=" color-white bg-[#31b572] p-6 flex flex-col justify-start w-96">
      <button
        onClick={() => setIsOpen(false)}
        className="=w-[600px] cursor-pointer text-white mb-6 flex items-end justify-end"
      >
        Fermer
      </button>
      <h2 className="text-white mb-2 ">Panier</h2>
      <div className="">
        Monstera : {monsteraPrice}€
        <h3>Total = {monsteraPrice * cart}€</h3>
      </div>
      <button className="bg-white rounded-lg ">
        Vider le panier
      </button>
    </div>
  ) : (
    <div className="=w-[600px] cursor-pointer">
      <button onClick={() => setIsOpen(true)}> Ouvrir le panier </button>
    </div>
  );
}

export default Cart;
