import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";

export default function Navbar() {
  const [hovered, setHovered] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(false);

  const handleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black text-lg">
        {/* Logo */}
        <a href="Home">
          <h1 className="text-black text-3xl font-bold whitespace-nowrap md:text-4xl">
            Morocco <span className="text-blue-500">HPC</span>
          </h1>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center font-medium space-x-4 md:text-lg">
          <li className="p-4">
            <a
              href="home"
              className="hover:border-b-2 hover:border-blue-500 transition duration-400"
            >
              Home
            </a>
          </li>
          <li
            className="p-4"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <a
              href="conference"
              className="hover:border-b-2 hover:border-blue-500 transition duration-400"
            >
              Conferences
            </a>
          </li>
          <li
            className="p-4"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <a
              href="webinars"
              className="hover:border-b-2 hover:border-blue-500 transition duration-200"
            >
              Webinars
            </a>
          </li>
          <li
            className="p-4"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <a
              href="#newsletter"
              className="hover:border-b-2 hover:border-blue-500 transition duration-200"
            >
              Newsletter
            </a>
          </li>
          <li
            className="p-4"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <a
              href="about"
              className="hover:border-b-2 hover:border-blue-500 transition duration-200"
            >
              About us
            </a>
          </li>
          <li className="p-4 whitespace-nowrap">
            <button className="px-6 py-2 bg-blue-500 rounded-full hover:bg-blue-600 hover:-translate-y-1 transition duration-200 ">
              Join Us
              <FaDiscord size={28} className="mx-auto" />
            </button>
          </li>
        </ul>

        {/* Mobile Menu Icon with Conditional Join Us Button */}
        <div className="flex items-center space-x-4 md:hidden z-50">
          {!isNavVisible && (
            <button className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition duration-200">
              Join Us <FaDiscord className="mx-auto" />
            </button>
          )}
          <div onClick={handleNav} className="cursor-pointer">
            {isNavVisible ? (
              <AiOutlineClose size={24} />
            ) : (
              <AiOutlineMenu size={24} />
            )}
          </div>
        </div>
      </div>

      {/* Backdrop for Mobile Menu */}
      <div
        className={`${
          isNavVisible ? "fixed inset-0 bg-black bg-opacity-50 z-40" : "hidden"
        }`}
        onClick={handleNav}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`fixed left-0 top-0 h-full w-[70%] max-w-[500px] bg-white shadow-lg transform ${
          isNavVisible ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out z-50`}
      >
        {/* Logo Section */}
        <div className="flex items-center justify-center pt-10">
          <h1 className="text-black font-bold text-3xl whitespace-nowrap">
            Morocco <span className="text-blue-500">HPC</span>
          </h1>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col items-center pt-16 space-y-6 text-lg font-medium">
          <li
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <a
              href="home"
              className="hover:border-b-2 hover:border-blue-500 transition duration-400"
              onClick={handleNav}
            >
              Home
            </a>
          </li>

          <li
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <a
              href="conference"
              className="hover:border-b-2 hover:border-blue-500 transition duration-400"
              onClick={handleNav}
            >
              Conferences
            </a>
          </li>

          <li
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <a
              href="webinars"
              className="hover:border-b-2 hover:border-blue-500 transition duration-200"
              onClick={handleNav}
            >
              Webinars
            </a>
          </li>

          <li
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <a
              href="#newsletter"
              className="hover:border-b-2 hover:border-blue-500 transition duration-200"
              onClick={handleNav}
            >
              Newsletter
            </a>
          </li>

          <li
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <a
              href="about"
              className="hover:border-b-2 hover:border-blue-500 transition duration-200"
              onClick={handleNav}
            >
              About Us
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
