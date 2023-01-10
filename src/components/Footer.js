import React, { useState } from "react";

function Footer() {
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleBlur = () => {
    if (!inputValue.includes("@")) {
      alert(
        "Attention, il n'y a pas D'@, ceci n'est pas une adresse mail valide 😥"
      );
    }
  };

  return (
    <div>
      <footer className=" flex justify-center items-center flex-col border-t-black border-t-[3px]">
        <div className="my-3">Pour les pationnes des plantes 🌿🌱🌵</div>
        <div>Laissez nous votre mail :</div>
        <input
          className="border-2 border-black mb-8 px-2 text-thin "
          placeholder="Entrez votre mail"
          name="inputValue"
          type="email"
          onChange={handleInput}
        //   onBlur={handleBlur}
        />
      </footer>
    </div>
  );
}

export default Footer;
