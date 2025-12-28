import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import NavBar from '@/components/NavBar';
import Section1 from '@/components/Section1';
import Section2 from '@/components/Section2';
import Section3 from '@/components/Section3';
import Section4 from '@/components/Section4';
import Section5 from '@/components/Section5';
import Section7 from '@/components/Section7';
import Section8 from '@/components/Section8';
import BuggySection from '@/components/BuggySection';

const App = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <BuggySection />
      <Section7 />
      <Section8 />
      <Footer />
    </div>
  );
};

export default App;
