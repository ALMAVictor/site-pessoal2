# Site Pessoal — Victor Mazoni

Este repositório contém o site pessoal do Victor Mazoni, desenvolvido para posicioná-lo como "o Dev que Entende de Vendas" — um profissional que une excelência técnica (Frontend moderno) à estratégia (conversão, branding e growth). O projeto é componentizado, escalável e preparado como PWA.

## Stack e Arquitetura
- Vite + React 19 (SPA com `react-router-dom`)
- Tailwind CSS v4 (config via `@tailwindcss/vite`)
- Framer Motion (animações suaves e performáticas)
- Vite Plugin PWA (manifest, service worker e auto-update)

Estrutura principal:
- `src/components/` — componentes atômicos por seção (Hero, About, Skills, Projects, Blog, Contact) e pastas específicas (ex.: `sales/`, `blog/`).
- `src/pages/` — páginas de alto nível: `Sales`, `Blog`.
- `src/components/blog/` — blog multimídia com filtros, grid e dados centralizados.
- `vite.config.js` — React, Tailwind (plugin), PWA (manifest básico).

## Filosofia de Design e UX
O site foi guiado por três princípios:
1. Clareza e Hierarquia — A mensagem de valor deve saltar aos olhos (Hero com proposta forte, títulos com peso tipográfico).
2. Conversão — CTA primário consistente em todo o fluxo, seções de vendas com copy persuasiva, página de ofertas específica (Sales).
3. Escalabilidade — Blog multimídia (YouTube/LinkedIn/Instagram/Artigos), dados centralizados, componentes reutilizáveis.

## Paleta e Cores
- Azul de Marca (confiança/profissionalismo): utilizado em títulos, bordas e CTAs secundários outline.
- Âmbar/laranja (energia/ação): destaque em CTAs primários (Hero e Projects), fortalecendo a hierarquia de ação.
- Branco/azul-escuro gradiente no Hero: o fundo serve de palco para o texto, sem roubar foco.
- Neutros (cinzas): para texto de suporte e descrição, mantendo contraste AA.

Racional: O azul ancora a identidade confiável; o âmbar injeta a energia de ação. Essa combinação cria contraste claro entre “descoberta” e “conversão”.

## Tipografia e Hierarquia
- Títulos principais (H1/H2) com pesos fortes e tamanhos grandes.
- Subtítulos e descrições com espaçamento generoso para legibilidade.
- Botões com tipografia em negrito para reforçar ação.

Exemplos:
- Hero: proposta de valor (H2) > nome (H1) para priorizar o benefício ao visitante.
- About: layout 2 colunas, texto à esquerda, punchline destacada.
- Skills: “Dois Pilares” (Arsenal Técnico + Estratégico) com ícones, títulos maiores e cards premium.

## Componentes e Páginas
- `Hero` — Proposta de valor forte, avatar com borda branca, CTAs consistentes (primário sólido âmbar, secundário outline branco), sem elementos distrativos.
- `About` — Layout 2 colunas (imagem + texto), copy premium, botão secundário outline (azul-escuro).
- `Skills` — “Minhas Frentes de Atuação” com dois pilares e ícones SVG personalizados; sem barras/percentuais.
- `Projects` — Cards premium, suporte a vídeo `.mp4` em loop (autoplay/muted) com fallback para imagem, CTAs alinhados à Hero.
- `Sales` — Página de vendas com Hero (botão “em chamas”), pilares (“Feito para Converter”, “7 dias”, “Risco Zero”, “Suporte Humano”), diferenciais, depoimento e CTA (WhatsApp + formulário com feedback). Copy focada em resultado.
- `Blog` — Destaque (highlight), filtros por fonte, grid multimídia com skeletons e empty states, dados centralizados em `blogData.js`.
- `Contact` — “Tire Sua Ideia do Papel.” com SLA explícito (24h), labels claros, placeholder persuasivo, CTA principal azul de marca.

## CTAs e Hierarquia de Ação
- Primário (Conversão): sólido (Hero/Contact/Sales) — clara chamada à ação.
- Secundário (Descoberta): outline (About/Projects) — exploração sem abandonar a hierarquia.

Consistência de estilo reforça aprendizado visual e confiança.

## Animações
- Framer Motion: entradas suaves (fade/slide), microinterações (pulse no WhatsApp), e “fire button” na página de vendas (SVG animado orgânico).
- Restrições: animações leves, sem bloquear leitura; foco em guiar atenção.

## Acessibilidade (a11y)
- `aria-label` em ícones e CTAs relevantes.
- Foco visível (focus ring) em campos/botões.
- Contraste ajustado (texto branco em fundo escuro; azul/âmbar com tons adequados).

## SEO e PWA
- Títulos dinâmicos por rota (Home, Blog, Vendas).
- Metas sociais recomendadas (adicionar em `index.html` público se desejar og/twt.
- PWA com `vite-plugin-pwa` (manifest, ícones `pwa-192/512`).

## Roteamento
- SPA com `react-router-dom`:
  - `/` — Home
  - `/blog` — Blog multimídia
  - `/vendas` — Página de vendas
  - Suporte legado: `/?vendas` redireciona para `/vendas`.

## Blog Multimídia — Como adicionar conteúdo
Editar `src/components/blog/blogData.js` e incluir novo objeto:
```js
{
  type: 'youtube' | 'linkedin' | 'instagram' | 'blog',
  title: 'Título',
  description: 'Resumo do conteúdo',
  url: 'https://…',
  image: 'https://…', // thumbnail (para tudo exceto youtube embed)
  embedId: 'idDoYoutube', // quando type = 'youtube'
  badge: 'YouTube' | 'LinkedIn' | 'Instagram' | 'Exclusivo',
  date: 'YYYY-MM-DD',
}
```
Os filtros usam `type`. Skeleton loading aparece ao trocar filtros.

## Página de Vendas — “Máquina de Vendas”
- Hero com CTA “em chamas” para destaque memorável.
- Pilares (Converter, 7 dias, Risco Zero, Suporte Humano) em cards premium com animação.
- Depoimento e CTA final com WhatsApp + formulário (feedback imediato).

## Como rodar o projeto
```bash
npm install
npm run dev
```
Acesse: `http://localhost:5175`

Build/Preview:
```bash
npm run build
npm run preview
```

## Como personalizar
- Cores de marca: ajustar classes Tailwind nos componentes (ex.: `text-blue-900`, `bg-blue-700`, `bg-amber-400`).
- Imagens/Avatar: trocar URLs nos componentes (`Hero`, `About`, `Projects`).
- Ícones PWA: adicionar `public/pwa-192x192.png` e `public/pwa-512x512.png`.
- Botões: manter padrão — primário sólido (conversão), secundário outline (descoberta).

## Próximas evoluções sugeridas
- Vídeo de fundo na Hero (loop, muted, overlay para contraste).
- Integração dinâmica de feeds (APIs/RSS do YouTube/LinkedIn/Instagram).
- Página de leitura expandida para artigos autorais (modal/rota dedicada).
- Metas Open Graph/Twitter Card + sitemap/robots.
- Deploy com CI/CD e monitoramento (Vercel/Netlify/Cloudflare Pages).

---

Qualquer ajuste fino de marca (paleta, intensidade dos gradientes, ícones custom, assets reais) pode ser aplicado rapidamente. O projeto está pronto para evoluir com conteúdo e campanhas de aquisição.
# site-pessoal2
