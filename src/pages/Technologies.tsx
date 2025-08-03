import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, Database, Cloud, Smartphone, Shield,
  Zap, Settings, ArrowRight
} from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Technologies: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const techCategories = [
    {
      category: 'Frontend Development',
      icon: Code,
      color: 'bg-blue-500',
      technologies: [
        { name: 'React', logo: '⚛️', description: 'Modern UI library for building interactive user interfaces' },
        { name: 'Vue.js', logo: '💚', description: 'Progressive JavaScript framework for building user interfaces' },
        { name: 'Angular', logo: '🅰️', description: 'Platform for building mobile and desktop web applications' },
        { name: 'TypeScript', logo: '📘', description: 'Typed superset of JavaScript for better development experience' },
        { name: 'Tailwind CSS', logo: '🎨', description: 'Utility-first CSS framework for rapid UI development' },
        { name: 'Next.js', logo: '⚡', description: 'React framework for production with server-side rendering' },
      ],
    },
    {
      category: 'Backend Development',
      icon: Database,
      color: 'bg-green-500',
      technologies: [
        { name: 'Node.js', logo: '🟢', description: 'JavaScript runtime for building scalable server-side applications' },
        { name: 'Python', logo: '🐍', description: 'Versatile programming language for web development and data science' },
        { name: 'Java', logo: '☕', description: 'Enterprise-grade programming language for building robust applications' },
        { name: 'C#', logo: '🔷', description: 'Microsoft programming language for .NET applications' },
        { name: 'Go', logo: '🐹', description: 'Fast and efficient programming language for cloud services' },
        { name: 'PHP', logo: '🐘', description: 'Server-side scripting language for web development' },
      ],
    },
    {
      category: 'Mobile Development',
      icon: Smartphone,
      color: 'bg-purple-500',
      technologies: [
        { name: 'React Native', logo: '📱', description: 'Cross-platform mobile app development framework' },
        { name: 'Flutter', logo: '🦋', description: 'Google UI toolkit for building natively compiled applications' },
        { name: 'iOS (Swift)', logo: '🍎', description: 'Native iOS development with Swift programming language' },
        { name: 'Android (Kotlin)', logo: '🤖', description: 'Native Android development with Kotlin' },
        { name: 'Xamarin', logo: '📲', description: 'Microsoft framework for cross-platform mobile development' },
        { name: 'Ionic', logo: '⚡', description: 'Hybrid mobile app development framework' },
      ],
    },
    {
      category: 'Cloud & DevOps',
      icon: Cloud,
      color: 'bg-orange-500',
      technologies: [
        { name: 'AWS', logo: '☁️', description: 'Amazon Web Services cloud computing platform' },
        { name: 'Azure', logo: '🔵', description: 'Microsoft cloud computing platform and services' },
        { name: 'Google Cloud', logo: '🌐', description: 'Google cloud computing platform' },
        { name: 'Docker', logo: '🐳', description: 'Containerization platform for application deployment' },
        { name: 'Kubernetes', logo: '⚓', description: 'Container orchestration platform for automated deployment' },
        { name: 'Terraform', logo: '🏗️', description: 'Infrastructure as code tool for cloud resource management' },
      ],
    },
    {
      category: 'Databases',
      icon: Database,
      color: 'bg-red-500',
      technologies: [
        { name: 'PostgreSQL', logo: '🐘', description: 'Advanced open-source relational database' },
        { name: 'MongoDB', logo: '🍃', description: 'NoSQL document database for modern applications' },
        { name: 'MySQL', logo: '🐬', description: 'Popular open-source relational database management system' },
        { name: 'Redis', logo: '🔴', description: 'In-memory data structure store for caching and messaging' },
        { name: 'Elasticsearch', logo: '🔍', description: 'Distributed search and analytics engine' },
        { name: 'DynamoDB', logo: '⚡', description: 'Fully managed NoSQL database service by AWS' },
      ],
    },
    {
      category: 'AI & Machine Learning',
      icon: Zap,
      color: 'bg-indigo-500',
      technologies: [
        { name: 'TensorFlow', logo: '🧠', description: 'Open-source machine learning framework by Google' },
        { name: 'PyTorch', logo: '🔥', description: 'Deep learning framework for research and production' },
        { name: 'Scikit-learn', logo: '📊', description: 'Machine learning library for Python' },
        { name: 'OpenAI API', logo: '🤖', description: 'Advanced AI models for natural language processing' },
        { name: 'Hugging Face', logo: '🤗', description: 'Platform for natural language processing models' },
        { name: 'Pandas', logo: '🐼', description: 'Data manipulation and analysis library for Python' },
      ],
    },
  ];

  const expertise = [
    {
      title: 'Full-Stack Development',
      description: 'End-to-end development from frontend to backend with modern technologies',
      icon: Code,
      color: 'bg-blue-500',
    },
    {
      title: 'Cloud Architecture',
      description: 'Scalable cloud solutions using AWS, Azure, and Google Cloud platforms',
      icon: Cloud,
      color: 'bg-green-500',
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Automated deployment pipelines and infrastructure management',
      icon: Settings,
      color: 'bg-purple-500',
    },
    {
      title: 'Security & Compliance',
      description: 'Secure development practices and compliance with industry standards',
      icon: Shield,
      color: 'bg-red-500',
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
              Our <span className="text-octazen-800">Technology Stack</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We leverage cutting-edge technologies and frameworks to build robust, 
              scalable, and innovative solutions for our clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technology Categories */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {techCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg card-hover border border-gray-100"
              >
                <div className="flex items-center mb-8">
                  <div className={`w-16 h-16 ${category.color} rounded-lg flex items-center justify-center mr-4`}>
                    <category.icon size={32} className="text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {category.category}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: techIndex * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className="relative group"
                    >
                      <div className="bg-gray-50 rounded-lg p-4 hover:bg-indigo-50 transition-colors duration-300 cursor-pointer">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{tech.logo}</span>
                          <div>
                            <h3 className="font-semibold text-gray-900 group-hover:text-octazen-800 transition-colors">
                              {tech.name}
                            </h3>
                            <p className="text-sm text-gray-600 mt-1">
                              {tech.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
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
              Our Areas of Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in comprehensive technology solutions that cover every aspect 
              of modern software development and deployment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl p-8 shadow-lg card-hover text-center"
              >
                <div className={`w-16 h-16 ${item.color} rounded-lg flex items-center justify-center mx-auto mb-6`}>
                  <item.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Tech Stack Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Why Choose Our Technology Stack?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-octazen-800 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Proven & Reliable
                    </h3>
                    <p className="text-gray-600">
                      We use battle-tested technologies that have proven their reliability 
                      in production environments across various industries.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-octazen-800 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Scalable & Future-Proof
                    </h3>
                    <p className="text-gray-600">
                      Our technology choices ensure your solutions can grow with your 
                      business and adapt to future technological advancements.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-octazen-800 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Performance Optimized
                    </h3>
                    <p className="text-gray-600">
                      We prioritize technologies that deliver exceptional performance 
                      and user experience for your applications.
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
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">
                  Technology Highlights
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span>Modern JavaScript frameworks (React, Vue, Angular)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span>Cloud-native development with microservices</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span>AI/ML integration capabilities</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span>Mobile-first responsive design</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span>DevOps automation and CI/CD pipelines</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span>Security-first development practices</span>
                  </div>
                </div>
              </div>
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
              Ready to Build with Modern Technology?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-octazen-100 mb-8 max-w-2xl mx-auto"
            >
              Let's discuss how our technology expertise can help bring your vision to life 
              with cutting-edge solutions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-octazen-800 font-medium py-3 px-8 rounded-lg hover:bg-gray-50 transition-colors duration-300 flex items-center space-x-2 mx-auto"
              >
                <span>Start Your Project</span>
                <ArrowRight size={20} />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technologies; 