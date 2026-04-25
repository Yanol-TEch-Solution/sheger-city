import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import logoUrl from '../../assets/logo.png';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubMenu, setMobileSubMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileSubMenu(null);
  }, [location.pathname]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const SUB_CITIES = [
    "Furii", "Galaan", "Galaan Guddaa", "Gafarsa Gujee", "Buraayyuu", 
    "Sabbataa", "Mana Abbichuu", "Malkaa Noonnoo", "Kooyyee Faccee", 
    "Kuraa Jiddaa", "Sulultaa", "Lagaxafoo"
  ];

  const DISTRICTS = [
    "Aanaa galaan", "Aanaa Andoodee", "Aanaa siidaa Awaash"
  ];

  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
    isHome 
      ? (scrolled || mobileMenuOpen ? 'bg-white/95 backdrop-blur-xl shadow-xl py-2' : 'bg-transparent py-4') 
      : 'bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm py-2'
  }`;

  const linkClasses = (isActive: boolean) => `px-4 py-2 text-sm font-bold transition-all duration-300 rounded-xl ${
    isHome && !scrolled && !mobileMenuOpen
      ? 'text-white hover:bg-white/10' 
      : (isActive ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-700 hover:text-blue-600 hover:bg-slate-100')
  }`;

  return (
    <header className={headerClasses}>
      <div className="max-w-[1600px] mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 sm:gap-4 group">
            <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center shrink-0 relative">
              <div className="absolute inset-0 bg-white/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img src={logoUrl} alt="Sheger City Logo" className="w-full h-full object-contain drop-shadow-md transition-transform duration-500 group-hover:scale-105 relative z-10" />
            </div>
            <div className="overflow-hidden">
              <h1 className={`text-lg sm:text-2xl font-black transition-colors duration-500 truncate font-display ${isHome && !scrolled && !mobileMenuOpen ? 'text-white' : 'text-slate-900'}`}>{t('header.title')}</h1>
              <p className={`text-[10px] sm:text-sm transition-colors duration-500 truncate font-sans ${isHome && !scrolled && !mobileMenuOpen ? 'text-white/70' : 'text-slate-600'}`}>{t('header.subtitle')}</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-2">
            <Link to="/about" className={linkClasses(false)}>{t('header.about')}</Link>
            
            <div className="relative" onMouseEnter={() => setActiveDropdown('subcity')} onMouseLeave={() => setActiveDropdown(null)}>
              <button className={`${linkClasses(activeDropdown === 'subcity')} flex items-center gap-1`}>
                {t('header.subcity')}
                <motion.svg animate={{ rotate: activeDropdown === 'subcity' ? 180 : 0 }} className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></motion.svg>
              </button>
              <AnimatePresence>
                {activeDropdown === 'subcity' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute left-0 top-full pt-2 w-64 z-50">
                    <div className="bg-white rounded-xl shadow-2xl border border-gray-100 py-3 overflow-hidden">
                      <div className="px-5 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-50 mb-2">Municipal Sub Cities</div>
                      <div className="max-h-[400px] overflow-y-auto custom-scrollbar">
                        {SUB_CITIES.map((name) => (
                          <Link key={name} to={`/subcity/${name.toLowerCase().replace(/\s+/g, '-')}`} className="flex items-center justify-between px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-blue-600 hover:text-white transition-all group mx-2 rounded-lg">
                            {name}
                            <svg className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="relative" onMouseEnter={() => setActiveDropdown('district')} onMouseLeave={() => setActiveDropdown(null)}>
              <button className={`${linkClasses(activeDropdown === 'district')} flex items-center gap-1`}>
                {t('header.district') || 'District'}
                <motion.svg animate={{ rotate: activeDropdown === 'district' ? 180 : 0 }} className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></motion.svg>
              </button>
              <AnimatePresence>
                {activeDropdown === 'district' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute left-0 top-full pt-2 w-64 z-50">
                    <div className="bg-white rounded-xl shadow-2xl border border-gray-100 py-3 overflow-hidden">
                      <div className="px-5 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-50 mb-2">Municipal Districts</div>
                      <div className="max-h-[400px] overflow-y-auto custom-scrollbar">
                        {DISTRICTS.map((name) => (
                          <Link key={name} to={`/district/${name.toLowerCase().replace(/\s+/g, '-')}`} className="flex items-center justify-between px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-blue-600 hover:text-white transition-all group mx-2 rounded-lg">
                            {name}
                            <svg className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="relative" onMouseEnter={() => setActiveDropdown('services')} onMouseLeave={() => setActiveDropdown(null)}>
              <button className={`${linkClasses(activeDropdown === 'services')} flex items-center gap-1`}>
                {t('header.services')}
                <motion.svg animate={{ rotate: activeDropdown === 'services' ? 180 : 0 }} className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></motion.svg>
              </button>
              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="fixed left-0 right-0 mx-auto w-[95vw] xl:w-[900px] top-[80px] pt-2 z-50">
                    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8">
                      <div className="grid grid-cols-2 gap-8">
                        {["Property & Land", "Health & Welfare", "Transport", "Business"].map((cat) => (
                          <div key={cat} className="space-y-4">
                            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-50 pb-2">{cat}</h3>
                            <div className="flex flex-col gap-1">
                              {cat === "Property & Land" && <>
                                <Link to="/sector/land" className="block px-4 py-2.5 text-sm font-semibold text-slate-600 hover:text-white hover:bg-blue-600 rounded-xl hover:translate-x-1 transition-all">Land Administration</Link>
                                <Link to="/sector/land/permits" className="block px-4 py-2.5 text-sm font-semibold text-slate-600 hover:text-white hover:bg-blue-600 rounded-xl hover:translate-x-1 transition-all">Building Permits</Link>
                              </>}
                              {cat === "Health & Welfare" && <>
                                <Link to="/sector/health" className="block px-4 py-2.5 text-sm font-semibold text-slate-600 hover:text-white hover:bg-blue-600 rounded-xl hover:translate-x-1 transition-all">Health Services</Link>
                                <Link to="/sector/health/emergency" className="block px-4 py-2.5 text-sm font-semibold text-slate-600 hover:text-white hover:bg-blue-600 rounded-xl hover:translate-x-1 transition-all">Emergency Services</Link>
                              </>}
                              {cat === "Transport" && <>
                                <Link to="/sector/transport" className="block px-4 py-2.5 text-sm font-semibold text-slate-600 hover:text-white hover:bg-blue-600 rounded-xl hover:translate-x-1 transition-all">Transport Services</Link>
                                <Link to="/sector/transport/license" className="block px-4 py-2.5 text-sm font-semibold text-slate-600 hover:text-white hover:bg-blue-600 rounded-xl hover:translate-x-1 transition-all">Driver's License</Link>
                              </>}
                              {cat === "Business" && <>
                                <Link to="/sector/business" className="block px-4 py-2.5 text-sm font-semibold text-slate-600 hover:text-white hover:bg-blue-600 rounded-xl hover:translate-x-1 transition-all">Business Services</Link>
                                <Link to="/sector/business/license" className="block px-4 py-2.5 text-sm font-semibold text-slate-600 hover:text-white hover:bg-blue-600 rounded-xl hover:translate-x-1 transition-all">Business License</Link>
                              </>}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="relative" onMouseEnter={() => setActiveDropdown('administrative')} onMouseLeave={() => setActiveDropdown(null)}>
              <button className={`${linkClasses(activeDropdown === 'administrative')} flex items-center gap-1`}>
                {t('header.administrative')}
                <motion.svg animate={{ rotate: activeDropdown === 'administrative' ? 180 : 0 }} className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></motion.svg>
              </button>
              <AnimatePresence>
                {activeDropdown === 'administrative' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="fixed left-0 right-0 mx-auto w-[95vw] xl:w-[1150px] top-[80px] pt-2 z-50">
                    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col">
                      <div className="px-8 py-5 bg-slate-50 border-b border-gray-100 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">{t('header.administrative')} Directory</h3>
                          <span className="text-[10px] font-bold text-slate-400 bg-slate-200 px-2 py-1 rounded-md">25 Sectors</span>
                        </div>
                        <Link to="/administrative" className="text-[10px] font-bold text-blue-600 hover:text-white hover:bg-blue-600 border border-blue-600 px-3 py-1.5 rounded-md transition-colors uppercase tracking-widest">
                          View Full Directory
                        </Link>
                      </div>
                      <div className="p-6 overflow-y-auto max-h-[60vh] custom-scrollbar">
                        <div className="grid grid-cols-4 gap-4">
                          {[
                            'kantiibaa', 'public_service', 'education', 'health', 'investment', 
                            'revenue', 'chuo', 'trade', 'science_tech', 'city_council', 
                            'correctional', 'police', 'court', 'prosecutor', 'security', 
                            'finance_planning', 'agriculture', 'municipality', 'women_children', 'water_energy', 
                            'land_construction', 'social_rehab', 'road_transport', 'culture_tourism', 'communication'
                          ].map((key) => (
                            <Link
                              key={key}
                              to={`/administrative/${key}`}
                              className="group flex items-start gap-3 p-3 rounded-xl hover:bg-blue-50 hover:shadow-sm border border-transparent hover:border-blue-100 transition-all"
                            >
                              <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-500 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                              </div>
                              <div className="flex-1 flex flex-col justify-center min-h-[32px]">
                                <span className="block text-xs font-bold text-slate-700 group-hover:text-blue-700 transition-colors leading-tight">
                                  {t(`administrative_options.${key}`)}
                                </span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/contact" className={linkClasses(false)}>{t('header.contact')}</Link>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <div className="relative" onMouseEnter={() => setActiveDropdown('language')} onMouseLeave={() => setActiveDropdown(null)}>
              <button className={`${linkClasses(activeDropdown === 'language')} flex items-center gap-1 uppercase`}>
                {i18n.language || 'en'}
                <motion.svg animate={{ rotate: activeDropdown === 'language' ? 180 : 0 }} className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></motion.svg>
              </button>
              <AnimatePresence>
                {activeDropdown === 'language' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute right-0 top-full pt-2 w-32 z-50">
                    <div className="bg-white rounded-xl shadow-2xl border border-gray-100 py-2 overflow-hidden">
                      {['en', 'am', 'om'].map((lang) => (
                        <button key={lang} onClick={() => changeLanguage(lang)} className="flex items-center gap-3 w-full text-left px-5 py-2.5 text-sm font-bold text-slate-700 hover:bg-blue-600 hover:text-white transition-all duration-300 uppercase">
                          {lang === 'am' ? 'አማ' : lang === 'om' ? 'ORO' : 'EN'}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/virtual-tour" className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition shadow-lg shadow-blue-600/30">
              {t('header.virtual_tour')}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`lg:hidden p-2 rounded-lg transition-colors ${isHome && !scrolled && !mobileMenuOpen ? 'text-white hover:bg-white/10' : 'text-slate-700 hover:bg-slate-100'}`}>
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} /></svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'calc(100vh - 80px)', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="lg:hidden border-t border-gray-100 bg-white overflow-y-auto">
            <div className="px-4 py-6 space-y-2">
              <Link to="/about" className="flex items-center justify-between px-4 py-4 text-base font-bold text-slate-900 hover:bg-slate-50 rounded-2xl transition-all">{t('header.about')} <svg className="w-5 h-5 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></Link>
              
              {/* Mobile Sub-cities */}
              <div className="space-y-1">
                <button onClick={() => setMobileSubMenu(mobileSubMenu === 'subcity' ? null : 'subcity')} className="w-full flex items-center justify-between px-4 py-4 text-base font-bold text-slate-900 hover:bg-slate-50 rounded-2xl transition-all">
                  {t('header.subcity')}
                  <svg className={`w-5 h-5 transition-transform ${mobileSubMenu === 'subcity' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
                <AnimatePresence>
                  {mobileSubMenu === 'subcity' && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden pl-4 grid grid-cols-2 gap-2 pb-4">
                      {SUB_CITIES.map(name => (
                        <Link key={name} to={`/subcity/${name.toLowerCase().replace(/\s+/g, '-')}`} className="px-4 py-3 text-sm font-semibold text-slate-600 bg-slate-50 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-all">{name}</Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Districts */}
              <div className="space-y-1">
                <button onClick={() => setMobileSubMenu(mobileSubMenu === 'district' ? null : 'district')} className="w-full flex items-center justify-between px-4 py-4 text-base font-bold text-slate-900 hover:bg-slate-50 rounded-2xl transition-all">
                  {t('header.district') || 'District'}
                  <svg className={`w-5 h-5 transition-transform ${mobileSubMenu === 'district' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
                <AnimatePresence>
                  {mobileSubMenu === 'district' && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden pl-4 grid grid-cols-1 gap-2 pb-4">
                      {DISTRICTS.map(name => (
                        <Link key={name} to={`/district/${name.toLowerCase().replace(/\s+/g, '-')}`} className="px-4 py-3 text-sm font-semibold text-slate-600 bg-slate-50 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-all">{name}</Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Services */}
              <div className="space-y-1">
                <button onClick={() => setMobileSubMenu(mobileSubMenu === 'services' ? null : 'services')} className="w-full flex items-center justify-between px-4 py-4 text-base font-bold text-slate-900 hover:bg-slate-50 rounded-2xl transition-all">
                  {t('header.services')}
                  <svg className={`w-5 h-5 transition-transform ${mobileSubMenu === 'services' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
                <AnimatePresence>
                  {mobileSubMenu === 'services' && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden pl-4 space-y-1 pb-4">
                      {[
                        { name: "Land Administration", path: "/sector/land" },
                        { name: "Building Permits", path: "/sector/land/permits" },
                        { name: "Health Services", path: "/sector/health" },
                        { name: "Transport Services", path: "/sector/transport" },
                        { name: "Business License", path: "/sector/business" }
                      ].map(s => (
                        <Link key={s.name} to={s.path} className="block px-4 py-3 text-sm font-semibold text-slate-600 bg-slate-50 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-all">{s.name}</Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Administrative */}
              <div className="space-y-1">
                <button onClick={() => setMobileSubMenu(mobileSubMenu === 'administrative' ? null : 'administrative')} className="w-full flex items-center justify-between px-4 py-4 text-base font-bold text-slate-900 hover:bg-slate-50 rounded-2xl transition-all">
                  {t('header.administrative')}
                  <svg className={`w-5 h-5 transition-transform ${mobileSubMenu === 'administrative' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
                <AnimatePresence>
                  {mobileSubMenu === 'administrative' && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden pl-4 grid grid-cols-1 gap-1 pb-4">
                      {[
                        'kantiibaa', 'public_service', 'education', 'health', 'investment', 
                        'revenue', 'chuo', 'trade', 'science_tech', 'city_council', 
                        'correctional', 'police', 'court', 'prosecutor', 'security', 
                        'finance_planning', 'agriculture', 'municipality', 'women_children', 'water_energy', 
                        'land_construction', 'social_rehab', 'road_transport', 'culture_tourism', 'communication'
                      ].map((key) => (
                        <Link
                          key={key}
                          to={`/administrative/${key}`}
                          className="px-4 py-3 text-xs font-semibold text-slate-600 bg-slate-50 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-all"
                        >
                          {t(`administrative_options.${key}`)}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/contact" className="flex items-center justify-between px-4 py-4 text-base font-bold text-slate-900 hover:bg-slate-50 rounded-2xl transition-all">{t('header.contact')} <svg className="w-5 h-5 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></Link>

              {/* Mobile Language */}
              <div className="pt-6 border-t border-slate-100 mt-4">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-4 mb-4">Select Language</p>
                <div className="flex gap-2 px-2">
                  {['en', 'am', 'om'].map((lang) => (
                    <button key={lang} onClick={() => changeLanguage(lang)} className={`flex-1 py-3 text-xs font-bold rounded-xl border transition-all uppercase ${i18n.language === lang ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/20' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}>
                      {lang === 'am' ? 'አማርኛ' : lang === 'om' ? 'Oromoo' : 'English'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <Link to="/virtual-tour" className="block w-full py-4 bg-blue-600 text-white text-center font-black rounded-2xl shadow-xl shadow-blue-600/30 active:scale-95 transition-all">
                  {t('header.virtual_tour')}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
