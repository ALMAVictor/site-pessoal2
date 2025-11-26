import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/vendas', special: true },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '#contact' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full py-5 bg-white/70 backdrop-blur-xl shadow-lg border-b border-white/20 fixed top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        <motion.a
          href="/"
          className="text-2xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Victor
        </motion.a>
        {/* Desktop nav */}
        <nav className="space-x-1 hidden md:flex items-center">
          {navLinks.map(link => link.special ? (
            <motion.a
              key={link.href}
              href={link.href}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {link.label}
            </motion.a>
          ) : (
            <motion.a
              key={link.href}
              href={link.href}
              className="px-4 py-2 rounded-full hover:bg-slate-100 font-medium text-slate-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {link.label}
            </motion.a>
          ))}
        </nav>
        {/* Mobile button */}
        <motion.button
          onClick={() => setMenuOpen(true)}
          className="md:hidden p-3 rounded-full hover:bg-slate-100 transition-colors"
          title="Menu"
          whileTap={{ scale: 0.9 }}
        >
          <FaBars className="text-slate-700" size={20} />
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
            {/* Menu panel */}
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-[1000] flex flex-col md:hidden"
            >
              {/* Header with close button */}
              <div className="flex items-center justify-between p-6 border-b border-slate-200">
                <h2 className="text-xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Menu
                </h2>
                <motion.button
                  onClick={() => setMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-slate-100 transition-colors"
                  whileHover={{ rotate: 90, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTimes className="text-slate-700" size={24} />
                </motion.button>
              </div>
              
              {/* Navigation links */}
              <div className="flex-1 overflow-y-auto py-6 px-4">
                <div className="space-y-2">
                  {navLinks.map((link, idx) => link.special ? (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-4 rounded-xl font-bold text-base shadow-lg hover:shadow-xl transition-all"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.08, type: 'spring', stiffness: 200 }}
                      whileHover={{ scale: 1.02, x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {link.label}
                    </motion.a>
                  ) : (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block w-full px-6 py-4 rounded-xl font-semibold text-slate-700 hover:bg-slate-100 hover:text-blue-600 transition-all border border-transparent hover:border-slate-200"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.08, type: 'spring', stiffness: 200 }}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {link.label}
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
