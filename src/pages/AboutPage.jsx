// ============================================
// ABOUTPAGE.JSX - Página Sobre
// ============================================
// Página completa sobre Victor Mazoni
// Inclui: Hero, Story, Values, Education, Experience, Approach, Contact

import AboutHero from '../components/about/AboutHero';
import AboutStory from '../components/about/AboutStory';
import AboutValues from '../components/about/AboutValues';
import AboutEducation from '../components/about/AboutEducation';
import AboutExperience from '../components/about/AboutExperience';
import AboutApproach from '../components/about/AboutApproach';
import Contact from '../components/Contact';

/**
 * Componente: AboutPage
 * Página completa sobre Victor Mazoni
 * Composição de múltiplos componentes sobre
 */
const AboutPage = () => (
  <div className="min-h-screen">
    <AboutHero />
    <AboutStory />
    <AboutValues />
    <AboutEducation />
    <AboutExperience />
    <AboutApproach />
    <Contact />
  </div>
);

export default AboutPage;

