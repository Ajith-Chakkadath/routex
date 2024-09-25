import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';

import { IoPaperPlane } from "react-icons/io5";
import { FaArrowLeft } from 'react-icons/fa6';
import { FaArrowRightLong } from "react-icons/fa6";
import { FaCheckSquare } from "react-icons/fa";
import { IoCheckbox } from "react-icons/io5";

const AboutSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left Section: Image Grid with Overlap */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-4 lg:h-[600px] md:h-[350px]  md:grid-cols-2 p-2 hidden md:block ">
          {/* Image 1: Larger Image */}
          <div className="relative col-span-2 lg:col-span-1 lg:h-[320px]  md:h-[200px] md:w-[240px] md:top-0 md:left-0 ">
            <img src={image1} alt="Main Image" className="w-full h-full object-cover rounded-lg shadow-lg" />
          </div>

          {/* Top Right Image */}
          <div className="relative lg:absolute lg:top-6 lg:right-28 lg:w-44 lg:h-44 md:w-28 md:h-28 md:top-6 md:left-64 md:absolute">
            <img src={image2} alt="Image 2" className="w-full h-full object-cover rounded-lg shadow-lg" />
          </div>

          {/* Bottom Right Image */}
          <div className="relative lg:absolute lg:bottom-24 lg:right-48 lg:w-60 lg:h-60 md:w-32 md:h-32 md:absolute md:bottom-14 md:left-32 ">
            <img src={image3} alt="Image 3" className="w-full h-full object-cover rounded-lg shadow-lg" />
          </div>

          {/* Green Box: 10+ Years of Experience */}
          <div className="bg-green-500 text-white p-6 rounded-lg absolute bottom-32 left-6 lg:w-24 lg:h-24 lg:flex lg:flex-col lg:justify-center lg:items-center md:w-20 md:h-24 md:p-2 md:bottom-8 md:left-0">
            <h2 className="text-3xl font-bold mb-2 md:text-sm">10+</h2>
            <p className="text-sm md:text-xs">Years Of Experience</p>
          </div>
        </div>

        {/* Right Section: Text */}
        <div className="w-full ">
        <h3 className="text-xs text-emerald-900 mb-4 flex items-center justify-start">
              <span className="mr-2">ABOUT US</span>
              <IoPaperPlane />
            </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4">
            Unknown Wanderlust<br />
            Your Journey into
          </h2>
          <p className="text-gray-700 text-base mb-6">
            We have been helping businesses and individuals migrate with confidence for over a decade. 
          </p>
          <div className="grid grid-cols-2 gap-3 mb-9">
            <div>
              <h1 className="flex items-center">
                <IoCheckbox  className="mr-2 text-green-500 " /> Safety Guideline
              </h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div>
              <h1 className="flex items-center">
                <IoCheckbox  className="mr-2 text-green-500" /> Migration Assistance
              </h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <a href="#" className="bg-green-500  text-white font-semibold py-3 px-6 rounded-full flex items-center w-44 h-12">
  <span className="mr-2">Know more</span>
  <FaArrowRightLong />
</a>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
