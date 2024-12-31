import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WalidImage from "../img/H-M.jpg"; // Replace with actual image path
import OuailImage from "../img/O-M.jpg"; // Replace with actual image path
import SafaeImage from "../img/safae.jpg"; // Replace with actual image path

function About() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Content Container with extra top margin to avoid navbar overlap */}
      <div className="flex-grow max-w-5xl mx-auto px-4 py-16 mt-24 text-lg">
        {/* Introduction Paragraph */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">About The Team</h1>
          <p className="text-gray-300 leading-relaxed">
            This application was developed by{" "}
            <span className="font-semibold text-white">Walid Houmaidi</span> and{" "}
            <span className="font-semibold text-white">Ouail El Maadi</span>,
            under the supervision of{" "}
            <span className="font-semibold text-white">
              Dr. Safae Bourhnane
            </span>
            . Our collaborative effort and guidance ensured a high-quality
            product that aims to serve its users effectively.
          </p>
        </div>

        {/* Team Section */}
        <div className="space-y-8">
          {/* Walid Card (no delay) */}
          <div className="rounded-lg shadow p-6 flex flex-col items-center animate-fadeInUp transition-transform duration-500 hover:scale-105 text-white">
            <div className="rounded-full border-4 border-blue-600 w-32 h-32 overflow-hidden mb-4">
              <img
                src={WalidImage}
                alt="Walid Houmaidi"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl font-semibold">Walid Houmaidi</h2>
            <p className="mt-2 text-center">
              Developer, Al Akhawayn University Student
            </p>
          </div>

          {/* Ouail Card (0.2s delay) */}
          <div
            className=" rounded-lg shadow p-6 flex flex-col items-center animate-fadeInUp transition-transform duration-500 hover:scale-105 text-white"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="rounded-full border-4 border-blue-600 w-32 h-32 overflow-hidden mb-4">
              <img
                src={OuailImage}
                alt="Ouail El Maadi"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl font-semibold">Ouail El Maadi</h2>
            <p className="mt-2 text-center">
              Developer, Al Akhawayn University Student
            </p>
          </div>

          {/* Dr. Safae Card (0.4s delay) */}
          <div
            className=" rounded-lg shadow p-6 flex flex-col items-center animate-fadeInUp transition-transform duration-500 hover:scale-105 text-white"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="rounded-full border-4 border-blue-600 w-32 h-32 overflow-hidden mb-4 bg-gray-200 flex items-center justify-center">
              <img
                src={SafaeImage}
                alt="Dr. Safae Bourhnane"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl font-semibold">Dr. Safae Bourhnane</h2>
            <p className="mt-2 text-center">Supervisor</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default About;
