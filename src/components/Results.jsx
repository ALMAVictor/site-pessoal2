// ============================================
// RESULTS.JSX - Seção de Resultados (Homepage)
// ============================================
// Exibe métricas e resultados obtidos
// Cards com ícones e gradientes coloridos

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaChartLine, FaArrowDown, FaUsers, FaRocket } from 'react-icons/fa';

/**
 * Array de resultados/métricas
 * Cada resultado contém:
 * - metric: Valor numérico da métrica
 * - label: Título da métrica
 * - desc: Descrição detalhada
 * - Icon: Componente de ícone
 * - color: Gradiente de cores
 */
const results = [
  {
    metric: '12.5%',
    label: 'Increase in Conversion Rate',
    desc: 'Across high-performance landing pages for Paid Traffic campaigns',
    Icon: FaChartLine,
    color: 'from-green-500 to-emerald-600',
  },
  {
    metric: '22%',
    label: 'Reduction in CPA',
    desc: 'Through A/B testing and consumer behavioral psychology optimization',
    Icon: FaArrowDown,
    color: 'from-blue-500 to-indigo-600',
  },
  {
    metric: '2.4%',
    label: 'Uplift in User Activation',
    desc: 'Through UI copywriting and A/B testing strategy',
    Icon: FaUsers,
    color: 'from-purple-500 to-pink-600',
  },
  {
    metric: '4%',
    label: 'Increase in Retention',
    desc: 'By translating user behavior insights into engineering features',
    Icon: FaRocket,
    color: 'from-orange-500 to-red-600',
  },
];

const Results = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 via-blue-900 to-indigo-950 text-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent)]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-3xl -z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-black mb-4 text-center tracking-tight"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Proven Results,{' '}
            <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Measurable Impact
            </span>
          </motion.h2>
          <motion.p
            className="text-center text-blue-200/90 mb-12 text-lg max-w-2xl mx-auto"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Real metrics from real projects. Every number represents a strategic decision backed by consumer behavioral psychology and data-driven optimization.
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((result, idx) => (
              <motion.div
                key={result.label}
                className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all"
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.9 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { type: 'spring', stiffness: 100 },
                  },
                }}
                whileHover={{ y: -8, scale: 1.05 }}
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${result.color} mb-4 shadow-lg`}>
                  <result.Icon className="text-white" size={28} />
                </div>
                <div className="text-5xl md:text-6xl font-black mb-2 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  {result.metric}
                </div>
                <div className="text-white/90 font-bold text-lg mb-2">{result.label}</div>
                <div className="text-blue-200/70 text-sm leading-relaxed">{result.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Results;

