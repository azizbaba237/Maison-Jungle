import React, { useEffect, useState } from "react";

import PublicRoutes from "../pages/PublicRoutes";
// import Banner from "./Banner";
// import Footer from "./Footer";
// import Cart from "./Cart";
// import ShoppinList from "./ShoppinList";

function App() {
  // const savedCart = localStorage.getItem("cart");
  // const [cart, setCart] = useState(savedCart ? JSON.parse(savedCart) : []);
  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(cart));
  // }, [cart]);

  return (
    <>
      <PublicRoutes />

      {/* <Banner/>
       
      <div className="flex justify-row">
        <Cart cart={cart} setCart={setCart} />
        <ShoppinList cart={cart} setCart={setCart} />
      </div>
      <Footer /> */}
    </>
  );
}

export default App;
