import React from "react";

const csrData = [
  {
    title: "Environmental Care",
    image: "/src/assets/bali/bali.png", // Replace with actual image path
    description: "We invest in green energy and support initiatives that promote sustainability and reduce carbon footprint.",
  },
  {
    title: "Education Support",
    image: "/assets/images/education.jpg",
    description: "Our scholarship programs empower underprivileged students to pursue their dreams through quality education.",
  },
  {
    title: "Community Engagement",
    image: "/assets/images/community.jpg",
    description: "We collaborate with local organizations to uplift communities through volunteering and development projects.",
  },
  {
    title: "Healthcare Initiatives",
    image: "/assets/images/healthcare.jpg",
    description: "We run free health camps and support medical care in rural areas for better public health.",
  },
  {
    title: "Healthcare Initiatives",
    image: "/assets/images/healthcare.jpg",
    description: "We run free health camps and support medical care in rural areas for better public health.",
  },
];

const CsrCards = () => {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl text-[#2E6FB7] mb-10 text-center"
        style={{ fontFamily: 'Satisfy, cursive' }}>Our CSR Initiatives</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {csrData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CsrCards;
