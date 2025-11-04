import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaLightbulb, 
  FaAward, 
  FaUsers, 
  FaEye, 
  FaRocket, 
  FaGlobeAmericas,
  FaCode,
  FaMobile,
  FaChartLine,
  FaPalette,
  FaCalendarAlt,
  FaProjectDiagram,
  FaUserCheck,
  FaMapMarkerAlt
} from 'react-icons/fa';

const About = () => {
  const values = [
    {
      title: 'Innovation',
      description: 'We stay at the forefront of technology trends to deliver cutting-edge solutions that keep our clients ahead of the competition.',
      icon: FaLightbulb
    },
    {
      title: 'Quality',
      description: 'Every project undergoes rigorous testing and quality assurance processes to ensure excellence in delivery and performance.',
      icon: FaAward
    },
    {
      title: 'Collaboration',
      description: 'We work as strategic partners with our clients, fostering open communication and shared success throughout every project.',
      icon: FaUsers
    },
    {
      title: 'Transparency',
      description: 'Clear communication, honest feedback, and complete visibility into our processes ensure trust and successful outcomes.',
      icon: FaEye
    }
  ];

  const milestones = [
    { 
      year: '2015', 
      event: 'Company Founded', 
      description: 'Established with a vision to deliver exceptional digital solutions and transform businesses through technology',
      icon: FaRocket
    },
    { 
      year: '2017', 
      event: 'First 100 Projects', 
      description: 'Successfully delivered 100+ projects across various industries and business domains',
      icon: FaProjectDiagram
    },
    { 
      year: '2019', 
      event: 'Service Expansion', 
      description: 'Expanded our service portfolio to include comprehensive digital marketing and mobile app development',
      icon: FaGlobeAmericas
    },
    { 
      year: '2021', 
      event: 'Industry Recognition', 
      description: 'Received multiple industry awards for innovation and design excellence in digital solutions',
      icon: FaAward
    },
    { 
      year: '2023', 
      event: 'Global Reach', 
      description: 'Extended our services to international clients across 15+ countries worldwide',
      icon: FaMapMarkerAlt
    },
    { 
      year: '2024', 
      event: 'Excellence Milestone', 
      description: 'Celebrated 9 years of delivering cutting-edge digital solutions with 500+ successful projects',
      icon: FaCalendarAlt
    }
  ];

  const expertise = [
    {
      category: 'Web Technologies',
      items: ['React.js', 'Vue.js', 'Angular', 'Node.js', 'Python/Django', 'PHP/Laravel'],
      icon: FaCode
    },
    {
      category: 'Mobile Development',
      items: ['React Native', 'Flutter', 'iOS Swift', 'Android Kotlin', 'Cross-Platform'],
      icon: FaMobile
    },
    {
      category: 'Digital Marketing',
      items: ['SEO Optimization', 'Content Strategy', 'Social Media Marketing', 'PPC Campaigns', 'Analytics'],
      icon: FaChartLine
    },
    {
      category: 'Design & UX',
      items: ['UI/UX Design', 'Brand Identity', 'Prototyping', 'User Research', 'Design Systems'],
      icon: FaPalette
    }
  ];

  const stats = [
    { number: '9+', label: 'Years Experience', icon: FaCalendarAlt, color: 'from-orange-500 to-amber-500' },
    { number: '500+', label: 'Projects Delivered', icon: FaProjectDiagram, color: 'from-blue-500 to-cyan-500' },
    { number: '200+', label: 'Happy Clients', icon: FaUserCheck, color: 'from-green-500 to-emerald-500' },
    { number: '15+', label: 'Countries Served', icon: FaGlobeAmericas, color: 'from-purple-500 to-pink-500' }
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
              About Raynott Technologies
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-gray-700 mb-8 max-w-4xl mx-auto font-poppins">
              Pioneering Digital Excellence Since 2015
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-inter leading-relaxed">
              For nearly a decade, Raynott Technologies has been at the forefront of digital innovation, 
              helping businesses transform their digital presence through cutting-edge web solutions, 
              software development, and strategic digital marketing. Our journey began with a simple 
              mission: to bridge the gap between business objectives and technological possibilities.
            </p>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-10 left-10 w-16 h-16 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-amber-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-20 h-20 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce delay-1000"></div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6 font-poppins">
                Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600">Journey</span>
              </h2>
              <div className="space-y-4 text-gray-600 font-inter leading-relaxed">
                <p>
                  Founded in 2015, Raynott Technologies emerged during a pivotal time in digital transformation. 
                  We recognized that businesses needed more than just technical solutions—they needed 
                  strategic partners who could navigate the complex digital landscape.
                </p>
                <p>
                  Over the past 9 years, we've evolved from a specialized web development agency into 
                  a comprehensive digital solutions provider. Our growth has been driven by our commitment 
                  to understanding our clients' unique challenges and delivering solutions that drive 
                  measurable results.
                </p>
                <p>
                  Today, we serve clients across various industries, from startups to established enterprises, 
                  helping them leverage technology to achieve their business objectives and stay competitive 
                  in an ever-changing digital world.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 text-center shadow-lg border border-gray-100"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center text-white text-xl mb-3 mx-auto`}>
                    <stat.icon />
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-2 font-poppins">{stat.number}</div>
                  <div className="text-gray-600 font-inter">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4 font-poppins">
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600">Core Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
              The fundamental principles that have guided our success for nearly a decade
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 font-poppins">
                  {value.title}
                </h3>
                <p className="text-gray-600 font-inter leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4 font-poppins">
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600">Areas of Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
              Comprehensive digital capabilities built over 9 years of industry experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertise.map((area, index) => (
              <motion.div
                key={area.category}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg border border-gray-100 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-600 rounded-xl flex items-center justify-center text-white text-lg">
                    <area.icon />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 font-poppins">
                    {area.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {area.items.map((item, idx) => (
                    <span
                      key={idx}
                      className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-inter hover:bg-orange-200 transition-colors duration-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4 font-poppins">
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600">Growth Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
              Key milestones in our 9-year journey of digital innovation and excellence
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-500 to-amber-600"></div>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  className="relative flex items-start gap-6"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  {/* Year marker */}
                  <div className="flex-shrink-0 w-20">
                    <div className="bg-orange-500 text-white rounded-lg px-3 py-2 text-center font-bold font-poppins">
                      {milestone.year}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg group hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-amber-600 rounded-lg flex items-center justify-center text-white">
                        <milestone.icon />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 font-poppins">
                        {milestone.event}
                      </h3>
                    </div>
                    <p className="text-gray-600 font-inter">
                      {milestone.description}
                    </p>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-20 w-3 h-3 bg-orange-500 rounded-full border-4 border-white shadow-lg -translate-x-1/2 top-6"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 group hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaRocket />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6 font-poppins">
                Our Mission
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed font-inter">
                To empower businesses with innovative digital solutions that drive sustainable growth, 
                enhance operational efficiency, and create meaningful digital experiences. We are committed 
                to transforming complex challenges into opportunities through technology and strategic thinking.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 group hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaGlobeAmericas />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6 font-poppins">
                Our Vision
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed font-inter">
                To be the most trusted digital innovation partner globally, recognized for our unwavering 
                commitment to excellence, client success, and technological advancement. We envision a future 
                where every business can harness the full potential of digital transformation to achieve 
                remarkable outcomes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;