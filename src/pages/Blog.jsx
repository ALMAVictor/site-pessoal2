import { useState } from 'react';
import BlogHighlight from '../components/blog/BlogHighlight';
import BlogFilters from '../components/blog/BlogFilters';
import BlogGrid from '../components/blog/BlogGrid';

const Blog = () => {
  const [selected, setSelected] = useState('all');

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100 flex flex-col items-center pt-20 pb-8">
      <BlogHighlight />
      <BlogFilters selected={selected} onChange={setSelected} />
      <BlogGrid selected={selected} />
    </div>
  );
};

export default Blog;
