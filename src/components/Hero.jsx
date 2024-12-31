import React, { useRef, useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={heroRef}
      className="text-black flex flex-col items-center justify-center space-y-8 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen my-3"
    >
      {/* Hero Section Title */}
      <h1
        className={`text-center text-3xl sm:text-4xl md:text-5xl font-extrabold transition-all duration-700 
        ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}
        style={{ animationDelay: "0s" }}
      >
        Morocco <span className="text-blue-500">HPC</span> Events
      </h1>

      <p
        className={`text-center text-gray-700 max-w-2xl px-4 text-lg transition-all duration-700 
        ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}
        style={{ animationDelay: "0.2s" }}
      >
        Join us in exploring cutting-edge topics in HPC (High-Performance
        Computing) through interactive webinars and engaging conferences.
      </p>

      {/* Flex Container for Webinars and Conferences */}
      <div
        className={`flex flex-wrap justify-center gap-8 max-w-7xl transition-all duration-700 
        ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}
        style={{ animationDelay: "0.4s" }}
      >
        {/* Webinars Section */}
        <div className="bg-white shadow-xl p-6 rounded-xl w-full sm:w-[90%] md:w-[45%] lg:w-[30%] flex flex-col justify-between hover:scale-105 hover:shadow-2xl transition duration-300">
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">
            Webinars
          </h3>
          <ul className="text-lg text-gray-700 list-disc space-y-4">
            <li>Webinar: HPC101 - Kickoff Your Journey</li>
            <li>Webinar: Large Vision Model Parallelization on HPC Systems</li>
            <li>
              Webinar: HPC in Morocco - A Look at the Marwan Supercomputing
              Center
            </li>
          </ul>
          <button
            onClick={() => alert("Learn more about Webinars")}
            className="text-blue-500 font-semibold mt-8 hover:underline text-lg"
          >
            See more <span className="ml-1">&rarr;</span>
          </button>
        </div>

        {/* Conferences Section */}
        <div className="bg-white shadow-xl p-6 rounded-xl w-full sm:w-[90%] md:w-[45%] lg:w-[30%] flex flex-col justify-between hover:scale-105 hover:shadow-2xl transition duration-300">
          <h3 className="text-2xl font-semibold text-blue-800 mb-4">
            Conferences
          </h3>
          <ul className="text-lg text-gray-700 list-disc space-y-4">
            <li>Conference: HPC101 - Kickoff Your Journey</li>
            <li>
              Conference: Large Vision Model Parallelization on HPC Systems
            </li>
            <li>
              Conference: HPC in Morocco - A Look at the Marwan Supercomputing
              Center
            </li>
          </ul>
          <button
            onClick={() => alert("Learn more about Conferences")}
            className="text-blue-500 font-semibold mt-8 hover:underline text-lg"
          >
            See more <span className="ml-1">&rarr;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
