import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
const SERVICES = [
  {
    id: "business-permit",
    category: "Business & Economy",
    title: "Business Permit Application",
    status: "Active",
    processingTime: "3 - 5 Days",
    serviceFee: "500 ETB",
    description: "This service enables businesses to obtain or renew their trade license issued by Sheger City Administration. A trade license is mandatory for all business operations within the city.",
    process: [
      { step: 1, title: "Application Submission", office: "Revenue Office", info: "Submit your application form along with all required documents." },
      { step: 2, title: "Payment", office: "Cashier Office", info: "Pay the required fee at the designated cashier." },
      { step: 3, title: "Approval & Issuance", office: "Revenue Office", info: "Your application will be reviewed and the license will be issued." }
    ],
    documents: [
      { name: "National ID Copy", required: true },
      { name: "Business Registration Certificate", required: true },
      { name: "Tax Identification Number (TIN)", required: true },
      { name: "Application Form", required: true }
    ],
    officeLocation: "Revenue Office, Main Admin Building, 2nd Floor",
    support: {
      phone: "011-111-2222",
      email: "support@shegercity.gov.et"
    }
  },
  {
    id: "birth-certificate",
    category: "Civil Registry",
    title: "Birth Certificate",
    status: "Active",
    processingTime: "1 - 2 Days",
    serviceFee: "50 ETB",
    description: "Request a new birth certificate or a certified true copy. This is required for various administrative processes and personal identification.",
    process: [
      { step: 1, title: "Identity Verification", office: "Vital Events Desk", info: "Verify parents' identity using biometric records." },
      { step: 2, title: "Form Completion", office: "Civil Status Office", info: "Fill in the required birth details accurately." },
      { step: 3, title: "Issuance", office: "Issuing Desk", info: "Collect your printed and sealed certificate." }
    ],
    documents: [
      { name: "Hospital Notification", required: true },
      { name: "Parents' Identification", required: true },
      { name: "Marriage Certificate", required: false }
    ],
    officeLocation: "Vital Events Desk, Ground Floor, Counter 4",
    support: {
      phone: "011-333-0000",
      email: "vital.events@shegercity.gov.et"
    }
  }
];

const ServiceDetail = () => {
  const { id } = useParams();
  useTranslation();
  const [applyMethod, setApplyMethod] = useState<"online" | "person" | null>(null);
  
  const service = SERVICES.find(s => s.id === id) || SERVICES[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="min-h-screen bg-white font-sans pt-20">
      {/* ─── Breadcrumb ─── */}
      <div className="max-w-5xl mx-auto px-6 py-4">
        <Link to="/services" className="text-xs font-bold text-slate-400 hover:text-emerald-600 transition-colors flex items-center gap-2 uppercase tracking-widest">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
          Back to Services
        </Link>
      </div>

      {/* ─── Header ─── */}
      <header className="max-w-5xl mx-auto px-6 py-8 border-b border-slate-50">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-emerald-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                {service.status}
              </span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                {service.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-black leading-tight">
              {service.title}
            </h1>
          </div>
          <div className="flex flex-wrap gap-3">
             <button 
                onClick={() => setApplyMethod("online")}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-lg shadow-emerald-600/20 active:scale-95"
             >
                Apply Online
             </button>
             <button 
                onClick={() => setApplyMethod("person")}
                className="bg-black hover:bg-slate-900 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-lg active:scale-95"
             >
                In Person
             </button>
          </div>
        </div>
      </header>

      {/* ─── Application Method Info ─── */}
      <AnimatePresence mode="wait">
        {applyMethod && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="max-w-5xl mx-auto px-6 pt-8 overflow-hidden"
          >
            <div className={`p-8 rounded-3xl border-2 flex flex-col md:flex-row items-center justify-between gap-8 ${applyMethod === "online" ? "border-emerald-100 bg-emerald-50/30" : "border-slate-100 bg-slate-50"}`}>
              <div className="space-y-2">
                <h3 className={`text-sm font-black uppercase tracking-widest ${applyMethod === "online" ? "text-emerald-600" : "text-black"}`}>
                  {applyMethod === "online" ? "Starting Online Application" : "In-Person Application Requirements"}
                </h3>
                <p className="text-slate-600 text-sm max-w-xl">
                  {applyMethod === "online" 
                    ? "Prepare your digital documents for upload. You can complete the entire process from your device."
                    : `Please visit our office at: ${service.officeLocation}. Bring all required original documents.`}
                </p>
              </div>
              <div className="flex gap-4 shrink-0">
                <button className={`px-8 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all ${applyMethod === "online" ? "bg-emerald-600 text-white" : "bg-black text-white"}`}>
                  {applyMethod === "online" ? "Continue to Form" : "Download Form"}
                </button>
                <button onClick={() => setApplyMethod(null)} className="px-6 py-3 bg-white text-slate-400 font-bold text-[10px] uppercase tracking-widest rounded-xl border border-slate-200">
                  Cancel
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── Main Content ─── */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Left: Info & Steps */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-xs font-black text-black uppercase tracking-[0.2em] mb-4">Description</h2>
              <p className="text-slate-600 text-lg leading-relaxed font-medium">
                {service.description}
              </p>
            </section>

            <section>
              <h2 className="text-xs font-black text-black uppercase tracking-[0.2em] mb-8">Process Overview</h2>
              <div className="space-y-6">
                {service.process.map((p, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-xs font-black shrink-0 z-10 group-hover:bg-emerald-600 transition-colors">
                        {p.step}
                      </div>
                      {idx !== service.process.length - 1 && (
                        <div className="w-px h-full bg-slate-100 my-1"></div>
                      )}
                    </div>
                    <div className="pb-8">
                      <div className="flex items-center gap-3 mb-1">
                        <h4 className="text-base font-black text-black">{p.title}</h4>
                        <span className="text-[9px] font-black text-emerald-600 uppercase tracking-widest bg-emerald-50 px-2 py-0.5 rounded-md">
                          {p.office}
                        </span>
                      </div>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {p.info}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right: Requirements & Stats */}
          <div className="space-y-8">
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Processing Time</p>
                  <p className="text-xl font-black text-black">{service.processingTime}</p>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Service Fee</p>
                  <p className="text-xl font-black text-emerald-600">{service.serviceFee}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-6">
              <h3 className="text-xs font-black text-black uppercase tracking-[0.2em] border-b border-slate-50 pb-4">Required Documents</h3>
              <ul className="space-y-4">
                {service.documents.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className={`mt-1 w-4 h-4 rounded-full border-2 flex items-center justify-center ${doc.required ? "border-emerald-600 bg-emerald-600" : "border-slate-200"}`}>
                      {doc.required && (
                        <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" /></svg>
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-700 leading-tight">{doc.name}</p>
                      <p className="text-[10px] text-slate-400 mt-0.5">{doc.required ? "Mandatory" : "Optional"}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 bg-black text-white rounded-3xl space-y-4">
              <h3 className="text-xs font-black uppercase tracking-[0.2em]">Support</h3>
              <div className="space-y-2 pt-2">
                <a href={`tel:${service.support.phone}`} className="flex items-center gap-3 text-sm font-bold hover:text-emerald-600 transition-colors">
                  <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  {service.support.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ServiceDetail;
