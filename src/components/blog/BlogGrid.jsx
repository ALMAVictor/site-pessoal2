import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { blogItems } from './blogData';

const colorMap = {
  blog: 'bg-blue-900 text-white',
  youtube: 'bg-red-600 text-white',
  linkedin: 'bg-blue-600 text-white',
  instagram: 'bg-pink-600 text-white',
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
    return <div className="w-full max-w-2xl py-16 text-center text-blue-600 font-bold text-xl">Nenhum conteúdo encontrado para esse filtro.<br/>🚧 Novidades em breve! 🚧</div>;
  }
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-5xl w-full">
      <AnimatePresence>
        {filtered.map((item, idx) => (
          <motion.div
            key={item.url}
            initial={{ opacity: 0, y: 27 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 27 }}
            transition={{ delay: 0.05 * idx }}
            className="rounded-xl shadow bg-white overflow-hidden flex flex-col hover:scale-[1.03] hover:shadow-xl transition"
          >
            {/* Badge/label */}
            <span className={"inline-block px-3 py-1 m-3 rounded-full text-xs font-black " + colorMap[item.type]}>{item.badge}</span>
            {/* Thumb ou embed */}
            {item.type === 'youtube' ? (
              <iframe
                className="w-full h-40 border-0"
                src={`https://www.youtube.com/embed/${item.embedId}`}
                title={item.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
            )}
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="text-lg font-bold text-blue-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm flex-1">{item.description}</p>
              <div className="flex items-end justify-between mt-4">
                <span className="text-xs text-gray-400">{item.date}</span>
                <a href={item.url} target="_blank" rel="noopener" className={
                  (item.type === 'blog' ? 'bg-blue-700 ' : 'bg-blue-200 ') + 'rounded px-3 py-1 text-xs font-bold text-blue-900 hover:bg-blue-900 hover:text-white transition'}
                >Ver mais</a>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default BlogGrid;
