
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import EcoFriendlySection from './components/sections/EcoFriendlySection';
import ActivitiesSection from './components/sections/ActivitiesSection';
import TicketsSection from './components/sections/TicketsSection';
import FAQSection from './components/sections/FAQSection';
import ContactSection from './components/sections/ContactSection';
import SkipToContent from './components/ui/SkipToContent';

function App() {
  return (
    <div className="min-h-screen">
      <SkipToContent />
      <Header />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <EcoFriendlySection />
        <ActivitiesSection />
        <TicketsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
