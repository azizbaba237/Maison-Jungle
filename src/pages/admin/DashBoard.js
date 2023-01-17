import React, { useState } from "react";
import { IoIosArrowDropright } from "react-icons/io";
import logo from "../../assets/logo.png";
import { BiHomeAlt } from "react-icons/bi";
import { BsFillChatDotsFill } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { SiSimpleanalytics } from "react-icons/si";
import { AiOutlineFile } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";

function DashBoard() {
  const [open, setOpen] = useState(false);
  const Menus = [
    { title: "Dashboard" },
    { title: "Inbox" },
    { title: "Account", gap: true },
    { title: "Schedule" },
    { title: "Search" },
    { title: "Analytics" },
    { title: "Filies", gap: true },
    { title: "Setting" },
  ];

  const iconMap = [
    BiHomeAlt, 
    BsFillChatDotsFill, 
    MdAccountCircle,
    SlCalender,
    BsSearch,
    SiSimpleanalytics,
    AiOutlineFile,
    FiSettings 
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20"
        } duration-300 h-screen p-5 pt-8 bg-green-500 relative`}
      >
        <IoIosArrowDropright
          className={`w-9 h-9 cursor-pointer absolute -right-3 top-9 w-7 ${
            open && "rotate-180"
          }`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={logo}
            alt="Maison Junle"
            className={` cursor-pointer duration-500 w-9 h-9 bg-black `}
          />
          <h1
            className={` origin-left font-medium text-xl duration-300 ${
              !open && "scale-0"
            } `}
          >
            LMJ
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((menu, index) => {
            console.log(index)
            const Icones = iconMap[index];
            return (
              <li
                key={index}
                className=" text-sm flex items-center gap-x-4 cursor-pointer p-2 "
              >
                <Icones />
                {menu.title}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="p-7 text-2xl  font-semibold flex-1 h-screen ">
        <h1> Home Page </h1>
      </div>
    </div>
  );
}

export default DashBoard;
