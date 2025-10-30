import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [status, setStatus] = useState('idle'); // idle, success, error

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const nome = form.nome?.value?.trim() || '';
    const mensagem = form.mensagem?.value?.trim() || '';
    const texto = `Olá, sou ${nome}. Quero iniciar um projeto.\n\nDetalhes: ${mensagem}`;
    const url = `https://wa.me/5516991023690?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank', 'noopener');
    setStatus('success');
    setTimeout(() => setStatus('idle'), 2400);
  }

  return (
    <section id="contact" className="py-20 bg-blue-50">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-black mb-4 text-blue-900 text-left">Tire Sua Ideia do Papel.</h2>
        <p className="mb-10 text-blue-900/90 font-semibold text-lg text-left">
          Seja para um projeto de branding de luxo, um site de alta performance ou uma estratégia de growth, este é o primeiro passo.<br/>
          Preencha o formulário e retornarei em até <span className="font-bold text-blue-800">24 horas</span>.
        </p>
        <form className="flex flex-col gap-5 bg-white rounded-2xl shadow-md p-8 border border-blue-100"
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="nome" className="block text-blue-800 font-bold mb-1">Nome</label>
            <input className="w-full rounded-md p-3 border border-blue-200 focus:border-blue-600 outline-none focus:ring-2 focus:ring-blue-200 transition" name="nome" id="nome" type="text" required autoComplete="name" />
          </div>
          <div>
            <label htmlFor="email" className="block text-blue-800 font-bold mb-1">Email</label>
            <input className="w-full rounded-md p-3 border border-blue-200 focus:border-blue-600 outline-none focus:ring-2 focus:ring-blue-200 transition" name="email" id="email" type="email" autoComplete="email" />
          </div>
          <div>
            <label htmlFor="mensagem" className="block text-blue-800 font-bold mb-1">Sua Mensagem</label>
            <textarea className="w-full rounded-md p-3 border border-blue-200 focus:border-blue-600 outline-none focus:ring-2 focus:ring-blue-200 transition min-h-[120px]"
              name="mensagem" id="mensagem" required
              placeholder="Me conte sobre seu projeto. Quais são seus objetivos? Qual desafio você quer resolver?" />
          </div>
          <button
            className="mt-2 px-8 py-3 bg-blue-700 text-white rounded-md font-bold shadow-[0_10px_30px_-12px_rgba(30,64,175,0.35)] hover:bg-blue-800 hover:scale-[1.02] transition focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white"
            type="submit"
            aria-label="Enviar mensagem e iniciar o projeto"
          >
            Iniciar o Projeto ↗
          </button>
        </form>
        <AnimatePresence>
          {status === 'success' && (
            <motion.div
              className="mt-4 bg-green-100 border border-green-300 rounded font-semibold text-green-700 p-3 text-center"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
            >
              Abrindo WhatsApp... Caso não abra, verifique o bloqueio de pop‑ups.
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Contact;
