import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import WaveDivider from '../WaveDivider';

export default function ServicesHubSection() {
  const { t } = useTranslation();
  return (
    <>
      <WaveDivider variant="darkToLight" />
      <section className="py-24 sm:py-32 bg-slate-50/65 relative overflow-hidden z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <h2 className="text-red-600 font-bold tracking-[0.2em] uppercase text-sm mb-4">
                {t("home.services_hub.badge")}
              </h2>
              <h3 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight font-display">
                {t("home.services_hub.title")}
              </h3>
            </div>
            <Link
              to="/services"
              className="px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all flex items-center gap-3 group text-sm"
            >
              {t("home.services_hub.view_all")}
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                id: "land-certificate",
                title: t("home.services_hub.land"),
                icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7",
                count: t("home.services_hub.land_count"),
                desc: t("home.services_hub.land_desc")
              },
              {
                id: "trade-license",
                title: t("home.services_hub.business"),
                icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                count: t("home.services_hub.business_count"),
                desc: t("home.services_hub.business_desc")
              },
              {
                id: "birth-certificate",
                title: t("home.services_hub.citizen"),
                icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
                count: t("home.services_hub.citizen_count"),
                desc: t("home.services_hub.citizen_desc")
              },
              {
                id: "water-bill",
                title: t("home.services_hub.revenue"),
                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                count: t("home.services_hub.revenue_count"),
                desc: t("home.services_hub.revenue_desc")
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-red-500/10 hover:-translate-y-2 transition-all flex flex-col h-full"
              >
                <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center text-red-600 mb-8 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d={service.icon} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2 font-display">{service.title}</h4>
                <p className="text-slate-400 text-[8px] font-black uppercase tracking-widest mb-4">{service.count}</p>
                <p className="text-slate-500 text-[10px] leading-relaxed mb-8">{service.desc}</p>
                <Link 
                  to={`/services/${service.id}`}
                  className="mt-auto w-full py-3 text-center text-[9px] font-black uppercase tracking-widest text-slate-700 border border-slate-100 rounded-xl hover:bg-slate-50 hover:text-red-600 transition-all"
                >
                  {t("home.services_hub.open_portal")} &rarr;
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Centralized Application Portal visual mockup */}
          <div className="mt-20 sm:mt-32 bg-slate-950 rounded-[3rem] p-8 sm:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent"></div>
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h4 className="text-xl sm:text-3xl font-bold text-white mb-6 font-display">
                  {t("home.services_hub.one_platform")}
                </h4>
                <p className="text-slate-400 text-base mb-10 leading-relaxed">
                  {t("home.services_hub.one_platform_desc")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-8 py-4 bg-red-600 text-white font-bold rounded-2xl hover:bg-red-500 transition-all shadow-lg shadow-red-600/20 text-sm">
                    {t("home.services_hub.create_account")}
                  </button>
                  <button className="px-8 py-4 bg-white/10 text-white font-bold rounded-2xl hover:bg-white/20 transition-all border border-white/10 text-sm">
                    {t("home.services_hub.security")}
                  </button>
                </div>
              </div>
              <div className="lg:w-1/2 relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, x: 20 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl"
                >
                  <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center text-red-400 font-bold">
                        JD
                      </div>
                      <div>
                        <div className="text-white font-bold">
                          {t("home.services_hub.user_name")}
                        </div>
                        <div className="text-slate-500 text-[10px] tracking-widest uppercase">
                          {t("home.services_hub.user_badge")}
                        </div>
                      </div>
                    </div>
                    <div className="px-4 py-2 bg-red-500/20 text-red-400 rounded-full text-[10px] font-bold uppercase">
                      {t("home.services_hub.user_status")}
                    </div>
                  </div>
                  <div className="space-y-4">
                    {[
                      {
                        title: t("home.services_hub.app1_title"),
                        status: t("home.services_hub.app1_status"),
                        color: "emerald",
                        progress: 100,
                      },
                      {
                        title: t("home.services_hub.app2_title"),
                        status: t("home.services_hub.app2_status"),
                        color: "red",
                        progress: 65,
                      },
                      {
                        title: t("home.services_hub.app3_title"),
                        status: t("home.services_hub.app3_status"),
                        color: "red",
                        progress: 30,
                      },
                    ].map((app, idx) => (
                      <div
                        key={idx}
                        className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-all"
                      >
                        <div className="flex justify-between items-center mb-3">
                          <div className="text-white font-bold text-xs sm:text-sm">
                            {app.title}
                          </div>
                          <div
                            className={`text-${app.color}-400 text-[10px] font-bold`}
                          >
                            {app.status}
                          </div>
                        </div>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${app.progress}%` }}
                            transition={{ duration: 1, delay: 0.5 + idx * 0.2 }}
                            className={`h-full bg-${app.color}-500`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WaveDivider variant="lightToDark" />
    </>
  );
}
