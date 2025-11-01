import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-gradient-to-r from-orange-600 to-amber-600 shadow-xl sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <motion.div
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <a href="/" className="text-3xl font-bold text-white no-underline hover:text-white">
                            Raynott
                        </a>
                    </motion.div>
                    

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <motion.a
                            href="/"
                            className="text-lg text-white hover:text-amber-200 font-semibold transition-colors duration-300 relative group no-underline"
                            whileHover={{ y: -2 }}
                        >
                            Home
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-200 group-hover:w-full transition-all duration-300"></span>
                        </motion.a>

                        <motion.a
                            href="/about"
                            className="text-lg text-white hover:text-amber-200 font-semibold transition-colors duration-300 relative group no-underline"
                            whileHover={{ y: -2 }}
                        >
                            About
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-200 group-hover:w-full transition-all duration-300"></span>
                        </motion.a>

                        <motion.a
                            href="/services"
                            className="text-lg text-white hover:text-amber-200 font-semibold transition-colors duration-300 relative group no-underline"
                            whileHover={{ y: -2 }}
                        >
                            Services
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-200 group-hover:w-full transition-all duration-300"></span>
                        </motion.a>

                        <motion.a
                            href="/gallery"
                            className="text-lg text-white hover:text-amber-200 font-semibold transition-colors duration-300 relative group no-underline"
                            whileHover={{ y: -2 }}
                        >
                            Gallery
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-200 group-hover:w-full transition-all duration-300"></span>
                        </motion.a>

                        <motion.a
                            href="/contact"
                            className="text-lg text-white hover:text-amber-200 font-semibold transition-colors duration-300 relative group no-underline"
                            whileHover={{ y: -2 }}
                        >
                            Contact
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-200 group-hover:w-full transition-all duration-300"></span>
                        </motion.a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <motion.div
                        className="md:hidden py-4 border-t border-orange-500"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                    >
                        <div className="flex flex-col space-y-4">
                            <a
                                href="/"
                                className="text-lg text-white hover:text-amber-200 font-semibold transition-colors duration-300 no-underline"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </a>
                            <a
                                href="/about"
                                className="text-lg text-white hover:text-amber-200 font-semibold transition-colors duration-300 no-underline"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About
                            </a>
                            <a
                                href="/services"
                                className="text-lg text-white hover:text-amber-200 font-semibold transition-colors duration-300 no-underline"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Services
                            </a>
                            <a
                                href="/gallery"
                                className="text-lg text-white hover:text-amber-200 font-semibold transition-colors duration-300 no-underline"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Gallery
                            </a>
                            <a
                                href="/contact"
                                className="text-lg text-white hover:text-amber-200 font-semibold transition-colors duration-300 no-underline"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                            </a>
                        </div>
                    </motion.div>
                )}
            </div>
        </header>
    );
};

export default Header;