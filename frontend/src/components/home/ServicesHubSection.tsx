import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import landImg from '../../assets/Land & Property.png';
import businessImg from '/city-1.jpg';
import citizenImg from '/city-2.jpg';
import revenueImg from '/city-3.jpg';

export default function ServicesHubSection() {
  const { t } = useTranslation();
  return (
    <>
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-slate-50/65 relative overflow-hidden z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-8 sm:mb-12 lg:mb-16 gap-4 sm:gap-6 lg:gap-8">
            <div className="max-w-2xl text-center lg:text-left w-full lg:w-auto">
              <h2 className="text-red-600 font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-2 sm:mb-4">
                {t("home.services_hub.badge")}
              </h2>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight font-display">
                {t("home.services_hub.title")}
              </h3>
            </div>
            <Link
              to="/services"
              className="w-full lg:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-slate-900 text-white font-bold rounded-xl sm:rounded-2xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2 sm:gap-3 group text-xs sm:text-sm whitespace-nowrap"
            >
              {t("home.services_hub.view_all")}
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                id: "land-certificate",
                title: t("home.services_hub.land"),
                image: landImg,
                count: t("home.services_hub.land_count"),
                desc: t("home.services_hub.land_desc")
              },
              {
                id: "trade-license",
                title: t("home.services_hub.business"),
                image: businessImg,
                count: t("home.services_hub.business_count"),
                desc: t("home.services_hub.business_desc")
              },
              {
                id: "birth-certificate",
                title: t("home.services_hub.citizen"),
                image: citizenImg,
                count: t("home.services_hub.citizen_count"),
                desc: t("home.services_hub.citizen_desc")
              },
              {
                id: "water-bill",
                title: t("home.services_hub.revenue"),
                image: revenueImg,
                count: t("home.services_hub.revenue_count"),
                desc: t("home.services_hub.revenue_desc")
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  rotateY: 25, 
                  rotateX: -15, 
                  scale: 1.08,
                  y: -20 
                }}
                viewport={{ once: false }}
                transition={{ 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 25,
                  delay: i * 0.1 
                }}
                className="group relative bg-white p-6 sm:p-8 rounded-2xl sm:rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-red-500/10 transition-all flex flex-col h-full perspective-[800px]"
              >
                <div className="relative h-44 -mx-8 -mt-8 mb-8 overflow-hidden rounded-t-[2rem]">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-2 font-display">{service.title}</h4>
                <p className="text-slate-400 text-[8px] font-black uppercase tracking-widest mb-3 sm:mb-4">{service.count}</p>
                <p className="text-slate-500 text-[10px] sm:text-xs leading-relaxed mb-6 sm:mb-8 flex-grow">{service.desc}</p>
                <Link 
                  to={`/services/${service.id}`}
                  className="mt-auto w-full py-2.5 sm:py-3 text-center text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-slate-700 border border-slate-100 rounded-lg sm:rounded-xl hover:bg-slate-50 hover:text-red-600 transition-all"
                >
                  {t("home.services_hub.open_portal")} &rarr;
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
