// ============================================
// CONTACT.JSX - Seção de Contato (Homepage)
// ============================================
// Seção de contato na homepage
// Focada em direcionar para LinkedIn

import { motion } from 'framer-motion';
import { FaLinkedin, FaArrowRight } from 'react-icons/fa';

/**
 * Componente: Contact (Homepage)
 * Seção de contato que direciona para LinkedIn
 * Não utiliza email - apenas LinkedIn
 */
const Contact = () => {
  // URL do perfil do LinkedIn
  const linkedinUrl = 'https://www.linkedin.com/in/victor-mazoni-2596171b7/';

  /**
   * Handler: Clique no botão do LinkedIn
   * Abre o perfil do LinkedIn em nova aba
   */
  const handleLinkedInClick = () => {
    if (typeof window !== 'undefined') {
      window.open(linkedinUrl, '_blank', 'noopener');
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-slate-50 via-blue-50/30 to-slate-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-200/20 to-pink-200/20 rounded-full blur-3xl -z-0" />

      <div className="max-w-2xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-slate-900 text-left">
            Let's Build Your{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Growth Engine.
            </span>
          </h2>
          <p className="mb-10 text-slate-700 font-semibold text-lg text-left leading-relaxed">
            Whether it's high-converting landing pages, a complete customer acquisition ecosystem, or CRO optimization—I deliver end-to-end solutions that translate consumer behavior into measurable revenue.<br/>
            Connect with me on LinkedIn and I'll get back to you within{' '}
            <span className="font-bold text-blue-700">24 hours</span>.
          </p>
          
          {/* LinkedIn CTA Card */}
          <motion.div
            className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-10 border border-white/50 relative overflow-hidden group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-blue-50/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="text-center mb-6 relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 mb-4 shadow-lg">
                <FaLinkedin className="text-white" size={28} />
              </div>
              <h3 className="text-2xl md:text-3xl font-black mb-3 text-slate-900">
                Connect on LinkedIn
              </h3>
              <p className="text-slate-600 leading-relaxed">
                The best way to reach me is through LinkedIn. Click below to visit my profile and send me a message about your project.
              </p>
            </div>

            <motion.button
              onClick={handleLinkedInClick}
              className="w-full px-8 py-5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 text-white rounded-2xl font-bold shadow-xl shadow-blue-600/40 hover:shadow-blue-600/60 transition-all border border-blue-400/30 hover:border-blue-300/50 overflow-hidden group/btn relative"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
              <span className="relative z-10 flex items-center justify-center gap-3 text-white drop-shadow-lg text-lg">
                <FaLinkedin size={24} />
                <span>Open My LinkedIn Profile</span>
                <FaArrowRight size={18} />
              </span>
            </motion.button>

            <div className="mt-6 text-center relative z-10">
              <p className="text-sm text-slate-500">
                I typically respond within <strong className="text-slate-700">24 hours</strong> on LinkedIn
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
