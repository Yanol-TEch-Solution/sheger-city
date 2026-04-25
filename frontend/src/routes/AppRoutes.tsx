import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Leadership from '../pages/Leadership';
import Explore from '../pages/Explore';
import Transparency from '../pages/Transparency';
import SubCity from '../pages/SubCity';
import Sector from '../pages/Sector';
import VirtualTour from '../pages/VirtualTour';
import District from '../pages/District';
const AppRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/transparency" element={<Transparency />} />
        <Route path="/subcity/:id" element={<SubCity />} />
        <Route path="/sector/:name/*" element={<Sector />} />
        <Route path="/virtual-tour" element={<VirtualTour />} />
        <Route path="/district/:id" element={<District />} />
      </Routes>
    </Layout>
  );
};

export default AppRoutes;
