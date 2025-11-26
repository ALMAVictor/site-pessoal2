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

### Modal
- **Fundo**: `bg-slate-800/95 backdrop-blur-xl`
- **Borda**: `border-2 border-blue-400/30`
- **Stats Cards**: Fundos escuros com gradientes e bordas coloridas
- **Textos**: Branco e slate-300 para contraste
- **Tech Stack**: Badges com gradientes escuros
- **CTAs**: Botões com gradientes azul/indigo/roxo

---

*Última atualização: Página Projects - Design premium escuro aplicado com bordas saturadas*

