import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGlobeAmericas
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            className="col-span-1 md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              {/* <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div> */}
              <a href="/" className="text-2xl font-bold text-white no-underline hover:text-white">
                Raynott
              </a>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Transforming ideas into digital reality. We provide comprehensive web solutions, 
              software development, and digital marketing services to help your business thrive.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://facebook.com/raynott"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300 no-underline"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaFacebookF className="text-white text-sm" />
              </motion.a>
              
              <motion.a
                href="https://twitter.com/raynott"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300 no-underline"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTwitter className="text-white text-sm" />
              </motion.a>
              
              <motion.a
                href="https://linkedin.com/company/raynott"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300 no-underline"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedinIn className="text-white text-sm" />
              </motion.a>
              
              <motion.a
                href="https://instagram.com/raynott"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300 no-underline"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaInstagram className="text-white text-sm" />
              </motion.a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* <h4 className="text-lg font-semibold mb-4 font-poppins">Services</h4> */}
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 no-underline font-inter flex items-center gap-2">
                  <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 no-underline font-inter flex items-center gap-2">
                  <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 no-underline font-inter flex items-center gap-2">
                  <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                  Services
                </a>
              </li>
              <li>
                <a href="/gallery" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 no-underline font-inter flex items-center gap-2">
                  <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                  Gallery
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 no-underline font-inter flex items-center gap-2">
                  <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                  Contact
                </a>
              </li>
             
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4 font-poppins">Contact</h4>
            <div className="space-y-3 text-gray-300">
              <a href="mailto:info@raynott.com" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 no-underline flex items-center gap-3 font-inter">
                <FaEnvelope className="text-orange-500 flex-shrink-0" />
                info@raynott.com
              </a>
              <a href="tel:+919876543210" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 no-underline flex items-center gap-3 font-inter">
                <FaPhone className="text-orange-500 flex-shrink-0" />
                +91 98765 43210
              </a>
              <a href="https://maps.google.com/?q=123+Business+Ave+Suite+100+Bangalore" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-400 transition-colors duration-300 no-underline flex items-center gap-3 font-inter">
                <FaMapMarkerAlt className="text-orange-500 flex-shrink-0" />
                123 Business Ave, Suite 100
              </a>
              <div className="flex items-center gap-3 text-gray-300 font-inter">
                <FaGlobeAmericas className="text-orange-500 flex-shrink-0" />
                Bangalore, Karnataka 560001
              </div>
            </div>
          </motion.div>
        </div>


      </div>
    </footer>
  );
};

export default Footer;