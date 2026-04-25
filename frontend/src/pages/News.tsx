import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
});

type Category = 'All' | 'Announcement' | 'Update' | 'Article' | 'Project';

const CATEGORIES: Category[] = ['All', 'Announcement', 'Update', 'Article', 'Project'];

const CATEGORY_STYLES: Record<string, string> = {
  Announcement: 'bg-blue-50 text-blue-700',
  Update: 'bg-emerald-50 text-emerald-700',
  Article: 'bg-purple-50 text-purple-700',
  Project: 'bg-amber-50 text-amber-700',
};

const FEATURED = {
  category: 'Announcement' as Category,
  title: 'Sheger City Digital Portal Reaches 100,000 Active Users',
  date: 'April 25, 2026',
  read: '4 min read',
  excerpt: 'The Sheger City Digital Government Portal has officially crossed 100,000 registered users, marking a milestone in the city\'s ambitious smart-city transformation journey. Citizens can now apply for over 30 services entirely online.',
  image: '/city-2.jpg',
};

interface NewsItem {
  category: Category;
  title: string;
  date: string;
  read: string;
  excerpt: string;
  image: string;
}

const NEWS_ITEMS: NewsItem[] = [
  {
    category: 'Project',
    title: 'Inner Ring Road Expansion — Phase 2 Begins',
    date: 'April 22, 2026',
    read: '3 min read',
    excerpt: 'Construction of the second phase of Sheger\'s inner ring road has officially commenced, promising to ease traffic and connect three new sub-cities.',
    image: '/city-1.jpg',
  },
  {
    category: 'Update',
    title: 'Online Property Registration Now Available Citywide',
    date: 'April 20, 2026',
    read: '2 min read',
    excerpt: 'All 12 sub-cities now support fully digital property registration. Residents can submit and track applications without visiting an office.',
    image: '/city-3.jpg',
  },
  {
    category: 'Article',
    title: 'How Sheger is Becoming East Africa\'s Greenest City',
    date: 'April 17, 2026',
    read: '6 min read',
    excerpt: 'With over 500,000 trees planted and 200 hectares of new parks, Sheger\'s urban greening initiative is drawing international attention.',
    image: '/city-4.jpg',
  },
  {
    category: 'Announcement',
    title: 'Extended Service Hours at All Administration Offices',
    date: 'April 15, 2026',
    read: '2 min read',
    excerpt: 'Starting May 1, all major administrative offices will extend working hours to 6 PM on weekdays to better serve working professionals.',
    image: '/hero-2.jpg',
  },
  {
    category: 'Project',
    title: 'New Smart Traffic Management System Deployed',
    date: 'April 10, 2026',
    read: '4 min read',
    excerpt: 'AI-powered traffic signals have been installed at 45 key intersections across the city, reducing peak-hour congestion by an estimated 30%.',
    image: '/hero-4.jpg',
  },
  {
    category: 'Article',
    title: 'Public Consultation on Smart City Master Plan',
    date: 'April 5, 2026',
    read: '5 min read',
    excerpt: 'Join city planners for an interactive public consultation on integrating AI, IoT, and clean energy into Sheger\'s 10-year master plan.',
    image: '/city-2.jpg',
  },
  {
    category: 'Update',
    title: 'Free Health Screening Campaign Citywide This Month',
    date: 'April 1, 2026',
    read: '2 min read',
    excerpt: 'Free general health screenings are available at all government health centers across Sheger\'s 12 sub-cities throughout April.',
    image: '/hero-1.jpg',
  },
  {
    category: 'Announcement',
    title: 'Sheger Launches New Business Licensing Fast-Track',
    date: 'March 28, 2026',
    read: '3 min read',
    excerpt: 'New businesses can now receive their operating license within 48 hours through the city\'s streamlined online fast-track system.',
    image: '/city-3.jpg',
  },
  {
    category: 'Project',
    title: '10 New Public Schools Open in Underserved Sub-Cities',
    date: 'March 20, 2026',
    read: '4 min read',
    excerpt: 'A major education investment sees ten brand-new schools opening across historically underserved areas, benefiting over 12,000 students.',
    image: '/city-4.jpg',
  },
];

const News = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = NEWS_ITEMS.filter((item) => {
    const matchCat = activeCategory === 'All' || item.category === activeCategory;
    const matchSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="bg-slate-50 font-sans">

      {/* ─── Hero Banner ─── */}
      <section className="relative bg-slate-950 text-white overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-[url('/city-3.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute right-1/4 top-1/4 w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-[130px] pointer-events-none hidden lg:block"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-3 uppercase tracking-[0.35em] text-[10px] font-black text-amber-400 mb-6">
            <span className="w-10 h-px bg-amber-400/50" />
            Stay Informed
          </motion.div>
          <motion.h1 {...fadeUp(0.2)} className="text-5xl sm:text-7xl font-bold leading-tight tracking-tight font-display mb-6 max-w-3xl">
            News &amp; <span className="text-amber-400 drop-shadow-[0_0_30px_rgba(245,158,11,0.3)]">Updates</span>
          </motion.h1>
          <motion.p {...fadeUp(0.4)} className="text-white/70 text-lg sm:text-xl max-w-xl leading-relaxed">
            Stay up to date with the latest announcements, city projects, and articles from Sheger City.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 translate-y-[1px]">
          <svg viewBox="0 0 1440 80" className="w-full h-auto" fill="none">
            <path d="M0 80L60 70C120 60 240 40 360 30C480 20 600 20 720 25C840 30 960 40 1080 45C1200 50 1320 50 1380 50L1440 50V80H0Z" fill="#f8fafc" />
          </svg>
        </div>
      </section>

      {/* ─── Featured Article ─── */}
      <section className="py-16 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-xs font-black uppercase tracking-[0.3em] text-amber-500 mb-6">Featured Story</motion.div>
          <motion.div {...fadeUp(0.1)} className="group grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-500 cursor-pointer">
            {/* Image */}
            <div className="relative h-64 lg:h-auto overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms] group-hover:scale-110"
                style={{ backgroundImage: `url('${FEATURED.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <span className={`absolute top-6 left-6 px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-full ${CATEGORY_STYLES[FEATURED.category]}`}>
                {FEATURED.category}
              </span>
            </div>
            {/* Content */}
            <div className="p-8 sm:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 text-slate-400 text-sm mb-4">
                <span>{FEATURED.date}</span>
                <span className="w-1 h-1 bg-slate-300 rounded-full" />
                <span>{FEATURED.read}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-display leading-tight mb-4 group-hover:text-blue-600 transition-colors">
                {FEATURED.title}
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8">{FEATURED.excerpt}</p>
              <button className="self-start inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-bold rounded-full hover:bg-blue-600 transition-all group/btn">
                Read Full Story
                <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Filter + Search Bar ─── */}
      <section className="py-10 bg-white border-b border-slate-100 sticky top-[80px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          {/* Category filters */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-slate-900 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          {/* Search */}
          <div className="relative w-full sm:w-72">
            <svg className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-full py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
            />
          </div>
        </div>
      </section>

      {/* ─── Article Grid ─── */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {filtered.length > 0 ? (
              <motion.div
                key={activeCategory + searchQuery}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
              >
                {filtered.map((item, i) => (
                  <motion.article
                    key={item.title}
                    {...fadeUp(i * 0.06)}
                    whileHover={{ y: -6 }}
                    className="group bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer"
                  >
                    {/* Card Image */}
                    <div className="relative h-48 overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms] group-hover:scale-110"
                        style={{ backgroundImage: `url('${item.image}')` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <span className={`absolute top-4 left-4 px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded-full ${CATEGORY_STYLES[item.category]}`}>
                        {item.category}
                      </span>
                    </div>
                    {/* Card Body */}
                    <div className="p-6 sm:p-7">
                      <div className="flex items-center gap-2 text-slate-400 text-xs mb-3">
                        <span>{item.date}</span>
                        <span className="w-1 h-1 bg-slate-300 rounded-full" />
                        <span>{item.read}</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-black text-slate-900 font-display leading-snug mb-3 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-5">{item.excerpt}</p>
                      <span className="text-blue-600 font-bold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read More
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            ) : (
              <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-24">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-2xl font-black text-slate-900 font-display mb-2">No results found</h3>
                <p className="text-slate-400">Try a different keyword or category filter.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ─── Newsletter CTA ─── */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 14, repeat: Infinity }}
          className="absolute left-1/4 top-0 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[130px] pointer-events-none"
        />
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <motion.div {...fadeUp(0)}>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-amber-400 mb-4">Stay Connected</p>
            <h2 className="text-4xl sm:text-5xl font-bold font-display tracking-tight mb-6">
              Never Miss an Update
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10">
              Get the latest news, announcements, and city projects delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-white/10 border border-white/20 rounded-full py-4 px-6 text-white placeholder-white/40 focus:outline-none focus:border-amber-400 transition-all text-sm"
              />
              <button className="px-8 py-4 bg-amber-500 text-slate-900 font-black rounded-full hover:bg-amber-400 transition-all shadow-lg shadow-amber-500/20 whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-white/30 text-xs mt-4">No spam. Unsubscribe any time.</p>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default News;
