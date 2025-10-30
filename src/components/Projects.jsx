const projects = [
  {
    title: 'Portfolio Moderno',
    description: 'Desafio: Criar um portfólio de alta performance com PWA, carregamento instantâneo e experiência fluida de navegação.',
    img: 'https://placehold.co/800x450/png?text=Portfolio+Screenshot',
    // video curto mostrando scroll/uso (opcional)
    video: '',
    techs: ['React', 'Vite', 'Tailwind'],
    demo: '#',
    github: '#'
  },
  {
    title: 'Blog Tech',
    description: 'Objetivo: Desenvolver um blog otimizado para SEO (MDX) focado em construir autoridade e ranqueamento orgânico.',
    img: 'https://placehold.co/800x450/png?text=Blog+Screenshot',
    video: '',
    techs: ['React', 'MDX'],
    demo: '#',
    github: '#'
  },
]

const Projects = () => (
  <section id="projects" className="py-20 bg-white">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-black mb-8 text-blue-900 text-center">Meus Projetos</h2>
      <div className="grid md:grid-cols-2 gap-10">
        {projects.map(proj => (
          <div
            key={proj.title}
            className="bg-white rounded-2xl shadow-[0_10px_30px_-12px_rgba(30,64,175,0.25)] hover:shadow-[0_18px_40px_-12px_rgba(30,64,175,0.35)] transition overflow-hidden flex flex-col hover:-translate-y-1.5"
          >
            {/* Mídia: vídeo em loop se disponível, senão imagem */}
            {proj.video ? (
              <video
                src={proj.video}
                className="w-full h-56 object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster={proj.img}
              />
            ) : (
              <img src={proj.img} alt={`Capa do projeto ${proj.title}`} className="w-full h-56 object-cover" />
            )}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-2xl font-extrabold text-blue-900 mb-2 tracking-tight">{proj.title}</h3>
              <p className="text-gray-700 mb-5 leading-relaxed">{proj.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {proj.techs.map(tech => (
                  <span key={tech} className="border border-blue-200 text-blue-800 rounded-full text-xs px-3 py-1 font-semibold bg-blue-50/60">{tech}</span>
                ))}
              </div>
              <div className="mt-auto flex flex-wrap gap-3">
                <a href={proj.demo} className="px-5 py-2.5 bg-amber-400 text-blue-900 rounded-md font-bold shadow-[0_10px_30px_-12px_rgba(251,191,36,0.6)] hover:bg-amber-300 transition" target="_blank" rel="noopener">
                  Ver Projeto Ao Vivo ↗
                </a>
                <a href={proj.github} className="px-5 py-2.5 border-2 border-blue-800 text-blue-900 rounded-md font-bold hover:bg-blue-50 transition" target="_blank" rel="noopener">
                  Ver no GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Projects;
