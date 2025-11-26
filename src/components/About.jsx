import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

// About: Authority and positioning section. Two-column layout
// (image + text) improves readability and creates human connection.
const About = () => {
  const ref = useRef(null);
  // Reduced margin for faster trigger on mobile
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Decorative background elements - hidden on mobile for performance */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-indigo-100/30 rounded-full blur-3xl -z-0 hidden md:block" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-100/30 to-pink-100/30 rounded-full blur-3xl -z-0 hidden md:block" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          className="grid md:grid-cols-[1fr_1.5fr] gap-16 items-center"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {/* Column 1: Professional photo with premium styling */}
          <motion.div
            className="flex justify-center md:justify-start"
            variants={{
              hidden: { opacity: 0, x: -40 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { type: 'spring', stiffness: 80, damping: 15 },
              },
            }}
          >
            <div className="relative group">
              <motion.img
                src="/victor1.JPG"
                alt="Victor Mazoni - Professional Photo"
                className="w-56 h-80 md:w-72 md:h-96 rounded-3xl object-cover shadow-2xl border-4 border-white/50"
                loading="lazy"
                decoding="async"
                whileHover={typeof window !== 'undefined' && window.innerWidth > 768 ? { scale: 1.02, rotate: 1 } : {}}
                transition={typeof window !== 'undefined' && window.innerWidth > 768 ? { type: 'spring', stiffness: 200, damping: 15 } : {}}
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-400/20 to-indigo-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>

          {/* Column 2: Text content with premium typography */}
          <motion.div
            className="text-left space-y-6"
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { type: 'spring', stiffness: 100 },
              },
            }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-black mb-6 text-slate-900 leading-tight"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              I Bridge{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Psychology & Code
              </span>
            </motion.h2>

            <motion.p
              className="text-slate-700 text-lg leading-relaxed"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              I'm a <strong>Hybrid Growth Engineer</strong> specialized in architecting customer acquisition ecosystems. My unique role combines deep understanding of Consumer Behavioral Psychology (Cialdini, Fogg, Kahneman), Branding, and Copywriting with the technical execution of Front-End Software Engineering.
            </motion.p>

            <motion.p
              className="text-slate-700 text-lg leading-relaxed"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              I don't just build interfaces. I design and implement the end-to-end customer journey—from Paid Traffic strategy and Copywriting persuasion to coding high-converting landing pages and funnel optimization (CRO). My focus is translating the "why" of human behavior into code, A/B tests, and ultimately, measurable revenue and growth.
            </motion.p>

            <motion.p
              className="text-slate-700 text-lg leading-relaxed"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Currently pursuing Software Engineering at <strong>FIAP</strong> and working as a <strong>Digital Marketing Strategist since 2019</strong>. I've designed and optimized high-performance landing pages for Paid Traffic campaigns (Meta/Google Ads), resulting in <strong>12.5% increase in conversion rate</strong> and <strong>22% reduction in CPA</strong>.
            </motion.p>

            {/* Highlighted punchline */}
            <motion.p
              className="text-xl md:text-2xl font-bold text-slate-900 mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              I translate human behavior insights into measurable revenue growth.
            </motion.p>

            {/* Secondary CTA with premium styling */}
            <motion.a
              href="#projects"
              className="inline-block mt-8 px-8 py-4 border-2 border-slate-900 text-slate-900 rounded-full font-semibold hover:bg-slate-900 hover:text-white transition-all backdrop-blur-sm bg-white/50"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.98 }}
            >
              View My Work →
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
