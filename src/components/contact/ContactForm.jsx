import { motion } from 'framer-motion';
import { FaLinkedin, FaArrowRight, FaComment } from 'react-icons/fa';

const ContactForm = () => {
  const linkedinUrl = 'https://www.linkedin.com/in/victor-mazoni-2596171b7/';

  const handleLinkedInClick = () => {
    if (typeof window !== 'undefined') {
      window.open(linkedinUrl, '_blank', 'noopener');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="lg:sticky lg:top-24"
    >
      <div id="contact-form" className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-10 border border-white/50 relative overflow-hidden">
        {/* Premium shine effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-blue-50/0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <div className="text-center mb-8">
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 mb-6 shadow-2xl"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <FaLinkedin className="text-white" size={36} />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-slate-900">
            Ready to Start?
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed max-w-md mx-auto mb-8">
            Connect with me on LinkedIn to discuss your project. I'll respond within 24 hours.
          </p>
        </div>

        {/* Main CTA Button - Large and Prominent */}
        <motion.button
          onClick={handleLinkedInClick}
          className="w-full px-8 py-7 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 text-white rounded-2xl font-black shadow-2xl shadow-blue-600/50 hover:shadow-blue-600/70 transition-all border-2 border-blue-400/40 hover:border-blue-300/60 overflow-hidden group/btn relative mb-8 text-xl"
          whileHover={{ scale: 1.03, y: -4 }}
          whileTap={{ scale: 0.97 }}
        >
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
          <span className="relative z-10 flex items-center justify-center gap-4 text-white drop-shadow-lg">
            <FaLinkedin size={28} />
            <span>Connect on LinkedIn</span>
            <FaArrowRight size={20} />
          </span>
        </motion.button>

        {/* Additional Info */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-blue-500/10 flex-shrink-0">
              <FaComment className="text-blue-600" size={20} />
            </div>
            <div>
              <div className="font-bold text-slate-900 mb-2">Why LinkedIn?</div>
              <ul className="text-slate-600 text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Direct messaging for project discussions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>See my professional background and experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Connect and build a professional relationship</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quick tip */}
        <div className="mt-6 text-center">
          <p className="text-sm text-slate-500">
            I typically respond within <strong className="text-slate-700">24 hours</strong> on LinkedIn
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactForm;
