const fs = require('fs');
const path = require('path');

const SECTORS = [
  { id: 'kantiibaa' },
  { id: 'public_service' },
  { id: 'education' },
  { id: 'health' },
  { id: 'investment' },
  { id: 'revenue' },
  { id: 'trade' },
  { id: 'science_tech' },
  { id: 'city_council' },
  { id: 'police' },
  { id: 'court' },
  { id: 'prosecutor' },
  { id: 'security' },
  { id: 'finance_planning' },
  { id: 'agriculture' },
  { id: 'water_energy' },
  { id: 'land_construction' },
  { id: 'road_transport' },
  { id: 'culture_tourism' },
  { id: 'communication' },
  { id: 'social_rehab' },
  { id: 'women_children' },
  { id: 'chuo' },
  { id: 'correctional' },
  { id: 'municipality' },
];

const imports = SECTORS.map(s => {
  const comp = s.id.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
  return `import ${comp} from '../pages/administrative/${comp}';`;
}).join('\n');

const routes = SECTORS.map(s => {
  const comp = s.id.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
  return `        <Route path="/administrative/${s.id}" element={<${comp} />} />`;
}).join('\n');

const content = `import { Routes, Route } from 'react-router-dom';
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
import Services from '../pages/Services';
import Administration from '../pages/Administration';

${imports}

const AppRoutes = () => {
  return (
    <Routes>
      {/* Standalone Administrative Landing Pages (No Main Layout) */}
${routes}

      {/* Main Sheger City Pages (With Main Layout) */}
      <Route path="/*" element={
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
            <Route path="/administrative" element={<Administration />} />
            <Route path="/sector/:name/*" element={<Sector />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </Layout>
      } />
    </Routes>
  );
};

export default AppRoutes;
`;

fs.writeFileSync(path.join(__dirname, 'src', 'routes', 'AppRoutes.tsx'), content);
console.log('AppRoutes updated!');
