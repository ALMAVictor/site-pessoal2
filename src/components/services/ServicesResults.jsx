import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaArrowUp, FaArrowDown, FaChartLine } from 'react-icons/fa';

const results = [
  {
    metric: '+12.5%',
    label: 'Conversion Rate Increase',
    description: 'Average improvement in conversion rates across landing pages optimized with consumer behavioral psychology principles.',
    icon: FaArrowUp,
    color: 'from-green-600 to-emerald-600',
    bgColor: 'from-green-50 to-emerald-50',
  },
  {
    metric: '-22%',
    label: 'CPA Reduction',
    description: 'Average reduction in Cost Per Acquisition through optimized landing pages and conversion funnels.',
    icon: FaArrowDown,
    color: 'from-blue-600 to-indigo-600',
    bgColor: 'from-blue-50 to-indigo-50',
  },
  {
    metric: '2.4%',
    label: 'Activation Rate Uplift',
    description: 'Measured improvement in new user activation through A/B testing and CRO optimization.',
    icon: FaChartLine,
    color: 'from-purple-600 to-pink-600',
    bgColor: 'from-purple-50 to-pink-50',
  },
];

const ServicesResults = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-950 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
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
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-white tracking-tight">
              Proven{' '}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Results
              </span>
            </h2>
            <p className="text-lg md:text-xl text-blue-200/90 max-w-3xl mx-auto leading-relaxed">
              Real numbers from real projects. Data-driven optimization delivers measurable impact.
            </p>
          </motion.div>

          {/* Results Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {results.map((result, idx) => (
              <motion.div
                key={result.label}
                className={`bg-gradient-to-br ${result.bgColor} rounded-3xl shadow-2xl p-8 border border-white/20 backdrop-blur-sm`}
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.9 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { type: 'spring', stiffness: 100 },
                  },
                }}
                whileHover={{ y: -12, scale: 1.05 }}
              >
                {/* Icon */}
                <div className={`mb-6 p-4 rounded-2xl bg-gradient-to-br ${result.color} w-fit`}>
                  <result.icon className="text-3xl text-white" />
                </div>

                {/* Metric */}
                <div className={`text-5xl md:text-6xl font-black mb-2 bg-gradient-to-r ${result.color} bg-clip-text text-transparent`}>
                  {result.metric}
                </div>

                {/* Label */}
                <h3 className="text-xl font-extrabold text-slate-900 mb-3 tracking-tight">
                  {result.label}
                </h3>

                {/* Description */}
                <p className="text-slate-700 leading-relaxed">
                  {result.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="text-center mt-16"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <motion.a
              href="https://www.linkedin.com/in/victor-mazoni-2596171b7/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center gap-2 px-10 py-5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 text-white rounded-full text-lg font-bold shadow-2xl shadow-blue-600/40 hover:shadow-blue-600/60 transition-all border border-blue-400/30 hover:border-blue-300/50 overflow-hidden group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <span className="relative z-10 text-white drop-shadow-lg">Get Similar Results for Your Business</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesResults;

