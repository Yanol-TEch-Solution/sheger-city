import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
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

  useEffect(() => {
    const pano_iframe_name = "tour-embeded";
    const handleDeviceMotion = (e: DeviceMotionEvent) => {
      const iframe = document.getElementById(pano_iframe_name) as HTMLIFrameElement;
      if (iframe && iframe.contentWindow) {
        iframe.contentWindow.postMessage({
          type: "devicemotion",
          deviceMotionEvent: {
            acceleration: { x: e.acceleration?.x, y: e.acceleration?.y, z: e.acceleration?.z },
            accelerationIncludingGravity: { x: e.accelerationIncludingGravity?.x, y: e.accelerationIncludingGravity?.y, z: e.accelerationIncludingGravity?.z },
            rotationRate: { alpha: e.rotationRate?.alpha, beta: e.rotationRate?.beta, gamma: e.rotationRate?.gamma },
            interval: e.interval,
            timeStamp: e.timeStamp
          }
        }, "*");
      }
    };

    window.addEventListener("devicemotion", handleDeviceMotion);
    return () => window.removeEventListener("devicemotion", handleDeviceMotion);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Main 360 Experience */}
      <section className="pt-24 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <motion.div 
            {...fadeUp(0.1)}
            className="rounded-[2.5rem] overflow-hidden bg-black shadow-2xl border border-slate-100 relative group"
           >
             <div className="absolute top-8 left-8 z-20">
                <span className="px-4 py-2 bg-red-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-xl">
                  Interactive 360° Experience
                </span>
             </div>
             
             <iframe 
               id="tour-embeded" 
               name="Yannet General Hospital" 
               src="https://tour.panoee.net/iframe/69d5076793f8052809dbec8b" 
               frameBorder="0" 
               width="100%" 
               height="600px" 
               scrolling="no" 
               allow="vr; xr; accelerometer; gyroscope; autoplay;" 
               allowFullScreen={true} 
               loading="lazy"
               className="w-full grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 h-[500px] sm:h-[700px]"
             ></iframe>
             
             <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
                <h2 className="text-white text-xl sm:text-2xl font-bold font-display">Sheger Digital Twin</h2>
                <p className="text-white/60 text-xs mt-2">Use your mouse or mobile sensors to explore the city in immersive detail.</p>
             </div>
           </motion.div>
        </div>
      </section>

      {/* Tour Grid */}
      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">Video Spotlights</h2>
            <p className="text-slate-500 mt-4">Cinematic fly-throughs of our flagship districts.</p>
          </div>
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
                  <span className="px-3 py-1 bg-red-500 text-slate-900 text-[10px] font-bold uppercase tracking-widest rounded-full mb-4 inline-block">
                    {loc.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-display">
                    {loc.name}
                  </h3>
                  <p className="text-white/80 text-xs sm:text-sm mb-6 max-w-md">
                    {loc.description}
                  </p>
                  <button className="flex items-center gap-2 text-red-400 font-bold hover:text-red-300 transition-colors">
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
                <div className="w-10 h-10 border-4 border-red-400 border-t-transparent rounded-full animate-spin"></div>
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
