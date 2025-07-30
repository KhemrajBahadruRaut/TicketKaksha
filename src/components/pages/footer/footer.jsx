import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaViber,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative">
      {/* Background Image Section */}
      <div 
        className="pt-70 sm:pt-48 pb-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/src/assets/footer/footerimage.png')",
        }}
      >
        <div className="container mx-auto px-4">
          {/* Contact Information Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-white">
            {/* Contact Us */}
            <div className="flex flex-col items-center">
              <div className="bg-[#2F8DCC] p-4 rounded-full mb-4 hover:scale-105 transition-transform">
                <FaPhoneAlt size={24} />
              </div>
              <h3 className="font-semibold text-lg">+977 9851155689</h3>
              <p className="text-sm opacity-90">Contact us</p>
            </div>

            {/* Visit Us */}
            <div className="flex flex-col items-center">
              <div className="bg-[#2F8DCC] p-4 rounded-full mb-4 hover:scale-105 transition-transform">
                <FaMapMarkerAlt size={24} />
              </div>
              <h3 className="font-semibold text-lg text-center">
                Boudhanath Sadak, Kathmandu, Nepal
              </h3>
              <p className="text-sm opacity-90 mb-4">Visit us</p>
              
              {/* Social Media Links */}
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/karmasilaenterprises"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-80 hover:opacity-100 hover:text-blue-700 transition-all"
                  aria-label="Facebook"
                >
                  <FaFacebook size={20} />
                </a>
                <a
                  href="https://www.instagram.com/karmasila_enterprises/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-80 hover:opacity-100 hover:text-pink-300 transition-all"
                  aria-label="Instagram"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="viber://chat?number=+9779851352013"
                  className="opacity-80 hover:opacity-100 hover:text-purple-300 transition-all"
                  aria-label="Viber"
                >
                  <FaViber size={20} />
                </a>
              </div>
            </div>

            {/* Email Us */}
            <div className="flex flex-col items-center">
              <div className="bg-[#2F8DCC] p-4 rounded-full mb-4 hover:scale-105 transition-transform">
                <FaEnvelope size={24} />
              </div>
              <h3 className="font-semibold text-lg">ticketkaksha@gmail.com</h3>
              <p className="text-sm opacity-90">Email us</p>
            </div>
          </div>

          {/* Copyright Section */}
          <div className=" pt-2 mt-2 border-t text-white border-white border-opacity-20 text-center">
            <h4 className="text-md!">Powered By</h4>
            <a
              href="https://gr8nepal.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
              aria-label="GR8 Nepal"
            >
              <img
                src="/src/assets/footerlogo/GR8-Nepal-Private-Limited-Logo.png"
                alt="GR8 Nepal Logo"
                className="h-10 w-10 object-contain mx-auto opacity-80 hover:opacity-100 transition-opacity"
              />
            </a>
            <p className=" mt-2">
              © {new Date().getFullYear()}{" "}
              <span className="font-serif">Ticket</span>{" "}
              <span className="font-sans">कक्ष</span>. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;