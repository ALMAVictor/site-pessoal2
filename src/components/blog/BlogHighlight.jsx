import { motion } from 'framer-motion';

const blogHighlights = [
  {
    type: 'blog',
    title: 'Como pensar fora da caixa no desenvolvimento front-end',
    desc: 'Reflexão e técnicas para criatividade real em projetos web! Post exclusivo.',
    url: '#',
    badge: 'Exclusivo',
    image: 'https://placehold.co/600x280?text=Blog+Autor',
  },
  {
    type: 'youtube',
    title: 'Review: Frameworks modernos em 5 minutos',
    desc: 'Análise veloz de tendências usando React, Vite e Tailwind ao vivo.',
    url: 'https://youtube.com/',
    badge: 'YouTube',
    image: 'https://placehold.co/600x280?text=YouTube+Victor',
  },
];

const highlight = blogHighlights[0];

const colorMap = {
  blog: 'bg-blue-900 text-white',
  youtube: 'bg-red-600 text-white',
  linkedin: 'bg-blue-600 text-white',
  instagram: 'bg-pink-500 text-white',
};

const BlogHighlight = () => (
  <motion.div
    className="w-full max-w-3xl rounded-xl overflow-hidden shadow-lg mb-8 relative"
    initial={{ opacity: 0, y: 45 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
  >
    <img src={highlight.image} alt={highlight.title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <span className={"inline-block px-3 py-1 rounded-full mb-3 text-xs font-black " + (colorMap[highlight.type])}>{highlight.badge}</span>
      <h1 className="text-2xl font-bold mb-2 text-blue-900">{highlight.title}</h1>
      <p className="text-gray-600 mb-5">{highlight.desc}</p>
      <a href={highlight.url} className="px-6 py-2 rounded bg-blue-700 text-white font-bold hover:bg-blue-900 transition">Ver destaque</a>
    </div>
  </motion.div>
);

export default BlogHighlight;
