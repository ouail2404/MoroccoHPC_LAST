import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white w-full pt-12 pb-8">
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Logo and About Section */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold md:text-4xl">
            Morocco <span className="text-blue-500">HPC</span>
          </h1>
          <p className="text-lg leading-relaxed">
            Non-profit Organization to Promote HPC Growth in Morocco Across the
            Spectrum.
          </p>
          <p className="text-sm opacity-75">
            © MoroccoHPC 2025. All Rights Reserved.
          </p>
        </div>

        {/* Contact Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold md:text-2xl">Contact Us</h3>
          <p className="text-lg">team@morocco.hpc</p>
          <ul className="flex space-x-4">
            <li>
              <a
                href="#"
                className="hover:text-blue-500 transition duration-300"
                aria-label="Instagram"
              >
                <FaInstagram size={28} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/moroccohpc/posts/?feedView=all"
                className="hover:text-blue-500 transition duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={28} />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-500 transition duration-300"
                aria-label="Facebook"
              >
                <FaFacebook size={28} />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@MoroccoHPC"
                className="hover:text-blue-500 transition duration-300"
                aria-label="YouTube"
              >
                <FaYoutube size={28} />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-500 transition duration-300"
                aria-label="Twitter"
              >
                <FaTwitter size={28} />
              </a>
            </li>
          </ul>
        </div>

        {/* Events Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold md:text-2xl">Events</h3>
          <ul className="space-y-4">
            <li>
              <a
                href="conference"
                className="text-lg hover:text-blue-500 transition duration-300"
              >
                Conferences
              </a>
            </li>
            <li>
              <a
                href="Webinars"
                className="text-lg hover:text-blue-500 transition duration-300"
              >
                Webinars
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-lg hover:text-blue-500 transition duration-300"
              >
                Newsletter
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Line */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm opacity-75">
        Made by MoroccoHPC Team
      </div>
    </footer>
  );
};

export default Footer;
