import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

export default function MobileAppSection() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<'mobile' | 'desktop'>('mobile');

  return (
    <>
      <section className="py-24 sm:py-32 bg-slate-50/50 relative overflow-hidden z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-red-600 font-bold tracking-[0.2em] uppercase text-[10px] mb-4">
              Smart Ecosystem
            </h2>
            <h3 className="text-3xl sm:text-5xl font-bold text-slate-900 mb-8 font-display tracking-tight">
              One City. <span className="text-red-600">Every Platform.</span>
            </h3>
            
            {/* Platform Switcher Tabs */}
            <div className="inline-flex p-1.5 bg-slate-200/50 backdrop-blur-md rounded-2xl border border-slate-200">
              <button 
                onClick={() => setActiveTab('mobile')}
                className={`px-8 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${activeTab === 'mobile' ? 'bg-white text-red-600 shadow-xl' : 'text-slate-500 hover:text-slate-700'}`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 00-2 2z"/></svg>
                Mobile Experience
              </button>
              <button 
                onClick={() => setActiveTab('desktop')}
                className={`px-8 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${activeTab === 'desktop' ? 'bg-white text-red-600 shadow-xl' : 'text-slate-500 hover:text-slate-700'}`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2"/></svg>
                Desktop Portal
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'mobile' ? (
              <motion.div 
                key="mobile"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24"
              >
                <div className="lg:w-1/2">
                  <div className="space-y-6">
                    <h4 className="text-2xl font-bold text-slate-900 font-display">{t("home.mobile_app.title")}</h4>
                    <p className="text-slate-600 text-lg leading-relaxed">{t("home.mobile_app.desc")}</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[t("home.mobile_app.feature1"), t("home.mobile_app.feature2"), t("home.mobile_app.feature3"), t("home.mobile_app.feature4")].map((f, i) => (
                        <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                          <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-600 shrink-0">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                          </div>
                          <span className="text-slate-700 font-bold text-xs uppercase tracking-wider">{f}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4 pt-6">
                      <button className="px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all flex items-center gap-3 shadow-xl shadow-slate-900/10">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.5 12.5c0-1.8-1.5-3.3-3.3-3.3s-3.3 1.5-3.3 3.3 1.5 3.3 3.3 3.3 3.3-1.5 3.3-3.3zm-3.3-2.1c1.2 0 2.1.9 2.1 2.1s-.9 2.1-2.1 2.1-2.1-.9-2.1-2.1.9-2.1 2.1-2.1z M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
                        App Store
                      </button>
                      <button className="px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all flex items-center gap-3 shadow-xl shadow-slate-900/10">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M3 20.5v-17l14 8.5L3 20.5z"/></svg>
                        Google Play
                      </button>
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/2 relative">
                  <div className="relative mx-auto w-[280px] h-[580px] bg-slate-900 rounded-[3rem] border-[8px] border-slate-800 shadow-[0_0_80px_rgba(0,0,0,0.15)] overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl z-20"></div>
                    <img src="/city-3.jpg" alt="App Mockup" className="w-full h-full object-cover opacity-80" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 right-8 text-white">
                       <div className="text-xl font-bold mb-2">Sheger Connect</div>
                       <div className="text-[10px] text-white/60 mb-6 uppercase tracking-widest">Unified Smart Services</div>
                       <div className="w-full h-12 bg-red-600 rounded-xl flex items-center justify-center font-bold text-sm shadow-lg shadow-red-600/30">Get Started</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key="desktop"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24"
              >
                <div className="lg:w-1/2">
                  <div className="space-y-6">
                    <h4 className="text-2xl font-bold text-slate-900 font-display">Unified Desktop Portal</h4>
                    <p className="text-slate-600 text-lg leading-relaxed">Access the full power of Sheger's e-governance from any browser. A comprehensive dashboard for business licenses, land certificates, and more.</p>
                    
                    <ul className="space-y-4">
                      {[
                        { title: "Smart Dashboard", desc: "Real-time updates on all your applications." },
                        { title: "Secured Documents", desc: "Digital vault for all your city-issued certificates." },
                        { title: "Direct Support", desc: "24/7 video and chat assistance with city officials." }
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-4">
                          <div className="w-6 h-6 rounded-lg bg-red-600 flex items-center justify-center text-white shrink-0 mt-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/></svg>
                          </div>
                          <div>
                            <div className="text-slate-900 font-bold text-sm">{item.title}</div>
                            <div className="text-slate-500 text-xs mt-0.5">{item.desc}</div>
                          </div>
                        </li>
                      ))}
                    </ul>

                    <button className="mt-6 px-10 py-5 bg-red-600 text-white font-bold rounded-2xl hover:bg-red-700 transition-all shadow-xl shadow-red-600/20">
                      Access E-Portal Now
                    </button>
                  </div>
                </div>

                <div className="lg:w-1/2 w-full">
                  <div className="relative bg-slate-900 rounded-[2rem] border-[6px] border-slate-800 shadow-2xl overflow-hidden aspect-video group">
                    {/* Fake Browser UI */}
                    <div className="absolute top-0 left-0 right-0 h-8 bg-slate-800 flex items-center px-4 gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                      <div className="ml-4 h-5 w-full max-w-[200px] bg-slate-700 rounded-md"></div>
                    </div>
                    
                    <div className="pt-8 h-full bg-slate-950 p-6 flex gap-4">
                      {/* Sidebar */}
                      <div className="w-16 h-full bg-slate-900/50 rounded-xl border border-white/5 flex flex-col items-center py-4 gap-6">
                        {[1,2,3,4].map(i => <div key={i} className="w-8 h-8 rounded-lg bg-white/5 border border-white/10" />)}
                      </div>
                      
                      {/* Dashboard Content */}
                      <div className="flex-1 space-y-4">
                        <div className="h-10 bg-white/5 rounded-xl border border-white/5 w-1/3"></div>
                        <div className="grid grid-cols-3 gap-4">
                          {[1,2,3].map(i => <div key={i} className="h-20 bg-white/5 rounded-2xl border border-white/5" />)}
                        </div>
                        <div className="h-24 bg-red-600/10 border border-red-600/20 rounded-2xl p-4 flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-red-600 animate-pulse"></div>
                          <div className="flex-1 space-y-2">
                            <div className="h-2 bg-white/20 rounded w-1/2"></div>
                            <div className="h-2 bg-white/10 rounded w-1/4"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
