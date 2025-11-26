import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const blogHighlights = [
  {
    type: 'blog',
    title: 'How to Think Outside the Box in Front-End Development',
    desc: 'Reflection and techniques for real creativity in web projects! Exclusive post.',
    url: '#',
    badge: 'Exclusive',
    image: 'https://placehold.co/600x280?text=Blog+Author',
  },
  {
    type: 'youtube',
    title: 'Review: Modern Frameworks in 5 Minutes',
    desc: 'Quick analysis of trends using React, Vite, and Tailwind live.',
    url: 'https://youtube.com/',
    badge: 'YouTube',
    image: 'https://placehold.co/600x280?text=YouTube+Victor',
  },
];

const highlight = blogHighlights[0];

const colorMap = {
  blog: 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white',
  youtube: 'bg-gradient-to-r from-red-600 to-pink-600 text-white',
  linkedin: 'bg-gradient-to-r from-blue-500 to-blue-700 text-white',
  instagram: 'bg-gradient-to-r from-pink-500 to-purple-600 text-white',
};

const BlogHighlight = () => (
  <motion.div
    className="w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl mb-12 relative group"
    initial={{ opacity: 0, y: 50, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
    whileHover={{ y: -5 }}
  >
    <div className="relative overflow-hidden">
      <motion.img
        src={highlight.image}
        alt={highlight.title}
        className="w-full h-64 object-cover"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5 }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
    </div>
    <div className="p-8 bg-white/95 backdrop-blur-md">
      <motion.span
        className={`inline-block px-4 py-2 rounded-full mb-4 text-xs font-black shadow-lg ${colorMap[highlight.type]}`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
      >
        {highlight.badge}
      </motion.span>
      <h1 className="text-3xl md:text-4xl font-black mb-3 text-slate-900 leading-tight">{highlight.title}</h1>
      <p className="text-slate-600 mb-6 text-lg">{highlight.desc}</p>
      <motion.a
        href={highlight.url}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold hover:shadow-xl transition-all"
        whileHover={{ scale: 1.05, x: 5 }}
        whileTap={{ scale: 0.98 }}
      >
        View Highlight <FaArrowRight size={14} />
      </motion.a>
    </div>
  </motion.div>
);

export default BlogHighlight;
