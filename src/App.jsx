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
import { useEffect } from 'react';

function Layout({ children, seoTitle }) {
  useEffect(() => {
    document.title = seoTitle;
  }, [seoTitle]);
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

function App() {
  const { pathname, search } = useLocation();
  // Suporte legacy para /?vendas
  if (pathname === '/' && search.includes('vendas')) {
    return <Navigate to="/vendas" replace />;
  }
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout seoTitle="Victor Mazoni | Hybrid Growth Engineer | Behavioral Psychology + Front-End Engineering">
            <Hero />
            <About />
            <Results />
            <Skills />
            <Projects />
            <Contact />
          </Layout>
        }
      />
      <Route
        path="/projects"
        element={<Layout seoTitle="Featured Projects | Victor Mazoni - Hybrid Growth Engineer"><ProjectsPage /></Layout>}
      />
      <Route
        path="/blog"
        element={<Layout seoTitle="Multimedia Blog | Victor Mazoni - Growth Engineering Insights"><Blog /></Layout>}
      />
      <Route
        path="/vendas"
        element={<Layout seoTitle="High-Converting Landing Pages for Paid Traffic | Victor Mazoni"><Sales /></Layout>}
      />
      {/* Fallback */}
      <Route path="*" element={<Layout seoTitle="Página não encontrada | Victor Mazoni"><div className="h-64 flex flex-col items-center justify-center text-blue-700"><h1 className="text-3xl font-black">404</h1><p>Página não encontrada!</p></div></Layout>} />
    </Routes>
  );
}

export default App;
