// ============================================
// SALES.JSX - Página de Vendas
// ============================================
// Página de vendas de landing pages
// Inclui: Hero, Benefits, Differentials, Testimonial, Contact

import SalesHero from '../components/sales/SalesHero';
import SalesBenefits from '../components/sales/SalesBenefits';
import SalesDifferentials from '../components/sales/SalesDifferentials';
import SalesTestimonial from '../components/sales/SalesTestimonial';
import Contact from '../components/Contact';

/**
 * Componente: Sales
 * Página de vendas de landing pages
 * Composição de componentes de vendas
 */
const Sales = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
    <div className="pt-20">
      <SalesHero />
      <SalesBenefits />
      <SalesDifferentials />
      <SalesTestimonial />
      <Contact />
    </div>
  </div>
);

export default Sales;
