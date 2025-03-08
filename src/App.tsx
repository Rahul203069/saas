import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { supabase } from './lib/supabse';

import { 
  Bot, 
  BarChart, 
  Zap, 
  MessageSquareMore,
  ArrowRight,
  CheckCircle,
  ChevronRight
} from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    monthlyLeads: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formRef, formInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const { error } = await supabase.from('leads').insert([
      {
        full_name: formData.fullName,
        business_email: formData.email,
        company_name: formData.company,
        monthly_leads: parseInt(formData.monthlyLeads),
      },
    ]);
    if(error){
      console.error(error);
    }
    setSubmitted(true);
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const scrollToForm = () => {
    const formElement = document.querySelector('#waitlist-form');
    formElement?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    {
      icon: Bot,
      title: 'AI-Powered Conversations',
      description: 'Natural engagement with leads through intelligent email automation and whatsapp chatbots'
    },
    {
      icon: MessageSquareMore,
      title: 'Smart Qualification',
      description: 'Automated gathering of budget, location, contact number , and preferences '
    },
    {
      icon: BarChart,
      title: 'Advanced Lead Scoring',
      description: 'Intelligent prioritization based on engagement signals'
    },
    {
      icon: Zap,
      title: 'Instant Notifications',
      description: 'Real-time alerts when leads become sales-ready'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden" ref={heroRef}>
        <div className="absolute inset-0 bg-grid mask-gradient" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 relative"
        >
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block"
            >
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-slate-800 mb-8">
                <span className="text-primary-400">New</span>
                <ChevronRight className="h-4 w-4 text-slate-500 mx-1" />
                <span className="text-slate-400">AI-powered lead qualification</span>
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl font-bold mb-8"
            >
              <span className="text-gradient">AI-Powered Real Estate</span>
              <span className="block mt-2">Lead Nurturing</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto"
            >
              Transform cold emails into hot deals with intelligent automation. 
              Focus only on sales-ready prospects while our AI handles the rest.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-12"
            >
              <button
                onClick={scrollToForm}
                className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold text-lg hover:from-primary-600 hover:to-secondary-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                <span>Join the Waitlist</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>

             
            </motion.div>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-slate-800 mb-8">
         
                <span className="text-purple-700">Join the waitlist and Get 7-days free-trial & 30 % off for life on launch </span>
              </span>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative max-w-sm mx-auto mb-12 overflow-hidden rounded-full bg-slate-800"
            >
              <div className="h-2 bg-gradient-to-r from-primary-500 to-secondary-500 w-[78%]" />
              <div className="absolute inset-0 animate-shimmer" />
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-sm text-slate-500"
            >
              78% of waitlist spots claimed
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24" ref={featuresRef}>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-900/50 border border-slate-800 hover:border-slate-700/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 to-secondary-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <feature.icon className="h-12 w-12 mb-6 text-primary-400 group-hover:text-primary-300 transition-colors duration-300" />
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-gradient transition-all duration-300">
                {feature.title}
              </h3>
              <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Form Section */}
      <div id="waitlist-form" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24" ref={formRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={formInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-900/50" />
          <div className="absolute inset-0 bg-grid opacity-10" />
          
          <div className="relative md:flex">
            <div className="md:w-1/2 p-8 lg:p-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={formInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold mb-2 text-gradient">
                  Join the Waitlist
                </h2>
               
              </motion.div>
              
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircle className="h-16 w-16 text-primary-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">You're on the list!</h3>
                  <p className="text-slate-400">We'll notify you when we launch.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-slate-500 transition-all duration-200"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-slate-500 transition-all duration-200"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Company/Agency Name *
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-slate-500 transition-all duration-200"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      How many leads you manage monthly *
                    </label>
                    <input
                      type="number"
                      name="monthlyLeads"
                      required
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-slate-500 transition-all duration-200"
                      value={formData.monthlyLeads}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                 
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white font-semibold py-4 px-6 rounded-xl flex items-center justify-center space-x-2 disabled:opacity-50 transition-all duration-300 group"
                  >
                    <span>Join the Waitlist</span>
                    {isSubmitting ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                    ) : (
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                    )}
                  </button>
                </form>
              )}
            </div>
            
            <div className="md:w-1/2 p-8 lg:p-12 bg-slate-900/50">
              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-gradient-to-b from-slate-800 to-slate-800/50 border border-slate-700/50">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center">
                        <Bot className="h-6 w-6 text-primary-400" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-gradient">
                        AI-Powered Conversations
                      </h3>
                      <p className="text-slate-400">
                        Our AI engages with leads naturally, qualifying them based on their responses and behavior.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-gradient-to-b from-slate-800 to-slate-800/50 border border-slate-700/50">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-secondary-500/10 flex items-center justify-center">
                        <Zap className="h-6 w-6 text-secondary-400" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-gradient">
                        Instant Lead Scoring
                      </h3>
                      <p className="text-slate-400">
                        Get real-time insights into lead quality and receive notifications for hot prospects.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 rounded-xl bg-gradient-to-b from-slate-800 to-slate-800/50 border border-slate-700/50">
                <div className="text-center">
                  <p className="text-3xl font-bold text-gradient mb-2">50+</p>
                  <p className="text-slate-400">Agents already on the waitlist</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default App;