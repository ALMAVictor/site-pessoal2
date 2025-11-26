import BlogHero from '../components/blog/BlogHero';
import BlogHighlight from '../components/blog/BlogHighlight';
import BlogFilters from '../components/blog/BlogFilters';
import BlogGrid from '../components/blog/BlogGrid';
import { useState } from 'react';

const Blog = () => {
  const [selected, setSelected] = useState('all');

  return (
    <div className="min-h-screen">
      <BlogHero />
      <div className="py-12 md:py-20 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100/30 to-indigo-100/30 rounded-full blur-3xl -z-0 hidden md:block" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-100/30 to-pink-100/30 rounded-full blur-3xl -z-0 hidden md:block" />

        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <BlogHighlight />
          <BlogFilters selected={selected} onChange={setSelected} />
          <BlogGrid selected={selected} />
        </div>
      </div>
    </div>
  );
};

export default Blog;
