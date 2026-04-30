import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";


const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const News = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const NEWS_CATEGORIES = [
    { id: 'all', label: t('news_page.categories.all') },
    { id: 'municipal', label: t('news_page.categories.municipal') },
    { id: 'economy', label: t('news_page.categories.economy') },
    { id: 'infrastructure', label: t('news_page.categories.infrastructure') },
    { id: 'social', label: t('news_page.categories.social') }
  ];

  const NEWS_ARTICLES = [
    {
      id: 1,
      category: 'municipal',
      title: t('news_page.articles.art1.title'),
      excerpt: t('news_page.articles.art1.excerpt'),
      image: '/city-1.jpg',
      date: t('news_page.articles.art1.date'),
      readTime: t('news_page.articles.art1.readTime'),
      featured: true
    },
    {
      id: 2,
      category: 'infrastructure',
      title: t('news_page.articles.art2.title'),
      excerpt: t('news_page.articles.art2.excerpt'),
      image: '/city-2.jpg',
      date: t('news_page.articles.art2.date'),
      readTime: t('news_page.articles.art2.readTime'),
      featured: false
    },
    {
      id: 3,
      category: 'economy',
      title: t('news_page.articles.art3.title'),
      excerpt: t('news_page.articles.art3.excerpt'),
      image: '/hero-4.jpg',
      date: t('news_page.articles.art3.date'),
      readTime: t('news_page.articles.art3.readTime'),
      featured: false
    },
    {
      id: 4,
      category: 'social',
      title: t('news_page.articles.art4.title'),
      excerpt: t('news_page.articles.art4.excerpt'),
      image: '/city-3.jpg',
      date: t('news_page.articles.art4.date'),
      readTime: t('news_page.articles.art4.readTime'),
      featured: false
    }
  ];

  const filteredArticles = NEWS_ARTICLES.filter(article => {
    const matchesCategory = activeCategory === 'all' || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = NEWS_ARTICLES.find(a => a.featured);
  const listArticles = filteredArticles.filter(a => !a.featured || searchQuery || activeCategory !== 'all');

  return (
    <div className="bg-slate-50">
      {/* ─── Hero Banner ─── */}
      <section className="relative overflow-hidden bg-slate-950 text-white min-h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-[url('/city-4.jpg')] bg-cover bg-center opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />

        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-red-500/15 rounded-full blur-[120px] pointer-events-none hidden lg:block"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 w-full">
          <motion.div
            {...fadeUp(0.1)}
            className="inline-flex items-center gap-3 tracking-tight text-xs font-medium text-red-400 mb-6"
          >
            <span className="w-10 h-px bg-red-400/50" />
            {t('news_page.hero_badge')}
          </motion.div>
          <motion.h1
            {...fadeUp(0.2)}
            className="text-3xl sm:text-5xl font-bold leading-tight tracking-tight font-display mb-6 max-w-3xl"
          >
            {t('news_page.hero_title')} <span className="text-red-400 drop-shadow-[0_0_30px_rgba(239,68,68,0.3)]">{t('header.title')}</span>
          </motion.h1>
          <motion.p
            {...fadeUp(0.4)}
            className="text-white/70 text-sm sm:text-base max-w-xl leading-relaxed"
          >
            {t('news_page.hero_desc')}
          </motion.p>
        </div>

        {/* Custom SVG wave divider like About page */}
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
          <div className="bg-white rounded-3xl shadow-xl p-5 sm:p-7 border border-slate-100 flex flex-col lg:flex-row items-center gap-5">
            <div className="flex-1 w-full relative">
              <input 
                type="text"
                placeholder={t('news_page.search_placeholder')}
                className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/20 transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {NEWS_CATEGORIES.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-medium tracking-tight transition-all ${activeCategory === cat.id ? "bg-slate-900 text-white shadow-md" : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"}`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Featured Story ─── */}
      {!searchQuery && activeCategory === 'all' && featuredArticle && (
        <section className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp(0)} className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center bg-white rounded-[2.5rem] p-8 sm:p-12 border border-slate-100 shadow-sm">
              {/* Image */}
              <div className="lg:col-span-3 relative group rounded-2xl overflow-hidden aspect-[16/9] shadow-lg">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
                <div className="absolute top-5 left-5 bg-red-600 text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg">
                  {t('news_page.todays_top')}
                </div>
              </div>
              {/* Text */}
              <div className="lg:col-span-2">
                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-red-500 mb-4 flex items-center gap-3">
                  <span className="w-8 h-px bg-red-500" />
                  {t('news_page.featured_story')}
                </p>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug tracking-tight font-display mb-4">
                  {featuredArticle.title}
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center gap-5 mb-8 pb-8 border-b border-slate-100">
                  <span className="text-xs font-bold text-slate-400">{featuredArticle.date}</span>
                  <span className="text-xs font-bold text-slate-400">{featuredArticle.readTime}</span>
                </div>
                <button className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white text-sm font-bold rounded-full hover:bg-red-600 transition-all shadow-lg hover:-translate-y-0.5 group">
                  {t('news_page.read_full')}
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7-7 7" /></svg>
                </button>
              </div>
            </motion.div>
          </div>

         {/* <WaveDivider variant="darkToWhite" /> */}
        </section>
      )}

      {/* ─── News List (editorial style) ─── */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="flex items-end justify-between mb-12 gap-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-red-500 mb-2">
                {t('news_page.explore_more')}
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display tracking-tight">
                {t('news_page.all_announcements')}
              </h2>
            </div>
            <span className="text-xs font-bold text-slate-400">{filteredArticles.length} {filteredArticles.length === 1 ? 'story' : 'stories'}</span>
          </motion.div>

          <AnimatePresence mode="popLayout">
            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {listArticles.map((article, idx) => (
                  <motion.article
                    layout
                    key={article.id}
                    {...fadeUp(idx * 0.08)}
                    className="relative h-[300px] sm:h-[350px] rounded-[2rem] overflow-hidden shadow-lg group cursor-pointer"
                  >
                    {/* Background Image */}
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                    />
                    
                    {/* Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                    
                    {/* Content */}
                    <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-2 py-1 bg-red-600 text-white text-[10px] font-medium rounded-md">
                          {t(`news_page.categories.${article.category}`)}
                        </span>
                        <span className="text-xs font-medium text-white/70">
                          {article.date}
                        </span>
                      </div>
                      
                      <h3 className="text-lg sm:text-xl font-bold text-white font-display leading-tight mb-3 group-hover:text-red-400 transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      
                      <p className="text-white/70 text-xs line-clamp-2 mb-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                        {article.excerpt}
                      </p>

                      {/* Read More Indicator */}
                      <div className="flex items-center gap-2 text-white font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 tracking-tight">
                        Read Story
                        <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" /></svg>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-slate-50 rounded-[2.5rem] border border-dashed border-slate-200">
                <h3 className="text-base font-bold text-slate-900 mb-2">{t('news_page.no_results')}</h3>
                <p className="text-slate-500 text-sm">{t('news_page.no_results_desc')}</p>
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* Wave into newsletter */}
        {/* <WaveDivider variant="lightToWhite" /> */}
      </section>

      {/* ─── Newsletter ─── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div {...fadeUp(0)} className="bg-slate-950 rounded-[2.5rem] p-10 lg:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-red-600/10 blur-[100px] pointer-events-none" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-red-400 mb-5 relative z-10">
              {t('news_page.newsletter_badge')}
            </p>
            <h2 className="text-2xl sm:text-4xl font-bold text-white font-display tracking-tight mb-5 leading-tight relative z-10">
              {t('news_page.newsletter_title')} <span className="text-red-400">{t('news_page.title')}</span>
            </h2>
            <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-xl mx-auto relative z-10">
              {t('news_page.newsletter_desc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center relative z-10">
              <input 
                type="email" 
                placeholder={t('news_page.email_placeholder')}
                className="px-7 py-4 bg-white/10 border border-white/20 rounded-full text-white text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 min-w-[280px]"
              />
              <button className="px-8 py-4 bg-red-600 text-white font-black uppercase tracking-widest text-[10px] rounded-full hover:bg-red-700 transition-all shadow-xl shadow-red-600/30">
                {t('news_page.subscribe_btn')}
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default News;
