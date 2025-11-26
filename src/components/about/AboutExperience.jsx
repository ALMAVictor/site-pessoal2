import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBriefcase, FaRocket, FaChartLine } from 'react-icons/fa';

const experiences = [
  {
    company: 'V4 Company',
    role: 'Growth Engineer',
    period: '2023 - Present',
    description: 'Designing and coding high-performance landing pages for Paid Traffic campaigns. Implementing A/B testing infrastructure and conversion optimization strategies.',
    achievements: [
      '12.5% increase in conversion rate',
      '22% reduction in CPA',
      'Multiple landing pages optimized for Meta/Google Ads',
    ],
    icon: FaRocket,
    color: 'from-blue-600 to-indigo-600',
  },
  {
    company: 'Dr. Raphael Raduan',
    role: 'Digital Marketing Strategist',
    period: 'Jan 2024 - Jan 2025',
    description: 'End-to-end customer acquisition strategy for medical practice. Managed paid traffic campaigns, designed conversion funnels, and optimized landing pages.',
    achievements: [
      'Complete funnel architecture',
      'Paid traffic campaign management',
      'Landing page optimization',
    ],
    icon: FaChartLine,
    color: 'from-indigo-600 to-purple-600',
  },
  {
    company: 'Digital Marketing Strategist',
    role: 'Freelance & Agency Work',
    period: '2019 - Present',
    description: 'Working with various clients to architect customer acquisition ecosystems. Combining consumer behavioral psychology, copywriting, and technical execution.',
    achievements: [
      '5+ years of experience',
      'Multiple successful campaigns',
      'End-to-end growth solutions',
    ],
    icon: FaBriefcase,
    color: 'from-purple-600 to-pink-600',
  },
];

const AboutExperience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-100/20 to-purple-100/20 rounded-full blur-3xl -z-0 hidden md:block" />

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
              Professional{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Building customer acquisition ecosystems and delivering measurable results.
            </p>
          </motion.div>

          {/* Experience Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {experiences.map((exp) => (
              <motion.div
                key={exp.company}
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
                <div className={`mb-6 p-4 rounded-2xl bg-gradient-to-br ${exp.color} w-fit`}>
                  <exp.icon className="text-3xl text-white" />
                </div>

                {/* Period badge */}
                <div className="mb-4">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">{exp.period}</span>
                </div>

                {/* Content */}
                <h3 className={`text-2xl font-extrabold mb-2 tracking-tight bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                  {exp.company}
                </h3>
                <h4 className="text-lg font-bold text-slate-900 mb-3">
                  {exp.role}
                </h4>
                <p className="text-slate-600 leading-relaxed mb-4 flex-1">
                  {exp.description}
                </p>

                {/* Achievements */}
                <ul className="space-y-2">
                  {exp.achievements.map((achievement) => (
                    <li key={achievement} className="flex items-center gap-2 text-sm text-slate-700">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color}`} />
                      <span>{achievement}</span>
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

export default AboutExperience;

