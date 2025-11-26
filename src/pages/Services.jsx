import ServicesHero from '../components/services/ServicesHero';
import ServicesOfferings from '../components/services/ServicesOfferings';
import ServicesProcess from '../components/services/ServicesProcess';
import ServicesDifferentials from '../components/services/ServicesDifferentials';
import ServicesResults from '../components/services/ServicesResults';
import Contact from '../components/Contact';

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

