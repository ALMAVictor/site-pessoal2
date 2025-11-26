import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [status, setStatus] = useState('idle'); // idle, success, error

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const nome = form.nome?.value?.trim() || '';
    const mensagem = form.mensagem?.value?.trim() || '';
    const texto = `Hello, I'm ${nome}. I want to start a project.\n\nDetails: ${mensagem}`;
    const url = `https://wa.me/5516991023690?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank', 'noopener');
    setStatus('success');
    setTimeout(() => setStatus('idle'), 2400);
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-slate-50 via-blue-50/30 to-slate-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-200/20 to-pink-200/20 rounded-full blur-3xl -z-0" />

      <div className="max-w-2xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-slate-900 text-left">
            Let's Build Your{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Growth Engine.
            </span>
          </h2>
          <p className="mb-10 text-slate-700 font-semibold text-lg text-left leading-relaxed">
            Whether it's high-converting landing pages, a complete customer acquisition ecosystem, or CRO optimization—I deliver end-to-end solutions that translate human behavior into measurable revenue.<br/>
            Fill out the form and I'll get back to you within{' '}
            <span className="font-bold text-blue-700">24 hours</span>.
          </p>
          <motion.form
            className="flex flex-col gap-6 bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-8 md:p-10 border border-white/50"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div>
              <label htmlFor="nome" className="block text-slate-800 font-bold mb-2">Name</label>
              <input
                className="w-full rounded-xl p-4 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition bg-white/50 backdrop-blur-sm"
                name="nome"
                id="nome"
                type="text"
                required
                autoComplete="name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-slate-800 font-bold mb-2">Email</label>
              <input
                className="w-full rounded-xl p-4 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition bg-white/50 backdrop-blur-sm"
                name="email"
                id="email"
                type="email"
                autoComplete="email"
              />
            </div>
            <div>
              <label htmlFor="mensagem" className="block text-slate-800 font-bold mb-2">Your Message</label>
              <textarea
                className="w-full rounded-xl p-4 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition min-h-[140px] resize-none bg-white/50 backdrop-blur-sm"
                name="mensagem"
                id="mensagem"
                required
                placeholder="Tell me about your project. What are your goals? What challenge do you want to solve?"
              />
            </div>
            <motion.button
              className="mt-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-bold shadow-xl hover:shadow-2xl transition-all"
              type="submit"
              aria-label="Send message and start the project"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Start the Project →
            </motion.button>
          </motion.form>
          <AnimatePresence>
            {status === 'success' && (
              <motion.div
                className="mt-6 bg-gradient-to-r from-green-100 to-emerald-100 border border-green-300 rounded-2xl font-semibold text-green-800 p-4 text-center backdrop-blur-sm"
                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                Opening WhatsApp... If it doesn't open, check your pop-up blocker.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
