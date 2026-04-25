import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
});

const DATA_CATEGORIES = [
  {
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    title: 'Budget & Finance',
    desc: 'View detailed allocations, city expenditures, and financial audit reports.',
    color: 'emerald',
    stats: '12 Reports',
  },
  {
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    title: 'City Projects',
    desc: 'Track the progress, budget, and impact of ongoing infrastructure development.',
    color: 'blue',
    stats: '45 Active',
  },
  {
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    title: 'Performance Metrics',
    desc: 'Review service delivery metrics, response times, and citizen satisfaction scores.',
    color: 'amber',
    stats: 'Updated Daily',
  },
  {
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    title: 'Public Records',
    desc: 'Access official city council meeting minutes, policy documents, and resolutions.',
    color: 'violet',
    stats: '2,500+ Docs',
  },
];

const COLOR_MAP: Record<string, string> = {
  emerald: 'text-emerald-600 bg-emerald-50 border-emerald-100 group-hover:border-emerald-500',
  blue: 'text-blue-600 bg-blue-50 border-blue-100 group-hover:border-blue-500',
  amber: 'text-amber-600 bg-amber-50 border-amber-100 group-hover:border-amber-500',
  violet: 'text-violet-600 bg-violet-50 border-violet-100 group-hover:border-violet-500',
};

const Transparency = () => {
  return (
    <div className="bg-slate-50">

      {/* ─── Hero ─── */}
      <section className="relative bg-slate-950 text-white overflow-hidden min-h-[45vh] flex items-center">
        <div className="absolute inset-0 bg-[url('/hero-1.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-3 uppercase tracking-[0.35em] text-[10px] font-semibold text-amber-400 mb-6">
            <span className="w-10 h-px bg-amber-400/50" />
            Open Government
          </motion.div>
          <motion.h1 {...fadeUp(0.2)} className="text-5xl sm:text-6xl font-bold leading-tight tracking-tight font-display mb-6 max-w-3xl">
            Transparency & <span className="text-amber-400 drop-shadow-[0_0_30px_rgba(245,158,11,0.3)]">Public Data</span>
          </motion.h1>
          <motion.p {...fadeUp(0.4)} className="text-white/70 text-lg max-w-xl leading-relaxed">
            We believe in open governance. Access budgets, project progress, and performance metrics freely and easily.
          </motion.p>
        </div>
      </section>

      {/* ─── Data Grid ─── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-display tracking-tight mb-4">Explore City Data</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Select a category below to access real-time data portals and downloadable reports.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DATA_CATEGORIES.map((cat, i) => (
              <motion.button key={cat.title} {...fadeUp(i * 0.1)} whileHover={{ y: -4 }}
                className={`flex flex-col sm:flex-row items-start sm:items-center gap-6 p-8 bg-white rounded-3xl border border-slate-200 shadow-sm transition-all duration-300 group text-left ${COLOR_MAP[cat.color].replace(/bg-.*? |text-.*? /g, '')}`}
              >
                <div className={`w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center transition-colors ${COLOR_MAP[cat.color].split(' group-hover')[0]}`}>
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={cat.icon} />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-slate-900 font-display">{cat.title}</h3>
                    <span className="text-[10px] font-semibold uppercase tracking-widest bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full">{cat.stats}</span>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">{cat.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 group-hover:text-blue-700 transition-colors">
                    Access Portal <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Freedom of Info ─── */}
      <section className="py-20 bg-blue-900 text-white rounded-t-[3rem] mt-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div {...fadeUp(0)}>
            <div className="w-16 h-16 bg-blue-800/50 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
            </div>
            <h2 className="text-3xl font-bold font-display mb-4">Can't Find What You're Looking For?</h2>
            <p className="text-blue-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              Under the Freedom of Information Act, citizens have the right to request access to specific public records. Submit a formal request through our digital portal.
            </p>
            <button className="px-8 py-4 bg-white text-blue-900 font-semibold rounded-full hover:bg-blue-50 transition-colors shadow-xl shadow-black/10 hover:-translate-y-0.5">
              Submit FOI Request
            </button>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Transparency;
