import React from "react";

function Banner({children}) {

  

  return (
    <div
    className="p[32px] border border-b-black border-b-[3px] flex justify-end items-center "
    >
     {children}
    </div>
  );
}

export default Banner;
