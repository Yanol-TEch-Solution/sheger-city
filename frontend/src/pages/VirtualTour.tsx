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

    </div>
  );
};

export default VirtualTour;
    </div>
  );
};

export default VirtualTour;
