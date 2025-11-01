import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  const services = [
    {
      title: 'Website Designing',
      description: 'We create stunning, responsive websites that provide exceptional user experiences. Our designs are optimized for performance, accessibility, and conversion rates.',
      gradient: 'from-blue-500 to-cyan-500',
      bg: 'from-blue-50 to-cyan-50',
      features: [
        'Custom responsive design for all devices',
        'User experience (UX) optimization',
        'Search engine optimization (SEO) ready',
        'Fast loading speeds and performance',
        'Cross-browser compatibility',
        'Content management system integration'
      ],
    //   technologies: 'HTML5, CSS3, JavaScript, React, WordPress, Shopify'
    },
    {
      title: 'Software Development',
      description: 'Custom software solutions designed to streamline your business operations. We build scalable applications that grow with your business needs.',
      gradient: 'from-purple-500 to-pink-500',
      bg: 'from-purple-50 to-pink-50',
      features: [
        'Custom business application development',
        'Database design and management',
        'API development and integration',
        'Cloud deployment and management',
        'Maintenance and support services',
        'Performance monitoring and analytics'
      ],
    //   technologies: 'Node.js, Python, Java, .NET, PostgreSQL, MongoDB'
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that deliver seamless experiences on iOS and Android platforms.',
      gradient: 'from-green-500 to-emerald-500',
      bg: 'from-green-50 to-emerald-50',
      features: [
        'Native iOS and Android development',
        'Cross-platform solutions',
        'App store deployment and optimization',
        'Push notification integration',
        'Offline functionality',
        'Security and data protection'
      ],
    //   technologies: 'React Native, Flutter, Swift, Kotlin, Firebase'
    },
    {
      title: 'Web Security',
      description: 'Comprehensive security solutions to protect your digital assets from threats and ensure data privacy compliance.',
      gradient: 'from-red-500 to-orange-500',
      bg: 'from-red-50 to-orange-50',
      features: [
        'Security vulnerability assessment',
        'SSL certificate implementation',
        'Firewall configuration and management',
        'Regular security audits and monitoring',
        'Data encryption and protection',
        'GDPR and compliance consulting'
      ],
    //   technologies: 'SSL/TLS, OWASP, Penetration Testing, Security Headers'
    },
    {
      title: 'Content Marketing',
      description: 'Strategic content creation and distribution to build brand authority, engage audiences, and drive qualified traffic.',
      gradient: 'from-amber-500 to-yellow-500',
      bg: 'from-amber-50 to-yellow-50',
      features: [
        'Content strategy development',
        'SEO-optimized blog content',
        'Social media content planning',
        'Email marketing campaigns',
        'Content performance analytics',
        'Brand storytelling and messaging'
      ],
    //   technologies: 'Google Analytics, SEMrush, HubSpot, Mailchimp'
    },
    {
      title: 'Content Creation',
      description: 'Professional content creation services including graphics, videos, and written content that resonates with your target audience.',
      gradient: 'from-indigo-500 to-purple-500',
      bg: 'from-indigo-50 to-purple-50',
      features: [
        'Graphic design and branding',
        'Video production and editing',
        'Copywriting and content writing',
        'Infographic creation',
        'Social media graphics',
        'Brand guideline development'
      ],
    //   technologies: 'Adobe Creative Suite, Figma, Canva, Final Cut Pro'
    }
  ];

  const stats = [
    { number: '150+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '3+', label: 'Years Experience' },
    { number: '24/7', label: 'Support' }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We begin by understanding your business goals, target audience, and project requirements to create a comprehensive strategy.'
    },
    {
      step: '02',
      title: 'Design & Development',
      description: 'Our team creates wireframes, designs, and develops your solution with regular updates and feedback sessions.'
    },
    {
      step: '03',
      title: 'Testing & Quality Assurance',
      description: 'Rigorous testing across multiple devices and platforms to ensure optimal performance and user experience.'
    },
    {
      step: '04',
      title: 'Launch & Support',
      description: 'We handle deployment and provide ongoing support, maintenance, and optimization services.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-blue-50 font-inter">
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-amber-600/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            className="text-6xl md:text-8xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600 font-montserrat"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Raynott
          </motion.h1>
          <motion.p
            className="text-xl md:text-3xl font-semibold text-gray-700 mb-8 max-w-4xl mx-auto font-poppins"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transforming Your Digital Vision into Reality
          </motion.p>
          <motion.p
            className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto font-inter"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Comprehensive digital solutions including web design, software development, 
            mobile apps, security, and content marketing services.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center font-poppins"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a
              href="/contact"
              className="bg-gradient-to-r from-orange-500 to-amber-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
            </motion.a>
            <motion.a
              href="/services"
              className="border-2 border-orange-500 text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-50 transition-all duration-300 text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Our Services
            </motion.a>
          </motion.div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-amber-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce delay-1000"></div>
      </section>

      {/* Redesigned Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-poppins">
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600">Digital Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter mb-8">
              Comprehensive digital solutions designed to elevate your online presence and drive business growth
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-600 mx-auto rounded-full"></div>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Service Header */}
                <div className="mb-6">
                  <div className={`w-16 h-1 bg-gradient-to-r ${service.gradient} rounded-full mb-4`}></div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 font-poppins">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-inter">
                    {service.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-500 mb-3 font-poppins uppercase tracking-wide">What We Deliver</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-gray-600 font-inter">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} mt-2 flex-shrink-0`}></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                {/* <div className="pt-4 border-t border-gray-200">
                  <h4 className="text-sm font-semibold text-gray-500 mb-2 font-poppins uppercase tracking-wide">Technologies</h4>
                  <p className="text-sm text-gray-600 font-inter">{service.technologies}</p>
                </div> */}
              </motion.div>
            ))}
          </div>

          {/* Our Process Section */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-800 mb-4 font-poppins">
                Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600">Development Process</span>
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto font-inter">
                We follow a structured approach to ensure quality, transparency, and successful project delivery
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((step, index) => (
                <motion.div
                  key={step.step}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto font-poppins">
                    {step.step}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3 font-poppins">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 text-sm font-inter leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-poppins">
              Why <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600">Choose Raynott</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-poppins">Expert Team</h3>
              <p className="text-gray-600 font-inter">
                Our team consists of experienced developers, designers, and digital strategists with proven track records in delivering successful projects.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-poppins">Quality Assurance</h3>
              <p className="text-gray-600 font-inter">
                We maintain the highest quality standards through rigorous testing, code reviews, and continuous improvement processes.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-poppins">Client-Centric Approach</h3>
              <p className="text-gray-600 font-inter">
                Your success is our priority. We work closely with you to understand your goals and deliver solutions that exceed expectations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-amber-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center font-poppins"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-6xl font-bold mb-2 drop-shadow-lg">
                  {stat.number}
                </div>
                <div className="text-lg md:text-xl font-semibold text-amber-100">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Home;