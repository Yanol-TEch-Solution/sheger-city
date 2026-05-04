import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import ScrollToTop from '../components/ScrollToTop';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Leadership from '../pages/Leadership';
import Explore from '../pages/Explore';
import Transparency from '../pages/Transparency';
import SubCity from '../pages/SubCity';
import Sector from '../pages/Sector';
import Administration from '../pages/Administration';
import VirtualTour from '../pages/VirtualTour';
import Services from '../pages/Services';
import ServiceDetail from '../pages/ServiceDetail';
import News from '../pages/News';
import ExploreDetail from '../pages/ExploreDetail';
//import District from '../pages/District';

import Kantiibaa from '../pages/administrative/Kantiibaa';
import PublicService from '../pages/administrative/PublicService';
import Education from '../pages/administrative/Education';
import Health from '../pages/administrative/Health';
import Investment from '../pages/administrative/Investment';
import Revenue from '../pages/administrative/Revenue';
import Trade from '../pages/administrative/Trade';
import ScienceTech from '../pages/administrative/ScienceTech';
import CityCouncil from '../pages/administrative/CityCouncil';
import Police from '../pages/administrative/Police';
import Court from '../pages/administrative/Court';
import Prosecutor from '../pages/administrative/Prosecutor';
import Security from '../pages/administrative/Security';
import FinancePlanning from '../pages/administrative/FinancePlanning';
import Agriculture from '../pages/administrative/Agriculture';
import WaterEnergy from '../pages/administrative/WaterEnergy';
import LandConstruction from '../pages/administrative/LandConstruction';
import RoadTransport from '../pages/administrative/RoadTransport';
import CultureTourism from '../pages/administrative/CultureTourism';
import Communication from '../pages/administrative/Communication';
import SocialRehab from '../pages/administrative/SocialRehab';
import WomenChildren from '../pages/administrative/WomenChildren';
import Chuo from '../pages/administrative/Chuo';
import Correctional from '../pages/administrative/Correctional';
import Municipality from '../pages/administrative/Municipality';

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
      {/* Standalone Administrative Landing Pages (No Main Layout) */}
        <Route path="/administrative/kantiibaa" element={<Kantiibaa />} />
        <Route path="/administrative/public_service" element={<PublicService />} />
        <Route path="/administrative/education" element={<Education />} />
        <Route path="/administrative/health" element={<Health />} />
        <Route path="/administrative/investment" element={<Investment />} />
        <Route path="/administrative/revenue" element={<Revenue />} />
        <Route path="/administrative/trade" element={<Trade />} />
        <Route path="/administrative/science_tech" element={<ScienceTech />} />
        <Route path="/administrative/city_council" element={<CityCouncil />} />
        <Route path="/administrative/police" element={<Police />} />
        <Route path="/administrative/court" element={<Court />} />
        <Route path="/administrative/prosecutor" element={<Prosecutor />} />
        <Route path="/administrative/security" element={<Security />} />
        <Route path="/administrative/finance_planning" element={<FinancePlanning />} />
        <Route path="/administrative/agriculture" element={<Agriculture />} />
        <Route path="/administrative/water_energy" element={<WaterEnergy />} />
        <Route path="/administrative/land_construction" element={<LandConstruction />} />
        <Route path="/administrative/road_transport" element={<RoadTransport />} />
        <Route path="/administrative/culture_tourism" element={<CultureTourism />} />
        <Route path="/administrative/communication" element={<Communication />} />
        <Route path="/administrative/social_rehab" element={<SocialRehab />} />
        <Route path="/administrative/women_children" element={<WomenChildren />} />
        <Route path="/administrative/chuo" element={<Chuo />} />
        <Route path="/administrative/correctional" element={<Correctional />} />
        <Route path="/administrative/municipality" element={<Municipality />} />

      {/* Main Sheger City Pages (With Main Layout) */}
      <Route path="/*" element={
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/explore/:id" element={<ExploreDetail />} />
            <Route path="/transparency" element={<Transparency />} />
            <Route path="/subcity/:id" element={<SubCity />} />
            {/*<Route path="/district/:id" element={<District />} />*/}
            <Route path="/administrative" element={<Administration />} />
            <Route path="/sector/:name/*" element={<Sector />} />
            <Route path="/virtual-tour" element={<VirtualTour />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
          </Routes>
        </Layout>
      } />
    </Routes>
    </>
  );
};

export default AppRoutes;
