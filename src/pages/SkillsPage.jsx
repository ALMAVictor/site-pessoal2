// ============================================
// SKILLSPAGE.JSX - Página de Skills
// ============================================
// Página completa de habilidades e expertise
// Inclui: Hero, Technical, Strategic, Combination, Tools, Contact

import SkillsHero from '../components/skills/SkillsHero';
import SkillsTechnical from '../components/skills/SkillsTechnical';
import SkillsStrategic from '../components/skills/SkillsStrategic';
import SkillsCombination from '../components/skills/SkillsCombination';
import SkillsTools from '../components/skills/SkillsTools';
import Contact from '../components/Contact';

/**
 * Componente: SkillsPage
 * Página completa de skills e expertise
 * Composição de múltiplos componentes de skills
 */
const SkillsPage = () => (
  <div className="min-h-screen">
    <SkillsHero />
    <SkillsTechnical />
    <SkillsStrategic />
    <SkillsCombination />
    <SkillsTools />
    <Contact />
  </div>
);

export default SkillsPage;

