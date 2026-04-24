import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000);
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
    <div className="bg-slate-50 font-sans">
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden min-h-[95vh] flex items-center bg-slate-900">
        {/* Background Image Slideshow */}
        {HERO_IMAGES.map((img, idx) => (
          <div 
            key={idx}
            className={`absolute inset-0 z-0 transition-opacity duration-[1500ms] ease-in-out ${idx === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            style={{
              backgroundImage: `url('${img}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
             {/* Overlay to ensure text readability */}
             <div className="absolute inset-0 bg-black/50 mix-blend-multiply"></div>
          </div>
        ))}

        {/* Real-time Weather & Location Widget */}
        {weather && (
          <div className="absolute top-32 right-16 z-30 hidden lg:flex flex-col gap-10">
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
          </div>
        )}

        {/* Slide Indicators - Right Side */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-6 z-30 hidden md:flex items-end">
          {HERO_IMAGES.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`text-lg font-bold transition-all duration-300 flex items-center gap-4 ${idx === currentSlide ? 'text-amber-400 scale-110' : 'text-white/40 hover:text-white/80'}`}
            >
              {idx === currentSlide && <span className="w-8 h-[2px] bg-amber-400 block rounded-full"></span>}
              0{idx + 1}
            </button>
          ))}
        </div>

        {/* The curvy line from the first image */}
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden mix-blend-overlay">
          <svg viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover opacity-90 drop-shadow-2xl" preserveAspectRatio="xMidYMid slice">
            {/* Curvy looping path */}
            <path d="M-100,500 C200,500 300,700 500,500 C700,300 800,200 600,200 C400,200 400,400 600,600 C800,800 1100,400 1500,200" stroke="white" strokeWidth="16" strokeLinecap="round" />
            
            {/* Map Pin 1 */}
            <g transform="translate(480, 520)">
              <circle cx="0" cy="0" r="20" fill="white" className="shadow-lg" />
              <circle cx="0" cy="0" r="6" fill="#ef4444" />
            </g>

            {/* Map Pin 2 */}
            <g transform="translate(600, 200)">
              <circle cx="0" cy="0" r="20" fill="white" className="shadow-lg" />
              <circle cx="0" cy="0" r="6" fill="#3b82f6" />
            </g>
          </svg>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full mt-12">
          <div className="max-w-xl">
            <div className="uppercase tracking-[0.2em] text-xs font-extrabold mb-6 text-amber-400 drop-shadow-md">
              {t('home.hero.badge')}
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold mb-6 leading-tight tracking-tight text-white drop-shadow-lg">
              {t('home.hero.title')} <br/>
              {t('home.hero.city')}
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-md leading-relaxed drop-shadow-md">
              {t('home.hero.subtitle')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-10 py-4 bg-amber-500 text-slate-900 font-extrabold rounded-full hover:bg-amber-400 transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:-translate-y-1"
              >
                Let's go!
              </Link>
            </div>
          </div>
        </div>

        {/* Wave Divider from original design */}
        <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-[1px]">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#f8fafc" />
          </svg>
        </div>
      </section>

      {/* City Highlights Cards */}
      <section className="bg-white pt-32 pb-24 relative z-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-amber-500 mb-4">
              A Glimpse of the Future
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 max-w-3xl mx-auto leading-tight">
              Divinity and Earth Meet in Sheger
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {SLIDESHOW_IMAGES.map((img, idx) => (
              <div 
                key={idx}
                className="group relative h-[500px] overflow-hidden rounded-sm cursor-pointer"
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-slate-50 text-slate-900 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24 relative">
            <h2 className="inline-block text-4xl md:text-5xl font-extrabold tracking-widest uppercase mb-6 bg-slate-50 px-8 relative z-10 text-slate-900">
              {t('home.leadership.title')}
            </h2>
            <div className="absolute top-1/2 left-0 right-0 h-px bg-slate-200 -translate-y-1/2 z-0"></div>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 md:-translate-x-1/2"></div>

            {/* Mayor */}
            <div className="relative flex flex-col md:flex-row items-center justify-between mb-24 md:mb-32 group">
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
            </div>

            {/* Deputy 1 */}
            <div className="relative flex flex-col md:flex-row-reverse items-center justify-between mb-24 md:mb-32 group">
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
            </div>

            {/* Deputy 2 */}
            <div className="relative flex flex-col md:flex-row items-center justify-between mb-24 md:mb-32 group">
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
            </div>

            {/* Deputy 3 */}
            <div className="relative flex flex-col md:flex-row-reverse items-center justify-between group">
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
            </div>

          </div>
        </div>
      </section>

      {/* Quick Services */}
      <section className="py-24 bg-slate-50 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">{t('home.quick_services.title')}</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">{t('home.quick_services.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link to="/sector/land/permits" className="group relative bg-white p-8 rounded-3xl border border-slate-100 hover:border-blue-200 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.15)] transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110 z-0"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-inner">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">Building Permits</h3>
                <p className="text-slate-600 leading-relaxed">Apply for construction and building permits seamlessly online.</p>
                <div className="mt-6 flex items-center text-blue-600 font-semibold opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  Apply Now <span className="ml-2">&rarr;</span>
                </div>
              </div>
            </Link>

            <Link to="/sector/business/license" className="group relative bg-white p-8 rounded-3xl border border-slate-100 hover:border-green-200 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(34,197,94,0.15)] transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110 z-0"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300 shadow-inner">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-green-600 transition-colors">Business License</h3>
                <p className="text-slate-600 leading-relaxed">Register and license your new or existing business quickly.</p>
                <div className="mt-6 flex items-center text-green-600 font-semibold opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  Apply Now <span className="ml-2">&rarr;</span>
                </div>
              </div>
            </Link>

            <Link to="/sector/transport/license" className="group relative bg-white p-8 rounded-3xl border border-slate-100 hover:border-purple-200 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(168,85,247,0.15)] transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110 z-0"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300 shadow-inner">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">Driver's License</h3>
                <p className="text-slate-600 leading-relaxed">Apply, renew or replace your driver's license with ease.</p>
                <div className="mt-6 flex items-center text-purple-600 font-semibold opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  Apply Now <span className="ml-2">&rarr;</span>
                </div>
              </div>
            </Link>

            <Link to="/sector/health" className="group relative bg-white p-8 rounded-3xl border border-slate-100 hover:border-red-200 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(239,68,68,0.15)] transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110 z-0"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300 shadow-inner">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors">Health Services</h3>
                <p className="text-slate-600 leading-relaxed">Access healthcare facilities, records, and medical services.</p>
                <div className="mt-6 flex items-center text-red-600 font-semibold opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  Apply Now <span className="ml-2">&rarr;</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="text-center group">
              <div className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 mb-4 group-hover:scale-110 transition-transform duration-300">11</div>
              <div className="text-slate-500 font-bold uppercase tracking-wider text-sm">Sub Cities</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500 mb-4 group-hover:scale-110 transition-transform duration-300">50+</div>
              <div className="text-slate-500 font-bold uppercase tracking-wider text-sm">Online Services</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-4 group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-slate-500 font-bold uppercase tracking-wider text-sm">Digital Access</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 mb-4 group-hover:scale-110 transition-transform duration-300">98%</div>
              <div className="text-slate-500 font-bold uppercase tracking-wider text-sm">Citizen Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="group bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2">
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
            </article>

            <article className="group bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2">
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
            </article>

            <article className="group bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2">
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
            </article>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-600"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-50"></div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight">Ready to Get Started?</h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Create an account today to manage all your government interactions from one unified dashboard.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/services"
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-10 py-5 bg-white text-blue-700 font-bold rounded-2xl hover:bg-blue-50 transition-all duration-300 shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)] hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.8)] hover:-translate-y-1 text-lg"
            >
              Start Application Now
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              to="/about"
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-10 py-5 bg-transparent text-white font-bold rounded-2xl border-2 border-white/30 hover:border-white transition-all duration-300 hover:bg-white/10 text-lg"
            >
              Learn More
            </Link>
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
