/** @format */

"use client";

import React, { useState } from "react";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";

const navItems = [
  { name: "Home", id: "home" },
  { name: "Contact", id: "contactd" },
  { name: "About", id: "about" },
  { name: "Sign Up", id: "sign-up" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div>
      <div className="bg-black flex w-full justify-between items-center px-20">
        <div></div>
        <p className="text-white text-xs py-3">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
          <span className="underline font-bold ml-1">Shop now</span>
        </p>
        <div className="flex items-center ml-2">
          <p className="text-white text-xs">English</p>
          <ExpandMoreIcon style={{ color: "white" }} />
        </div>
      </div>
      <nav className="bg-transparent pt-8 px-10 md:px-20 flex justify-between items-center relative  pb-2">
        <div className="flex items-center">
          <div className="flex-shrink-0 mr-4">
            <h3 className="text-black text-xl font-bold">Exclusive</h3>
          </div>
          {isMenuOpen && (
            <button
              aria-label="Close menu"
              onClick={() => setIsMenuOpen(false)}
              className="text-black absolute top-0 right-0 mt-2 mr-2 sm:hidden">
              <CloseIcon />
            </button>
          )}
        </div>

        <button
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`text-black sm:hidden ml-auto ${
            isMenuOpen ? "hidden" : "block"
          }`}>
          <MenuIcon />
        </button>

        {isMenuOpen && (
          <div className="absolute top-0 left-0 w-full pt-10 pb-5 bg-[#000] z-50 flex flex-col items-center justify-center sm:hidden">
            <button
              aria-label="Close menu"
              onClick={() => setIsMenuOpen(false)}
              className="text-black absolute top-0 right-0 mt-2 mr-2">
              <CloseIcon />
            </button>
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavClick(item.id)}
                className="text-black hover:text-gray-400 focus:text-gray-400 transition-colors text-md block mb-2 border-b border-[#444444] pb-3 pt-3 w-full">
                {item.name}
              </button>
            ))}
          </div>
        )}

        <div className="hidden sm:flex">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleNavClick(item.id)}
              className="text-black font-normal hover:underline focus:text-gray-400 transition-colors text-md px-4">
              {item.name}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-4">
          {/* <div>
            <input
              type="text"
              id="what are you looking for"
              className="bg-gray-50 border border-gray-300 text-sm text-blackrounded-sm w-50 h-8"
              placeholder="what are you looking for"
            />
            <SearchIcon />
          </div> */}
          <FavoriteBorderOutlinedIcon />
          <ShoppingCartOutlinedIcon />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
