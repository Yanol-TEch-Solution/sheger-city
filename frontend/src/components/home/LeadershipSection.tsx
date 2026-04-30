import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
//import WaveDivider from '../WaveDivider';

export default function LeadershipSection() {
  const { t } = useTranslation();
  return (
    <>
    {/*  <WaveDivider variant="darkToWhite" /> */}
      <section className="py-24 bg-slate-50/65 text-slate-900 relative z-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-20 sm:mb-32 relative"
          >
            <h2 className="inline-block text-2xl sm:text-4xl font-black tracking-tight uppercase mb-6 bg-slate-50 px-6 sm:px-10 relative z-10 text-slate-900 leading-tight font-display">
              {t("home.leadership.title")}
            </h2>
            <div className="absolute top-1/2 left-0 right-0 h-px bg-slate-200/60 -translate-y-1/2 z-0 hidden sm:block"></div>
          </motion.div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-0">
            {/* Vertical Line - Animated */}
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="absolute left-0 sm:left-1/2 top-0 w-px bg-gradient-to-b from-red-600 via-slate-200 to-slate-200 sm:-translate-x-1/2" 
            />

            {[
              {
                title: t("home.leadership.mayor_title"),
                name: t("home.leadership.mayor_name"),
                text: t("home.leadership.mayor_text"),
                bio: "Driving the transformation of Sheger into a global smart city hub, focusing on integrated urban systems and sustainable development for all residents.",
                img: "/dr.teshome.jpg",
                reverse: false,
              },
              {
                title: t("home.leadership.deputy1_title"),
                name: t("home.leadership.deputy1_name"),
                text: t("home.leadership.deputy1_text"),
                bio: "Leading major infrastructure initiatives including the new transit corridors and smart utility networks that form the backbone of our modern city.",
                img: "/mr.guyo.png",
                reverse: true,
              },
              {
                title: t("home.leadership.deputy2_title"),
                name: t("home.leadership.deputy2_name"),
                text: t("home.leadership.deputy2_text"),
                bio: "Dedicated to enhancing the quality of life through modernized healthcare facilities and inclusive educational programs across all sub-cities.",
                img: "/mr.gugsa.png",
                reverse: false,
              },
              {
                title: t("home.leadership.deputy3_title"),
                name: t("home.leadership.deputy3_name"),
                text: t("home.leadership.deputy3_text"),
                bio: "Spearheading the digitization of government services to ensure transparency, speed, and ease of access for every citizen and business owner.",
                img: "/mr.hailu.png",
                reverse: true,
              },
            ].map((person, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col sm:flex-row items-center justify-between mb-24 sm:mb-40 gap-12 sm:gap-0 ${person.reverse ? "sm:flex-row-reverse" : ""}`}
              >
                {/* Content Side */}
                <motion.div
                  initial={{ opacity: 0, x: person.reverse ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className={`sm:w-[45%] w-full pl-8 sm:pl-0 ${person.reverse ? "sm:pl-12" : "sm:text-right sm:pr-12"}`}
                >
                  <div className="text-red-600 font-black tracking-[0.2em] text-[10px] sm:text-xs mb-4 uppercase">
                    {person.title}
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-black mb-6 text-slate-900 font-display leading-tight">
                    {person.name}
                  </h3>
                  <div className={`space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base font-medium`}>
                    <p>{person.text}</p>
                    <p className="text-slate-400 text-xs sm:text-sm font-normal italic">
                      {person.bio}
                    </p>
                  </div>
                  
                  <motion.div 
                    whileHover={{ x: person.reverse ? -5 : 5 }}
                    className={`mt-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-red-600 cursor-pointer ${person.reverse ? "" : "justify-end"}`}
                  >
                    View Official Profile
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                  </motion.div>
                </motion.div>

                {/* Center Node */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                  className="absolute left-0 sm:left-1/2 top-0 sm:top-1/2 -translate-x-1/2 sm:-translate-y-1/2 w-4 h-4 bg-white border-[3px] border-red-600 rounded-full z-10 shadow-[0_0_15px_rgba(220,38,38,0.3)]" 
                />

                {/* Image Side */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, x: person.reverse ? -40 : 40 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  className="sm:w-[45%] w-full pl-8 sm:pl-0 flex justify-center sm:justify-start group"
                >
                  <div className="relative">
                    <div className="absolute -inset-4 bg-red-600/5 rounded-[2.5rem] scale-95 group-hover:scale-100 transition-transform duration-700 -z-10" />
                    <div className="relative overflow-hidden rounded-[2rem] shadow-2xl aspect-[4/5] w-full max-w-[320px]">
                      <motion.img
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.8 }}
                        src={person.img}
                        alt={person.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <WaveDivider variant="darkToWhite" /> */}
    </>
  );
}
