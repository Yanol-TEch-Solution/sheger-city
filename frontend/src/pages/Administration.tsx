import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const SECTORS = [
  { id: 'kantiibaa', title: "Mayor's Office" },
  { id: 'public_service', title: "Public Service" },
  { id: 'education', title: "Education" },
  { id: 'health', title: "Health Office" },
  { id: 'investment', title: "Investment" },
  { id: 'revenue', title: "Revenue" },
  { id: 'trade', title: "Trade & Commerce" },
  { id: 'science_tech', title: "Science & Tech" },
  { id: 'city_council', title: "City Council" },
  { id: 'police', title: "Police" },
  { id: 'court', title: "City Courts" },
  { id: 'prosecutor', title: "Prosecutor" },
  { id: 'security', title: "Security" },
  { id: 'finance_planning', title: "Finance & Planning" },
  { id: 'agriculture', title: "Urban Agriculture" },
  { id: 'water_energy', title: "Water & Energy" },
  { id: 'land_construction', title: "Land & Construction" },
  { id: 'road_transport', title: "Road & Transport" },
  { id: 'culture_tourism', title: "Culture & Tourism" },
  { id: 'communication', title: "Communications" },
  { id: 'social_rehab', title: "Social Rehab" },
  { id: 'women_children', title: "Women & Children" },
  { id: 'chuo', title: "CHUO" },
  { id: 'correctional', title: "Correctional" },
  { id: 'municipality', title: "Municipality" },
];

const sectorStyles: Record<string, { color: string; glow: string }> = {
  "Mayor's Office": { color: "text-red-500", glow: "shadow-red-500/20" },
  "Health Office": { color: "text-emerald-500", glow: "shadow-emerald-500/20" },
  "Police": { color: "text-red-500", glow: "shadow-red-500/20" },
};

const Administration = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-[#0F172A] min-h-screen text-[#F8FAFC] font-sans selection:bg-red-500/30 overflow-hidden">
      
      {/* Liquid Glass Filter */}
      <svg width="0" height="0" className="absolute hidden">
        <filter id="liquid-glass">
          <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.h1 
          {...fadeUp(0.2)} 
          className="relative z-10 text-4xl sm:text-6xl font-bold leading-tight tracking-[-0.02em] font-display mb-8"
        >
          {t('administration_page.title').split(' ')[0]} <br />
          <span className="text-transparent" style={{ background: 'linear-gradient(to right, #FFFFFF, #F59E0B)', WebkitBackgroundClip: 'text' }}>
            {t('administration_page.title').split(' ')[1]}
          </span>
        </motion.h1>
        
        <motion.p 
          {...fadeUp(0.3)} 
          className="relative z-10 text-slate-400 text-base sm:text-lg max-w-2xl font-mono leading-relaxed opacity-80"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          {t('administration_page.hero_desc')}
        </motion.p>
      </section>

      <section className="relative z-10 pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {SECTORS.map((sector, idx) => {
            const style = sectorStyles[sector.title] || { color: "text-slate-400", glow: "shadow-white/5" };

            return (
              <Link key={sector.id} to={`/administrative/${sector.id}`}>
                <motion.div 
                  {...fadeUp(0.1 + (idx % 5) * 0.1)}
                  className={`group relative h-full p-6 rounded-2xl bg-[rgba(30,41,59,0.5)] backdrop-blur-[12px] border border-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer shadow-lg hover:${style.glow}`}
                >
                  <svg className={`w-8 h-8 ${style.color} transition-all duration-300 group-hover:scale-110 group-hover:[filter:url(#liquid-glass)]`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  
                  <h3 className="mt-4 font-bold tracking-tight text-white font-display">
                    {t(`administrative_options.${sector.id}`)}
                  </h3>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </section>

    </div>
  );
};

export default Administration;
