import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function ExploreSection() {
  const { t } = useTranslation();
  return (
    <>
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white/60 relative z-20 border-b border-slate-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 sm:mb-12 lg:mb-16 gap-4 sm:gap-6">
            <div className="w-full sm:w-auto">
              <h2 className="text-[8px] sm:text-[10px] font-bold tracking-[0.2em] uppercase text-red-500 mb-2 sm:mb-4">
                {t("home.explore.badge")}
              </h2>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight font-display">
                {t("home.explore.title")}
              </h3>
            </div>
            <Link
              to="/explore"
              className="w-full sm:w-auto flex items-center justify-center gap-2 text-slate-600 font-bold hover:text-red-500 transition-colors px-4 sm:px-6 py-3 sm:py-4 bg-slate-50 rounded-xl sm:rounded-2xl border border-slate-200 text-xs sm:text-sm whitespace-nowrap"
            >
              {t("home.explore.view_map")}
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Grand Square Card */}
            <Link to="/explore/grand-square" className="sm:col-span-2 sm:row-span-2 min-h-[350px] sm:min-h-[400px] lg:min-h-[450px] relative rounded-2xl sm:rounded-[2.5rem] overflow-hidden group shadow-lg block">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                className="w-full h-full"
              >
                <div className="absolute inset-0 bg-[url('/city-2.jpg')] bg-cover bg-center transition-transform duration-[10000ms] group-hover:scale-110"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 p-4 sm:p-6 lg:p-10 w-full flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6">
                  <div className="max-w-xl">
                    <span className="px-3 sm:px-4 py-1 sm:py-1.5 bg-red-600 text-white text-[8px] sm:text-[10px] font-black uppercase tracking-[0.2em] rounded-full mb-3 sm:mb-5 inline-block">
                      {t("home.explore.heritage_badge")}
                    </span>
                    <h4 className="text-xl sm:text-2xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 font-display tracking-tight">
                      {t("home.explore.grand_square")}
                    </h4>
                    <p className="text-white/70 max-w-md text-xs sm:text-sm leading-relaxed font-medium">
                      {t("home.explore.grand_square_desc")}
                    </p>
                  </div>

                  {/* Hidden See More Button - Pops on card hover */}
                  <div className="translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-[0.22,1,0.36,1] transform-gpu hidden sm:block">
                    <div className="px-5 sm:px-7 py-2 sm:py-3 bg-white text-slate-950 font-bold text-xs sm:text-sm rounded-full shadow-2xl flex items-center gap-2 sm:gap-3 whitespace-nowrap font-display">
                      Explore Story
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-red-600 flex items-center justify-center text-white shadow-lg shadow-red-600/30">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Eco Parks Card */}
            <Link to="/explore/eco-parks" className="min-h-[250px] sm:min-h-[300px] relative rounded-2xl sm:rounded-[2.5rem] overflow-hidden group shadow-lg block">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.1 }}
                className="w-full h-full"
              >
                <div className="absolute inset-0 bg-[url('/city-4.jpg')] bg-cover bg-center transition-transform duration-[10000ms] group-hover:scale-110"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 sm:p-6 lg:p-8 w-full flex items-end justify-between gap-3">
                  <div className="max-w-[70%]">
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2 font-display">
                      {t("home.explore.eco_parks")}
                    </h4>
                    <p className="text-white/70 text-[10px] sm:text-xs leading-relaxed line-clamp-2">
                      {t("home.explore.eco_parks_desc")}
                    </p>
                  </div>
                  
                  {/* Hidden See More Button */}
                  <div className="translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-[0.22,1,0.36,1] transform-gpu hidden sm:block">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center text-slate-950 shadow-2xl">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>

            {/* Tech Hub Card */}
            <Link to="/explore/tech-hub" className="min-h-[250px] sm:min-h-[300px] relative rounded-2xl sm:rounded-[2.5rem] overflow-hidden group shadow-lg bg-slate-900 block">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2 }}
                className="w-full h-full"
              >
                <div className="absolute inset-0 bg-[url('/city-1.jpg')] bg-cover bg-center opacity-60 transition-transform duration-[10000ms] group-hover:scale-110"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 sm:p-6 lg:p-8 w-full flex items-end justify-between gap-3">
                  <div className="max-w-[70%]">
                    <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1 sm:mb-2 font-display">
                      {t("home.explore.tech_hub")}
                    </h4>
                    <p className="text-white/70 text-[10px] sm:text-xs leading-relaxed line-clamp-2">
                      {t("home.explore.tech_hub_desc")}
                    </p>
                  </div>

                  {/* Hidden See More Button */}
                  <div className="translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-[0.22,1,0.36,1] transform-gpu hidden sm:block">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center text-slate-950 shadow-2xl">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
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
