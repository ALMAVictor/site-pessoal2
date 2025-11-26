import { useState } from 'react';
import { motion } from 'framer-motion';
import BlogHighlight from '../components/blog/BlogHighlight';
import BlogFilters from '../components/blog/BlogFilters';
import BlogGrid from '../components/blog/BlogGrid';

const Blog = () => {
  const [selected, setSelected] = useState('all');

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-blue-50/30 to-slate-50 flex flex-col items-center pt-24 pb-12 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent)]" />

      <motion.div
        className="w-full max-w-7xl px-6 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-black text-center mb-4 text-slate-900 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Multimedia{' '}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Blog
          </span>
        </motion.h1>
        <BlogHighlight />
        <BlogFilters selected={selected} onChange={setSelected} />
        <BlogGrid selected={selected} />
      </motion.div>
    </div>
  );
};

export default Blog;
