import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

// Hero: First fold of the site. Communicates the main value proposition
// quickly with strong typographic hierarchy and CTAs consistent with visual identity.
const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.03 : 0.12,
        delayChildren: isMobile ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: isMobile ? 10 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: isMobile
        ? { type: 'tween', duration: 0.3, ease: 'easeOut' }
        : { type: 'spring', stiffness: 80, damping: 15, mass: 0.8 },
    },
  };

  return (
    <section id="hero" className="pt-32 pb-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-950 text-center relative overflow-hidden">
    {/* Animated background gradient orbs - disabled on mobile for performance */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>

    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative z-10"
    >
      {/* Avatar with premium glow effect */}
      <motion.div
        variants={itemVariants}
        className="mb-8 flex justify-center"
      >
        <motion.img
          className="w-36 h-36 rounded-full border-4 border-white/20 shadow-2xl object-cover object-center"
          src="/victor1.JPG"
          alt="Victor Mazoni"
          whileHover={isMobile ? {} : { scale: 1.05, rotate: 1 }}
          transition={isMobile ? {} : { type: 'spring', stiffness: 200, damping: 15 }}
        />
        <div className="absolute inset-0 w-36 h-36 rounded-full bg-gradient-to-tr from-blue-400/30 to-indigo-400/30 blur-xl -z-10" />
      </motion.div>

      {/* Name with subtle animation */}
      <motion.h1
        variants={itemVariants}
        className="text-4xl md:text-5xl font-light text-blue-200/90 tracking-wide mb-2"
      >
        Victor Mazoni
      </motion.h1>

      {/* Main value proposition with premium typography */}
      <motion.p
        variants={itemVariants}
        className="text-4xl md:text-6xl lg:text-7xl font-black text-white mt-4 tracking-tight leading-tight"
      >
        <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
          Hybrid Growth Engineer
        </span>
        <br />
        <span className="text-3xl md:text-5xl lg:text-6xl font-bold text-blue-200/90 mt-2 block">
          Where Behavioral Psychology Meets Code
        </span>
      </motion.p>
      
      {/* Subtitle with key differentiator */}
      <motion.p
        variants={itemVariants}
        className="text-lg md:text-xl text-blue-200/80 mt-6 max-w-3xl mx-auto leading-relaxed"
      >
        I architect end-to-end customer acquisition ecosystems—from Paid Traffic strategy and Copywriting to high-converting landing pages and CRO optimization. Translating human behavior insights into measurable revenue growth.
      </motion.p>

      {/* CTAs with premium styling and micro-interactions */}
      <motion.div
        variants={itemVariants}
        className="flex justify-center gap-5 mt-12"
      >
        <motion.a
          href="#contact"
          className="group relative px-8 py-4 bg-white/10 md:backdrop-blur-md border border-white/20 text-white rounded-full font-semibold overflow-hidden"
          whileHover={isMobile ? {} : { scale: 1.05, borderColor: 'rgba(255,255,255,0.4)' }}
          whileTap={{ scale: 0.98 }}
          transition={isMobile ? {} : { type: 'spring', stiffness: 300, damping: 20 }}
        >
          <span className="relative z-10">Let's Talk</span>
          {!isMobile && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            />
          )}
        </motion.a>
        <motion.a
          href="#projects"
          className="px-8 py-4 border-2 border-white/30 rounded-full font-semibold text-white md:backdrop-blur-sm hover:bg-white/10 transition-all"
          whileHover={isMobile ? {} : { scale: 1.05, borderColor: 'rgba(255,255,255,0.5)' }}
          whileTap={{ scale: 0.98 }}
          transition={isMobile ? {} : { type: 'spring', stiffness: 300, damping: 20 }}
        >
          View Work
        </motion.a>
      </motion.div>

      {/* Social icons with premium hover effects */}
      <motion.div
        variants={itemVariants}
        className="flex justify-center gap-6 mt-12"
      >
        {[
          { Icon: FaGithub, href: 'https://github.com/ALMAVictor', label: 'GitHub' },
          { Icon: FaLinkedin, href: 'https://www.linkedin.com/in/victor-mazoni-2596171b7/', label: 'LinkedIn' },
          { Icon: FaInstagram, href: '#', label: 'Instagram' },
        ].map(({ Icon, href, label }, index) => (
          <motion.a
            key={label}
            href={href}
            aria-label={label}
            className="p-3 rounded-full bg-white/5 md:backdrop-blur-sm border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-all"
            whileHover={isMobile ? {} : { scale: 1.15, rotate: 5, borderColor: 'rgba(255,255,255,0.3)' }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: isMobile ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={isMobile 
              ? { delay: 0.3 + index * 0.05, type: 'tween', duration: 0.2 }
              : { delay: 0.8 + index * 0.1, type: 'spring', stiffness: 200, damping: 15 }
            }
          >
            <Icon size={20} />
          </motion.a>
        ))}
      </motion.div>
    </motion.div>

    {/* Scroll indicator - simplified on mobile */}
    <motion.div
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: isMobile ? 0.5 : 1.2, duration: 0.4 }}
    >
      <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
        {!isMobile && (
          <motion.div
            className="w-1.5 h-1.5 bg-white/50 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        )}
      </div>
    </motion.div>
  </section>
  );
};

export default Hero;
