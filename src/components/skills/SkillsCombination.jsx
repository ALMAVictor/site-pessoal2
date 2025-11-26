import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCode, FaBrain, FaRocket, FaChartLine } from 'react-icons/fa';

const combinations = [
  {
    title: 'Psychology + Code',
    description: 'I apply consumer behavioral psychology principles directly in the code. Every button placement, color choice, and interaction is backed by research from Cialdini, Fogg, and Kahneman.',
    icon: FaBrain,
    color: 'from-blue-600 to-indigo-600',
    examples: ['Social proof triggers in React components', 'Scarcity indicators with real-time data', 'Persuasive copy integrated into UI'],
  },
  {
    title: 'Strategy + Execution',
    description: 'I don\'t just design strategies—I code them. From paid traffic campaigns to landing page optimization, I handle both the "why" and the "how".',
    icon: FaRocket,
    color: 'from-indigo-600 to-purple-600',
    examples: ['End-to-end funnel architecture', 'A/B testing infrastructure built-in', 'Data-driven optimization cycles'],
  },
  {
    title: 'Data + Design',
    description: 'Every design decision is validated with data. I use analytics, heatmaps, and A/B tests to ensure that beautiful designs also convert.',
    icon: FaChartLine,
    color: 'from-purple-600 to-pink-600',
    examples: ['Conversion-focused UI design', 'Performance-optimized layouts', 'Mobile-first responsive strategies'],
  },
];

const SkillsCombination = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100/30 to-indigo-100/30 rounded-full blur-3xl -z-0 hidden md:block" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
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
              The{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Combination
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              What makes me unique is how I combine these skills—not just having them separately, but integrating them seamlessly.
            </p>
          </motion.div>

          {/* Combinations Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {combinations.map((item) => (
              <motion.div
                key={item.title}
                className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/50 hover:shadow-2xl transition-shadow flex flex-col"
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.9 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.4, ease: 'easeOut' },
                  },
                }}
              >
                {/* Icon */}
                <div className={`mb-6 p-4 rounded-2xl bg-gradient-to-br ${item.color} w-fit`}>
                  <item.icon className="text-3xl text-white" />
                </div>

                {/* Title */}
                <h3 className={`text-2xl font-extrabold mb-4 tracking-tight bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 mb-6 leading-relaxed flex-1">
                  {item.description}
                </p>

                {/* Examples */}
                <ul className="space-y-2">
                  {item.examples.map((example) => (
                    <li key={example} className="flex items-center gap-2 text-sm text-slate-700">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${item.color}`} />
                      <span>{example}</span>
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

export default SkillsCombination;

