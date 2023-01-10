import React from "react";
import Banner from "./Banner";
import Footer from "./Footer";
import Cart from "./Cart";
import ShoppinList from "./ShoppinList";

function App() {
  return (
    <>
      <Banner />
      <div className="flex justify-between">
        <Cart />
        <ShoppinList />
      </div>
      <Footer />
    </>
  );
}

export default App;
