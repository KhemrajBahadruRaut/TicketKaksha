import React, { useEffect, useState } from "react";

const AboutUs = () => {
  const [images, setImages] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [aboutText, setAboutText] = useState({ paragraph1: "", paragraph2: "" });

  const backendUrl = "http://localhost/TICKETKAKSHA/Backend"; 

  // Fetch data on mount
  useEffect(() => {
    fetch(`${backendUrl}/get_about_us.php`)
      .then((res) => res.json())
      .then((data) => {
        setImages(data.images || []);
        setAboutText({
          paragraph1: data?.text?.paragraph1 || "",
          paragraph2: data?.text?.paragraph2 || "",
        });
      })
      .catch((err) => console.error("Error fetching About Us:", err));
  }, []);

  // Handle image rotation
  useEffect(() => {
    if (images.length === 0) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [images]);

  const getImageForPosition = (position) => {
    const index = (activeIndex + position + images.length) % images.length;
    return `${backendUrl}/${images[index]}`;
  };

  return (
    <div id="aboutus">
      <h1
        className="text-4xl text-[#2E6FB7] font-semibold text-center mt-10"
        style={{ fontFamily: "Satisfy" }}
      >
        About Us
      </h1>

      <div className="max-w-6xl mx-auto px-4 sm:py-16 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Image Carousel */}
        <div className="w-full md:w-1/2 relative h-[300px] flex items-center justify-center overflow-hidden">
          {images.length >= 5 &&
            [-2, -1, 0, 1, 2].map((pos) => {
              const imgSrc = getImageForPosition(pos);
              const zIndex = pos === 0 ? 50 : 20 - Math.abs(pos);
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

              return (
                <img
                  key={imgSrc}
                  src={imgSrc}
                  alt="carousel"
                  className={`absolute rounded-xl transition-all duration-700 ease-in-out ${
                    pos === 0 ? "shadow-2xl" : "shadow-md"
                  }`}
                  style={{
                    zIndex,
                    transform: `translateX(${translateX}px) scale(${scale})`,
                    width: isMobile ? "200px" : "250px",
                    height: `${height}px`,
                    objectFit: "cover",
                  }}
                />
              );
            })}
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 pb-5">
          <div className="space-y-5 text-gray-600 text-justify text-sm md:text-base">
            <p>
              {aboutText.paragraph1 ? (
                <>
                  At{" "}
                  <span style={{ fontFamily: "yeseva" }} className="">
                    Ticket
                  </span>{" "}
                  <span style={{ fontFamily: "gotu" }}>कक्ष</span> Travels and Tours Pvt. Ltd.,{" "}
                  {aboutText.paragraph1}
                </>
              ) : (
                <span className="text-gray-400 italic">Loading content...</span>
              )}
            </p>
            <p>
              {aboutText.paragraph2 ? (
                aboutText.paragraph2
              ) : (
                <span className="text-gray-400 italic">Loading content...</span>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
