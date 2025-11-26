import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { blogItems } from '../../data/blogData';

const colorMap = {
  blog: 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white',
  youtube: 'bg-gradient-to-r from-red-600 to-pink-600 text-white',
};

const SKELETONS = Array(3).fill();

const SkeletonCard = () => (
  <div className="rounded-xl shadow bg-gray-200 animate-pulse h-64 flex flex-col p-4">
    <div className="w-24 h-5 bg-gray-300 rounded mb-2"></div>
    <div className="h-32 w-full bg-gray-300 rounded mb-3"></div>
    <div className="h-3 w-3/4 bg-gray-300 rounded mb-2"></div>
    <div className="h-3 w-1/2 bg-gray-300 rounded mb-1"></div>
    <div className="mt-auto flex items-end justify-between">
      <div className="h-3 w-10 bg-gray-300 rounded"/>
      <div className="h-6 w-20 bg-gray-300 rounded"/>
    </div>
  </div>
);

const BlogGrid = ({ selected = 'all' }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const id = setTimeout(()=>setLoading(false), 1200);
    return () => clearTimeout(id);
  }, [selected]);

  const filtered = selected === 'all' ? blogItems : blogItems.filter(i => i.type === selected);

  if (loading) {
    return (
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-5xl w-full">
        {SKELETONS.map((_, i) => <SkeletonCard key={i} />)}
      </div>
    );
  }
  if (!filtered.length) {
    return (
      <motion.div
        className="w-full max-w-2xl py-16 text-center text-slate-600 font-bold text-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        No content found for this filter.<br />🚧 Coming soon! 🚧
      </motion.div>
    );
  }
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full">
      <AnimatePresence>
        {filtered.map((item, idx) => (
          <motion.div
            key={item.url}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ delay: idx * 0.05, duration: 0.4, ease: 'easeOut' }}
            whileHover={typeof window !== 'undefined' && window.innerWidth > 768 ? { y: -8, scale: 1.02 } : {}}
            className="group bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden flex flex-col border border-white/50 hover:shadow-2xl transition-all relative"
          >
            {/* Premium shine effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-blue-50/0 group-hover:from-white/20 group-hover:via-transparent group-hover:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" />
            
            {/* Badge/label */}
            <div className="p-4 pb-0 relative z-10">
              <span className={`inline-block px-3 py-1.5 rounded-full text-xs font-black shadow-lg ${colorMap[item.type]}`}>
                {item.badge}
              </span>
            </div>
            
            {/* Thumb ou embed */}
            <div className="relative overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
              {item.type === 'youtube' ? (
                <iframe
                  className="w-full h-48 border-0"
                  src={`https://www.youtube.com/embed/${item.embedId}`}
                  title={item.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              ) : (
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            <div className="p-6 flex-1 flex flex-col relative z-10">
              <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-3 leading-tight bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                {item.title}
              </h3>
              <p className="text-slate-600 text-sm md:text-base flex-1 leading-relaxed mb-4">
                {item.description}
              </p>
              <div className="flex items-end justify-between mt-auto pt-4 border-t border-slate-200/60">
                <span className="text-xs text-slate-400 font-medium">{item.date}</span>
                <motion.a
                  href={item.url}
                  target="_blank"
                  rel="noopener"
                  className={
                    (item.type === 'blog'
                      ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 text-white shadow-lg shadow-blue-600/40 '
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 ') +
                    'rounded-full px-4 py-2 text-xs font-bold transition-all flex items-center gap-1 border border-slate-200/50'
                  }
                  whileHover={{ scale: 1.05, x: 3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View More →
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default BlogGrid;
