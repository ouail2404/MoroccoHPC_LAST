import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Newsletter() {
  return (
    <div className="relative flex flex-col bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Navbar */}
      <Navbar />

      <div className="flex-grow h-[calc(100vh+200px)] flex items-center justify-center text-center">
        <div className="px-4 sm:px-8 md:px-12">
          <h1 className="text-6xl font-bold text-white tracking-wide mb-6 animate-fadeInUp">
            STAY <span className="text-blue-600">TUNED</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fadeInUp">
            We’re working on something exciting. Be the first to know—stay tuned
            for updates!
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Newsletter;
