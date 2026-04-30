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
      className="relative h-[450px] w-full perspective-1000 cursor-pointer group"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full relative preserve-3d transition-all duration-700"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden rounded-3xl overflow-hidden shadow-2xl">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url('${image}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 w-full">
            <h4 className="text-2xl font-bold text-white mb-2 font-display">{title}</h4>
            <p className="text-white/80 text-sm leading-relaxed">{description}</p>
            <div className="mt-4 flex items-center text-red-400 text-xs font-bold tracking-widest uppercase">
              Click to Flip
              <svg className="w-4 h-4 ml-2 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div 
          className="absolute inset-0 backface-hidden rounded-3xl overflow-hidden shadow-2xl bg-slate-900 flex flex-col justify-center p-8 text-center"
          style={{ transform: "rotateY(180deg)" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent pointer-events-none" />
          <h4 className="text-3xl font-bold text-red-400 mb-6 font-display">{backTitle}</h4>
          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            {backContent}
          </p>
          <div className="flex justify-center">
            <div className="px-6 py-2 border border-red-500/30 rounded-full text-red-400 text-xs font-bold uppercase tracking-widest">
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
      image: "/flash-culture.png",
      title: "Cultural Pulse",
      description: "Where heritage meets the modern heartbeat of a thriving metropolis.",
      backTitle: "Unity in Diversity",
      backContent: "Sheger celebrates Ethiopia's 80+ ethnic groups through vibrant public art, festivals, and inclusive architectural landmarks."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-red-500 font-bold tracking-[0.2em] uppercase text-sm mb-4"
          >
            Interactive Insights
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-slate-900 font-display"
          >
            Sheger City Flash Cards
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-500 max-w-2xl mx-auto text-lg"
          >
            Flip through the cards to discover deep insights about our city's progress, culture, and future.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-red-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-slate-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
    </section>
  );
};

export default CityFlashCards;
