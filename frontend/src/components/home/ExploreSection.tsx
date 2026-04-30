import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function ExploreSection() {
  const { t } = useTranslation();
  return (

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
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              className="sm:col-span-2 sm:row-span-2 min-h-[400px] relative rounded-3xl overflow-hidden group shadow-lg"
            >
              <div className="absolute inset-0 bg-[url('/city-2.jpg')] bg-cover bg-center transition-transform duration-[10000ms] group-hover:scale-110"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 sm:p-10">
                <span className="px-3 py-1 bg-red-500 text-slate-900 text-[10px] font-bold uppercase tracking-widest rounded-full mb-4 inline-block">
                  {t("home.explore.heritage_badge")}
                </span>
                <h4 className="text-lg sm:text-2xl font-bold text-white mb-2 font-display">
                  {t("home.explore.grand_square")}
                </h4>
                <p className="text-white/80 max-w-md text-xs sm:text-sm">
                  {t("home.explore.grand_square_desc")}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.1 }}
              className="min-h-[300px] relative rounded-3xl overflow-hidden group shadow-lg"
            >
              <div className="absolute inset-0 bg-[url('/city-4.jpg')] bg-cover bg-center transition-transform duration-[10000ms] group-hover:scale-110"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h4 className="text-xl sm:text-2xl font-bold text-white mb-2 font-display">
                  {t("home.explore.eco_parks")}
                </h4>
                <p className="text-white/80 text-sm">
                  {t("home.explore.eco_parks_desc")}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2 }}
              className="min-h-[300px] relative rounded-3xl overflow-hidden group shadow-lg bg-slate-900"
            >
              <div className="absolute inset-0 bg-[url('/city-1.jpg')] bg-cover bg-center opacity-60 transition-transform duration-[10000ms] group-hover:scale-110"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h4 className="text-xl sm:text-2xl font-bold text-white mb-2 font-display">
                  {t("home.explore.tech_hub")}
                </h4>
                <p className="text-white/80 text-sm">
                  {t("home.explore.tech_hub_desc")}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      
  );
}
