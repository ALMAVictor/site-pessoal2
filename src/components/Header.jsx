// ============================================
// HEADER.JSX - Navegação Principal
// ============================================
// Header fixo com menu responsivo (mobile/desktop)
// Inclui logo, links de navegação e menu hambúrguer

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

/**
 * Links de navegação
 * special: true aplica estilo especial (gradiente) ao botão
 */
const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services', special: true },
  { label: 'About', href: '/about' },
  { label: 'Skills', href: '/skills' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

/**
 * Componente: Header
 * Navegação fixa no topo da página
 * Menu hambúrguer para mobile, links horizontais para desktop
 */
const Header = () => {
  // Estado: Controla abertura/fechamento do menu mobile
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full py-4 bg-slate-900/95 backdrop-blur-xl shadow-2xl border-b border-blue-500/20 fixed top-0 left-0 z-50">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-slate-900/95 to-indigo-900/20 pointer-events-none" />
      
      <div className="container mx-auto flex justify-between items-center px-6 relative z-10">
        <motion.a
          href="/"
          className="text-2xl font-black bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent drop-shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Victor
        </motion.a>
        {/* Desktop nav */}
        <nav className="space-x-2 hidden md:flex items-center">
          {navLinks.map(link => link.special ? (
            <motion.a
              key={link.href}
              href={link.href}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2.5 rounded-full font-extrabold text-sm shadow-xl hover:shadow-blue-500/50 transition-all relative overflow-hidden group border border-blue-300/50"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 text-white drop-shadow-lg font-extrabold">{link.label}</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ) : (
            <motion.a
              key={link.href}
              href={link.href}
              className="px-5 py-2.5 rounded-full font-semibold text-slate-100 hover:text-white transition-all relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">{link.label}</span>
              <motion.div
                className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.2 }}
              />
            </motion.a>
          ))}
        </nav>
        {/* Mobile button */}
        <motion.button
          onClick={() => setMenuOpen(true)}
          className="md:hidden p-3 rounded-full hover:bg-white/10 transition-colors border border-white/10"
          title="Menu"
          whileTap={{ scale: 0.9 }}
          whileHover={{ borderColor: 'rgba(255,255,255,0.2)' }}
        >
          <FaBars className="text-white" size={20} />
        </motion.button>
      </div>
      {/* Mobile nav overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Dark backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999] md:hidden"
            />
            {/* Menu panel - premium dark design */}
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-80 bg-slate-900/98 backdrop-blur-xl shadow-2xl border-l border-blue-500/20 z-[1000] flex flex-col md:hidden"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-slate-900/98 to-indigo-900/20 pointer-events-none" />
              
              {/* Header with close button */}
              <div className="flex items-center justify-between p-6 border-b border-blue-500/30 relative z-10">
                <h2 className="text-xl font-black bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent drop-shadow-lg">
                  Menu
                </h2>
                <motion.button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors border border-white/10 hover:border-white/20"
                  whileHover={{ rotate: 90, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTimes className="text-white" size={24} />
                </motion.button>
              </div>
              
              {/* Navigation links */}
              <div className="flex-1 overflow-y-auto py-6 px-4 relative z-10">
                <div className="space-y-2">
                  {navLinks.map((link, idx) => link.special ? (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-4 rounded-xl font-extrabold text-base shadow-xl hover:shadow-blue-500/50 transition-all relative overflow-hidden group border border-blue-300/40"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.08, type: 'spring', stiffness: 200 }}
                      whileHover={{ scale: 1.02, x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="relative z-10 text-white drop-shadow-lg font-extrabold">{link.label}</span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 group-hover:opacity-100"
                        transition={{ duration: 0.3 }}
                      />
                    </motion.a>
                  ) : (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block w-full px-6 py-4 rounded-xl font-semibold text-slate-100 hover:text-white transition-all border border-transparent hover:border-white/20 hover:bg-white/10 relative group"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.08, type: 'spring', stiffness: 200 }}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="relative z-10 drop-shadow-sm">{link.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
