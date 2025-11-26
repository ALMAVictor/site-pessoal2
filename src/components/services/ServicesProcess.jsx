import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaSearch, FaLightbulb, FaCode, FaRocket, FaChartLine, FaHandshake } from 'react-icons/fa';

const steps = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description: 'Deep dive into your business, target audience, and goals. I analyze your current performance and design a data-driven growth strategy.',
    icon: FaSearch,
    color: 'from-blue-600 to-indigo-600',
  },
  {
    number: '02',
    title: 'Design & Psychology',
    description: 'I apply consumer behavioral psychology principles (Cialdini, Fogg, Kahneman) to design high-converting interfaces. Every element is strategically placed.',
    icon: FaLightbulb,
    color: 'from-indigo-600 to-purple-600',
  },
  {
    number: '03',
    title: 'Development & Build',
    description: 'Clean, performant code using React, Next.js, and Tailwind CSS. Optimized for Core Web Vitals and mobile-first experience.',
    icon: FaCode,
    color: 'from-purple-600 to-pink-600',
  },
  {
    number: '04',
    title: 'Launch & Optimize',
    description: 'Your solution goes live with A/B testing infrastructure, analytics, and conversion tracking. Continuous optimization based on real data.',
    icon: FaRocket,
    color: 'from-pink-600 to-red-600',
  },
  {
    number: '05',
    title: 'Measure & Iterate',
    description: 'Data-driven analysis of performance metrics. I identify bottlenecks and implement improvements to maximize ROI and conversion rates.',
    icon: FaChartLine,
    color: 'from-red-600 to-orange-600',
  },
  {
    number: '06',
    title: 'Scale & Grow',
    description: 'Once proven, we scale successful strategies across channels. Your growth engine is now running on autopilot with continuous optimization.',
    icon: FaHandshake,
    color: 'from-orange-600 to-yellow-600',
  },
];

const ServicesProcess = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100/20 to-indigo-100/20 rounded-full blur-3xl -z-0 hidden md:block" />

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
              My{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Process
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              A proven methodology that combines strategy, psychology, and technical execution to deliver measurable results.
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={step.number}
                className="relative group"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4, ease: 'easeOut' },
                  },
                }}
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/50 hover:shadow-2xl transition-shadow h-full flex flex-col relative overflow-hidden">
                  {/* Number badge */}
                  <div className={`absolute top-6 right-6 text-6xl font-black bg-gradient-to-r ${step.color} bg-clip-text text-transparent opacity-10`}>
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className={`mb-6 p-4 rounded-2xl bg-gradient-to-br ${step.color} w-fit shadow-lg`}>
                    <step.icon className="text-3xl text-white" />
                  </div>

                  {/* Content */}
                  <h3 className={`text-2xl font-extrabold mb-3 tracking-tight relative z-10 bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed flex-1 relative z-10">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesProcess;

