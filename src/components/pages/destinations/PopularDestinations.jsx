import { motion, AnimatePresence } from "framer-motion";

const destinations = [
  {
    title: "Agra, India",
    description: "Home to the magnificent Taj Mahal, Agra is a blend of history and architecture.",
    image: "/src/assets/popular/agra,india.png",
  },
  {
    title: "Kathmandu, Nepal",
    description: "The vibrant capital of Nepal, known for its temples and culture.",
    image: "/src/assets/popular/nepal.png",
  },
  {
    title: "Dubai",
    description: "A modern marvel of skyscrapers, luxury shopping, and desert adventures.",
    image: "/src/assets/popular/dubai.png",
  },
  {
    title: "Bangkok, Thailand",
    description: "Buzzing city full of life, food, temples, and floating markets.",
    image: "/src/assets/popular/bangkok,thailand.png",
  },
  {
    title: "Pisa, Italy",
    description: "Famous for the Leaning Tower, Pisa is a historic gem in Tuscany.",
    image: "/src/assets/popular/pisa,italy.png",
  },
  {
    title: "Bali, Indonesia",
    description: "A tropical paradise offering beaches, culture, and serenity.",
    image: "/src/assets/popular/bali.png",
  },
];



const DestinationCard = ({ title, description, image, index }) => (

  <motion.div
    className="w-full sm:w-[300px] bg-white rounded-xl shadow-md p-4 m-3 cursor-pointer"
    initial="hidden"
    animate="visible"
    exit="exit"
    whileHover={{
      scale: 1.03,
      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
    }}
    transition={{ type: "spring", stiffness: 200, damping: 15 }}
    custom={index}
    layout
  >
    <div className="overflow-hidden rounded-md mb-3">
      <motion.img
        src={image}
        alt={title}
        className="h-48 w-full object-cover rounded-md"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4 }}
      />
    </div>

    <h3 className="text-xl font-semibold mb-1">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>

    {/* <div className="flex justify-end mt-2">
      <a href="#" className="text-blue-600 text-sm hover:opacity-70 transition-opacity duration-200">
        See more..
      </a>
    </div> */}

    <div className="flex justify-center items-center mt-4">
      <motion.button
  whileHover={{ scale: 1.05 }}
  transition={{ type: "spring", stiffness: 300 }}
  className="bg-[#2F8DCC] text-white px-10 py-1 rounded-xl hover:bg-blue-600 transition "
  onClick={() => {
    const contactSection = document.getElementById("contactus");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  }}
>
  Contact Us
</motion.button>

    </div>
  </motion.div>
);

const PopularDestinations = () => {
  const visibleDestinations =  destinations.slice(0, 6);

  return (
    <div className="px-6 py-10 text-center max-w-screen-xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-[#2E6FB7] font-serif mb-2"
        style={{ fontFamily: 'Satisfy' }}
      >
        Popular Destinations
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="text-gray-600 max-w-xl mx-auto mb-8"
      >
        Explore our curated list of global destinations known for their beauty, history, and culture.
      </motion.p>

      <motion.div
        layout
        className="flex flex-wrap justify-center items-stretch"
      >
        <AnimatePresence>
          {visibleDestinations.map((dest, index) => (
            <DestinationCard key={dest.title} {...dest} index={index} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default PopularDestinations;
