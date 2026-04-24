import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
              <button className="px-3 py-1 text-xs font-medium hover:bg-slate-800 rounded transition">EN</button>
              <button className="px-3 py-1 text-xs font-medium hover:bg-slate-800 rounded transition">አማ</button>
              <button className="px-3 py-1 text-xs font-medium hover:bg-slate-800 rounded transition">ORO</button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-2xl">SC</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Sheger City</h1>
              <p className="text-sm text-slate-600">Digital Government Portal</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link to="/" className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition">
              Home
            </Link>
            <Link to="/about" className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition">
              About
            </Link>
            
            {/* Sub City Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('subcity')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition">
                Sub City
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'subcity' && (
                <div className="absolute left-0 top-full mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2">
                  <div className="px-4 py-2 text-xs font-semibold text-slate-500 uppercase">Sub Cities</div>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((num) => (
                    <Link
                      key={num}
                      to={`/subcity/${num}`}
                      className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition"
                    >
                      Sub City {num}
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
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition">
                Services
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

            <Link to="/leadership" className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition">
              Leadership
            </Link>
            <Link to="/news" className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition">
              News
            </Link>
            <Link to="/contact" className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/sector/land"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition shadow-lg shadow-blue-600/30"
            >
              Apply for Service
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-2">
            <Link to="/" className="block px-4 py-2 text-sm font-medium text-slate-700 hover:bg-blue-50 rounded-lg">Home</Link>
            <Link to="/about" className="block px-4 py-2 text-sm font-medium text-slate-700 hover:bg-blue-50 rounded-lg">About</Link>
            <Link to="/leadership" className="block px-4 py-2 text-sm font-medium text-slate-700 hover:bg-blue-50 rounded-lg">Leadership</Link>
            <Link to="/news" className="block px-4 py-2 text-sm font-medium text-slate-700 hover:bg-blue-50 rounded-lg">News</Link>
            <Link to="/contact" className="block px-4 py-2 text-sm font-medium text-slate-700 hover:bg-blue-50 rounded-lg">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
