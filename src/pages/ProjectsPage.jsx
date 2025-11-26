import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FaExternalLinkAlt, FaGithub, FaTimes, FaClock, FaCode, FaChartLine, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { projectsData, categories, markets, getMarketInfo } from '../data/projectsData';

// Market Badge Component
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

// Project Card Component
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

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[2000]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            className="fixed inset-4 md:inset-8 lg:inset-16 z-[2001] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          >
            <div className="bg-slate-800/95 backdrop-blur-xl rounded-3xl shadow-2xl max-w-6xl mx-auto overflow-hidden border-2 border-blue-400/30">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 z-10 p-3 rounded-full bg-slate-700/90 backdrop-blur-sm hover:bg-slate-600 transition-all shadow-lg border-2 border-slate-600/60 hover:border-blue-400/50"
                aria-label="Close modal"
              >
                <FaTimes className="text-white" size={20} />
              </button>

              {/* Hero image/video */}
              <div className="relative h-64 md:h-96 bg-gradient-to-br from-slate-900 to-blue-900">
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-3xl md:text-4xl font-black text-white">{project.title}</h2>
                    {project.market && (
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                        <span className="text-lg">{getMarketInfo(project.market).flag}</span>
                        <span className="text-xs font-semibold text-white">{getMarketInfo(project.market).label}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 4).map(tech => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-12">
                {/* Stats row */}
                <div className="grid sm:grid-cols-3 gap-6 mb-8">
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-blue-900/40 via-indigo-900/40 to-blue-900/40 border-2 border-blue-400/30">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-blue-600/40 to-indigo-600/40">
                      <FaClock className="text-blue-300" size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-slate-300 font-medium">Duration</div>
                      <div className="text-lg font-bold text-white">{project.duration}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-green-900/40 via-emerald-900/40 to-green-900/40 border-2 border-green-400/30">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-green-600/40 to-emerald-600/40">
                      <FaChartLine className="text-green-300" size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-slate-300 font-medium">Result</div>
                      <div className="text-lg font-bold text-white line-clamp-1">{project.results}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-purple-900/40 via-indigo-900/40 to-purple-900/40 border-2 border-purple-400/30">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-purple-600/40 to-indigo-600/40">
                      <FaCode className="text-purple-300" size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-slate-300 font-medium">Tech Stack</div>
                      <div className="text-lg font-bold text-white">{project.techStack.length} technologies</div>
                    </div>
                  </div>
                </div>

                {/* Description sections */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">About the Project</h3>
                    <p className="text-slate-300 leading-relaxed text-lg">{project.fullDescription}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">The Challenge</h3>
                      <p className="text-slate-300 leading-relaxed">{project.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">The Solution</h3>
                      <p className="text-slate-300 leading-relaxed">{project.solution}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Tech Stack</h3>
                    <div className="flex flex-wrap gap-3">
                      {project.techStack.map(tech => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-gradient-to-r from-blue-900/40 via-indigo-900/40 to-purple-900/40 border border-blue-400/30 rounded-full text-slate-200 font-semibold text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.results && (
                    <div className="p-6 rounded-2xl bg-gradient-to-r from-green-900/40 via-emerald-900/40 to-green-900/40 border-2 border-green-400/30">
                      <h3 className="text-xl font-bold text-green-200 mb-2">Key Results</h3>
                      <p className="text-green-100 font-semibold">{project.results}</p>
                    </div>
                  )}
                </div>

                {/* CTA buttons */}
                <div className="flex flex-wrap gap-4 mt-10 pt-8 border-t-2 border-slate-700/60">
                  {project.demo !== '#' && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener"
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-full font-semibold shadow-lg shadow-blue-600/40 hover:shadow-xl hover:shadow-blue-600/60 transition-all border-2 border-blue-400/30"
                      whileHover={{ scale: 1.05, x: 3 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View Live Project <FaExternalLinkAlt size={14} />
                    </motion.a>
                  )}
                  {project.github !== '#' && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener"
                      className="flex items-center gap-2 px-6 py-3 border-2 border-slate-600/60 text-slate-300 rounded-full font-semibold hover:bg-slate-700/50 hover:border-blue-400/50 transition-all"
                      whileHover={{ scale: 1.05, x: 3 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FaGithub size={16} /> View Code
                    </motion.a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const ProjectsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedMarket, setSelectedMarket] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Set SEO title
  useEffect(() => {
    document.title = 'Featured Projects | Victor Mazoni - Hybrid Growth Engineer';
  }, []);

  // Check for mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Check for project query parameter on mount
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

  // Reset carousel index when filters change
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory, selectedMarket]);

  const filteredProjects = projectsData.filter(proj => {
    const categoryMatch = selectedCategory === 'all' || proj.category === selectedCategory;
    const marketMatch = selectedMarket === 'all' || proj.market === selectedMarket;
    return categoryMatch && marketMatch;
  });

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    setSearchParams({ project: project.id });
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    setSearchParams({});
    document.body.style.overflow = 'unset';
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="min-h-screen bg-slate-900/95 backdrop-blur-xl relative overflow-hidden">
      {/* Subtle gradient overlay - matching header */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-slate-900/95 to-indigo-900/20 pointer-events-none" />
      
      {/* Premium Decorative Background Elements - Static */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large gradient orb - top right - Static */}
        <div className="absolute -top-32 -right-32 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-gradient-to-bl from-blue-500/20 md:from-blue-500/30 via-indigo-500/15 md:via-indigo-500/20 to-purple-500/10 md:to-purple-500/15 rounded-full blur-3xl" />
        {/* Medium gradient orb - bottom left - Static */}
        <div className="absolute -bottom-32 -left-32 w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-gradient-to-tr from-indigo-500/15 md:from-indigo-500/25 via-purple-500/12 md:via-purple-500/20 to-blue-500/10 md:to-blue-500/15 rounded-full blur-3xl" />
        {/* Subtle grid pattern overlay - more refined */}
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
            {/* Header */}
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

            {/* Category filters */}
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

            {/* Market filters */}
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

            {/* Mobile Carousel */}
            {filteredProjects.length > 0 && (
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
                        <ProjectCard 
                          project={filteredProjects[currentIndex]} 
                          categories={categories}
                          onClick={() => handleProjectClick(filteredProjects[currentIndex])}
                        />
                      </motion.div>
                    </AnimatePresence>
                  </motion.div>

                  {/* Dots Indicator - Mobile */}
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

            {/* Desktop Grid */}
            <motion.div
              className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
              }}
            >
              <AnimatePresence mode="wait">
                {filteredProjects.map((project, idx) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20, scale: 0.98 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ delay: idx * 0.05, duration: 0.5, ease: 'easeOut' }}
                    whileHover={{ y: -4, scale: 1.01 }}
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

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default ProjectsPage;

