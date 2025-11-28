// ============================================
// SERVICES.JSX - Página de Serviços
// ============================================
// Página completa de serviços oferecidos
// Inclui: Hero, Offerings, Process, Differentials, Results, Contact

import ServicesHero from '../components/services/ServicesHero';
import ServicesOfferings from '../components/services/ServicesOfferings';
import ServicesProcess from '../components/services/ServicesProcess';
import ServicesDifferentials from '../components/services/ServicesDifferentials';
import ServicesResults from '../components/services/ServicesResults';
import Contact from '../components/Contact';

/**
 * Componente: Services
 * Página de serviços completos
 * Composição de múltiplos componentes de serviços
 */
const Services = () => (
  <div className="min-h-screen">
    <ServicesHero />
    <ServicesOfferings />
    <ServicesProcess />
    <ServicesDifferentials />
    <ServicesResults />
    <Contact />
  </div>
);

export default Services;

