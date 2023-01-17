import React, { useState, useEffect } from "react";
import Cart from "../components/Cart";
import ShoppinList from "../components/ShoppinList";
import Footer from "../components/Footer";

function All() {

  const savedCart = localStorage.getItem("cart");
  const [cart, setCart] = useState(savedCart ? JSON.parse(savedCart) : []);
  
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className=" flex flex-col">
      <div className="flex ">
        <Cart cart={cart} setCart={setCart} />
        <ShoppinList cart={cart} setCart={setCart} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default All;
