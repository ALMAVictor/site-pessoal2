import { motion } from 'framer-motion';
import { FaRocket, FaArrowRight } from 'react-icons/fa';

const ContactCTA = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-950 relative overflow-hidden">
      {/* Static background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 mb-6">
            <FaRocket className="text-blue-300" size={16} />
            <span className="text-sm font-semibold text-blue-200">Ready to Start?</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-300 to-indigo-300 bg-clip-text text-transparent drop-shadow-lg">
              Let's Transform Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
              Customer Acquisition
            </span>
          </h2>

          <p className="text-lg md:text-xl text-blue-200/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Every great project starts with a conversation. Whether you're looking to optimize conversions, build a growth engine, or create high-performing landing pages—I'm here to help.
          </p>

          <motion.a
            href="https://www.linkedin.com/in/victor-mazoni-2596171b7/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 text-white rounded-full font-bold shadow-xl shadow-blue-600/40 hover:shadow-blue-600/60 transition-all border border-blue-400/30 hover:border-blue-300/50 overflow-hidden group/btn relative"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
            <span className="relative z-10 flex items-center gap-2 text-white drop-shadow-lg">
              Connect on LinkedIn <FaArrowRight size={16} />
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;

