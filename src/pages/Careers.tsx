import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Users, Heart, Award, Zap, ArrowRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Careers: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs',
      color: 'bg-red-500',
    },
    {
      icon: Award,
      title: 'Professional Growth',
      description: 'Continuous learning opportunities and career development',
      color: 'bg-yellow-500',
    },
    {
      icon: Users,
      title: 'Great Team',
      description: 'Work with talented and passionate professionals',
      color: 'bg-blue-500',
    },
    {
      icon: Zap,
      title: 'Flexible Work',
      description: 'Remote work options and flexible schedules',
      color: 'bg-purple-500',
    },
  ];

  const openPositions = [
    {
      title: 'Senior Full-Stack Developer',
      type: 'Full-time',
      location: 'Remote / San Francisco',
      department: 'Engineering',
      description: 'We are looking for an experienced full-stack developer to join our team and help build innovative solutions for our clients.',
    },
    {
      title: 'UI/UX Designer',
      type: 'Full-time',
      location: 'Remote / New York',
      department: 'Design',
      description: 'Join our design team to create beautiful and intuitive user experiences for web and mobile applications.',
    },
    {
      title: 'DevOps Engineer',
      type: 'Full-time',
      location: 'Remote / Austin',
      department: 'Engineering',
      description: 'Help us build and maintain scalable infrastructure and deployment pipelines for our applications.',
    },
    {
      title: 'Product Manager',
      type: 'Full-time',
      location: 'Remote / Seattle',
      department: 'Product',
      description: 'Lead product strategy and development for our client projects and internal products.',
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
              Join Our <span className="text-octazen-800">Team</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Be part of a team that's passionate about technology and committed to 
              delivering exceptional solutions for our clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us */}
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
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a supportive environment where you can grow your skills, 
              work on exciting projects, and make a real impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl p-8 shadow-lg card-hover text-center"
              >
                <div className={`w-16 h-16 ${benefit.color} rounded-lg flex items-center justify-center mx-auto mb-6`}>
                  <benefit.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Don't See the Right Position?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We're always looking for talented individuals to join our team. 
                Send us your resume and let's discuss how you can contribute to our success.
              </p>
              
              <motion.a
                href="mailto:careers@octazen.com?subject=Resume Submission"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 bg-octazen-700 text-white py-4 px-8 rounded-lg hover:bg-octazen-800 transition-colors duration-300 text-lg font-medium"
              >
                <Mail size={24} />
                <span>Send Your Resume</span>
              </motion.a>
              
              <p className="text-gray-500 mt-4">
                Email us at: <span className="text-octazen-800 font-medium">careers@octazentechnologies.com</span>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Our Culture
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-octazen-800 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Innovation First
                    </h3>
                    <p className="text-gray-600">
                      We encourage creative thinking and innovative solutions to complex problems.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-octazen-800 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Continuous Learning
                    </h3>
                    <p className="text-gray-600">
                      We invest in your growth with training, conferences, and learning opportunities.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-octazen-800 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Work-Life Balance
                    </h3>
                    <p className="text-gray-600">
                      We believe in maintaining a healthy balance between work and personal life.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-octazen-600 to-octazen-800 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">
                  What We Offer
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span>Competitive salary and benefits package</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span>Remote work opportunities</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span>Professional development budget</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span>Flexible working hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span>Health and wellness programs</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span>Team building activities</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers; 