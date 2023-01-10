import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import logo from "../assets/logo.png";
import Footer from "./Footer";
import Cart from "./Cart";
import ShoppinList from "./ShoppinList";

function App() {
  const savedCart = localStorage.getItem("cart");
  const [cart, setCart] = useState(savedCart ? JSON.parse(savedCart) : []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <Banner>
        <img src={logo} alt="La maison jungle" className="w-10 h-10" />
        <h1 className="p-[32px] font-semibold">La maison jungle</h1>
      </Banner>
      <div className="flex justify-row">
        <Cart cart={cart} setCart={setCart} />
        <ShoppinList cart={cart} setCart={setCart} />
      </div>
      <Footer />
    </>
  );
}

export default App;
