import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import WaveDivider from '../components/WaveDivider';

const EXPLORE_DATA: Record<string, any> = {
  'grand-square': {
    title: 'Grand Square & Heritage',
    badge: 'Cultural Landmark',
    image: '/city-2.jpg',
    description: 'The heart of Sheger City, where history meets the future. The Grand Square is a symbol of our unity and progress.',
    content: `
      Grand Square is more than just a public space; it's the living room of Sheger City. Surrounded by historical monuments and modern administrative buildings, it serves as the primary gathering point for national celebrations, cultural festivals, and daily social interactions.
      
      The architecture of the square blends traditional Ethiopian motifs with contemporary urban design, featuring expansive pedestrian walkways, choreographed water fountains, and integrated green spaces that provide a sanctuary amidst the city's pulse.
    `,
    stats: [
      { label: 'Founded', value: '1886' },
      { label: 'Capacity', value: '100k+' },
      { label: 'Area', value: '45,000 m²' }
    ]
  },
  'eco-parks': {
    title: 'Eco-Parks & Green Belts',
    badge: 'Sustainable Living',
    image: '/city-4.jpg',
    description: 'Breathe fresh air in our state-of-the-art eco-parks designed for urban wellness and biodiversity.',
    content: `
      Sheger's Eco-Parks are part of a city-wide initiative to create a "Green Lung" for our residents. These spaces are not just parks; they are active conservation zones that protect local flora and fauna while providing world-class recreational facilities.
      
      From the botanical gardens to the adventure trails, our eco-parks offer something for everyone. We use sustainable water management systems and solar-powered lighting to ensure our environmental footprint remains minimal.
    `,
    stats: [
      { label: 'Green Space', value: '25%' },
      { label: 'Walking Trails', value: '12km' },
      { label: 'Tree Species', value: '250+' }
    ]
  },
  'tech-hub': {
    title: 'Innovation & Tech Hub',
    badge: 'Future Ready',
    image: '/city-1.jpg',
    description: 'Where the digital revolution takes root. Our Tech Hub is the engine of Sheger\'s modern economy.',
    content: `
      The Sheger Tech Hub is a dedicated district for innovation, startups, and global technology giants. It features high-speed fiber connectivity, smart building infrastructure, and collaborative workspaces designed to foster creativity and technical excellence.
      
      By integrating AI-driven urban management and supporting local tech talent, the hub is positioning Sheger as a leading digital city in the region.
    `,
    stats: [
      { label: 'Startups', value: '500+' },
      { label: 'Fiber Speed', value: '10Gbps' },
      { label: 'Jobs Created', value: '15k+' }
    ]
  }
};

export default function ExploreDetail() {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const data = id ? EXPLORE_DATA[id] : null;

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Discovery Point Not Found</h1>
          <Link to="/" className="text-red-400 hover:underline">Return to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden bg-slate-950">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10 }}
          className="absolute inset-0"
        >
          <img src={data.image} alt={data.title} className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="px-4 py-1.5 bg-red-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full mb-6 inline-block">
              {data.badge}
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 font-display tracking-tight leading-tight">
              {data.title}
            </h1>
            <p className="text-lg text-white/70 max-w-2xl leading-relaxed font-medium">
              {data.description}
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 translate-y-[1px]">
          {/* <WaveDivider variant="redAccent" /> */}
          <svg viewBox="0 0 1440 80" className="w-full h-auto" fill="none">
            <path
              d="M0 80L60 70C120 60 240 40 360 30C480 20 600 20 720 25C840 30 960 40 1080 45C1200 50 1320 50 1380 50L1440 50V80H0Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </section>

      {/* Content Section */}
      <section className="pt-16 pb-0 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-slate-900 mb-6 font-display">Deep Dive</h2>
                <div className="prose prose-lg text-slate-600 max-w-none space-y-6">
                  {data.content.split('\n\n').map((para: string, i: number) => (
                    <p key={i} className="leading-relaxed">{para.trim()}</p>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 shadow-sm"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-6 font-display">Fast Facts</h3>
                <div className="space-y-6">
                  {data.stats.map((stat: any, i: number) => (
                    <div key={i} className="flex justify-between items-end border-b border-slate-200 pb-4">
                      <span className="text-slate-500 text-sm font-medium">{stat.label}</span>
                      <span className="text-slate-900 font-bold text-lg">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <Link 
                to="/explore"
                className="block w-full py-5 bg-slate-900 text-white text-center font-bold rounded-2xl hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/10"
              >
                Explore More of Sheger
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Public Perspectives Gallery (Rotated scattered images) */}
      {id === 'grand-square' && (
        <section className="py-16 bg-white overflow-hidden relative border-t border-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <span className="text-red-600 font-medium tracking-tight text-xs mb-4 block">Community Vibes</span>
              <h2 className="text-3xl font-bold text-slate-900 font-display">Public Perspectives</h2>
            </div>
            
            <div className="relative h-[600px] mt-12">
              {[
                { img: '/city-1.jpg', rot: -6, top: '5%', left: '10%', size: 'w-64' },
                { img: '/city-3.jpg', rot: 8, top: '15%', left: '40%', size: 'w-72' },
                { img: '/city-4.jpg', rot: -4, top: '10%', left: '70%', size: 'w-60' },
                { img: '/city-2.jpg', rot: 5, top: '45%', left: '5%', size: 'w-80' },
                { img: '/city-1.jpg', rot: -7, top: '55%', left: '35%', size: 'w-64' },
                { img: '/city-3.jpg', rot: 4, top: '50%', left: '65%', size: 'w-72' },
              ].map((photo, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: photo.rot }}
                  whileHover={{ scale: 1.1, rotate: 0, zIndex: 50 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, damping: 15, delay: i * 0.1 }}
                  style={{ top: photo.top, left: photo.left }}
                  className={`absolute ${photo.size} aspect-[4/3] bg-white p-3 shadow-2xl rounded-sm border border-slate-100 cursor-pointer group`}
                >
                  <div className="w-full h-full overflow-hidden relative">
                    <img src={photo.img} alt="Public" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors" />
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-[10px] font-medium text-slate-400">@sheger_citizen</span>
                    <svg className="w-3 h-3 text-red-500 fill-current" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Ambient background text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-bold text-slate-50 select-none -z-0 opacity-40">
            Heritage
          </div>
        </section>
      )}

      {/* Discover Other Landmarks Gallery (Specifically requested for Grand Square) */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl font-bold text-slate-900 font-display">Other Discoveries</h2>
            <Link to="/" className="text-red-600 font-bold text-sm hover:underline">Back to Home</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(EXPLORE_DATA)
              .filter(([key]) => key !== id)
              .map(([key, item]) => (
                <Link key={key} to={`/explore/${key}`} className="group relative h-64 rounded-3xl overflow-hidden shadow-lg block">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <span className="text-[10px] font-black uppercase tracking-widest text-red-400 mb-2 block">{item.badge}</span>
                    <h3 className="text-xl font-bold text-white font-display">{item.title}</h3>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
