import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Webinars.css";

const webinars = [
  {
    id: 1,
    title:
      "Webinar: HPC101 - Kickoff Your Journey Webinar: Toubkal Supercomputer - Powering Morocco’s HPC Future",
    speakers: [
      "Dr. Safae Bourhnane",
      "Dr. Lahcen Laayouni",
      "Dr. Imad Kissami",
    ],
    roles: [
      "High Performance Computing Specialist, Leibniz Institute for Natural Product Research and Infection Biology - Hans Knöll Institute ",
      "Full-Time Professor at Al Akhawayn University",
      "Assistant Professor at UM6P",
    ],
    date: "OCTOBER 9TH, 2024",
    link: "https://www.youtube.com/watch?v=_PO5g6lC4W4&t=1221s&ab_channel=MoroccoHPC",
  },
  {
    id: 2,
    title: "Webinar: Large Vision Model Parallelization on HPC Systems",
    speakers: ["Dr. Vijeta Sharma", "Dr. Safae Bourhnane"],
    roles: [
      "Scientist, Norwegian University of Science & Technology (NTNU), Norway",
      "Scientific Computing Team Leader at the National Center for Scientific and Technical Research (CNRST)",
    ],
    date: "OCTOBER 22TH, 2024",
    link: "https://www.youtube.com/watch?v=Ikm_aSJ7U7g&ab_channel=MoroccoHPC",
  },
  {
    id: 3,
    title:
      "Webinar: HPC in Morocco - A Look at the Marwan Supercomputing Center",
    speakers: [
      "Bouchra Rahim",
      "Dr. Safae Bourhnane",
      "Dr. Lahcen Laayouni",
      "Dr. Imad Kissami",
    ],
    roles: [
      "Scientific Computing Team Leader at the National Center for Scientific and Technical Research (CNRST)",
      "High Performance Computing Specialist, Leibniz Institute for Natural Product Research and Infection Biology - Hans Knöll Institute ",
      "Full-Time Professor at Al Akhawayn University",
      "Assistant Professor at UM6P",
    ],
    date: "NOVEMBER 8TH, 2024",
    link: "https://www.youtube.com/live/3iosdN51oUo?si=snyeB88HX4RfgZV0",
  },
  {
    id: 4,
    title: "Webinar: Toubkal Supercomputer - Powering Morocco’s HPC Future",
    speakers: ["Dr. Robert Basmadjian", "Dr. Safae Bourhnane"],
    roles: [
      "Associate Professor at College of Computing UM6P/ Head of Toubkal Supercomputer",
      "Scientific Computing Team Leader at the National Center for Scientific and Technical Research (CNRST)",
    ],
    date: "NOVEMBER 22TH, 2024",
    link: "https://www.youtube.com/watch?v=gB8_Mr-mb0o&ab_channel=MoroccoHPC",
  },
];

function Webinars() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow relative wb-section bg-cover bg-center bg-no-repeat mt-16 p-8">
        {/* Heading with Black Background */}
        <div className="bg-black p-4 mb-6 mx-auto justify-center text-center">
          <span className="text-white text-4xl font-bold">OUR</span>{" "}
          <span className="text-blue-400 text-4xl font-bold">WEBINARS</span>
        </div>

        {/* Webinar Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-opacity-80 p-6 rounded-lg">
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
                </div>
              ))}
              <div className="mt-4">
                <p className="text-gray-700 font-medium">{webinar.date}</p>
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
