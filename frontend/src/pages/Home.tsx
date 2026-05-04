import CityFlashCards from '../components/CityFlashCards';
import HeroSection from '../components/home/HeroSection';
import LeadershipSection from '../components/home/LeadershipSection';
import ExploreSection from '../components/home/ExploreSection';
import ServicesHubSection from '../components/home/ServicesHubSection';
import MobileAppSection from '../components/home/MobileAppSection';
import CityHighlightSection from '../components/home/CityHighlightSection';

const Home = () => {
  return (
    <div className="bg-slate-50/50 relative min-h-screen">
      {/* Warrior Sketch Background - Fixed across entire page */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <img 
          src="/warrior-sketch.png" 
          alt="Ethiopian Warrior Background" 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] lg:w-[900px] lg:h-[900px] object-contain"
          style={{ 
            opacity: 0.15,
            filter: 'contrast(1.2) brightness(0.95)'
          }}
        />
      </div>

      {/* Content sections with relative positioning */}
      <div className="relative z-10">
        <HeroSection />
        <CityHighlightSection />
        <CityFlashCards />
        <LeadershipSection />
        <ExploreSection />
        <ServicesHubSection />
        <MobileAppSection />
      </div>
    </div>
  );
};

export default Home;
