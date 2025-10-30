import { motion } from 'framer-motion';

// Hero: primeira dobra do site. Responsável por comunicar
// a proposta de valor principal rapidamente, com forte hierarquia
// tipográfica e CTAs consistentes com a identidade visual.
const Hero = () => (
  // Fundo em gradiente azul-escuro para contrastar com o texto branco
  // e dar clima premium; padding superior para compensar header fixo
  <section id="hero" className="pt-28 pb-20 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-center relative overflow-visible">
    {/* Avatar/Foto: humaniza a mensagem e cria conexão visual */}
    <motion.img
      className="w-32 h-32 rounded-full mb-6 mx-auto border-4 border-white/90 shadow-xl object-cover object-center"
      src="/victor1.JPG"
      alt="Foto de Victor Mazoni"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.1 }}
    />

    {/* H1: nome em menor destaque que a proposta de valor (H2),
       reforçando foco no benefício para o visitante */}
    <motion.h1
      className="text-3xl md:text-4xl font-bold text-blue-200"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.25 }}
    >
      Victor Mazoni
    </motion.h1>

    {/* H2: proposta de valor. Maior peso e tamanho para ser o foco visual */}
    <motion.p
      className="text-4xl md:text-6xl font-extrabold text-white mt-3 tracking-tight"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.4 }}
    >
      Crio Experiências Digitais Que Deixam Marcas.
    </motion.p>

    {/* CTAs: sistema premium com hierarquia clara
       - Primário branco: ação principal (contato/conversão)
       - Secundário outline: descoberta (projetos) */}
    <motion.div
      className="flex justify-center gap-4 mt-8"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.55 }}
    >
      <a href="#contact" className="px-7 py-3 md:px-8 md:py-3.5 bg-white text-blue-900 rounded-md font-bold shadow-[0_10px_30px_-12px_rgba(255,255,255,0.35)] hover:bg-blue-50 transition">Fale comigo</a>
      <a href="#projects" className="px-7 py-3 md:px-8 md:py-3.5 border-2 border-white rounded-md font-bold text-white hover:bg-white hover:text-blue-900 transition">Meus projetos</a>
    </motion.div>

    {/* Ícones sociais opcionais: reforçam presença e facilitam navegação
       - Mantidos discretos para não competir com os CTAs */}
    <motion.div
      className="flex space-x-4 justify-center mt-8 text-white/90"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.7 }}
    >
      <a href="#" title="Github" className="hover:text-white">
        <svg width="28" height="28" fill="currentColor"><circle cx="14" cy="14" r="13" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
      </a>
      <a href="#" title="LinkedIn" className="hover:text-white">
        <svg width="28" height="28" fill="currentColor"><circle cx="14" cy="14" r="13" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
      </a>
      <a href="#" title="Instagram" className="hover:text-white">
        <svg width="28" height="28" fill="currentColor"><circle cx="14" cy="14" r="13" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
      </a>
    </motion.div>
  </section>
);

export default Hero;
