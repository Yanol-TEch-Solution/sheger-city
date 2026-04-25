import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAdministrativeOpen, setMobileAdministrativeOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:+251" className="hover:text-blue-400 transition">📞 +251 11 XXX XXXX</a>
              <a href="mailto:info@shegercity.gov.et" className="hover:text-blue-400 transition hidden sm:block">✉️ info@shegercity.gov.et</a>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={() => changeLanguage('en')} className={`px-3 py-1 text-xs font-medium rounded transition ${i18n.language === 'en' ? 'bg-blue-600' : 'hover:bg-slate-800'}`}>EN</button>
              <button onClick={() => changeLanguage('am')} className={`px-3 py-1 text-xs font-medium rounded transition ${i18n.language === 'am' ? 'bg-blue-600' : 'hover:bg-slate-800'}`}>አማ</button>
              <button onClick={() => changeLanguage('om')} className={`px-3 py-1 text-xs font-medium rounded transition ${i18n.language === 'om' ? 'bg-blue-600' : 'hover:bg-slate-800'}`}>ORO</button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-8">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl">SC</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">{t('header.title')}</h1>
                <p className="text-sm text-slate-600">{t('header.subtitle')}</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
              <Link to="/" className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition">
                {t('header.home')}
              </Link>
              <Link to="/about" className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition">
                {t('header.about')}
              </Link>
              
              {/* Sub City Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('subcity')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition">
                  {t('header.subcity')}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === 'subcity' && (
                  <div className="absolute left-0 top-full mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2">
                    <div className="px-4 py-2 text-xs font-semibold text-slate-500 uppercase">Sub Cities</div>
                    {[
                      'furii', 'galaan', 'galaan_guddaa', 'gafarsa_gujee', 
                      'buraayyuu', 'sabbataa', 'mana_abbichuu', 'malkaa_noonnoo', 
                      'kooyyee_faccee', 'kuraa_jiddaa', 'sulultaa', 'lagaxafoo'
                    ].map((key, index) => (
                      <Link
                        key={key}
                        to={`/subcity/${index + 1}`}
                        className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition"
                      >
                        {t(`subcities.${key}`)}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Services Mega Menu */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition">
                  {t('header.services')}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === 'services' && (
                  <div className="absolute left-0 top-full mt-2 w-[600px] bg-white rounded-xl shadow-xl border border-gray-100 p-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-xs font-semibold text-slate-500 uppercase mb-3">Property & Land</h3>
                        <Link to="/sector/land" className="block py-2 text-sm text-slate-700 hover:text-blue-600 transition">Land Administration</Link>
                        <Link to="/sector/land/permits" className="block py-2 text-sm text-slate-700 hover:text-blue-600 transition">Building Permits</Link>
                      </div>
                      <div>
                        <h3 className="text-xs font-semibold text-slate-500 uppercase mb-3">Health & Welfare</h3>
                        <Link to="/sector/health" className="block py-2 text-sm text-slate-700 hover:text-blue-600 transition">Health Services</Link>
                        <Link to="/sector/health/emergency" className="block py-2 text-sm text-slate-700 hover:text-blue-600 transition">Emergency Services</Link>
                      </div>
                      <div>
                        <h3 className="text-xs font-semibold text-slate-500 uppercase mb-3">Transport</h3>
                        <Link to="/sector/transport" className="block py-2 text-sm text-slate-700 hover:text-blue-600 transition">Transport Services</Link>
                        <Link to="/sector/transport/license" className="block py-2 text-sm text-slate-700 hover:text-blue-600 transition">Driver's License</Link>
                      </div>
                      <div>
                        <h3 className="text-xs font-semibold text-slate-500 uppercase mb-3">Business</h3>
                        <Link to="/sector/business" className="block py-2 text-sm text-slate-700 hover:text-blue-600 transition">Business Services</Link>
                        <Link to="/sector/business/license" className="block py-2 text-sm text-slate-700 hover:text-blue-600 transition">Business License</Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

            {/* Administrative Sector Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('administrative')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition whitespace-nowrap">
                {t('header.administrative')}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'administrative' && (
                <div className="absolute right-0 top-full mt-2 w-[800px] bg-white rounded-xl shadow-xl border border-gray-100 p-6 overflow-hidden">
                  <div className="grid grid-cols-3 gap-x-6 gap-y-1">
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
                        className="block py-2 text-[11px] leading-tight text-slate-600 hover:text-blue-600 hover:bg-blue-50 px-2 rounded transition"
                      >
                        {t(`administrative_options.${key}`)}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

              <Link to="/news" className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition">
                {t('header.news')}
              </Link>
              <Link to="/contact" className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition">
                {t('header.contact')}
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                to="/sector/land"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-xs font-semibold rounded-lg hover:bg-blue-700 transition shadow-lg shadow-blue-600/30 whitespace-nowrap"
              >
                {t('header.apply')}
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-2">
            <Link to="/" className="block px-4 py-2 text-sm font-medium text-slate-700 hover:bg-blue-50 rounded-lg">{t('header.home')}</Link>
            <Link to="/about" className="block px-4 py-2 text-sm font-medium text-slate-700 hover:bg-blue-50 rounded-lg">{t('header.about')}</Link>

            <div>
              <button 
                onClick={() => setMobileAdministrativeOpen(!mobileAdministrativeOpen)}
                className="w-full flex items-center justify-between px-4 py-2 text-sm font-medium text-slate-700 hover:bg-blue-50 rounded-lg"
              >
                {t('header.administrative')}
                <svg className={`w-4 h-4 transition-transform ${mobileAdministrativeOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileAdministrativeOpen && (
                <div className="pl-4 mt-1 space-y-1">
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
                      className="block px-4 py-2 text-xs text-slate-600 hover:bg-blue-50 rounded-lg"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {t(`administrative_options.${key}`)}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link to="/news" className="block px-4 py-2 text-sm font-medium text-slate-700 hover:bg-blue-50 rounded-lg">{t('header.news')}</Link>
            <Link to="/contact" className="block px-4 py-2 text-sm font-medium text-slate-700 hover:bg-blue-50 rounded-lg">{t('header.contact')}</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
