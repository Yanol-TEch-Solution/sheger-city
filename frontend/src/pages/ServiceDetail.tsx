import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

// This would normally be in a central data file
const SERVICES = [
  {
    id: "trade-license",
    category: "Business & Economy",
    title: "Trade License",
    status: "Active",
    processingTime: "3 - 5 Days",
    serviceFee: "500 ETB",
    version: "1.0",
    lastUpdated: "May 20, 2024",
    description: "This service enables businesses to obtain or renew their trade license issued by Sheger City Administration. A trade license is mandatory for all business operations within the city.",
    process: [
      { step: 1, title: "Application Submission", office: "Revenue Office", info: "Submit your application form along with all required documents at the Revenue Office.", location: "Sheger City Revenue Office, 2nd Floor", phone: "011-123-4567" },
      { step: 2, title: "Payment", office: "Cashier Office", info: "Pay the required fee at the designated cashier.", location: "Sheger City Cashier, 1st Floor", phone: "011-765-4321" },
      { step: 3, title: "Inspection (If Required)", office: "Inspection Office", info: "An inspection may be conducted for certain business types.", location: "Sheger City Inspection Office", phone: "011-222-3333" },
      { step: 4, title: "Approval & License Issuance", office: "Revenue Office", info: "Your application will be reviewed and the trade license will be issued.", location: "Sheger City Revenue Office, 2nd Floor", phone: "011-123-4567" }
    ],
    documents: [
      { name: "National ID Copy", type: "PDF, JPG, PNG (Max 2MB)", required: true },
      { name: "Business Registration Certificate", type: "PDF (Max 2MB)", required: true },
      { name: "Tax Identification Number (TIN)", type: "PDF (Max 2MB)", required: true },
      { name: "Application Form", type: "PDF (Max 2MB)", required: true },
      { name: "Lease Agreement (If Rented)", type: "PDF (Max 2MB)", required: false }
    ],
    support: {
      phone: "011-111-2222",
      email: "support@shegercity.gov.et",
      hours: "Mon - Fri: 8:00 AM - 5:00 PM"
    }
  },
  {
    id: "birth-certificate",
    category: "Civil Registry",
    title: "Birth Certificate",
    status: "Active",
    processingTime: "1 - 2 Days",
    serviceFee: "50 ETB",
    version: "1.2",
    lastUpdated: "April 15, 2024",
    description: "Request a new birth certificate or a certified true copy. This is required for various administrative processes and personal identification.",
    process: [
      { step: 1, title: "Biometric Verification", office: "Vital Events Desk", info: "Verify parents' identity using biometric records.", location: "Main Administration Building", phone: "011-333-4444" },
      { step: 2, title: "Form Completion", office: "Civil Status Office", info: "Fill in the required birth details accurately.", location: "Civil Status Dept, Ground Floor", phone: "011-333-4445" },
      { step: 3, title: "Issuance", office: "Issuing Desk", info: "Collect your printed and sealed certificate.", location: "Main Hall, Counter 4", phone: "011-333-4446" }
    ],
    documents: [
      { name: "Hospital Notification", type: "Original Copy", required: true },
      { name: "Parents' Identification", type: "Valid ID Cards", required: true },
      { name: "Marriage Certificate", type: "Copy (Optional)", required: false }
    ],
    support: {
      phone: "011-333-0000",
      email: "vital.events@shegercity.gov.et",
      hours: "Mon - Fri: 8:00 AM - 4:00 PM"
    }
  }
];

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  
  // Find the service by ID or default to the first one
  const service = SERVICES.find(s => s.id === id) || SERVICES[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-24">
      <section className="relative pt-20 pb-20 px-6 overflow-hidden">
        {/* Background Image Layer */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url('/city-1.jpg')` }}
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
            Service Directory
          </Link>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-4xl text-left">
              <div className="flex items-center gap-4 mb-6">
                <div className="px-4 py-1.5 bg-red-600 text-white city-label rounded-lg shadow-2xl shadow-red-600/40">
                  {service.status}
                </div>
                <div className="h-px w-12 bg-red-500/30"></div>
                <span className="text-red-400 city-label">{service.category}</span>
              </div>
              <h1 className="city-h1 text-white mb-8">
                {service.title}
              </h1>
              <p className="city-body-lg text-slate-300 max-w-3xl">
                Complete your {service.title.toLowerCase()} application entirely online through our secure administrative gateway.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <button className="px-10 py-5 bg-red-600 text-white rounded-2xl font-bold text-sm hover:bg-red-700 transition-all shadow-2xl shadow-red-600/30 active:scale-95">
                Start Application
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Stats */}
            <div className="bg-white rounded-2xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="space-y-1">
                <p className="text-sm font-bold text-slate-400 flex items-center gap-1.5">
                   <svg className="w-3 h-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                   Processing Time
                </p>
                <p className="text-lg font-bold text-slate-800">{service.processingTime}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-bold text-slate-400 flex items-center gap-1.5">
                   <svg className="w-3 h-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                   Service Fee
                </p>
                <p className="text-lg font-bold text-slate-800">{service.serviceFee}</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-bold text-slate-400 flex items-center gap-1.5">
                   <svg className="w-3 h-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                   Version
                </p>
                <p className="text-lg font-bold text-slate-800">{service.version}</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-bold text-slate-400 flex items-center gap-1.5">
                   <svg className="w-3 h-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                   Last Updated
                </p>
                <p className="text-lg font-bold text-slate-800">{service.lastUpdated}</p>
              </div>
            </div>

            {/* Tabs Content */}
            <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
              <div className="flex border-b border-slate-100 bg-slate-50/50">
                {["Overview", "Steps & Process", "Required Documents", "Related Services"].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab.toLowerCase().split(' ')[0])}
                    className={`px-6 py-4 text-xs font-bold uppercase tracking-widest transition-all relative ${activeTab === tab.toLowerCase().split(' ')[0] ? "text-blue-600 bg-white" : "text-slate-400 hover:text-slate-600"}`}
                  >
                    {tab}
                    {activeTab === tab.toLowerCase().split(' ')[0] && (
                      <motion.div layoutId="activeTabUnderline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
                    )}
                  </button>
                ))}
              </div>
              
              <div className="p-8">
                <AnimatePresence mode="wait">
                  {activeTab === "overview" && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} className="space-y-8">
                      <div>
                        <h3 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4">Service Description</h3>
                        <p className="text-slate-600 text-base leading-relaxed">{service.description}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-8">Service Process</h3>
                        <div className="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-100">
                          {service.process.map((p, idx) => (
                            <div key={idx} className="flex gap-6 relative">
                              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 relative z-10 shadow-sm ${idx === 0 ? "bg-[#001529] text-white" : "bg-white border border-slate-200 text-slate-400"}`}>
                                {p.step}
                              </div>
                              <div className="space-y-3 flex-1 bg-slate-50/50 p-4 rounded-xl border border-slate-100">
                                <div className="flex items-center gap-3">
                                  <h4 className="text-sm font-bold text-slate-900">{p.title}</h4>
                                  <span className="px-2 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold rounded-md uppercase tracking-tight">{p.office}</span>
                                </div>
                                <p className="text-slate-600 text-sm leading-relaxed">{p.info}</p>
                                <div className="flex flex-wrap gap-4 pt-2">
                                  <div className="flex items-center gap-2 text-[9px] font-bold text-slate-400">
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                    {p.location}
                                  </div>
                                  <div className="flex items-center gap-2 text-[9px] font-bold text-slate-400">
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                    {p.phone}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="p-4 bg-amber-50 rounded-xl border border-amber-100 flex gap-4">
                        <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center shrink-0">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        <div>
                          <p className="text-xs font-black text-amber-900 uppercase tracking-widest mb-1">Important Note</p>
                          <p className="text-sm text-amber-700">Processing time may vary depending on the type of business and completeness of the submitted documents.</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Right Column: Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100 space-y-6">
              <h3 className="text-[11px] font-black text-slate-900 uppercase tracking-[0.2em] border-b border-slate-50 pb-4">Service Summary</h3>
              <div className="space-y-4">
                {[
                  { label: "Processing Time", value: service.processingTime, icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
                  { label: "Service Fee", value: service.serviceFee, icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
                  { label: "Version", value: service.version, icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
                  { label: "Last Updated", value: service.lastUpdated, icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-bold uppercase tracking-wider flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} /></svg>
                      {item.label}
                    </span>
                    <span className="text-sm font-bold text-slate-700">{item.value}</span>
                  </div>
                ))}
              </div>

              <button className="w-full py-4 bg-[#001529] text-white font-black uppercase tracking-widest text-[11px] rounded-xl shadow-lg shadow-blue-900/20 active:scale-95 transition-all">
                Apply for This Service
              </button>
              
              <button className="w-full py-3 bg-white text-slate-700 border border-slate-200 font-bold rounded-xl text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-slate-50 transition-all">
                <svg className="w-3.5 h-3.5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.976-2.888a1 1 0 00-1.175 0l-3.976 2.888c-.784.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                Add to Favorites
              </button>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100 space-y-6">
              <h3 className="text-[11px] font-black text-slate-900 uppercase tracking-[0.2em] border-b border-slate-50 pb-4">Required Documents</h3>
              <div className="space-y-4">
                {service.documents.map((doc, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-50 text-slate-400 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-bold text-slate-700 leading-tight">{doc.name}</p>
                        <span className={`text-[9px] font-black px-2 py-0.5 rounded uppercase ${doc.required ? "bg-red-50 text-red-600" : "bg-slate-50 text-slate-400"}`}>
                          {doc.required ? "Req" : "Opt"}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">{doc.type}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                </div>
                <div>
                  <h3 className="text-sm font-black text-slate-900 leading-tight uppercase tracking-widest">Need Help?</h3>
                  <p className="text-xs text-slate-500">Our support team is here to help you.</p>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Call", value: service.support.phone, icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" },
                  { label: "Email", value: service.support.email, icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
                  { label: "Hours", value: service.support.hours, icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-slate-600">
                    <svg className="w-4 h-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} /></svg>
                    {item.value}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
