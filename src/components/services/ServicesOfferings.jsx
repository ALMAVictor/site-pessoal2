import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FaRocket, 
  FaGlobe, 
  FaShoppingCart, 
  FaChartLine, 
  FaBullhorn, 
  FaPalette
} from 'react-icons/fa';

const services = [
  {
    title: 'High-Converting Landing Pages',
    description: 'Designed and coded specifically for Paid Traffic campaigns (Meta/Google Ads). Built with Next.js/React, optimized for Core Web Vitals, and embedded with consumer behavioral psychology principles.',
    icon: FaRocket,
    features: ['A/B Testing Built-In', 'Mobile-First Design', 'Core Web Vitals Optimized', 'Consumer Behavioral Psychology Applied'],
    color: 'from-blue-600 to-indigo-600',
    bgColor: 'from-blue-50 to-indigo-50',
  },
  {
    title: 'Custom Websites & Web Apps',
    description: 'Full-stack web applications and websites built with React, Next.js, and modern tech stack. Scalable, performant, and optimized for conversions.',
    icon: FaGlobe,
    features: ['React/Next.js', 'Responsive Design', 'SEO Optimized', 'Performance Focused'],
    color: 'from-indigo-600 to-purple-600',
    bgColor: 'from-indigo-50 to-purple-50',
  },
  {
    title: 'E-commerce Solutions',
    description: 'Complete e-commerce platforms with shopping cart, payment integration, and conversion optimization. Built for scale and user experience.',
    icon: FaShoppingCart,
    features: ['Payment Integration', 'Cart Optimization', 'Product Management', 'Analytics Integration'],
    color: 'from-purple-600 to-pink-600',
    bgColor: 'from-purple-50 to-pink-50',
  },
  {
    title: 'CRO & A/B Testing',
    description: 'Conversion Rate Optimization with comprehensive A/B testing infrastructure. Data-driven decisions to maximize your conversion funnel performance.',
    icon: FaChartLine,
    features: ['A/B Testing Setup', 'Funnel Analysis', 'Heatmap Integration', 'Data-Driven Optimization'],
    color: 'from-green-600 to-emerald-600',
    bgColor: 'from-green-50 to-emerald-50',
  },
  {
    title: 'Paid Traffic Strategy',
    description: 'End-to-end paid traffic management for Meta Ads, Google Ads, and LinkedIn Ads. Campaign setup, optimization, and ROAS-focused strategy.',
    icon: FaBullhorn,
    features: ['Campaign Setup', 'Ad Creative Strategy', 'ROAS Optimization', 'Multi-Platform Management'],
    color: 'from-orange-600 to-red-600',
    bgColor: 'from-orange-50 to-red-50',
  },
  {
    title: 'Copywriting & UI Copy',
    description: 'Persuasive copywriting for landing pages, ads, and user interfaces. Applying consumer behavioral psychology principles (Cialdini, Fogg, Kahneman) to drive action.',
    icon: FaPalette,
    features: ['Landing Page Copy', 'Ad Copywriting', 'UI/UX Copy', 'Consumer Behavioral Psychology'],
    color: 'from-cyan-600 to-blue-600',
    bgColor: 'from-cyan-50 to-blue-50',
  },
];

const ServicesOfferings = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100/30 to-indigo-100/30 rounded-full blur-3xl -z-0 hidden md:block" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-100/30 to-pink-100/30 rounded-full blur-3xl -z-0 hidden md:block" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            visible: { transition: { staggerChildren: 0.05 } },
          }}
        >
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-slate-900 tracking-tight">
              <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                Complete
              </span>{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
                Growth Services
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              From strategy to execution, I deliver end-to-end solutions that combine technical excellence with consumer behavioral psychology insights.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                className="group bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/50 hover:shadow-2xl transition-shadow flex flex-col relative overflow-hidden"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4, ease: 'easeOut' },
                  },
                }}
              >
                {/* Icon */}
                <div className={`mb-6 p-4 rounded-2xl bg-gradient-to-br ${service.color} w-fit shadow-lg`}>
                  <service.icon className="text-3xl text-white" />
                </div>

                {/* Content */}
                <h3 className={`text-2xl font-extrabold mb-3 tracking-tight bg-gradient-to-r ${service.color} bg-clip-text text-transparent relative z-10`}>
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed flex-1">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 relative z-10">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-slate-700">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} shadow-sm`} />
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOfferings;

