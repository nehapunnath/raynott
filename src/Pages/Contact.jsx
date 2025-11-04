import React from 'react';
import { motion } from 'framer-motion';
import {
    FaMapMarkerAlt,
    FaPhone,
    FaEnvelope,
    FaClock,
    FaWhatsapp
} from 'react-icons/fa';

const Contact = () => {
    const contactInfo = [
        {
            icon: FaMapMarkerAlt,
            title: 'Our Office',
            details: ['Neeradri, Electronic City', 'Bangalore 560100', 'Karnataka, India'],
            // description: 'Visit our headquarters for face-to-face consultations'
        },
        {
            icon: FaPhone,
            title: 'Phone Number',
            details: ['+91 86185 91978'],
            description: 'Available Monday to Friday, 9:00 AM - 6:00 PM'
        },
        {
            icon: FaEnvelope,
            title: 'Email Address',
            details: ['Raynottindia@gmail.com'],
            description: 'We typically respond within 24 hours'
        },
        {
            icon: FaClock,
            title: 'Working Hours',
            details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 2:00 PM'],
            description: 'Emergency support available 24/7 for existing clients'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 to-blue-50 font-inter">

            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-amber-600/10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600 font-montserrat">
                            Contact Us
                        </h1>
                        <p className="text-xl md:text-2xl font-semibold text-gray-700 mb-8 max-w-4xl mx-auto font-poppins">
                            Let's Start Your Digital Transformation Journey
                        </p>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto font-inter leading-relaxed">
                            Ready to take your business to the next level? Get in touch with our team of experts.
                            We're here to help you achieve your digital goals and create exceptional solutions.
                        </p>
                    </motion.div>
                </div>

                {/* Background Elements */}
                <div className="absolute top-10 left-10 w-16 h-16 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce"></div>
                <div className="absolute top-40 right-20 w-12 h-12 bg-amber-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
                <div className="absolute bottom-20 left-20 w-20 h-20 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce delay-1000"></div>
            </section>

            {/* Contact Information Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-bold text-gray-800 mb-4 font-poppins">
                            Get In <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600">Touch</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
                            Multiple ways to connect with our team
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {contactInfo.map((item, index) => (
                            <motion.div
                                key={item.title}
                                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                                    <item.icon />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-4 font-poppins">
                                    {item.title}
                                </h3>
                                <div className="space-y-2 mb-4">
                                    {item.details.map((detail, idx) => (
                                        <p 
                                            key={idx} 
                                            className={`font-inter ${
                                                (item.title === 'Phone Number' && detail.includes('86185')) ||
                                                (item.title === 'Email Address' && detail.includes('Raynottindia')) ||
                                                (item.title === 'Our Office' && (detail.includes('Neeradri') || detail.includes('560100')))
                                                    ? 'text-orange-600 font-semibold text-lg'
                                                    : 'text-gray-600'
                                            }`}
                                        >
                                            {detail}
                                        </p>
                                    ))}
                                </div>
                                <p className="text-sm text-gray-500 font-inter">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quick Connect Section */}
            <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-bold text-gray-800 mb-4 font-poppins">
                            Quick <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600">Connect</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
                            Prefer instant communication? Reach out to us directly
                        </p>
                    </motion.div>

                    <motion.div
                        className="bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl p-8 text-white text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold mb-4 font-poppins">WhatsApp Business</h3>
                        <p className="mb-6 font-inter leading-relaxed text-orange-100">
                            Get quick responses and instant support through WhatsApp
                        </p>

                        <div className="flex items-center justify-center gap-4 bg-white/10 rounded-xl p-4 max-w-md mx-auto mb-6">
                            <FaWhatsapp className="text-3xl text-green-400" />
                            <div>
                                <div className="font-semibold font-poppins">WhatsApp Number</div>
                                <div className="text-orange-100 font-inter text-xl font-bold">+91 86185 91978</div>
                            </div>
                        </div>

                        <a
                            href="https://wa.me/918618591978"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all duration-300 font-poppins shadow-lg hover:shadow-xl text-lg"
                        >
                            <FaWhatsapp className="text-xl" />
                            Message us on WhatsApp
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Contact Summary */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-bold text-gray-800 mb-8 font-poppins">
                            Ready to <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600">Get Started?</span>
                        </h2>
                        
                        <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8 shadow-lg">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                                <div>
                                    <FaPhone className="text-2xl text-orange-500 mx-auto mb-3" />
                                    <div className="text-orange-600 font-bold text-lg font-poppins">+91 86185 91978</div>
                                    <p className="text-gray-600 text-sm mt-1 font-inter">Call us directly</p>
                                </div>
                                
                                <div>
                                    <FaEnvelope className="text-2xl text-orange-500 mx-auto mb-3" />
                                    <div className="text-orange-600 font-bold text-lg font-poppins">Raynottindia@gmail.com</div>
                                    <p className="text-gray-600 text-sm mt-1 font-inter">Send us an email</p>
                                </div>
                                
                                <div>
                                    <FaMapMarkerAlt className="text-2xl text-orange-500 mx-auto mb-3" />
                                    <div className="text-orange-600 font-bold text-lg font-poppins">Electronic City</div>
                                    <p className="text-gray-600 text-sm mt-1 font-inter">Bangalore 560100</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

        </div>
    );
};

export default Contact;