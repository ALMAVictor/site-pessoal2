// ============================================
// FOOTER.JSX - Rodapé do Site
// ============================================
// Rodapé com branding, navegação rápida, links sociais e copyright
// Presente em todas as páginas através do Layout

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

/**
 * Componente: Footer
 * Rodapé fixo com informações e links
 * Grid responsivo: 1 coluna mobile, 2 tablet, 4 desktop
 */
const Footer = () => (
  <footer className="mt-auto bg-gradient-to-b from-slate-900 via-blue-900 to-slate-950 text-white/90 relative overflow-hidden">
    {/* Decorative background */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent)]" />

    <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 relative z-10">
      {/* Branding */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-3xl font-black tracking-tight bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-3">
          Victor
        </div>
        <p className="text-white/70 leading-relaxed">
          Hybrid Growth Engineer combining Consumer Behavioral Psychology, Branding, and Copywriting with Front-End Engineering. I architect customer acquisition ecosystems that translate consumer behavior into measurable revenue growth.
        </p>
      </motion.div>

      {/* Quick Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="font-bold text-white mb-4">Navigation</div>
        <ul className="space-y-3 text-white/80">
          {[
            { label: 'About', href: '#about' },
            { label: 'Expertise', href: '#skills' },
            { label: 'Projects', href: '#projects' },
            { label: 'Blog', href: '/blog' },
            { label: 'Services', href: '/vendas' },
          ].map(link => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-white transition-colors flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Contact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="font-bold text-white mb-4">Contact</div>
        <ul className="space-y-3 text-white/80">
          <li>
            <a
              href="https://www.linkedin.com/in/victor-mazoni-2596171b7/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-2 group"
            >
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <FaLinkedin className="text-blue-400" size={16} />
              Connect on LinkedIn →
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-white transition-colors flex items-center gap-2 group">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              Start Project →
            </a>
          </li>
        </ul>
      </motion.div>

      {/* Social */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="font-bold text-white mb-4">Connect</div>
        <div className="flex items-center gap-4">
          {[
            { Icon: FaLinkedin, href: 'https://www.linkedin.com/in/victor-mazoni-2596171b7/', label: 'LinkedIn', color: 'text-blue-400' },
            { Icon: FaGithub, href: 'https://github.com/ALMAVictor', label: 'GitHub', color: 'text-slate-300' },
            { Icon: FaInstagram, href: '#', label: 'Instagram', color: 'text-pink-400' },
          ].map(({ Icon, href, label, color }) => (
            <motion.a
              key={label}
              href={href}
              aria-label={label}
              className={`p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 ${color} hover:bg-white/10 hover:border-white/20 transition-all`}
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto px-6 py-6 text-center text-white/50 text-sm">
        &copy; {new Date().getFullYear()} Victor Mazoni · All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
