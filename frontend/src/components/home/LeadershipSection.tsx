import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import WaveDivider from '../WaveDivider';

export default function LeadershipSection() {
  const { t } = useTranslation();
  return (
    <>
      <WaveDivider variant="darkToWhite" />
      <section className="py-24 bg-slate-50/65 text-slate-900 relative z-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1.2 }}
            className="text-center mb-16 sm:mb-24 relative"
          >
            <h2 className="inline-block text-xl sm:text-3xl font-bold tracking-widest uppercase mb-6 bg-slate-50 px-4 sm:px-8 relative z-10 text-slate-900 leading-tight font-display">
              {t("home.leadership.title")}
            </h2>
            <div className="absolute top-1/2 left-0 right-0 h-px bg-slate-200 -translate-y-1/2 z-0 hidden sm:block"></div>
          </motion.div>

          <div className="relative max-w-5xl mx-auto px-4 sm:px-0">
            {/* Vertical Line - Hidden on small mobile */}
            <div className="absolute left-0 sm:left-1/2 top-0 bottom-0 w-px bg-slate-200 sm:-translate-x-1/2"></div>

            {[
              {
                title: t("home.leadership.mayor_title"),
                name: t("home.leadership.mayor_name"),
                text: t("home.leadership.mayor_text"),
                img: "/dr.teshome.jpg",
                reverse: false,
              },
              {
                title: t("home.leadership.deputy1_title"),
                name: t("home.leadership.deputy1_name"),
                text: t("home.leadership.deputy1_text"),
                img: "/mr.guyo.png",
                reverse: true,
              },
              {
                title: t("home.leadership.deputy2_title"),
                name: t("home.leadership.deputy2_name"),
                text: t("home.leadership.deputy2_text"),
                img: "/mr.gugsa.png",
                reverse: false,
              },
              {
                title: t("home.leadership.deputy3_title"),
                name: t("home.leadership.deputy3_name"),
                text: t("home.leadership.deputy3_text"),
                img: "/mr.hailu.png",
                reverse: true,
              },
            ].map((person, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1 }}
                className={`relative flex flex-col sm:flex-row items-center justify-between mb-20 sm:mb-32 ${person.reverse ? "sm:flex-row-reverse" : ""}`}
              >
                <div
                  className={`sm:w-5/12 w-full pl-8 sm:pl-0 mb-8 sm:mb-0 ${person.reverse ? "sm:pl-12" : "sm:text-right sm:pr-12"}`}
                >
                  <div className="text-red-600 font-bold tracking-widest text-[8px] sm:text-[10px] mb-3 uppercase">
                    {person.title}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-4 text-slate-900 font-display">
                    {person.name}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
                    {person.text}
                  </p>
                </div>
                <div className="absolute left-0 sm:left-1/2 top-0 sm:top-1/2 -translate-x-1/2 sm:-translate-y-1/2 w-4 h-4 bg-white border-[3px] border-red-600 rounded-full z-10"></div>
                <div className="sm:w-5/12 w-full pl-8 sm:pl-0">
                  <img
                    src={person.img}
                    alt={person.name}
                    className="w-full max-w-[280px] rounded-2xl shadow-2xl object-cover aspect-[4/5] mx-auto sm:mx-0"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* <WaveDivider variant="darkToWhite" /> */}
    </>
  );
}
