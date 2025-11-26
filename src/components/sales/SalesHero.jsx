import { motion } from 'framer-motion';

function FireSVG() {
  return (
    <svg className="absolute inset-0 h-full w-full pointer-events-none" viewBox="0 0 150 50" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="fire1" x1="0" y1="0" x2="0" y2="50" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff200"/>
          <stop offset="0.4" stopColor="#ffaa00"/>
          <stop offset="1" stopColor="#fd430d"/>
        </linearGradient>
        <filter id="blur1" x="-20" y="-20" width="200" height="90" filterUnits="userSpaceOnUse">
          <feGaussianBlur stdDeviation="7"/>
        </filter>
      </defs>
      {/* onda 1 */}
      <motion.path
        d="M 30 46 Q 45 15 55 45 Q 70 5 84 45 Q 93 15 120 44"
        fill="transparent"
        stroke="url(#fire1)"
        strokeWidth="10"
        filter="url(#blur1)"
        initial={{ pathLength: 0.5, opacity: 0.7 }}
        animate={{ pathLength: [0.5, 1, 0.6], opacity: [0.7, 1, 0.8], y: [0, -4, 0] }}
        transition={{ duration: 0.9, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
      />
      {/* onda 2 (mais clara) */}
      <motion.path
        d="M 20 45 Q 40 20 58 45 Q 65 20 105 44"
        fill="transparent"
        stroke="#fff8a5"
        strokeWidth="5"
        filter="url(#blur1)"
        initial={{ pathLength: 0.3, opacity: 0.5 }}
        animate={{ pathLength: [0.3, 0.8, 0.4], opacity: [0.5, 0.95, 0.3], y: [0, -7, 0] }}
        transition={{ duration: 1.1, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut', delay: 0.15 }}
      />
      {/* onda 3 (vermelha sobreposta e rápida) */}
      <motion.path
        d="M 25 46 Q 50 30 85 45 Q 109 20 125 46"
        fill="transparent"
        stroke="#fd430d"
        strokeWidth="4"
        filter="url(#blur1)"
        initial={{ pathLength: 0.1, opacity: 0.8 }}
        animate={{ pathLength: [0.1, 0.5, 0.1], opacity: [0.8, 1, 0.8], y: [0, -9, 0] }}
        transition={{ duration: 0.7, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut', delay: 0.23 }}
      />
    </svg>
  );
}

const SalesHero = () => (
  <section className="w-full py-24 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-950 text-center relative overflow-hidden">
    {/* Animated background orbs */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>

    <motion.div
      className="relative z-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-5xl md:text-7xl font-black text-white max-w-4xl mx-auto mb-6 leading-tight">
        Landing Pages That{' '}
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-orange-600 bg-clip-text text-transparent">
          Convert Like Crazy.
        </span>
      </h1>
      <p className="text-xl md:text-2xl text-blue-200 mb-8 max-w-3xl mx-auto leading-relaxed">
        I design and code high-performance landing pages for Paid Traffic campaigns (Meta/Google Ads) using consumer behavioral psychology principles. Proven results: <strong className="text-white">12.5% increase in conversion rate</strong> and <strong className="text-white">22% reduction in CPA</strong>.
      </p>
      <p className="text-lg text-blue-300/90 mb-12 max-w-3xl mx-auto">
        While your competitors sleep, your new landing page is closing deals.
      </p>
      <div className="flex justify-center">
        <motion.a
          href="#contact"
          className="relative w-fit px-16 py-7 font-black text-xl bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 shadow-2xl text-white rounded-full overflow-hidden focus:outline-none focus:ring-4 focus:ring-yellow-200 hover:brightness-110 group"
          whileHover={{ scale: 1.08, rotate: '-2deg' }}
          whileTap={{ scale: 0.98, rotate: '2deg' }}
          style={{ boxShadow: '0 0 48px 10px #fd7a1b55, 0 0 16px 0 #ffdb6e' }}
          aria-label="I want to sell more! (Fire button)"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
        >
          <span className="relative z-10 drop-shadow-lg text-yellow-100">🔥 I Want to Sell More! 🔥</span>
          {/* Animated flames above button */}
          <span className="pointer-events-none absolute inset-0 z-0">
            <FireSVG />
          </span>
        </motion.a>
      </div>
    </motion.div>
  </section>
);

export default SalesHero;
