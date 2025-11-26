import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaRocket, FaSync, FaShieldAlt, FaCode } from 'react-icons/fa';

const items = [
  {
    title: 'Fast Delivery',
    desc: 'Landing pages optimized and live in up to 7 days, ready for Paid Traffic campaigns.',
    Icon: FaRocket,
  },
  {
    title: 'Component Library Approach',
    desc: 'React/TypeScript component library ensures brand consistency and faster iterations.',
    Icon: FaSync,
  },
  {
    title: 'Data-Driven Optimization',
    desc: 'Continuous A/B testing and funnel analysis to identify and fix conversion bottlenecks.',
    Icon: FaShieldAlt,
  },
  {
    title: 'Modern Tech Stack',
    desc: 'Next.js, React, TypeScript, and Core Web Vitals optimization for maximum performance.',
    Icon: FaCode,
  },
];

const SalesDifferentials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="bg-gradient-to-br from-slate-50 via-blue-50/50 to-slate-50 py-20 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-indigo-100/30 to-purple-100/30 rounded-full blur-3xl -z-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-black text-slate-900 text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Key Differentiators
        </motion.h2>
        <motion.div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6 text-center border border-white/50 hover:shadow-xl transition-all"
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.9 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { type: 'spring', stiffness: 100 },
                },
              }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="mb-4 flex justify-center">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100">
                  <item.Icon className="text-blue-600" size={24} />
                </div>
              </div>
              <h3 className="font-bold text-slate-900 mb-2 text-lg">{item.title}</h3>
              <p className="text-slate-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SalesDifferentials;
