import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const SalesTestimonial = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="bg-gradient-to-b from-white to-slate-50 py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent)]" />

      <motion.div
        ref={ref}
        className="max-w-4xl mx-auto text-center relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-10 md:p-12 border border-white/50">
          <FaQuoteLeft className="text-blue-400 mx-auto mb-6" size={32} />
          <blockquote className="text-2xl md:text-3xl text-slate-900 font-medium mb-8 leading-relaxed">
            "My sales increased dramatically after we launched the new landing page. Victor delivers fast and with quality! Highly recommend."
          </blockquote>
          <div className="flex flex-col items-center">
            <span className="text-slate-900 font-bold text-lg block mb-1">Maria S., Entrepreneur</span>
            <span className="text-slate-500 text-sm">First client, 2025</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SalesTestimonial;
