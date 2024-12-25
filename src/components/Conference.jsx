import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HOC from "../img/HPC.jpg";
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
  // State to track which cards have been animated
  const [animatedCards, setAnimatedCards] = useState([]);

  const cardRefs = useRef([]);

  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, conferences.length);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = entry.target.getAttribute("data-index");
          if (entry.isIntersecting && !animatedCards.includes(index)) {
            // Mark this card as animated
            setAnimatedCards((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 } // Adjust threshold as needed
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

      {/* Title Section */}
      <div className="text-center py-64">
        <h1 className="text-4xl font-bold text-white animate-fadeInUp">
          Morocco<span className="text-blue-600"> HPC</span> Conferences
        </h1>
        <p
          className="text-white mt-4 max-w-3xl mx-auto animate-fadeInUp"
          style={{ animationDelay: "0.4s" }}
        >
          HPC events bring together researchers, students, and industry leaders to explore,
          discuss, and advance knowledge in High-Performance Computing, fostering innovation
          and collaboration across various scientific and industrial fields.
        </p>
      </div>

      {/* Timeline */}
      <div className="flex-grow relative c-section bg-cover bg-center bg-no-repeat mt-16 p-7">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-white"></div>

        {conferences.map((conf, index) => {
          const isAnimated = animatedCards.includes(index.toString());
          return (
            <div
              key={conf.id}
              className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end"} mb-12 px-4`}
            >
              {/* Card Container */}
              <div
                className={`relative w-full md:w-1/2 ${
                  isAnimated ? "animate-fadeInUp" : "opacity-0"
                }`}
                data-index={index}
                ref={(el) => (cardRefs.current[index] = el)}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Conference Card */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <img
                    src={conf.image}
                    alt={conf.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h2 className="text-xl font-bold text-blue-600 mb-2">{conf.title}</h2>
                  <p className="text-gray-600 mb-2">{conf.description}</p>
                  <p className="text-gray-700 font-semibold">{conf.date}</p>
                  <a
                    href={conf.link}
                    className="text-pink-500 hover:text-blue-600 font-bold mt-2 inline-block"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Footer />
    </div>
  );
}

export default Conference;
