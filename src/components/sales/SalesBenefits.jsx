import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaLightbulb, FaRocket, FaCheckCircle, FaHandshake, FaBolt, FaPalette, FaMobileAlt, FaLink } from 'react-icons/fa';

const pillars = [
  {
    title: 'Behavioral Psychology Applied',
    desc: "Every element uses principles from Cialdini, Fogg, and Kahneman. Social proof, scarcity, and persuasion triggers strategically placed to maximize conversion.",
    Icon: FaLightbulb,
  },
  {
    title: 'A/B Testing & CRO Built-In',
    desc: 'I implement A/B/multivariate testing from day one. Your landing page evolves based on data, not guesswork. Proven: 2.4% uplift in activation rates.',
    Icon: FaRocket,
  },
  {
    title: 'Optimized for Paid Traffic',
    desc: 'Built specifically for Meta Ads, Google Ads, and LinkedIn Ads. Fast loading, Core Web Vitals optimized, and conversion-focused design.',
    Icon: FaCheckCircle,
  },
  {
    title: 'End-to-End Growth Stack',
    desc: 'I set up Analytics, Pixels, Hotjar, and funnel tracking. You get complete visibility into your customer journey and conversion bottlenecks.',
    Icon: FaHandshake,
  },
];

const secondary = [
  {
    title: 'Core Web Vitals Optimized',
    desc: 'Lightning-fast loading. Core Web Vitals optimized for better ad performance and lower CPA.',
    Icon: FaBolt,
  },
  {
    title: 'Brand-Consistent Design',
    desc: 'Visual identity aligned with your brand. Component Library approach ensures consistency across all touchpoints.',
    Icon: FaPalette,
  },
  {
    title: 'Mobile-First Responsive',
    desc: 'Perfect on any device. Most paid traffic converts on mobile—I optimize for that first.',
    Icon: FaMobileAlt,
  },
  {
    title: 'Full Analytics Integration',
    desc: 'Google Analytics, Mixpanel, Hotjar, and conversion pixels pre-configured. Track everything from click to conversion.',
    Icon: FaLink,
  },
];

const SalesBenefits = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="bg-gradient-to-b from-white via-slate-50 to-white py-20 px-4 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-orange-100/30 to-red-100/30 rounded-full blur-3xl -z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-black text-slate-900 text-center mb-4"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            🚀 Landing Pages{' '}
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Built for Paid Traffic
            </span>
          </motion.h2>
          <motion.p
            className="max-w-3xl mx-auto text-center text-lg text-slate-700 mb-12 font-semibold"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            I combine <strong>Behavioral Psychology</strong> (Cialdini, Fogg, Kahneman), <strong>A/B Testing</strong>, and <strong>Next.js/React</strong> to create landing pages that convert. Here are the <span className="underline decoration-2">4 pillars</span> that make the difference.
          </motion.p>
          <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-4 mb-16">
            {pillars.map((item) => (
              <motion.div
                key={item.title}
                className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-8 text-center border border-white/50 hover:shadow-2xl transition-all flex flex-col items-center"
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.9 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { type: 'spring', stiffness: 100 },
                  },
                }}
                whileHover={{ y: -8, scale: 1.05 }}
              >
                <div className="mb-4 p-4 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100">
                  <item.Icon className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="max-w-4xl mx-auto"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
            }}
          >
            <motion.h4
              className="text-xl text-slate-900 font-bold mb-6 text-center"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              And of course, every solution includes:
            </motion.h4>
            <ul className="grid sm:grid-cols-2 gap-5">
              {secondary.map((item) => (
                <motion.li
                  key={item.title}
                  className="flex items-start gap-4 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-white/50 hover:shadow-xl transition-all"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { type: 'spring', stiffness: 100 },
                    },
                  }}
                  whileHover={{ x: 5 }}
                >
                  <div className="p-2 rounded-lg bg-gradient-to-br from-blue-100 to-indigo-100 mt-1">
                    <item.Icon className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block mb-1">{item.title}</span>
                    <span className="block text-slate-600 text-sm">{item.desc}</span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SalesBenefits;

