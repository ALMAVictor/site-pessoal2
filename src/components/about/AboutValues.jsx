import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBrain, FaCode, FaRocket, FaChartLine, FaHandshake, FaLightbulb } from 'react-icons/fa';

const values = [
  {
    title: 'Psychology First',
    description: 'Every decision is grounded in consumer behavioral psychology principles. I understand why consumers act, not just how to make them act.',
    icon: FaBrain,
    color: 'from-blue-600 to-indigo-600',
  },
  {
    title: 'Code with Purpose',
    description: 'I don\'t just write code—I architect solutions that translate human behavior insights into measurable business outcomes.',
    icon: FaCode,
    color: 'from-indigo-600 to-purple-600',
  },
  {
    title: 'Data-Driven',
    description: 'Every optimization is backed by data. A/B testing, analytics, and funnel analysis guide every decision I make.',
    icon: FaChartLine,
    color: 'from-purple-600 to-pink-600',
  },
  {
    title: 'End-to-End Thinking',
    description: 'I design complete customer acquisition ecosystems—from strategy to execution, from psychology to code.',
    icon: FaRocket,
    color: 'from-pink-600 to-red-600',
  },
  {
    title: 'Results Focused',
    description: 'My work is measured by impact: conversion rates, CPA reduction, revenue growth. Not just deliverables.',
    icon: FaLightbulb,
    color: 'from-red-600 to-orange-600',
  },
  {
    title: 'Continuous Learning',
    description: 'The intersection of psychology, marketing, and engineering is constantly evolving. I stay ahead of the curve.',
    icon: FaHandshake,
    color: 'from-orange-600 to-yellow-600',
  },
];

const AboutValues = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-100/20 to-purple-100/20 rounded-full blur-3xl -z-0 hidden md:block" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
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
            className="text-center mb-16"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-slate-900 tracking-tight">
              My{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              The principles that guide my work and shape how I approach every project.
            </p>
          </motion.div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <motion.div
                key={value.title}
                className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 border border-white/50 hover:shadow-2xl transition-shadow flex flex-col"
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.9 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.4, ease: 'easeOut' },
                  },
                }}
              >
                {/* Icon */}
                <div className={`mb-6 p-4 rounded-2xl bg-gradient-to-br ${value.color} w-fit`}>
                  <value.icon className="text-3xl text-white" />
                </div>

                {/* Content */}
                <h3 className={`text-2xl font-extrabold mb-3 tracking-tight bg-gradient-to-r ${value.color} bg-clip-text text-transparent`}>
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed flex-1">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutValues;

