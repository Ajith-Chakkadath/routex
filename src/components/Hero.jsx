import heroImage from '../assets/Home.jpg';
import { FaArrowRightLong } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[400px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Green Mask */}
      <div className="absolute inset-0 bg-emerald-900 opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full text-white px-4">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
          Journey with Confidence
          <br />
          <span className="text-green-500">Migrate</span> with Us
        </h1>

        {/* Description */}
        <p className="text-sm md:text-lg lg:text-xl mb-4 mt-4 max-w-xl">
          We offer the best solutions to help you grow and succeed in your business. Join us today and explore the possibilities.
        </p>

        {/* Call to Action Button */}
        <a
          href="#"
          className="bg-green-500 mt-4 hover:bg-sky-600 text-white font-semibold py-3 px-6 rounded-full flex items-center space-x-2"
        >
          <span>Get Started</span>
          <FaArrowRightLong />
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
