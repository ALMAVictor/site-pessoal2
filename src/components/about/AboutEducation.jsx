import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGraduationCap, FaCode, FaBook } from 'react-icons/fa';

const education = [
  {
    institution: 'FIAP',
    degree: 'Software Engineering',
    period: '2024 - Present',
    description: 'Pursuing a comprehensive Software Engineering degree, focusing on modern web development, system architecture, and software design patterns.',
    icon: FaGraduationCap,
    color: 'from-blue-600 to-indigo-600',
  },
  {
    institution: 'Self-Taught',
    degree: 'Front-End Engineering',
    period: '2020 - Present',
    description: 'Mastered React, Next.js, TypeScript, and modern web development through hands-on projects and continuous learning.',
    icon: FaCode,
    color: 'from-indigo-600 to-purple-600',
  },
  {
    institution: 'Continuous Learning',
    degree: 'Consumer Behavioral Psychology & CRO',
    period: '2019 - Present',
    description: 'Deep study of Cialdini\'s principles, Fogg\'s Behavior Model, and Kahneman\'s insights on decision-making and cognitive biases.',
    icon: FaBook,
    color: 'from-purple-600 to-pink-600',
  },
];

const AboutEducation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100/30 to-indigo-100/30 rounded-full blur-3xl -z-0 hidden md:block" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } },
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
              Education &{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Learning
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Formal education and continuous self-learning shape my hybrid approach.
            </p>
          </motion.div>

          {/* Education Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {education.map((edu) => (
              <motion.div
                key={edu.institution}
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
                <div className={`mb-6 p-4 rounded-2xl bg-gradient-to-br ${edu.color} w-fit`}>
                  <edu.icon className="text-3xl text-white" />
                </div>

                {/* Period badge */}
                <div className="mb-4">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">{edu.period}</span>
                </div>

                {/* Content */}
                <h3 className={`text-2xl font-extrabold mb-2 tracking-tight bg-gradient-to-r ${edu.color} bg-clip-text text-transparent`}>
                  {edu.institution}
                </h3>
                <h4 className="text-lg font-bold text-slate-900 mb-3">
                  {edu.degree}
                </h4>
                <p className="text-slate-600 leading-relaxed flex-1">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutEducation;

