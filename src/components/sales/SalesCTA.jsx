import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SalesCTA = () => {
  const [status, setStatus] = useState('idle');

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('success');
    setTimeout(()=>setStatus('idle'), 2300);
  }

  return (
    <section id="sales-cta" className="py-16 px-4 bg-blue-700 text-white text-center">
      <h2 className="text-3xl font-bold mb-2">Pronto para vender mais com seu novo site?</h2>
      <p className="mb-8 text-lg">Peça um orçamento sem compromisso ou fale comigo no WhatsApp.</p>
      <div className="flex flex-col md:flex-row gap-5 justify-center items-center mb-6">
        <motion.a
          href="https://wa.me/5516991023690"
          target="_blank"
          rel="noopener"
          className="px-8 py-3 bg-green-500 rounded-full text-lg font-semibold shadow hover:bg-green-600 transition focus:outline-none focus:ring-2 ring-offset-2 ring-green-400"
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ repeat: Infinity, duration: 2, repeatType: 'loop', ease: 'easeInOut' }}
          aria-label="Falar no WhatsApp"
        >
          Falar no WhatsApp
        </motion.a>
        <form className="bg-white text-left rounded-lg shadow-md p-6 w-full max-w-md mx-auto md:mx-0" onSubmit={handleSubmit}>
          <h3 className="text-blue-700 font-bold mb-2 text-lg">Prefere ser contatado?</h3>
          <input className="rounded p-2 border border-blue-200 w-full mb-3 text-blue-900 focus:border-blue-600 outline-none focus:ring-2 focus:ring-blue-200 transition" type="text" name="nome" placeholder="Seu nome" required />
          <input className="rounded p-2 border border-blue-200 w-full mb-3 text-blue-900 focus:border-blue-600 outline-none focus:ring-2 focus:ring-blue-200 transition" type="tel" name="whatsapp" placeholder="WhatsApp" required />
          <select name="interesse" className="rounded p-2 border border-blue-200 w-full mb-3 text-blue-900 focus:border-blue-600 outline-none focus:ring-2 focus:ring-blue-200 transition">
            <option value="Landing Page">Landing Page</option>
            <option value="Site Completo">Site Completo</option>
            <option value="Dúvida">Dúvida</option>
          </select>
          <button
            className="bg-blue-700 mt-2 w-full text-white py-2 rounded font-bold hover:bg-blue-900 transition focus:outline-none focus:ring-2 ring-offset-2 ring-blue-700 relative overflow-hidden group"
            type="submit"
            aria-label="Solicitar contato"
          >
            <span className="relative z-10">Solicitar contato</span>
            <span className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-10 transition"/>
          </button>
          <AnimatePresence>
            {status === 'success' && (
              <motion.div
                className="mt-3 bg-green-100 border border-green-300 rounded font-semibold text-green-700 p-3 text-center"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
              >
                Mensagem enviada! Em breve retorno para você ;)
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </div>
      <p className="text-blue-100 text-xs mt-8">Entrarei em contato em até 1 dia útil. Atendimento humanizado, direto comigo ;) </p>
    </section>
  )
}

export default SalesCTA;
