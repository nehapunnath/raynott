import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'web',
      description: 'A comprehensive e-commerce solution with advanced product management and payment integration.',
      image: 'https://www.spacestem.com/images/platform-ecommerce-uk.webp',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      features: ['Product Catalog', 'Shopping Cart', 'Payment Gateway', 'Order Management'],
      client: 'Fashion Retail Brand',
      duration: '3 months'
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'mobile',
      description: 'Secure mobile banking application with biometric authentication and real-time transactions.',
      image: 'https://www.idfcfirstbank.com/content/dam/idfcfirstbank/images/blog/mobile-banking/advantage-of-mobile-banking-717x404.jpg',
      technologies: ['React Native', 'Firebase', 'Node.js', 'AWS'],
      features: ['Biometric Login', 'Fund Transfer', 'Bill Payments', 'Transaction History'],
      client: 'Financial Institution',
      duration: '4 months'
    },
    {
      id: 3,
      title: 'Healthcare Management System',
      category: 'software',
      description: 'Enterprise healthcare solution for patient management and medical records.',
      image: 'https://www.doctorsapp.in/uploads/blog_image/images/130325_6026_blog_image.png',
      technologies: ['Angular', 'Python', 'PostgreSQL', 'Docker'],
      features: ['Patient Records', 'Appointment Scheduling', 'Billing System', 'Analytics'],
      client: 'Healthcare Provider',
      duration: '6 months'
    },
    {
      id: 4,
      title: 'Travel Booking Portal',
      category: 'web',
      description: 'Multi-vendor travel booking platform with real-time availability and bookings.',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=400&fit=crop',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Redis'],
      features: ['Flight Booking', 'Hotel Reservations', 'Payment Processing', 'User Dashboard'],
      client: 'Travel Agency',
      duration: '5 months'
    },
    {
      id: 5,
      title: 'Fitness Tracking App',
      category: 'mobile',
      description: 'Comprehensive fitness application with workout plans and progress tracking.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=400&fit=crop',
      technologies: ['Flutter', 'Firebase', 'Node.js', 'MongoDB'],
      features: ['Workout Plans', 'Progress Tracking', 'Social Features', 'Nutrition Guide'],
      client: 'Fitness Startup',
      duration: '3 months'
    },
    {
      id: 6,
      title: 'Inventory Management System',
      category: 'software',
      description: 'Advanced inventory and supply chain management solution for manufacturing.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&h=400&fit=crop',
      technologies: ['React', 'Java', 'MySQL', 'Spring Boot'],
      features: ['Stock Management', 'Order Processing', 'Supplier Management', 'Reporting'],
      client: 'Manufacturing Company',
      duration: '4 months'
    },
    {
      id: 7,
      title: 'Real Estate Platform',
      category: 'web',
      description: 'Property listing and management platform with virtual tours and agent connections.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=400&fit=crop',
      technologies: ['Next.js', 'Python', 'PostgreSQL', 'Mapbox'],
      features: ['Property Listings', 'Virtual Tours', 'Agent Network', 'Lead Management'],
      client: 'Real Estate Agency',
      duration: '5 months'
    },
    {
      id: 8,
      title: 'Food Delivery App',
      category: 'mobile',
      description: 'Food ordering and delivery application with real-time tracking and multiple restaurants.',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&h=400&fit=crop',
      technologies: ['React Native', 'Firebase', 'Node.js', 'MongoDB'],
      features: ['Restaurant Listings', 'Order Tracking', 'Payment Gateway', 'Reviews & Ratings'],
      client: 'Food Delivery Startup',
      duration: '4 months'
    },
    {
      id: 9,
      title: 'Learning Management System',
      category: 'software',
      description: 'Comprehensive e-learning platform with course management and student tracking.',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&h=400&fit=crop',
      technologies: ['React', 'Django', 'PostgreSQL', 'AWS'],
      features: ['Course Management', 'Student Progress', 'Assessment Tools', 'Video Streaming'],
      client: 'Education Institute',
      duration: '6 months'
    }
  ];

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Development' },
    { key: 'mobile', label: 'Mobile Apps' },
    { key: 'software', label: 'Software Solutions' }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '200+', label: 'Happy Clients' },
    { number: '50+', label: 'Industry Awards' },
    { number: '9+', label: 'Years Experience' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
              Our Portfolio
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-gray-700 mb-8 max-w-4xl mx-auto font-poppins">
              Showcasing Our Digital Excellence and Innovation
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-inter leading-relaxed">
              Explore our diverse portfolio of successful projects across web development, 
              mobile applications, and custom software solutions for various industries.
            </p>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-10 left-10 w-16 h-16 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-amber-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-20 h-20 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce delay-1000"></div>
      </section>

      {/* Portfolio Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2 font-poppins">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-inter">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveFilter(category.key)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 font-poppins ${
                  activeFilter === category.key
                    ? 'bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                layout
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
                      project.category === 'web' ? 'bg-blue-500' :
                      project.category === 'mobile' ? 'bg-green-500' : 'bg-purple-500'
                    }`}>
                      {project.category === 'web' ? 'Web' : project.category === 'mobile' ? 'Mobile' : 'Software'}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 font-poppins group-hover:text-orange-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 font-inter leading-relaxed">
                    {project.description}
                  </p>

                  {/* Client & Duration */}
                  <div className="flex justify-between items-center mb-4 text-sm text-gray-500 font-inter">
                    <span>Client: {project.client}</span>
                    <span>Duration: {project.duration}</span>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2 font-poppins">Technologies Used</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-inter"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2 font-poppins">Key Features</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600 font-inter">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="text-gray-400 text-6xl mb-4">📁</div>
              <h3 className="text-2xl font-bold text-gray-600 mb-2 font-poppins">No projects found</h3>
              <p className="text-gray-500 font-inter">Try selecting a different category to view more projects.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4 font-poppins">
              Client <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600">Testimonials</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
              What our clients say about working with us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Raynott delivered an exceptional e-commerce platform that increased our online sales by 150%. Their attention to detail and technical expertise exceeded our expectations.",
                author: "Sarah Johnson",
                company: "Fashion Retail Brand",
                role: "CEO"
              },
              {
                quote: "The mobile banking app developed by Raynott has been instrumental in our digital transformation. The security features and user experience are outstanding.",
                author: "Michael Chen",
                company: "Financial Institution",
                role: "CTO"
              },
              {
                quote: "Working with Raynott was a game-changer for our healthcare practice. Their management system streamlined our operations and improved patient care significantly.",
                author: "Dr. Emily Rodriguez",
                company: "Healthcare Provider",
                role: "Medical Director"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-orange-400 text-4xl mb-4">"</div>
                <p className="text-gray-600 mb-6 font-inter leading-relaxed">
                  {testimonial.quote}
                </p>
                <div>
                  <div className="font-semibold text-gray-800 font-poppins">{testimonial.author}</div>
                  <div className="text-sm text-gray-500 font-inter">{testimonial.role}, {testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     

    </div>
  );
};

export default Gallery;