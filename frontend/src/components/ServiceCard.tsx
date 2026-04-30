import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  id: string;
  title: string;
  desc: string;
  icon: string;
  time?: string;
  price?: string;
  category?: string;
}

const ServiceCard = ({ id, title, desc, icon, time, price, category }: ServiceCardProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col group h-full"
    >
      <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
        </svg>
      </div>
      
      {category && (
        <span className="text-[8px] font-black text-blue-500 uppercase tracking-widest mb-1">{category}</span>
      )}
      <h3 className="text-sm font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{title}</h3>
      <p className="text-slate-500 text-[10px] leading-relaxed mb-6 line-clamp-2">{desc}</p>
      
      {(time || price) && (
        <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 mb-6">
          {time && (
            <span className="flex items-center gap-1.5">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              {time}
            </span>
          )}
          {price && (
            <span className="flex items-center gap-1.5">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              {price}
            </span>
          )}
        </div>
      )}
      
      <Link 
        to={`/services/${id}`}
        className="mt-auto w-full py-2.5 text-center text-[11px] font-black uppercase tracking-widest text-slate-700 border border-slate-100 rounded-xl hover:bg-slate-50 hover:text-blue-600 transition-all"
      >
        View Details &rarr;
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
