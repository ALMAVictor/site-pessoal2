import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaSearch, FaLightbulb, FaCode, FaRocket, FaChartLine, FaHandshake } from 'react-icons/fa';

const approachSteps = [
  {
    step: '01',
    title: 'Understand Behavior',
    description: 'I start by understanding your target audience\'s psychology, motivations, and decision-making patterns. This foundation guides everything that follows.',
    icon: FaSearch,
    color: 'from-blue-600 to-indigo-600',
  },
  {
    step: '02',
    title: 'Design Strategy',
    description: 'Based on behavioral insights, I design a complete customer acquisition strategy—from paid traffic to conversion funnels.',
    icon: FaLightbulb,
    color: 'from-indigo-600 to-purple-600',
  },
  {
    step: '03',
    title: 'Code with Purpose',
    description: 'I translate strategy into high-converting landing pages and web applications using React, Next.js, and modern tech stack.',
    icon: FaCode,
    color: 'from-purple-600 to-pink-600',
  },
  {
    step: '04',
    title: 'Launch & Test',
    description: 'Every solution launches with A/B testing infrastructure built-in. I measure, analyze, and optimize based on real data.',
    icon: FaRocket,
    color: 'from-pink-600 to-red-600',
  },
  {
    step: '05',
    title: 'Measure Impact',
    description: 'I track conversion rates, CPA, and revenue metrics. Every optimization is backed by data and measurable results.',
    icon: FaChartLine,
    color: 'from-red-600 to-orange-600',
  },
  {
    step: '06',
    title: 'Iterate & Scale',
    description: 'Once proven, we scale successful strategies. Your growth engine runs on continuous optimization and data-driven decisions.',
    icon: FaHandshake,
    color: 'from-orange-600 to-yellow-600',
  },
];

const AboutApproach = () => {
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
            visible: { transition: { staggerChildren: 0.1 } },
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
                Approach
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              How I combine psychology, strategy, and code to deliver measurable results.
            </p>
          </motion.div>

          {/* Approach Steps */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {approachSteps.map((step) => (
              <motion.div
                key={step.step}
                className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/50 hover:shadow-2xl transition-shadow h-full flex flex-col relative overflow-hidden"
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
                {/* Step number */}
                <div className={`absolute top-6 right-6 text-6xl font-black bg-gradient-to-r ${step.color} bg-clip-text text-transparent opacity-10`}>
                  {step.step}
                </div>

                {/* Icon */}
                <div className={`mb-6 p-4 rounded-2xl bg-gradient-to-br ${step.color} w-fit`}>
                  <step.icon className="text-3xl text-white" />
                </div>

                {/* Content */}
                <h3 className={`text-2xl font-extrabold mb-3 tracking-tight relative z-10 bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed flex-1 relative z-10">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutApproach;

