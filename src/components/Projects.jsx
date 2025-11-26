import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { projectsData, getMarketInfo } from '../data/projectsData';

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

// Get featured projects for home page
const featuredProjects = projectsData.filter(p => p.featured);

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const ProjectCard = ({ project, idx }) => (
    <Link to={`/projects?project=${project.id}`}>
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
    </Link>
  );

  return (
    <section id="projects" className="py-20 md:py-32 bg-slate-900/95 backdrop-blur-xl relative overflow-hidden">
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
    </section>
  );
};

export default Projects;
