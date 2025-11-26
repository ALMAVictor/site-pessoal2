import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaInstagram, FaMapMarkerAlt, FaClock, FaArrowRight } from 'react-icons/fa';

const ContactInfo = () => {
  const linkedinUrl = 'https://www.linkedin.com/in/victor-mazoni-2596171b7/';

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-3xl md:text-4xl font-black mb-4 text-slate-900">
          Get in Touch
        </h2>
        <p className="text-slate-600 text-lg leading-relaxed">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. The best way to reach me is through <strong className="text-slate-900">LinkedIn</strong>.
        </p>
      </div>

      {/* LinkedIn - Main CTA */}
      <motion.a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group block p-6 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl shadow-2xl border-4 border-blue-400/30 hover:border-blue-300/50 transition-all hover:scale-[1.02] relative overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        whileHover={{ y: -4 }}
      >
        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
        
        <div className="relative z-10 flex items-center gap-4">
          <div className="p-4 rounded-2xl bg-white/20 backdrop-blur-sm group-hover:scale-110 transition-transform">
            <FaLinkedin className="text-white" size={32} />
          </div>
          <div className="flex-1">
            <div className="text-sm text-blue-200 font-semibold mb-1">Primary Contact Method</div>
            <div className="text-2xl font-black text-white mb-1">Connect on LinkedIn</div>
            <div className="text-blue-100 text-sm">Send me a message about your project</div>
          </div>
          <FaArrowRight className="text-white group-hover:translate-x-2 transition-transform" size={20} />
        </div>
      </motion.a>

      {/* Additional Info */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
        <div className="flex items-start gap-4 mb-4">
          <div className="p-2 rounded-lg bg-blue-500/10">
            <FaMapMarkerAlt className="text-blue-600" size={20} />
          </div>
          <div>
            <div className="font-bold text-slate-900 mb-1">Location</div>
            <div className="text-slate-600">Brazil • Available Worldwide</div>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="p-2 rounded-lg bg-blue-500/10">
            <FaClock className="text-blue-600" size={20} />
          </div>
          <div>
            <div className="font-bold text-slate-900 mb-1">Response Time</div>
            <div className="text-slate-600">Within 24 hours on LinkedIn</div>
          </div>
        </div>
      </div>

      {/* Other Social Links - Secondary */}
      <div>
        <div className="text-sm font-semibold text-slate-700 mb-3">Also Available On</div>
        <div className="flex gap-3">
          {[
            { Icon: FaLinkedin, href: linkedinUrl, label: 'LinkedIn', primary: true },
            { Icon: FaGithub, href: 'https://github.com/ALMAVictor', label: 'GitHub', primary: false },
            { Icon: FaInstagram, href: '#', label: 'Instagram', primary: false },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-xl shadow-md border transition-all ${
                social.primary
                  ? 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white border-blue-400/30 hover:shadow-xl'
                  : 'bg-white text-slate-700 border-slate-200 hover:shadow-lg'
              }`}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label={social.label}
            >
              <social.Icon size={20} />
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
