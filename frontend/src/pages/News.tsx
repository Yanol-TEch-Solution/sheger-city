import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const NEWS_CATEGORIES = [
  { id: 'all', label: 'All News' },
  { id: 'municipal', label: 'Municipal' },
  { id: 'economy', label: 'Economy' },
  { id: 'infrastructure', label: 'Infrastructure' },
  { id: 'social', label: 'Social Welfare' }
];

const NEWS_ARTICLES = [
  {
    id: 1,
    category: 'municipal',
    title: 'Sheger City Inaugurates New Digital Service Hub',
    excerpt: 'The Mayor of Sheger City officially opened the state-of-the-art Digital Service Hub in Buraayyuu, aimed at streamlining administrative processes.',
    image: '/city-1.jpg',
    date: 'May 24, 2024',
    readTime: '5 min read',
    featured: true
  },
  {
    id: 2,
    category: 'infrastructure',
    title: 'New Road Project to Connect Sabbataa and Sulultaa',
    excerpt: 'A major infrastructure project has been announced to build a 45km high-speed road connecting the key industrial zones.',
    image: '/city-2.jpg',
    date: 'May 22, 2024',
    readTime: '3 min read',
    featured: false
  },
  {
    id: 3,
    category: 'economy',
    title: 'Annual Economic Summit Highlights Growth Potential',
    excerpt: 'Economists and city officials gathered to discuss the unprecedented growth of Sheger City as a regional economic powerhouse.',
    image: '/hero-4.jpg',
    date: 'May 20, 2024',
    readTime: '8 min read',
    featured: false
  },
  {
    id: 4,
    category: 'social',
    title: 'New Green Spaces and Parks Initiative Launched',
    excerpt: 'The "Green Sheger" initiative aims to create 50 new public parks and recreational spaces across all sub-cities by 2026.',
    image: '/city-3.jpg',
    date: 'May 18, 2024',
    readTime: '4 min read',
    featured: false
  }
];

const News = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = NEWS_ARTICLES.filter(article => {
    const matchesCategory = activeCategory === 'all' || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = NEWS_ARTICLES.find(a => a.featured);

  return (
    <div className="bg-slate-50">
      {/* ─── Hero Banner (Matches About) ─── */}
      <section className="relative overflow-hidden bg-slate-950 text-white min-h-[55vh] flex items-center">
        <div className="absolute inset-0 bg-[url('/city-4.jpg')] bg-cover bg-center opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />

        {/* Ambient glow */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-red-500/15 rounded-full blur-[120px] pointer-events-none hidden lg:block"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 w-full">
          <motion.div
            {...fadeUp(0.1)}
            className="inline-flex items-center gap-3 uppercase tracking-[0.35em] text-[10px] font-semibold text-red-400 mb-6"
          >
            <span className="w-10 h-px bg-red-400/50" />
            Official Newsroom
          </motion.div>
          <motion.h1
            {...fadeUp(0.2)}
            className="text-5xl sm:text-7xl font-bold leading-tight tracking-tight font-display mb-6 max-w-3xl"
          >
            Latest Updates from <span className="text-red-400 drop-shadow-[0_0_30px_rgba(239,68,68,0.3)]">Sheger City</span>
          </motion.h1>
          <motion.p
            {...fadeUp(0.4)}
            className="text-white/70 text-lg sm:text-xl max-w-xl leading-relaxed"
          >
            Stay informed about city developments, municipal announcements, and major policy updates from the official government portal.
          </motion.p>
        </div>

        {/* Wave Decoration */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-[1px]">
          <svg viewBox="0 0 1440 80" className="w-full h-auto" fill="none">
            <path
              d="M0 80L60 70C120 60 240 40 360 30C480 20 600 20 720 25C840 30 960 40 1080 45C1200 50 1320 50 1380 50L1440 50V80H0Z"
              fill="#f8fafc"
            />
          </svg>
        </div>
      </section>

      {/* ─── Search & Categories Bar ─── */}
      <section className="bg-slate-50 py-8 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20">
          <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-slate-100 flex flex-col lg:flex-row items-center gap-6">
            <div className="flex-1 w-full relative">
              <input 
                type="text"
                placeholder="Search articles..."
                className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/20 transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {NEWS_CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${activeCategory === cat.id ? "bg-slate-900 text-white shadow-lg" : "text-slate-400 hover:text-slate-600 hover:bg-slate-50"}`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Featured News (Matches Overview Layout) ─── */}
      {!searchQuery && activeCategory === 'all' && featuredArticle && (
        <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div {...fadeUp(0)}>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-red-500 mb-4 flex items-center gap-3">
                  <span className="w-8 h-px bg-red-500" />
                  Featured Story
                </p>
                <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight tracking-tight font-display mb-6">
                  {featuredArticle.title}
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center gap-6 mb-10 pb-10 border-b border-slate-100">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    {featuredArticle.date}
                  </div>
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    {featuredArticle.readTime}
                  </div>
                </div>
                <button className="inline-flex items-center gap-2 px-10 py-5 bg-slate-900 text-white font-bold rounded-full hover:bg-red-600 transition-all shadow-xl shadow-slate-900/20 hover:-translate-y-1 group">
                  Read Full Article
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7-7 7" /></svg>
                </button>
              </motion.div>

              <motion.div {...fadeUp(0.2)} className="relative group">
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3] border-4 border-white">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                </div>
                {/* Floating badge */}
                <div className="absolute -top-6 -right-6 bg-red-600 text-white p-6 rounded-[2rem] shadow-2xl border-4 border-white font-black uppercase tracking-widest text-xs rotate-3">
                  Today's Top News
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* ─── News Grid ─── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-500 mb-4">
              Explore More
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 font-display tracking-tight">
              All Announcements
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredArticles.map((article, idx) => (
                <motion.article
                  layout
                  key={article.id}
                  {...fadeUp(idx * 0.1)}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-[2rem] border border-slate-100 p-8 shadow-sm hover:shadow-2xl transition-all duration-300 group flex flex-col"
                >
                  <div className="relative h-56 rounded-2xl overflow-hidden mb-8">
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-4 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-red-600 transition-colors line-clamp-2 font-display leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="pt-6 mt-auto border-t border-slate-50">
                      <button className="text-red-600 font-black text-xs uppercase tracking-[0.2em] flex items-center gap-2 group/btn">
                        Read Story
                        <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7-7 7" /></svg>
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-24 bg-white rounded-[3rem] border border-dashed border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-2">No Articles Found</h3>
              <p className="text-slate-500">Try a different search term or category.</p>
            </div>
          )}
        </div>
      </section>

      {/* ─── Newsletter (Matches CTA Section) ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div {...fadeUp(0)} className="bg-slate-950 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-red-600/10 blur-[100px] pointer-events-none" />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-400 mb-6 relative z-10">
              Stay Connected
            </p>
            <h2 className="text-4xl sm:text-6xl font-bold text-white font-display tracking-tight mb-6 leading-tight relative z-10">
              Subscribe to <span className="text-red-400">Sheger News</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-xl mx-auto relative z-10">
              Receive the weekly digest of municipal announcements and city updates directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-8 py-5 bg-white/10 border border-white/20 rounded-full text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 min-w-[300px]"
              />
              <button className="px-10 py-5 bg-red-600 text-white font-black uppercase tracking-widest text-xs rounded-full hover:bg-red-700 transition-all shadow-xl shadow-red-600/30">
                Join Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default News;
