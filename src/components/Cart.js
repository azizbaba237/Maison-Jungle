import React, { useState, useEffect } from "react";

function Cart({ cart, setCart }) {
  const [isOpen, setIsOpen] = useState(true);
  const total = cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price,
    0
  );

  useEffect(() => {
    document.title = `LMJ : ${total}€ d'achat`;
  }, [total]);

  return isOpen ? (
    <div className=" color-white bg-[#31b572] p-6 flex flex-col justify-start w-96">
      <button
        onClick={() => setIsOpen(false)}
        className="=w-[600px] cursor-pointer text-white mb-6 flex items-end justify-end"
      >
        Fermer
      </button>
      {cart.length > 0 ? (
        <div>
          <h2 className="text-white mb-2 font-semibold">Panier</h2>
          <div className="flex flex-col justify-center items-center">
            <ul className=" text-white font-normal capitalize ">
              {cart.map(({ name, price, amount }, index) => (
                <div key={`${name} - ${index}`}>
                  {name} {price}€ x {amount}
                </div>
              ))}
            </ul>
          </div>
          <h3 className="m-6 text-white font-semibold">Total : {total}€</h3>
          <div className="bg-white rounded-lg px-2 flex justify-center items-center ">
            <button onClick={() => setCart([])}>Vider le panier</button>
          </div>
        </div>
      ) : (
        <div>Votre panier est vide </div>
      )}
    </div>
  ) : (
    <div className="=w-[600px] cursor-pointer">
      <button onClick={() => setIsOpen(true)}> Ouvrir le panier </button>
    </div>
  );
}

export default Cart;
