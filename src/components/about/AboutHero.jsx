import { motion } from 'framer-motion';
import { FaRocket, FaCode, FaBrain } from 'react-icons/fa';

const AboutHero = () => {
  return (
    <section className="w-full pt-20 pb-20 md:pb-32 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-950 text-center relative overflow-hidden">
      {/* Static background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Photo */}
          <motion.div
            className="flex justify-center md:justify-start"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative group">
              <motion.img
                src="/victor4.jpeg"
                alt="Victor Mazoni - Professional Photo"
                className="w-64 h-96 md:w-80 md:h-[500px] rounded-3xl object-cover shadow-2xl border-4 border-white/20"
                loading="lazy"
                decoding="async"
                whileHover={typeof window !== 'undefined' && window.innerWidth > 768 ? { scale: 1.02 } : {}}
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-400/20 to-indigo-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            className="text-left space-y-6"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 mb-4">
              <FaRocket className="text-blue-300" size={16} />
              <span className="text-sm font-semibold text-blue-200">Hybrid Growth Engineer</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight">
              I Bridge{' '}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Psychology & Code
              </span>
            </h1>

            <p className="text-lg md:text-xl text-blue-200/90 leading-relaxed">
              I'm a <strong className="text-white">Hybrid Growth Engineer</strong> specialized in architecting customer acquisition ecosystems. My unique role combines deep understanding of Consumer Behavioral Psychology (Cialdini, Fogg, Kahneman), Branding, and Copywriting with the technical execution of Front-End Software Engineering.
            </p>

            <p className="text-base md:text-lg text-blue-300/80 leading-relaxed">
              I translate human behavior insights into code, A/B tests, and ultimately, measurable revenue growth.
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { Icon: FaBrain, label: 'Psychology', value: 'Cialdini, Fogg, Kahneman' },
                { Icon: FaCode, label: 'Engineering', value: 'React, Next.js' },
                { Icon: FaRocket, label: 'Results', value: '+12.5% CVR' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center"
                >
                  <stat.Icon className="text-blue-300 mx-auto mb-2" size={24} />
                  <div className="text-xs text-blue-200/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;

