import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FaExternalLinkAlt, FaGithub, FaTimes, FaClock, FaCode, FaChartLine } from 'react-icons/fa';
import { projectsData, categories, markets, getMarketInfo } from '../data/projectsData';

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
            <div className="bg-white rounded-3xl shadow-2xl max-w-6xl mx-auto overflow-hidden">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 z-10 p-3 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-all shadow-lg"
                aria-label="Close modal"
              >
                <FaTimes className="text-slate-700" size={20} />
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
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-blue-50">
                    <div className="p-3 rounded-xl bg-blue-100">
                      <FaClock className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-slate-600 font-medium">Duration</div>
                      <div className="text-lg font-bold text-slate-900">{project.duration}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-green-50">
                    <div className="p-3 rounded-xl bg-green-100">
                      <FaChartLine className="text-green-600" size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-slate-600 font-medium">Result</div>
                      <div className="text-lg font-bold text-slate-900 line-clamp-1">{project.results}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-purple-50">
                    <div className="p-3 rounded-xl bg-purple-100">
                      <FaCode className="text-purple-600" size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-slate-600 font-medium">Tech Stack</div>
                      <div className="text-lg font-bold text-slate-900">{project.techStack.length} technologies</div>
                    </div>
                  </div>
                </div>

                {/* Description sections */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">About the Project</h3>
                    <p className="text-slate-700 leading-relaxed text-lg">{project.fullDescription}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">The Challenge</h3>
                      <p className="text-slate-700 leading-relaxed">{project.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">The Solution</h3>
                      <p className="text-slate-700 leading-relaxed">{project.solution}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Tech Stack</h3>
                    <div className="flex flex-wrap gap-3">
                      {project.techStack.map(tech => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-slate-100 rounded-full text-slate-700 font-semibold text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.results && (
                    <div className="p-6 rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200">
                      <h3 className="text-xl font-bold text-green-900 mb-2">Key Results</h3>
                      <p className="text-green-800 font-semibold">{project.results}</p>
                    </div>
                  )}
                </div>

                {/* CTA buttons */}
                <div className="flex flex-wrap gap-4 mt-10 pt-8 border-t border-slate-200">
                  {project.demo !== '#' && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener"
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
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
                      className="flex items-center gap-2 px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-full font-semibold hover:bg-slate-50 transition-all"
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Set SEO title
  useEffect(() => {
    document.title = 'Featured Projects | Victor Mazoni - Hybrid Growth Engineer';
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-blue-50/30 to-slate-50">
      <div className="pt-24 pb-12">
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
              <h1 className="text-5xl md:text-6xl font-black mb-4 text-slate-900 tracking-tight">
                Featured{' '}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Projects
                </span>
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
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
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                      : 'bg-white/80 backdrop-blur-sm border border-slate-200 text-slate-700 hover:bg-slate-50'
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
                      ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg'
                      : 'bg-white/80 backdrop-blur-sm border border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="mr-2">{market.flag}</span>
                  {market.label}
                </motion.button>
              ))}
            </motion.div>

            {/* Projects grid */}
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
              }}
            >
              <AnimatePresence mode="wait">
                {filteredProjects.map((project, idx) => (
                  <motion.div
                    key={project.id}
                    className="group bg-white/80 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden flex flex-col border border-white/50 hover:shadow-2xl transition-all cursor-pointer"
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: idx * 0.1, type: 'spring', stiffness: 100 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    onClick={() => handleProjectClick(project)}
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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
                    <div className="p-6 flex flex-col flex-1">
                      <div className="mb-2 flex items-center gap-2 flex-wrap">
                        <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">
                          {categories.find(c => c.id === project.category)?.label}
                        </span>
                        {project.market && <MarketBadge market={project.market} />}
                      </div>
                      <h3 className="text-xl font-extrabold text-slate-900 mb-3 tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-slate-600 mb-4 leading-relaxed flex-1 text-sm">
                        {project.description}
                      </p>
                      {project.results && (
                        <div className="mb-4 p-2 rounded-lg bg-green-50 border border-green-200">
                          <p className="text-xs font-bold text-green-800">
                            📈 {project.results}
                          </p>
                        </div>
                      )}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.techStack.slice(0, 3).map(tech => (
                          <span
                            key={tech}
                            className="border border-slate-200 text-slate-700 rounded-full text-xs px-2.5 py-1 font-semibold bg-slate-50/80"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 3 && (
                          <span className="text-xs text-slate-500 font-semibold">
                            +{project.techStack.length - 3} more
                          </span>
                        )}
                      </div>
                      <div className="mt-auto pt-4 border-t border-slate-100">
                        <span className="text-sm font-semibold text-blue-600 group-hover:text-blue-700 transition-colors">
                          View Details →
                        </span>
                      </div>
                    </div>
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
                <p className="text-slate-600 text-lg">No projects found in this category.</p>
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

