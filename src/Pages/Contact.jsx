import React from 'react';
import { motion } from 'framer-motion';
import {
    FaMapMarkerAlt,
    FaPhone,
    FaEnvelope,
    FaClock,
    FaLinkedin,
    FaTwitter,
    FaFacebook,
    FaInstagram,
    FaGlobe,
    FaWhatsapp
} from 'react-icons/fa';

const Contact = () => {
    const contactInfo = [
        {
            icon: FaMapMarkerAlt,
            title: 'Our Office',
            details: ['123 Business Avenue', 'Suite 100', 'Bangalore, Karnataka 560001'],
            description: 'Visit our headquarters for face-to-face consultations'
        },
        {
            icon: FaPhone,
            title: 'Phone Number',
            details: ['+91 98765 43210', '+91 91234 56789'],
            description: 'Available Monday to Friday, 9:00 AM - 6:00 PM'
        },
        {
            icon: FaEnvelope,
            title: 'Email Address',
            details: ['info@raynott.com', 'support@raynott.com'],
            description: 'We typically respond within 24 hours'
        },
        {
            icon: FaClock,
            title: 'Working Hours',
            details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 2:00 PM'],
            description: 'Emergency support available 24/7 for existing clients'
        }
    ];

    const socialLinks = [
        {
            icon: FaLinkedin,
            name: 'LinkedIn',
            url: 'https://linkedin.com/company/',
            color: 'hover:text-blue-600'
        },
        {
            icon: FaTwitter,
            name: 'Twitter',
            url: 'https://twitter.com/raynott',
            color: 'hover:text-blue-400'
        },
        {
            icon: FaFacebook,
            name: 'Facebook',
            url: 'https://facebook.com/',
            color: 'hover:text-blue-500'
        },
        {
            icon: FaInstagram,
            name: 'Instagram',
            url: 'https://instagram.com/',
            color: 'hover:text-pink-500'
        },
        {
            icon: FaGlobe,
            name: 'Website',
            url: 'https://raynott.com',
            color: 'hover:text-green-500'
        }
    ];

    const teamContacts = [
        {
            department: 'Sales & Business Development',
            contact: 'sales@raynott.com',
            phone: '+91 98765 43211',
            description: 'For new project inquiries and partnerships'
        },
        {
            department: 'Technical Support',
            contact: 'support@raynott.com',
            phone: '+91 98765 43212',
            description: 'For existing project support and maintenance'
        },
        {
            department: 'Careers & HR',
            contact: 'careers@raynott.com',
            phone: '+91 98765 43213',
            description: 'For job opportunities and recruitment'
        },
        {
            department: 'General Inquiries',
            contact: 'info@raynott.com',
            phone: '+91 98765 43210',
            description: 'For all other questions and information'
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
                                        <p key={idx} className="text-gray-600 font-inter">
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

            {/* Department Contacts */}
            <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-bold text-gray-800 mb-4 font-poppins">
                            Department <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600">Contacts</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
                            Reach out to the right team for your specific needs
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {teamContacts.map((department, index) => (
                            <motion.div
                                key={department.department}
                                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <h3 className="text-xl font-bold text-gray-800 mb-3 font-poppins">
                                    {department.department}
                                </h3>
                                <p className="text-gray-600 mb-4 font-inter">
                                    {department.description}
                                </p>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-3">
                                        <FaEnvelope className="text-orange-500" />
                                        <a
                                            href={`mailto:${department.contact}`}
                                            className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-inter"
                                        >
                                            {department.contact}
                                        </a>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <FaPhone className="text-orange-500" />
                                        <a
                                            href={`tel:${department.phone}`}
                                            className="text-gray-700 hover:text-orange-600 transition-colors duration-300 font-inter"
                                        >
                                            {department.phone}
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Social Media & Connect */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl font-bold text-gray-800 mb-6 font-poppins">
                                Connect With <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600">Us</span>
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 font-inter leading-relaxed">
                                Stay updated with our latest projects, industry insights, and company news.
                                Follow us on social media to be part of our growing community.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 bg-gray-100 hover:bg-gray-200 px-4 py-3 rounded-full transition-all duration-300 group"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <social.icon className={`text-gray-600 ${social.color} transition-colors duration-300 text-xl`} />
                                        <span className="text-gray-700 font-semibold font-poppins">{social.name}</span>
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            className="bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl p-8 text-white"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h3 className="text-2xl font-bold mb-4 font-poppins">Quick Connect</h3>
                            <p className="mb-6 font-inter leading-relaxed">
                                Prefer instant communication? Reach out to us directly through WhatsApp for quick responses.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4 bg-white/10 rounded-xl p-4">
                                    <FaWhatsapp className="text-2xl text-green-400" />
                                    <div>
                                        <div className="font-semibold font-poppins">WhatsApp Business</div>
                                        <div className="text-orange-100 font-inter">+91 98765 43210</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 bg-white/10 rounded-xl p-4">
                                    <FaClock className="text-2xl text-amber-200" />
                                    <div>
                                        <div className="font-semibold font-poppins">Response Time</div>
                                        <div className="text-orange-100 font-inter">Usually within 1 hour</div>
                                    </div>
                                </div>
                            </div>

                            <a
                                href="https://wa.me/919876543210"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-green-500 text-white px-6 py-3 rounded-full font-bold hover:bg-green-600 transition-all duration-300 mt-6 font-poppins shadow-lg hover:shadow-xl"
                            >
                                <FaWhatsapp className="text-xl" />
                                Message on WhatsApp
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Location Map Section */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-amber-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-bold text-gray-800 mb-4 font-poppins">
                            Visit Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600">Office</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
                            Schedule a meeting and visit our headquarters in Bangalore
                        </p>
                    </motion.div>

                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            {/* Map Placeholder */}
                            <div className="bg-gray-200 h-96 lg:h-auto flex items-center justify-center">
                                <div className="text-center">
                                    <FaMapMarkerAlt className="text-6xl text-orange-500 mx-auto mb-4" />
                                    <p className="text-gray-600 font-inter">Interactive Map</p>
                                    <p className="text-sm text-gray-500 font-inter mt-2">123 Business Avenue, Bangalore</p>
                                </div>
                            </div>

                            {/* Location Details */}
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-gray-800 mb-6 font-poppins">Raynott Headquarters</h3>

                                <div className="space-y-4 mb-6">
                                    <div className="flex items-start gap-4">
                                        <FaMapMarkerAlt className="text-orange-500 mt-1" />
                                        <div>
                                            <div className="font-semibold text-gray-800 font-poppins">Address</div>
                                            <div className="text-gray-600 font-inter">
                                                123 Business Avenue, Suite 100<br />
                                                Bangalore, Karnataka 560001<br />
                                                India
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <FaClock className="text-orange-500 mt-1" />
                                        <div>
                                            <div className="font-semibold text-gray-800 font-poppins">Visiting Hours</div>
                                            <div className="text-gray-600 font-inter">
                                                Monday - Friday: 9:00 AM - 6:00 PM<br />
                                                Saturday: 10:00 AM - 2:00 PM<br />
                                                Sunday: Closed
                                            </div>
                                        </div>
                                    </div>
                                </div>

                               
                            </div>
                        </div>
                    </div>
                </div>
            </section>

           
        </div>
    );
};

export default Contact;