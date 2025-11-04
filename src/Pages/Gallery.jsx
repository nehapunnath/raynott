import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaUserTie, FaBuilding, FaMapMarkerAlt } from 'react-icons/fa';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'web',
      description: 'A comprehensive e-commerce solution with advanced product management and payment integration.',
      technologies: ['React', 'Node.js', 'Firebase', 'Stripe'],
      features: ['Product Catalog', 'Shopping Cart', 'Payment Gateway', 'Order Management'],
      client: 'Fashion Retail Brand',
      duration: '3 months'
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'mobile',
      description: 'Secure mobile banking application with biometric authentication and real-time transactions.',
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

  const testimonials = [
    {
      quote: "Raynott Technologies delivered an exceptional e-commerce platform that increased our online sales by 150%. Their attention to detail and technical expertise exceeded our expectations.",
      author: "Sarah Johnson",
      company: "Fashion Retail Brand",
      role: "CEO",
      rating: 5,
      project: "E-commerce Platform"
    },
    {
      quote: "The mobile banking app developed by Raynott Technologies has been instrumental in our digital transformation. The security features and user experience are outstanding.",
      author: "Michael Chen",
      company: "Financial Institution",
      role: "CTO",
      rating: 5,
      project: "Mobile Banking App"
    },
    {
      quote: "Working with Raynott Technologies was a game-changer for our healthcare practice. Their management system streamlined our operations and improved patient care significantly.",
      author: "Dr. Emily Rodriguez",
      company: "Healthcare Provider",
      role: "Medical Director",
      rating: 5,
      project: "Healthcare Management System"
    },
    {
      quote: "The travel booking portal they developed has revolutionized our business. Real-time availability and seamless booking process have increased our conversions by 200%.",
      author: "David Thompson",
      company: "Travel Agency",
      role: "Operations Director",
      rating: 5,
      project: "Travel Booking Portal"
    },
    {
      quote: "Our fitness app developed by Raynott has seen incredible user engagement. The smooth performance and intuitive design keep our users coming back daily.",
      author: "Jessica Williams",
      company: "Fitness Startup",
      role: "Founder",
      rating: 5,
      project: "Fitness Tracking App"
    },
    {
      quote: "The inventory management system has optimized our supply chain operations. Real-time tracking and reporting features have saved us countless hours and resources.",
      author: "Robert Garcia",
      company: "Manufacturing Company",
      role: "Operations Manager",
      rating: 5,
      project: "Inventory Management System"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          <FaStar
            key={index}
            className={`text-sm ${
              index < rating ? 'text-amber-500 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

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
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                layout
              >
                {/* Project Header with Category Badge */}
                <div className="p-6 pb-4">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-800 font-poppins group-hover:text-orange-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
                      project.category === 'web' ? 'bg-blue-500' :
                      project.category === 'mobile' ? 'bg-green-500' : 'bg-purple-500'
                    }`}>
                      {project.category === 'web' ? 'Web' : project.category === 'mobile' ? 'Mobile' : 'Software'}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 font-inter leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Project Content */}
                <div className="px-6 pb-6">
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

      {/* Enhanced Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-4 font-poppins">
              Client <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-400">Testimonials</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
              Hear what our clients have to say about their experience working with us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-orange-500 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Quote Icon */}
                <div className="text-orange-500 text-2xl mb-4">
                  <FaQuoteLeft />
                </div>

                {/* Rating */}
                <div className="mb-4">
                  <StarRating rating={testimonial.rating} />
                </div>

                {/* Quote */}
                <p className="text-gray-300 mb-6 font-inter leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {testimonial.quote}
                </p>

                {/* Project Badge */}
                <div className="mb-4">
                  <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-xs font-semibold border border-orange-500/30">
                    {testimonial.project}
                  </span>
                </div>

                {/* Client Info */}
                <div className="border-t border-gray-700 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-600 rounded-full flex items-center justify-center text-white">
                      <FaUserTie className="text-lg" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-white font-poppins">{testimonial.author}</h4>
                        <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                        <span className="text-orange-400 text-sm font-semibold">{testimonial.role}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <FaBuilding className="text-xs" />
                        <span>{testimonial.company}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Row */}
          <motion.div
            className="mt-16 bg-gradient-to-r from-orange-500 to-amber-600 rounded-2xl p-8 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold text-white mb-2 font-poppins">98%</div>
                <div className="text-orange-100 font-inter">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2 font-poppins">4.9/5</div>
                <div className="text-orange-100 font-inter">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2 font-poppins">85%</div>
                <div className="text-orange-100 font-inter">Repeat Business</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2 font-poppins">24h</div>
                <div className="text-orange-100 font-inter">Avg. Response Time</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;