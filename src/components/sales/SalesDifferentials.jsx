const items = [
  {
    title: 'Entrega rápida',
    desc: 'Seu site pronto em até 7 dias.',
  },
  {
    title: 'Atualizações fáceis',
    desc: 'Você poderá pedir ajustes e crescer junto com o seu projeto.',
  },
  {
    title: 'Garantia de satisfação',
    desc: 'Farei ajustes até você ficar 100% satisfeito.',
  },
  {
    title: 'Código limpo e seguro',
    desc: 'Utilizo tecnologias modernas e seguras em todos os projetos.',
  },
];

const SalesDifferentials = () => (
  <section className="bg-gradient-to-r from-blue-100 to-blue-50 py-14 px-4">
    <h2 className="text-2xl font-bold text-blue-800 text-center mb-8">Diferenciais</h2>
    <div className="max-w-4xl mx-auto flex flex-wrap gap-7 justify-center">
      {items.map(item => (
        <div key={item.title} className="flex-1 min-w-[220px] bg-white rounded-lg shadow p-6 text-center border border-blue-100">
          <h3 className="font-bold text-blue-700 mb-1 text-lg">{item.title}</h3>
          <p className="text-gray-500 text-sm">{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default SalesDifferentials;
