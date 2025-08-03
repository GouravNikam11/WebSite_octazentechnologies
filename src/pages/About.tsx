import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Users, Award, Zap } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const values = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'We are passionate about technology and its power to transform businesses.',
      color: 'bg-red-500',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and building strong partnerships.',
      color: 'bg-blue-500',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from code quality to client service.',
      color: 'bg-yellow-500',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We constantly explore new technologies and creative solutions.',
      color: 'bg-purple-500',
    },
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    },
    {
      name: 'David Kim',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
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
              About <span className="text-octazen-800">Octazen</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are a team of passionate technologists dedicated to transforming businesses 
              through innovative digital solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-octazen-800 rounded-lg flex items-center justify-center mr-4">
                  <Target size={24} className="text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                To empower businesses with cutting-edge technology solutions that drive growth, 
                efficiency, and innovation. We believe that every organization deserves access 
                to world-class digital tools that can transform their operations and customer experiences.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Through our expertise in software development, mobile applications, and digital 
                transformation, we help companies navigate the complexities of the modern digital 
                landscape and emerge stronger, more competitive, and future-ready.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-octazen-800 rounded-lg flex items-center justify-center mr-4">
                  <Eye size={24} className="text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                To be the leading technology partner for businesses worldwide, known for our 
                innovative solutions, exceptional service, and unwavering commitment to client success.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We envision a future where technology seamlessly enhances human potential, 
                where businesses operate with unprecedented efficiency, and where digital 
                transformation creates opportunities for growth and prosperity for all.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
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
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide everything we do and shape our relationships 
              with clients, partners, and each other.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl p-8 shadow-lg card-hover text-center"
              >
                <div className={`w-16 h-16 ${value.color} rounded-lg flex items-center justify-center mx-auto mb-6`}>
                  <value.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our talented team of experts brings together diverse skills and experiences 
              to deliver exceptional results for our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl p-6 shadow-lg card-hover text-center"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-octazen-800 font-medium">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-8"
            >
              Our Story
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 leading-relaxed space-y-6"
            >
              <p>
                Founded in 2018, Octazen Technologies began with a simple mission: to make 
                technology accessible and beneficial for businesses of all sizes. What started 
                as a small team of passionate developers has grown into a comprehensive 
                technology solutions provider.
              </p>
              <p>
                Over the years, we've helped hundreds of companies transform their digital 
                presence, streamline their operations, and achieve their business goals. 
                Our commitment to quality, innovation, and client success has remained 
                unwavering throughout our journey.
              </p>
              <p>
                Today, we continue to push the boundaries of what's possible with technology, 
                always staying ahead of industry trends and emerging technologies to provide 
                our clients with the best possible solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 