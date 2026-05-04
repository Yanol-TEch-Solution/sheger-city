import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const Counter = ({ value }: { value: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState("0");
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, "")) || 0;
  const suffix = value.replace(/[0-9.]/g, "");

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, numericValue, {
        duration: 1.5,
        ease: "easeOut",
        onUpdate: (v) => setDisplayValue(Math.round(v).toString()),
      });
      return controls.stop;
    }
  }, [isInView, numericValue]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
};

const About = () => {
  const { t } = useTranslation();

  const STATS = [
    {
      value: "12+",
      label: t("about.stats.subcities"),
      icon: "M3 21h18M3 10h18M3 7l9-4 9 4M4 10h2v11H4v-11zm6 0h2v11h-2v-11zm6 0h2v11h-2v-11z",
    },
    {
      value: "36",
      label: t("about.stats.woredas"),
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m5-12h1m-1 4h1m-1 4h1",
    },
    {
      value: "3M+",
      label: t("about.stats.population"),
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0",
    },
    {
      value: "80%",
      label: t("about.stats.services"),
      icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2",
    },
    {
      value: "85%",
      label: t("about.stats.satisfaction"),
      icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
    },
  ];

  const TIMELINE = [
    { year: t("about_page.timeline.t1_year"), title: t("about_page.timeline.t1_title"), desc: t("about_page.timeline.t1_desc") },
    { year: t("about_page.timeline.t2_year"), title: t("about_page.timeline.t2_title"), desc: t("about_page.timeline.t2_desc") },
    { year: t("about_page.timeline.t3_year"), title: t("about_page.timeline.t3_title"), desc: t("about_page.timeline.t3_desc") },
    { year: t("about_page.timeline.t4_year"), title: t("about_page.timeline.t4_title"), desc: t("about_page.timeline.t4_desc") },
    { year: t("about_page.timeline.t5_year"), title: t("about_page.timeline.t5_title"), desc: t("about_page.timeline.t5_desc") },
  ];

  const ACHIEVEMENTS = [
    { title: t("about_page.achievements.a1_title"), stat: "80%", desc: t("about_page.achievements.a1_desc") },
    { title: t("about_page.achievements.a2_title"), stat: "500K+", desc: t("about_page.achievements.a2_desc") },
    { title: t("about_page.achievements.a3_title"), stat: "85%", desc: t("about_page.achievements.a3_desc") },
    { title: t("about_page.achievements.a4_title"), stat: "120+", desc: t("about_page.achievements.a4_desc") },
    { title: t("about_page.achievements.a5_title"), stat: "40+", desc: t("about_page.achievements.a5_desc") },
    { title: t("about_page.achievements.a6_title"), stat: "25K+", desc: t("about_page.achievements.a6_desc") },
  ];

  const VALUES = [
    { title: t("leadership.values.transparency"), icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z", color: "red" },
    { title: t("leadership.values.innovation"), icon: "M13 10V3L4 14h7v7l9-11h-7z", color: "red" },
    { title: t("leadership.values.citizen_first"), icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0", color: "emerald" },
    { title: t("leadership.values.accountability"), icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064", color: "teal" },
  ];

  const colorMap: Record<string, string> = {
    red: "bg-red-500/10 text-red-400 border-red-500/20",
    emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    teal: "bg-teal-500/10 text-teal-400 border-teal-500/20",
  };

  return (
    <div className="bg-slate-50">
      {/* ─── Hero Banner ─── */}
      <section className="relative overflow-hidden bg-slate-950 text-white min-h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-[url('/city-2.jpg')] bg-cover bg-center opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />

        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-red-500/15 rounded-full blur-[120px] pointer-events-none hidden lg:block"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 w-full">
          <motion.div
            {...fadeUp(0.1)}
            className="inline-flex items-center gap-3 tracking-tight text-xs font-medium text-red-400 mb-6"
          >
            <span className="w-10 h-px bg-red-400/50" />
            {t("about.heritage")}
          </motion.div>
          <motion.h1
            {...fadeUp(0.2)}
            className="text-3xl sm:text-5xl font-bold leading-tight tracking-tight font-display mb-6 max-w-3xl"
          >
            {t("about.title")}{" "}
            <span className="text-red-400 drop-shadow-[0_0_30px_rgba(239,68,68,0.3)]">
              {t("header.title")}
            </span>
          </motion.h1>
          <motion.p
            {...fadeUp(0.4)}
            className="text-white/70 text-sm sm:text-base max-w-xl leading-relaxed"
          >
            {t("about.hero_desc")}
          </motion.p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 translate-y-[1px]">
          <svg viewBox="0 0 1440 80" className="w-full h-auto" fill="none">
            <path
              d="M0 80L60 70C120 60 240 40 360 30C480 20 600 20 720 25C840 30 960 40 1080 45C1200 50 1320 50 1380 50L1440 50V80H0Z"
              fill="#f8fafc"
            />
          </svg>
        </div>
      </section>

      {/* ─── Mayor's Message ─── */}
      <section className="pt-16 pb-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Image Column */}
            <motion.div {...fadeUp(0.2)} className="lg:col-span-5 relative lg:pt-14">
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl group">
                <img src="/dr.teshome.jpg" alt="Dr. Teshome Adugna" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <div className="text-xl font-bold font-display">{t('about_page.mayor_message.name')}</div>
                  <div className="text-sm opacity-80">{t('about_page.mayor_message.role')}</div>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-red-600/10 rounded-full blur-2xl -z-10" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-red-600/5 rounded-full blur-3xl -z-10" />
            </motion.div>

            {/* Text Column */}
            <motion.div {...fadeUp(0)} className="lg:col-span-7">
              <div className="inline-flex items-center gap-3 uppercase tracking-[0.25em] text-[10px] font-bold text-red-600 mb-6">
                <span className="w-8 h-px bg-red-600/40" />
                {t('about_page.mayor_message.badge')}
              </div>
              
              <div className="space-y-6 text-slate-600 leading-relaxed font-jost">
                <p className="text-lg font-semibold text-slate-800 italic border-l-4 border-red-600 pl-6 mb-8">
                  "{t('about_page.mayor_message.greeting')}"
                </p>
                <p className="text-base">{t('about_page.mayor_message.p1')}</p>
                <p className="text-base">{t('about_page.mayor_message.p2')}</p>
                
                <div className="pt-6 mt-8 border-t border-slate-200">
                  <p className="text-slate-500 mb-6">{t('about_page.mayor_message.closing')}</p>
                  <div className="flex items-center gap-6">
                    <div className="flex flex-col">
                      <span className="text-slate-400 text-[10px] uppercase tracking-widest mb-1">{t('about_page.mayor_message.signature')}</span>
                      <span className="text-2xl font-bold text-slate-900 font-display">{t('about_page.mayor_message.name')}</span>
                      <span className="text-sm text-red-600 font-medium">{t('about_page.mayor_message.role')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Minimalist Stats ─── */}
      <section className="bg-slate-50 pt-8 pb-24 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
            {STATS.map((s, i) => (
              <motion.div 
                key={s.label} 
                {...fadeUp(i * 0.1)}
                className="group cursor-default"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <span className="text-xl sm:text-3xl font-bold text-slate-900 font-display tracking-tight block transition-all duration-500 group-hover:scale-110 group-hover:text-red-600">
                      <Counter value={s.value} />
                    </span>
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-red-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
                  </div>
                  <div className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.4em] text-slate-400 group-hover:text-slate-900 transition-colors duration-500">
                    {s.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── City Overview ─── */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp(0)}>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-red-600 mb-4">{t('about_page.overview_badge')}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight tracking-tight font-display mb-6">
                {t('about_page.overview_title')}
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mb-6">{t('about_page.overview_p1')}</p>
              <p className="text-slate-600 leading-relaxed mb-8">{t('about_page.overview_p2')}</p>
              <Link to="/subcity" className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition-all shadow-lg shadow-red-600/20 hover:-translate-y-1 group">
                {t('about_page.explore_subcities')}
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7-7 7" /></svg>
              </Link>
            </motion.div>

            <motion.div {...fadeUp(0.2)} className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img src="/city-1.jpg" alt="Sheger City" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="px-3 py-1 bg-red-500 text-slate-900 text-[10px] font-semibold uppercase tracking-widest rounded-full">Sheger City, Ethiopia</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-xl border border-slate-100 hidden sm:block">
                <div className="text-xl font-semibold text-red-600 font-display">Est. 2021</div>
                <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mt-1">Year Founded</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Vision & Mission ─── */}
      <section className="py-24 bg-white relative overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div {...fadeUp(0)} className="text-center mb-20">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-red-600 mb-4">{t('about_page.vision_badge')}</p>
            <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-slate-900">{t('about_page.vision_title')}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32">
            <motion.div {...fadeUp(0.1)} className="relative">
              <div className="inline-flex items-center gap-4 mb-4">
                <span className="w-10 h-1 bg-red-600 rounded-full" />
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">{t('about_page.our_vision')}</h3>
              </div>
              <p className="text-slate-600 leading-relaxed text-base font-jost">
                {t('about_page.vision_text')}
              </p>
            </motion.div>

            <motion.div {...fadeUp(0.2)} className="relative">
              <div className="inline-flex items-center gap-4 mb-4">
                <span className="w-10 h-1 bg-red-600 rounded-full" />
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">{t('about_page.our_mission')}</h3>
              </div>
              <p className="text-slate-600 leading-relaxed text-base font-jost">
                {t('about_page.mission_text')}
              </p>
            </motion.div>
          </div>

          <div className="mt-24 pt-16 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-12">
            {VALUES.map((v, i) => (
              <motion.div key={v.title} {...fadeUp(0.1 * i)} className="group flex flex-col items-center text-center gap-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:-translate-y-2 ${colorMap[v.color]}`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={v.icon} />
                  </svg>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-slate-400 uppercase group-hover:text-slate-900 transition-colors">{v.title}</span>
                  <div className="w-6 h-0.5 bg-red-600/10 rounded-full group-hover:bg-red-600 group-hover:w-10 transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── History Timeline ─── */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-red-500 mb-4">{t('about_page.journey_badge')}</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-display tracking-tight">{t('about_page.journey_title')}</h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-slate-200 sm:-translate-x-1/2" />
            {TIMELINE.map((item, i) => (
              <motion.div key={item.year} {...fadeUp(i * 0.1)} className={`relative flex flex-col sm:flex-row items-start sm:items-center mb-14 ${i % 2 !== 0 ? "sm:flex-row-reverse" : ""}`}>
                <div className={`sm:w-5/12 w-full pl-14 sm:pl-0 ${i % 2 !== 0 ? "sm:pl-10" : "sm:pr-10 sm:text-right"}`}>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-red-600">{item.year}</span>
                  <h3 className="text-lg font-semibold text-slate-900 font-display mt-1 mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
                <div className="absolute left-6 sm:left-1/2 top-1 sm:top-1/2 sm:-translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-white border-[3px] border-red-600 rounded-full z-10" />
                <div className="sm:w-5/12 hidden sm:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Sleek Typographic Achievements ─── */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-24">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-red-600 mb-4">{t('about_page.milestones_badge')}</p>
            <h2 className="text-2xl sm:text-4xl font-bold font-display tracking-tight text-slate-900">{t('about_page.milestones_title')}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
            {ACHIEVEMENTS.map((a, i) => (
              <motion.div 
                key={a.title} 
                {...fadeUp(i * 0.1)}
                className="group relative"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-3xl sm:text-4xl font-bold text-slate-900 font-display tracking-tighter group-hover:text-red-600 transition-colors duration-500">
                    <Counter value={a.stat} />
                  </div>
                  <div className="h-px bg-slate-200 flex-1 group-hover:bg-red-600 transition-all duration-700 origin-left scale-x-50 group-hover:scale-x-100" />
                </div>
                
                <h3 className="text-sm font-bold text-slate-900 mb-3 font-display uppercase tracking-[0.2em] group-hover:text-red-600 transition-colors">
                  {a.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-jost group-hover:text-slate-600 transition-colors duration-500">
                  {a.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div {...fadeUp(0)}>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-red-600 mb-6">{t('about_page.get_involved')}</p>
            <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 font-display tracking-tight mb-6 leading-tight">{t('about_page.future_title')}</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">{t('about_page.future_desc')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services" className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-all shadow-xl shadow-red-600/25 hover:-translate-y-1 group">
                {t('home.hero.explore')}
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7-7 7" /></svg>
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-slate-100 text-slate-700 font-bold rounded-full hover:bg-slate-200 transition-all hover:-translate-y-1">
                {t('about_page.contact_btn')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
