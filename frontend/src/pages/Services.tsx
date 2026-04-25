import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
});

const SERVICES = [
  {
    title: 'Property & Land',
    desc: 'Manage land administration, property registration, and building permits — all online.',
    color: 'blue',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    links: [
      { name: 'Land Administration', path: '/sector/land' },
      { name: 'Property Registration', path: '/sector/land/registration' },
      { name: 'Building Permits', path: '/sector/land/permits' },
    ],
  },
  {
    title: 'Health & Welfare',
    desc: 'Access healthcare facilities, social welfare programs, and emergency services.',
    color: 'rose',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    links: [
      { name: 'Health Centers', path: '/sector/health' },
      { name: 'Social Welfare', path: '/sector/health/welfare' },
      { name: 'Emergency Services', path: '/sector/health/emergency' },
    ],
  },
  {
    title: 'Transport',
    desc: 'Apply for driver\'s licenses, register vehicles, and track public transport services.',
    color: 'violet',
    icon: 'M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2',
    links: [
      { name: 'Driver\'s License', path: '/sector/transport/license' },
      { name: 'Vehicle Registration', path: '/sector/transport/vehicles' },
      { name: 'Public Transport', path: '/sector/transport' },
    ],
  },
  {
    title: 'Business & Trade',
    desc: 'Register your business, get trade licenses, and access commercial support services.',
    color: 'emerald',
    icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    links: [
      { name: 'Business Registration', path: '/sector/business' },
      { name: 'Trade License', path: '/sector/business/license' },
      { name: 'Investment Support', path: '/sector/business/invest' },
    ],
  },
  {
    title: 'Education',
    desc: 'Enroll students, access school information, and apply for education support programs.',
    color: 'amber',
    icon: 'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222',
    links: [
      { name: 'School Enrollment', path: '/sector/education' },
      { name: 'Scholarship Programs', path: '/sector/education/scholarships' },
      { name: 'Adult Education', path: '/sector/education/adult' },
    ],
  },
  {
    title: 'Urban & Environment',
    desc: 'Report environmental issues, apply for urban development permits, and access green programs.',
    color: 'teal',
    icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064',
    links: [
      { name: 'Environmental Reports', path: '/sector/environment' },
      { name: 'Green Initiatives', path: '/sector/environment/green' },
      { name: 'Urban Planning', path: '/sector/environment/urban' },
    ],
  },
];

const COLOR_STYLES: Record<string, { badge: string; link: string; icon: string }> = {
  blue:    { badge: 'bg-blue-50 text-blue-600',    link: 'hover:bg-blue-50 hover:text-blue-700',    icon: 'text-blue-500' },
  rose:    { badge: 'bg-rose-50 text-rose-600',    link: 'hover:bg-rose-50 hover:text-rose-700',    icon: 'text-rose-500' },
  violet:  { badge: 'bg-violet-50 text-violet-600',link: 'hover:bg-violet-50 hover:text-violet-700',icon: 'text-violet-500' },
  emerald: { badge: 'bg-emerald-50 text-emerald-600',link: 'hover:bg-emerald-50 hover:text-emerald-700',icon: 'text-emerald-500' },
  amber:   { badge: 'bg-amber-50 text-amber-600',  link: 'hover:bg-amber-50 hover:text-amber-700',  icon: 'text-amber-500' },
  teal:    { badge: 'bg-teal-50 text-teal-600',    link: 'hover:bg-teal-50 hover:text-teal-700',    icon: 'text-teal-500' },
};

const QUICK_LINKS = [
  { label: 'Pay Utility Bills', icon: '💡' },
  { label: 'Report an Issue', icon: '📋' },
  { label: 'Apply for ID', icon: '🪪' },
  { label: 'Book Appointment', icon: '📅' },
];

const Services = () => {
  return (
    <div className="bg-slate-50">

      {/* ─── Hero ─── */}
      <section className="relative bg-slate-950 text-white overflow-hidden min-h-[48vh] flex items-center">
        <div className="absolute inset-0 bg-[url('/city-1.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute right-1/4 top-1/4 w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-[130px] pointer-events-none hidden lg:block"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-3 uppercase tracking-[0.35em] text-[10px] font-semibold text-amber-400 mb-6">
            <span className="w-10 h-px bg-amber-400/50" />
            Citizen Services
          </motion.div>
          <motion.h1 {...fadeUp(0.2)} className="text-5xl sm:text-7xl font-bold leading-tight tracking-tight font-display mb-6 max-w-3xl">
            Government <span className="text-amber-400 drop-shadow-[0_0_30px_rgba(245,158,11,0.3)]">Services</span>
          </motion.h1>
          <motion.p {...fadeUp(0.4)} className="text-white/70 text-lg sm:text-xl max-w-xl leading-relaxed">
            Access a full range of digital government services — fast, transparent, and available 24/7 from any device.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 translate-y-[1px]">
          <svg viewBox="0 0 1440 80" className="w-full h-auto" fill="none">
            <path d="M0 80L60 70C120 60 240 40 360 30C480 20 600 20 720 25C840 30 960 40 1080 45C1200 50 1320 50 1380 50L1440 50V80H0Z" fill="#f8fafc" />
          </svg>
        </div>
      </section>

      {/* ─── Quick Access Bar ─── */}
      <section className="py-10 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {QUICK_LINKS.map((q, i) => (
              <motion.button key={q.label} {...fadeUp(i * 0.08)}
                className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 hover:border-blue-300 hover:bg-blue-50 transition-all group text-left"
              >
                <span className="text-2xl">{q.icon}</span>
                <span className="text-sm font-medium text-slate-700 group-hover:text-blue-700">{q.label}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Services Grid ─── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-500 mb-4">All Services</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 font-display tracking-tight">Browse by Category</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((svc, i) => {
              const styles = COLOR_STYLES[svc.color];
              return (
                <motion.div key={svc.title} {...fadeUp(i * 0.07)} whileHover={{ y: -5 }}
                  className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  <div className={`w-14 h-14 rounded-2xl ${styles.badge} flex items-center justify-center mb-6`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={svc.icon} />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 font-display mb-2">{svc.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-6">{svc.desc}</p>
                  <div className="space-y-2 mt-auto">
                    {svc.links.map((link) => (
                      <Link key={link.name} to={link.path}
                        className={`flex items-center justify-between w-full px-4 py-3 rounded-xl bg-slate-50 text-sm text-slate-600 transition-colors ${styles.link} group/link`}
                      >
                        <span>{link.name}</span>
                        <svg className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Help CTA ─── */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div {...fadeUp(0)}>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400 mb-4">Need Help?</p>
            <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight mb-6">
              Can't find what you're looking for?
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Our AI assistant and support team are ready to guide you to the right service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 text-slate-900 font-semibold rounded-full hover:bg-amber-400 transition-all shadow-lg hover:-translate-y-1">
                Contact Support
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Services;
