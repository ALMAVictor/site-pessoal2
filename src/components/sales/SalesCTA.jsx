import { motion } from 'framer-motion';
import { FaLinkedin, FaArrowRight } from 'react-icons/fa';

const SalesCTA = () => {
  const linkedinUrl = 'https://www.linkedin.com/in/victor-mazoni-2596171b7/';

  const handleLinkedInClick = () => {
    if (typeof window !== 'undefined') {
      window.open(linkedinUrl, '_blank', 'noopener');
    }
  };

  return (
    <section id="sales-cta" className="py-16 px-4 bg-blue-700 text-white text-center">
      <h2 className="text-3xl font-bold mb-2">Pronto para vender mais com seu novo site?</h2>
      <p className="mb-8 text-lg">Conecte-se comigo no LinkedIn para discutir seu projeto.</p>
      
      <div className="flex justify-center">
        <motion.button
          onClick={handleLinkedInClick}
          className="px-10 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full text-lg font-bold shadow-xl hover:shadow-2xl transition-all border-2 border-blue-400/50 hover:border-blue-300/70 overflow-hidden group/btn relative"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
          <span className="relative z-10 flex items-center gap-3 text-white drop-shadow-lg">
            <FaLinkedin size={20} />
            <span>Conectar no LinkedIn</span>
            <FaArrowRight size={16} />
          </span>
        </motion.button>
      </div>
      
      <p className="text-blue-100 text-sm mt-8">Entrarei em contato em até 1 dia útil. Atendimento humanizado, direto comigo ;)</p>
    </section>
  )
}

export default SalesCTA;
