import React, { useRef, useEffect, useState } from "react";
import walid_houmaidi from "../img/H-M.jpg";
import ouail_elmaadi from "../img/O-M.jpg";

const speakers = [
  {
    name: "Dr. Safae Bourhnane",
    image: walid_houmaidi,
  },
  {
    name: "Dr. Lahcen laayouni",
    image: ouail_elmaadi,
  },
  {
    name: "Dr. Imad Kissami",
    image: null,
  },
  {
    name: "Dr. Vijeta Sharma",
    image: null,
  },
  {
    name: "Bouchra Rahim",
    image: null,
  },
  {
    name: "Dr. Robert Basmadjian",
    image: null,
  },
];

export default function Keynotes() {
  const scrollContainerRef = useRef(null);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const scrollAmount = 200; // Slightly reduced scroll amount
  const scrollIntervalTime = 2000; // Slowed down to 2 seconds per scroll

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    if (direction === "left") {
      container.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    } else {
      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // If the section is visible in the viewport
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    if (!isVisible || !scrollContainerRef.current) return;

    const container = scrollContainerRef.current;

    const autoScroll = setInterval(() => {
      // If we're near the end, reset to the start
      if (
        container.scrollLeft + container.offsetWidth >=
        container.scrollWidth - 10
      ) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }, scrollIntervalTime);

    return () => clearInterval(autoScroll);
  }, [isVisible]);

  return (
    <div
      ref={sectionRef}
      className="keynotes-section py-12 bg-gray-100 relative"
    >
      <div className="max-w-7xl mx-auto text-center px-4">
        <h2
          className={`text-4xl font-bold mb-4 transition-all duration-700 ${
            isVisible ? "animate-fadeInUp" : "opacity-0"
          }`}
          style={{ animationDelay: "0s" }}
        >
          MoroccoHPC Webinars '24{" "}
          <span className="text-blue-500">Speakers</span>
        </h2>
        <p
          className={`text-lg text-gray-600 mb-8 transition-all duration-700 ${
            isVisible ? "animate-fadeInUp" : "opacity-0"
          }`}
          style={{ animationDelay: "0.2s" }}
        >
          Discover the latest breakthroughs and innovations in High Performance
          Computing.
        </p>
      </div>

      {/* Arrow Buttons */}
      <button
        className={`hidden lg:block absolute left-40 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none z-20 -ml-6 transition-all duration-700 ${
          isVisible ? "animate-fadeInUp" : "opacity-0"
        }`}
        style={{ animationDelay: "0.4s" }}
        onClick={(e) => {
          e.preventDefault();
          scroll("left");
        }}
      >
        &#8592;
      </button>
      <button
        className={`hidden lg:block absolute right-40 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none z-20 -mr-6 transition-all duration-700 ${
          isVisible ? "animate-fadeInUp" : "opacity-0"
        }`}
        style={{ animationDelay: "0.6s" }}
        onClick={(e) => {
          e.preventDefault();
          scroll("right");
        }}
      >
        &#8594;
      </button>

      {/* Scrollable Container */}
      <div
        className={`relative flex justify-center items-center overflow-hidden mt-4 transition-all duration-700 ${
          isVisible ? "animate-fadeInUp" : "opacity-0"
        }`}
        style={{ animationDelay: "0.5s" }}
      >
        <div
          ref={scrollContainerRef}
          className="flex items-center space-x-6 overflow-x-auto no-scrollbar max-w-4xl px-4 snap-x snap-mandatory"
        >
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg text-center p-6 w-[250px] flex-shrink-0 snap-start"
            >
              <img
                src={speaker.image || "default.png"}
                alt={speaker.name}
                className="rounded-full w-24 h-24 mx-auto mb-4 border-4 border-blue-500 object-cover"
                loading="lazy"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {speaker.name}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Conference Action Buttons at the Bottom */}
      <div className="max-w-7xl mx-auto text-center px-4 mt-8">
        <div
          className={`flex justify-center space-x-4 transition-all duration-700 ${
            isVisible ? "animate-fadeInUp" : "opacity-0"
          }`}
          style={{ animationDelay: "1s" }}
        >
          <a
            href="#"
            className="inline-block px-6 py-3 text-sm font-medium text-white rounded-full bg-blue-500 hover:bg-blue-600 transition duration-300"
          >
            Learn More
          </a>
          <a
            href="#"
            className="inline-block px-6 py-3 text-sm font-medium text-white rounded-full bg-black hover:bg-gray-600 transition duration-300"
          >
            Watch Recordings
          </a>
        </div>
      </div>
    </div>
  );
}
