# 📝 Como Adicionar Posts no Blog

## Método 1: Adicionar Manualmente (Mais Simples)

Edite o arquivo `src/data/blogData.js` e adicione um novo objeto:

```javascript
{
  type: 'blog', // ou 'youtube'
  title: 'Título do Seu Post',
  description: 'Descrição curta do post (aparece no card)',
  url: 'https://seu-link.com', // Link para o post completo
  image: '/imagens/seu-post.jpg', // Imagem de capa
  badge: 'Exclusive', // Badge que aparece no card
  date: '2025-11-26', // Data no formato YYYY-MM-DD
  slug: 'titulo-do-seu-post', // URL amigável (opcional, mas recomendado)
  category: 'learning', // Categoria (opcional)
  tags: ['tag1', 'tag2'], // Tags (opcional)
  readTime: '5 min', // Tempo de leitura (opcional)
  author: 'Victor Mazoni', // Autor (opcional)
}
```

### Exemplo Completo:

```javascript
{
  type: 'blog',
  title: 'Como Aplicar Psicologia Comportamental no Front-End',
  description: 'Aprenda como usar princípios de Cialdini, Fogg e Kahneman para criar interfaces que convertem mais.',
  url: '/blog/como-aplicar-psicologia-comportamental',
  image: '/blog/psicologia-frontend.jpg',
  badge: 'Exclusive',
  date: '2025-11-26',
  slug: 'como-aplicar-psicologia-comportamental',
  category: 'psychology',
  tags: ['psychology', 'front-end', 'conversion'],
  readTime: '8 min',
  author: 'Victor Mazoni',
}
```

---

## Método 2: Integração Automática com YouTube

### Passo 1: Obter API Key do YouTube

1. Acesse [Google Cloud Console](https://console.cloud.google.com/)
2. Crie um novo projeto ou selecione um existente
3. Ative a **YouTube Data API v3**
4. Crie uma **API Key**
5. (Opcional) Restrinja a API Key para YouTube Data API apenas

### Passo 2: Configurar Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
VITE_YOUTUBE_API_KEY=sua_chave_aqui
VITE_YOUTUBE_CHANNEL_ID=UC_seu_channel_id_aqui
VITE_YOUTUBE_PLAYLIST_ID=PL_sua_playlist_id_aqui
```

### Passo 3: Usar a Integração

No componente do blog, descomente e use:

```javascript
import { fetchYouTubeVideos, formatYouTubeVideosForBlog } from '../utils/youtubeApi';

// Dentro do componente
useEffect(() => {
  const loadVideos = async () => {
    const videos = await fetchYouTubeVideos(10);
    const formatted = formatYouTubeVideosForBlog(videos);
    // Adicione aos blogItems
  };
  loadVideos();
}, []);
```

---

## Método 3: Usar CMS (Sanity.io - Recomendado)

### Passo 1: Criar Conta no Sanity

1. Acesse [sanity.io](https://www.sanity.io/)
2. Crie uma conta gratuita
3. Crie um novo projeto

### Passo 2: Instalar Sanity CLI

```bash
npm install -g @sanity/cli
sanity init
```

### Passo 3: Configurar Schema

Crie um schema para posts do blog:

```javascript
// schemas/post.js
export default {
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'image',
      title: 'Featured Image',
      type: 'image',
    },
    {
      name: 'date',
      title: 'Published Date',
      type: 'date',
    },
  ],
};
```

### Passo 4: Integrar com React

```bash
npm install @sanity/client
```

```javascript
// src/utils/sanity.js
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'seu-project-id',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
});

export const fetchBlogPosts = async () => {
  const query = `*[_type == "post"] | order(date desc)`;
  return await client.fetch(query);
};
```

---

## 🎨 Onde Colocar as Imagens dos Posts?

Crie uma pasta `public/blog/` e coloque as imagens lá:

```
public/
  blog/
    post-1.jpg
    post-2.jpg
    ...
```

Depois, use no código:

```javascript
image: '/blog/post-1.jpg'
```

---

## 📊 Estrutura Recomendada de um Post

```javascript
{
  // Identificação
  type: 'blog',
  title: 'Título do Post',
  slug: 'titulo-do-post', // URL amigável
  
  // Conteúdo
  description: 'Descrição curta (150-200 caracteres)',
  content: 'Conteúdo completo do post (se tiver página individual)',
  
  // Visual
  image: '/blog/imagem.jpg',
  badge: 'Exclusive',
  
  // Metadados
  date: '2025-11-26',
  category: 'category-name',
  tags: ['tag1', 'tag2'],
  readTime: '5 min',
  author: 'Victor Mazoni',
  
  // Links
  url: '/blog/titulo-do-post', // Link interno
  externalUrl: 'https://...', // Se for link externo
}
```

---

## ✅ Checklist ao Adicionar um Post

- [ ] Título claro e atrativo
- [ ] Descrição curta e interessante (150-200 caracteres)
- [ ] Imagem de capa de boa qualidade (1200x630px recomendado)
- [ ] Data correta (formato YYYY-MM-DD)
- [ ] Slug único e descritivo
- [ ] URL funcionando
- [ ] Categoria e tags relevantes (se aplicável)

---

## 🚀 Próximos Passos

1. **Escolha um método** (Manual, YouTube API, ou CMS)
2. **Adicione seus primeiros posts**
3. **Configure SEO** (já implementado nas funções)
4. **Teste no site**

Precisa de ajuda com algum método específico?

