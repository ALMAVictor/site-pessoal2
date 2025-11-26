import AboutHero from '../components/about/AboutHero';
import AboutStory from '../components/about/AboutStory';
import AboutValues from '../components/about/AboutValues';
import AboutEducation from '../components/about/AboutEducation';
import AboutExperience from '../components/about/AboutExperience';
import AboutApproach from '../components/about/AboutApproach';
import Contact from '../components/Contact';

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

