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
              <a href="/" className="text-2xl font-bold text-white no-underline hover:text-white">
                Raynott Technologies
              </a>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Transforming ideas into digital reality. We provide comprehensive web solutions, 
              software development, and digital marketing services to help your business thrive.
            </p>
            {/* <div className="flex space-x-4">
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
            </div> */}
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
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
              <a href="mailto:Raynottindia@gmail.com" className="text-orange-400 font-semibold hover:text-orange-300 transition-colors duration-300 no-underline flex items-center gap-3 font-inter">
                <FaEnvelope className="text-orange-500 flex-shrink-0" />
                Raynottindia@gmail.com
              </a>
              <a href="tel:+918618591978" className="text-orange-400 font-semibold hover:text-orange-300 transition-colors duration-300 no-underline flex items-center gap-3 font-inter">
                <FaPhone className="text-orange-500 flex-shrink-0" />
                +91 86185 91978
              </a>
              <a href="https://maps.google.com/?q=Neeradri+Electronic+City+Bangalore" target="_blank" rel="noopener noreferrer" className="text-orange-400 font-semibold hover:text-orange-300 transition-colors duration-300 no-underline flex items-center gap-3 font-inter">
                <FaMapMarkerAlt className="text-orange-500 flex-shrink-0" />
                Neeradri, Electronic City,
                Bangalore, Karnataka 560100
              </a>
              {/* <div className="flex items-center gap-3 text-orange-400 font-semibold font-inter">
                <FaGlobeAmericas className="text-orange-500 flex-shrink-0" />
                Bangalore, Karnataka 560100
              </div> */}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        {/* <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm font-inter">
              © {currentYear} Raynott Technologies. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm no-underline font-inter">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm no-underline font-inter">
                Terms of Service
              </a>
              <a href="/sitemap" className="text-gray-400 hover:text-orange-400 transition-colors duration-300 text-sm no-underline font-inter">
                Sitemap
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;