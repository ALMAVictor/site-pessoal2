import { motion } from 'framer-motion';

const filterOptions = [
  { label: 'All', value: 'all' },
  { label: 'Articles', value: 'blog' },
  { label: 'YouTube', value: 'youtube' },
];

const BlogFilters = ({ selected = 'all', onChange }) => (
  <motion.div
    className="mb-12 md:mb-16 flex flex-wrap justify-center gap-3"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
  >
    {filterOptions.map((opt, idx) => (
      <motion.button
        key={opt.value}
        onClick={() => onChange && onChange(opt.value)}
        className={
          (selected === opt.value
            ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 text-white shadow-xl shadow-blue-600/40 border border-blue-400/30'
            : 'bg-white/90 backdrop-blur-sm border border-slate-200/80 text-slate-700 hover:bg-slate-50 hover:border-slate-300') +
          ' px-6 py-3 rounded-full font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-blue-400'
        }
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: idx * 0.05, duration: 0.3 }}
      >
        {opt.label}
      </motion.button>
    ))}
  </motion.div>
);

export default BlogFilters;
