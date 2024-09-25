import serviceImage from '../assets/Home.jpg'; // Example image for the background
import cardImage from '../assets/Home.jpg'; // Example image for the card
import { FaArrowRight } from "react-icons/fa"; 

import { IoPaperPlane } from "react-icons/io5";
import { FaArrowLeft } from 'react-icons/fa6';

const ServiceSection = () => {
  return (
    <section className="relative py-20 bg-green-200 px-4 md:px-20">
      {/* Background Grid */}
      <div className="absolute inset-0 grid grid-cols-3 w-full h-full">
        {/* Left Section - Empty for now */}
        <div className="col-span-2"></div>
        {/* Right Section with Background Image and Gradient - Hidden on small screens */}
        <div
          className="hidden md:block h-full bg-cover bg-center rounded-l-3xl"
          style={{
            backgroundImage: `linear-gradient(to bottom, white 0%, rgba(255, 255, 255, 0) 100%), url(${serviceImage})`
          }}
        ></div>
      </div>

      {/* Content on Top */}
      <div className="relative z-10">
        {/* Heading and Arrow */}
        <div className="flex justify-between items-center">
          {/* Top Title and Heading */}
          <div>
            <h3 className="text-xs text-emerald-900 mb-4 flex items-center justify-start">
              <span className="mr-2">ABOUT US</span>
              <IoPaperPlane />
            </h3>
            <h1 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-8">
              Adventure Unleashed <br />
              Discover Your Next
            </h1>
          </div>

          {/* Arrow for Upcoming Slides */}
          <div className="flex items-center">
          <FaArrowLeft className="text-3xl text-emerald-900 cursor-pointer hover:text-emerald-600 " />
            <FaArrowRight className="text-3xl text-emerald-900 cursor-pointer hover:text-emerald-600" />
          </div>
        </div>

        {/* Service Cards */}
        <div className="container mx-auto flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-9">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center w-90">
            <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
              <img src={cardImage} alt="Service 1" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold text-emerald-900 mb-4">Service One</h3>
            <p className="text-gray-600 text-center">
              Description of Service One. Solutions that help you grow and succeed.
              Description of Service One. Solutions that help you grow and succeed.
              Description of Service One. Solutions that help you grow and succeed.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center w-90">
            <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
              <img src={cardImage} alt="Service 2" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold text-emerald-900 mb-4">Service Two</h3>
            <p className="text-gray-600 text-center">
              Description of Service Two. Tailored solutions for business success.
              Description of Service Two. Tailored solutions for business success.
              Description of Service Two. Tailored solutions for business success.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center w-90 relative">
            <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
              <img src={cardImage} alt="Service 3" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold text-emerald-900 mb-4">Service Three</h3>
            <p className="text-gray-600 text-center">
              Description of Service Three. Solutions that help you grow and succeed.
              Description of Service Three. Solutions that help you grow and succeed.
              Description of Service Three. Solutions that help you grow and succeed.
            </p>

            {/* Dark Background for Card 3 */}
            <div className="absolute inset-0 bg-black opacity-25 rounded-lg z-[-1]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
