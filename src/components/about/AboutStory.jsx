import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaLightbulb, FaRocket, FaChartLine } from 'react-icons/fa';

const milestones = [
  {
    year: '2019',
    title: 'The Beginning',
    description: 'Started as a Digital Marketing Strategist, learning the fundamentals of paid traffic, conversion optimization, and customer acquisition.',
    icon: FaLightbulb,
    color: 'from-blue-600 to-indigo-600',
  },
  {
    year: '2020-2023',
    title: 'Deepening Expertise',
    description: 'Mastered Consumer Behavioral Psychology principles (Cialdini, Fogg, Kahneman) and began applying them to landing page design and conversion optimization.',
    icon: FaChartLine,
    color: 'from-indigo-600 to-purple-600',
  },
  {
    year: '2024',
    title: 'The Hybrid Shift',
    description: 'Began pursuing Software Engineering at FIAP while continuing to work as a strategist. Started coding high-converting landing pages with React and Next.js.',
    icon: FaRocket,
    color: 'from-purple-600 to-pink-600',
  },
  {
    year: 'Today',
    title: 'Hybrid Growth Engineer',
    description: 'Combining strategy, psychology, and code to architect complete customer acquisition ecosystems. Delivering measurable results: 12.5% conversion increase, 22% CPA reduction.',
    icon: FaRocket,
    color: 'from-pink-600 to-red-600',
  },
];

const AboutStory = () => {
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
              My{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              From Digital Marketing Strategist to Hybrid Growth Engineer—a journey of combining psychology, strategy, and code.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-indigo-200 to-purple-200 hidden md:block" />

            <div className="space-y-12">
              {milestones.map((milestone, idx) => (
                <motion.div
                  key={milestone.year}
                  className="relative flex items-center gap-8"
                  variants={{
                    hidden: { opacity: 0, x: idx % 2 === 0 ? -50 : 50 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.5, ease: 'easeOut' },
                    },
                  }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-white border-4 border-blue-600 rounded-full -translate-x-1/2 z-10 hidden md:block" />

                  {/* Content card */}
                  <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:ml-auto md:pl-8 md:text-left'} ml-16 md:ml-0`}>
                    <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/50 hover:shadow-2xl transition-shadow">
                      {/* Year badge */}
                      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-br ${milestone.color} mb-4`}>
                        <milestone.icon className="text-white" size={16} />
                        <span className="text-sm font-bold text-white">{milestone.year}</span>
                      </div>

                      <h3 className="text-2xl font-extrabold text-slate-900 mb-3 tracking-tight">
                        {milestone.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutStory;

