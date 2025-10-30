const Icon = ({ path }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white/80 hover:text-white transition">
    <path d={path} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Footer = () => (
  <footer className="mt-auto bg-gradient-to-b from-blue-900 via-blue-900 to-blue-950 text-white/90">
    <div className="max-w-6xl mx-auto px-6 py-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
      {/* Branding */}
      <div>
        <div className="text-2xl font-black tracking-tight">Victor</div>
        <p className="text-white/70 mt-2 leading-relaxed">
          Dev que entende de vendas. Construo experiências digitais que deixam marcas e geram resultados reais.
        </p>
      </div>

      {/* Navegação rápida */}
      <div>
        <div className="font-bold text-white mb-3">Navegação</div>
        <ul className="space-y-2 text-white/80">
          <li><a href="#about" className="hover:text-white transition">Sobre</a></li>
          <li><a href="#skills" className="hover:text-white transition">Frentes de Atuação</a></li>
          <li><a href="#projects" className="hover:text-white transition">Projetos</a></li>
          <li><a href="/blog" className="hover:text-white transition">Blog</a></li>
          <li><a href="/vendas" className="hover:text-white transition">Vendas</a></li>
        </ul>
      </div>

      {/* Contato */}
      <div>
        <div className="font-bold text-white mb-3">Contato</div>
        <ul className="space-y-2 text-white/80">
          <li><a href="#contact" className="hover:text-white transition">Iniciar o Projeto ↗</a></li>
          <li><a href="https://wa.me/5516991023690" target="_blank" rel="noopener" className="hover:text-white transition">WhatsApp</a></li>
          <li><a href="mailto:contato@victormazoni.dev" className="hover:text-white transition">contato@victormazoni.dev</a></li>
        </ul>
      </div>

      {/* Sociais */}
      <div>
        <div className="font-bold text-white mb-3">Redes</div>
        <div className="flex items-center gap-4">
          {/* LinkedIn */}
          <a href="#" aria-label="LinkedIn">
            <Icon path="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2c-1.1 0-2 .9-2 2v7h-4v-7a6 6 0 0 1 6-6Z M6 9H2v12h4V9Zm2-4a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z"/>
          </a>
          {/* GitHub */}
          <a href="#" aria-label="GitHub">
            <Icon path="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 19 2.77 5.07 5.07 0 0 0 18.91 0S17.73.35 15 2.34a13.38 13.38 0 0 0-6 0C6.27.35 5.09 0 5.09 0A5.07 5.07 0 0 0 5 2.77 5.44 5.44 0 0 0 3.5 8.5c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 21.13V24"/>
          </a>
          {/* Instagram */}
          <a href="#" aria-label="Instagram">
            <Icon path="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5a5 5 0 1 0 0 10a5 5 0 0 0 0-10Zm6-1.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2Z"/>
          </a>
        </div>
      </div>
    </div>

    {/* Barra inferior */}
    <div className="border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-5 text-center text-white/60 text-sm">
        &copy; {new Date().getFullYear()} Victor Mazoni · Todos os direitos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
