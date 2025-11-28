# Design Notes & Memory

Este arquivo documenta todas as decisões de design, padrões estabelecidos e mudanças implementadas no site.

---

## 🎨 Branding Premium - Azul/Roxo

### Paleta de Cores Principal
- **Azul**: `blue-300` a `blue-600` (gradientes)
- **Indigo**: `indigo-300` a `indigo-600` (gradientes)
- **Roxo**: `purple-300` a `purple-600` (gradientes)
- **Fundo Escuro**: `slate-900/95` com `backdrop-blur-xl`
- **Gradiente Overlay**: `from-blue-900/20 via-slate-900/95 to-indigo-900/20`

### Padrão de Backgrounds
- **Seções escuras**: `bg-slate-900/95 backdrop-blur-xl` com gradiente overlay
- **Orbs decorativos**: `from-blue-500/20 via-indigo-500/15 to-purple-500/10` com `blur-3xl`
- **Grid pattern**: `rgba(99,102,241,0.05)` com opacidade 30-60%

---

## 📱 Seção Featured Projects

### Background
- **Fundo**: `bg-slate-900/95 backdrop-blur-xl`
- **Overlay**: `from-blue-900/20 via-slate-900/95 to-indigo-900/20`
- **Orbs**: Azul/indigo/roxo com blur-3xl

### Títulos
- **"Featured"**: Gradiente `from-white via-blue-100 to-white` com `drop-shadow-lg`
- **"Projects"**: Gradiente `from-blue-500 via-indigo-500 to-purple-500` com `drop-shadow-lg`
- **Descrição**: `text-slate-300`

### Cards dos Projetos
- **Fundo**: `bg-slate-800/90 md:bg-slate-800/95`
- **Bordas**:
  - Normal: `border-2 border-slate-700/80 md:border-blue-400/50`
  - Hover: `hover:border-blue-300/80`
- **Border Glow**: `from-blue-400/30 via-indigo-400/30 to-purple-400/30` no hover
- **Border Ring**: `from-blue-300/50 via-indigo-300/50 to-purple-300/50` com `blur-md` no hover
- **Sombra Hover**: `rgba(59,130,246,0.5)`

### Conteúdo dos Cards
- **Título**: `text-white` com `drop-shadow-lg`
- **Descrição**: `text-slate-300`
- **Tech Badges**: 
  - Fundo: `from-blue-900/40 via-indigo-900/40 to-purple-900/40`
  - Borda: `border-blue-400/30`
  - Texto: `text-slate-200`
- **Result Badge**: `from-green-900/40` com `border-green-500/30`
- **View Details**: Gradiente `from-blue-400 via-indigo-400 to-purple-400`
- **Market Badge**: `bg-slate-700/80` com `border-blue-400/30`

---

## 🎯 Carrossel Mobile (Featured Projects)

### Indicador de Swipe
- **Ícones**: `FaChevronLeft` e `FaChevronRight` em círculos
- **Círculos**: `bg-gradient-to-br from-blue-500/20 to-indigo-500/20` com `border-blue-400/30`
- **Texto**: "Swipe" em `text-slate-300`

### Dots Indicadores
- **Ativo**: 
  - Gradiente `from-blue-500 via-indigo-500 to-purple-500`
  - Glow effect com `blur-sm opacity-60`
  - Sombra: `shadow-blue-500/50`
  - Tamanho: `w-8 h-2.5`
- **Inativo**: 
  - `bg-slate-400/60` com `border-slate-300/40`
  - Hover: `bg-slate-300/80` com `scale-110`

---

## 🎨 Padrões de Design Premium

### Efeitos de Hover
- **Scale**: `scale-1.05` ou `scale-1.01`
- **Y Movement**: `y: -4` para cards
- **Transitions**: `duration-500` para efeitos suaves
- **Shine Effects**: Gradientes com `opacity-0` → `opacity-100` no hover

### Bordas Premium
- **Espessura**: `border-2` para elementos importantes
- **Cores**: Gradientes azul/indigo/roxo
- **Glow**: Blur effects com cores saturadas
- **Hover**: Aumento de opacidade e saturação

### Textos com Gradiente
- **Títulos principais**: `bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text`
- **Títulos secundários**: `from-white via-blue-100 to-white`
- **Links**: Gradientes azul/indigo/roxo com hover mais claro

---

## 📝 Mudanças Recentes

### 2024 - Featured Projects Section
- ✅ Background escuro aplicado (slate-900/95)
- ✅ Bordas com alta saturação e contraste
- ✅ Border glow e ring effects no hover
- ✅ Cards com fundo slate-800
- ✅ Textos ajustados para contraste (branco/slate-100)
- ✅ Tech badges com gradientes azul/roxo
- ✅ Carrossel mobile com indicadores premium
- ✅ Dots com gradiente azul/indigo/roxo

---

## 🔧 Padrões Técnicos

### Animações
- **Framer Motion**: Usado para animações suaves
- **Mobile**: Animações simplificadas para performance
- **Desktop**: Animações completas com spring physics
- **Transitions**: `ease-out` ou `spring` para naturalidade

### Performance
- **Lazy Loading**: Imagens com `loading="lazy"` e `decoding="async"`
- **Backdrop Blur**: Usado com moderação
- **Blur Effects**: `blur-xl`, `blur-3xl` para orbs
- **Will-change**: Aplicado apenas quando necessário

---

## 🎯 Decisões de Design Importantes

1. **Fundo Escuro**: Todas as seções principais usam `slate-900/95` com backdrop-blur
2. **Gradientes Azul/Roxo**: Padrão consistente em todos os elementos premium
3. **Bordas Saturadas**: Bordas com alta opacidade e saturação para destaque
4. **Contraste Alto**: Textos brancos/slate-100 para legibilidade
5. **Efeitos Hover**: Glow, ring e shine effects para interatividade premium

---

## 📌 Notas para Futuro

- Manter consistência do branding azul/roxo
- Sempre usar `border-2` para elementos importantes
- Gradientes sempre com azul → indigo → roxo
- Textos claros (branco/slate-100) em fundos escuros
- Efeitos de hover sempre com transições suaves (duration-500)

---

## 📄 Página Projects (ProjectsPage)

### Background
- **Fundo**: `bg-slate-900/95 backdrop-blur-xl`
- **Overlay**: `from-blue-900/20 via-slate-900/95 to-indigo-900/20`
- **Orbs**: Mesmos padrões da seção Featured Projects

### Títulos
- **"Featured"**: Gradiente `from-white via-blue-100 to-white` com `drop-shadow-lg`
- **"Projects"**: Gradiente `from-blue-300 via-indigo-300 to-purple-300` com `drop-shadow-lg`
- **Descrição**: `text-slate-300`

### Filtros
- **Categoria Ativa**: `bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600` com `border-2 border-blue-400/50`
- **Categoria Inativa**: `bg-slate-800/80` com `border-2 border-slate-700/60`
- **Market Ativo**: `bg-gradient-to-r from-green-500 via-emerald-500 to-green-600` com `border-2 border-green-400/50`
- **Market Inativo**: `bg-slate-800/80` com `border-2 border-slate-700/60`

### Cards dos Projetos
- **Fundo**: `bg-slate-800/90 md:bg-slate-800/95`
- **Bordas**: `border-2 border-slate-700/80 md:border-blue-400/50` com hover `hover:border-blue-300/80`
- **Efeitos**: Mesmos glow e ring effects da seção Featured Projects
- **Título**: `text-white` com `drop-shadow-lg`
- **Descrição**: `text-slate-300`
- **Tech Badges**: Gradientes azul/indigo/roxo escuros
- **View Details**: Gradiente `from-blue-400 via-indigo-400 to-purple-400`

### Modal - Otimizado (2024)

#### Estrutura e Layout
- **Container**: `fixed inset-0 z-[2001] overflow-y-auto overscroll-contain`
- **Padding**: `px-4 sm:px-6 md:px-8 lg:px-12` (horizontal) e `py-8 md:py-12` (vertical)
- **Modal Box**: `max-w-5xl mx-auto` (menor que antes) com `max-h-[85vh]` (altura máxima)
- **Flex Layout**: `flex flex-col` para permitir scroll interno
- **Fundo**: `bg-slate-800/95 backdrop-blur-xl`
- **Borda**: `border-2 border-blue-400/30`
- **Conteúdo**: `overflow-y-auto flex-1 min-h-0` para scroll interno quando necessário
- **Hero**: `flex-shrink-0` para não encolher, mantém altura fixa

#### Acessibilidade
- **Keyboard Navigation**: ESC fecha o modal
- **ARIA Labels**: `role="dialog"`, `aria-modal="true"`, `aria-labelledby="modal-title"`
- **Focus States**: `focus:outline-none focus:ring-2 focus:ring-blue-400/50`
- **Touch Targets**: Botão de fechar `p-3 md:p-3.5` (mínimo 44px)

#### Animações
- **Backdrop**: Fade in/out com `duration: 0.2`
- **Modal**: Spring physics `stiffness: 400, damping: 35, mass: 0.8`
- **Entrada**: `scale: 0.96 → 1`, `y: 24 → 0`
- **AnimatePresence**: `mode="wait"` para transições suaves

#### Hero Section
- **Altura Responsiva**: `h-48 sm:h-64 md:h-80 lg:h-96`
- **Título**: `text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl`
- **Animações**: Título e badges com delay progressivo
- **Tech Stack Preview**: Primeiros 3 techs com animação sequencial

#### Stats Cards
- **Layout**: Grid `grid-cols-1 sm:grid-cols-3`
- **Hover**: `scale: 1.02, y: -2` com transição suave
- **Stagger Animation**: Delay progressivo entre cards
- **Bordas**: Hover states com mudança de cor

#### Seções de Conteúdo
- **About the Project**: Título com gradiente azul/roxo
- **Challenge/Solution**: Cards com fundo `bg-slate-700/30` e bordas
- **Indicadores Visuais**: Barras coloridas ao lado dos títulos
- **Hover States**: `scale: 1.01, y: -2` nos cards
- **Stagger**: Animações sequenciais entre seções

#### Tech Stack
- **Badges**: Hover `scale: 1.1, y: -2`
- **Animações**: Delay progressivo por badge
- **Cores**: Gradientes azul/indigo/roxo escuros

#### Key Results
- **Card**: Fundo verde com gradiente
- **Hover**: `scale: 1.01, y: -2`
- **Ícone**: 📈 para destaque visual

#### CTAs
- **Layout**: `flex-col sm:flex-row` (coluna no mobile)
- **Botões**: Gradientes azul/indigo/roxo
- **Hover**: `scale: 1.02`
- **Tap**: `scale: 0.98`

#### Prevenção de Scroll
- **Body Lock**: `document.body.style.overflow = 'hidden'` quando aberto
- **Cleanup**: Remove event listeners e restaura scroll ao fechar

---

## 🚀 Projetos Adicionados

### Scrambler 400x - Landing Page de Vendas
- **ID**: `scrambler-400x`
- **Categoria**: Landing Pages
- **Mercado**: Brasil (BR)
- **Tecnologias**: Next.js, React, TypeScript, Tailwind CSS, Google Analytics, Meta Pixel, Hotjar, Vercel
- **Imagem**: `/img-portfolio-scrambler400x.jpeg`
- **Demo**: https://scrambler-400x.vercel.app
- **Duração**: 7 dias
- **Posição**: 2ª posição na homepage (após GamersCode)
- **Featured**: Sim
- **Data de Adição**: 2024

#### Copy Específica
- **Cliente**: Triumph de São José do Rio Preto
- **Objetivo**: Landing page focada em tráfego pago para atrair clientes interessados na Scrambler 400x
- **Estratégia UX**: Toda experiência pensada para vender a moto, desde o primeiro contato até a conversão
- **Branding**: Utilização do branding oficial da marca Triumph para criar confiança e autoridade
- **Público**: Brasileiros interessados em motocicletas premium
- **Jornada**: Estruturada para guiar o visitante através de uma jornada de vendas estratégica

---

## ⏱️ Padrão de Entrega

### Landing Pages
- **Duração padrão**: 7 dias
- **Garantia**: Entrega garantida em 7 dias
- **Aplicado a**: Todos os projetos de landing pages (BR e US)

---

## 📱 Carrossel Mobile - ProjectsPage

### Implementação
- **Detecção Mobile**: `useState` e `useEffect` para detectar largura da tela
- **Reset Index**: Índice do carrossel reseta quando filtros mudam
- **Swipe Gesture**: `drag="x"` com `dragConstraints` e `dragElastic={0.2}`
- **Navegação**: Funções `nextSlide()`, `prevSlide()`, `goToSlide(index)`

### Indicadores
- **Swipe Icons**: `FaChevronLeft` e `FaChevronRight` em círculos premium
- **Círculos**: `bg-gradient-to-br from-blue-500/20 to-indigo-500/20` com `border-blue-400/30`
- **Texto**: "Swipe" em `text-slate-300`
- **Dots**: Mesmo padrão da seção Featured Projects (gradiente azul/indigo/roxo)

### Componente Reutilizável
- **ProjectCard**: Componente único usado tanto no carrossel quanto no grid
- **Props**: `project`, `categories`, `onClick`
- **Design**: Mesmo design premium com bordas saturadas e efeitos hover

---

## 🔄 Mudanças Recentes (2024)

### Modal - Otimizações Completas
- ✅ Acessibilidade: ESC key, ARIA labels, focus states
- ✅ Animações: Stagger animations, spring physics otimizadas
- ✅ Performance: AnimatePresence com mode="wait"
- ✅ Layout: Padding separado (horizontal/vertical) para evitar cortes
- ✅ Hover States: Todos os elementos interativos com feedback visual
- ✅ Prevenção de Scroll: Body lock quando modal aberto

### ProjectsPage - Carrossel Mobile
- ✅ Carrossel mobile implementado (igual Featured Projects)
- ✅ Filtros mantidos e funcionando
- ✅ Componente ProjectCard reutilizável
- ✅ Reset de índice quando filtros mudam

### Scrambler 400x - Copy Específica
- ✅ Copy atualizada com detalhes específicos do projeto
- ✅ Menciona Triumph de São José do Rio Preto
- ✅ Foco em tráfego pago e UX para vender
- ✅ Branding oficial da Triumph destacado
- ✅ Posicionado como 2º projeto na homepage

### Duração Landing Pages
- ✅ Padrão de 7 dias aplicado a todos os projetos de landing pages
- ✅ Garantia de entrega documentada

---

## 📝 Documentação do Código

### Comentários Explicativos
- **Localização**: `src/pages/ProjectsPage.jsx`
- **Idioma**: Português
- **Formato**: Comentários JSDoc e comentários inline

#### Estrutura de Comentários
1. **Seções Principais**: Delimitadas com `// ============================================`
2. **Componentes**: Documentados com JSDoc `/** */`
3. **Funções**: Explicação do propósito e parâmetros
4. **Estados**: Descrição do que cada estado controla
5. **Efeitos**: Explicação do que cada useEffect faz
6. **Seções de Render**: Comentários explicativos em cada seção visual

#### Seções Documentadas
- ✅ Imports e componentes reutilizáveis
- ✅ ProjectModal completo (todas as seções)
- ✅ ProjectsPage (estados, efeitos, funções)
- ✅ Filtros (categoria e mercado)
- ✅ Carrossel mobile (swipe, dots, animações)
- ✅ Grid desktop (stagger, hover effects)
- ✅ Background decorativo

---

## 📝 Documentação do Código - Sistema Completo

### Arquivos Documentados
- ✅ **App.jsx**: Rotas, Layout, SEO
- ✅ **main.jsx**: Ponto de entrada da aplicação
- ✅ **Header.jsx**: Navegação principal
- ✅ **Hero.jsx**: Seção hero da homepage
- ✅ **About.jsx**: Seção about (homepage)
- ✅ **Results.jsx**: Seção de resultados (homepage)
- ✅ **Skills.jsx**: Seção de skills (homepage)
- ✅ **Projects.jsx**: Seção featured projects (homepage)
- ✅ **ProjectsPage.jsx**: Página completa de projetos (com modal)
- ✅ **Contact.jsx**: Seção de contato (homepage)
- ✅ **Footer.jsx**: Rodapé do site
- ✅ **Blog.jsx**: Página do blog
- ✅ **ContactPage.jsx**: Página de contato
- ✅ **Services.jsx**: Página de serviços
- ✅ **Sales.jsx**: Página de vendas
- ✅ **AboutPage.jsx**: Página sobre
- ✅ **SkillsPage.jsx**: Página de skills
- ✅ **projectsData.js**: Dados centralizados dos projetos
- ✅ **seo.js**: Utilitários de SEO (já tinha comentários)

### Padrão de Comentários
- **Seções principais**: Delimitadas com `// ============================================`
- **Componentes**: JSDoc `/** */` com descrição e parâmetros
- **Funções**: Explicação do propósito e lógica
- **Estados**: Descrição do que controla
- **Efeitos**: Explicação do que faz
- **Seções de render**: Comentários inline explicativos

---

## 🔄 Mudanças Recentes - Modal e Documentação

### Modal - Ajustes Finais
- ✅ Tamanho reduzido: `max-w-6xl` → `max-w-5xl`
- ✅ Altura máxima: `max-h-[85vh]` para permitir scroll
- ✅ Layout flex: `flex flex-col` para scroll interno
- ✅ Hero fixo: `flex-shrink-0` para não encolher
- ✅ Conteúdo scrollável: `overflow-y-auto flex-1 min-h-0`
- ✅ Centralização: `items-center` no container externo

### Documentação Completa
- ✅ Todos os arquivos principais documentados
- ✅ Comentários em português
- ✅ JSDoc para componentes e funções
- ✅ Explicações de estados, efeitos e handlers
- ✅ Comentários inline em seções de renderização

---

## 🐛 Problemas e Correções - Modal

### Problema 1: Modal não centralizado no desktop
**Sintoma**: Modal aparecia cortado ou desalinhado verticalmente no desktop
**Causa**: Container usando `items-start` em mobile e `items-center` em desktop, mas com `my-auto` no modal causando conflito
**Solução**: 
- Mobile: `items-start` (mantém como está, está perfeito)
- Desktop: `items-center` com `my-auto` no modal para centralização perfeita
- Padding vertical ajustado: `py-6` (mobile) e `py-12` (desktop)

### Problema 2: Modal cortando na tela
**Sintoma**: Modal ultrapassava os limites da viewport, cortando conteúdo
**Causa**: `max-h` não estava considerando corretamente o padding vertical
**Solução**:
- Mobile: `max-h-[calc(100vh-3rem)]` (considera `py-6` = 1.5rem top + 1.5rem bottom)
- Desktop: `max-h-[calc(100vh-6rem)]` (considera `py-12` = 3rem top + 3rem bottom)
- Container: `min-h-screen flex items-center` para garantir centralização

### Problema 3: Texto cortando no Hero da homepage
**Sintoma**: Texto grande "Where Consumer Behavioral Psychology Meets Code" cortando nas laterais
**Causa**: Falta de padding horizontal na seção Hero
**Solução**:
- Adicionado `px-4 sm:px-6 md:px-8` na seção Hero
- Container principal com `max-w-7xl mx-auto` para limitar largura
- Tamanhos de texto reduzidos em telas menores: `text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl`
- Adicionado `break-words` para quebra de palavras quando necessário

### Problema 4: Modal cortando no topo no desktop
**Sintoma**: Modal aparecia cortado na parte superior da tela no desktop, como se estivesse "entrando" pela parte de cima
**Causa**: Padding-top insuficiente no desktop (`py-12` = 3rem top + 3rem bottom) não garantia espaço suficiente no topo
**Solução (Iteração 1)**:
- Padding-top aumentado no desktop: `pt-16` (4rem) ao invés de `pt-12` (3rem)
- Padding-bottom mantido: `pb-12` (3rem)
- Max-height ajustado: `max-h-[calc(100vh-7rem)]` no desktop (considera 4rem top + 3rem bottom)
- **Resultado**: Ainda estava cortando, mas menos

**Solução (Iteração 2)**:
- Padding-top aumentado ainda mais: `pt-20` (5rem) no desktop
- Padding-bottom mantido: `pb-12` (3rem)
- Max-height ajustado: `max-h-[calc(100vh-8rem)]` no desktop (considera 5rem top + 3rem bottom)
- **Resultado**: Ainda estava cortando pouco

**Solução (Iteração 3)**:
- Padding-top aumentado para: `pt-24` (6rem) no desktop
- Padding-bottom mantido: `pb-12` (3rem)
- Max-height ajustado: `max-h-[calc(100vh-9rem)]` no desktop (considera 6rem top + 3rem bottom)
- **Resultado**: Usuário pediu para descer "só mais um poquinho"

**Solução (Iteração 4 - Final)**:
- Padding-top aumentado para: `pt-28` (7rem) no desktop
- Padding-bottom mantido: `pb-12` (3rem)
- Max-height ajustado: `max-h-[calc(100vh-10rem)]` no desktop (considera 7rem top + 3rem bottom)
- Mobile mantido: `py-6` e `max-h-[calc(100vh-3rem)]` (estava perfeito)

### Configuração Final do Modal (Desktop)
```jsx
// Container externo
// Mobile: py-6 (padding igual top/bottom)
// Desktop: pt-28 pb-12 (padding-top maior = 7rem para evitar corte no topo)
<div className="min-h-screen flex items-start md:items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-6 pt-6 md:pt-28 md:pb-12">

// Modal box
// Mobile: max-h-[calc(100vh-3rem)] (considera py-6)
// Desktop: max-h-[calc(100vh-10rem)] (considera pt-28 = 7rem + pb-12 = 3rem)
<motion.div className="w-full max-w-5xl ... max-h-[calc(100vh-3rem)] md:max-h-[calc(100vh-10rem)] flex flex-col overflow-hidden my-0 md:my-auto">
```

### Lições Aprendidas
1. **Mobile primeiro**: Sempre manter mobile funcionando perfeitamente antes de ajustar desktop
2. **Padding e max-height**: Sempre calcular `max-h` considerando o padding vertical (`py-*`)
3. **Centralização**: Usar `items-center` no container externo + `my-auto` no elemento interno para centralização perfeita
4. **Scroll interno**: Usar `flex flex-col` no modal + `overflow-y-auto flex-1 min-h-0` no conteúdo para scroll interno funcionar

---

*Última atualização: Modal ajustado para evitar corte no topo no desktop (pt-28 = 7rem no desktop, max-h-[calc(100vh-10rem)]). Hero da homepage com padding horizontal e texto responsivo. Mobile mantido perfeito como estava.*

