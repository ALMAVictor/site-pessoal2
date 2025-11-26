import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaExternalLinkAlt, FaGithub, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
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
    <section id="projects" className="py-16 md:py-24 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100/30 to-indigo-100/30 rounded-full blur-3xl -z-0" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.h2
            className="text-3xl md:text-5xl lg:text-6xl font-black mb-3 md:mb-4 text-slate-900 text-center tracking-tight px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ type: 'spring', stiffness: 80, damping: 15 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            className="text-center text-slate-600 mb-6 md:mb-8 text-sm md:text-base lg:text-lg px-2"
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
              className="inline-flex items-center gap-2 px-5 py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-sm md:text-base font-semibold shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05, x: 3 }}
              whileTap={{ scale: 0.98 }}
            >
              View All Projects →
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
                      className="group bg-white/95 md:bg-white/80 md:backdrop-blur-md rounded-2xl md:rounded-3xl shadow-2xl md:shadow-xl overflow-hidden flex flex-col border border-slate-200/50 md:border-white/50 hover:shadow-2xl transition-all cursor-pointer"
                      whileHover={typeof window !== 'undefined' && window.innerWidth > 768 ? { y: -8, scale: 1.02 } : {}}
                    >
                      {/* Media: video loop if available, otherwise image */}
                      <div className="relative overflow-hidden">
                        {featuredProjects[currentIndex].videoId ? (
                          <div className="w-full h-44 md:h-56 bg-gradient-to-br from-slate-900 to-blue-900 flex items-center justify-center">
                            <div className="text-white text-4xl">▶</div>
                          </div>
                        ) : (
                          <motion.img
                            src={featuredProjects[currentIndex].image}
                            alt={`${featuredProjects[currentIndex].title} project cover`}
                            className="w-full h-44 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                            whileHover={{ scale: 1.1 }}
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        {featuredProjects[currentIndex].featured && (
                          <div className="absolute top-3 right-3 md:top-4 md:right-4 px-2.5 py-1 md:px-3 md:py-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-white text-[10px] md:text-xs font-bold shadow-lg">
                            ⭐ Featured
                          </div>
                        )}
                      </div>
                      <div className="p-5 md:p-6 lg:p-8 flex flex-col flex-1">
                        <div className="mb-2.5 md:mb-2">
                          {featuredProjects[currentIndex].market && <MarketBadge market={featuredProjects[currentIndex].market} />}
                        </div>
                        <h3 className="text-lg md:text-xl lg:text-2xl font-extrabold text-slate-900 mb-2 md:mb-3 tracking-tight leading-tight">{featuredProjects[currentIndex].title}</h3>
                        <p className="text-slate-600 mb-3 md:mb-4 leading-relaxed flex-1 text-sm md:text-base line-clamp-3">{featuredProjects[currentIndex].description}</p>
                        {featuredProjects[currentIndex].results && (
                          <div className="mb-3 md:mb-4 p-2.5 md:p-3 rounded-lg md:rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200">
                            <p className="text-[11px] md:text-xs lg:text-sm font-bold text-green-800 leading-tight">
                              📈 Result: {featuredProjects[currentIndex].results}
                            </p>
                          </div>
                        )}
                        <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
                          {featuredProjects[currentIndex].techStack.slice(0, 3).map(tech => (
                            <span
                              key={tech}
                              className="border border-slate-200 text-slate-700 rounded-full text-[10px] md:text-xs px-2.5 py-1 md:px-3 md:py-1.5 font-semibold bg-slate-50/90 md:bg-slate-50/80 backdrop-blur-sm"
                            >
                              {tech}
                            </span>
                          ))}
                          {featuredProjects[currentIndex].techStack.length > 3 && (
                            <span className="text-[10px] md:text-xs text-slate-500 font-semibold self-center">
                              +{featuredProjects[currentIndex].techStack.length - 3} more
                            </span>
                          )}
                        </div>
                        <div className="mt-auto pt-3 md:pt-4 border-t border-slate-100">
                          <span className="text-xs md:text-sm font-semibold text-blue-600 group-hover:text-blue-700 transition-colors inline-flex items-center gap-1">
                            View Details
                            <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

            {/* Navigation Arrows - Hidden on mobile, visible on desktop */}
            {featuredProjects.length > 1 && (
              <>
                <motion.button
                  onClick={prevSlide}
                  className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 shadow-xl hover:shadow-2xl transition-all text-slate-700 hover:text-blue-600 hover:bg-white"
                  whileHover={{ scale: 1.1, x: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Previous project"
                >
                  <FaChevronLeft size={20} />
                </motion.button>
                <motion.button
                  onClick={nextSlide}
                  className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 shadow-xl hover:shadow-2xl transition-all text-slate-700 hover:text-blue-600 hover:bg-white"
                  whileHover={{ scale: 1.1, x: 2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Next project"
                >
                  <FaChevronRight size={20} />
                </motion.button>
              </>
            )}

            {/* Dots Indicator - Premium Mobile Design */}
            {featuredProjects.length > 1 && (
              <div className="flex justify-center items-center gap-2.5 md:gap-2 mt-6 md:mt-8">
                {featuredProjects.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`rounded-full transition-all ${
                      index === currentIndex
                        ? 'h-2.5 md:h-2 w-10 md:w-8 bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg shadow-blue-500/30'
                        : 'h-2.5 md:h-2 w-2.5 md:w-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                    whileHover={{ scale: 1.2 }}
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
