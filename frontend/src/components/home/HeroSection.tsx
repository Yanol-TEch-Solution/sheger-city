import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import WaveDivider from '../WaveDivider';

const HERO_IMAGES = [
  '/hero-1.jpg',
  '/hero-2.jpg',
  '/hero-3.jpg',
  '/hero-4.jpg',
];

export default function HeroSection() {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showVideoPopup, setShowVideoPopup] = useState(false);
  const [weather, setWeather] = useState<{ temp: number; desc: string } | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const weatherY = useTransform(scrollY, [0, 500], [0, 100]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=9.03&longitude=38.74&current_weather=true');
        const data = await res.json();
        const temp = Math.round(data.current_weather.temperature);
        const code = data.current_weather.weathercode;

        let desc = 'Clear';
        if (code >= 1 && code <= 3) desc = 'Partly Cloudy';
        if (code >= 45 && code <= 48) desc = 'Foggy';
        if (code >= 51 && code <= 67) desc = 'Rainy';
        if (code >= 71 && code <= 77) desc = 'Snow';
        if (code >= 80 && code <= 82) desc = 'Showers';
        if (code >= 95 && code <= 99) desc = 'Thunderstorm';

        setWeather({ temp, desc });
      } catch (error) {
        console.error('Failed to fetch weather', error);
      }
    };
    fetchWeather();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative text-white overflow-hidden min-h-[92vh] flex items-center bg-slate-950 pt-16"
      >
        {/* Background Image Slideshow with Ken Burns Effect */}
        {HERO_IMAGES.map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ scale: 1 }}
            animate={{
              opacity: idx === currentSlide ? 1 : 0,
              scale: idx === currentSlide ? 1.15 : 1,
            }}
            transition={{ duration: 3, ease: "easeInOut" }}
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url('${img}')`,
              backgroundSize: "cover",
              backgroundPosition: "center 30%",
            }}
          >
            {/* Dynamic Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/50 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/30"></div>
          </motion.div>
        ))}


        {/* Real-time Weather & Location Widget */}
        {weather && (
          <motion.div
            style={{ y: weatherY }}
            className="absolute top-28 right-16 z-30 hidden lg:flex flex-col gap-10"
          >
            {/* Weather Block */}
            <div className="flex items-start gap-4">
              <div className="text-white mt-0.5">
                {weather.desc.includes("Rain") ||
                weather.desc.includes("Showers") ? (
                  <svg
                    className="w-8 h-8 text-white fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.5 15.5c1.9 0 3.5-1.6 3.5-3.5 0-1.9-1.5-3.5-3.4-3.5 0 0-.1 0-.1 0C17.3 6.2 15.4 4.5 13 4.5c-1.6 0-3.1.8-3.9 2.1-.5-.6-1.3-1.1-2.1-1.1-1.7 0-3 1.3-3 3 0 .4.1.8.2 1.2C2.8 10.6 2 11.7 2 13c0 1.7 1.3 3 3 3h12.5z" />
                    <path
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      fill="none"
                      d="M8 18l-1 3m5-3l-1 3m5-3l-1 3"
                    />
                  </svg>
                ) : weather.desc.includes("Cloud") ? (
                  <svg
                    className="w-8 h-8 text-white fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.5 19c1.9 0 3.5-1.6 3.5-3.5 0-1.9-1.5-3.5-3.4-3.5 0 0-.1 0-.1 0C17.3 9.7 15.4 8 13 8c-1.6 0-3.1.8-3.9 2.1-.5-.6-1.3-1.1-2.1-1.1-1.7 0-3 1.3-3 3 0 .4.1.8.2 1.2C2.8 14.1 2 15.2 2 16.5c0 1.7 1.3 3 3 3h12.5z" />
                  </svg>
                ) : (
                  <svg
                    className="w-8 h-8 text-white fill-current"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="5" />
                    <path
                      d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-light text-white leading-none tracking-wide">
                  {weather.temp}°C
                </span>
                <span className="text-[8px] font-semibold tracking-[0.2em] text-white/80 uppercase mt-2">
                  {weather.desc}
                </span>
              </div>
            </div>

            {/* Location Block */}
            <div className="flex items-start gap-4">
              <div className="text-white mt-1 w-8 flex justify-center">
                <svg
                  className="w-5 h-5 text-white fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-light text-white tracking-[0.15em] uppercase">
                  Sheger City, ETH
                </span>
                <span className="text-[8px] font-semibold tracking-[0.2em] text-white/80 uppercase mt-2">
                  {new Date().toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>


          </motion.div>
        )}

        {/* Slide Indicators */}
        <div className="absolute right-8 top-[45%] -translate-y-1/2 flex flex-col gap-6 z-30 hidden md:flex items-end">
          {HERO_IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`text-sm font-bold transition-all duration-300 flex items-center gap-4 ${idx === currentSlide ? "text-red-400 scale-110" : "text-white/40 hover:text-white/80"}`}
            >
              {idx === currentSlide && (
                <motion.span
                  layoutId="activeDot"
                  className="w-8 h-[2px] bg-red-400 block rounded-full"
                ></motion.span>
              )}
              0{idx + 1}
            </button>
          ))}
        </div>

        {/* The curvy line */}
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden mix-blend-overlay -translate-y-12">
          <svg
            viewBox="0 0 1440 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full object-cover opacity-60 sm:opacity-90 drop-shadow-2xl"
            preserveAspectRatio="xMidYMid slice"
          >
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
              d="M-100,500 C200,500 300,700 500,500 C700,300 800,200 600,200 C400,200 400,400 600,600 C800,800 1100,400 1500,200"
              stroke="white"
              strokeWidth="16"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="relative z-20 max-w-[1600px] mx-auto px-2 sm:px-4 lg:px-6 py-12 sm:py-16 md:py-20 w-full mt-4 sm:mt-0">
          <motion.div className="max-w-2xl bg-white/5 sm:backdrop-blur-md border border-white/10 p-6 sm:p-12 rounded-[24px] sm:rounded-[40px] shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.8 }}
              className="uppercase tracking-[0.2em] sm:tracking-[0.4em] text-[8px] sm:text-[10px] font-bold mb-6 sm:mb-8 text-red-400 drop-shadow-md flex items-center gap-2 sm:gap-4"
            >
              <span className="w-8 sm:w-12 h-px bg-red-400/50"></span>
              {t("home.hero.badge")}
            </motion.div>

            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6 leading-[1.15] tracking-tight text-white font-display">
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{
                  duration: 1,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="block"
              >
                {t("home.hero.title")}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{
                  duration: 1,
                  delay: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="block text-red-400 drop-shadow-[0_0_30px_rgba(239,68,68,0.3)]"
              >
                {t("home.hero.city")}
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1, delay: 1 }}
              className="text-xs sm:text-sm md:text-base text-white/80 mb-8 sm:mb-10 max-w-xl leading-relaxed font-medium"
            >
              {t("home.hero.subtitle")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6"
            >
              <a
                href="https://tour.panoee.net/iframe/69d5076793f8052809dbec8b"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 sm:px-12 py-4 sm:py-5 bg-red-500 text-slate-950 font-bold rounded-full hover:bg-red-400 transition-all duration-300 shadow-[0_0_30px_rgba(239,68,68,0.4)] hover:shadow-[0_0_50px_rgba(239,68,68,0.6)] sm:hover:-translate-y-2 group text-xs sm:text-sm"
              >
                {t("home.hero.start_exploring")}
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform"
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


            </motion.div>
          </motion.div>
        </div>

        {/* Branded wave bottom — Red → Black → White */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <WaveDivider variant="redAccent" />
        </div>
      </section>
{/*
      City Highlights Cards
      <section className="bg-white/60 pt-24 sm:pt-32 pb-16 sm:pb-24 relative z-20 border-b border-slate-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-red-500 mb-4">
              {t("home.highlights.badge")}
            </h2>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 max-w-3xl mx-auto leading-tight font-display">
              {t("home.highlights.title")}
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {SLIDESHOW_IMAGES.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                  delay: idx * 0.1,
                }}
                whileHover={{ scale: 1.03, y: -10, zIndex: 10 }}
                className="group relative h-[400px] sm:h-[500px] overflow-hidden rounded-2xl cursor-pointer shadow-xl"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] group-hover:scale-110"
                  style={{ backgroundImage: `url('${img}')` }}
                ></div>
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-white text-4xl sm:text-5xl font-bold drop-shadow-lg group-hover:-translate-y-4 transition-transform duration-500">
                    {idx + 1}
                  </span>
                </div>
               
              </motion.div>
            ))}
          </div>
        </div>
       </section> */}

      
      {/* Video Popup Modal */}
      <AnimatePresence>
        {showVideoPopup && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md p-4 sm:p-8"
            onClick={() => setShowVideoPopup(false)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-6xl aspect-video bg-black rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] ring-1 ring-white/10"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setShowVideoPopup(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
              <video 
                src="/sheger-city.mp4" 
                controls 
                autoPlay 
                className="w-full h-full object-cover" 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
