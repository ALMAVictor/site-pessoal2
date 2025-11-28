// ============================================
// PROJECTS.JSX - Seção Featured Projects (Homepage)
// ============================================
// Exibe projetos em destaque na homepage
// Carrossel mobile com swipe gesture
// Grid desktop com animações stagger

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaTimes, FaExternalLinkAlt, FaGithub, FaClock, FaCode, FaChartLine } from 'react-icons/fa';
import { projectsData, getMarketInfo } from '../data/projectsData';

/**
 * Componente: Market Badge
 * Exibe badge do mercado (Brasil, EUA, etc.) com bandeira
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

// Filtra apenas projetos marcados como featured
const featuredProjects = projectsData.filter(p => p.featured);

/**
 * Componente: Projects (Homepage)
 * Seção de projetos em destaque
 * Carrossel mobile + Grid desktop
 */
const Projects = () => {
  // Ref para animação de entrada quando visível
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  
  // Estados: Carrossel mobile
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  // Estados: Modal
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Efeito: Detecta se está em mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  /**
   * Navegação do carrossel: Próximo slide
   * Volta para o início quando chega no final
   */
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredProjects.length);
  };

  /**
   * Navegação do carrossel: Slide anterior
   * Vai para o final quando está no início
   */
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  /**
   * Navegação do carrossel: Ir para slide específico
   * Usado pelos dots indicadores
   */
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  /**
   * Abre o modal com o projeto selecionado
   * @param {Object} project - Projeto a ser exibido no modal
   */
  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  /**
   * Fecha o modal
   */
  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Pequeno delay para animação de saída antes de limpar o projeto
    setTimeout(() => setSelectedProject(null), 300);
  };

  const ProjectCard = ({ project, idx }) => (
    <div onClick={() => handleOpenModal(project)}>
      <motion.div className="group relative bg-slate-800/90 md:bg-slate-800/95 md:backdrop-blur-xl rounded-2xl md:rounded-3xl shadow-2xl md:shadow-2xl overflow-hidden flex flex-col border-2 border-slate-700/80 md:border-blue-400/50 hover:border-blue-300/80 hover:shadow-[0_25px_50px_-12px_rgba(59,130,246,0.5)] transition-all cursor-pointer h-full">
        {/* Premium shine effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-indigo-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:via-indigo-500/10 group-hover:to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl md:rounded-3xl" />
        {/* Enhanced border glow */}
        <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-r from-blue-500/0 via-indigo-500/0 to-purple-500/0 group-hover:from-blue-400/30 group-hover:via-indigo-400/30 group-hover:to-purple-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-xl" />
        {/* Border ring on hover - more saturated */}
        <div className="absolute -inset-1 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10">
          <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-r from-blue-300/50 via-indigo-300/50 to-purple-300/50 blur-md" />
        </div>
        
        {/* Image */}
        <div className="relative overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-48 md:h-64 object-cover md:group-hover:scale-110 transition-transform duration-300 md:duration-500 ease-out"
            loading="lazy"
            decoding="async"
            whileHover={typeof window !== 'undefined' && window.innerWidth > 768 ? { scale: 1.1 } : {}}
          />
          {/* Enhanced gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          {/* Subtle shine effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          {project.featured && (
            <motion.div
              className="absolute top-4 right-4 px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-500 rounded-full text-white text-xs md:text-sm font-bold shadow-xl backdrop-blur-sm border border-white/20"
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              ⭐ Featured
            </motion.div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 md:p-7 lg:p-10 flex flex-col flex-1 relative z-10">
          <div className="mb-3 md:mb-3">
            {project.market && <MarketBadge market={project.market} />}
          </div>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-white mb-3 md:mb-4 tracking-tight leading-tight bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
            {project.title}
          </h3>
          <p className="text-slate-300 mb-4 md:mb-5 leading-relaxed flex-1 text-sm md:text-base lg:text-lg line-clamp-3">
            {project.description}
          </p>
          {project.results && (
            <div className="mb-4 md:mb-5 p-3 md:p-4 rounded-xl md:rounded-2xl bg-gradient-to-r from-green-900/40 via-emerald-900/40 to-green-900/40 border border-green-500/30 shadow-sm">
              <p className="text-xs md:text-sm lg:text-base font-bold text-green-300 leading-tight">
                📈 <span className="text-green-200">Result:</span> {project.results}
              </p>
            </div>
          )}
          <div className="flex flex-wrap gap-2 md:gap-2.5 mb-5 md:mb-7">
            {project.techStack.slice(0, 3).map(tech => (
              <span
                key={tech}
                className="border border-blue-400/30 text-slate-200 rounded-full text-xs md:text-sm px-3 py-1.5 md:px-4 md:py-2 font-semibold bg-gradient-to-r from-blue-900/40 via-indigo-900/40 to-purple-900/40 backdrop-blur-sm shadow-sm hover:shadow-md hover:border-blue-400/50 hover:from-blue-800/50 hover:via-indigo-800/50 hover:to-purple-800/50 transition-all"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="text-xs md:text-sm text-slate-400 font-semibold self-center px-2">
                +{project.techStack.length - 3} more
              </span>
            )}
          </div>
          <div className="mt-auto pt-4 md:pt-5 border-t border-slate-700/60">
            <span className="text-sm md:text-base font-semibold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:via-indigo-300 group-hover:to-purple-300 transition-all inline-flex items-center gap-2 group-hover:gap-3">
              View Details
              <svg className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1 text-blue-400 group-hover:text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );

  // ============================================
  // COMPONENTE: PROJECT MODAL
  // ============================================
  /**
   * Modal de detalhes do projeto
   * Reutiliza a mesma estrutura do ProjectsPage para consistência
   */
  const ProjectModal = ({ project, isOpen, onClose }) => {
    // Previne scroll do body quando modal aberto e adiciona listener ESC
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

    if (!project) return null;

    return (
      <AnimatePresence>
        {isOpen && (
          <>
          {/* ============================================
              BACKDROP - Fundo escuro com blur
              Cobre a tela inteira, fecha o modal ao clicar
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
            {/* Desktop: padding-top (pt-80 = 20rem) APENAS para ajustar a POSIÇÃO do modal, SEM alterar o tamanho */}
            <div className="min-h-screen flex items-start md:items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-6 pt-6 md:pt-80 md:pb-12">
              {/* ============================================
                  MODAL BOX - Card principal do modal
                  Tamanho menor (max-w-5xl) com max-height calculado para não cortar
                  Flex column para que o conteúdo possa fazer scroll interno
                  max-h MANTIDO: NÃO alterar o tamanho, apenas a posição (via padding-top do container)
                  - Mobile: calc(100vh - 3rem) = mantém como está (está perfeito)
                  - Desktop: calc(100vh - 10rem) = MANTIDO (não alterar)
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
  // RENDER
  // ============================================
  return (
    <section id="projects" className="py-20 md:py-32 bg-slate-900/95 backdrop-blur-xl relative overflow-hidden">
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

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-7xl font-black mb-4 md:mb-5 text-center tracking-tight px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: 'spring', stiffness: 80, damping: 15 }}
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-lg">
              Featured
            </span>{' '}
            <span className="bg-gradient-to-r from-blue-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent drop-shadow-lg">
              Projects
            </span>
          </motion.h2>
          <motion.p
            className="text-center text-slate-300 mb-8 md:mb-12 text-base md:text-lg lg:text-xl px-2 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: 'spring', stiffness: 80, damping: 15, delay: 0.1 }}
          >
            Hybrid projects combining Growth Engineering, Consumer Behavioral Psychology, and Front-End Development
          </motion.p>
          <motion.div
            className="text-center mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.a
              href="/projects"
              className="relative inline-flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-700 text-white rounded-full text-sm md:text-base font-bold shadow-2xl shadow-blue-600/40 hover:shadow-2xl hover:shadow-blue-600/60 transition-all border border-blue-500/30 hover:border-blue-400/50 overflow-hidden group"
              whileHover={{ scale: 1.05, x: 3 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Shine effect on hover */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <span className="relative z-10 flex items-center gap-2 text-white drop-shadow-lg">
                View All Projects
                <svg className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </motion.a>
          </motion.div>

          {/* Mobile Carousel */}
          <div className="md:hidden">
            <div className="relative">
              {/* Swipe Indicator Text */}
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

              <motion.div
                className="relative"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = Math.abs(offset.x) * velocity.x;
                  if (swipe < -10000) {
                    nextSlide();
                  } else if (swipe > 10000) {
                    prevSlide();
                  }
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <ProjectCard project={featuredProjects[currentIndex]} idx={currentIndex} />
                  </motion.div>
                </AnimatePresence>
              </motion.div>

              {/* Dots Indicator - Mobile */}
              <div className="flex justify-center items-center gap-3 mt-6">
                {featuredProjects.map((_, idx) => (
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

          {/* Desktop Grid */}
          <motion.div
            className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {featuredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: idx * 0.05, duration: 0.5, ease: 'easeOut' }}
                whileHover={{ y: -4, scale: 1.01 }}
              >
                <ProjectCard project={project} idx={idx} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      {/* Modal de Detalhes do Projeto */}
      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </section>
  );
};

export default Projects;
