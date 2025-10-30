import Header from '../components/Header';
import SalesHero from '../components/sales/SalesHero';
import SalesBenefits from '../components/sales/SalesBenefits';
import SalesDifferentials from '../components/sales/SalesDifferentials';
import SalesTestimonial from '../components/sales/SalesTestimonial';
import Contact from '../components/Contact';

const Sales = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex flex-col">
    <Header />
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
