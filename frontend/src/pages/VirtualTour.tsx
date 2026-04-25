import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
});

const LOCATIONS = [
  {
    name: "Sheger National Aquatics Center",
    category: "Sports & Recreation",
    image: "/city-1.jpg",
    description: "Experience the state-of-the-art aquatics center hosting international events.",
    videoUrl: "https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1"
  },
  {
    name: "The Grand Square",
    category: "Cultural Heritage",
    image: "/city-2.jpg",
    description: "Walk through the vibrant cultural heart where tradition meets modern public space.",
    videoUrl: "https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1&start=60"
  },
  {
    name: "Eco-Park Network",
    category: "Nature & Environment",
    image: "/city-4.jpg",
    description: "Explore over 500 hectares of green space, botanical gardens, and walking trails.",
    videoUrl: "https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1&start=120"
  },
  {
    name: "Innovation Hub",
    category: "Business & Tech",
    image: "/city-3.jpg",
    description: "Visit the center of East Africa's tech boom, featuring smart infrastructure.",
    videoUrl: "https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1&start=180"
  }
];

const VirtualTour = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="relative bg-slate-950 text-white overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-[url('/hero-1.jpg')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full text-center">
          <motion.div {...fadeUp(0.1)} className="inline-flex items-center justify-center gap-3 uppercase tracking-[0.35em] text-[10px] font-semibold text-amber-400 mb-6">
            <span className="w-10 h-px bg-amber-400/50" />
            Discover the City
            <span className="w-10 h-px bg-amber-400/50" />
          </motion.div>
          <motion.h1 {...fadeUp(0.2)} className="text-4xl sm:text-6xl font-bold leading-tight tracking-tight font-display mb-6">
            Virtual <span className="text-amber-400 drop-shadow-[0_0_30px_rgba(245,158,11,0.3)]">Tour</span>
          </motion.h1>
          <motion.p {...fadeUp(0.4)} className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Take a 360° virtual journey through Sheger City's most iconic landmarks, green spaces, and future development zones.
          </motion.p>
        </div>
      </section>

      {/* Tour Grid */}
      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {LOCATIONS.map((loc, i) => (
              <motion.div 
                key={loc.name} 
                {...fadeUp(i * 0.1)} 
                onClick={() => setActiveVideo(loc.videoUrl)}
                className="group relative rounded-[2rem] overflow-hidden bg-white shadow-xl aspect-video cursor-pointer"
              >
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] group-hover:scale-110" style={{ backgroundImage: `url('${loc.image}')` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                
                {/* 360 Indicator */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>

                <div className="absolute bottom-0 left-0 p-8 sm:p-10 w-full">
                  <span className="px-3 py-1 bg-amber-500 text-slate-900 text-[10px] font-bold uppercase tracking-widest rounded-full mb-4 inline-block">
                    {loc.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 font-display">
                    {loc.name}
                  </h3>
                  <p className="text-white/80 text-sm sm:text-base mb-6 max-w-md">
                    {loc.description}
                  </p>
                  <button className="flex items-center gap-2 text-amber-400 font-bold hover:text-amber-300 transition-colors">
                    Start Tour <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" /></svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-4 sm:p-8 backdrop-blur-sm"
            onClick={() => setActiveVideo(null)}
          >
            <button className="absolute top-6 right-6 sm:top-10 sm:right-10 text-white/50 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors z-10" onClick={() => setActiveVideo(null)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-6xl aspect-video bg-black rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 relative"
              onClick={e => e.stopPropagation()}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 border-4 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
              </div>
              <iframe 
                src={activeVideo} 
                className="w-full h-full relative z-10"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VirtualTour;
