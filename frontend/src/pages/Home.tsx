import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
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
  const yParallax = useTransform(scrollY, [0, 500], [0, 200]);
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
    <div className="bg-slate-50 font-sans selection:bg-amber-500/30">
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

        {/* Floating Ambient Glows */}
        <div className="hidden lg:block">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[10%] right-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none z-10"
          />
          <motion.div 
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-1/3 left-1/4 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none z-10"
          />
        </div>

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
              className="uppercase tracking-[0.2em] sm:tracking-[0.4em] text-[10px] sm:text-xs font-black mb-6 sm:mb-8 text-amber-400 drop-shadow-md flex items-center gap-2 sm:gap-4"
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
                to="/services"
                className="inline-flex items-center justify-center px-8 sm:px-12 py-4 sm:py-5 bg-amber-500 text-slate-950 font-black rounded-full hover:bg-amber-400 transition-all duration-300 shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:shadow-[0_0_50px_rgba(245,158,11,0.6)] sm:hover:-translate-y-2 group text-sm sm:text-base"
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
      <section className="bg-white pt-24 sm:pt-32 pb-16 sm:pb-24 relative z-20 border-b border-slate-100">
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
                  <span className="text-white text-4xl sm:text-5xl font-black drop-shadow-lg group-hover:-translate-y-4 transition-transform duration-500">{idx + 1}</span>
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
      <section className="py-24 bg-slate-50 text-slate-900 relative z-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false }} transition={{ duration: 1.2 }} className="text-center mb-16 sm:mb-24 relative">
            <h2 className="inline-block text-3xl sm:text-5xl font-black tracking-widest uppercase mb-6 bg-slate-50 px-4 sm:px-8 relative z-10 text-slate-900 leading-tight font-display">
              {t('home.leadership.title')}
            </h2>
            <div className="absolute top-1/2 left-0 right-0 h-px bg-slate-200 -translate-y-1/2 z-0 hidden sm:block"></div>
          </motion.div>

          <div className="relative max-w-5xl mx-auto px-4 sm:px-0">
            {/* Vertical Line - Hidden on small mobile */}
            <div className="absolute left-0 sm:left-1/2 top-0 bottom-0 w-px bg-slate-200 sm:-translate-x-1/2"></div>

            {[
              { title: "Mayor of Sheger City", name: "Dr. Teshome Aduna (Ph.D.)", text: "As the mayor of Sheger City, I am excited to share our bold vision for the future of our community.", img: "/dr.teshome.jpg", reverse: false },
              { title: "Deputy Mayor", name: "Mr. Guyo Galgalo", text: "We invite all stakeholders—businesses, community leaders, and residents—to engage actively.", img: "/mr.guyo.png", reverse: true },
              { title: "Deputy Mayor", name: "Mr. Gugsa Dejene", text: "Head of the Administration and Service Sector, committed to enhancing the quality of public services.", img: "/mr.gugsa.png", reverse: false },
              { title: "Deputy Mayor", name: "Mr. Hailu Girma", text: "Head of the Urban Agriculture Cluster, focusing on sustainability and community well-being.", img: "/mr.hailu.png", reverse: true }
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
                  <h3 className="text-2xl sm:text-3xl font-black mb-4 text-slate-900 font-display">{person.name}</h3>
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
      <section className="py-24 bg-white relative z-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-end justify-between mb-12 sm:mb-16 gap-6">
            <div>
              <h2 className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-amber-500 mb-4">Discover the City</h2>
               <h3 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-display">Explore Sheger</h3>
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
                <h4 className="text-2xl sm:text-4xl font-black text-white mb-2 font-display">The Grand Square</h4>
                <p className="text-white/80 max-w-md text-sm sm:text-base">Experience the vibrant cultural heart of Sheger City, where tradition meets modern public spaces.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false }} transition={{ delay: 0.1 }} className="min-h-[300px] relative rounded-3xl overflow-hidden group shadow-lg">
              <div className="absolute inset-0 bg-[url('/city-4.jpg')] bg-cover bg-center transition-transform duration-[10000ms] group-hover:scale-110"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h4 className="text-xl sm:text-2xl font-black text-white mb-2 font-display">Eco-Parks</h4>
                <p className="text-white/80 text-sm">Over 500 hectares of green space.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: false }} transition={{ delay: 0.2 }} className="min-h-[300px] relative rounded-3xl overflow-hidden group shadow-lg bg-slate-900">
              <div className="absolute inset-0 bg-[url('/city-1.jpg')] bg-cover bg-center opacity-60 transition-transform duration-[10000ms] group-hover:scale-110"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h4 className="text-xl sm:text-2xl font-black text-white mb-2 font-display">Tech Hub</h4>
                <p className="text-white/80 text-sm">The innovation center of East Africa.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-end justify-between mb-12 sm:mb-16 gap-6">
            <div>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 mb-4 tracking-tight font-display">Latest Updates</h2>
              <p className="text-lg sm:text-xl text-slate-600 max-w-2xl">Stay informed about city developments and announcements.</p>
            </div>
            <Link to="/news" className="w-full sm:w-auto flex items-center justify-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors px-6 py-4 bg-white rounded-2xl border border-slate-200">
              View All News <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { title: "Online Property Registration Launch", cat: "New Service", color: "blue", text: "Register your property online without visiting offices. Fast and secure." },
              { title: "Extended Service Hours Announced", cat: "Update", color: "emerald", text: "Major offices are now open until 6 PM on weekdays for your convenience." },
              { title: "Public Consultation on Smart City", cat: "Event", color: "purple", text: "Join planners for an interactive discussion on integrating AI and tech." }
            ].map((news, idx) => (
              <motion.article key={idx} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ delay: idx * 0.1 }} className="group bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-500">
                <div className={`h-48 sm:h-56 bg-gradient-to-br ${news.color === 'blue' ? 'from-blue-500 to-cyan-600' : news.color === 'emerald' ? 'from-emerald-500 to-green-600' : 'from-purple-500 to-pink-600'} relative`}></div>
                <div className="p-6 sm:p-8">
                  <span className={`inline-block px-3 py-1 bg-${news.color}-50 text-${news.color}-700 text-[10px] font-bold rounded-md mb-4 uppercase tracking-wider`}>{news.cat}</span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 group-hover:text-blue-600 transition-colors font-display">{news.title}</h3>
                  <p className="text-slate-600 mb-6 text-sm sm:text-base line-clamp-2">{news.text}</p>
                  <Link to="/news" className="text-blue-600 font-bold text-sm">Read Full Story &rarr;</Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* The Investment Hub */}
      <section className="py-24 sm:py-32 relative bg-slate-900 overflow-hidden z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-amber-400 font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-4">Business & Economy</h2>
            <h3 className="text-3xl sm:text-6xl font-black text-white tracking-tight font-display">The Investment Hub</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { title: "Special Economic Zones", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6", color: "amber", text: "Access massive tax incentives and zero-tariff export opportunities." },
              { title: "Global Connectivity", icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3", color: "blue", text: "Direct access to the new international transit hub and rail network." },
              { title: "Smart Infrastructure", icon: "M9 3v2m6-2v2M9 19v2m6-2v2", color: "emerald", text: "Plug into a 100% renewable energy grid and city-wide 5G networks." }
            ].map((hub, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ delay: idx * 0.1 }} className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 sm:p-10 rounded-[32px] hover:bg-white/10 transition-all shadow-2xl">
                <div className={`w-14 h-14 bg-${hub.color}-500/20 text-${hub.color}-400 rounded-2xl flex items-center justify-center mb-8`}>
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d={hub.icon} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <h4 className="text-xl sm:text-2xl font-black text-white mb-4 font-display">{hub.title}</h4>
                <p className="text-white/60 text-sm sm:text-base mb-8">{hub.text}</p>
                <Link to="/invest" className={`text-${hub.color}-400 font-bold flex items-center gap-2`}>Learn More &rarr;</Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating AI Assistant */}
      <button 
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-tr from-blue-600 to-cyan-500 text-white rounded-full shadow-2xl z-50 flex items-center justify-center active:scale-90 transition-all border border-white/20"
      >
        <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z M12 6v12M6 12h12M7.5 7.5l9 9M16.5 7.5l-9 9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </button>

      <ChatBot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
};

export default Home;
