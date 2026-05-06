import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";

const Services = () => {
  useTranslation();
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const SERVICES = [
    {
      id: "business-permit",
      category: "business",
      categoryLabel: "BUSINESS & ECONOMY",
      title: "Business Permit Application",
      desc: "Apply for new business permit or renew your existing permit.",
      time: "3-5 Days",
      price: "500 ETB",
      icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745V21a2 2 0 002 2h14a2 2 0 002-2v-7.745zM6 7V3a2 2 0 012-2h8a2 2 0 012 2v4h2a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2V9a2 2 0 012-2h2z",
      iconBg: "bg-red-600",
      iconColor: "text-white"
    },
    {
      id: "birth-certificate",
      category: "civil",
      categoryLabel: "CIVIL REGISTRY",
      title: "Birth Certificate",
      desc: "Request a new birth certificate or certified true copy.",
      time: "1-2 Days",
      price: "50 ETB",
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
      iconBg: "bg-black",
      iconColor: "text-white"
    },
    {
      id: "land-ownership",
      category: "land",
      categoryLabel: "LAND & PROPERTY",
      title: "Land Ownership Certificate",
      desc: "Apply for land ownership certificate and related services.",
      time: "5-7 Days",
      price: "300 ETB",
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
      iconBg: "bg-red-600",
      iconColor: "text-white"
    },
    {
      id: "electricity-bill",
      category: "utilities",
      categoryLabel: "UTILITIES & BILLING",
      title: "Pay Electricity Bill",
      desc: "Pay your electricity bill securely online.",
      time: "Instant",
      price: "Varies",
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      iconBg: "bg-black",
      iconColor: "text-white"
    },
    {
      id: "vehicle-reg",
      category: "transport",
      categoryLabel: "TRANSPORT",
      title: "Vehicle Registration",
      desc: "Register your vehicle or renew your registration.",
      time: "3-5 Days",
      price: "1,200 ETB",
      icon: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8",
      iconBg: "bg-red-600",
      iconColor: "text-white"
    },
    {
      id: "national-id",
      category: "civil",
      categoryLabel: "CIVIL REGISTRY",
      title: "National ID Card",
      desc: "Apply for new national ID card or replacement.",
      time: "7-10 Days",
      price: "200 ETB",
      icon: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14",
      iconBg: "bg-black",
      iconColor: "text-white"
    },
    {
      id: "water-bill",
      category: "utilities",
      categoryLabel: "UTILITIES & BILLING",
      title: "Pay Water Bill",
      desc: "Pay your water bill and manage your account.",
      time: "Instant",
      price: "Varies",
      icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-14v14m0-14l-8 4m0 0v10l8 4",
      iconBg: "bg-red-600",
      iconColor: "text-white"
    },
    {
      id: "waste-collection",
      category: "land",
      categoryLabel: "ENVIRONMENT",
      title: "Waste Collection Service",
      desc: "Request waste collection services for your area.",
      time: "2-3 Days",
      price: "100 ETB",
      icon: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
      iconBg: "bg-black",
      iconColor: "text-white"
    }
  ];

  const CATEGORIES = [
    { id: "all", label: "All Services", icon: "M4 6h16M4 12h16M4 18h16" },
    { id: "business", label: "Business & Economy", icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745V21a2 2 0 002 2h14a2 2 0 002-2v-7.745zM6 7V3a2 2 0 012-2h8a2 2 0 012 2v4h2a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2V9a2 2 0 012-2h2z" },
    { id: "civil", label: "Civil Registry", icon: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" },
    { id: "land", label: "Land & Property", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
    { id: "utilities", label: "Utilities & Billing", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
    { id: "transport", label: "Transport", icon: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8" },
    { id: "employment", label: "Employment", icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745V21a2 2 0 002 2h14a2 2 0 002-2v-7.745zM6 7V3a2 2 0 012-2h8a2 2 0 012 2v4h2a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2V9a2 2 0 012-2h2z" },
    { id: "health", label: "Health & Welfare", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
    { id: "education", label: "Education", icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479L12 21l-6.825-3.943a12.083 12.083 0 01.665-6.479L12 14z" },
  ];

  const getCategoryCount = (categoryId: string) => {
    if (categoryId === 'all') return SERVICES.length;
    return SERVICES.filter(s => s.category === categoryId).length;
  };

  const filteredServices = SERVICES.filter(service => {
    const matchesCategory = activeCategory === "all" || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         service.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white flex flex-col pt-16 font-sans">
      {/* ─── Hero / Header Section ─── */}
      <section className="bg-black text-white py-12 sm:py-16 relative overflow-hidden">
        {/* Building Line Art Background Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1440 400" preserveAspectRatio="xMidYMax slice" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 400V300H200V400H300V250H400V400H500V200H600V400H700V150H800V400H900V200H1000V400H1100V250H1200V400H1300V300H1400V400" stroke="white" strokeWidth="2"/>
            <circle cx="1100" cy="150" r="80" stroke="white" strokeWidth="2"/>
            <path d="M1060 150H1140M1100 110V190" stroke="white" strokeWidth="2"/>
          </svg>
        </div>

        {/* Back Button */}
        <div className="absolute top-4 left-4 sm:left-8 z-20">
          <BackButton to="/" className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white" />
        </div>

        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <p className="text-xs font-medium tracking-tight text-red-600 mb-3">E-SERVICES PORTAL</p>
          <h1 className="text-2xl sm:text-4xl font-bold leading-tight tracking-tight font-display mb-3">Fast. Easy. Reliable.</h1>
          <p className="text-xs sm:text-sm text-slate-400 mb-4 max-w-2xl leading-relaxed">Access government permits, online anytime, anywhere.</p>
          
          <div className="flex flex-col sm:flex-row gap-0 max-w-xl">
            <div className="relative flex-1">
              <input 
                type="text" 
                placeholder="Search services..."
                className="w-full pl-5 pr-4 py-2.5 bg-white text-slate-900 rounded-l-xl sm:rounded-l-2xl focus:outline-none text-xs"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-r-xl sm:rounded-r-2xl font-bold flex items-center justify-center gap-1.5 transition-colors text-xs">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              Search
            </button>
          </div>
        </div>
      </section>

      {/* ─── Main Content with Sidebar ─── */}
      <main className="max-w-[1800px] mx-auto px-4 sm:px-6 py-6 w-full flex-1">
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Sidebar - Optimized Width */}
          <aside className="lg:w-56 shrink-0 space-y-4">
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="p-3 border-b border-slate-50">
                <h2 className="flex items-center gap-2 text-[10px] font-black text-slate-900 uppercase tracking-wider">
                  <svg className="w-3.5 h-3.5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" /></svg>
                  Categories
                </h2>
              </div>
              <nav className="p-1 space-y-0.5">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`w-full flex items-center justify-between px-3 py-2.5 transition-all relative group ${activeCategory === cat.id ? "text-slate-900" : "text-slate-500 hover:text-slate-900"}`}
                  >
                    <div className="flex items-center gap-2.5">
                      <svg className={`w-3.5 h-3.5 ${activeCategory === cat.id ? "text-slate-900" : "text-slate-400 group-hover:text-slate-600"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={cat.icon} />
                      </svg>
                      <span className="text-[11px] font-bold tracking-tight truncate max-w-[120px]">{cat.label}</span>
                    </div>
                    
                    <span className={`text-[9px] font-black px-1.5 py-0.5 rounded-md ${activeCategory === cat.id ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-400"}`}>
                      {getCategoryCount(cat.id)}
                    </span>

                    {activeCategory === cat.id && (
                      <motion.div 
                        layoutId="activeUnderline"
                        className="absolute bottom-0 left-3 right-3 h-0.5 bg-slate-900 rounded-full"
                      />
                    )}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content Area - 4 cards in row */}
          <div className="flex-1 space-y-4">
            <div className="flex items-center justify-between px-1">
              <h2 className="text-sm font-black text-slate-900 uppercase tracking-tight">Available Services</h2>
              <Link to="#" className="text-red-600 font-bold text-[10px] hover:underline flex items-center gap-1">
                View All &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
              <AnimatePresence mode="popLayout">
                {filteredServices.map(service => (
                  <motion.div
                    layout
                    key={service.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 hover:shadow-md transition-all flex flex-col group relative h-full"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className={`w-7 h-7 rounded-full ${service.iconBg} ${service.iconColor} flex items-center justify-center shrink-0 shadow-md`}>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={service.icon} />
                        </svg>
                      </div>
                      <span className="text-[7px] font-black text-slate-400 uppercase tracking-widest">{service.categoryLabel.split(' ')[0]}</span>
                    </div>
                    
                    <h3 className="text-[11px] font-black text-slate-900 mb-1.5 group-hover:text-red-600 transition-colors tracking-tight line-clamp-1 leading-tight">{service.title}</h3>
                    <p className="text-slate-500 text-[9px] leading-relaxed mb-4 line-clamp-2">{service.desc}</p>
                    
                    <div className="flex items-center justify-between py-2 border-t border-slate-50 mt-auto">
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1 text-[8px] font-bold text-slate-400 uppercase tracking-tight">
                          <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                          {service.time}
                        </div>
                        <div className="flex items-center gap-1 text-[8px] font-bold text-red-600 uppercase tracking-tight">
                          {service.price}
                        </div>
                      </div>
                    </div>

                    <Link 
                      to={`/services/${service.id}`}
                      className="w-full py-2 text-center text-[9px] font-black text-red-600 border border-slate-100 rounded-lg hover:bg-red-600 hover:text-white hover:border-red-600 transition-all flex items-center justify-center gap-1 group/btn"
                    >
                      Apply Now
                      <svg className="w-2.5 h-2.5 group-hover/btn:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7-7 7" /></svg>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </main>

      {/* ─── Compact Bottom Feature Strip ─── */}
      <footer className="bg-white border-t border-slate-100 py-6">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Secure & Reliable", desc: "Data protection", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", color: "text-red-600", bg: "bg-red-50" },
              { label: "24/7 Availability", desc: "Access anytime", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", color: "text-black", bg: "bg-slate-50" },
              { label: "Track Applications", desc: "Real-time status", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01", color: "text-red-600", bg: "bg-red-50" },
              { label: "Digital Documents", desc: "Secure storage", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", color: "text-black", bg: "bg-slate-50" },
            ].map(f => (
              <div key={f.label} className="flex items-center gap-2 group">
                <div className={`w-8 h-8 rounded-lg ${f.bg} ${f.color} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={f.icon} /></svg>
                </div>
                <div>
                  <h4 className="text-[9px] font-black text-slate-900 uppercase tracking-tight mb-0">{f.label}</h4>
                  <p className="text-[8px] text-slate-500 leading-tight">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Services;
