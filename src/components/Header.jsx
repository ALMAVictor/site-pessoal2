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
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white/95 backdrop-blur-xl z-[1000] flex flex-col items-center justify-center gap-6 md:hidden"
          >
            <motion.button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 p-3 rounded-full hover:bg-slate-100 transition-colors"
              whileHover={{ rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTimes className="text-slate-700" size={24} />
            </motion.button>
            {navLinks.map((link, idx) => link.special ? (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-lg font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-full hover:shadow-xl w-48 text-center transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {link.label}
              </motion.a>
            ) : (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-lg font-semibold py-3 w-48 text-slate-900 text-center hover:text-blue-600 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
