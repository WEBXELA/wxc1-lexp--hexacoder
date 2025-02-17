import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import {
  Search,
  Shield,
  Zap,
  Globe,
  Users,
  BarChart3,
  ArrowRight,
  CheckCircle,
  Target,
  Rocket,
  Award,
  MessageSquare,
  Star,
  TrendingUp
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleIn = {
  initial: { scale: 0.95, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.5 }
};

export default function Landing() {
  const navigate = useNavigate();
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <motion.div
              initial="initial"
              animate="animate"
              variants={stagger}
              className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left"
            >
              <motion.h1
                variants={fadeInUp}
                className="text-5xl sm:text-6xl xl:text-7xl font-bold text-gray-900 tracking-tight"
              >
                Transform Your
                <span className="text-blue-600"> Lead Generation</span>
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed"
              >
                Revolutionize your business with our AI-powered lead generation platform. Find, connect, and convert high-quality prospects with unprecedented efficiency.
              </motion.p>
              <motion.div
                variants={fadeInUp}
                className="mt-10 sm:mt-12 space-x-4"
              >
                <button
                  onClick={() => navigate('/signup')}
                  className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-xl shadow-xl text-white bg-blue-600 hover:bg-blue-700 transition-all hover:shadow-blue-500/20 transform hover:-translate-y-1"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-6 h-6" />
                </button>
                <button
                  onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-xl text-gray-700 bg-white hover:bg-gray-50 transition-all shadow-lg transform hover:-translate-y-1"
                >
                  Learn More
                </button>
              </motion.div>
              
              {/* Trust Indicators */}
              {/* <motion.div
                variants={fadeInUp}
                className="mt-12 grid grid-cols-3 gap-8"
              >
                {[
                  { label: 'Active Users', value: '10,000+' },
                  { label: 'Leads Generated', value: '1M+' },
                  { label: 'Success Rate', value: '95%' }
                ].map((stat) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-4 bg-white rounded-xl shadow-lg"
                  >
                    <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
                    <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div> */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
            >
              <div className="relative mx-auto w-full rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                  alt="Dashboard Preview"
                  className="w-full rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Modern Lead Generation
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to supercharge your lead generation process and drive business growth
            </p>
          </motion.div>

          <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Shield,
                title: 'Advanced AI Search',
                description: 'Leverage cutting-edge AI algorithms to find the most relevant leads based on your specific criteria.',
              },
              {
                icon: Globe,
                title: 'Multi-Platform Integration',
                description: 'Seamlessly search and aggregate leads across LinkedIn, Twitter, Facebook, and Instagram.',
              },
              {
                icon: Rocket,
                title: 'Automated Lead Enrichment',
                description: 'Automatically enrich lead profiles with detailed information from multiple data sources.',
              },
              {
                icon: Target,
                title: 'Precision Targeting',
                description: 'Use advanced filters to target leads by industry, company size, location, and more.',
              },
              {
                icon: TrendingUp,
                title: 'Performance Analytics',
                description: 'Track and analyze your lead generation performance with detailed insights and reports.',
              },
              {
                icon: Shield,
                title: 'Enterprise Security',
                description: 'Bank-grade security and compliance with international data protection regulations.',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <feature.icon className="h-12 w-12 text-blue-600 mb-6" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Get started in minutes with our simple three-step process
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: Search,
                title: 'Define Your Criteria',
                description: 'Set up your target audience parameters using our intuitive interface.',
              },
              {
                icon: Zap,
                title: 'AI-Powered Search',
                description: 'Our AI algorithms find and qualify the best leads matching your criteria.',
              },
              {
                icon: Users,
                title: 'Connect & Convert',
                description: 'Engage with your leads through our integrated communication tools.',
              },
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="relative">
                  <div className="w-20 h-20 mx-auto bg-blue-600 rounded-full flex items-center justify-center mb-6">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  {index < 2 && (
                    <div className="hidden md:block absolute top-10 left-full w-full transform -translate-x-1/2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="h-0.5 bg-blue-200"
                      />
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of satisfied customers who have transformed their lead generation process
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah sophiason',
                role: 'Marketing Director',
                company: 'TechCorp',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200&q=80',
                quote: "This platform has revolutionized our lead generation process. We have seen a 300% increase in qualified leads.",
              },
              {
                name: 'Michael Chen',
                role: 'Sales Manager',
                company: 'GrowthX',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200&q=80',
                quote: 'The AI-powered search capabilities have saved us countless hours in lead research and qualification.',
              },
              {
                name: 'Emma Davis',
                role: 'CEO',
                company: 'Innovate Inc',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&h=200&q=80',
                quote: 'Outstanding platform that has helped us scale our outreach efforts while maintaining quality.',
              },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                    <p className="text-gray-500 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">{testimonial.quote}</p>
                <div className="mt-4 flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Lead Generation?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join thousands of businesses already using our platform to drive growth and success
          </p>
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/signup')}
              className="px-8 py-4 text-lg font-medium rounded-xl bg-white text-blue-600 hover:bg-blue-50 transition-all shadow-lg transform hover:-translate-y-1"
            >
              Start Free Trial
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
              className="px-8 py-4 text-lg font-medium rounded-xl border-2 border-white text-white hover:bg-white/10 transition-all transform hover:-translate-y-1"
            >
              Contact Sales
            </motion.button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}