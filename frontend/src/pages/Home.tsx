import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

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
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, 200]);

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

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <div className="bg-slate-50 font-sans">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        onMouseMove={handleMouseMove}
        className="relative text-white overflow-hidden min-h-[98vh] flex items-center bg-slate-950"
      >
        {/* Background Image Slideshow with Ken Burns Effect */}
        {HERO_IMAGES.map((img, idx) => (
          <motion.div 
            key={idx}
            initial={{ scale: 1 }}
            animate={{ 
              opacity: idx === currentSlide ? 1 : 0,
              scale: idx === currentSlide ? 1.1 : 1,
            }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url('${img}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
             {/* Dynamic Gradient Overlay */}
             <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/50 to-transparent"></div>
             <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/30"></div>
          </motion.div>
        ))}

        {/* Floating Ambient Glows */}
        <motion.div 
          animate={{ 
            x: mousePos.x * 100, 
            y: mousePos.y * 100,
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none z-10"
        />
        <motion.div 
          animate={{ 
            x: mousePos.x * -80, 
            y: mousePos.y * -80,
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none z-10"
        />

        {/* Real-time Weather & Location Widget */}
        {weather && (
          <motion.div 
            style={{ y: yParallax }}
            className="absolute top-32 right-16 z-30 hidden lg:flex flex-col gap-10"
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

        {/* Slide Indicators - Right Side */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-30 hidden md:flex items-end">
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

        {/* The curvy line from the first image */}
        <motion.div 
          style={{ 
            x: mousePos.x * -50, 
            y: mousePos.y * -50,
          }}
          className="absolute inset-0 z-10 pointer-events-none overflow-hidden mix-blend-overlay"
        >
          <svg viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover opacity-90 drop-shadow-2xl" preserveAspectRatio="xMidYMid slice">
            {/* Curvy looping path */}
            <motion.path 
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
              d="M-100,500 C200,500 300,700 500,500 C700,300 800,200 600,200 C400,200 400,400 600,600 C800,800 1100,400 1500,200" 
              stroke="white" strokeWidth="16" strokeLinecap="round" 
            />
            
            {/* Map Pin 1 */}
            <motion.g 
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 1.5, type: "spring", stiffness: 100 }}
              transform="translate(480, 520)"
            >
              <motion.circle 
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.4, 1] }} 
                transition={{ repeat: Infinity, duration: 2 }}
                cx="0" cy="0" r="20" fill="white" className="shadow-lg" 
              />
              <circle cx="0" cy="0" r="6" fill="#ef4444" />
            </motion.g>

            {/* Map Pin 2 */}
            <motion.g 
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 2, type: "spring", stiffness: 100 }}
              transform="translate(600, 200)"
            >
              <motion.circle 
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.4, 1] }} 
                transition={{ repeat: Infinity, duration: 2.5, delay: 0.5 }}
                cx="0" cy="0" r="20" fill="white" className="shadow-lg" 
              />
              <circle cx="0" cy="0" r="6" fill="#3b82f6" />
            </motion.g>
          </svg>
        </motion.div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48 w-full">
          <motion.div 
            style={{ 
              x: mousePos.x * 40, 
              y: mousePos.y * 40,
            }}
            className="max-w-2xl bg-white/5 backdrop-blur-md border border-white/10 p-12 rounded-[40px] shadow-2xl relative overflow-hidden group"
          >
            {/* Subtle internal glow */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: false }}
              transition={{ delay: 0.8 }}
              className="uppercase tracking-[0.4em] text-xs font-black mb-8 text-amber-400 drop-shadow-md flex items-center gap-4"
            >
              <span className="w-12 h-px bg-amber-400/50"></span>
              {t('home.hero.badge')}
            </motion.div>
            
            <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter text-white">
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
              className="text-lg md:text-xl text-white/80 mb-12 max-w-lg leading-relaxed font-medium"
            >
              {t('home.hero.subtitle')}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: false }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap gap-6"
            >
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-12 py-5 bg-amber-500 text-slate-950 font-black rounded-full hover:bg-amber-400 transition-all duration-300 shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:shadow-[0_0_50px_rgba(245,158,11,0.6)] hover:-translate-y-2 group"
              >
                Start Exploring
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Wave Divider with Parallax */}
        <motion.div 
          style={{ y: useTransform(scrollY, [0, 800], [0, 100]) }}
          className="absolute bottom-0 left-0 right-0 z-20 translate-y-[1px]"
        >
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#ffffff" />
          </svg>
        </motion.div>
      </section>

      {/* City Highlights Cards */}
      <section className="bg-white pt-32 pb-24 relative z-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16"
          >
            <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-amber-500 mb-4">
              A Glimpse of the Future
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 max-w-3xl mx-auto leading-tight">
              Divinity and Earth Meet in Sheger
            </h3>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {SLIDESHOW_IMAGES.map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: idx * 0.15 }}
                whileHover={{ scale: 1.03, y: -10, zIndex: 10 }}
                className="group relative h-[500px] overflow-hidden rounded-sm cursor-pointer shadow-2xl transition-shadow duration-300"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] group-hover:scale-110"
                  style={{ backgroundImage: `url('${img}')` }}
                ></div>
                
                {/* Overlay Gradients */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                
                {/* Big Number in Center */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-white text-5xl font-black drop-shadow-lg transition-transform duration-500 group-hover:-translate-y-4">
                    {idx + 1}
                  </span>
                </div>
                
                {/* Text at Bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
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
      <section className="py-24 bg-slate-50 text-slate-900 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-24 relative"
          >
            <h2 className="inline-block text-4xl md:text-5xl font-extrabold tracking-widest uppercase mb-6 bg-slate-50 px-8 relative z-10 text-slate-900">
              {t('home.leadership.title')}
            </h2>
            <div className="absolute top-1/2 left-0 right-0 h-px bg-slate-200 -translate-y-1/2 z-0"></div>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 md:-translate-x-1/2"></div>

            {/* Mayor */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex flex-col md:flex-row items-center justify-between mb-24 md:mb-32 group"
            >
              <div className="md:w-5/12 w-full pl-16 md:pl-0 md:text-right md:pr-12 mb-8 md:mb-0">
                <div className="text-blue-600 font-bold tracking-widest text-sm mb-3 uppercase">Mayor of Sheger City</div>
                <h3 className="text-3xl font-extrabold mb-4 text-slate-900">Dr. Teshome Aduna (Ph.D.)</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  "As the mayor of Sheger City, I am excited to share our bold vision for the future of our community. We are committed to transforming Sheger into a model smart city—competitive, livable, and responsive to the needs of all residents."
                </p>
              </div>
              <div className="absolute left-6 md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 w-4 h-4 bg-white border-[3px] border-blue-600 rounded-full z-10 shadow-[0_0_0_4px_rgba(248,250,252,1)] group-hover:scale-150 transition-transform duration-300"></div>
              <div className="md:w-5/12 w-full pl-16 md:pl-8">
                <img src="/dr.teshome.jpg" alt="Dr. Teshome Aduna" className="w-full max-w-[280px] rounded-2xl shadow-xl transition-all duration-700 mx-auto md:mx-0 object-cover aspect-[4/5] border border-slate-200" />
              </div>
            </motion.div>

            {/* Deputy 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="relative flex flex-col md:flex-row-reverse items-center justify-between mb-24 md:mb-32 group"
            >
              <div className="md:w-5/12 w-full pl-16 md:pl-12 mb-8 md:mb-0">
                <div className="text-blue-600 font-bold tracking-widest text-sm mb-3 uppercase">Deputy Mayor</div>
                <h3 className="text-3xl font-extrabold mb-4 text-slate-900">Mr. Guyo Galgalo</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  We invite all stakeholders—businesses, community leaders, and residents—to engage actively in these efforts to foster an inclusive environment.
                </p>
              </div>
              <div className="absolute left-6 md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 w-4 h-4 bg-white border-[3px] border-blue-600 rounded-full z-10 shadow-[0_0_0_4px_rgba(248,250,252,1)] group-hover:scale-150 transition-transform duration-300"></div>
              <div className="md:w-5/12 w-full pl-16 md:pl-0 md:pr-12">
                <img src="/mr.guyo.png" alt="Mr. Guyo Galgalo" className="w-full max-w-[280px] rounded-2xl shadow-xl transition-all duration-700 ml-0 md:ml-auto object-cover aspect-[4/5] border border-slate-200" />
              </div>
            </motion.div>

            {/* Deputy 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="relative flex flex-col md:flex-row items-center justify-between mb-24 md:mb-32 group"
            >
              <div className="md:w-5/12 w-full pl-16 md:pl-0 md:text-right md:pr-12 mb-8 md:mb-0">
                <div className="text-blue-600 font-bold tracking-widest text-sm mb-3 uppercase">Deputy Mayor</div>
                <h3 className="text-3xl font-extrabold mb-4 text-slate-900">Mr. Gugsa Dejene</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Head of the Administration and Service Sector, committed to enhancing the quality of public services.
                </p>
              </div>
              <div className="absolute left-6 md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 w-4 h-4 bg-white border-[3px] border-blue-600 rounded-full z-10 shadow-[0_0_0_4px_rgba(248,250,252,1)] group-hover:scale-150 transition-transform duration-300"></div>
              <div className="md:w-5/12 w-full pl-16 md:pl-8">
                <img src="/mr.gugsa.png" alt="Mr. Gugsa Dejene" className="w-full max-w-[280px] rounded-2xl shadow-xl transition-all duration-700 mx-auto md:mx-0 object-cover aspect-[4/5] border border-slate-200" />
              </div>
            </motion.div>

            {/* Deputy 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="relative flex flex-col md:flex-row-reverse items-center justify-between group"
            >
              <div className="md:w-5/12 w-full pl-16 md:pl-12 mb-8 md:mb-0">
                <div className="text-blue-600 font-bold tracking-widest text-sm mb-3 uppercase">Deputy Mayor</div>
                <h3 className="text-3xl font-extrabold mb-4 text-slate-900">Mr. Hailu Girma</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Head of the Urban Agriculture Cluster, focusing on sustainability and community well-being.
                </p>
              </div>
              <div className="absolute left-6 md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 md:-translate-y-1/2 w-4 h-4 bg-white border-[3px] border-blue-600 rounded-full z-10 shadow-[0_0_0_4px_rgba(248,250,252,1)] group-hover:scale-150 transition-transform duration-300"></div>
              <div className="md:w-5/12 w-full pl-16 md:pl-0 md:pr-12">
                <img src="/mr.hailu.png" alt="Mr. Hailu Girma" className="w-full max-w-[280px] rounded-2xl shadow-xl transition-all duration-700 ml-0 md:ml-auto object-cover aspect-[4/5] border border-slate-200" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Explore Sheger Section */}
      <section className="py-24 bg-white relative z-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6"
          >
            <div>
              <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-amber-500 mb-4">Discover the City</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">Explore Sheger</h3>
            </div>
            <Link to="/explore" className="group flex items-center gap-2 text-slate-600 font-bold hover:text-amber-500 transition-colors px-6 py-3 bg-slate-50 rounded-xl shadow-sm hover:shadow-md border border-slate-200">
              View Map
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            {/* Large Feature */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="absolute inset-0 bg-[url('/city-2.jpg')] bg-cover bg-center transition-transform duration-[10000ms] group-hover:scale-110"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-10">
                <span className="px-3 py-1 bg-amber-500 text-slate-900 text-xs font-bold uppercase tracking-widest rounded-full mb-4 inline-block">Heritage</span>
                <h4 className="text-3xl font-bold text-white mb-2">The Grand Square</h4>
                <p className="text-white/80 max-w-md">Experience the vibrant cultural heart of Sheger City, where tradition meets modern public spaces.</p>
              </div>
            </motion.div>

            {/* Small Feature 1 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="relative rounded-3xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="absolute inset-0 bg-[url('/city-4.jpg')] bg-cover bg-center transition-transform duration-[10000ms] group-hover:scale-110"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h4 className="text-2xl font-bold text-white mb-2">Eco-Parks</h4>
                <p className="text-white/80 text-sm">Over 500 hectares of interconnected green space.</p>
              </div>
            </motion.div>

            {/* Small Feature 2 */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden group cursor-pointer bg-slate-900 shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="absolute inset-0 bg-[url('/city-1.jpg')] bg-cover bg-center opacity-60 transition-transform duration-[10000ms] group-hover:scale-110"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h4 className="text-2xl font-bold text-white mb-2">Tech Hub</h4>
                <p className="text-white/80 text-sm">The leading innovation center in East Africa.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">Latest Updates</h2>
              <p className="text-xl text-slate-600 max-w-2xl">Stay informed about city developments and community announcements.</p>
            </div>
            <Link to="/news" className="group flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors px-6 py-3 bg-white rounded-xl shadow-sm hover:shadow-md border border-slate-200">
              View All News
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.article 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: false }} 
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2">
              <div className="h-56 bg-gradient-to-br from-blue-500 to-cyan-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-blue-700">MAR 12, 2026</div>
              </div>
              <div className="p-8">
                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-md mb-4 uppercase tracking-wider">New Service</span>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-snug">Online Property Registration Launch</h3>
                <p className="text-slate-600 mb-6 line-clamp-2">Register your property online without visiting offices. Fast, secure, and incredibly convenient for all Sheger residents.</p>
                <Link to="/news/1" className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm group-hover:gap-3 transition-all">
                  Read Full Story <span className="text-xl leading-none">&rarr;</span>
                </Link>
              </div>
            </motion.article>

            <motion.article 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: false }} 
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="group bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2">
              <div className="h-56 bg-gradient-to-br from-emerald-500 to-green-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-green-700">MAR 10, 2026</div>
              </div>
              <div className="p-8">
                <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-md mb-4 uppercase tracking-wider">Update</span>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors leading-snug">Extended Service Hours Announced</h3>
                <p className="text-slate-600 mb-6 line-clamp-2">All major administrative offices are now open until 6 PM on weekdays to accommodate working professionals.</p>
                <Link to="/news/2" className="inline-flex items-center gap-2 text-emerald-600 font-bold text-sm group-hover:gap-3 transition-all">
                  Read Full Story <span className="text-xl leading-none">&rarr;</span>
                </Link>
              </div>
            </motion.article>

            <motion.article 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: false }} 
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="group bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2">
              <div className="h-56 bg-gradient-to-br from-purple-500 to-pink-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-purple-700">MAR 08, 2026</div>
              </div>
              <div className="p-8">
                <span className="inline-block px-3 py-1 bg-purple-50 text-purple-700 text-xs font-bold rounded-md mb-4 uppercase tracking-wider">Event</span>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors leading-snug">Public Consultation on Smart City</h3>
                <p className="text-slate-600 mb-6 line-clamp-2">Join city planners for an interactive discussion on integrating AI and smart tech into Sheger City infrastructure.</p>
                <Link to="/news/3" className="inline-flex items-center gap-2 text-purple-600 font-bold text-sm group-hover:gap-3 transition-all">
                  Read Full Story <span className="text-xl leading-none">&rarr;</span>
                </Link>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* The Investment Hub */}
      <section className="py-32 relative bg-slate-900 overflow-hidden z-20">
        {/* Background elements */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }} 
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"
        ></motion.div>
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }} 
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none"
        ></motion.div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              className="text-amber-400 font-bold tracking-[0.2em] uppercase text-sm mb-4"
            >
              Business & Economy
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold text-white tracking-tight"
            >
              The Investment Hub
            </motion.h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -15, scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl transition-all duration-300 group shadow-2xl"
            >
              <div className="w-14 h-14 bg-amber-500/20 text-amber-400 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Special Economic Zones</h4>
              <p className="text-white/60 leading-relaxed mb-8">Access massive tax incentives, streamlined customs, and zero-tariff export opportunities designed for global enterprises.</p>
              <Link to="/invest" className="text-amber-400 font-semibold tracking-wide flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <span className="text-xl">&rarr;</span>
              </Link>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -15, scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl transition-all duration-300 group shadow-2xl"
            >
              <div className="w-14 h-14 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Global Connectivity</h4>
              <p className="text-white/60 leading-relaxed mb-8">Direct access to the new international transit hub and an integrated high-speed rail network connecting major African markets.</p>
              <Link to="/invest" className="text-blue-400 font-semibold tracking-wide flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <span className="text-xl">&rarr;</span>
              </Link>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.4 }}
              whileHover={{ y: -15, scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl transition-all duration-300 group shadow-2xl"
            >
              <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Smart Infrastructure</h4>
              <p className="text-white/60 leading-relaxed mb-8">Plug into a 100% renewable energy grid and city-wide 5G fiber networks designed for tech giants and modern industries.</p>
              <Link to="/invest" className="text-emerald-400 font-semibold tracking-wide flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <span className="text-xl">&rarr;</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Floating AI Assistant */}
      <button className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-tr from-blue-600 to-cyan-500 text-white rounded-full shadow-[0_10px_40px_-10px_rgba(37,99,235,0.8)] hover:shadow-[0_15px_50px_-10px_rgba(37,99,235,0.9)] transition-all duration-300 flex items-center justify-center group hover:w-auto hover:px-8 z-50 hover:-translate-y-2 border border-white/20">
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <span className="hidden group-hover:inline-block ml-3 font-bold whitespace-nowrap">AI Assistant</span>
      </button>
    </div>
  );
};

export default Home;
