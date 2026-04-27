import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';
import ChatBot from '../components/ChatBot';

const HERO_IMAGES = [
  '/hero-1.jpg',
  '/hero-2.jpg',
  '/hero-3.jpg',
  '/hero-4.jpg'
];

const SLIDESHOW_IMAGES = [
  '/city-1.jpg',
  '/city-2.jpg',
  '/city-3.jpg',
  '/city-4.jpg'
];

const Home = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [weather, setWeather] = useState<{ temp: number, desc: string } | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();

  const weatherY = useTransform(scrollY, [0, 500], [0, 100]); // Move hook to top level

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
        
        let desc = "Clear";
        if (code >= 1 && code <= 3) desc = "Partly Cloudy";
        if (code >= 45 && code <= 48) desc = "Foggy";
        if (code >= 51 && code <= 67) desc = "Rainy";
        if (code >= 71 && code <= 77) desc = "Snow";
        if (code >= 80 && code <= 82) desc = "Showers";
        if (code >= 95 && code <= 99) desc = "Thunderstorm";
        
        setWeather({ temp, desc });
      } catch (error) {
        console.error("Failed to fetch weather", error);
      }
    };
    fetchWeather();
  }, []);

  return (
    <div className="bg-slate-50/50 selection:bg-amber-500/30 relative">
      
      {/* Global Page Loop — Red → White → Black synchronized ribbon */}
      <div className="fixed inset-0 z-[1] pointer-events-none overflow-hidden mix-blend-overlay">
        <svg
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full opacity-90"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Shared path data for all segments */}
          <g>
            {/* Black — tail */}
            <motion.path
              d="M-100,500 C200,500 300,700 500,500 C700,300 800,200 600,200 C400,200 400,400 600,600 C800,800 1100,400 1540,200"
              stroke="rgba(10,10,20,0.95)"
              strokeWidth="20"
              strokeLinecap="round"
              fill="none"
              strokeDasharray="800 4200"
              animate={{ strokeDashoffset: [6600, -3400] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear", repeatType: "reverse" }}
            />
            {/* White — middle */}
            <motion.path
              d="M-100,500 C200,500 300,700 500,500 C700,300 800,200 600,200 C400,200 400,400 600,600 C800,800 1100,400 1540,200"
              stroke="rgba(255,255,255,0.95)"
              strokeWidth="20"
              strokeLinecap="round"
              fill="none"
              strokeDasharray="800 4200"
              animate={{ strokeDashoffset: [5800, -4200] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear", repeatType: "reverse" }}
            />
            {/* Red — leading */}
            <motion.path
              d="M-100,500 C200,500 300,700 500,500 C700,300 800,200 600,200 C400,200 400,400 600,600 C800,800 1100,400 1540,200"
              stroke="rgba(255,50,50,0.98)"
              strokeWidth="20"
              strokeLinecap="round"
              fill="none"
              strokeDasharray="800 4200"
              animate={{ strokeDashoffset: [5000, -5000] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear", repeatType: "reverse" }}
            />
          </g>
        </svg>
      </div>




      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative text-white overflow-hidden min-h-[98vh] flex items-center bg-slate-950"
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
              backgroundSize: 'cover',
              backgroundPosition: 'center 30%'
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
                {weather.desc.includes('Rain') || weather.desc.includes('Showers') ? (
                  <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24">
                    <path d="M17.5 15.5c1.9 0 3.5-1.6 3.5-3.5 0-1.9-1.5-3.5-3.4-3.5 0 0-.1 0-.1 0C17.3 6.2 15.4 4.5 13 4.5c-1.6 0-3.1.8-3.9 2.1-.5-.6-1.3-1.1-2.1-1.1-1.7 0-3 1.3-3 3 0 .4.1.8.2 1.2C2.8 10.6 2 11.7 2 13c0 1.7 1.3 3 3 3h12.5z"/>
                    <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" d="M8 18l-1 3m5-3l-1 3m5-3l-1 3" />
                  </svg>
                ) : weather.desc.includes('Cloud') ? (
                  <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24">
                    <path d="M17.5 19c1.9 0 3.5-1.6 3.5-3.5 0-1.9-1.5-3.5-3.4-3.5 0 0-.1 0-.1 0C17.3 9.7 15.4 8 13 8c-1.6 0-3.1.8-3.9 2.1-.5-.6-1.3-1.1-2.1-1.1-1.7 0-3 1.3-3 3 0 .4.1.8.2 1.2C2.8 14.1 2 15.2 2 16.5c0 1.7 1.3 3 3 3h12.5z"/>
                  </svg>
                ) : (
                  <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="5" />
                    <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
                  </svg>
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-light text-white leading-none tracking-wide">{weather.temp}°C</span>
                <span className="text-[10px] font-semibold tracking-[0.2em] text-white/80 uppercase mt-2">{weather.desc}</span>
              </div>
            </div>

            {/* Location Block */}
            <div className="flex items-start gap-4">
              <div className="text-white mt-1 w-8 flex justify-center">
                <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-light text-white tracking-[0.15em] uppercase">Sheger City, ETH</span>
                <span className="text-[10px] font-semibold tracking-[0.2em] text-white/80 uppercase mt-2">
                  {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' })}
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
              className={`text-lg font-bold transition-all duration-300 flex items-center gap-4 ${idx === currentSlide ? 'text-amber-400 scale-110' : 'text-white/40 hover:text-white/80'}`}
            >
              {idx === currentSlide && <motion.span layoutId="activeDot" className="w-8 h-[2px] bg-amber-400 block rounded-full"></motion.span>}
              0{idx + 1}
            </button>
          ))}
        </div>

        {/* The curvy line */}
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden mix-blend-overlay -translate-y-12">
          <svg viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover opacity-60 sm:opacity-90 drop-shadow-2xl" preserveAspectRatio="xMidYMid slice">
            <motion.path 
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
              d="M-100,500 C200,500 300,700 500,500 C700,300 800,200 600,200 C400,200 400,400 600,600 C800,800 1100,400 1500,200" 
              stroke="white" strokeWidth="16" strokeLinecap="round" 
            />
          </svg>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 md:py-32 w-full mt-4 sm:mt-0">
          <motion.div className="max-w-2xl bg-white/5 sm:backdrop-blur-md border border-white/10 p-6 sm:p-12 rounded-[24px] sm:rounded-[40px] shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: false }}
              transition={{ delay: 0.8 }}
              className="uppercase tracking-[0.2em] sm:tracking-[0.4em] text-[10px] sm:text-xs font-bold mb-6 sm:mb-8 text-amber-400 drop-shadow-md flex items-center gap-2 sm:gap-4"
            >
              <span className="w-8 sm:w-12 h-px bg-amber-400/50"></span>
              {t('home.hero.badge')}
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 leading-[1.1] tracking-tight text-white font-display">
              <motion.span 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="block"
              >
                {t('home.hero.title')}
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="block text-amber-400 drop-shadow-[0_0_30px_rgba(245,158,11,0.3)]"
              >
                {t('home.hero.city')}
              </motion.span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1, delay: 1 }}
              className="text-base sm:text-lg md:text-xl text-white/80 mb-8 sm:mb-12 max-w-lg leading-relaxed font-medium"
            >
              {t('home.hero.subtitle')}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: false }}
              transition={{ delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6"
            >
              <Link
                to="/virtual-tour"
                className="inline-flex items-center justify-center px-8 sm:px-12 py-4 sm:py-5 bg-amber-500 text-slate-950 font-bold rounded-full hover:bg-amber-400 transition-all duration-300 shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:shadow-[0_0_50px_rgba(245,158,11,0.6)] sm:hover:-translate-y-2 group text-sm sm:text-base"
              >
                Start Exploring
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-[1px]">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* City Highlights Cards */}
      <section className="bg-white/60 pt-24 sm:pt-32 pb-16 sm:pb-24 relative z-20 border-b border-slate-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-amber-500 mb-4">
              A Glimpse of the Future
            </h2>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 max-w-3xl mx-auto leading-tight font-display">
              Divinity and Earth Meet in Sheger
            </h3>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {SLIDESHOW_IMAGES.map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: idx * 0.1 }}
                whileHover={{ scale: 1.03, y: -10, zIndex: 10 }}
                className="group relative h-[400px] sm:h-[500px] overflow-hidden rounded-2xl cursor-pointer shadow-xl"
              >
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] group-hover:scale-110" style={{ backgroundImage: `url('${img}')` }}></div>
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-white text-4xl sm:text-5xl font-bold drop-shadow-lg group-hover:-translate-y-4 transition-transform duration-500">{idx + 1}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white text-sm font-medium leading-relaxed drop-shadow-md">
                    {idx === 0 && "The Sheger National Aquatics Center and towering skyline."}
                    {idx === 1 && "As discussed, Sheger's main square is full of vibrant life."}
                    {idx === 2 && "Though the ancient paths are preserved, modern development soars."}
                    {idx === 3 && "Though Sheger does have a city center, its beauty spans far beyond."}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-slate-50/65 text-slate-900 relative z-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false }} transition={{ duration: 1.2 }} className="text-center mb-16 sm:mb-24 relative">
            <h2 className="inline-block text-3xl sm:text-5xl font-bold tracking-widest uppercase mb-6 bg-slate-50 px-4 sm:px-8 relative z-10 text-slate-900 leading-tight font-display">
              {t('home.leadership.title')}
            </h2>
            <div className="absolute top-1/2 left-0 right-0 h-px bg-slate-200 -translate-y-1/2 z-0 hidden sm:block"></div>
          </motion.div>

          <div className="relative max-w-5xl mx-auto px-4 sm:px-0">
            {/* Vertical Line - Hidden on small mobile */}
            <div className="absolute left-0 sm:left-1/2 top-0 bottom-0 w-px bg-slate-200 sm:-translate-x-1/2"></div>

            {[
              { title: t('home.leadership.mayor_title'), name: t('home.leadership.mayor_name'), text: t('home.leadership.mayor_text'), img: "/dr.teshome.jpg", reverse: false },
              { title: t('home.leadership.deputy1_title'), name: t('home.leadership.deputy1_name'), text: t('home.leadership.deputy1_text'), img: "/mr.guyo.png", reverse: true },
              { title: t('home.leadership.deputy2_title'), name: t('home.leadership.deputy2_name'), text: t('home.leadership.deputy2_text'), img: "/mr.gugsa.png", reverse: false },
              { title: t('home.leadership.deputy3_title'), name: t('home.leadership.deputy3_name'), text: t('home.leadership.deputy3_text'), img: "/mr.hailu.png", reverse: true }
            ].map((person, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1 }}
                className={`relative flex flex-col sm:flex-row items-center justify-between mb-20 sm:mb-32 ${person.reverse ? 'sm:flex-row-reverse' : ''}`}
              >
                <div className={`sm:w-5/12 w-full pl-8 sm:pl-0 mb-8 sm:mb-0 ${person.reverse ? 'sm:pl-12' : 'sm:text-right sm:pr-12'}`}>
                  <div className="text-blue-600 font-bold tracking-widest text-[10px] sm:text-xs mb-3 uppercase">{person.title}</div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900 font-display">{person.name}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{person.text}</p>
                </div>
                <div className="absolute left-0 sm:left-1/2 top-0 sm:top-1/2 -translate-x-1/2 sm:-translate-y-1/2 w-4 h-4 bg-white border-[3px] border-blue-600 rounded-full z-10"></div>
                <div className="sm:w-5/12 w-full pl-8 sm:pl-0">
                  <img src={person.img} alt={person.name} className="w-full max-w-[280px] rounded-2xl shadow-2xl object-cover aspect-[4/5] mx-auto sm:mx-0" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Sheger Section */}
      <section className="py-24 bg-white/60 relative z-20 border-b border-slate-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-end justify-between mb-12 sm:mb-16 gap-6">
            <div>
              <h2 className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-amber-500 mb-4">Discover the City</h2>
               <h3 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight font-display">Explore Sheger</h3>
            </div>
            <Link to="/explore" className="w-full sm:w-auto flex items-center justify-center gap-2 text-slate-600 font-bold hover:text-amber-500 transition-colors px-6 py-4 bg-slate-50 rounded-2xl border border-slate-200">
              View Map
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false }} className="sm:col-span-2 sm:row-span-2 min-h-[400px] relative rounded-3xl overflow-hidden group shadow-lg">
              <div className="absolute inset-0 bg-[url('/city-2.jpg')] bg-cover bg-center transition-transform duration-[10000ms] group-hover:scale-110"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 sm:p-10">
                <span className="px-3 py-1 bg-amber-500 text-slate-900 text-[10px] font-bold uppercase tracking-widest rounded-full mb-4 inline-block">Heritage</span>
                <h4 className="text-2xl sm:text-4xl font-bold text-white mb-2 font-display">The Grand Square</h4>
                <p className="text-white/80 max-w-md text-sm sm:text-base">Experience the vibrant cultural heart of Sheger City, where tradition meets modern public spaces.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false }} transition={{ delay: 0.1 }} className="min-h-[300px] relative rounded-3xl overflow-hidden group shadow-lg">
              <div className="absolute inset-0 bg-[url('/city-4.jpg')] bg-cover bg-center transition-transform duration-[10000ms] group-hover:scale-110"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h4 className="text-xl sm:text-2xl font-bold text-white mb-2 font-display">Eco-Parks</h4>
                <p className="text-white/80 text-sm">Over 500 hectares of green space.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false }} transition={{ delay: 0.2 }} className="min-h-[300px] relative rounded-3xl overflow-hidden group shadow-lg bg-slate-900">
              <div className="absolute inset-0 bg-[url('/city-1.jpg')] bg-cover bg-center opacity-60 transition-transform duration-[10000ms] group-hover:scale-110"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h4 className="text-xl sm:text-2xl font-bold text-white mb-2 font-display">Tech Hub</h4>
                <p className="text-white/80 text-sm">The innovation center of East Africa.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Smart Services Hub - NEW Section */}
      <section className="py-24 sm:py-32 bg-slate-50/65 relative overflow-hidden z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <h2 className="text-blue-600 font-bold tracking-[0.2em] uppercase text-sm mb-4">{t('home.services_hub.badge')}</h2>
              <h3 className="text-4xl sm:text-6xl font-bold text-slate-900 tracking-tight font-display">{t('home.services_hub.title')}</h3>
            </div>
            <Link to="/explore" className="px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all flex items-center gap-3 group">
              {t('home.services_hub.view_all')}
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { title: t('home.services_hub.land'), icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7", color: "blue", count: t('home.services_hub.land_count') },
              { title: t('home.services_hub.business'), icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", color: "emerald", count: t('home.services_hub.business_count') },
              { title: t('home.services_hub.citizen'), icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z", color: "amber", count: t('home.services_hub.citizen_count') },
              { title: t('home.services_hub.revenue'), icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z", color: "violet", count: t('home.services_hub.revenue_count') }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white p-8 sm:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all cursor-pointer"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d={service.icon} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 font-display">{service.title}</h4>
                <p className="text-slate-500 text-sm font-medium mb-6">{service.count}</p>
                <div className="flex items-center text-blue-600 font-bold text-sm gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  Open Portal
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7-7 7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Centralized Application Portal visual mockup */}
          <div className="mt-20 sm:mt-32 bg-slate-950 rounded-[3rem] p-8 sm:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent"></div>
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h4 className="text-3xl sm:text-5xl font-bold text-white mb-6 font-display">{t('home.services_hub.one_platform')}</h4>
                <p className="text-slate-400 text-lg mb-10 leading-relaxed">{t('home.services_hub.one_platform_desc')}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20">{t('home.services_hub.create_account')}</button>
                  <button className="px-8 py-4 bg-white/10 text-white font-bold rounded-2xl hover:bg-white/20 transition-all border border-white/10">{t('home.services_hub.security')}</button>
                </div>
              </div>
              <div className="lg:w-1/2 relative">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, x: 20 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl"
                >
                  <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold">JD</div>
                      <div>
                        <div className="text-white font-bold">{t('home.services_hub.user_name')}</div>
                        <div className="text-slate-500 text-xs tracking-widest uppercase">{t('home.services_hub.user_badge')}</div>
                      </div>
                    </div>
                    <div className="px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-full text-xs font-bold uppercase">{t('home.services_hub.user_status')}</div>
                  </div>
                  <div className="space-y-4">
                    {[
                      { title: "Residential Building Permit", status: "Approved", color: "emerald", progress: 100 },
                      { title: "Digital ID Renewal", status: "Processing", color: "blue", progress: 65 },
                      { title: "Trade License App", status: "Pending Action", color: "amber", progress: 30 }
                    ].map((app, idx) => (
                      <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-all">
                        <div className="flex justify-between items-center mb-3">
                          <div className="text-white font-bold text-sm sm:text-base">{app.title}</div>
                          <div className={`text-${app.color}-400 text-xs font-bold`}>{app.status}</div>
                        </div>
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${app.progress}%` }}
                            transition={{ duration: 1, delay: 0.5 + idx * 0.2 }}
                            className={`h-full bg-${app.color}-500`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Promotion Section */}
      <section className="py-24 sm:py-32 bg-white/60 relative overflow-hidden z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[3rem] p-8 sm:p-20 relative overflow-hidden flex flex-col lg:flex-row items-center gap-16">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/10 to-transparent pointer-events-none"></div>
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute -top-20 -right-20 w-96 h-96 bg-blue-500 rounded-full blur-[100px] pointer-events-none"
            />

            {/* Text Content */}
            <div className="w-full lg:w-[70%] relative z-10 text-center lg:text-left">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                className="inline-flex items-center gap-3 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-bold uppercase tracking-widest mb-8"
              >
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                {t('home.mobile_app.badge')}
              </motion.div>
              
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-6xl font-bold text-white mb-8 font-display leading-tight"
              >
                {t('home.mobile_app.title')} <br />
                <span className="text-blue-500">{t('home.mobile_app.subtitle')}</span>
              </motion.h3>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2 }}
                className="text-white/60 text-lg mb-12 max-w-lg leading-relaxed"
              >
                {t('home.mobile_app.desc')}
              </motion.p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {[
                  { title: t('home.mobile_app.feature1'), icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
                  { title: t('home.mobile_app.feature2'), icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
                  { title: t('home.mobile_app.feature3'), icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" },
                  { title: t('home.mobile_app.feature4'), icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" }
                ].map((feature, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-4 text-white/80"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d={feature.icon} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                    <span className="font-semibold text-sm">{feature.title}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Link to="/contact" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20">
                  {t('home.mobile_app.early_access')}
                </Link>
                <div className="px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white/30 text-sm font-bold flex items-center gap-3 grayscale cursor-not-allowed">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                  {t('home.mobile_app.app_store')}
                </div>
              </div>
            </div>

            {/* Mobile Mockup */}
            <div className="w-full lg:w-[30%] flex justify-center lg:justify-end relative mt-16 lg:mt-0 px-4 sm:px-0">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 w-full max-w-[240px] group"
              >
                {/* Dynamic Ambient Glow */}
                <div className="absolute -inset-10 bg-gradient-to-tr from-blue-600/20 to-indigo-600/20 blur-[80px] rounded-full opacity-50 group-hover:opacity-80 transition-opacity pointer-events-none"></div>
                
                {/* Main Image Container */}
                <div className="relative rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)] border border-white/10 bg-slate-900/50 backdrop-blur-sm">
                  <img 
                    src="/app-mockup.png" 
                    alt="Sheger App Mockup" 
                    className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105" 
                  />
                  {/* Glossy Overlay Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20 pointer-events-none"></div>
                </div>

                {/* Floating Accessory Badge */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-6 -right-6 sm:-right-10 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-3xl shadow-2xl z-20 hidden sm:block"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                    <div className="pr-4">
                      <div className="text-[10px] text-white/50 uppercase font-black tracking-widest leading-none mb-1">Smart Portal</div>
                      <div className="text-sm text-white font-bold">Ready to Deploy</div>
                    </div>
                  </div>
                </motion.div>
                {/* Floating Decoration - Top Left of Mockup */}
                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-12 -left-6 sm:-left-12 p-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl z-20"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                    <div className="pr-2">
                      <div className="text-[10px] text-white/50 uppercase font-black tracking-widest">{t('home.mobile_app.live_now')}</div>
                      <div className="text-xs text-white font-bold">{t('home.mobile_app.version')}</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* The Investment Hub */}
      <section className="py-24 sm:py-32 relative bg-slate-900/75 overflow-hidden z-20 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-amber-400 font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-4">{t('home.investment_hub.badge')}</h2>
            <h3 className="text-3xl sm:text-6xl font-bold text-white tracking-tight font-display">{t('home.investment_hub.title')}</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { title: t('home.investment_hub.hub1_title'), icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6", color: "amber", text: t('home.investment_hub.hub1_text') },
              { title: t('home.investment_hub.hub2_title'), icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3", color: "blue", text: t('home.investment_hub.hub2_text') },
              { title: t('home.investment_hub.hub3_title'), icon: "M9 3v2m6-2v2M9 19v2m6-2v2", color: "emerald", text: t('home.investment_hub.hub3_text') }
            ].map((hub, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: false }} 
                transition={{ delay: idx * 0.1 }} 
                whileHover={{ y: -10 }}
                className="group relative bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] hover:bg-white/10 transition-all shadow-2xl overflow-hidden"
              >
                {/* Accent Glow */}
                <div className={`absolute -top-24 -right-24 w-48 h-48 bg-${hub.color}-500/10 rounded-full blur-[60px] group-hover:bg-${hub.color}-500/20 transition-all`}></div>
                
                <div className={`w-16 h-16 bg-${hub.color}-500/20 text-${hub.color}-400 rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform`}>
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d={hub.icon} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <h4 className="text-2xl font-bold text-white mb-6 font-display">{hub.title}</h4>
                <p className="text-white/60 text-lg mb-10 leading-relaxed">{hub.text}</p>
                <Link to="/invest" className={`inline-flex items-center gap-3 text-${hub.color}-400 font-bold group/link`}>
                  {t('home.investment_hub.learn_more')} 
                  <span className="group-hover/link:translate-x-2 transition-transform">&rarr;</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Communication Hub */}
      <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 flex flex-col items-center gap-3">
        {/* Social Icons Stack */}
        <div className="flex flex-col items-center gap-3 mb-1">
          {/* WhatsApp */}
          <motion.a 
            href="https://wa.me/251911000000" 
            target="_blank" 
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-emerald-500 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-emerald-600 transition-all group relative"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span className="absolute right-full mr-3 px-2 py-1 bg-slate-900 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">{t('home.social.whatsapp')}</span>
          </motion.a>

          {/* Telegram */}
          <motion.a 
            href="https://t.me/ShegerCity" 
            target="_blank" 
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-sky-500 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-sky-600 transition-all group relative"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.51.35-.98.53-1.4.52-.46-.01-1.35-.26-2.01-.48-.81-.27-1.45-.42-1.39-.89.03-.24.37-.49 1.02-.75 4-.1.1.1 0 0z" />
            </svg>
            <span className="absolute right-full mr-3 px-2 py-1 bg-slate-900 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">{t('home.social.telegram')}</span>
          </motion.a>
        </div>

        <button 
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-tr from-blue-600 to-indigo-700 text-white rounded-full shadow-[0_20px_50px_rgba(30,58,138,0.3)] z-50 flex items-center justify-center active:scale-90 transition-all border border-white/20 group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-colors"></div>
          <svg className="w-8 h-8 sm:w-10 sm:h-10 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          {/* Pulsing indicator */}
          <div className="absolute top-4 right-4 w-4 h-4 bg-green-500 border-2 border-blue-600 rounded-full">
            <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
          </div>
        </button>
      </div>

      <ChatBot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
};

export default Home;
