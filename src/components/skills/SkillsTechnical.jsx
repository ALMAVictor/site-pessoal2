import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCode, FaPalette, FaTools, FaCheckCircle } from 'react-icons/fa';

const CheckIcon = () => (
  <FaCheckCircle className="text-blue-600 shrink-0 mt-1" size={18} />
);

const technicalCategories = [
  {
    title: 'Core Front‑End',
    icon: FaCode,
    color: 'from-blue-600 to-indigo-600',
    skills: [
      { tech: 'HTML5', desc: 'Semantic and accessible structure for the modern web.' },
      { tech: 'React.js', desc: 'Reactive, fast, and scalable interfaces for high-performance applications.' },
      { tech: 'Next.js', desc: 'Full-stack React framework for production-ready applications and landing pages.' },
      { tech: 'React Native', desc: 'Cross-platform mobile apps with native performance.' },
      { tech: 'JavaScript (ES6+)', desc: 'The language that powers the modern web.' },
      { tech: 'TypeScript', desc: 'Safe, readable, and robust code for complex projects.' },
    ],
  },
  {
    title: 'UI & Styling',
    icon: FaPalette,
    color: 'from-indigo-600 to-purple-600',
    skills: [
      { tech: 'Tailwind CSS', desc: 'Agile, responsive, and 100% customized design.' },
      { tech: 'Styled-Components', desc: 'CSS-in-JS for component-scoped styling and theming.' },
      { tech: 'CSS3 / SASS', desc: 'Advanced style architecture for scalable products.' },
      { tech: 'Figma', desc: 'Design system translation from UI/UX directly to code.' },
    ],
  },
  {
    title: 'Ecosystem & Tools',
    icon: FaTools,
    color: 'from-purple-600 to-pink-600',
    skills: [
      { tech: 'Vite', desc: 'Lightning-fast build tool for agile development.' },
      { tech: 'Git / GitHub', desc: 'Reliable version control and collaborative workflows.' },
      { tech: 'Vercel', desc: 'Deployment platform for modern web applications with CI/CD.' },
      { tech: 'A/B Testing Tools', desc: 'VWO, Google Optimize for conversion rate optimization.' },
      { tech: 'Web Performance', desc: 'Core Web Vitals optimization and responsive design principles.' },
      { tech: 'Agile Methodologies', desc: 'Iterative development and rapid experimentation cycles.' },
      { tech: 'Node.js (Beginner)', desc: 'Development environments and support APIs.' },
    ],
  },
];

const SkillsTechnical = () => {
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
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
                Technical Arsenal
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Modern front-end technologies and tools that power high-performance applications and landing pages.
            </p>
          </motion.div>

          {/* Categories Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {technicalCategories.map((category, catIdx) => (
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

export default SkillsTechnical;

