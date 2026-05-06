import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import BackButton from '../components/BackButton';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const LEADERS = [
  {
    name: 'Dr. Teshome Adugna',
    title: 'Mayor of Sheger City',
    dept: 'Office of the Mayor',
    image: '/dr.teshome.jpg',
    bio: 'Leading Sheger City\'s transformation into a smart, inclusive, and sustainable metropolitan center.',
    social: 'https://twitter.com',
  },
  {
    name: 'Mr. Gugsa Wolde',
    title: 'Deputy Mayor – Administration',
    dept: 'Administration & Public Services',
    image: '/mr.gugsa.png',
    bio: 'Overseeing administrative operations, public service delivery, and inter-office coordination.',
    social: null,
  },
  {
    name: 'Mr. Hailu Tesfaye',
    title: 'Deputy Mayor – Development',
    dept: 'Urban Development & Infrastructure',
    image: '/mr.hailu.png',
    bio: 'Managing major infrastructure projects, urban planning, and community development initiatives.',
    social: null,
  },
  {
    name: 'Mr. Guyo Bante',
    title: 'Director – Digital Services',
    dept: 'Technology & Innovation',
    image: '/mr.guyo.png',
    bio: 'Driving the city\'s digital transformation agenda and overseeing the government services portal.',
    social: null,
  },
];

const Leadership = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-slate-50">

      {/* ─── Hero ─── */}
      <section className="relative bg-slate-950 text-white overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-[url('/city-4.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
        
        {/* Back Button */}
        <div className="absolute top-20 sm:top-24 left-4 sm:left-8 z-20">
          <BackButton to="/" className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white" />
        </div>
        
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 14, repeat: Infinity }}
          className="absolute right-1/3 top-1/4 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[130px] pointer-events-none hidden lg:block"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-3 uppercase tracking-[0.35em] text-[10px] font-semibold text-red-600 mb-6">
            <span className="w-10 h-px bg-red-600/50" />
            {t('leadership.title')}
          </motion.div>
          <motion.h1 {...fadeUp(0.2)} className="text-4xl sm:text-6xl font-bold leading-tight tracking-tight font-display mb-6 max-w-3xl">
            Meet the <span className="text-red-600 drop-shadow-[0_0_30px_rgba(245,158,11,0.3)]">{t('leadership.team')}</span>
          </motion.h1>
          <motion.p {...fadeUp(0.4)} className="text-white/70 text-base sm:text-lg max-w-xl leading-relaxed">
            {t('leadership.hero_desc')}
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 translate-y-[1px]">
          <svg viewBox="0 0 1440 80" className="w-full h-auto" fill="none">
            <path d="M0 80L60 70C120 60 240 40 360 30C480 20 600 20 720 25C840 30 960 40 1080 45C1200 50 1320 50 1380 50L1440 50V80H0Z" fill="#f8fafc" />
          </svg>
        </div>
      </section>

      {/* ─── Leadership Grid ─── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-red-600 mb-4">Administration</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-display tracking-tight">{t('leadership.officials')}</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEADERS.map((leader, i) => (
              <motion.div key={leader.name} {...fadeUp(i * 0.1)} whileHover={{ y: -6 }}
                className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                {/* Photo */}
                <div className="relative h-64 overflow-hidden bg-slate-200">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%23e2e8f0" width="100" height="100"/><text y="55" x="50" text-anchor="middle" font-size="40">👤</text></svg>';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[10px] font-semibold uppercase tracking-widest bg-red-600 text-white px-2 py-1 rounded-full">
                      {leader.dept}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-sm font-semibold text-slate-900 font-display mb-1">{leader.name}</h3>
                  <p className="text-[10px] text-red-600 font-medium mb-3">{leader.title}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">{leader.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Values Strip ─── */}
      <section className="py-16 bg-white border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { label: t('leadership.values.accountability'), icon: '⚖️' },
              { label: t('leadership.values.transparency'), icon: '🔍' },
              { label: t('leadership.values.citizen_first'), icon: '🤝' },
              { label: t('leadership.values.innovation'), icon: '💡' },
            ].map((v, i) => (
              <motion.div key={i} {...fadeUp(i * 0.1)} className="flex flex-col items-center gap-3">
                <span className="text-2xl">{v.icon}</span>
                <span className="text-xs font-medium text-slate-600">{v.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Leadership;
