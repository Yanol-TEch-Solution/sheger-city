import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-slate-50 font-sans">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden min-h-[90vh] flex items-center">
        {/* Animated Background Blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/30 blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-600/20 blur-[120px] animate-pulse delay-1000"></div>
          <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-purple-600/20 blur-[80px] animate-pulse delay-700"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGg3djFoLTd6bTAtNWg3djFoLTd6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30 mix-blend-overlay"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-blue-300 font-medium text-sm mb-6 border border-white/10 shadow-lg">
              {t('home.hero.badge')}
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
              {t('home.hero.title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">{t('home.hero.city')}</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              {t('home.hero.subtitle')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/services"
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-500 transition-all duration-300 shadow-[0_0_40px_-10px_rgba(37,99,235,0.7)] hover:shadow-[0_0_60px_-15px_rgba(37,99,235,0.9)] hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                <span className="relative flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {t('home.hero.explore')}
                </span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-md text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-white/30 hover:-translate-y-1"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {t('home.hero.find_office')}
              </Link>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0 z-10 translate-y-[1px]">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#f8fafc" />
          </svg>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">{t('home.leadership.title')}</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">{t('home.leadership.subtitle')}</p>
          </div>

          {/* Mayor Section */}
          <div className="bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] mb-16 flex flex-col md:flex-row items-center gap-12 group hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] transition-all duration-500">
            <div className="w-full md:w-2/5 shrink-0 relative overflow-hidden rounded-2xl aspect-[4/5] shadow-lg">
              {/* Note to user: Replace this src with the actual screenshot/image of the Mayor */}
              <img
                src="/dr.teshome.jpg"
                alt="Dr. Teshome Aduna"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-2xl font-bold">Dr. Teshome Aduna (Ph.D.)</h3>
                <p className="text-blue-200 font-medium">Mayor of Sheger City</p>
              </div>
            </div>
            <div className="w-full md:w-3/5">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Welcome</h3>
              <h4 className="text-xl text-blue-600 font-semibold mb-6">A Warm Welcome to the Residents and Visitors of Sheger City</h4>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                As the mayor of Sheger City, I am excited to share our bold vision for the future of our community. We are committed to transforming Sheger into a model smart city—competitive, livable, and responsive to the needs of all residents.
              </p>
              <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
                Read Full Message
              </button>
            </div>
          </div>

          {/* Deputy Mayors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mr. Guyo Galgalo */}
            <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 group">
              <div className="h-80 sm:h-96 relative overflow-hidden">
                <img
                  src="/mr.guyo.png"
                  alt="Mr. Guyo Galgalo"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8 text-center">
                <h4 className="text-xl font-bold text-slate-900 mb-2">Mr. Guyo Galgalo</h4>
                <p className="text-sm text-slate-500 line-clamp-3">We invite all stakeholders—businesses, community leaders, and residents—to engage actively in these efforts to foster an inclusive environment.</p>
              </div>
            </div>

            {/* Mr. Gugsa Dejene */}
            <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 group">
              <div className="h-80 sm:h-96 relative overflow-hidden">
                <img
                  src="/mr.gugsa.png"
                  alt="Mr. Gugsa Dejene"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8 text-center">
                <h4 className="text-xl font-bold text-slate-900 mb-2">Mr. Gugsa Dejene</h4>
                <p className="text-sm text-slate-500 line-clamp-3">Deputy Mayor and Head of the Administration and Service Sector, committed to enhancing the quality of public services.</p>
              </div>
            </div>

            {/* Mr. Hailu Girma */}
            <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 group">
              <div className="h-80 sm:h-96 relative overflow-hidden">
                <img
                  src="/mr.hailu.png"
                  alt="Mr. Hailu Girma"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8 text-center">
                <h4 className="text-xl font-bold text-slate-900 mb-2">Mr. Hailu Girma</h4>
                <p className="text-sm text-slate-500 line-clamp-3">Deputy Mayor and Head of the Urban Agriculture Cluster, focusing on sustainability and community well-being.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services */}
      <section className="py-24 bg-slate-50 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">{t('home.quick_services.title')}</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">{t('home.quick_services.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link to="/sector/land/permits" className="group relative bg-white p-8 rounded-3xl border border-slate-100 hover:border-blue-200 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.15)] transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110 z-0"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-inner">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">Building Permits</h3>
                <p className="text-slate-600 leading-relaxed">Apply for construction and building permits seamlessly online.</p>
                <div className="mt-6 flex items-center text-blue-600 font-semibold opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  Apply Now <span className="ml-2">&rarr;</span>
                </div>
              </div>
            </Link>

            <Link to="/sector/business/license" className="group relative bg-white p-8 rounded-3xl border border-slate-100 hover:border-green-200 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(34,197,94,0.15)] transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110 z-0"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300 shadow-inner">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-green-600 transition-colors">Business License</h3>
                <p className="text-slate-600 leading-relaxed">Register and license your new or existing business quickly.</p>
                <div className="mt-6 flex items-center text-green-600 font-semibold opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  Apply Now <span className="ml-2">&rarr;</span>
                </div>
              </div>
            </Link>

            <Link to="/sector/transport/license" className="group relative bg-white p-8 rounded-3xl border border-slate-100 hover:border-purple-200 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(168,85,247,0.15)] transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110 z-0"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300 shadow-inner">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">Driver's License</h3>
                <p className="text-slate-600 leading-relaxed">Apply, renew or replace your driver's license with ease.</p>
                <div className="mt-6 flex items-center text-purple-600 font-semibold opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  Apply Now <span className="ml-2">&rarr;</span>
                </div>
              </div>
            </Link>

            <Link to="/sector/health" className="group relative bg-white p-8 rounded-3xl border border-slate-100 hover:border-red-200 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(239,68,68,0.15)] transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110 z-0"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300 shadow-inner">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors">Health Services</h3>
                <p className="text-slate-600 leading-relaxed">Access healthcare facilities, records, and medical services.</p>
                <div className="mt-6 flex items-center text-red-600 font-semibold opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  Apply Now <span className="ml-2">&rarr;</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="text-center group">
              <div className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-4 group-hover:scale-110 transition-transform duration-300">11</div>
              <div className="text-slate-500 font-bold uppercase tracking-wider text-sm">Sub Cities</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500 mb-4 group-hover:scale-110 transition-transform duration-300">50+</div>
              <div className="text-slate-500 font-bold uppercase tracking-wider text-sm">Online Services</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-4 group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-slate-500 font-bold uppercase tracking-wider text-sm">Digital Access</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 mb-4 group-hover:scale-110 transition-transform duration-300">98%</div>
              <div className="text-slate-500 font-bold uppercase tracking-wider text-sm">Citizen Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">Latest Updates</h2>
              <p className="text-xl text-slate-600 max-w-2xl">Stay informed about city developments and community announcements.</p>
            </div>
            <Link to="/news" className="group flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors px-6 py-3 bg-white rounded-xl shadow-sm hover:shadow-md border border-slate-200">
              View All News
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="group bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2">
              <div className="h-56 bg-gradient-to-br from-blue-500 to-cyan-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-blue-700">MAR 12, 2026</div>
              </div>
              <div className="p-8">
                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-md mb-4 uppercase tracking-wider">New Service</span>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-snug">Online Property Registration Launch</h3>
                <p className="text-slate-600 mb-6 line-clamp-2">Register your property online without visiting offices. Fast, secure, and incredibly convenient for all Sheger residents.</p>
                <Link to="/news/1" className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm group-hover:gap-3 transition-all">
                  Read Full Story <span className="text-xl leading-none">&rarr;</span>
                </Link>
              </div>
            </article>

            <article className="group bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2">
              <div className="h-56 bg-gradient-to-br from-emerald-500 to-green-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-green-700">MAR 10, 2026</div>
              </div>
              <div className="p-8">
                <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-md mb-4 uppercase tracking-wider">Update</span>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors leading-snug">Extended Service Hours Announced</h3>
                <p className="text-slate-600 mb-6 line-clamp-2">All major administrative offices are now open until 6 PM on weekdays to accommodate working professionals.</p>
                <Link to="/news/2" className="inline-flex items-center gap-2 text-emerald-600 font-bold text-sm group-hover:gap-3 transition-all">
                  Read Full Story <span className="text-xl leading-none">&rarr;</span>
                </Link>
              </div>
            </article>

            <article className="group bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2">
              <div className="h-56 bg-gradient-to-br from-purple-500 to-pink-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-purple-700">MAR 08, 2026</div>
              </div>
              <div className="p-8">
                <span className="inline-block px-3 py-1 bg-purple-50 text-purple-700 text-xs font-bold rounded-md mb-4 uppercase tracking-wider">Event</span>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors leading-snug">Public Consultation on Smart City</h3>
                <p className="text-slate-600 mb-6 line-clamp-2">Join city planners for an interactive discussion on integrating AI and smart tech into Sheger City infrastructure.</p>
                <Link to="/news/3" className="inline-flex items-center gap-2 text-purple-600 font-bold text-sm group-hover:gap-3 transition-all">
                  Read Full Story <span className="text-xl leading-none">&rarr;</span>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-600"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-50"></div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight">Ready to Get Started?</h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Create an account today to manage all your government interactions from one unified dashboard.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/services"
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-10 py-5 bg-white text-blue-700 font-bold rounded-2xl hover:bg-blue-50 transition-all duration-300 shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)] hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.8)] hover:-translate-y-1 text-lg"
            >
              Start Application Now
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              to="/about"
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-10 py-5 bg-transparent text-white font-bold rounded-2xl border-2 border-white/30 hover:border-white transition-all duration-300 hover:bg-white/10 text-lg"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Floating AI Assistant */}
      <button className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-tr from-blue-600 to-cyan-500 text-white rounded-full shadow-[0_10px_40px_-10px_rgba(37,99,235,0.8)] hover:shadow-[0_15px_50px_-10px_rgba(37,99,235,0.9)] transition-all duration-300 flex items-center justify-center group hover:w-auto hover:px-8 z-50 hover:-translate-y-2 border border-white/20">
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <span className="hidden group-hover:inline-block ml-3 font-bold whitespace-nowrap">AI Assistant</span>
      </button>
    </div>
  );
};

export default Home;
