import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const SECTORS: Record<string, { title: string; category: string; desc: string; bgImage: string; icon: string }> = {
  land: {
    title: 'Land & Construction',
    category: 'land',
    desc: 'Apply for land holding certificates, building permits, and property transfers online.',
    bgImage: '/city-1.jpg',
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
  },
  health: {
    title: 'Health & Social Welfare',
    category: 'health',
    desc: 'Access medical services, health facility directories, and public welfare programs.',
    bgImage: '/hero-1.jpg',
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
  },
  transport: {
    title: 'Transport Services',
    category: 'transport',
    desc: 'Vehicle registration, driver license renewals, and transport permit applications.',
    bgImage: '/city-2.jpg',
    icon: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
  },
  business: {
    title: 'Business & Economy',
    category: 'business',
    desc: 'Register a new business, renew trade licenses, and access commercial permits.',
    bgImage: '/hero-4.jpg',
    icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745V21a2 2 0 002 2h14a2 2 0 002-2v-7.745zM6 7V3a2 2 0 012-2h8a2 2 0 012 2v4h2a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2V9a2 2 0 012-2h2z"
  },
  finance: {
    title: 'Revenue & Finance',
    category: 'finance',
    desc: 'Manage your taxes, utility payments, and financial declarations.',
    bgImage: '/hero-3.jpg',
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  }
};

const SERVICES = [
  {
    id: "trade-license",
    category: "business",
    title: "Trade License",
    desc: "Apply for a new or renewal trade license for your business.",
    time: "3-5 Days",
    price: "500 ETB",
    icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745V21a2 2 0 002 2h14a2 2 0 002-2v-7.745zM6 7V3a2 2 0 012-2h8a2 2 0 012 2v4h2a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2V9a2 2 0 012-2h2z"
  },
  {
    id: "birth-certificate",
    category: "civil",
    title: "Birth Certificate",
    desc: "Request a new or replacement birth certificate.",
    time: "1-2 Days",
    price: "50 ETB",
    icon: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
  },
  {
    id: "land-certificate",
    category: "land",
    title: "Land Holding Certificate",
    desc: "Apply for land holding certificate.",
    time: "5-7 Days",
    price: "300 ETB",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
  },
  {
    id: "water-bill",
    category: "utilities",
    title: "Pay Water Bill",
    desc: "Pay your monthly water consumption bill online.",
    time: "Instant",
    price: "Varies",
    icon: "M13 10V3L4 14h7v7l9-11h-7z"
  },
  {
    id: "vehicle-reg",
    category: "transport",
    title: "Vehicle Registration",
    desc: "Register a new vehicle or renew vehicle documents.",
    time: "3-7 Days",
    price: "1,200 ETB",
    icon: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
  },
  {
    id: "employment-permit",
    category: "employment",
    title: "Employment Permit",
    desc: "Apply for employment permit for foreign nationals.",
    time: "5-10 Days",
    price: "500 ETB",
    icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745V21a2 2 0 002 2h14a2 2 0 002-2v-7.745zM6 7V3a2 2 0 012-2h8a2 2 0 012 2v4h2a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2V9a2 2 0 012-2h2z"
  },
  {
    id: "building-permit",
    category: "land",
    title: "Building Permit",
    desc: "Apply for construction or building permit.",
    time: "7-14 Days",
    price: "1,000 ETB",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
  }
];

const Sector = () => {
  const { name } = useParams<{ name: string }>();
  const [searchQuery, setSearchQuery] = useState("");
  const sector = SECTORS[name || 'land'] || SECTORS.land;

  const filteredServices = SERVICES.filter(service => {
    const matchesCategory = service.category === sector.category;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         service.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <section className="relative pt-20 pb-24 px-6 overflow-hidden">
        {/* Background Image Layer */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url(${sector.bgImage})` }}
        >
          {/* Overlay Layer */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#001529]/95 via-[#001529]/90 to-[#001529]/95"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <Link 
            to="/services" 
            className="inline-flex items-center gap-2 text-red-400 hover:text-white transition-colors mb-6 city-label group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Portal
          </Link>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-4xl text-left">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 rounded-2xl bg-red-600 text-white flex items-center justify-center shadow-2xl shadow-red-600/40">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={sector.icon} />
                  </svg>
                </div>
                <div className="h-px w-12 bg-red-500/30"></div>
                <span className="text-red-400 city-label">Sector Portal</span>
              </div>
              <h1 className="city-h1 text-white mb-8">
                {sector.title}
              </h1>
              <p className="city-body-lg text-slate-300 max-w-3xl">
                {sector.desc}
              </p>
            </div>

            <div className="hidden lg:block">
              <div className="city-glass p-10 rounded-[3rem] text-white">
                <div className="text-5xl font-bold font-display mb-2">{filteredServices.length}</div>
                <div className="city-label text-red-400">Available Services</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumbs Indicator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl px-10 py-6 flex items-center justify-between border border-slate-100">
          <nav className="flex items-center gap-2 text-slate-400 text-sm font-bold">
            <Link to="/services" className="hover:text-red-600 transition-colors">E-Services</Link>
            <span>&rsaquo;</span>
            <span className="text-slate-900 font-bold">{sector.title}</span>
          </nav>
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-slate-300">Filtered View</span>
            <div className="h-4 w-px bg-slate-100"></div>
            <span className="text-sm font-bold text-red-600">{filteredServices.length} Results</span>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredServices.length > 0 ? (
              filteredServices.map(service => (
                <motion.div
                  layout
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col group"
                >
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mb-5 group-hover:bg-red-600 group-hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                    </svg>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-red-600 transition-colors">{service.title}</h3>
                  <p className="text-slate-600 text-base leading-relaxed mb-6 line-clamp-2">{service.desc}</p>
                  
                  <div className="flex items-center gap-4 text-sm font-bold text-slate-500 mb-6">
                    <span className="flex items-center gap-1.5">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      {service.time}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      {service.price}
                    </span>
                  </div>
                  
                  <Link 
                    to={`/services/${service.id}`}
                    className="mt-auto w-full py-3 text-center text-sm font-bold text-slate-700 border border-slate-200 rounded-xl hover:bg-slate-50 hover:text-red-600 transition-all shadow-sm"
                  >
                    View Details &rarr;
                  </Link>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900">No services found</h3>
                <p className="text-slate-500 text-sm">We couldn't find any services matching your search in this sector.</p>
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* Features Bar */}
        <div className="mt-20 py-10 border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Secure & Reliable", desc: "Your data is protected and secure.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
            { label: "Easy Process", desc: "Simple steps to complete your applications.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
            { label: "Track Application", desc: "Track your application at every step.", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" },
            { label: "Support", desc: "We are here to help you anytime.", icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" },
          ].map(f => (
            <div key={f.label} className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={f.icon} />
                </svg>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-1">{f.label}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Sector;
