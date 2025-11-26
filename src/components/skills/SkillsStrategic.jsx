import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBrain, FaChartLine, FaBullhorn, FaCheckCircle } from 'react-icons/fa';

const CheckIcon = () => (
  <FaCheckCircle className="text-indigo-600 shrink-0 mt-1" size={18} />
);

const strategicCategories = [
  {
    title: 'Consumer Behavioral Psychology & CRO',
    icon: FaBrain,
    color: 'from-indigo-600 to-purple-600',
    skills: [
      { tech: 'Consumer Behavioral Psychology', desc: 'Application of Cialdini, Fogg, and Kahneman principles to influence consumer behavior.' },
      { tech: 'Growth Hacking & CRO', desc: 'Rapid experimentation, A/B/multivariate testing, and conversion funnel optimization.' },
      { tech: 'Sales Funnel Design', desc: 'End-to-end customer journeys that transform visitors into customers.' },
      { tech: 'Copywriting', desc: 'Persuasive texts (UI, landing pages, ads) that drive action and conversion.' },
    ],
  },
  {
    title: 'Positioning & Brand Strategy',
    icon: FaChartLine,
    color: 'from-purple-600 to-pink-600',
    skills: [
      { tech: 'Brand Strategy', desc: 'Positioning, verbal identity, and brand architecture for authentic identities.' },
      { tech: 'Branding', desc: 'Creation of brand narratives that resonate with target audiences.' },
      { tech: 'Content Marketing', desc: 'Continuous authority building and engagement strategies.' },
    ],
  },
  {
    title: 'Paid Traffic & Data Analysis',
    icon: FaBullhorn,
    color: 'from-pink-600 to-red-600',
    skills: [
      { tech: 'Paid Traffic (Multiplatform)', desc: 'Campaign management and optimization on Google Ads, Meta Ads, LinkedIn Ads focused on ROAS.' },
      { tech: 'Data Analysis', desc: 'Proficiency in Google Analytics, Mixpanel, Hotjar, and funnel analysis tools.' },
      { tech: 'SEO', desc: 'Organic positioning strategies for qualified traffic generation.' },
      { tech: 'Analytics & ROI', desc: 'Data-driven decisions, funnel analysis, and conversion bottleneck identification.' },
    ],
  },
];

const SkillsStrategic = () => {
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
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Strategic Arsenal
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Psychology, strategy, and data-driven approaches that drive conversion and growth.
            </p>
          </motion.div>

          {/* Categories Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {strategicCategories.map((category, catIdx) => (
              <motion.div
                key={category.title}
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
                <div className={`mb-6 p-4 rounded-2xl bg-gradient-to-br ${category.color} w-fit`}>
                  <category.icon className="text-3xl text-white" />
                </div>

                {/* Title */}
                <h3 className={`text-2xl font-extrabold mb-6 tracking-tight bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>

                {/* Skills List */}
                <ul className="space-y-3 flex-1">
                  {category.skills.map((skill, idx) => (
                    <motion.li
                      key={skill.tech}
                      className="flex gap-3 text-slate-700"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: catIdx * 0.1 + idx * 0.05, duration: 0.3 }}
                    >
                      <CheckIcon />
                      <span>
                        <strong className="text-slate-900">{skill.tech}:</strong> {skill.desc}
                      </span>
                    </motion.li>
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

export default SkillsStrategic;

