import CityFlashCards from '../components/CityFlashCards';
import HeroSection from '../components/home/HeroSection';
import LeadershipSection from '../components/home/LeadershipSection';
import ExploreSection from '../components/home/ExploreSection';
import ServicesHubSection from '../components/home/ServicesHubSection';
import MobileAppSection from '../components/home/MobileAppSection';
import CityHighlightSection from '../components/home/CityHighlightSection';

const Home = () => {
  return (
    <div className="bg-slate-50/50 relative">
      <HeroSection />
      <CityHighlightSection />
      <CityFlashCards />
      <LeadershipSection />
      <ExploreSection />
      <ServicesHubSection />
      <MobileAppSection />
    </div>
  );
};

export default Home;
