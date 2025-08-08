import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Building2, ShoppingCart, Car, GraduationCap, Heart, 
  DollarSign, Plane, Factory, Leaf, Shield, 
  ArrowRight, Users, TrendingUp 
} from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Industries: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const industries = [
    {
      icon: Building2,
      title: 'Real Estate',
      description: 'Digital solutions for property management, virtual tours, and real estate platforms.',
      solutions: ['Property Management Systems', 'Virtual Tour Platforms', 'CRM Solutions', 'Market Analytics'],
      color: 'bg-blue-500',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce',
      description: 'Complete e-commerce solutions from online stores to inventory management systems.',
      solutions: ['Online Store Development', 'Payment Gateway Integration', 'Inventory Management', 'Analytics Dashboard'],
      color: 'bg-green-500',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    },
    {
      icon: Car,
      title: 'Automotive',
      description: 'Technology solutions for automotive dealerships, fleet management, and vehicle services.',
      solutions: ['Dealership Management', 'Fleet Tracking Systems', 'Service Scheduling', 'Customer Portals'],
      color: 'bg-red-500',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=400&fit=crop',
    },
    
    {
      icon: DollarSign,
      title: 'Finance',
      description: 'Financial technology solutions for banking, insurance, and investment management.',
      solutions: ['Banking Applications', 'Insurance Platforms', 'Investment Tools', 'Financial Analytics'],
      color: 'bg-yellow-500',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop',
    },
    {
      icon: Plane,
      title: 'Travel & Hospitality',
      description: 'Technology solutions for hotels, travel agencies, and hospitality management.',
      solutions: ['Hotel Management Systems', 'Booking Platforms', 'Guest Services', 'Travel Analytics'],
      color: 'bg-indigo-500',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop',
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      description: 'Industrial automation, supply chain management, and manufacturing optimization solutions.',
      solutions: ['Supply Chain Management', 'Quality Control Systems', 'Production Planning', 'IoT Integration'],
      color: 'bg-gray-500',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
    },
    {
      icon: Leaf,
      title: 'Agriculture',
      description: 'Smart farming solutions, crop management, and agricultural technology platforms.',
      solutions: ['Crop Management Systems', 'IoT Sensors', 'Weather Monitoring', 'Precision Agriculture'],
      color: 'bg-emerald-500',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop',
    },
    {
      icon: Shield,
      title: 'Government',
      description: 'Digital government solutions for public services, citizen engagement, and administrative efficiency.',
      solutions: ['Citizen Portals', 'Document Management', 'Public Service Apps', 'Security Systems'],
      color: 'bg-slate-500',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop',
    },
  ];

  const stats = [
    { number: '5+', label: 'Industries Served' },
    { number: '25+', label: 'Projects Delivered' },
    { number: '95%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' },
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
              Industries We <span className="text-octazen-800">Serve</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We have extensive experience across diverse industries, delivering tailored 
              technology solutions that drive growth and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-octazen-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg card-hover overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                  <div className="absolute top-4 left-4">
                    <div className={`w-12 h-12 ${industry.color} rounded-lg flex items-center justify-center`}>
                      <industry.icon size={24} className="text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {industry.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {industry.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-gray-900 text-sm">Key Solutions:</h4>
                    <ul className="space-y-1">
                      {industry.solutions.slice(0, 3).map((solution, solutionIndex) => (
                        <li key={solutionIndex} className="text-sm text-gray-600 flex items-center">
                          <div className="w-1.5 h-1.5 bg-octazen-800 rounded-full mr-2"></div>
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-octazen-800 text-white py-2 px-4 rounded-lg hover:bg-octazen-900 transition-colors duration-300 flex items-center justify-center space-x-2"
                    >
                      <span>Learn More</span>
                      <ArrowRight size={16} />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
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
              Why Choose Octazen for Your Industry?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our deep industry knowledge combined with technical expertise ensures 
              solutions that truly understand your business challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-octazen-800 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Users size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Industry Expertise
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our team has deep understanding of industry-specific challenges, 
                regulations, and best practices across multiple sectors.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-octazen-800 rounded-lg flex items-center justify-center mx-auto mb-6">
                <TrendingUp size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Proven Results
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We have a track record of delivering successful projects that drive 
                measurable business outcomes and ROI for our clients.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-octazen-800 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Shield size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Security & Compliance
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We ensure all solutions meet industry-specific security standards 
                and regulatory compliance requirements.
              </p>
            </motion.div>
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
              Ready to Transform Your Industry?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-octazen-100 mb-8 max-w-2xl mx-auto"
            >
              Let's discuss how our industry-specific solutions can help your business 
              achieve its digital transformation goals.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-octazen-800 font-medium py-3 px-8 rounded-lg hover:bg-gray-50 transition-colors duration-300 flex items-center space-x-2 mx-auto"
                >
                  <span>Start Your Project</span>
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries; 