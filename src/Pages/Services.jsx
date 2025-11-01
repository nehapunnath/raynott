import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: 'Website Designing',
      description: 'Professional website design services that create engaging digital experiences and drive business growth. We focus on user-centric design principles to deliver websites that not only look stunning but also perform exceptionally.',
      features: [
        'Custom responsive design for all devices',
        'User experience (UX) and interface (UI) design',
        'Search engine optimization (SEO) ready structure',
        'Fast loading speeds and performance optimization',
        'Cross-browser compatibility testing',
        'Content management system integration',
        'E-commerce functionality and payment integration',
        'Website maintenance and support services'
      ],
      technologies: 'HTML5, CSS3, JavaScript, React, Vue.js, WordPress, Shopify, Webflow',
      process: [
        'Discovery & Requirement Analysis',
        'Wireframing & Prototyping',
        'UI/UX Design Development',
        'Frontend & Backend Development',
        'Quality Assurance Testing',
        'Deployment & Launch'
      ],
      gradient: 'from-blue-500 to-cyan-500',
      bg: 'from-blue-50 to-cyan-50'
    },
    {
      title: 'Software Development',
      description: 'Custom software solutions designed to streamline your business operations and drive efficiency. We build scalable applications that grow with your business needs and integrate seamlessly with your existing systems.',
      features: [
        'Custom business application development',
        'Database design and management systems',
        'API development and third-party integrations',
        'Cloud deployment and infrastructure management',
        'Legacy system modernization',
        'Performance monitoring and analytics',
        'Security implementation and data protection',
        'Ongoing maintenance and support'
      ],
      technologies: 'Node.js, Python, Java, .NET, PostgreSQL, MongoDB, AWS, Azure',
      process: [
        'Business Analysis & Planning',
        'System Architecture Design',
        'Agile Development Process',
        'Quality Assurance & Testing',
        'Deployment & Integration',
        'Training & Documentation'
      ],
      gradient: 'from-purple-500 to-pink-500',
      bg: 'from-purple-50 to-pink-50'
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences on both iOS and Android platforms. We create apps that are fast, reliable, and engaging.',
      features: [
        'Native iOS and Android application development',
        'Cross-platform solutions using React Native/Flutter',
        'App store deployment and optimization',
        'Push notification implementation',
        'Offline functionality and data synchronization',
        'Mobile payment integration',
        'App analytics and user behavior tracking',
        'Regular updates and feature enhancements'
      ],
      technologies: 'React Native, Flutter, Swift, Kotlin, Firebase, Xcode, Android Studio',
      process: [
        'Market Research & Strategy',
        'UI/UX Design for Mobile',
        'Agile Development Cycles',
        'Comprehensive Testing',
        'App Store Submission',
        'Post-Launch Optimization'
      ],
      gradient: 'from-green-500 to-emerald-500',
      bg: 'from-green-50 to-emerald-50'
    },
    {
      title: 'Web Security',
      description: 'Comprehensive security solutions to protect your digital assets from threats and ensure data privacy compliance. We implement robust security measures to safeguard your business and customer data.',
      features: [
        'Security vulnerability assessment and penetration testing',
        'SSL certificate implementation and management',
        'Firewall configuration and security monitoring',
        'Regular security audits and compliance checks',
        'Data encryption and protection strategies',
        'GDPR and privacy regulation compliance',
        'DDoS protection and mitigation',
        'Security incident response planning'
      ],
      technologies: 'SSL/TLS, OWASP, Penetration Testing, Security Headers, CSP, HTTPS',
      process: [
        'Security Assessment & Audit',
        'Threat Analysis & Planning',
        'Security Implementation',
        'Continuous Monitoring',
        'Regular Security Updates',
        'Incident Response Training'
      ],
      gradient: 'from-red-500 to-orange-500',
      bg: 'from-red-50 to-orange-50'
    },
    {
      title: 'Content Marketing',
      description: 'Strategic content creation and distribution to build brand authority, engage target audiences, and drive qualified traffic to your business.',
      features: [
        'Content strategy development and planning',
        'SEO-optimized blog content creation',
        'Social media content planning and management',
        'Email marketing campaign development',
        'Content performance analytics and reporting',
        'Brand storytelling and messaging development',
        'Influencer and partnership marketing',
        'Content calendar management'
      ],
      technologies: 'Google Analytics, SEMrush, HubSpot, Mailchimp, Hootsuite, BuzzSumo',
      process: [
        'Audience Research & Analysis',
        'Content Strategy Development',
        'Content Creation & Optimization',
        'Distribution & Promotion',
        'Performance Measurement',
        'Strategy Refinement'
      ],
      gradient: 'from-amber-500 to-yellow-500',
      bg: 'from-amber-50 to-yellow-50'
    },
    {
      title: 'Content Creation',
      description: 'Professional content creation services including graphics, videos, and written content that resonates with your target audience and strengthens your brand identity.',
      features: [
        'Graphic design and visual branding',
        'Video production and editing services',
        'Professional copywriting and content writing',
        'Infographic and visual content creation',
        'Social media graphics and templates',
        'Brand guideline development',
        'Photography and image optimization',
        'Interactive content development'
      ],
      technologies: 'Adobe Creative Suite, Figma, Canva, Final Cut Pro, Premiere Pro, After Effects',
      process: [
        'Creative Brief & Concept Development',
        'Content Planning & Storyboarding',
        'Content Production & Creation',
        'Review & Revisions',
        'Final Delivery & Optimization',
        'Performance Analysis'
      ],
      gradient: 'from-indigo-500 to-purple-500',
      bg: 'from-indigo-50 to-purple-50'
    }
  ];

  const serviceStats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '200+', label: 'Satisfied Clients' },
    { number: '99%', label: 'Client Retention' },
    { number: '24/7', label: 'Support Available' }
  ];

  const industries = [
    'E-commerce & Retail',
    'Healthcare & Medical',
    'Education & E-learning',
    'Finance & Banking',
    'Real Estate',
    'Travel & Hospitality',
    'Technology & SaaS',
    'Manufacturing'
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
              Our Services
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-gray-700 mb-8 max-w-4xl mx-auto font-poppins">
              Comprehensive Digital Solutions for Modern Businesses
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto font-inter leading-relaxed">
              With 9 years of expertise, we deliver end-to-end digital solutions that drive growth, 
              enhance efficiency, and create exceptional digital experiences for your customers.
            </p>
          </motion.div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-10 left-10 w-16 h-16 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-amber-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-20 h-20 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-bounce delay-1000"></div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4 font-poppins">
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600">Digital Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
              End-to-end solutions designed to meet your unique business requirements
            </p>
          </motion.div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className={`bg-gradient-to-br ${service.bg} rounded-3xl p-8 shadow-lg`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Service Content */}
                  <div>
                    <div className={`w-20 h-1 bg-gradient-to-r ${service.gradient} rounded-full mb-6`}></div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-4 font-poppins">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6 font-inter">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-3 font-poppins">Key Features</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-600 font-inter">
                            <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mt-2 flex-shrink-0`}></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2 font-poppins">Technologies & Tools</h4>
                      <p className="text-gray-600 font-inter">{service.technologies}</p>
                    </div>
                  </div>

                  {/* Process */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4 font-poppins">Our Process</h4>
                    <div className="space-y-4">
                      {service.process.map((step, idx) => (
                        <div key={idx} className="flex items-start gap-4">
                          <div className={`w-8 h-8 bg-gradient-to-r ${service.gradient} rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 font-poppins`}>
                            {idx + 1}
                          </div>
                          <div>
                            <h5 className="font-semibold text-gray-800 mb-1 font-poppins">{step}</h5>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-amber-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4 font-poppins">
              Trusted by Businesses Worldwide
            </h2>
            <p className="text-xl text-amber-100 max-w-2xl mx-auto font-inter">
              Delivering exceptional results for clients across various industries
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {serviceStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-6xl font-bold mb-2 drop-shadow-lg font-poppins">
                  {stat.number}
                </div>
                <div className="text-lg md:text-xl font-semibold text-amber-100 font-inter">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4 font-poppins">
              Industries We <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600">Serve</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
              Our expertise spans across multiple industries, delivering tailored solutions for each unique sector
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 text-center shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="font-semibold text-gray-800 font-poppins">{industry}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6 font-poppins">
                Why Choose <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600">Our Services</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0 font-poppins">
                    9+
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 font-poppins">Years of Experience</h3>
                    <p className="text-gray-600 font-inter">Nearly a decade of delivering successful digital projects across various industries and business domains.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0 font-poppins">
                    500+
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 font-poppins">Successful Projects</h3>
                    <p className="text-gray-600 font-inter">Proven track record of delivering high-quality solutions that meet and exceed client expectations.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0 font-poppins">
                    99%
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2 font-poppins">Client Satisfaction</h3>
                    <p className="text-gray-600 font-inter">Exceptional client retention rate with long-term partnerships built on trust and results.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 font-poppins">Our Commitment</h3>
              <div className="space-y-4 text-gray-600 font-inter leading-relaxed">
                <p>
                  We believe in building long-term partnerships with our clients. Our approach combines 
                  technical expertise with strategic thinking to deliver solutions that drive real business value.
                </p>
                <p>
                  Every project is treated with the utmost importance, and we maintain transparent communication 
                  throughout the development process to ensure alignment with your business objectives.
                </p>
                <p>
                  Our team stays updated with the latest technologies and industry trends to provide you with 
                  innovative solutions that keep you ahead of the competition.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 font-poppins"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 mb-8 font-inter"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's discuss how our services can help you achieve your digital goals
          </motion.p>
          <motion.a
            href="/contact"
            className="bg-gradient-to-r from-orange-500 to-amber-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-block font-poppins"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact 
          </motion.a>
        </div>
      </section>

    </div>
  );
};

export default Services;