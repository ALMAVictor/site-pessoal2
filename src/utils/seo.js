/**
 * SEO Utilities
 * Funções para otimização de SEO
 */

/**
 * Gera meta tags para uma página
 * @param {Object} seoData - Dados de SEO
 * @param {string} seoData.title - Título da página
 * @param {string} seoData.description - Descrição da página
 * @param {string} seoData.image - URL da imagem (og:image)
 * @param {string} seoData.url - URL canônica
 * @param {string} seoData.type - Tipo de conteúdo (article, website, etc.)
 */
export const setSEOMetaTags = (seoData) => {
  const {
    title = 'Victor Mazoni | Hybrid Growth Engineer',
    description = 'Hybrid Growth Engineer combining Consumer Behavioral Psychology, Branding, and Copywriting with Front-End Engineering.',
    image = '/og-image.jpg',
    url = window.location.href,
    type = 'website',
  } = seoData;

  // Título da página
  document.title = title;

  // Meta tags básicas
  setMetaTag('description', description);
  setMetaTag('keywords', 'growth engineering, consumer behavioral psychology, front-end development, CRO, landing pages');

  // Open Graph (Facebook, LinkedIn)
  setMetaTag('og:title', title, 'property');
  setMetaTag('og:description', description, 'property');
  setMetaTag('og:image', image, 'property');
  setMetaTag('og:url', url, 'property');
  setMetaTag('og:type', type, 'property');

  // Twitter Card
  setMetaTag('twitter:card', 'summary_large_image');
  setMetaTag('twitter:title', title);
  setMetaTag('twitter:description', description);
  setMetaTag('twitter:image', image);

  // Canonical URL
  setCanonicalUrl(url);
};

/**
 * Define uma meta tag
 */
const setMetaTag = (name, content, attribute = 'name') => {
  let tag = document.querySelector(`meta[${attribute}="${name}"]`);
  
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, name);
    document.head.appendChild(tag);
  }
  
  tag.setAttribute('content', content);
};

/**
 * Define a URL canônica
 */
const setCanonicalUrl = (url) => {
  let canonical = document.querySelector('link[rel="canonical"]');
  
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  
  canonical.setAttribute('href', url);
};

/**
 * Gera dados estruturados (Schema.org) para um artigo de blog
 */
export const generateArticleSchema = (article) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      '@type': 'Person',
      name: 'Victor Mazoni',
      url: 'https://victormazoni.com',
    },
    publisher: {
      '@type': 'Person',
      name: 'Victor Mazoni',
    },
  };
};

/**
 * Adiciona schema markup ao head
 */
export const addSchemaMarkup = (schema) => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
};

