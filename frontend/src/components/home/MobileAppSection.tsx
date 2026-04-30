import { useTranslation } from 'react-i18next';
import WaveDivider from '../WaveDivider';

export default function MobileAppSection() {
  const { t } = useTranslation();
  return (
    <>
      <WaveDivider variant="darkToLight" />
      <section className="py-24 sm:py-32 bg-white/60 relative overflow-hidden z-20">
        <div className="max-w-[1600px] mx-auto px-2 sm:px-4 lg:px-6">
           {/* Promotion Content */}
           <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
              <div className="lg:w-1/2">
                <h2 className="text-red-600 font-bold tracking-[0.2em] uppercase text-xs mb-4">
                  {t("home.mobile_app.badge")}
                </h2>
                <h3 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-6 font-display">
                  {t("home.mobile_app.title")} <span className="text-red-600">{t("home.mobile_app.subtitle")}</span>
                </h3>
                <p className="text-slate-600 text-base mb-10 leading-relaxed">
                  {t("home.mobile_app.desc")}
                </p>
                <div className="grid grid-cols-2 gap-6 mb-12">
                   {[t("home.mobile_app.feature1"), t("home.mobile_app.feature2"), t("home.mobile_app.feature3"), t("home.mobile_app.feature4")].map((f, i) => (
                     <div key={i} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                        </div>
                        <span className="text-slate-700 font-semibold text-sm">{f}</span>
                     </div>
                   ))}
                </div>
                <div className="flex gap-4">
                   <button className="px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all flex items-center gap-3 text-sm">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.5 12.5c0-1.8-1.5-3.3-3.3-3.3s-3.3 1.5-3.3 3.3 1.5 3.3 3.3 3.3 3.3-1.5 3.3-3.3zm-3.3-2.1c1.2 0 2.1.9 2.1 2.1s-.9 2.1-2.1 2.1-2.1-.9-2.1-2.1.9-2.1 2.1-2.1z M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
                      {t("home.mobile_app.app_store")}
                   </button>
                   <button className="px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all flex items-center gap-3 text-sm">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M3 20.5v-17l14 8.5L3 20.5z"/></svg>
                      {t("home.mobile_app.play_store")}
                   </button>
                </div>
              </div>
              <div className="lg:w-1/2 relative">
                 <div className="relative w-full max-w-[320px] mx-auto aspect-[9/19] bg-slate-900 rounded-[3rem] border-[8px] border-slate-800 shadow-2xl overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl z-20"></div>
                    <img src="/city-3.jpg" alt="App Mockup" className="w-full h-full object-cover opacity-80" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                    <div className="absolute bottom-8 left-8 right-8 text-white">
                       <div className="text-xl font-bold mb-2">Sheger Pay</div>
                       <div className="text-xs text-white/60 mb-6">Secured digital payments for all city services.</div>
                       <div className="w-full h-12 bg-red-600 rounded-xl flex items-center justify-center font-bold text-sm">Scan QR Code</div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>
      <WaveDivider variant="whiteToDark" />
    </>
  );
}
