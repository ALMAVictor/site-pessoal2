import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { blogItems } from '../../data/blogData';

// Pega o primeiro post do tipo 'blog' como destaque
const highlight = blogItems.find(item => item.type === 'blog') || blogItems[0];

const colorMap = {
  blog: 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white',
  youtube: 'bg-gradient-to-r from-red-600 to-pink-600 text-white',
};

const BlogHighlight = () => (
  <motion.div
    className="w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl mb-16 relative group"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    whileHover={typeof window !== 'undefined' && window.innerWidth > 768 ? { y: -8, scale: 1.01 } : {}}
  >
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
      <motion.img
        src={highlight.image}
        alt={highlight.title}
        className="w-full h-64 md:h-80 object-cover"
        whileHover={typeof window !== 'undefined' && window.innerWidth > 768 ? { scale: 1.1 } : {}}
        transition={{ duration: 0.5 }}
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
    <div className="p-8 md:p-10 bg-white/95 md:bg-white/90 md:backdrop-blur-xl relative overflow-hidden">
      {/* Premium shine effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-blue-50/0 group-hover:from-white/20 group-hover:via-transparent group-hover:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <motion.span
        className={`inline-block px-4 py-2 rounded-full mb-4 text-xs font-black shadow-lg ${colorMap[highlight.type]}`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
      >
        {highlight.badge}
      </motion.span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 text-slate-900 leading-tight bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
        {highlight.title}
      </h2>
      <p className="text-slate-600 mb-6 text-lg md:text-xl leading-relaxed">{highlight.description}</p>
      <motion.a
        href={highlight.url}
        className="relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 text-white font-bold shadow-xl shadow-blue-600/40 hover:shadow-blue-600/60 transition-all border border-blue-400/30 hover:border-blue-300/50 overflow-hidden group/btn"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
        <span className="relative z-10 flex items-center gap-2 text-white drop-shadow-lg">
          View Highlight <FaArrowRight size={14} />
        </span>
      </motion.a>
    </div>
  </motion.div>
);

export default BlogHighlight;
