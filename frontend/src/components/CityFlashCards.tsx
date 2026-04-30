import { motion } from "framer-motion";
import { useState } from "react";

interface FlashCardProps {
  image: string;
  title: string;
  description: string;
  backTitle: string;
  backContent: string;
}

const FlashCard = ({ image, title, description, backTitle, backContent }: FlashCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative h-[360px] w-full min-w-[240px] max-w-[280px] perspective-1000 cursor-pointer group flex-shrink-0"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full relative preserve-3d transition-all duration-700"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden rounded-3xl overflow-hidden shadow-xl">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url('${image}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 w-full">
            <h4 className="text-base font-bold text-white mb-2 font-display">{title}</h4>
            <p className="text-white/70 text-[11px] leading-relaxed line-clamp-2">{description}</p>
            <div className="mt-3 flex items-center text-red-400 text-[8px] font-bold tracking-widest uppercase">
              Tap to discover
              <svg className="w-3 h-3 ml-2 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div 
          className="absolute inset-0 backface-hidden rounded-3xl overflow-hidden shadow-xl bg-slate-900 flex flex-col justify-center p-6 text-center"
          style={{ transform: "rotateY(180deg)" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent pointer-events-none" />
          <h4 className="text-lg font-bold text-red-400 mb-3 font-display">{backTitle}</h4>
          <p className="text-slate-300 text-[13px] leading-relaxed mb-5">
            {backContent}
          </p>
          <div className="flex justify-center">
            <div className="px-4 py-1.5 border border-red-500/30 rounded-full text-red-400 text-[8px] font-bold uppercase tracking-widest">
              Tap to return
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const CityFlashCards = () => {
  const cards = [
    {
      image: "/flash-skyline.png",
      title: "Visionary Skyline",
      description: "Sheger's architecture blends modern sustainability with iconic design.",
      backTitle: "The Future of Urban Living",
      backContent: "By 2030, Sheger City will house over 5 million residents in a fully integrated smart-grid ecosystem, reducing carbon emissions by 40%."
    },
    {
      image: "/flash-park.png",
      title: "Green Sanctuaries",
      description: "Urban lung spaces designed for peace, biodiversity, and community.",
      backTitle: "Echoes of Nature",
      backContent: "With over 500 hectares of dedicated parkland, Sheger provides one of the highest ratios of green space per citizen in East Africa."
    },
    {
      image: "/flash-tech.png",
      title: "Innovation Hubs",
      description: "Empowering the next generation of digital entrepreneurs and creators.",
      backTitle: "Digital Renaissance",
      backContent: "The Sheger Tech District is home to 200+ startups and the regional headquarters of global tech giants, fostering a $2B digital economy."
    },
    {
      image: "/flash-park.png", 
      title: "Cultural Heartbeat",
      description: "A melting pot of tradition and contemporary artistic expression.",
      backTitle: "Rich Heritage",
      backContent: "From the Grand Theater to local artisan markets, Sheger preserves the soul of our nation while embracing a global cultural dialogue."
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        {/* Description on top */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-red-500 font-bold tracking-[0.2em] uppercase text-xs mb-4 flex items-center justify-center gap-3"
          >
            <span className="w-8 h-px bg-red-500" />
            Interactive Insights
            <span className="w-8 h-px bg-red-500" />
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-slate-900 font-display leading-tight mb-6"
          >
            Discover Sheger's <span className="text-red-500">Many Faces</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-base leading-relaxed"
          >
            Tap any card to flip it and discover deeper insights about our city's progress, culture, and future.
          </motion.p>
        </div>

        {/* Cards displayed horizontal sequentially */}
        <div className="overflow-x-auto pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 hide-scrollbar">
          <div className="flex gap-6 sm:gap-8 min-w-max justify-center sm:px-4">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <FlashCard {...card} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CityFlashCards;
