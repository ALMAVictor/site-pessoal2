import SkillsHero from '../components/skills/SkillsHero';
import SkillsTechnical from '../components/skills/SkillsTechnical';
import SkillsStrategic from '../components/skills/SkillsStrategic';
import SkillsCombination from '../components/skills/SkillsCombination';
import SkillsTools from '../components/skills/SkillsTools';
import Contact from '../components/Contact';

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

