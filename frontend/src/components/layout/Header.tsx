import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const SUB_CITIES = [
    "Furii", "Galaan", "Galaan Guddaa", "Gafarsa Gujee", "Buraayyuu", 
    "Sabbataa", "Mana Abbichuu", "Malkaa Noonnoo", "Kooyyee Faccee", 
    "Kuraa Jiddaa", "Sulultaa", "Lagaxafoo"
  ];

  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
    isHome 
      ? (scrolled ? 'bg-white/90 backdrop-blur-xl shadow-xl py-2' : 'bg-transparent py-4') 
      : 'bg-white border-b border-gray-200 py-2'
  }`;

  const linkClasses = `px-4 py-2 text-sm font-bold transition-all duration-300 rounded-xl ${
    isHome && !scrolled ? 'text-white hover:bg-white/10' : 'text-slate-700 hover:text-blue-600 hover:bg-slate-100'
  }`;

  return (
    <header className={headerClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-2xl">SC</span>
            </div>
            <div>
              <h1 className={`text-2xl font-bold transition-colors duration-500 ${isHome && !scrolled ? 'text-white' : 'text-slate-900'}`}>{t('header.title')}</h1>
              <p className={`text-sm transition-colors duration-500 ${isHome && !scrolled ? 'text-white/70' : 'text-slate-600'}`}>{t('header.subtitle')}</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-2">
            <Link to="/" className={linkClasses}>{t('header.home')}</Link>
            <Link to="/about" className={linkClasses}>{t('header.about')}</Link>
            
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('subcity')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={`${linkClasses} flex items-center gap-1 ${activeDropdown === 'subcity' ? 'bg-blue-600 text-white shadow-lg' : ''}`}>
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

            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={`${linkClasses} flex items-center gap-1 ${activeDropdown === 'services' ? 'bg-blue-600 text-white shadow-lg' : ''}`}>
                {t('header.services')}
                <motion.svg animate={{ rotate: activeDropdown === 'services' ? 180 : 0 }} className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></motion.svg>
              </button>
              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="absolute left-0 top-full pt-2 w-[700px] z-50">
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

            <Link to="/news" className={linkClasses}>{t('header.news')}</Link>
            <Link to="/contact" className={linkClasses}>{t('header.contact')}</Link>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('language')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={`${linkClasses} flex items-center gap-1 uppercase ${activeDropdown === 'language' ? 'bg-blue-600 text-white shadow-lg' : ''}`}>
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

            <Link to="/sector/land" className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition shadow-lg shadow-blue-600/30">
              {t('header.apply')}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`lg:hidden p-2 rounded-lg ${isHome && !scrolled ? 'text-white hover:bg-white/10' : 'text-slate-700 hover:bg-slate-100'}`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="lg:hidden border-t border-gray-200 bg-white overflow-hidden">
            <div className="px-4 py-4 space-y-2">
              <Link to="/" className="block px-4 py-2 text-sm font-bold text-slate-700 hover:bg-blue-50 rounded-lg">{t('header.home')}</Link>
              <Link to="/about" className="block px-4 py-2 text-sm font-bold text-slate-700 hover:bg-blue-50 rounded-lg">{t('header.about')}</Link>
              <Link to="/news" className="block px-4 py-2 text-sm font-bold text-slate-700 hover:bg-blue-50 rounded-lg">{t('header.news')}</Link>
              <Link to="/contact" className="block px-4 py-2 text-sm font-bold text-slate-700 hover:bg-blue-50 rounded-lg">{t('header.contact')}</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
