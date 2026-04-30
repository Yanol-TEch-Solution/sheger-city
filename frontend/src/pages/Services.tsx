import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Services = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const CATEGORIES = [
    { id: "all", label: t('services_page.categories.all'), icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" },
    { id: "business", label: t('services_page.categories.business'), icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745V21a2 2 0 002 2h14a2 2 0 002-2v-7.745zM6 7V3a2 2 0 012-2h8a2 2 0 012 2v4h2a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2V9a2 2 0 012-2h2z" },
    { id: "civil", label: t('services_page.categories.civil'), icon: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" },
    { id: "land", label: t('services_page.categories.land'), icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
    { id: "utilities", label: t('services_page.categories.utilities'), icon: "M13 10V3L4 14h7v7l9-11h-7z" },
    { id: "transport", label: t('services_page.categories.transport'), icon: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8" },
    { id: "employment", label: t('services_page.categories.employment'), icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745V21a2 2 0 002 2h14a2 2 0 002-2v-7.745zM6 7V3a2 2 0 012-2h8a2 2 0 012 2v4h2a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2V9a2 2 0 012-2h2z" },
  ];

  const SERVICES = [
    {
      id: "trade-license",
      category: "business",
      title: t('services_page.list.trade_license.title'),
      desc: t('services_page.list.trade_license.desc'),
      time: t('services_page.list.trade_license.time'),
      price: t('services_page.list.trade_license.price'),
      icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745V21a2 2 0 002 2h14a2 2 0 002-2v-7.745zM6 7V3a2 2 0 012-2h8a2 2 0 012 2v4h2a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2V9a2 2 0 012-2h2z"
    },
    {
      id: "birth-certificate",
      category: "civil",
      title: t('services_page.list.birth_certificate.title'),
      desc: t('services_page.list.birth_certificate.desc'),
      time: t('services_page.list.birth_certificate.time'),
      price: t('services_page.list.birth_certificate.price'),
      icon: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    },
    {
      id: "land-certificate",
      category: "land",
      title: t('services_page.list.land_certificate.title'),
      desc: t('services_page.list.land_certificate.desc'),
      time: t('services_page.list.land_certificate.time'),
      price: t('services_page.list.land_certificate.price'),
      icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    },
    {
      id: "water-bill",
      category: "utilities",
      title: t('services_page.list.water_bill.title'),
      desc: t('services_page.list.water_bill.desc'),
      time: t('services_page.list.water_bill.time'),
      price: t('services_page.list.water_bill.price'),
      icon: "M13 10V3L4 14h7v7l9-11h-7z"
    },
    {
      id: "vehicle-reg",
      category: "transport",
      title: t('services_page.list.vehicle_reg.title'),
      desc: t('services_page.list.vehicle_reg.desc'),
      time: t('services_page.list.vehicle_reg.time'),
      price: t('services_page.list.vehicle_reg.price'),
      icon: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
    },
    {
      id: "employment-permit",
      category: "employment",
      title: t('services_page.list.employment_permit.title'),
      desc: t('services_page.list.employment_permit.desc'),
      time: t('services_page.list.employment_permit.time'),
      price: t('services_page.list.employment_permit.price'),
      icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745V21a2 2 0 002 2h14a2 2 0 002-2v-7.745zM6 7V3a2 2 0 012-2h8a2 2 0 012 2v4h2a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2V9a2 2 0 012-2h2z"
    },
    {
      id: "building-permit",
      category: "land",
      title: t('services_page.list.building_permit.title'),
      desc: t('services_page.list.building_permit.desc'),
      time: t('services_page.list.building_permit.time'),
      price: t('services_page.list.building_permit.price'),
      icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    },
    {
      id: "business-reg",
      category: "business",
      title: t('services_page.list.business_reg.title'),
      desc: t('services_page.list.business_reg.desc'),
      time: t('services_page.list.business_reg.time'),
      price: t('services_page.list.business_reg.price'),
      icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745V21a2 2 0 002 2h14a2 2 0 002-2v-7.745zM6 7V3a2 2 0 012-2h8a2 2 0 012 2v4h2a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2V9a2 2 0 012-2h2z"
    }
  ];

  const filteredServices = SERVICES.filter(service => {
    const matchesCategory = activeCategory === "all" || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         service.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <section className="relative pt-20 pb-24 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        {/* Background Image Layer */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url('/hero-1.jpg')` }}
        >
          {/* Overlay Layer */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#001529]/95 via-[#001529]/90 to-[#001529]/95"></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 city-label mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
            {t('services_page.hero_badge')}
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="city-h1 text-white mb-8"
          >
            {t('services_page.hero_title')} <span className="text-red-500">{t('services_page.hero_subtitle')}</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="city-body-lg text-slate-300 mb-12 max-w-3xl mx-auto"
          >
            {t('services_page.hero_desc')}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative max-w-3xl mx-auto"
          >
            <div className="city-glass p-2 rounded-[2rem] flex items-center group focus-within:bg-white focus-within:border-white transition-all duration-500">
              <div className="pl-8 text-slate-400 group-focus-within:text-red-500 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input 
                type="text" 
                placeholder={t('services_page.search_placeholder')}
                className="w-full px-6 py-5 bg-transparent text-white focus:text-slate-900 focus:outline-none font-medium text-lg placeholder:text-slate-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="bg-red-600 text-white px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-red-700 transition-all shadow-xl shadow-red-600/20 active:scale-95">
                {t('services_page.search_btn')}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl p-2 flex flex-wrap items-center gap-2">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-6 py-4 rounded-xl transition-all whitespace-nowrap ${activeCategory === cat.id ? "bg-slate-50 text-slate-900 border border-slate-100" : "text-slate-400 hover:text-slate-600 hover:bg-slate-50/50"}`}
            >
              <svg className={`w-4 h-4 ${activeCategory === cat.id ? "text-blue-600" : "text-slate-400"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={cat.icon} />
              </svg>
              <span className="text-sm font-bold tracking-tight">{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl font-bold text-slate-900 font-display">{t('services_page.popular_title')}</h2>
          <Link to="#" className="text-blue-600 font-bold text-xs hover:underline flex items-center gap-2">
            {t('services_page.view_all')} &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredServices.map(service => (
              <motion.div
                layout
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
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
                  {t('services_page.view_details')} &rarr;
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Features Bar */}
        <div className="mt-20 py-10 border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: t('services_page.features.secure.label'), desc: t('services_page.features.secure.desc'), icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
            { label: t('services_page.features.easy.label'), desc: t('services_page.features.easy.desc'), icon: "M13 10V3L4 14h7v7l9-11h-7z" },
            { label: t('services_page.features.track.label'), desc: t('services_page.features.track.desc'), icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" },
            { label: t('services_page.features.support.label'), desc: t('services_page.features.support.desc'), icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" },
          ].map(f => (
            <div key={f.label} className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={f.icon} />
                </svg>
              </div>
              <div>
                <h4 className="text-[11px] font-black uppercase tracking-wider text-slate-900 mb-1">{f.label}</h4>
                <p className="text-[10px] text-slate-500 leading-tight">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Services;
