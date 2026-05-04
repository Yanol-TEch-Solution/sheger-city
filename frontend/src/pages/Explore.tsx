import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const ATTRACTIONS = [
  { title: 'Legedadi Lake & Park', image: '/city-1.jpg', tag: 'Nature', desc: 'A serene lakeside retreat perfect for picnics, birdwatching, and outdoor recreation just outside the city.' },
  { title: 'Menagesha Suba Forest', image: '/city-2.jpg', tag: 'Heritage', desc: 'One of Ethiopia\'s oldest managed forests, offering hiking trails through ancient trees and rich wildlife.' },
  { title: 'Sululta Plains', image: '/city-3.jpg', tag: 'Landscape', desc: 'Expansive highland plains ideal for cycling, horseback riding, and scenic sunrise photography.' },
  { title: 'Holeta Agricultural Hub', image: '/city-4.jpg', tag: 'Culture', desc: 'Discover the heart of Ethiopia\'s rose and vegetable export industry through guided farm tours.' },
  { title: 'Burayu Market District', image: '/hero-4.jpg', tag: 'Market', desc: 'A vibrant local market with traditional crafts, fresh produce, and authentic Ethiopian street food.' },
  { title: 'Chancho Cultural Center', image: '/hero-2.jpg', tag: 'Culture', desc: 'An arts and cultural center showcasing Oromo and broader Ethiopian traditional music, dance, and art.' },
];

const INVEST_SECTORS = [
  { icon: '🏗️', label: 'Real Estate & Housing' },
  { icon: '💻', label: 'Technology & Startups' },
  { icon: '🌿', label: 'Agribusiness' },
  { icon: '🏭', label: 'Manufacturing' },
  { icon: '🛒', label: 'Retail & Commerce' },
  { icon: '🏥', label: 'Healthcare' },
];

const TAG_COLORS: Record<string, string> = {
  Nature: 'bg-emerald-50 text-emerald-700',
  Heritage: 'bg-red-50 text-red-700',
  Landscape: 'bg-red-50 text-red-700',
  Culture: 'bg-violet-50 text-violet-700',
  Market: 'bg-rose-50 text-rose-700',
};

const Explore = () => {
  
  return (
    <div className="bg-slate-50">

      {/* ─── Hero ─── */}
      <section className="relative bg-slate-950 text-white overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-[url('/hero-3.jpg')] bg-cover bg-center opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute right-1/4 top-1/4 w-[500px] h-[500px] bg-emerald-500/15 rounded-full blur-[130px] pointer-events-none hidden lg:block"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-3 uppercase tracking-[0.35em] text-[10px] font-semibold text-red-400 mb-6">
            <span className="w-10 h-px bg-red-400/50" />
            Tourism & Investment
          </motion.div>
          <motion.h1 {...fadeUp(0.2)} className="text-4xl sm:text-6xl font-bold leading-tight tracking-tight font-display mb-6 max-w-3xl">
            Explore <span className="text-red-400 drop-shadow-[0_0_30px_rgba(245,158,11,0.3)]">Sheger City</span>
          </motion.h1>
          <motion.p {...fadeUp(0.4)} className="text-white/70 text-base sm:text-lg max-w-xl leading-relaxed">
            Discover vibrant culture, breathtaking landscapes, and endless opportunities in Ethiopia's fastest-growing city.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 translate-y-[1px]">
          <svg viewBox="0 0 1440 80" className="w-full h-auto" fill="none">
            <path d="M0 80L60 70C120 60 240 40 360 30C480 20 600 20 720 25C840 30 960 40 1080 45C1200 50 1320 50 1380 50L1440 50V80H0Z" fill="#f8fafc" />
          </svg>
        </div>
      </section>

      {/* ─── Attractions ─── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-red-500 mb-4">Tourism</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-display tracking-tight">Places to Visit</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ATTRACTIONS.map((place, i) => (
              <motion.div key={place.title} {...fadeUp(i * 0.07)} whileHover={{ y: -6 }}
                className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="relative h-52 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms] group-hover:scale-110"
                    style={{ backgroundImage: `url('${place.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className={`absolute top-4 left-4 text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full ${TAG_COLORS[place.tag] || 'bg-slate-100 text-slate-600'}`}>
                    {place.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-sm font-semibold text-slate-900 font-display mb-2 group-hover:text-red-600 transition-colors">{place.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{place.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Investment ─── */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 14, repeat: Infinity }}
          className="absolute left-1/4 top-0 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp(0)}>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-red-400 mb-4">Invest in Sheger</p>
              <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight mb-6">
                A City Built for <span className="text-red-400">Growth</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Sheger City is one of Africa's most dynamic investment destinations — offering strategic location, a young workforce, growing infrastructure, and a business-friendly administration.
              </p>
              <p className="text-white/60 leading-relaxed mb-10">
                Whether you're a small entrepreneur or a large enterprise, Sheger's investment office provides end-to-end support from licensing to land allocation.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-red-500 text-slate-900 font-semibold rounded-full hover:bg-red-400 transition-all shadow-lg hover:-translate-y-1">
                Talk to Investment Office
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7-7 7" /></svg>
              </Link>
            </motion.div>

            <motion.div {...fadeUp(0.2)} className="grid grid-cols-2 gap-4">
              {INVEST_SECTORS.map((s, i) => (
                <motion.div key={s.label} {...fadeUp(i * 0.08)}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-all"
                >
                  <span className="text-xl mb-3 block">{s.icon}</span>
                  <span className="text-xs text-white/80 font-medium">{s.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div {...fadeUp(0)}>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-red-500 mb-4">Plan Your Visit</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-display tracking-tight mb-6">
              Ready to Experience Sheger?
            </h2>
            <p className="text-slate-500 text-base leading-relaxed mb-10 max-w-2xl mx-auto">
              Whether you're a visitor, resident, or investor — Sheger City welcomes you. Connect with us to learn more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-all shadow-lg shadow-red-600/20 hover:-translate-y-1">
                Get in Touch
              </Link>
              <Link to="/about" className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-slate-100 text-slate-700 font-medium rounded-full hover:bg-slate-200 transition-all hover:-translate-y-1">
                Learn About Sheger
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Explore;
