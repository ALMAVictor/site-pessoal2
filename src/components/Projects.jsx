import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { projectsData, getMarketInfo } from '../data/projectsData';

// Market Badge Component
const MarketBadge = ({ market }) => {
  const marketInfo = getMarketInfo(market);
  if (!marketInfo || marketInfo.id === 'all') return null;
  
  return (
    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200 shadow-sm">
      <span className="text-sm">{marketInfo.flag}</span>
      <span className="text-xs font-semibold text-slate-700">{marketInfo.label}</span>
    </div>
  );
};

// Get featured projects for home page
const featuredProjects = projectsData.filter(p => p.featured);

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragX, setDragX] = useState(0);
  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredProjects.length);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };
  
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const handleDragEnd = (event, info) => {
    const threshold = 50; // Minimum drag distance to trigger slide
    if (Math.abs(info.offset.x) > threshold) {
      if (info.offset.x > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
    setDragX(0);
  };

  return (
    <section id="projects" className="py-20 md:py-32 bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/40 relative overflow-hidden">
      {/* Premium Decorative Background Elements - Optimized */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large gradient orb - top right - Static on mobile, animated on desktop */}
        <motion.div
          className="absolute -top-32 -right-32 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-gradient-to-bl from-blue-300/20 md:from-blue-300/30 via-indigo-300/15 md:via-indigo-300/20 to-purple-300/10 md:to-purple-300/15 rounded-full blur-3xl"
          animate={typeof window !== 'undefined' && window.innerWidth > 768 ? {
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          } : {}}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        {/* Medium gradient orb - bottom left - Static on mobile */}
        <motion.div
          className="absolute -bottom-32 -left-32 w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-gradient-to-tr from-indigo-300/15 md:from-indigo-300/25 via-purple-300/12 md:via-purple-300/20 to-pink-300/10 md:to-pink-300/15 rounded-full blur-3xl"
          animate={typeof window !== 'undefined' && window.innerWidth > 768 ? {
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.25, 0.15],
          } : {}}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
        {/* Subtle grid pattern overlay - more refined */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.02)_1px,transparent_1px)] bg-[size:32px_32px] opacity-30 md:opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-7xl font-black mb-4 md:mb-5 text-slate-900 text-center tracking-tight px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: 'spring', stiffness: 80, damping: 15 }}
          >
            <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
              Featured
            </span>{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>
          <motion.p
            className="text-center text-slate-600 mb-8 md:mb-12 text-base md:text-lg lg:text-xl px-2 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: 'spring', stiffness: 80, damping: 15, delay: 0.1 }}
          >
            Hybrid projects combining Growth Engineering, Behavioral Psychology, and Front-End Development
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
          {/* Premium Carousel - Compact with Swipe */}
          <div className="relative max-w-4xl mx-auto">
            {/* Swipe Indicator for Mobile */}
            <div className="md:hidden flex items-center justify-center gap-2 mb-4">
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                <span>Swipe</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>

            {/* Carousel Container */}
            <motion.div
              className="relative overflow-hidden rounded-2xl md:rounded-3xl touch-pan-y"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.3}
              onDrag={(event, info) => setDragX(info.offset.x)}
              onDragEnd={handleDragEnd}
              style={{ cursor: 'grab', touchAction: 'pan-y pinch-zoom' }}
              whileDrag={{ cursor: 'grabbing', scale: 0.98 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: dragX || 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ 
                    type: 'spring', 
                    stiffness: 300, 
                    damping: 30,
                    opacity: { duration: 0.2 }
                  }}
                  className="w-full"
                >
                  <Link
                    to={`/projects?project=${featuredProjects[currentIndex].id}`}
                    className="block"
                    onClick={(e) => {
                      // Prevent navigation if user is dragging
                      if (Math.abs(dragX) > 10) {
                        e.preventDefault();
                      }
                    }}
                  >
                    <motion.div
                      className="group relative bg-white/95 md:bg-white/90 md:backdrop-blur-xl rounded-2xl md:rounded-3xl shadow-2xl md:shadow-2xl overflow-hidden flex flex-col border border-slate-200/60 md:border-white/70 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] transition-all cursor-pointer"
                      whileHover={typeof window !== 'undefined' && window.innerWidth > 768 ? { y: -12, scale: 1.02 } : {}}
                    >
                      {/* Premium shine effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-blue-50/0 group-hover:from-white/20 group-hover:via-transparent group-hover:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl md:rounded-3xl" />
                      {/* Subtle border glow */}
                      <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-r from-blue-500/0 via-indigo-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:via-indigo-500/10 group-hover:to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-xl" />
                      {/* Media: video loop if available, otherwise image */}
                      <div className="relative overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
                        {featuredProjects[currentIndex].videoId ? (
                          <div className="w-full h-48 md:h-64 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center">
                            <div className="text-white text-5xl">▶</div>
                          </div>
                        ) : (
                          <motion.img
                            src={featuredProjects[currentIndex].image}
                            alt={`${featuredProjects[currentIndex].title} project cover`}
                            className="w-full h-48 md:h-64 object-cover md:group-hover:scale-110 transition-transform duration-300 md:duration-500 ease-out"
                            loading="lazy"
                            decoding="async"
                            whileHover={typeof window !== 'undefined' && window.innerWidth > 768 ? { scale: 1.1 } : {}}
                          />
                        )}
                        {/* Enhanced gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        {/* Subtle shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        {featuredProjects[currentIndex].featured && (
                          <motion.div
                            className="absolute top-4 right-4 px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-500 rounded-full text-white text-xs md:text-sm font-bold shadow-xl backdrop-blur-sm border border-white/20"
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: 'spring', stiffness: 400 }}
                          >
                            ⭐ Featured
                          </motion.div>
                        )}
                      </div>
                      <div className="p-6 md:p-7 lg:p-10 flex flex-col flex-1 relative z-10">
                        <div className="mb-3 md:mb-3">
                          {featuredProjects[currentIndex].market && <MarketBadge market={featuredProjects[currentIndex].market} />}
                        </div>
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-slate-900 mb-3 md:mb-4 tracking-tight leading-tight bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">{featuredProjects[currentIndex].title}</h3>
                        <p className="text-slate-600 mb-4 md:mb-5 leading-relaxed flex-1 text-sm md:text-base lg:text-lg line-clamp-3">{featuredProjects[currentIndex].description}</p>
                        {featuredProjects[currentIndex].results && (
                          <div className="mb-4 md:mb-5 p-3 md:p-4 rounded-xl md:rounded-2xl bg-gradient-to-r from-green-50 via-emerald-50 to-green-50 border border-green-200/60 shadow-sm">
                            <p className="text-xs md:text-sm lg:text-base font-bold text-green-800 leading-tight">
                              📈 <span className="text-green-700">Result:</span> {featuredProjects[currentIndex].results}
                            </p>
                          </div>
                        )}
                        <div className="flex flex-wrap gap-2 md:gap-2.5 mb-5 md:mb-7">
                          {featuredProjects[currentIndex].techStack.slice(0, 3).map(tech => (
                            <span
                              key={tech}
                              className="border border-slate-200/80 text-slate-700 rounded-full text-xs md:text-sm px-3 py-1.5 md:px-4 md:py-2 font-semibold bg-slate-50/95 md:bg-white/60 backdrop-blur-sm shadow-sm hover:shadow-md hover:border-blue-300/50 transition-all"
                            >
                              {tech}
                            </span>
                          ))}
                          {featuredProjects[currentIndex].techStack.length > 3 && (
                            <span className="text-xs md:text-sm text-slate-500 font-semibold self-center px-2">
                              +{featuredProjects[currentIndex].techStack.length - 3} more
                            </span>
                          )}
                        </div>
                        <div className="mt-auto pt-4 md:pt-5 border-t border-slate-200/60">
                          <span className="text-sm md:text-base font-semibold text-blue-600 group-hover:text-blue-700 transition-colors inline-flex items-center gap-2 group-hover:gap-3">
                            View Details
                            <svg className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              </AnimatePresence>
            </motion.div>


            {/* Dots Indicator - Premium Design */}
            {featuredProjects.length > 1 && (
              <div className="flex justify-center items-center gap-3 md:gap-2.5 mt-8 md:mt-10">
                {featuredProjects.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`rounded-full transition-all ${
                      index === currentIndex
                        ? 'h-3 md:h-2.5 w-12 md:w-10 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 shadow-xl shadow-blue-500/40 ring-2 ring-blue-200/50'
                        : 'h-3 md:h-2.5 w-3 md:w-2.5 bg-slate-300/80 hover:bg-slate-400/80 hover:scale-110'
                    }`}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
