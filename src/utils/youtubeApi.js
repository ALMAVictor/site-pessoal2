/**
 * YouTube API Integration
 * 
 * Para usar:
 * 1. Obtenha uma API Key do Google Cloud Console
 * 2. Crie um arquivo .env.local com: VITE_YOUTUBE_API_KEY=sua_chave_aqui
 * 3. Configure a variável YOUTUBE_CHANNEL_ID com o ID do seu canal
 */

const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const YOUTUBE_CHANNEL_ID = import.meta.env.VITE_YOUTUBE_CHANNEL_ID || 'UC_SEU_CHANNEL_ID_AQUI';
const YOUTUBE_PLAYLIST_ID = import.meta.env.VITE_YOUTUBE_PLAYLIST_ID || null; // Opcional: playlist específica

/**
 * Busca vídeos do canal do YouTube
 * @param {number} maxResults - Número máximo de vídeos (padrão: 10)
 * @returns {Promise<Array>} Array de objetos com dados dos vídeos
 */
export const fetchYouTubeVideos = async (maxResults = 10) => {
  if (!YOUTUBE_API_KEY) {
    console.warn('YouTube API Key não configurada. Usando dados mockados.');
    return getMockYouTubeVideos();
  }

  try {
    // Se tiver playlist ID, busca da playlist, senão busca do canal
    const endpoint = YOUTUBE_PLAYLIST_ID
      ? `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${YOUTUBE_PLAYLIST_ID}&maxResults=${maxResults}&key=${YOUTUBE_API_KEY}`
      : `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${YOUTUBE_CHANNEL_ID}&type=video&order=date&maxResults=${maxResults}&key=${YOUTUBE_API_KEY}`;

    const response = await fetch(endpoint);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || 'Erro ao buscar vídeos do YouTube');
    }

    const videos = YOUTUBE_PLAYLIST_ID
      ? data.items.map(item => ({
          id: item.snippet.resourceId.videoId,
          title: item.snippet.title,
          description: item.snippet.description,
          thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.default.url,
          publishedAt: item.snippet.publishedAt,
          channelTitle: item.snippet.channelTitle,
        }))
      : data.items.map(item => ({
          id: item.id.videoId,
          title: item.snippet.title,
          description: item.snippet.description,
          thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.default.url,
          publishedAt: item.snippet.publishedAt,
          channelTitle: item.snippet.channelTitle,
        }));

    return videos;
  } catch (error) {
    console.error('Erro ao buscar vídeos do YouTube:', error);
    return getMockYouTubeVideos();
  }
};

/**
 * Converte vídeos do YouTube para formato do blog
 * @param {Array} videos - Array de vídeos do YouTube
 * @returns {Array} Array formatado para blogItems
 */
export const formatYouTubeVideosForBlog = (videos) => {
  return videos.map(video => ({
    type: 'youtube',
    title: video.title,
    description: video.description?.substring(0, 150) + '...' || 'Assista ao vídeo completo no YouTube.',
    url: `https://www.youtube.com/watch?v=${video.id}`,
    image: video.thumbnail,
    embedId: video.id,
    badge: 'YouTube',
    date: new Date(video.publishedAt).toISOString().split('T')[0],
    channelTitle: video.channelTitle,
  }));
};

/**
 * Dados mockados para desenvolvimento (quando não há API Key)
 */
const getMockYouTubeVideos = () => {
  return [
    {
      id: 'dQw4w9WgXcQ',
      title: 'Exemplo: Vídeo do Canal',
      description: 'Descrição do vídeo do seu canal do YouTube.',
      thumbnail: 'https://placehold.co/400x220?text=YouTube+Video',
      publishedAt: new Date().toISOString(),
      channelTitle: 'Victor Mazoni',
    },
  ];
};

/**
 * Extrai ID do vídeo de uma URL do YouTube
 * @param {string} url - URL do YouTube
 * @returns {string|null} ID do vídeo ou null
 */
export const extractYouTubeId = (url) => {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /youtube\.com\/watch\?.*v=([^&\n?#]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }

  return null;
};

