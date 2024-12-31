import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HOC from "../img/HPC.jpg"; // Image for the conferences
import "./Conference.css";

const conferences = [
  {
    id: 1,
    year: "2024",
    month: "December",
    title: "MoroccoAI Annual Conference '24",
    image: HOC,
    description: "Driving the Future of Innovation Through AI.",
    date: "December 4-5, 2024",
    link: "#",
  },
  {
    id: 2,
    year: "2023",
    month: "December",
    title: "MoroccoAI Annual Conference '23",
    image: HOC,
    description: "Reshaping Work in the Era of AI.",
    date: "December 20-21, 2023",
    link: "#",
  },
  {
    id: 3,
    year: "2023",
    month: "August",
    title: "AI Summer School",
    image: HOC,
    description: "Explore cutting-edge AI topics and innovations.",
    date: "August 15-20, 2023",
    link: "#",
  },
];

function Conference() {
  const [animatedCards, setAnimatedCards] = useState([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, conferences.length);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = entry.target.getAttribute("data-index");
          if (entry.isIntersecting && !animatedCards.includes(index)) {
            setAnimatedCards((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [animatedCards]);

  return (
    <div className="bg-black flex flex-col min-h-screen">
      <Navbar />

      {/* Title Section with Cool Design and Animation */}
      <div className="text-center py-40 px-6 md:px-12 lg:px-24">
        <h1
          className="text-5xl sm:text-5xl font-semibold text-white leading-tight mb-14 animate-fadeInUp mt-12"
          style={{ animationDelay: "0.3s" }}
        >
          Morocco <span className="text-blue-600">HPC</span> Conferences
        </h1>
        <p
          className="text-white mt-12 mx-auto text-lg md:text-2xl sm:max-w-2xl lg:max-w-3xl animate-fadeInUp"
          style={{ animationDelay: "0.6s" }}
        >
          High-Performance Computing (HPC) events bring together experts,
          researchers, and leaders from various industries to explore and
          advance innovations in computing, AI, and science.
        </p>
      </div>

      {/* Timeline Section with Cards Hidden Initially */}
      <div className="flex-grow relative bg-black py-16 px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mt-16">
          {conferences.map((conf, index) => {
            const isAnimated = animatedCards.includes(index.toString());
            return (
              <div
                key={conf.id}
                className={`relative flex justify-center md:justify-start lg:justify-center`}
              >
                {/* Conference Card */}
                <div
                  className={`w-full max-w-md transform transition-all duration-700 ${
                    isAnimated ? "opacity-100 animate-fadeInUp" : "opacity-0"
                  }`}
                  data-index={index}
                  ref={(el) => (cardRefs.current[index] = el)}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300">
                    <img
                      src={conf.image}
                      alt={conf.title}
                      className="w-full h-56 object-cover"
                    />
                    <div className="p-6">
                      <h2 className="text-xl font-semibold text-gray-900 mb-3">
                        {conf.title}
                      </h2>
                      <p className="text-gray-700 mb-4">{conf.description}</p>
                      <p className="text-gray-600 font-medium">{conf.date}</p>
                      <a
                        href={conf.link}
                        className="text-blue-600 hover:text-blue-800 font-medium mt-4 inline-block"
                      >
                        Learn More &rarr;
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Conference;
