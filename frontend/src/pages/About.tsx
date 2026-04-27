import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const STATS = [
  {
    value: "12+",
    label: "Sub-Cities",
    icon: "M3 21h18M3 10h18M3 7l9-4 9 4M4 10h2v11H4v-11zm6 0h2v11h-2v-11zm6 0h2v11h-2v-11z",
  },
  {
    value: "3M+",
    label: "Population",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0",
  },
  {
    value: "80%",
    label: "Digital Services",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2",
  },
  {
    value: "85%",
    label: "Citizen Satisfaction",
    icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z",
  },
];

const TIMELINE = [
  {
    year: "2021",
    title: "Sheger City Established",
    desc: "The city was officially established as a new administrative entity, separating from Oromia Special Zone and encompassing towns previously surrounding Addis Ababa.",
  },
  {
    year: "2022",
    title: "First City Administration",
    desc: "The first elected city administration was formed, laying the groundwork for transparent governance, digital services, and citizen-first policies.",
  },
  {
    year: "2023",
    title: "Smart City Initiative Launch",
    desc: "Sheger launched its digital transformation program — digitizing land registration, business licensing, and public health services across all sub-cities.",
  },
  {
    year: "2024",
    title: "Digital Portal Goes Live",
    desc: "The Sheger City Digital Government Portal launched, giving residents 24/7 access to over 30 government services from any device, anywhere.",
  },
  {
    year: "2025",
    title: "Expansion & AI Integration",
    desc: "The city expanded its service zones and integrated AI-powered tools including smart traffic management, predictive maintenance, and this very AI assistant.",
  },
];

const ACHIEVEMENTS = [
  {
    icon: "🏆",
    title: "Digital Transformation",
    stat: "80%",
    desc: "of all government services successfully digitized and accessible online.",
  },
  {
    icon: "🌳",
    title: "Green City Initiative",
    stat: "500K+",
    desc: "trees planted across the city as part of the urban greening campaign.",
  },
  {
    icon: "⭐",
    title: "Citizen Satisfaction",
    stat: "85%",
    desc: "satisfaction rating recorded across all public services surveys.",
  },
  {
    icon: "🏗️",
    title: "Infrastructure Projects",
    stat: "120+",
    desc: "active infrastructure projects improving roads, utilities, and public spaces.",
  },
  {
    icon: "📚",
    title: "Schools Built",
    stat: "40+",
    desc: "new schools and learning centers constructed or renovated since 2022.",
  },
  {
    icon: "💼",
    title: "Jobs Created",
    stat: "25K+",
    desc: "direct and indirect jobs created through city-led development programs.",
  },
];

const VALUES = [
  {
    title: "Transparency",
    icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
    color: "blue",
  },
  { title: "Innovation", icon: "M13 10V3L4 14h7v7l9-11h-7z", color: "red" },
  {
    title: "Inclusion",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0",
    color: "emerald",
  },
  {
    title: "Sustainability",
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064",
    color: "teal",
  },
];

const colorMap: Record<string, string> = {
  blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  red: "bg-red-500/10 text-red-400 border-red-500/20",
  emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  teal: "bg-teal-500/10 text-teal-400 border-teal-500/20",
};

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-slate-50">
      {/* ─── Hero Banner ─── */}
      <section className="relative overflow-hidden bg-slate-950 text-white min-h-[55vh] flex items-center">
        <div className="absolute inset-0 bg-[url('/city-2.jpg')] bg-cover bg-center opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />

        {/* Ambient glow */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-[120px] pointer-events-none hidden lg:block"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 w-full">
          <motion.div
            {...fadeUp(0.1)}
            className="inline-flex items-center gap-3 uppercase tracking-[0.35em] text-[10px] font-semibold text-red-400 mb-6"
          >
            <span className="w-10 h-px bg-red-400/50" />
            {t("about.heritage")}
          </motion.div>
          <motion.h1
            {...fadeUp(0.2)}
            className="text-5xl sm:text-7xl font-bold leading-tight tracking-tight font-display mb-6 max-w-3xl"
          >
            {t("about.title")}{" "}
            <span className="text-red-400 drop-shadow-[0_0_30px_rgba(239,68,68,0.3)]">
              Sheger City
            </span>
          </motion.h1>
          <motion.p
            {...fadeUp(0.4)}
            className="text-white/70 text-lg sm:text-xl max-w-xl leading-relaxed"
          >
            {t("about.hero_desc")}
          </motion.p>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-[1px]">
          <svg viewBox="0 0 1440 80" className="w-full h-auto" fill="none">
            <path
              d="M0 80L60 70C120 60 240 40 360 30C480 20 600 20 720 25C840 30 960 40 1080 45C1200 50 1320 50 1380 50L1440 50V80H0Z"
              fill="#f8fafc"
            />
          </svg>
        </div>
      </section>

      {/* ─── Stats Bar ─── */}
      <section className="bg-slate-50 py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                {...fadeUp(i * 0.1)}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm hover:shadow-lg transition-shadow text-center group"
              >
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={s.icon}
                    />
                  </svg>
                </div>
                <div className="text-3xl sm:text-4xl font-semibold text-slate-900 font-display mb-1">
                  {s.value}
                </div>
                <div className="text-xs uppercase tracking-widest text-slate-400">
                  {s.label}
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
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-500 mb-4">
                City Overview
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight tracking-tight font-display mb-6">
                A City Built for <span className="text-blue-600">People</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Sheger City is a rapidly growing metropolitan area established
                to serve the communities surrounding Addis Ababa. With a
                commitment to efficient, transparent, and citizen-centered
                governance, Sheger is redefining what a modern Ethiopian city
                can be.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Spanning 12 sub-cities and home to over 3 million residents, the
                city offers comprehensive services in land administration,
                health, transport, education, and business development — all
                increasingly accessible through digital platforms.
              </p>
              <Link
                to="/subcity"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 hover:-translate-y-1 group"
              >
                Explore Sub-Cities
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M14 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </motion.div>

            <motion.div {...fadeUp(0.2)} className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img
                  src="/city-1.jpg"
                  alt="Sheger City"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="px-3 py-1 bg-red-500 text-slate-900 text-[10px] font-semibold uppercase tracking-widest rounded-full">
                    Sheger City, Ethiopia
                  </span>
                </div>
              </div>
              {/* Floating accent card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-xl border border-slate-100 hidden sm:block">
                <div className="text-2xl font-semibold text-blue-600 font-display">
                  Est. 2021
                </div>
                <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider mt-1">
                  Year Founded
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Vision & Mission ─── */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[130px] pointer-events-none"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-400 mb-4">
              Direction & Purpose
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold font-display tracking-tight">
              Vision & Mission
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Vision */}
            <motion.div
              {...fadeUp(0.1)}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-10 hover:bg-white/10 transition-all"
            >
              <div className="w-14 h-14 bg-red-500/20 text-red-400 rounded-2xl flex items-center justify-center mb-8">
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4 font-display">
                Our Vision
              </h3>
              <p className="text-white/70 leading-relaxed text-lg">
                To be a leading smart city that provides world-class services,
                promotes sustainable development, and ensures the well-being and
                prosperity of all citizens across every sub-city.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              {...fadeUp(0.2)}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-10 hover:bg-white/10 transition-all"
            >
              <div className="w-14 h-14 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center mb-8">
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4 font-display">
                Our Mission
              </h3>
              <p className="text-white/70 leading-relaxed text-lg">
                To deliver efficient, transparent, and accessible government
                services through digital innovation while fostering economic
                growth, social equity, and environmental sustainability.
              </p>
            </motion.div>
          </div>

          {/* Core Values */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                {...fadeUp(0.1 * i)}
                className={`border rounded-2xl p-6 flex flex-col items-center text-center gap-3 ${colorMap[v.color]}`}
              >
                <div className="w-10 h-10 flex items-center justify-center">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={v.icon}
                    />
                  </svg>
                </div>
                <span className="font-bold text-sm tracking-wide">
                  {v.title}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── History Timeline ─── */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-500 mb-4">
              Our Journey
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 font-display tracking-tight">
              History of Sheger
            </h2>
          </motion.div>

          <div className="relative">
            {/* Central vertical line */}
            <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-slate-200 sm:-translate-x-1/2" />

            {TIMELINE.map((item, i) => (
              <motion.div
                key={item.year}
                {...fadeUp(i * 0.1)}
                className={`relative flex flex-col sm:flex-row items-start sm:items-center mb-14 ${i % 2 !== 0 ? "sm:flex-row-reverse" : ""}`}
              >
                {/* Text */}
                <div
                  className={`sm:w-5/12 w-full pl-14 sm:pl-0 ${i % 2 !== 0 ? "sm:pl-10" : "sm:pr-10 sm:text-right"}`}
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-red-500">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-semibold text-slate-900 font-display mt-1 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Dot */}
                <div className="absolute left-6 sm:left-1/2 top-1 sm:top-1/2 sm:-translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-white border-[3px] border-red-500 rounded-full z-10" />

                <div className="sm:w-5/12 hidden sm:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Achievements ─── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-500 mb-4">
              Key Milestones
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 font-display tracking-tight">
              What We've Achieved
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ACHIEVEMENTS.map((a, i) => (
              <motion.div
                key={a.title}
                {...fadeUp(i * 0.08)}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-4xl mb-5">{a.icon}</div>
                <div className="text-4xl font-semibold text-blue-600 font-display mb-2">
                  {a.stat}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 font-display mb-2">
                  {a.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
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
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-500 mb-6">
              Get Involved
            </p>
            <h2 className="text-4xl sm:text-6xl font-bold text-slate-900 font-display tracking-tight mb-6 leading-tight">
              Be Part of Sheger's <span className="text-blue-600">Future</span>
            </h2>
            <p className="text-slate-600 text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
              Whether you are a resident, investor, or visitor — Sheger City has
              a place for you. Explore our services and connect with your city
              government today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/25 hover:-translate-y-1 group"
              >
                Explore Services
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M14 5l7 7-7 7"
                  />
                </svg>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-slate-100 text-slate-700 font-bold rounded-full hover:bg-slate-200 transition-all hover:-translate-y-1"
              >
                Contact the City
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
