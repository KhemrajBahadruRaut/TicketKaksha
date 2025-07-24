import React, { useEffect, useState } from "react";

const images = [
  "/src/assets/about/thailand.png",
  "/src/assets/about/indonasia.png",
  "/src/assets/about/bali.png",
  "/src/assets/about/vietnam.png",
  "/src/assets/about/paris.png",
];

const AboutUs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Create a stack of 5 image indexes based on current activeIndex
  const getImageForPosition = (position) => {
    const index = (activeIndex + position + images.length) % images.length;
    return images[index];
  };

  return (
    <div className="" id="aboutus">
      <h1
        className="text-4xl text-[#2E6FB7] font-serif font-semibold text-center mt-10"
        style={{ fontFamily: "Satisfy" }}
      >
        About Us
      </h1>

      <div className="max-w-6xl mx-auto px-4 sm:py-16  flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left - Image Carousel */}
        <div className="w-full md:w-1/2 relative h-[300px] flex items-center justify-center overflow-hidden">
          {[-2, -1, 0, 1, 2].map((pos) => {
            const imgSrc = getImageForPosition(pos);
            const zIndex = pos === 0 ? 50 : 20 - Math.abs(pos);

            // Responsive scale/height/translate
            const isMobile = window.innerWidth < 768;

            const translateX = isMobile ? pos * 40 : pos * 80;
            let scale = 1,
              height = isMobile ? 190 : 300;
            if (Math.abs(pos) === 1) {
              scale = 0.9;
              height = isMobile ? 180 : 260;
            } else if (Math.abs(pos) === 2) {
              scale = 0.8;
              height = isMobile ? 150 : 220;
            }

            const opacity = pos === 0 ? 1 : 1;

            return (
              <img
                key={imgSrc}
                src={imgSrc}
                alt="rotating image"
                className={`absolute rounded-xl transition-all duration-700 ease-in-out ${
                  pos === 0 ? "shadow-2xl" : "shadow-md"
                }`}
                style={{
                  zIndex,
                  transform: `translateX(${translateX}px) scale(${scale})`,
                  opacity,
                  width: isMobile ? "200px" : "250px",
                  height: `${height}px`,
                  objectFit: "cover",
                }}
              />
            );
          })}
        </div>

        {/* Right - Text */}
        <div className="w-full md:w-1/2">
          <div className="space-y-5 text-gray-600 text-justify text-sm md:text-base">
            <p>
              At Ticket कक्ष Travels and Tours Pvt. Ltd., we specialize in
              providing fast, reliable, and affordable air ticketing services
              for both domestic and international flights. Whether you're
              planning a short trip within Nepal or a long journey abroad, our
              experienced team is here to make the process smooth and
              stress-free. With access to a wide range of airlines and flight
              options, we assist travelers in finding the best routes at the
              most competitive prices
            </p>
            <p>
              Our commitment goes beyond merely booking flights. We offer
              personalized support, discounts for students and groups, and
              assistance with visas and hotel reservations when necessary.
              Trusted by travelers across Nepal, Ticket कक्ष is proud to be your
              reliable travel partner; making every journey easier, smarter,
              and more enjoyable.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
