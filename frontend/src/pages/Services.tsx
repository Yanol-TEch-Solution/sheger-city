import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const CATEGORIES = [
  { id: "all", label: "All Services", count: 48, icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" },
  { id: "business", label: "Business & Economy", count: 12, icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745V21a2 2 0 002 2h14a2 2 0 002-2v-7.745zM6 7V3a2 2 0 012-2h8a2 2 0 012 2v4h2a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2V9a2 2 0 012-2h2z" },
  { id: "civil", label: "Civil Registry", count: 8, icon: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" },
  { id: "land", label: "Land & Property", count: 6, icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
  { id: "utilities", label: "Utilities & Billing", count: 7, icon: "M13 10V3L4 14h7v7l9-11h-7z" },
  { id: "transport", label: "Transport", count: 5, icon: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8" },
  { id: "employment", label: "Employment", count: 4, icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745V21a2 2 0 002 2h14a2 2 0 002-2v-7.745zM6 7V3a2 2 0 012-2h8a2 2 0 012 2v4h2a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2V9a2 2 0 012-2h2z" },
  { id: "health", label: "Health & Social Welfare", count: 3, icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
  { id: "education", label: "Education", count: 3, icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" },
];

const SERVICES = [
  {
    id: 1,
    category: "business",
    catLabel: "BUSINESS & ECONOMY",
    title: "Business Permit Application",
    desc: "Apply for new business permit or renew your existing permit.",
    time: "3-5 Days",
    price: "500 ETB",
    icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745V21a2 2 0 002 2h14a2 2 0 002-2v-7.745zM6 7V3a2 2 0 012-2h8a2 2 0 012 2v4h2a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2V9a2 2 0 012-2h2z",
    color: "red",
    online: {
      procedures: [
        "Register on the Sheger E-Services portal",
        "Complete the digital business permit form",
        "Upload your TIN certificate and ID",
        "Make online payment via Telebirr",
        "Download your digital permit once approved"
      ],
      documents: ["Digital ID", "TIN Certificate", "Lease Agreement", "Passport Photo"]
    },
    inPerson: {
      address: "Sheger City Trade & Industry Bureau",
      building: "Bole Road, Sheger Tower, 3rd Floor",
      documents: ["Physical ID Copy", "Original TIN Certificate", "Physical Passport Photos", "Bank Payment Slip"]
    }
  },
  {
    id: 2,
    category: "civil",
    catLabel: "CIVIL REGISTRY",
    title: "Birth Certificate",
    desc: "Request a new birth certificate or certified true copy.",
    time: "1-2 Days",
    price: "50 ETB",
    icon: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14",
    color: "emerald",
    online: {
      procedures: [
        "Login to Civil Registry Portal",
        "Fill Birth Information Form",
        "Upload Hospital Birth Notification",
        "Pay processing fee",
        "Choose delivery method or digital copy"
      ],
      documents: ["Hospital Notification", "Parents' ID", "Marriage Certificate"]
    },
    inPerson: {
      address: "Sub-city Vital Events Office",
      building: "Respective Sub-city Administration Building, Ground Floor",
      documents: ["Original Hospital Notification", "Parents' ID (Original & Copy)", "Physical Photos"]
    }
  },
  {
    id: 3,
    category: "land",
    catLabel: "LAND & PROPERTY",
    title: "Land Ownership Certificate",
    desc: "Apply for land ownership certificate and related services.",
    time: "5-7 Days",
    price: "300 ETB",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
    color: "purple",
    online: {
      procedures: [
        "Verify property plot number",
        "Submit ownership transfer/request form",
        "Upload site plan and deed documents",
        "Schedule an online appointment for verification",
        "Receive digital certificate"
      ],
      documents: ["Property Deed", "Site Plan", "Sale Agreement", "Digital ID"]
    },
    inPerson: {
      address: "Land Management & Development Bureau",
      building: "Sheger City Hall, East Wing, 2nd Floor",
      documents: ["Original Property Documents", "Notarized Sale Agreement", "Official Site Plan"]
    }
  },
  {
    id: 4,
    category: "utilities",
    catLabel: "UTILITIES & BILLING",
    title: "Pay Electricity Bill",
    desc: "Pay your electricity bill securely online.",
    time: "Instant",
    price: "Varies",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    color: "orange",
    online: {
      procedures: [
        "Enter your Account Number",
        "Check outstanding balance",
        "Select payment method",
        "Confirm payment",
        "Download digital receipt"
      ],
      documents: ["Account Number / Customer ID"]
    },
    inPerson: {
      address: "Ethiopian Electric Utility (EEU) Service Center",
      building: "Nearest District Office",
      documents: ["Last Bill Statement", "Customer ID"]
    }
  },
  {
    id: 5,
    category: "transport",
    catLabel: "TRANSPORT",
    title: "Vehicle Registration",
    desc: "Register your vehicle or renew your registration.",
    time: "3-5 Days",
    price: "1,200 ETB",
    icon: "M12 19l9 2-9-18-9 18 9-2zm0 0v-8",
    color: "red",
    online: {
      procedures: [
        "Upload vehicle technical inspection report",
        "Fill insurance details",
        "Pay annual registration fee",
        "Select plate pickup location",
        "Download temporary permit"
      ],
      documents: ["Technical Inspection Report", "Insurance Certificate", "Title Deed"]
    },
    inPerson: {
      address: "Transport Authority Bureau",
      building: "Kality Main Office, Block B",
      documents: ["Physical Vehicle", "Original Title Deed", "Insurance Policy"]
    }
  },
  {
    id: 6,
    category: "civil",
    catLabel: "CIVIL REGISTRY",
    title: "Digital ID Card",
    desc: "Apply for new Digital ID card or replacement.",
    time: "7-10 Days",
    price: "200 ETB",
    icon: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14",
    color: "red",
    online: {
      procedures: [
        "Fill biometric pre-registration form",
        "Upload residential confirmation from Woreda",
        "Schedule biometric capture appointment",
        "Pay ID fee",
        "Receive SMS notification for collection"
      ],
      documents: ["Woreda Residence Paper", "Old ID (for replacement)", "Birth Certificate"]
    },
    inPerson: {
      address: "Sub-city Digital ID Center",
      building: "Main Administration Building, 1st Floor",
      documents: ["Physical Presence for Biometrics", "Original Woreda Confirmation"]
    }
  },
  {
    id: 7,
    category: "utilities",
    catLabel: "UTILITIES & BILLING",
    title: "Pay Water Bill",
    desc: "Pay your water bill and manage your account.",
    time: "Instant",
    price: "Varies",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    color: "red",
    online: {
      procedures: [
        "Enter Water Meter Number",
        "View current month usage",
        "Process payment through portal",
        "Verify transaction status"
      ],
      documents: ["Meter Number"]
    },
    inPerson: {
      address: "Water & Sewerage Authority District Office",
      building: "Local Woreda Service Center",
      documents: ["Recent Water Bill Copy"]
    }
  },
  {
    id: 8,
    category: "health",
    catLabel: "ENVIRONMENT",
    title: "Waste Collection Service",
    desc: "Request waste collection services for your area.",
    time: "2-3 Days",
    price: "100 ETB",
    icon: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
    color: "emerald",
    online: {
      procedures: [
        "Specify location and waste type",
        "Choose collection frequency",
        "Pay subscription fee",
        "Confirm pickup schedule"
      ],
      documents: ["Residence ID", "Location Address"]
    },
    inPerson: {
      address: "Sanitation Bureau Office",
      building: "Local Woreda Administration",
      documents: ["Digital ID", "Utility Bill (for address proof)"]
    }
  },
];



const Services = () => {
  const { t } = useTranslation();
  
  // Custom styles for the scrollbar-hide functionality
  const scrollbarStyles = `
    .scrollbar-hide::-webkit-scrollbar { display: none; }
    .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
    .scrollbar-default::-webkit-scrollbar { display: block; width: 4px; }
    .scrollbar-default::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
  `;
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedService, setSelectedService] = useState<any>(null);
  const [modalTab, setModalTab] = useState<"online" | "inperson">("online");
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleApply = (e: React.MouseEvent, service: any) => {
    e.stopPropagation();
    setSelectedService(service);
    setModalTab("online");
    setShowForm(false);
    setIsSuccess(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setSelectedService(null);
        setIsSuccess(false);
      }, 2000);
    }, 1500);
  };

  const filteredServices = SERVICES.filter(service => {
    const matchesCategory = activeCategory === "all" || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         service.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Calculate real category counts
  const getCategoryCount = (categoryId: string) => {
    if (categoryId === "all") return SERVICES.length;
    return SERVICES.filter(s => s.category === categoryId).length;
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <style>{scrollbarStyles}</style>
      {/* Hero Section - Compact & Clean */}
      <section className="bg-[#002147] pt-24 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
        </div>
        
        <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="max-w-xl"
            >
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3 font-display tracking-tight">
                E-Services Portal
              </h1>
              <p className="text-blue-100/60 text-sm sm:text-base leading-relaxed">
                Access government permits and citizen services online, anytime, anywhere.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="w-full md:w-[450px]"
            >
              <div className="relative group">
                <div className="relative flex items-center bg-white/10 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden p-1 focus-within:bg-white focus-within:border-white transition-all">
                  <div className="pl-4 text-white/40 group-focus-within:text-slate-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Search services..."
                    className="w-full px-4 py-2 text-white focus:text-slate-900 bg-transparent focus:outline-none font-medium text-xs placeholder:text-white/30 focus:placeholder:text-slate-400"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                {["Business", "Birth", "Bills"].map(tag => (
                  <button key={tag} className="text-[8px] font-bold text-white/50 hover:text-white transition-all">
                    #{tag}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <main className="w-full py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-48 shrink-0 lg:-ml-4 xl:-ml-6">
            <div className="sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto scrollbar-hide hover:scrollbar-default transition-all px-2">
              <h3 className="text-slate-400 font-bold mb-4 text-[10px] uppercase tracking-[0.2em] px-2">
                Categories
              </h3>
              
              <div className="space-y-1">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`w-full group flex items-center justify-between px-2.5 py-2 rounded-lg transition-all relative cursor-pointer ${activeCategory === cat.id ? "text-red-600 bg-red-50/50" : "text-slate-500 hover:bg-slate-50"}`}
                  >
                    {activeCategory === cat.id && (
                      <motion.div layoutId="activeCat" className="absolute left-0 w-1 h-4 bg-red-600 rounded-full" />
                    )}
                    <div className="flex items-center gap-2">
                      <svg className={`w-3.5 h-3.5 ${activeCategory === cat.id ? "text-red-600" : "text-slate-400 group-hover:text-slate-600"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={cat.icon} />
                      </svg>
                      <span className="text-[10px] font-bold truncate">{cat.label}</span>
                    </div>
                    <span className={`text-[9px] font-black ${activeCategory === cat.id ? "text-red-600" : "text-slate-400"}`}>
                      {getCategoryCount(cat.id)}
                    </span>
                  </button>
                ))}
              </div>

              <div className="mt-12 px-2 border-t border-slate-200 pt-6">
                <h4 className="text-slate-900 font-bold text-[10px] mb-1">Help Desk</h4>
                <p className="text-slate-400 text-[9px] mb-3">24/7 Citizen Support</p>
                <button className="text-red-600 font-bold text-[10px] hover:underline flex items-center gap-1">
                  Contact Support &rarr;
                </button>
              </div>
            </div>
          </aside>

          {/* Content Area */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 font-display">Featured Services</h3>
                <p className="text-slate-500 text-sm mt-1">Discover the most popular online portals in Sheger City.</p>
              </div>
              <Link to="#" className="text-red-600 font-bold text-sm hover:underline flex items-center gap-2">
                View All Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <AnimatePresence mode="popLayout">
                {filteredServices.map(service => (
                  <motion.div
                    layout
                    key={service.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-red-100 transition-all p-5 flex flex-col group relative overflow-hidden"
                  >
                    {/* Corner Accent */}
                    <div className="absolute -top-12 -right-12 w-24 h-24 bg-red-500/5 rounded-full blur-2xl group-hover:scale-150 transition-transform"></div>

                    <div className="flex items-start gap-3.5 mb-4 relative z-10">
                      <div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
                        </svg>
                      </div>
                      <div>
                        <span className={`text-[8px] font-bold tracking-widest text-slate-400 uppercase`}>{service.catLabel}</span>
                        <h4 className="text-sm font-bold text-slate-900 mt-0.5 leading-tight">{service.title}</h4>
                      </div>
                    </div>

                    <p className="text-slate-500 text-[11px] leading-relaxed mb-6 relative z-10 line-clamp-2">
                      {service.desc}
                    </p>

                    <div className="mt-auto flex items-center justify-between pt-4 border-t border-slate-50 relative z-10">
                      <div className="flex flex-col gap-1">
                         <div className="flex items-center gap-1.2 text-slate-400">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-[9px] font-medium">{service.time}</span>
                         </div>
                         <span className="text-[10px] font-bold text-slate-700">{service.price}</span>
                      </div>
                      
                      <button 
                        onClick={(e) => handleApply(e, service)}
                        className="flex items-center gap-1 text-red-600 font-bold text-[10px] group-hover:translate-x-1 transition-transform cursor-pointer hover:underline"
                      >
                        Apply &rarr;
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Bottom Feature Bars */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
               {[
                 { label: "Secure & Reliable", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
                 { label: "24/7 Availability", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
                 { label: "Track Applications", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" },
                 { label: "Digital Documents", icon: "M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" },
               ].map(feature => (
                 <div key={feature.label} className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                    <div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center shrink-0">
                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                       </svg>
                    </div>
                    <span className="text-[10px] font-black text-slate-700 leading-tight">{feature.label}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </main>

      {/* Service Application Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => !isSubmitting && setSelectedService(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl z-10 overflow-hidden flex flex-col max-h-[90vh]"
            >
              {isSuccess ? (
                <div className="p-12 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Application Received!</h2>
                  <p className="text-slate-500">Your request for <strong>{selectedService.title}</strong> has been submitted successfully. Reference: #SHG-{Math.floor(Math.random() * 100000)}</p>
                </div>
              ) : (
                <>
                  <div className="h-2 bg-red-600" />
                  <div className="p-8 overflow-y-auto scrollbar-hide">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center">
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={selectedService.icon} />
                          </svg>
                        </div>
                        <div>
                          <h2 className="text-xl font-bold text-slate-900">{selectedService.title}</h2>
                          <p className="text-xs text-slate-500">Service Fee: {selectedService.price}</p>
                        </div>
                      </div>
                      <button 
                        onClick={() => setSelectedService(null)}
                        className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                      >
                        <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>

                    {/* Tabs */}
                    <div className="flex border-b border-slate-100 mb-6">
                      <button
                        onClick={() => setModalTab("online")}
                        className={`flex-1 py-3 text-xs font-bold transition-all relative ${modalTab === "online" ? "text-red-600" : "text-slate-400 hover:text-slate-600"}`}
                      >
                        Apply Online
                        {modalTab === "online" && (
                          <motion.div layoutId="modalTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600" />
                        )}
                      </button>
                      <button
                        onClick={() => setModalTab("inperson")}
                        className={`flex-1 py-3 text-xs font-bold transition-all relative ${modalTab === "inperson" ? "text-red-600" : "text-slate-400 hover:text-slate-600"}`}
                      >
                        In-Person at Office
                        {modalTab === "inperson" && (
                          <motion.div layoutId="modalTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600" />
                        )}
                      </button>
                    </div>

                    <div className="min-h-[300px]">
                      {modalTab === "online" ? (
                        showForm ? (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-6"
                          >
                            <div className="flex items-center gap-2 mb-4">
                              <button 
                                onClick={() => setShowForm(false)}
                                className="p-1 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-600 transition-all"
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                              </button>
                              <h3 className="text-sm font-bold text-slate-800">Application Form</h3>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-5">
                              <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Full Name</label>
                                  <input required type="text" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-red-500/20 focus:border-red-500 outline-none transition-all" placeholder="Enter your name" />
                                </div>
                                <div className="space-y-1.5">
                                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Phone Number</label>
                                  <input required type="tel" className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-red-500/20 focus:border-red-500 outline-none transition-all" placeholder="+251 ..." />
                                </div>
                              </div>

                              <div className="space-y-1.5">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Upload Required Documents</label>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                  {selectedService.online.documents.map((doc: string, i: number) => (
                                    <div key={i} className="relative group">
                                      <input type="file" className="hidden" id={`file-${i}`} />
                                      <label 
                                        htmlFor={`file-${i}`}
                                        className="flex flex-col items-center justify-center p-4 border-2 border-dashed border-slate-200 rounded-2xl hover:border-red-400 hover:bg-red-50/30 transition-all cursor-pointer group"
                                      >
                                        <svg className="w-5 h-5 text-slate-300 group-hover:text-red-500 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                        </svg>
                                        <span className="text-[9px] font-black text-slate-600 uppercase text-center">{doc}</span>
                                        <span className="text-[8px] text-slate-400 mt-1">PDF, JPG (Max 5MB)</span>
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              <div className="pt-4">
                                <button 
                                  type="submit"
                                  disabled={isSubmitting}
                                  className="w-full px-6 py-4 bg-red-600 text-white font-bold rounded-2xl text-sm hover:opacity-90 transition-all shadow-lg shadow-red-600/20 flex items-center justify-center gap-2"
                                >
                                  {isSubmitting ? (
                                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                  ) : (
                                    <>Submit Application &rarr;</>
                                  )}
                                </button>
                              </div>
                            </form>
                          </motion.div>
                        ) : (
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-6"
                          >
                            <div>
                              <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                                Application Procedures
                              </h3>
                              <div className="space-y-3">
                                {selectedService.online.procedures.map((step: string, i: number) => (
                                  <div key={i} className="flex gap-3">
                                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-50 text-red-600 flex items-center justify-center text-[10px] font-bold">
                                      {i + 1}
                                    </span>
                                    <p className="text-[11px] text-slate-600 leading-relaxed font-medium">{step}</p>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div>
                              <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                Required Documents
                              </h3>
                              <div className="grid grid-cols-2 gap-2">
                                {selectedService.online.documents.map((doc: string, i: number) => (
                                  <div key={i} className="flex items-center gap-2 bg-slate-50 p-2 rounded-lg border border-slate-100">
                                    <svg className="w-3 h-3 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-[10px] font-bold text-slate-700">{doc}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <button 
                              onClick={() => setShowForm(true)}
                              className="w-full px-6 py-4 bg-red-600 text-white font-bold rounded-2xl text-sm hover:opacity-90 transition-all shadow-lg shadow-red-600/20 flex items-center justify-center gap-2"
                            >
                              Start Online Application &rarr;
                            </button>
                          </motion.div>
                        )
                      ) : (
                        <motion.div
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          className="space-y-6"
                        >
                          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                              <svg className="w-3 h-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              Office Location
                            </h3>
                            <p className="text-xs font-bold text-slate-900 mb-1">{selectedService.inPerson.address}</p>
                            <p className="text-[11px] text-slate-500">{selectedService.inPerson.building}</p>
                          </div>

                          <div>
                            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                              What to Bring
                            </h3>
                            <div className="space-y-2">
                              {selectedService.inPerson.documents.map((doc: string, i: number) => (
                                <div key={i} className="flex items-center gap-3 p-3 bg-white border border-slate-100 rounded-xl shadow-sm">
                                  <div className="w-2 h-2 rounded-full bg-blue-100 flex-shrink-0" />
                                  <span className="text-[11px] font-medium text-slate-700">{doc}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100 flex gap-3">
                             <svg className="w-5 h-5 text-amber-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                             </svg>
                             <div>
                                <p className="text-[10px] font-bold text-amber-900 uppercase tracking-wider mb-1">Important Notice</p>
                                <p className="text-[10px] text-amber-700 leading-relaxed">Please arrive between 8:30 AM and 5:00 PM (Monday - Friday). Biometric captures require physical presence.</p>
                             </div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Services;
