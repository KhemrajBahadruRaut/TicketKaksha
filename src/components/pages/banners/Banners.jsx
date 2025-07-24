import React from "react";
import Marquee from "react-fast-marquee";
import { BiFullscreen } from "react-icons/bi";

const airlines = [
  { name: "Emirates", src: "/src/assets/airlines/emirates.png" },
  { name: "China Southern", src: "/src/assets/airlines/china.png" },
  { name: "Singapore Airlines", src: "/src/assets/airlines/singapore.png" },
  { name: "Qatar Airways", src: "/src/assets/airlines/qatar.png" },
  { name: "Turkish Airlines", src: "/src/assets/airlines/turkish.png" },
  { name: "Korean Air", src: "/src/assets/airlines/korean.png" }];

const Banners = () => (
  <div className="bg-white py-10">
    <h2 className="text-4xl font-[BrushScriptMT] text-[#2E6FB7] mb-10 text-center" style={{ fontFamily: 'Satisfy' }}>
      Airlines
    </h2>

    {/* Container with max width and horizontal padding */}
    <div className="container mx-auto px-4 overflow-hidden bg-[#f7f7f7] py-3">

      <Marquee speed={70} gradient={false} gradientWidth={0}>
        {airlines.map((airline, idx) => (
          <img
            key={idx}
            src={airline.src}
            alt={airline.name}
            style={{width:120,  marginRight: 120 }}
          />
        ))}
      </Marquee>
    </div>
  </div>
);

export default Banners;
