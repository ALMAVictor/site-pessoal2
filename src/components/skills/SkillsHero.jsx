import { motion } from 'framer-motion';
import { FaCode, FaBrain, FaRocket } from 'react-icons/fa';

const SkillsHero = () => {
  return (
    <section className="w-full pt-20 pb-20 md:pb-32 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-950 text-center relative overflow-hidden">
      {/* Static background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 mb-6">
            <FaRocket className="text-blue-300" size={16} />
            <span className="text-sm font-semibold text-blue-200">Two Pillars, One Goal</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-white via-blue-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent drop-shadow-lg">
              My Areas of
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
              Expertise
            </span>
          </h1>

          <p className="text-lg md:text-xl text-blue-200/90 mb-4 max-w-3xl mx-auto leading-relaxed">
            Two pillars that build results:{' '}
            <strong className="text-white">Technical Arsenal</strong> +{' '}
            <strong className="text-white">Strategic Arsenal</strong>
          </p>

          <p className="text-base md:text-lg text-blue-300/80 mb-12 max-w-2xl mx-auto">
            The unique combination of code, psychology, and strategy that delivers measurable growth.
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { Icon: FaCode, label: 'Front-End Engineering', value: 'React, Next.js, TypeScript' },
              { Icon: FaBrain, label: 'Consumer Behavioral Psychology', value: 'Cialdini, Fogg, Kahneman' },
              { Icon: FaRocket, label: 'Growth Strategy', value: 'CRO, Paid Traffic, Analytics' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-colors"
              >
                <div className={`mx-auto mb-3 w-8 h-8 flex items-center justify-center bg-gradient-to-br ${stat.label === 'Front-End Engineering' ? 'from-blue-400 to-cyan-400' : stat.label === 'Consumer Behavioral Psychology' ? 'from-purple-400 to-pink-400' : 'from-orange-400 to-red-400'} rounded-lg`}>
                  <stat.Icon className="text-white" size={20} />
                </div>
                <div className="text-2xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-sm text-blue-200/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsHero;

