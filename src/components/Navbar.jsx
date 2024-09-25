import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsChatRightDots } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-emerald-900 text-lg font-bold">Logo</div>

        {/* Middle Links (Hidden on Mobile) */}
        <div className="hidden lg:flex space-x-6">
          {["HOME", "ABOUT US", "STORY", "VISA", "BLOG", "PAGE", "CONTACT"].map(
            (link, index) => (
              <a
                key={index}
                href="#"
                className="text-emerald-900 text-sm hover:text-sky-400 flex items-center"
              >
                <span>{link}</span>
                {link !== "CONTACT" && <RiArrowDropDownLine size={24} />}
              </a>
            )
          )}
        </div>

        {/* Contact (Hidden on Mobile) */}
        <div className="hidden lg:flex items-center space-x-2">
          <BsChatRightDots style={{ fill: "green" }} />
          <div>
            <p className="text-xs text-slate-400">Need Help?</p>
            <p className="text-sm text-emerald-900">(307) 555-0133</p>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-400 hover:text-white focus:outline-none"
          >
            {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (shown when open) */}
      <div className={`${isOpen ? "block" : "hidden"} lg:hidden`}>
        <div className="flex flex-col space-y-2 mt-4">
          {["HOME", "ABOUT US", "STORY", "VISA", "BLOG", "PAGE"].map(
            (link, index) => (
              <a
                key={index}
                href="#"
                className="text-emerald-900 text-sm hover:text-sky-400"
              >
                {link}
              </a>
            )
          )}
          <div className="flex items-center space-x-2">
            <BsChatRightDots style={{ fill: "green" }} />
            <div>
              <p className="text-xs text-slate-400">Need Help?</p>
              <p className="text-sm text-emerald-900">(307) 555-0133</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
