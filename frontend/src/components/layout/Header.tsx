import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import logoUrl from '../../assets/logo.png';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubMenu, setMobileSubMenu] = useState<string | null>(null);
  const { t, i18n } = useTranslation();
  const location = useLocation();



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



  const LANGUAGES = [
    { code: 'en', label: 'EN', flag: 'https://flagcdn.com/w40/us.png' },
    { code: 'am', label: 'AM', flag: 'https://flagcdn.com/w40/et.png' },
    { code: 'om', label: 'OR', flag: 'https://flagcdn.com/w40/et.png' },
    { code: 'ti', label: 'TI', flag: 'https://flagcdn.com/w40/et.png' },
    { code: 'hi', label: 'HI', flag: 'https://flagcdn.com/w40/in.png' },
    { code: 'ar', label: 'AR', flag: 'https://flagcdn.com/w40/sa.png' },
    { code: 'fr', label: 'FR', flag: 'https://flagcdn.com/w40/fr.png' },
    { code: 'es', label: 'ES', flag: 'https://flagcdn.com/w40/es.png' }
  ];

  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm py-1`;

  const linkClasses = (isActive: boolean) => `px-3 py-1.5 text-[11px] font-bold transition-all duration-300 rounded-lg ${
    isActive ? 'bg-red-600 text-white shadow-lg shadow-red-600/20' : 'text-slate-700 hover:text-red-600 hover:bg-slate-50'
  }`;

  return (
    <header className={headerClasses}>
      <div className="max-w-[1600px] mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-12">
          <Link to="/" className="flex items-center gap-3 sm:gap-4 group">
            <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center shrink-0 relative">
              <div className="absolute inset-0 bg-white/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img src={logoUrl} alt="Sheger City Logo" className="w-full h-full object-contain drop-shadow-md transition-transform duration-500 group-hover:scale-105 relative z-10" />
            </div>
            <div className="overflow-hidden">
              <h1 className="text-sm sm:text-base font-black transition-colors duration-500 truncate font-display text-slate-900">{t('header.title')}</h1>
              <p className="text-[8px] sm:text-[10px] transition-colors duration-500 truncate font-sans text-slate-600">{t('header.subtitle')}</p>
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
                      <div className="px-5 py-2 text-[9px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-50 mb-2">Municipal Sub Cities</div>
                      <div>
                        {SUB_CITIES.map((name) => (
                          <Link key={name} to={`/subcity/${name.toLowerCase().replace(/\s+/g, '-')}`} className="flex items-center justify-between px-5 py-2.5 text-xs font-semibold text-slate-700 hover:bg-blue-600 hover:text-white transition-all group mx-2 rounded-lg">
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



            <Link to="/services" className={linkClasses(location.pathname === '/services')}>
              {t('header.services')}
            </Link>

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
                        <Link to="/administrative" className="text-[10px] font-bold text-red-600 hover:text-white hover:bg-red-600 border border-red-600 px-3 py-1.5 rounded-md transition-colors uppercase tracking-widest">
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

            <Link to="/news" className={linkClasses(false)}>News</Link>
            <Link to="/contact" className={linkClasses(false)}>{t('header.contact')}</Link>
          </nav>

          <div className="flex items-center gap-1 sm:gap-2">
            <div 
              className="relative" 
              onMouseEnter={() => setActiveDropdown('language')} 
              onMouseLeave={() => setActiveDropdown(null)}
              onClick={() => setActiveDropdown(activeDropdown === 'language' ? null : 'language')}
            >
              <button className={`flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-2 rounded-xl border transition-all duration-300 border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-md ${activeDropdown === 'language' ? 'ring-2 ring-blue-500/20 border-blue-500/50' : ''}`}>
                <img 
                  src={LANGUAGES.find(l => l.code === i18n.language)?.flag || LANGUAGES[0].flag} 
                  alt={i18n.language} 
                  className="w-5 h-3.5 object-cover rounded-[2px] shadow-sm"
                />
                <span className="text-[9px] font-black uppercase tracking-tighter text-slate-700">
                  {LANGUAGES.find(l => l.code === i18n.language)?.label || 'EN'}
                </span>
                <motion.svg 
                  animate={{ rotate: activeDropdown === 'language' ? 180 : 0 }} 
                  className="w-3 h-3 text-slate-400" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </button>
              <AnimatePresence>
                {activeDropdown === 'language' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute right-0 top-full pt-2 w-32 z-50">
                    <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-100 p-2 grid grid-cols-1 gap-1">
                      {LANGUAGES.map((lang) => (
                        <button 
                          key={lang.code} 
                          onClick={(e) => {
                            e.stopPropagation();
                            changeLanguage(lang.code);
                            setActiveDropdown(null);
                          }} 
                          className={`flex items-center justify-center gap-2 px-2 py-2 rounded-lg transition-all duration-300 group ${i18n.language === lang.code ? 'bg-red-600 text-white shadow-lg shadow-red-600/20' : 'hover:bg-slate-50 text-slate-600'}`}
                        >
                          <img src={lang.flag} alt={lang.label} className="w-4 h-2.5 object-cover rounded-[1px] shadow-sm group-hover:scale-110 transition-transform" />
                          <span className={`text-[10px] font-bold tracking-tight ${i18n.language === lang.code ? 'text-white' : 'text-slate-700'}`}>{lang.label}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 rounded-lg transition-colors text-slate-700 hover:bg-slate-100">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} /></svg>
            </button>

            <a 
              href="https://tour.panoee.net/iframe/69d5076793f8052809dbec8b" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-600 text-white text-[9px] font-black rounded-lg hover:bg-red-700 transition shadow-lg shadow-red-600/30 uppercase tracking-widest"
            >
              {t('header.virtual_tour')}
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }} 
            animate={{ height: 'auto', opacity: 1 }} 
            exit={{ height: 0, opacity: 0 }} 
            className="lg:hidden border-t border-slate-100 bg-white/95 backdrop-blur-xl overflow-hidden shadow-2xl rounded-b-[2.5rem] relative z-40"
          >
            <div className="px-6 py-8 space-y-2 pb-12">
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
                        <Link key={name} to={`/subcity/${name.toLowerCase().replace(/\s+/g, '-')}`} className="px-4 py-3 text-xs font-semibold text-slate-600 bg-slate-50 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-all">{name}</Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>



              {/* Mobile Services */}
              <div className="space-y-1">
                <Link to="/services" className="w-full flex items-center justify-between px-4 py-4 text-base font-bold text-slate-900 hover:bg-slate-50 rounded-2xl transition-all">
                  {t('header.services')}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
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


              <div className="pt-8">
                <a 
                  href="https://tour.panoee.net/iframe/69d5076793f8052809dbec8b" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full py-4 bg-red-600 text-white text-center font-black rounded-2xl shadow-xl shadow-red-600/30 active:scale-95 transition-all"
                >
                  {t('header.virtual_tour')}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
