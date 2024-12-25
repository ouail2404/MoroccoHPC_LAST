import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Webinars.css";

const webinars = [
  {
    id: 1,
    title: "Webinar: Toubkal Supercomputer - Powering Morocco’s HPC Future",
    speakers: ["Dr. Guokan Shang", "Yousef Khoubrane"],
    roles: [
      "Lead Research Scientist, MBZUAI France Lab",
      "Graduate Student, UM6P",
    ],
    location: ["France", "Morocco"],
    date: "OCTOBER 31ST, 2024",

    link: "https://www.youtube.com/live/gB8_Mr-mb0o?si=xJqh2p2Ks5hiQFQH",
  },
  {
    id: 2,
    title:
      "Webinar: HPC in Morocco - A Look at the Marwan Supercomputing Center",
    speakers: ["Walid El Maouaki"],
    roles: ["PhD Student, Hassan II University"],
    location: ["Casablanca, Morocco"],
    date: "SEPTEMBER 27TH, 2024",

    link: "https://www.youtube.com/live/3iosdN51oUo?si=snyeB88HX4RfgZV0",
  },
  {
    id: 3,
    title: "Webinar: Large Vision Model Parallelization on HPC Systems",
    speakers: ["Ziyad Benomar"],
    roles: ["PhD Student, ENSAE"],
    location: ["Paris, France"],
    date: "JULY 10TH, 2024",

    link: "https://www.youtube.com/live/Ikm_aSJ7U7g?si=9b0BR5sNk2EoTPWX",
  },
  {
    id: 4,
    title: "Webinar: HPC101 - Kickoff Your Journey",
    speakers: ["Dr. Lina Karim"],
    roles: ["AI Researcher, Johns Hopkins University"],
    location: ["USA"],
    date: "AUGUST 15TH, 2024",

    link: "https://www.youtube.com/live/_PO5g6lC4W4?si=hcZdZIk6ucsURvMT",
  },
];

function Webinars() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow relative wb-section bg-cover bg-center bg-no-repeat mt-16 p-8">
        {/* Heading with Black Background */}
        <div className="inline-block bg-black p-4 mb-6 ">
          <span className="text-white text-4xl font-bold">OUR</span>{" "}
          <span className="text-blue-400 text-4xl font-bold">WEBINARS</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-opacity-80 p-6 rounded-lg">
          {webinars.map((webinar, index) => (
            <div
              key={webinar.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition animate-fadeInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <a
                href={webinar.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-bold mb-2 text-blue-600 hover:underline block"
              >
                {webinar.title}
              </a>
              {webinar.speakers.map((speaker, i) => (
                <div key={i} className="mb-2">
                  <p className="text-md font-semibold text-gray-800">
                    {speaker}
                  </p>
                  <p className="text-sm text-gray-600">{webinar.roles[i]}</p>
                  <p className="text-sm text-gray-500">{webinar.location[i]}</p>
                </div>
              ))}
              <div className="mt-4">
                <p className="text-gray-700 font-medium">{webinar.date}</p>
                <p className="text-gray-500">{webinar.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Webinars;
