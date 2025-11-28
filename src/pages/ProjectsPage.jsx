// ============================================
// IMPORTS
// ============================================
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FaExternalLinkAlt, FaGithub, FaTimes, FaClock, FaCode, FaChartLine, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { projectsData, categories, markets, getMarketInfo } from '../data/projectsData';

// ============================================
// COMPONENTES REUTILIZÁVEIS
// ============================================

/**
 * Componente: Market Badge
 * Exibe o badge do mercado (Brasil, EUA, etc.) com bandeira e label
 * @param {string} market - ID do mercado (ex: 'br', 'us')
 */
const MarketBadge = ({ market }) => {
  const marketInfo = getMarketInfo(market);
  if (!marketInfo || marketInfo.id === 'all') return null;
  
  return (
    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-700/80 backdrop-blur-sm border border-blue-400/30 shadow-sm">
      <span className="text-sm">{marketInfo.flag}</span>
      <span className="text-xs font-semibold text-slate-200">{marketInfo.label}</span>
    </div>
  );
};

/**
 * Componente: Project Card
 * Card reutilizável para exibir projetos no grid e carrossel
 * @param {Object} project - Dados do projeto
 * @param {Array} categories - Lista de categorias para buscar o label
 * @param {Function} onClick - Função chamada ao clicar no card
 */
const ProjectCard = ({ project, categories, onClick }) => (
  <motion.div
    className="group relative bg-slate-800/90 md:bg-slate-800/95 md:backdrop-blur-xl rounded-2xl md:rounded-3xl shadow-2xl md:shadow-2xl overflow-hidden flex flex-col border-2 border-slate-700/80 md:border-blue-400/50 hover:border-blue-300/80 hover:shadow-[0_25px_50px_-12px_rgba(59,130,246,0.5)] transition-all cursor-pointer h-full"
    whileHover={typeof window !== 'undefined' && window.innerWidth > 768 ? { y: -4, scale: 1.01 } : {}}
    onClick={onClick}
  >
    {/* Premium shine effect on hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-indigo-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:via-indigo-500/10 group-hover:to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl md:rounded-3xl" />
    {/* Enhanced border glow */}
    <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-r from-blue-500/0 via-indigo-500/0 to-purple-500/0 group-hover:from-blue-400/30 group-hover:via-indigo-400/30 group-hover:to-purple-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-xl" />
    {/* Border ring on hover - more saturated */}
    <div className="absolute -inset-1 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10">
      <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-r from-blue-300/50 via-indigo-300/50 to-purple-300/50 blur-md" />
    </div>
    
    {/* Image */}
    <div className="relative h-48 overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover md:group-hover:scale-110 transition-transform duration-300 md:duration-500"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      {project.featured && (
        <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-white text-xs font-bold shadow-lg">
          ⭐ Featured
        </div>
      )}
    </div>

    {/* Content */}
    <div className="p-6 flex flex-col flex-1 relative z-10">
      <div className="mb-2 flex items-center gap-2 flex-wrap">
        <span className="text-xs font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent uppercase tracking-wide">
          {categories.find(c => c.id === project.category)?.label}
        </span>
        {project.market && <MarketBadge market={project.market} />}
      </div>
      <h3 className="text-xl font-extrabold text-white mb-3 tracking-tight drop-shadow-lg">
        {project.title}
      </h3>
      <p className="text-slate-300 mb-4 leading-relaxed flex-1 text-sm">
        {project.description}
      </p>
      {project.results && (
        <div className="mb-4 p-2 rounded-lg bg-gradient-to-r from-green-900/40 via-emerald-900/40 to-green-900/40 border border-green-500/30">
          <p className="text-xs font-bold text-green-300">
            📈 <span className="text-green-200">Result:</span> {project.results}
          </p>
        </div>
      )}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.slice(0, 3).map(tech => (
          <span
            key={tech}
            className="border border-blue-400/30 text-slate-200 rounded-full text-xs px-2.5 py-1 font-semibold bg-gradient-to-r from-blue-900/40 via-indigo-900/40 to-purple-900/40 backdrop-blur-sm shadow-sm hover:shadow-md hover:border-blue-400/50 hover:from-blue-800/50 hover:via-indigo-800/50 hover:to-purple-800/50 transition-all"
          >
            {tech}
          </span>
        ))}
        {project.techStack.length > 3 && (
          <span className="text-xs text-slate-400 font-semibold">
            +{project.techStack.length - 3} more
          </span>
        )}
      </div>
      <div className="mt-auto pt-4 border-t border-slate-700/60">
        <span className="text-sm font-semibold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:via-indigo-300 group-hover:to-purple-300 transition-all">
          View Details →
        </span>
      </div>
    </div>
  </motion.div>
);

// ============================================
// COMPONENTE: PROJECT MODAL
// ============================================
/**
 * Modal de detalhes do projeto
 * Exibe informações completas do projeto em um modal otimizado para mobile e desktop
 * @param {Object} project - Dados do projeto a ser exibido
 * @param {boolean} isOpen - Controla se o modal está aberto
 * @param {Function} onClose - Função para fechar o modal
 */
const ProjectModal = ({ project, isOpen, onClose }) => {
  // ============================================
  // EFEITOS: Prevenção de scroll e tecla ESC
  // ============================================
  // Bloqueia o scroll do body quando o modal está aberto
  // Adiciona listener para fechar com ESC
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleEscape = (e) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      document.addEventListener('keydown', handleEscape);
      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = 'unset';
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen, onClose]);

  // Se não houver projeto, não renderiza nada
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* ============================================
              BACKDROP - Fundo escuro com blur
              ============================================ */}
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[2000]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-hidden="true"
          />
          
          {/* ============================================
              CONTAINER DO MODAL
              Container principal com scroll e acessibilidade
              ============================================ */}
          <div 
            className="fixed inset-0 z-[2001] overflow-y-auto overscroll-contain"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Container interno com padding responsivo - Centralizado vertical e horizontalmente */}
            {/* Mobile: items-start para não cortar no topo | Desktop: items-center para centralizar */}
            {/* py-* adiciona padding vertical para espaçamento do topo/fundo */}
            {/* Desktop: padding-top maior (pt-28 = 7rem) para garantir espaço suficiente no topo, pb-12 para o fundo */}
            <div className="min-h-screen flex items-start md:items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-6 pt-6 md:pt-28 md:pb-12">
              {/* ============================================
                  MODAL BOX - Card principal do modal
                  Tamanho menor (max-w-5xl) com max-height calculado para não cortar
                  Flex column para que o conteúdo possa fazer scroll interno
                  max-h calculado considerando o padding vertical:
                  - Mobile: calc(100vh - 3rem) = mantém como está (está perfeito)
                  - Desktop: calc(100vh - 10rem) = 100vh menos pt-28 (7rem top) + pb-12 (3rem bottom) para garantir espaço suficiente no topo
                  ============================================ */}
              <motion.div
                className="w-full max-w-5xl bg-slate-800/95 backdrop-blur-xl rounded-2xl md:rounded-3xl shadow-2xl border-2 border-blue-400/30 relative max-h-[calc(100vh-3rem)] md:max-h-[calc(100vh-10rem)] flex flex-col overflow-hidden my-0 md:my-auto"
                initial={{ opacity: 0, scale: 0.96, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 24 }}
                transition={{ 
                  type: 'spring', 
                  stiffness: 400, 
                  damping: 35,
                  mass: 0.8
                }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* ============================================
                    BOTÃO DE FECHAR
                    Posicionado no canto superior direito
                    ============================================ */}
                <motion.button
                  onClick={onClose}
                  className="absolute top-4 right-4 md:top-6 md:right-6 z-20 p-3 md:p-3.5 rounded-full bg-slate-700/95 backdrop-blur-sm hover:bg-slate-600/90 active:bg-slate-500 transition-all shadow-xl border-2 border-slate-600/60 hover:border-blue-400/50 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:ring-offset-2 focus:ring-offset-slate-800"
                  aria-label="Close modal"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <FaTimes className="text-white" size={18} />
                </motion.button>

                {/* ============================================
                    HERO SECTION - Imagem/Video do projeto
                    Altura compacta para desktop (md:h-56 lg:h-64)
                    ============================================ */}
                {/* Hero image/video - Não faz scroll (flex-shrink-0) */}
                <div className="relative h-48 sm:h-64 md:h-56 lg:h-64 bg-gradient-to-br from-slate-900 to-blue-900 flex-shrink-0">
                  {/* Se tiver videoId, exibe iframe do YouTube, senão exibe imagem */}
                  {project.videoId ? (
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${project.videoId}?autoplay=1&rel=0`}
                      title={project.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                  {/* Overlay escuro para melhorar legibilidade do texto */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  {/* ============================================
                      TÍTULO E BADGES - Sobrepostos na imagem
                      Animações com delay progressivo
                      ============================================ */}
                  <motion.div 
                    className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:items-center gap-2 sm:gap-3 mb-3">
                      <h2 
                        id="modal-title"
                        className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-black text-white leading-tight pr-12 md:pr-16 drop-shadow-2xl"
                      >
                        {project.title}
                      </h2>
                      {project.market && (
                        <motion.div 
                          className="flex items-center gap-1.5 px-2.5 py-1 md:px-3 md:py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 shrink-0 shadow-lg"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          <span className="text-base md:text-lg">{getMarketInfo(project.market).flag}</span>
                          <span className="text-xs md:text-sm font-semibold text-white">{getMarketInfo(project.market).label}</span>
                        </motion.div>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 3).map((tech, idx) => (
                        <motion.span
                          key={tech}
                          className="px-2.5 py-1 md:px-3 md:py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs md:text-sm font-semibold border border-white/20 shadow-md"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.35 + idx * 0.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.techStack.length > 3 && (
                        <motion.span 
                          className="px-2.5 py-1 md:px-3 md:py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs md:text-sm font-semibold border border-white/20 shadow-md"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          +{project.techStack.length - 3} more
                        </motion.span>
                      )}
                    </div>
                  </motion.div>
                </div>

                {/* ============================================
                    CONTEÚDO PRINCIPAL
                    Padding compacto para desktop (md:p-6 lg:p-8)
                    Overflow-y-auto para permitir scroll interno quando necessário
                    Flex-1 para ocupar espaço restante e permitir scroll
                    ============================================ */}
                <div className="p-5 sm:p-6 md:p-6 lg:p-8 max-w-full overflow-x-hidden overflow-y-auto flex-1 min-h-0">
                  {/* ============================================
                      STATS CARDS - Duração, Resultado, Tech Stack
                      Grid responsivo: 1 coluna mobile, 3 colunas desktop
                      ============================================ */}
                  <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-4 md:mb-6"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      visible: {
                        transition: {
                          staggerChildren: 0.1
                        }
                      }
                    }}
                  >
                    <motion.div 
                      className="flex items-center gap-2 md:gap-3 p-2.5 md:p-3 rounded-lg md:rounded-xl bg-gradient-to-r from-blue-900/40 via-indigo-900/40 to-blue-900/40 border-2 border-blue-400/30 hover:border-blue-300/50 transition-all"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                      }}
                      whileHover={{ scale: 1.02, y: -2 }}
                    >
                      <div className="p-2 md:p-2.5 rounded-lg bg-gradient-to-r from-blue-600/40 to-indigo-600/40 shrink-0">
                        <FaClock className="text-blue-300" size={16} />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs text-slate-300 font-medium">Duration</div>
                        <div className="text-sm md:text-base font-bold text-white truncate">{project.duration}</div>
                      </div>
                    </motion.div>
                    <motion.div 
                      className="flex items-center gap-2 md:gap-3 p-2.5 md:p-3 rounded-lg md:rounded-xl bg-gradient-to-r from-green-900/40 via-emerald-900/40 to-green-900/40 border-2 border-green-400/30 hover:border-green-300/50 transition-all"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                      }}
                      whileHover={{ scale: 1.02, y: -2 }}
                    >
                      <div className="p-2 md:p-2.5 rounded-lg bg-gradient-to-r from-green-600/40 to-emerald-600/40 shrink-0">
                        <FaChartLine className="text-green-300" size={16} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-xs text-slate-300 font-medium">Result</div>
                        <div className="text-sm md:text-base font-bold text-white line-clamp-2">{project.results}</div>
                      </div>
                    </motion.div>
                    <motion.div 
                      className="flex items-center gap-2 md:gap-3 p-2.5 md:p-3 rounded-lg md:rounded-xl bg-gradient-to-r from-purple-900/40 via-indigo-900/40 to-purple-900/40 border-2 border-purple-400/30 hover:border-purple-300/50 transition-all"
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                      }}
                      whileHover={{ scale: 1.02, y: -2 }}
                    >
                      <div className="p-2 md:p-2.5 rounded-lg bg-gradient-to-r from-purple-600/40 to-indigo-600/40 shrink-0">
                        <FaCode className="text-purple-300" size={16} />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs text-slate-300 font-medium">Tech Stack</div>
                        <div className="text-sm md:text-base font-bold text-white">{project.techStack.length} technologies</div>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* ============================================
                      SEÇÕES DE DESCRIÇÃO
                      About, Challenge, Solution, Tech Stack, Results
                      Espaçamento compacto para desktop
                      ============================================ */}
                  <motion.div 
                    className="space-y-4 md:space-y-5 lg:space-y-6"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      visible: {
                        transition: {
                          staggerChildren: 0.15
                        }
                      }
                    }}
                  >
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                      }}
                    >
                      <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">
                        <span className="bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent">
                          About the Project
                        </span>
                      </h3>
                      <p className="text-slate-300 leading-relaxed text-sm sm:text-base md:text-base max-w-none">
                        {project.fullDescription}
                      </p>
                    </motion.div>

                    {/* Challenge e Solution lado a lado no desktop */}
                    <div className="grid md:grid-cols-2 gap-4 md:gap-5">
                      {/* Card: The Challenge - Animação da esquerda */}
                      <motion.div 
                        className="p-3 md:p-4 rounded-lg md:rounded-xl bg-slate-700/30 border border-slate-600/40 hover:border-blue-400/50 hover:bg-slate-700/40 transition-all"
                        variants={{
                          hidden: { opacity: 0, x: -20 },
                          visible: { opacity: 1, x: 0 }
                        }}
                        whileHover={{ scale: 1.01, y: -2 }}
                      >
                        <h3 className="text-base md:text-lg font-bold text-white mb-2 md:mb-3 flex items-center gap-2">
                          {/* Barra indicadora azul/indigo */}
                          <span className="w-1 h-5 md:h-6 bg-gradient-to-b from-blue-400 to-indigo-400 rounded-full"></span>
                          The Challenge
                        </h3>
                        <p className="text-slate-300 leading-relaxed text-sm sm:text-base">{project.challenge}</p>
                      </motion.div>
                      {/* Card: The Solution - Animação da direita */}
                      <motion.div 
                        className="p-3 md:p-4 rounded-lg md:rounded-xl bg-slate-700/30 border border-slate-600/40 hover:border-purple-400/50 hover:bg-slate-700/40 transition-all"
                        variants={{
                          hidden: { opacity: 0, x: 20 },
                          visible: { opacity: 1, x: 0 }
                        }}
                        whileHover={{ scale: 1.01, y: -2 }}
                      >
                        <h3 className="text-base md:text-lg font-bold text-white mb-2 md:mb-3 flex items-center gap-2">
                          {/* Barra indicadora indigo/roxo */}
                          <span className="w-1 h-5 md:h-6 bg-gradient-to-b from-indigo-400 to-purple-400 rounded-full"></span>
                          The Solution
                        </h3>
                        <p className="text-slate-300 leading-relaxed text-sm sm:text-base">{project.solution}</p>
                      </motion.div>
                    </div>

                    {/* Seção: Tech Stack - Lista de tecnologias */}
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                      }}
                    >
                      <h3 className="text-base md:text-lg font-bold text-white mb-2 md:mb-3">
                        <span className="bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent">
                          Tech Stack
                        </span>
                      </h3>
                      {/* Badges de tecnologias com animação progressiva */}
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, idx) => (
                          <motion.span
                            key={tech}
                            className="px-2.5 py-1 md:px-3 md:py-1.5 bg-gradient-to-r from-blue-900/40 via-indigo-900/40 to-purple-900/40 border border-blue-400/30 rounded-full text-slate-200 font-semibold text-xs hover:border-blue-300/50 hover:from-blue-800/50 hover:via-indigo-800/50 hover:to-purple-800/50 transition-all cursor-default"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 + idx * 0.03 }}
                            whileHover={{ scale: 1.1, y: -2 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>

                    {/* Seção: Key Results - Destaque verde para resultados */}
                    {project.results && (
                      <motion.div 
                        className="p-3 md:p-4 lg:p-5 rounded-lg md:rounded-xl bg-gradient-to-r from-green-900/40 via-emerald-900/40 to-green-900/40 border-2 border-green-400/30 shadow-lg shadow-green-500/10 hover:border-green-300/50 transition-all"
                        variants={{
                          hidden: { opacity: 0, scale: 0.95 },
                          visible: { opacity: 1, scale: 1 }
                        }}
                        whileHover={{ scale: 1.01, y: -2 }}
                      >
                        <h3 className="text-base md:text-lg font-bold text-green-200 mb-2 md:mb-3 flex items-center gap-2">
                          <span className="text-xl">📈</span>
                          Key Results
                        </h3>
                        <p className="text-green-100 font-semibold text-sm sm:text-base leading-relaxed">{project.results}</p>
                      </motion.div>
                    )}
                  </motion.div>

                  {/* ============================================
                      CTAs - Botões de ação
                      View Live Project e View Code
                      ============================================ */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-6 md:mt-7 pt-4 md:pt-5 border-t-2 border-slate-700/60">
                    {/* Botão: Ver projeto ao vivo */}
                    {project.demo !== '#' && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-5 py-3 md:px-6 md:py-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-full font-semibold text-sm md:text-base shadow-lg shadow-blue-600/40 hover:shadow-xl hover:shadow-blue-600/60 transition-all border-2 border-blue-400/30 active:scale-95"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        View Live Project <FaExternalLinkAlt size={14} />
                      </motion.a>
                    )}
                    {/* Botão: Ver código no GitHub */}
                    {project.github !== '#' && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-5 py-3 md:px-6 md:py-3 border-2 border-slate-600/60 text-slate-300 rounded-full font-semibold text-sm md:text-base hover:bg-slate-700/50 hover:border-blue-400/50 transition-all active:scale-95"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <FaGithub size={16} /> View Code
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

// ============================================
// COMPONENTE PRINCIPAL: PROJECTS PAGE
// ============================================
/**
 * Página de projetos com filtros, carrossel mobile e grid desktop
 * Gerencia estados de filtros, modal e carrossel
 */
const ProjectsPage = () => {
  // ============================================
  // ESTADOS
  // ============================================
  const [searchParams, setSearchParams] = useSearchParams(); // URL params para compartilhar projeto
  const [selectedCategory, setSelectedCategory] = useState('all'); // Categoria selecionada (all, landing, sites, ecommerce)
  const [selectedMarket, setSelectedMarket] = useState('all'); // Mercado selecionado (all, br, us)
  const [selectedProject, setSelectedProject] = useState(null); // Projeto selecionado para modal
  const [isModalOpen, setIsModalOpen] = useState(false); // Controla abertura do modal
  const [currentIndex, setCurrentIndex] = useState(0); // Índice atual do carrossel mobile
  const ref = useRef(null); // Ref para animação de entrada
  const isInView = useInView(ref, { once: true, margin: '-100px' }); // Detecta se está visível

  // ============================================
  // EFEITOS
  // ============================================
  
  // Define o título da página para SEO
  useEffect(() => {
    document.title = 'Featured Projects | Victor Mazoni - Hybrid Growth Engineer';
  }, []);

  // Verifica se há parâmetro ?project= na URL ao carregar a página
  // Se houver, abre o modal automaticamente com o projeto correspondente
  useEffect(() => {
    const projectId = searchParams.get('project');
    if (projectId) {
      const project = projectsData.find(p => p.id === projectId);
      if (project) {
        setSelectedProject(project);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
      }
    }
  }, [searchParams]);

  // Reseta o índice do carrossel quando os filtros mudam
  // Garante que sempre comece do primeiro projeto após filtrar
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory, selectedMarket]);

  // ============================================
  // FUNÇÕES AUXILIARES
  // ============================================
  
  /**
   * Filtra projetos baseado na categoria e mercado selecionados
   * Retorna array de projetos que correspondem aos filtros
   */
  const filteredProjects = projectsData.filter(proj => {
    const categoryMatch = selectedCategory === 'all' || proj.category === selectedCategory;
    const marketMatch = selectedMarket === 'all' || proj.market === selectedMarket;
    return categoryMatch && marketMatch;
  });

  /**
   * Handler: Clique em um projeto
   * Abre o modal e atualiza a URL com o ID do projeto
   */
  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    setSearchParams({ project: project.id }); // Atualiza URL para compartilhar
    document.body.style.overflow = 'hidden'; // Bloqueia scroll
  };

  /**
   * Handler: Fechar modal
   * Limpa estados e restaura scroll
   */
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    setSearchParams({}); // Remove parâmetro da URL
    document.body.style.overflow = 'unset'; // Restaura scroll
  };

  /**
   * Navegação do carrossel: Próximo slide
   * Volta para o início quando chega no final
   */
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  /**
   * Navegação do carrossel: Slide anterior
   * Vai para o final quando está no início
   */
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  /**
   * Navegação do carrossel: Ir para slide específico
   * Usado pelos dots indicadores
   */
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // ============================================
  // RENDER
  // ============================================
  return (
    <div className="min-h-screen bg-slate-900/95 backdrop-blur-xl relative overflow-hidden">
      {/* ============================================
          BACKGROUND DECORATIVO
          Gradientes e orbs para efeito premium
          ============================================ */}
      {/* Overlay de gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-slate-900/95 to-indigo-900/20 pointer-events-none" />
      
      {/* Elementos decorativos de fundo - Orbs e grid pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Orb grande - canto superior direito */}
        <div className="absolute -top-32 -right-32 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-gradient-to-bl from-blue-500/20 md:from-blue-500/30 via-indigo-500/15 md:via-indigo-500/20 to-purple-500/10 md:to-purple-500/15 rounded-full blur-3xl" />
        {/* Orb médio - canto inferior esquerdo */}
        <div className="absolute -bottom-32 -left-32 w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-gradient-to-tr from-indigo-500/15 md:from-indigo-500/25 via-purple-500/12 md:via-purple-500/20 to-blue-500/10 md:to-blue-500/15 rounded-full blur-3xl" />
        {/* Padrão de grid sutil */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:32px_32px] opacity-30 md:opacity-50" />
      </div>

      <div className="pt-24 pb-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {/* ============================================
                HEADER - Título e descrição
                ============================================ */}
            <motion.div
              className="text-center mb-12"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <h1 className="text-5xl md:text-6xl font-black mb-4 tracking-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-lg">
                  Featured
                </span>{' '}
                <span className="bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent drop-shadow-lg">
                  Projects
                </span>
              </h1>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Hybrid projects combining Growth Engineering, Consumer Behavioral Psychology, and Front-End Development
              </p>
            </motion.div>

            {/* ============================================
                FILTROS DE CATEGORIA
                Landing Pages, Websites, E-commerce, etc.
                ============================================ */}
            <motion.div
              className="flex flex-wrap justify-center gap-3 mb-6"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-lg shadow-blue-600/40 border-2 border-blue-400/50'
                      : 'bg-slate-800/80 backdrop-blur-sm border-2 border-slate-700/60 text-slate-300 hover:border-blue-400/40 hover:bg-slate-700/80'
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.label}
                </motion.button>
              ))}
            </motion.div>

            {/* ============================================
                FILTROS DE MERCADO
                Brasil, Estados Unidos, etc.
                ============================================ */}
            <motion.div
              className="flex flex-wrap justify-center gap-3 mb-12"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {markets.map((market) => (
                <motion.button
                  key={market.id}
                  onClick={() => setSelectedMarket(market.id)}
                  className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all ${
                    selectedMarket === market.id
                      ? 'bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 text-white shadow-lg shadow-green-500/40 border-2 border-green-400/50'
                      : 'bg-slate-800/80 backdrop-blur-sm border-2 border-slate-700/60 text-slate-300 hover:border-green-400/40 hover:bg-slate-700/80'
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="mr-2">{market.flag}</span>
                  {market.label}
                </motion.button>
              ))}
            </motion.div>

            {/* ============================================
                CARROSSEL MOBILE
                Exibido apenas em telas menores que md (768px)
                Suporta swipe gesture e navegação por dots
                ============================================ */}
            {filteredProjects.length > 0 && (
              <div className="md:hidden">
                <div className="relative">
                  {/* Indicador de swipe com ícones premium */}
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-sm border border-blue-400/30">
                      <FaChevronLeft className="text-blue-400" size={12} />
                    </div>
                    <p className="text-slate-300 text-sm font-semibold tracking-wide">
                      Swipe
                    </p>
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-sm border border-blue-400/30">
                      <FaChevronRight className="text-blue-400" size={12} />
                    </div>
                  </div>

                  {/* Container com drag gesture para swipe */}
                  <motion.div
                    className="relative"
                    drag="x" // Permite arrastar horizontalmente
                    dragConstraints={{ left: 0, right: 0 }} // Limita movimento
                    dragElastic={0.2} // Elasticidade do drag
                    onDragEnd={(e, { offset, velocity }) => {
                      // Calcula se o swipe foi forte o suficiente
                      const swipe = Math.abs(offset.x) * velocity.x;
                      if (swipe < -10000) {
                        nextSlide(); // Swipe para esquerda = próximo
                      } else if (swipe > 10000) {
                        prevSlide(); // Swipe para direita = anterior
                      }
                    }}
                  >
                    {/* Animações de transição entre slides */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 100 }} // Entra da direita
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }} // Sai para esquerda
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <ProjectCard 
                          project={filteredProjects[currentIndex]} 
                          categories={categories}
                          onClick={() => handleProjectClick(filteredProjects[currentIndex])}
                        />
                      </motion.div>
                    </AnimatePresence>
                  </motion.div>

                  {/* Dots indicadores - Navegação direta para slide específico */}
                  <div className="flex justify-center items-center gap-3 mt-6">
                    {filteredProjects.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => goToSlide(idx)}
                        className="relative group"
                        aria-label={`Go to slide ${idx + 1}`}
                      >
                        {idx === currentIndex ? (
                          <motion.div
                            className="relative"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                          >
                            {/* Glow effect */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 blur-sm opacity-60" />
                            {/* Active dot */}
                            <div className="relative w-8 h-2.5 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 shadow-lg shadow-blue-500/50" />
                          </motion.div>
                        ) : (
                          <div className="w-2 h-2 rounded-full bg-slate-400/60 backdrop-blur-sm border border-slate-300/40 group-hover:bg-slate-300/80 group-hover:scale-110 transition-all duration-200 shadow-sm" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ============================================
                GRID DESKTOP
                Exibido apenas em telas maiores que md (768px)
                Grid responsivo: 2 colunas md, 3 colunas lg
                Animações com stagger para entrada sequencial
                ============================================ */}
            <motion.div
              className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } }, // Delay progressivo entre cards
              }}
            >
              <AnimatePresence mode="wait">
                {filteredProjects.map((project, idx) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20, scale: 0.98 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ delay: idx * 0.05, duration: 0.5, ease: 'easeOut' }} // Delay baseado no índice
                    whileHover={{ y: -4, scale: 1.01 }} // Efeito hover suave
                  >
                    <ProjectCard 
                      project={project} 
                      categories={categories}
                      onClick={() => handleProjectClick(project)}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {filteredProjects.length === 0 && (
              <motion.div
                className="text-center py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <p className="text-slate-300 text-lg">No projects found in this category.</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      {/* ============================================
          MODAL DE DETALHES DO PROJETO
          Renderizado condicionalmente baseado em isModalOpen
          ============================================ */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default ProjectsPage;

