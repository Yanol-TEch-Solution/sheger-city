import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function CityHighlightSection() {
  const { t } = useTranslation();

  return (
    <section className="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="/sheger-bg.jpg" 
          alt="Sheger City" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/50" />
      </div>

      {/* Animated Background Elements */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-red-600/20 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-3">
              <span className="w-12 h-px bg-red-500" />
              <span className="text-red-600 font-bold tracking-[0.3em] uppercase text-xs">
                {t("home.city_highlight.badge")}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight">
              {t("home.city_highlight.title")} <span className="text-red-600">{t("home.city_highlight.title_highlight")}</span>
            </h2>

            {/* Description */}
            <div className="space-y-6 text-slate-600 text-base sm:text-lg leading-relaxed">
              <p>
                {t("home.city_highlight.desc1")}
              </p>
              <p>
                {t("home.city_highlight.desc2")}
              </p>
              <p className="text-slate-900 font-medium">
                {t("home.city_highlight.desc3")}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200">
              {[
                { value: "5M+", label: t("home.city_highlight.stat1") },
                { value: "540km²", label: t("home.city_highlight.stat2") },
                { value: "2886m", label: t("home.city_highlight.stat3") }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                  className="text-center lg:text-left"
                >
                  <div className="text-3xl sm:text-4xl font-bold text-red-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] lg:h-[600px]"
          >
            {/* Main Large Image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="absolute top-0 right-0 w-[70%] h-[55%] rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-200"
            >
              <img 
                src="/city-1.jpg" 
                alt="Sheger City View 1" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
            </motion.div>

            {/* Small Image Bottom Left */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="absolute bottom-0 left-0 w-[55%] h-[40%] rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-200"
            >
              <img 
                src="/city-2.jpg" 
                alt="Sheger City View 2" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
            </motion.div>

            {/* Accent Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute top-1/2 left-1/4 -translate-y-1/2 bg-red-600 text-white p-6 rounded-2xl shadow-2xl z-10"
            >
              <div className="text-sm font-bold uppercase tracking-wider mb-1">
                {t("home.city_highlight.card_title")}
              </div>
              <div className="text-3xl font-bold">
                {t("home.city_highlight.card_value")}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 translate-y-[1px]">
        <svg viewBox="0 0 1440 80" className="w-full h-auto" fill="none">
          <path
            d="M0 80L60 70C120 60 240 40 360 30C480 20 600 20 720 25C840 30 960 40 1080 45C1200 50 1320 50 1380 50L1440 50V80H0Z"
            fill="#f8fafc"
          />
        </svg>
      </div>
    </section>
  );
}
