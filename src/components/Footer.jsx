import { FaFacebookF, FaInstagram, FaPinterestP, FaLinkedinIn } from "react-icons/fa6";
import { IoMdCheckmark } from "react-icons/io";
import { RiArrowDropRightLine } from "react-icons/ri";
import serviceImage from '../assets/Home.jpg';

const Footer = () => {
  const links = ["Latest News", "Career", "STORY", "VISA"];
  const services = ['Mistakes to avoid', 'Your Startup', 'Cruises', 'Flights'];

  return (
    <footer className="bg-emerald-900 text-white py-12 px-4 sm:px-6 md:px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-6 gap-8">
        {/* First Section - Spans 2 columns */}
        <div className="md:col-span-2">
          <h3 className="text-xl font-bold mb-4">LOGO</h3>
          <p className="text-gray-300">
            Corporate business typically refers to
            large-scale enterprises or organizations.
          </p>
          <div className="flex gap-4 mt-4">
            <FaFacebookF />
            <FaInstagram />
            <FaPinterestP />
            <FaLinkedinIn />
          </div>
        </div>

        {/* Second Section - Spans 1 column */}
        <div className="md:col-span-1">
          <h3 className="text-xl font-bold mb-4">Service Menu</h3>
          <ul>
            {services.map((service, index) => (
              <li key={index} className="mb-2">
                <a href="#" className="flex items-center">
                  <IoMdCheckmark className="text-green-300 mr-2" size={18} />
                  <span className="text-gray-300 hover:text-white">{service}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Third Section - Spans 1 column */}
        <div className="md:col-span-1">
          <h3 className="text-xl font-bold mb-4">Useful Links</h3>
          <ul>
            {links.map((link, index) => (
              <li key={index} className="mb-2">
                <a href="#" className="flex items-center">
                  <RiArrowDropRightLine className="text-green-300 mr-1" size={24} />
                  <span className="text-gray-300 hover:text-white">{link}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Fourth Section - Spans 2 columns */}
        <div className="md:col-span-2">
          <h3 className="text-xl font-bold mb-4">Gallery</h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="overflow-hidden rounded-lg">
                <img src={serviceImage} alt={`Gallery Image ${index + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <hr className="border-t-2 border-slate-100 my-9" />

      {/* Footer Bottom Section */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-4 md:mb-0">
          <h1 className="text-slate-200">@RRDevs2024 | All Rights Reserved</h1>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <h3 className="pr-4 text-slate-200">Terms & Condition</h3>
          <h3 className="pr-4 text-slate-200">Privacy Policy</h3>
          <h3 className="text-slate-200">Contact Us</h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
