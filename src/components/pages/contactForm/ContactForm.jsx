import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const ContactForm = () => {
  return (
    <section className="bg-white py-12 px-4 max-w-5xl mx-auto text-center " id="contactus">
      <h2 className="text-4xl text-[#2E6FB7] font-serif font-semibold mb-10" style={{ fontFamily: 'Satisfy' }}>Contact us</h2>

      <form className="max-w-xl mx-auto space-y-6 text-left">
        <div>
          <label htmlFor="name" className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            id="email"
            placeholder="abc@gmail.com"
            className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2"
          />
        </div>

        <div>
          <label htmlFor="contact" className="block mb-1 font-medium">Contact details</label>
          <input
            type="text"
            id="contact"
            placeholder="Your number"
            className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-1 font-medium">Message</label>
          <textarea
            id="message"
            rows="4"
            placeholder="Type your message here ..."
            className="w-full border border-gray-400 rounded-lg p-3 focus:outline-blue-500 resize-none"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-[#2F8DCC] text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300"
          >
            Send a message
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
