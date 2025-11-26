import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCode, FaChartBar, FaPalette, FaRocket } from 'react-icons/fa';

const toolCategories = [
  {
    title: 'Development',
    icon: FaCode,
    color: 'from-blue-600 to-indigo-600',
    tools: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'Vercel', 'Git/GitHub'],
  },
  {
    title: 'Analytics & Testing',
    icon: FaChartBar,
    color: 'from-indigo-600 to-purple-600',
    tools: ['Google Analytics', 'Mixpanel', 'Hotjar', 'VWO', 'Google Optimize', 'A/B Testing'],
  },
  {
    title: 'Design & Prototyping',
    icon: FaPalette,
    color: 'from-purple-600 to-pink-600',
    tools: ['Figma', 'Styled-Components', 'CSS3/SASS', 'Design Systems'],
  },
  {
    title: 'Marketing & Growth',
    icon: FaRocket,
    color: 'from-pink-600 to-red-600',
    tools: ['Google Ads', 'Meta Ads', 'LinkedIn Ads', 'SEO Tools', 'Conversion Tracking'],
  },
];

const SkillsTools = () => {
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
              Tools &{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Technologies
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              The complete stack I use to build, optimize, and scale customer acquisition ecosystems.
            </p>
          </motion.div>

          {/* Tools Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {toolCategories.map((category) => (
              <motion.div
                key={category.title}
                className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/50 hover:shadow-2xl transition-shadow"
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.9 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.4, ease: 'easeOut' },
                  },
                }}
              >
                {/* Icon */}
                <div className={`mb-4 p-3 rounded-xl bg-gradient-to-br ${category.color} w-fit`}>
                  <category.icon className="text-2xl text-white" />
                </div>

                {/* Title */}
                <h3 className={`text-lg font-extrabold mb-4 tracking-tight bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>

                {/* Tools List */}
                <ul className="space-y-2">
                  {category.tools.map((tool) => (
                    <li key={tool} className="text-sm text-slate-700 flex items-center gap-2">
                      <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${category.color}`} />
                      <span>{tool}</span>
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

export default SkillsTools;

