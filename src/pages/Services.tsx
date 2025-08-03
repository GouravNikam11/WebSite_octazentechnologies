import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Code, Smartphone, Database, Cloud, Shield, Zap, 
  Settings, Palette, Search, 
  ArrowRight, CheckCircle 
} from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const services = [
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailored software solutions designed to meet your specific business requirements and challenges.',
      features: [
        'Web Application Development',
        'Desktop Software Solutions',
        'API Development & Integration',
        'Legacy System Modernization',
        'Custom Business Logic Implementation',
        'Scalable Architecture Design'
      ],
      color: 'bg-blue-500',
      delay: 0,
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      features: [
        'iOS App Development',
        'Android App Development',
        'Cross-platform Solutions (React Native, Flutter)',
        'App Store Optimization',
        'Mobile UI/UX Design',
        'App Maintenance & Updates'
      ],
      color: 'bg-green-500',
      delay: 0.1,
    },
    {
      icon: Database,
      title: 'Data Solutions',
      description: 'Comprehensive data management, analytics, and business intelligence services.',
      features: [
        'Database Design & Optimization',
        'Data Migration & Integration',
        'Business Intelligence & Analytics',
        'Data Warehousing',
        'ETL Process Development',
        'Data Security & Compliance'
      ],
      color: 'bg-purple-500',
      delay: 0.2,
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Cloud infrastructure, migration, and managed services for modern businesses.',
      features: [
        'Cloud Migration & Strategy',
        'AWS, Azure, Google Cloud Solutions',
        'Serverless Architecture',
        'Cloud Security & Compliance',
        'DevOps & CI/CD Implementation',
        'Cloud Cost Optimization'
      ],
      color: 'bg-orange-500',
      delay: 0.3,
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and infrastructure.',
      features: [
        'Security Audits & Assessments',
        'Penetration Testing',
        'Security Architecture Design',
        'Compliance & Governance',
        'Incident Response Planning',
        'Security Training & Awareness'
      ],
      color: 'bg-red-500',
      delay: 0.4,
    },
    {
      icon: Zap,
      title: 'AI & Machine Learning',
      description: 'Cutting-edge artificial intelligence and machine learning solutions.',
      features: [
        'Predictive Analytics',
        'Natural Language Processing',
        'Computer Vision Solutions',
        'Recommendation Systems',
        'Chatbot Development',
        'AI Model Training & Deployment'
      ],
      color: 'bg-indigo-500',
      delay: 0.5,
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We start by understanding your business needs, goals, and technical requirements.',
      icon: Search,
    },
    {
      step: '02',
      title: 'Design & Architecture',
      description: 'Our team creates detailed technical specifications and user experience designs.',
      icon: Palette,
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'We build your solution using best practices and rigorous testing methodologies.',
      icon: Code,
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'We deploy your solution and provide ongoing maintenance and support.',
      icon: Settings,
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-octazen-800">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We offer comprehensive technology solutions to help your business grow, 
              innovate, and succeed in the digital age.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: service.delay }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl p-8 shadow-lg card-hover border border-gray-100"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-16 h-16 ${service.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <service.icon size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 mb-4">What we offer:</h4>
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure your project is delivered on time, 
              within budget, and exceeds your expectations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative">
                  <div className="w-20 h-20 bg-octazen-800 rounded-full flex items-center justify-center mx-auto mb-6">
                    <step.icon size={32} className="text-white" />
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-octazen-200 transform translate-x-4"></div>
                  )}
                </div>
                <div className="text-sm font-semibold text-octazen-800 mb-2">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-octazen-800">
        <div className="container-custom">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Ready to Get Started?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-octazen-100 mb-8 max-w-2xl mx-auto"
            >
              Let's discuss your project requirements and how we can help bring your vision to life.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-octazen-800 font-medium py-3 px-8 rounded-lg hover:bg-gray-50 transition-colors duration-300 flex items-center space-x-2"
                >
                  <span>Start Your Project</span>
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
              <Link to="/industries">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white font-medium py-3 px-8 rounded-lg hover:bg-white hover:text-octazen-800 transition-colors duration-300"
                >
                  View Industries
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services; 