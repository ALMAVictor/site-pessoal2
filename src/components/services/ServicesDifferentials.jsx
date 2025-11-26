import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBrain, FaCode, FaChartBar, FaRocket, FaShieldAlt, FaClock } from 'react-icons/fa';

const differentials = [
  {
    title: 'Psychology + Code',
    description: 'I bridge the gap between consumer behavioral psychology and front-end engineering. Your solution isn\'t just technically sound—it\'s psychologically optimized.',
    icon: FaBrain,
    color: 'from-blue-600 to-indigo-600',
  },
  {
    title: 'Full-Stack Growth',
    description: 'From paid traffic strategy to code deployment. I handle the entire customer acquisition ecosystem, not just one piece.',
    icon: FaRocket,
    color: 'from-indigo-600 to-purple-600',
  },
  {
    title: 'Data-Driven Decisions',
    description: 'Every optimization is backed by data. A/B testing, analytics, and funnel analysis guide every decision I make.',
    icon: FaChartBar,
    color: 'from-purple-600 to-pink-600',
  },
  {
    title: 'Modern Tech Stack',
    description: 'React, Next.js, Tailwind CSS, and the latest tools. Your solution is built with cutting-edge technology that scales.',
    icon: FaCode,
    color: 'from-pink-600 to-red-600',
  },
  {
    title: 'Fast Delivery',
    description: 'Your landing page goes live in 7 days after design approval. No delays, no excuses—just results.',
    icon: FaClock,
    color: 'from-red-600 to-orange-600',
  },
  {
    title: '100% Satisfaction',
    description: 'I work until you\'re completely satisfied. Unlimited revisions and adjustments until the project is perfect.',
    icon: FaShieldAlt,
    color: 'from-orange-600 to-yellow-600',
  },
];

const ServicesDifferentials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-100/30 to-purple-100/30 rounded-full blur-3xl -z-0 hidden md:block" />

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
              Why{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Choose Me
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              The unique combination of skills that sets me apart from traditional developers and marketers.
            </p>
          </motion.div>

          {/* Differentials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentials.map((item, idx) => (
              <motion.div
                key={item.title}
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
                <div className={`mb-6 p-4 rounded-2xl bg-gradient-to-br ${item.color} w-fit shadow-lg`}>
                  <item.icon className="text-3xl text-white" />
                </div>

                {/* Content */}
                <h3 className={`text-2xl font-extrabold mb-3 tracking-tight relative z-10 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed flex-1 relative z-10">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesDifferentials;

