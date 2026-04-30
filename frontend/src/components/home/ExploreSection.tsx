import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function ExploreSection() {
  const { t } = useTranslation();
  return (
    <>
      <section className="py-24 bg-white/60 relative z-20 border-b border-slate-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-end justify-between mb-12 sm:mb-16 gap-6">
            <div>
              <h2 className="text-[8px] sm:text-[10px] font-bold tracking-[0.2em] uppercase text-red-500 mb-4">
                {t("home.explore.badge")}
              </h2>
              <h3 className="text-xl sm:text-3xl font-bold text-slate-900 tracking-tight font-display">
                {t("home.explore.title")}
              </h3>
            </div>
            <Link
              to="/explore"
              className="w-full sm:w-auto flex items-center justify-center gap-2 text-slate-600 font-bold hover:text-red-500 transition-colors px-6 py-4 bg-slate-50 rounded-2xl border border-slate-200 text-sm"
            >
              {t("home.explore.view_map")}
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Grand Square Card */}
            <Link to="/explore/grand-square" className="sm:col-span-2 sm:row-span-2 min-h-[400px] relative rounded-[2.5rem] overflow-hidden group shadow-lg block">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                className="w-full h-full"
              >
                <div className="absolute inset-0 bg-[url('/city-2.jpg')] bg-cover bg-center transition-transform duration-[10000ms] group-hover:scale-110"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 p-6 sm:p-10 w-full flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                  <div className="max-w-xl">
                    <span className="px-4 py-1.5 bg-red-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full mb-5 inline-block">
                      {t("home.explore.heritage_badge")}
                    </span>
                    <h4 className="text-2xl sm:text-4xl font-bold text-white mb-3 font-display tracking-tight">
                      {t("home.explore.grand_square")}
                    </h4>
                    <p className="text-white/70 max-w-md text-sm leading-relaxed font-medium">
                      {t("home.explore.grand_square_desc")}
                    </p>
                  </div>

                  {/* Hidden See More Button - Pops on card hover */}
                  <div className="translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-[0.22,1,0.36,1] transform-gpu">
                    <div className="px-7 py-3 bg-white text-slate-950 font-bold text-sm rounded-full shadow-2xl flex items-center gap-3 whitespace-nowrap font-display">
                      Explore Story
                      <div className="w-7 h-7 rounded-full bg-red-600 flex items-center justify-center text-white shadow-lg shadow-red-600/30">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Eco Parks Card */}
            <Link to="/explore/eco-parks" className="min-h-[300px] relative rounded-[2.5rem] overflow-hidden group shadow-lg block">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.1 }}
                className="w-full h-full"
              >
                <div className="absolute inset-0 bg-[url('/city-4.jpg')] bg-cover bg-center transition-transform duration-[10000ms] group-hover:scale-110"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full flex items-end justify-between">
                  <div className="max-w-[70%]">
                    <h4 className="text-xl sm:text-2xl font-bold text-white mb-2 font-display">
                      {t("home.explore.eco_parks")}
                    </h4>
                    <p className="text-white/70 text-xs leading-relaxed line-clamp-2">
                      {t("home.explore.eco_parks_desc")}
                    </p>
                  </div>
                  
                  {/* Hidden See More Button */}
                  <div className="translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-[0.22,1,0.36,1] transform-gpu">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-950 shadow-2xl">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Tech Hub Card */}
            <Link to="/explore/tech-hub" className="min-h-[300px] relative rounded-[2.5rem] overflow-hidden group shadow-lg bg-slate-900 block">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2 }}
                className="w-full h-full"
              >
                <div className="absolute inset-0 bg-[url('/city-1.jpg')] bg-cover bg-center opacity-60 transition-transform duration-[10000ms] group-hover:scale-110"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full flex items-end justify-between">
                  <div className="max-w-[70%]">
                    <h4 className="text-xl sm:text-2xl font-bold text-white mb-2 font-display">
                      {t("home.explore.tech_hub")}
                    </h4>
                    <p className="text-white/70 text-xs leading-relaxed line-clamp-2">
                      {t("home.explore.tech_hub_desc")}
                    </p>
                  </div>

                  {/* Hidden See More Button */}
                  <div className="translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-[0.22,1,0.36,1] transform-gpu">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-950 shadow-2xl">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
