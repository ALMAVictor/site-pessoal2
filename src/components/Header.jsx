import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Início', href: '/' },
  { label: 'Vendas', href: '/?vendas', special: true },
  { label: 'Sobre', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Blog', href: '/blog' }, // <-- atualização
  { label: 'Contato', href: '#contact' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full py-5 bg-white/80 shadow-md backdrop-blur fixed top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-2xl font-bold text-blue-700">Victor</div>
        {/* Desktop nav */}
        <nav className="space-x-3 hidden md:block">
          {navLinks.map(link => link.special ? (
            <a key={link.href} href={link.href} className="bg-blue-100 border border-blue-700 px-2 py-1 rounded font-bold text-blue-700 hover:bg-blue-700 hover:text-white transition">{link.label}</a>
          ) : (
            <a key={link.href} href={link.href} className="hover:text-blue-700 font-semibold transition-colors">{link.label}</a>
          ))}
        </nav>
        {/* Mobile button */}
        <button onClick={() => setMenuOpen(true)} className="md:hidden p-2 rounded hover:bg-gray-200" title="Menu mobile">
          <span className="block w-6 h-1 bg-blue-800 my-1"></span>
          <span className="block w-6 h-1 bg-blue-800 my-1"></span>
          <span className="block w-6 h-1 bg-blue-800 my-1"></span>
        </button>
      </div>
      {/* Mobile nav overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white/95 z-[1000] flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 p-3"><span className="text-3xl">×</span></button>
            {navLinks.map(link => link.special ? (
              <a key={link.href} href={link.href} onClick={()=>setMenuOpen(false)} className="text-lg font-bold border-blue-700 bg-blue-100 border px-6 py-3 rounded text-blue-700 hover:bg-blue-700 hover:text-white w-48 text-center transition">{link.label}</a>
            ) : (
              <a key={link.href} href={link.href} onClick={()=>setMenuOpen(false)} className="text-lg font-semibold py-2 w-48 text-blue-900 text-center hover:text-blue-700 transition">{link.label}</a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
