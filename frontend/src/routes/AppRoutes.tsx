import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Leadership from '../pages/Leadership';
import News from '../pages/News';
import Explore from '../pages/Explore';
import Transparency from '../pages/Transparency';
import SubCity from '../pages/SubCity';
import Sector from '../pages/Sector';

const AppRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/news" element={<News />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/transparency" element={<Transparency />} />
        <Route path="/subcity/:id" element={<SubCity />} />
        <Route path="/sector/:name/*" element={<Sector />} />
      </Routes>
    </Layout>
  );
};

export default AppRoutes;
