import { motion } from 'framer-motion';
import { FaRocket, FaCode, FaChartLine } from 'react-icons/fa';

const ServicesHero = () => {
  return (
    <section className="w-full pt-20 pb-20 md:pb-32 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-950 text-center relative overflow-hidden">
      {/* Static background orbs - optimized */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 mb-6">
            <FaRocket className="text-blue-300" size={16} />
            <span className="text-sm font-semibold text-blue-200">Hybrid Growth Engineering</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white max-w-5xl mx-auto mb-6 leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              End-to-End Digital
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Growth Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-blue-200/90 mb-4 max-w-3xl mx-auto leading-relaxed">
            From <strong className="text-white">Paid Traffic Strategy</strong> and <strong className="text-white">Copywriting</strong> to <strong className="text-white">High-Converting Landing Pages</strong> and <strong className="text-white">CRO Optimization</strong>.
          </p>
          
          <p className="text-base md:text-lg text-blue-300/80 mb-12 max-w-2xl mx-auto">
            I architect complete customer acquisition ecosystems—translating consumer behavioral psychology insights into measurable revenue growth.
          </p>

          {/* Quick stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            {[
              { Icon: FaCode, label: 'Front-End Engineering', value: 'React, Next.js, Tailwind', color: 'from-blue-400 to-cyan-400' },
              { Icon: FaChartLine, label: 'Conversion Rate', value: '+12.5% Average', color: 'from-green-400 to-emerald-400' },
              { Icon: FaRocket, label: 'CPA Reduction', value: '-22% Average', color: 'from-orange-400 to-red-400' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 relative overflow-hidden hover:bg-white/15 transition-colors"
              >
                <div className={`mx-auto mb-3 w-8 h-8 flex items-center justify-center bg-gradient-to-br ${stat.color} rounded-lg`}>
                  <stat.Icon className="text-white" size={20} />
                </div>
                <div className="text-2xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-sm text-blue-200/80">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              href="#contact"
              className="relative inline-flex items-center justify-center gap-2 px-8 py-4 md:px-10 md:py-5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 text-white rounded-full text-base md:text-lg font-bold shadow-2xl shadow-blue-600/40 hover:shadow-blue-600/60 transition-all border border-blue-400/30 hover:border-blue-300/50 overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <span className="relative z-10 text-white drop-shadow-lg">Let's Build Your Growth Engine</span>
            </motion.a>
            <motion.a
              href="/projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 md:px-10 md:py-5 border-2 border-white/30 text-white rounded-full text-base md:text-lg font-semibold hover:bg-white/10 transition-all backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View My Work
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;

