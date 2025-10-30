import { motion } from 'framer-motion';

const pillars = [
  {
    title: 'Feito para Converter',
    desc: 'Não é só um site bonito. Cada elemento é desenhado estrategicamente para transformar seu visitante em um cliente.',
    icon: '💡',
  },
  {
    title: 'Seu Site no Ar em 7 Dias',
    desc: 'Meu processo é ágil. Após a aprovação do design, seu site estará online e pronto para vender em uma semana.',
    icon: '🚀',
  },
  {
    title: 'Risco Zero: 100% Satisfeito',
    desc: 'Meu compromisso é total. Farei todos os ajustes necessários até o projeto ficar exatamente como você imaginou.',
    icon: '✅',
  },
  {
    title: 'Suporte Humano (Sem Robôs)',
    desc: 'Acabou a enrolação. Você fala direto comigo, o criador do seu projeto, e tem respostas rápidas.',
    icon: '🤝',
  },
];

const secondary = [
  {
    title: 'Performance Absurda',
    desc: 'Carregamento instantâneo. Você nunca perde uma venda por lentidão.',
    icon: '⚡',
  },
  {
    title: 'Design Exclusivo',
    desc: 'Visual moderno e 100% alinhado à identidade visual do seu negócio.',
    icon: '🎨',
  },
  {
    title: 'Perfeito em Qualquer Tela',
    desc: 'Totalmente responsivo, do celular ao desktop.',
    icon: '📱',
  },
  {
    title: 'Pronto para Marketing',
    desc: 'Integrado com WhatsApp, Instagram, Analytics e o que mais você precisar.',
    icon: '🔗',
  },
];

const SalesBenefits = () => (
  <section className="bg-white py-14 px-4">
    <h2 className="text-3xl font-black text-blue-800 text-center mb-4">🚀 Seu Projeto Nivelado Acima da Concorrência</h2>
    <p className="max-w-2xl mx-auto text-center text-lg text-blue-700 mb-10 font-semibold">
      Aqui, mostramos os <span className="underline">4 pilares</span> que transformam seu site em uma máquina de vendas real, não apenas promessas.
    </p>
    <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-4 mb-10">
      {pillars.map((item, idx) => (
        <motion.div
          key={item.title}
          className="bg-blue-50 rounded-2xl shadow-md p-7 text-center border-2 border-blue-200 hover:scale-105 transition flex flex-col items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.55, delay: 0.13 * idx }}
        >
          <div className="text-4xl mb-3 select-none">{item.icon}</div>
          <h3 className="text-xl font-bold text-blue-800 mb-2">{item.title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
        </motion.div>
      ))}
    </div>
    <div className="max-w-3xl mx-auto mt-12">
      <h4 className="text-lg text-blue-900 font-semibold mb-4 text-center">E claro, toda solução inclui:</h4>
      <ul className="grid sm:grid-cols-2 gap-5">
        {secondary.map((item, i) => (
          <li key={item.title} className="flex items-start gap-4 bg-blue-50 rounded-xl shadow p-5 border border-blue-100">
            <span className="text-xl mt-1 select-none">{item.icon}</span>
            <div>
              <span className="font-bold text-blue-800 block">{item.title}</span>
              <span className="block text-gray-500 text-sm">{item.desc}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default SalesBenefits;

