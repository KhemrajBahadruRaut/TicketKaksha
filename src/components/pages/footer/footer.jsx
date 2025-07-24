import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="relative mt-20 ">
        
        {/* Contact Info with Background Image */}
        <div
          className="pt-28 pb-10 z-10 2xl:h-110 bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url('/src/assets/footer/footerimage.png')",
          }}
        >
          <div className="px-4 grid grid-cols-1 sm:grid-cols-3 gap-6 text-white relative container mx-auto 2xl:pt-40 ">
            <div className="flex flex-col items-center">
              <div className="bg-[#2F8DCC] p-4 rounded-full mb-3">
                <FaPhoneAlt size={24} />
              </div>
              <p className="font-semibold">+977 9851155689</p>
              <span className="text-sm">Contct us</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-[#2F8DCC] p-4 rounded-full mb-3">
                <FaMapMarkerAlt size={24} />
              </div>
              <p className="font-semibold">
                Boudhanath Sadak, Kathmandu, Nepal
              </p>
              <span className="text-sm">Visit us</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-[#2F8DCC] p-4 rounded-full mb-3">
                <FaEnvelope size={24} />
              </div>
              <p className="font-semibold">ticketkaksha@gmail.com</p>
              <span className="text-sm">Email us</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
