import React from "react";

const Testimonials = () => {
  return (
    <>
      <div className="py-12 px-10 flex-wrap ">
        <h1 className="text-4xl text-center font-bold mt-10 text-[#2E6FB7]" style={{ fontFamily: 'Satisfy' }}>Testimonials</h1>
        <div className="flex  items-center justify-center">

        <div className="flex flex-col items-center justify-center mt-10  rounded-lg p-6">
          <div className="max-w-2xl bg-white shadow-lg border  border-[#2F8DCC] rounded-4xl p-6 ">
            <p className="text-gray-700 text-lg mb-4">
              "Ticket Kaksha made my travel planning so easy! The booking
              process was seamless and the customer service was outstanding.
              Highly recommend!"
            </p>

            {/* this is testimonials 1st part */}
            <div className="flex text-center items-center justify-center gap-5">

            <div className="rounded-full">
                <img
                    src="/src/assets/testimonials/aman.jpg"
                    alt=" "
                    className="w-10 h-10 rounded-full"
                />
            </div>
            <p className="text-gray-500 text-sm">Aman Raut</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-10 rounded-lg p-6">
          <div className="max-w-2xl bg-white shadow-lg border  border-[#2F8DCC] rounded-4xl p-6">
            <p className="text-gray-700 text-lg mb-4">
              "Ticket Kaksha made my travel planning so easy! The booking
              process was seamless and the customer service was outstanding.
              Highly recommend!"
            </p>
            {/* this is testimonials 2nd part */}
             <div className="flex text-center items-center justify-center gap-5">

            <div className=" rounded-full">
                <img
                    src="/src/assets/testimonials/aman.jpg"
                    alt=" "
                    className="w-10 h-10 rounded-full"
                />
            </div>
            <p className="text-gray-500 text-sm"> Aman Raut</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
