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
  <section className="w-full py-20 px-4 bg-gradient-to-br from-blue-200 to-blue-50 text-center shadow-md">
    <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 max-w-3xl mx-auto mb-5">
    Seu Site, Uma Máquina de Vendas.
    </h1>
    <p className="text-xl text-blue-800 mb-8 max-w-2xl mx-auto">
    Enquanto seus concorrentes dormem, seu novo site está fechando novos clientes.
    </p>
    <div className="flex justify-center">
      <motion.a
        href="#sales-cta"
        className="relative w-fit px-14 py-6 font-black text-xl bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 shadow-2xl text-white rounded-full overflow-hidden focus:outline-none focus:ring-4 focus:ring-yellow-200 hover:brightness-110 group"
        whileHover={{ scale: 1.08, rotate: '-2deg' }}
        whileTap={{ scale: 0.98, rotate: '2deg' }}
        style={{ boxShadow: '0 0 48px 10px #fd7a1b55, 0 0 16px 0 #ffdb6e' }}
        aria-label="Quero vender mais! (Botão em chamas)"
      >
        <span className="relative z-10 drop-shadow-lg text-yellow-100">🔥 Quero vender mais! 🔥</span>
        {/* Chamas animadas acima do botão */}
        <span className="pointer-events-none absolute inset-0 z-0">
          <FireSVG />
        </span>
      </motion.a>
    </div>
  </section>
);

export default SalesHero;
