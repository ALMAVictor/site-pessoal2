import { motion } from 'framer-motion';

const filterOptions = [
  { label: 'Todos', value: 'all' },
  { label: 'Artigos', value: 'blog' },
  { label: 'LinkedIn', value: 'linkedin' },
  { label: 'YouTube', value: 'youtube' },
  { label: 'Instagram', value: 'instagram' },
];

const BlogFilters = ({ selected = 'all', onChange }) => (
  <motion.div
    className="mb-8 flex flex-wrap justify-center gap-3"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.15 }}
  >
    {filterOptions.map(opt => (
      <button
        key={opt.value}
        onClick={() => onChange && onChange(opt.value)}
        className={
          (selected === opt.value
            ? 'bg-blue-700 text-white'
            : 'bg-blue-100 text-blue-700 hover:bg-blue-700 hover:text-white') +
          ' px-5 py-2 rounded-full font-semibold shadow transition focus:outline-none focus:ring'
        }
      >
        {opt.label}
      </button>
    ))}
  </motion.div>
);

export default BlogFilters;
