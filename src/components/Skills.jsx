import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const CheckIcon = () => (
  <FaCheckCircle className="text-blue-600 shrink-0 mt-1" size={18} />
);

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-slate-50 via-blue-50/50 to-slate-50 relative overflow-hidden">
      {/* Decorative background - reduced blur for mobile */}
      <div className="absolute top-1/2 left-0 w-64 md:w-96 h-64 md:h-96 bg-gradient-to-r from-blue-200/15 md:from-blue-200/20 to-indigo-200/15 md:to-indigo-200/20 rounded-full blur-2xl md:blur-3xl -z-0" />
      <div className="absolute bottom-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-gradient-to-l from-purple-200/15 md:from-purple-200/20 to-pink-200/15 md:to-pink-200/20 rounded-full blur-2xl md:blur-3xl -z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            visible: { transition: { staggerChildren: 0.05 } }, // Reduced for faster animation
          }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-black mb-4 text-slate-900 text-center tracking-tight"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            My Areas of Expertise
          </motion.h2>
          <motion.p
            className="text-center text-slate-700 mb-16 font-semibold text-lg md:text-xl"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Two pillars that build results:{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-bold">
              Technical Arsenal
            </span>{' '}
            +{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-bold">
              Strategic Arsenal
            </span>
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Pillar 1: Technical Arsenal */}
            <motion.div
              className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-8 md:p-10 border border-white/50 hover:shadow-2xl transition-all"
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { type: 'spring', stiffness: 100 },
                },
              }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 leading-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Technical Arsenal
              </h3>

              <div className="mb-8">
                <h4 className="text-xl font-bold text-slate-800 mb-4">Core Front‑End</h4>
                <ul className="space-y-3">
                  {[
                    { tech: 'HTML5', desc: 'Semantic and accessible structure for the modern web.' },
                    { tech: 'React.js', desc: 'Reactive, fast, and scalable interfaces for high-performance applications.' },
                    { tech: 'Next.js', desc: 'Full-stack React framework for production-ready applications and landing pages.' },
                    { tech: 'React Native', desc: 'Cross-platform mobile apps with native performance.' },
                    { tech: 'JavaScript (ES6+)', desc: 'The language that powers the modern web.' },
                    { tech: 'TypeScript', desc: 'Safe, readable, and robust code for complex projects.' },
                  ].map((item, idx) => (
                    <motion.li
                      key={item.tech}
                      className="flex gap-3 text-slate-700"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                    >
                      <CheckIcon />
                      <span>
                        <strong className="text-slate-900">{item.tech}:</strong> {item.desc}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-bold text-slate-800 mb-4">UI & Styling</h4>
                <ul className="space-y-3">
                  {[
                    { tech: 'Tailwind CSS', desc: 'Agile, responsive, and 100% customized design.' },
                    { tech: 'Styled-Components', desc: 'CSS-in-JS for component-scoped styling and theming.' },
                    { tech: 'CSS3 / SASS', desc: 'Advanced style architecture for scalable products.' },
                    { tech: 'Figma', desc: 'Design system translation from UI/UX directly to code.' },
                  ].map((item, idx) => (
                    <motion.li
                      key={item.tech}
                      className="flex gap-3 text-slate-700"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.8 + idx * 0.1 }}
                    >
                      <CheckIcon />
                      <span>
                        <strong className="text-slate-900">{item.tech}:</strong> {item.desc}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold text-slate-800 mb-4">Ecosystem & Tools</h4>
                <ul className="space-y-3">
                  {[
                    { tech: 'Vite', desc: 'Lightning-fast build tool for agile development.' },
                    { tech: 'Git / GitHub', desc: 'Reliable version control and collaborative workflows.' },
                    { tech: 'Vercel', desc: 'Deployment platform for modern web applications with CI/CD.' },
                    { tech: 'A/B Testing Tools', desc: 'VWO, Google Optimize for conversion rate optimization.' },
                    { tech: 'Web Performance', desc: 'Core Web Vitals optimization and responsive design principles.' },
                    { tech: 'Agile Methodologies', desc: 'Iterative development and rapid experimentation cycles.' },
                    { tech: 'Node.js (Beginner)', desc: 'Development environments and support APIs.' },
                  ].map((item, idx) => (
                    <motion.li
                      key={item.tech}
                      className="flex gap-3 text-slate-700"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 1.1 + idx * 0.1 }}
                    >
                      <CheckIcon />
                      <span>
                        <strong className="text-slate-900">{item.tech}:</strong> {item.desc}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Pillar 2: Strategic Arsenal */}
            <motion.div
              className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-8 md:p-10 border border-white/50 hover:shadow-2xl transition-all"
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { type: 'spring', stiffness: 100 },
                },
              }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 leading-tight bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Strategic Arsenal
              </h3>

              <div className="mb-8">
                <h4 className="text-xl font-bold text-slate-800 mb-4">Behavioral Psychology & CRO</h4>
                <ul className="space-y-3">
                  {[
                    { tech: 'Behavioral Psychology', desc: 'Application of Cialdini, Fogg, and Kahneman principles to influence user behavior.' },
                    { tech: 'Growth Hacking & CRO', desc: 'Rapid experimentation, A/B/multivariate testing, and conversion funnel optimization.' },
                    { tech: 'Sales Funnel Design', desc: 'End-to-end customer journeys that transform visitors into customers.' },
                    { tech: 'Copywriting', desc: 'Persuasive texts (UI, landing pages, ads) that drive action and conversion.' },
                  ].map((item, idx) => (
                    <motion.li
                      key={item.tech}
                      className="flex gap-3 text-slate-700"
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                    >
                      <CheckIcon />
                      <span>
                        <strong className="text-slate-900">{item.tech}:</strong> {item.desc}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-bold text-slate-800 mb-4">Positioning & Brand Strategy</h4>
                <ul className="space-y-3">
                  {[
                    { tech: 'Brand Strategy', desc: 'Positioning, verbal identity, and brand architecture for authentic identities.' },
                    { tech: 'Branding', desc: 'Creation of brand narratives that resonate with target audiences.' },
                    { tech: 'Content Marketing', desc: 'Continuous authority building and engagement strategies.' },
                  ].map((item, idx) => (
                    <motion.li
                      key={item.tech}
                      className="flex gap-3 text-slate-700"
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + idx * 0.1 }}
                    >
                      <CheckIcon />
                      <span>
                        <strong className="text-slate-900">{item.tech}:</strong> {item.desc}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold text-slate-800 mb-4">Paid Traffic & Data Analysis</h4>
                <ul className="space-y-3">
                  {[
                    { tech: 'Paid Traffic (Multiplatform)', desc: 'Campaign management and optimization on Google Ads, Meta Ads, LinkedIn Ads focused on ROAS.' },
                    { tech: 'Data Analysis', desc: 'Proficiency in Google Analytics, Mixpanel, Hotjar, and funnel analysis tools.' },
                    { tech: 'SEO', desc: 'Organic positioning strategies for qualified traffic generation.' },
                    { tech: 'Analytics & ROI', desc: 'Data-driven decisions, funnel analysis, and conversion bottleneck identification.' },
                  ].map((item, idx) => (
                    <motion.li
                      key={item.tech}
                      className="flex gap-3 text-slate-700"
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.7 + idx * 0.1 }}
                    >
                      <CheckIcon />
                      <span>
                        <strong className="text-slate-900">{item.tech}:</strong> {item.desc}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
