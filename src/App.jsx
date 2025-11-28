// ============================================
// APP.JSX - Componente Principal da Aplicação
// ============================================
// Gerencia rotas, layout e SEO de todas as páginas
// SPA (Single Page Application) com React Router

import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Results from './components/Results';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blog from './pages/Blog';
import ProjectsPage from './pages/ProjectsPage';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Sales from './pages/Sales';
import Services from './pages/Services';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import ContactPage from './pages/ContactPage';
import { useEffect } from 'react';
import { setSEOMetaTags } from './utils/seo';

/**
 * Componente: Layout
 * Wrapper comum para todas as páginas
 * Inclui Header, conteúdo principal e Footer
 * Gerencia SEO dinâmico baseado nas props
 * @param {ReactNode} children - Conteúdo da página
 * @param {string} seoTitle - Título para SEO
 * @param {string} seoDescription - Descrição para SEO
 * @param {string} seoImage - Imagem para Open Graph
 * @param {string} seoUrl - URL canônica
 */
function Layout({ children, seoTitle, seoDescription, seoImage, seoUrl }) {
  // Atualiza meta tags SEO quando as props mudam
  useEffect(() => {
    setSEOMetaTags({
      title: seoTitle,
      description: seoDescription,
      image: seoImage,
      url: seoUrl || (typeof window !== 'undefined' ? window.location.href : ''),
    });
  }, [seoTitle, seoDescription, seoImage, seoUrl]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

/**
 * Componente Principal: App
 * Define todas as rotas da aplicação
 * Suporta redirecionamento legacy para /?vendas
 */
function App() {
  const { pathname, search } = useLocation();
  
  // Suporte legacy: Redireciona /?vendas para /vendas
  if (pathname === '/' && search.includes('vendas')) {
    return <Navigate to="/vendas" replace />;
  }
  return (
    <Routes>
      {/* ============================================
          ROTA: Homepage (/)
          Seção principal com todas as seções
          ============================================ */}
      <Route
        path="/"
        element={
          <Layout seoTitle="Victor Mazoni | Hybrid Growth Engineer | Consumer Behavioral Psychology + Front-End Engineering">
            <Hero />
            <About />
            <Results />
            <Skills />
            <Projects />
            <Contact />
          </Layout>
        }
      />
      
      {/* ============================================
          ROTA: Projects (/projects)
          Página completa de projetos com filtros
          ============================================ */}
      <Route
        path="/projects"
        element={<Layout seoTitle="Featured Projects | Victor Mazoni - Hybrid Growth Engineer"><ProjectsPage /></Layout>}
      />
      
      {/* ============================================
          ROTA: Blog (/blog)
          Blog com artigos e vídeos do YouTube
          ============================================ */}
      <Route
        path="/blog"
        element={
          <Layout
            seoTitle="Multimedia Blog | Victor Mazoni - Growth Engineering Insights"
            seoDescription="Articles, videos, and insights on Growth Engineering, Consumer Behavioral Psychology, and Front-End Development. Learn from real-world applications and strategies."
            seoImage="/og-blog.jpg"
          >
            <Blog />
          </Layout>
        }
      />
      
      {/* ============================================
          ROTA: Vendas (/vendas)
          Página de vendas de landing pages
          ============================================ */}
      <Route
        path="/vendas"
        element={<Layout seoTitle="High-Converting Landing Pages for Paid Traffic | Victor Mazoni"><Sales /></Layout>}
      />
      
      {/* ============================================
          ROTA: Services (/services)
          Página de serviços oferecidos
          ============================================ */}
      <Route
        path="/services"
        element={<Layout seoTitle="Complete Growth Services | Victor Mazoni - Hybrid Growth Engineer"><Services /></Layout>}
      />
      
      {/* ============================================
          ROTA: About (/about)
          Página sobre Victor Mazoni
          ============================================ */}
      <Route
        path="/about"
        element={<Layout seoTitle="About Victor Mazoni | Hybrid Growth Engineer - Psychology & Code"><AboutPage /></Layout>}
      />
      
      {/* ============================================
          ROTA: Skills (/skills)
          Página de habilidades e expertise
          ============================================ */}
      <Route
        path="/skills"
        element={<Layout seoTitle="Skills & Expertise | Victor Mazoni - Technical & Strategic Arsenal"><SkillsPage /></Layout>}
      />
      
      {/* ============================================
          ROTA: Contact (/contact)
          Página de contato (LinkedIn)
          ============================================ */}
      <Route
        path="/contact"
        element={
          <Layout
            seoTitle="Contact Victor Mazoni | Let's Build Your Growth Engine"
            seoDescription="Get in touch to discuss your project. Whether it's high-converting landing pages, customer acquisition ecosystems, or CRO optimization—I deliver end-to-end solutions."
          >
            <ContactPage />
          </Layout>
        }
      />
      
      {/* ============================================
          ROTA: Fallback (404)
          Página não encontrada
          ============================================ */}
      <Route path="*" element={<Layout seoTitle="Página não encontrada | Victor Mazoni"><div className="h-64 flex flex-col items-center justify-center text-blue-700"><h1 className="text-3xl font-black">404</h1><p>Página não encontrada!</p></div></Layout>} />
    </Routes>
  );
}

export default App;
