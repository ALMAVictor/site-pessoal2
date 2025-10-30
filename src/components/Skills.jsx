const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-700 shrink-0 mt-1">
    <path d="M20 7L9 18L4 13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Skills = () => (
  <section id="skills" className="py-20 bg-blue-50">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-4xl md:text-5xl font-black mb-4 text-blue-900 text-center tracking-tight">Minhas Frentes de Atuação</h2>
      <p className="text-center text-blue-800/90 mb-14 font-semibold text-lg md:text-xl">Dois pilares que constroem resultados: <span className="underline decoration-2">Arsenal Técnico</span> + <span className="underline decoration-2">Arsenal Estratégico</span>.</p>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Pilar 1: Arsenal Técnico */}
        <div className="bg-white rounded-3xl shadow-[0_10px_30px_-12px_rgba(30,64,175,0.25)] p-8 md:p-10 border border-blue-100/70">
          <h3 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-6 leading-tight">Arsenal Técnico</h3>

          <div className="mb-7">
            <h4 className="text-xl font-bold text-blue-800 mb-3">Core Front‑End</h4>
            <ul className="space-y-2">
              <li className="flex gap-3 text-gray-700"><CheckIcon /><span><strong>React:</strong> Interfaces reativas, rápidas e escaláveis.</span></li>
              <li className="flex gap-3 text-gray-700"><CheckIcon /><span><strong>JavaScript (ES6+):</strong> Linguagem que move a web moderna.</span></li>
              <li className="flex gap-3 text-gray-700"><CheckIcon /><span><strong>TypeScript:</strong> Código seguro, legível e robusto para projetos complexos.</span></li>
            </ul>
          </div>

          <div className="mb-7">
            <h4 className="text-xl font-bold text-blue-800 mb-3">UI & Estilização</h4>
            <ul className="space-y-2">
              <li className="flex gap-3 text-gray-700"><CheckIcon /><span><strong>Tailwind CSS:</strong> Design ágil, responsivo e 100% customizado.</span></li>
              <li className="flex gap-3 text-gray-700"><CheckIcon /><span><strong>CSS3 / SASS:</strong> Arquitetura de estilos para produtos escaláveis.</span></li>
              <li className="flex gap-3 text-gray-700"><CheckIcon /><span><strong>Figma:</strong> Tradução fiel de UI/UX diretamente para o código.</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold text-blue-800 mb-3">Ecossistema & Ferramentas</h4>
            <ul className="space-y-2">
              <li className="flex gap-3 text-gray-700"><CheckIcon /><span><strong>Vite:</strong> Build tool veloz para desenvolvimento ágil.</span></li>
              <li className="flex gap-3 text-gray-700"><CheckIcon /><span><strong>Git / GitHub:</strong> Fluxos de versionamento confiáveis.</span></li>
              <li className="flex gap-3 text-gray-700"><CheckIcon /><span><strong>Node.js (Iniciante):</strong> Ambientes de dev e APIs de suporte.</span></li>
            </ul>
          </div>
        </div>

        {/* Pilar 2: Arsenal Estratégico */}
        <div className="bg-white rounded-3xl shadow-[0_10px_30px_-12px_rgba(30,64,175,0.25)] p-8 md:p-10 border border-blue-100/70">
          <h3 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-6 leading-tight">Arsenal Estratégico</h3>

          <div className="mb-7">
            <h4 className="text-xl font-bold text-blue-800 mb-3">Estratégia de Conversão</h4>
            <ul className="space-y-2">
              <li className="flex gap-3 text-gray-700"><CheckIcon /><span><strong>Funil de Vendas:</strong> Jornadas que transformam visitantes em clientes.</span></li>
              <li className="flex gap-3 text-gray-700"><CheckIcon /><span><strong>Copywriting:</strong> CTAs e mensagens orientadas à ação.</span></li>
            </ul>
          </div>

          <div className="mb-7">
            <h4 className="text-xl font-bold text-blue-800 mb-3">Posicionamento & Marca</h4>
            <ul className="space-y-2">
              <li className="flex gap-3 text-gray-700"><CheckIcon /><span><strong>Branding:</strong> Identidades autênticas com propósito.</span></li>
              <li className="flex gap-3 text-gray-700"><CheckIcon /><span><strong>Marketing de Conteúdo:</strong> Autoridade e engajamento contínuos.</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold text-blue-800 mb-3">Performance & Dados</h4>
            <ul className="space-y-2">
              <li className="flex gap-3 text-gray-700"><CheckIcon /><span><strong>SEO:</strong> Tráfego qualificado por posicionamento orgânico.</span></li>
              <li className="flex gap-3 text-gray-700"><CheckIcon /><span><strong>Analytics:</strong> Decisões guiadas por dados e ROI.</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Skills;
