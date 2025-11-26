/**
 * Blog Data Structure
 * 
 * Para adicionar novos posts:
 * 1. Para artigos: adicione um objeto com type: 'blog'
 * 2. Para YouTube: use a função fetchYouTubeVideos() ou adicione manualmente
 */

// Import YouTube integration (opcional)
// import { fetchYouTubeVideos, formatYouTubeVideosForBlog } from '../utils/youtubeApi';

export const blogItems = [
  {
    type: 'blog',
    title: 'How to Learn Faster in Technology',
    description: 'My exclusive method and real examples for accelerating your learning curve in front-end development and growth engineering.',
    url: '#',
    image: 'https://placehold.co/400x220?text=Blog+Author',
    badge: 'Exclusive',
    date: '2025-10-30',
    slug: 'how-to-learn-faster-in-technology',
    category: 'learning',
    tags: ['learning', 'productivity', 'front-end'],
    readTime: '5 min',
    author: 'Victor Mazoni',
  },
  {
    type: 'youtube',
    title: 'Vlog: My Favorite Dev Setup',
    url: 'https://youtube.com/',
    embedId: 'dQw4w9WgXcQ',
    description: 'Animated tour and tool review of my development environment and workflow.',
    badge: 'YouTube',
    date: '2025-10-15',
  },
  // Adicione novos posts aqui!
];

/**
 * Categorias disponíveis para filtros
 */
export const blogCategories = [
  { id: 'all', label: 'All', count: blogItems.length },
  { id: 'blog', label: 'Articles', count: blogItems.filter(item => item.type === 'blog').length },
  { id: 'youtube', label: 'YouTube', count: blogItems.filter(item => item.type === 'youtube').length },
];

/**
 * Função para buscar posts por categoria/tipo
 */
export const getBlogPostsByType = (type = 'all') => {
  if (type === 'all') return blogItems;
  return blogItems.filter(item => item.type === type);
};

/**
 * Função para buscar post por slug (para páginas individuais)
 */
export const getBlogPostBySlug = (slug) => {
  return blogItems.find(item => item.slug === slug);
};

/**
 * Função para adicionar vídeos do YouTube automaticamente
 * Descomente e use quando configurar a API do YouTube
 */
/*
export const loadYouTubeVideos = async () => {
  try {
    const videos = await fetchYouTubeVideos(10);
    const formattedVideos = formatYouTubeVideosForBlog(videos);
    
    // Adiciona vídeos do YouTube aos blogItems
    return [...blogItems, ...formattedVideos];
  } catch (error) {
    console.error('Erro ao carregar vídeos do YouTube:', error);
    return blogItems;
  }
};
*/

