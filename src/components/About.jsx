// About: seção de autoridade e posicionamento. Layout em 2 colunas
// (imagem + texto) melhora legibilidade e cria conexão humana.
const About = () => (
  <section id="about" className="py-20 bg-white">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-[1fr_1.5fr] gap-10 items-center">
        {/* Coluna 1: Foto/Avatar com borda e sombra premium */}
        <div className="flex justify-center md:justify-start">
          <img
            src="/victor1.JPG"
            alt="Foto profissional de Victor Mazoni"
            className="w-56 h-56 md:w-72 md:h-72 rounded-2xl object-cover shadow-[0_10px_30px_-12px_rgba(30,64,175,0.25)] border border-blue-100"
          />
        </div>

        {/* Coluna 2: Texto alinhado à esquerda para máxima legibilidade */}
        <div className="text-left">
          <h2 className="text-3xl md:text-4xl font-black mb-5 text-blue-900 leading-tight">Eu Sou o Dev que Entende de Vendas.</h2>
          <p className="text-gray-700 mb-5">O maior problema de 99% dos projetos digitais? O desenvolvedor não entende de marketing. E o marqueteiro não entende de código. O resultado é um site bonito que não gera um real.</p>
          <p className="text-gray-700 mb-5">Eu resolvo isso.</p>
          <p className="text-gray-700 mb-5">Sou Engenheiro de Software em formação (FIAP) e atuo como Estrategista de Marketing Digital desde 2019. Eu vivo confortavelmente nos dois mundos.</p>
          <p className="text-gray-700 mb-6">Projeto interfaces em React e Tailwind com a mesma facilidade que desenho um funil de vendas. Não entrego "só o código-fonte". Eu entrego a máquina de vendas completa, da primeira linha de código até a estratégia de conversão.</p>
          {/* Punchline destacada como reforço de posicionamento */}
          <p className="text-blue-900 font-bold mb-7">Meu foco não é seguir tendências. É criar resultados.</p>
          {/* CTA secundário em estilo outline, coerente com o sistema de botões */}
          <a href="#projects" className="inline-block px-6 py-3 border-2 border-blue-900 text-blue-900 rounded-md font-bold hover:bg-blue-900 hover:text-white transition">Ver meus projetos</a>
        </div>
      </div>
    </div>
  </section>
)

export default About;
