import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const CATEGORIES = [
  {
    title: 'Financial Reports',
    desc: 'Quarterly and annual budget allocations, expenditure reports, and audit findings.',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    color: 'blue'
  },
  {
    title: 'City Projects',
    desc: 'Status updates on major infrastructure, green initiatives, and urban developments.',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    color: 'emerald'
  },
  {
    title: 'Public Tenders',
    desc: 'Open procurement opportunities, contract awards, and bidding guidelines.',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    color: 'amber'
  },
  {
    title: 'Policy Documents',
    desc: 'Official city proclamations, master plans, and legislative frameworks.',
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.246.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.246.477-4.5 1.253',
    color: 'violet'
  }
];

const CAT_COLORS: Record<string, string> = {
  blue: 'text-blue-600 bg-blue-50 border-blue-100 group-hover:border-blue-500',
  emerald: 'text-emerald-600 bg-emerald-50 border-emerald-100 group-hover:border-emerald-500',
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
            <span className="w-10 h-px bg-amber-400/50" />
          </motion.div>
          <motion.h1 {...fadeUp(0.2)} className="text-5xl sm:text-6xl font-bold leading-tight tracking-tight font-display mb-6 max-w-3xl">
            Transparency & <span className="text-amber-400 drop-shadow-[0_0_30px_rgba(245,158,11,0.3)]">Accountability</span>
          </motion.h1>
          <motion.p {...fadeUp(0.4)} className="text-white/70 text-lg max-w-xl leading-relaxed">
            Access official documents, city budgets, and development reports. We are committed to building an open and trustworthy administration.
          </motion.p>
        </div>
      </section>

      {/* ─── Document Hub ─── */}
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 font-display">Document Portal</h2>
            <p className="text-slate-500 mt-4">Select a category to browse and download official city publications.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((cat, i) => (
              <motion.button key={cat.title} {...fadeUp(i * 0.1)} whileHover={{ y: -4 }}
                className="flex flex-col items-start p-8 bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all text-left group"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border transition-all ${CAT_COLORS[cat.color]}`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={cat.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-display group-hover:text-blue-600 transition-colors">{cat.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">{cat.desc}</p>
                <span className="text-blue-600 font-bold text-sm flex items-center gap-2">
                  Browse Files
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7-7 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
              </motion.button>
            ))}
          </div>

          {/* ─── Quick Search / Filter ─── */}
          <motion.div {...fadeUp(0)} className="mt-16 bg-white rounded-3xl border border-slate-100 p-6 sm:p-8 shadow-sm">
             <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="relative flex-grow w-full">
                  <input 
                    type="text" 
                    placeholder="Search by keyword, year, or document ID..." 
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-12 py-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  />
                  <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <button className="w-full md:w-auto px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-colors">
                  Search
                </button>
             </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Transparency;
