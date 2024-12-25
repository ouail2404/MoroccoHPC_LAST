import React from "react";
import speakerImage from "../img/O-M.jpg"; // Import the speaker image
import "./HeroMain.css"; // Import the CSS file for the Hero component

export default function HeroMain() {
  return (
    <div className="relative hero-section min-h-screen w-full flex items-center justify-center px-4 md:px-8 text-white pt-24">
      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full max-w-7xl mx-auto space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Left Content */}
        <div className="flex-1 min-w-[280px] lg:min-w-[300px] text-center lg:text-left px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            <span
              className="text-white inline-block animate-fadeInUp"
              style={{ animationDelay: "0s" }}
            >
              UPCOMING
            </span>{" "}
            <span
              className="text-[#3366FF] inline-block animate-fadeInUp"
              style={{ animationDelay: "0.2s" }}
            >
              EVENT
            </span>
          </h1>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <button
              className="bg-[#3366FF] text-white px-6 py-3 md:px-8 md:py-4 rounded-full hover:bg-[#6699FF] hover:-translate-y-1 transform transition duration-300 font-semibold shadow-md animate-fadeInUp"
              style={{ animationDelay: "0.4s" }}
            >
              LEARN MORE
            </button>
            <a href="https://docs.google.com/forms/d/1jM26l5UBpUrJ7AXwwryEI13TeuSzSMa1OusruLGb7ck/edit?usp=forms_home&ths=true">
              {" "}
              <button
                className="bg-white text-[#3366FF] px-6 py-3 md:px-8 md:py-4 rounded-full hover:bg-[#F0F4FF] hover:-translate-y-1 transform transition duration-300 font-semibold shadow-md animate-fadeInUp"
                style={{ animationDelay: "0.6s" }}
              >
                REGISTER
              </button>
            </a>
          </div>
        </div>

        {/* Right Content - Webinar Info Card */}
        <div
          className="flex-1 min-w-[280px] lg:max-w-md bg-white text-gray-800 rounded-lg shadow-2xl p-4 md:p-6 animate-fadeInUp"
          style={{ animationDelay: "0.8s" }}
        >
          <div className="text-center">
            <img
              src={speakerImage}
              alt="Ouail El Maadi"
              className="rounded-full w-24 h-24 md:w-32 md:h-32 object-cover mb-4 border-4 border-[#3366FF] shadow-lg mx-auto"
            />
            <h1 className="text-lg md:text-2xl font-bold text-center mb-2 md:mb-4 text-[#3366FF]">
              HPC in Morocco - A Look at the Marwan Supercomputing Center
            </h1>
            <h3 className="text-base md:text-lg font-semibold text-[#6699FF] mb-1 md:mb-2">
              Ouail El Maadi
            </h3>
            <p className="text-center text-gray-600 text-sm md:text-base mb-4">
              Computer Science Student, Al Akhawayn University
              <br />
              Ifrane, Morocco
            </p>
          </div>
          <div className="flex items-center justify-center mt-4 md:mt-6 space-x-4 md:space-x-8">
            <div className="text-center text-[#3366FF]">
              <i className="far fa-calendar-alt text-xl md:text-2xl"></i>
              <p className="text-sm md:text-lg font-bold mt-1 md:mt-2">
                September 27th, 2024
              </p>
            </div>
            <div className="text-center text-[#3366FF]">
              <i className="far fa-clock text-xl md:text-2xl"></i>
              <p className="text-sm md:text-lg font-bold mt-1 md:mt-2">
                20H RABAT
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
