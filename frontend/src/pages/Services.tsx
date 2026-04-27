import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-[#0F172A] text-white pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">Online Services</h1>
          <p className="text-slate-400 text-lg font-sans">
            Access our digital portals to handle requests, permits, and citizen services without waiting in line.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Business Permits', desc: 'Apply for or renew your commercial trade licenses seamlessly.' },
            { title: 'Utility Payments', desc: 'Pay for water, electricity, and municipal services online.' },
            { title: 'Citizen Registry', desc: 'Update your residency records and request official IDs.' },
            { title: 'Land & Zoning', desc: 'Submit construction plans and request land surveying services.' },
            { title: 'Public Health', desc: 'Schedule appointments and access health certificates.' },
            { title: 'Tax & Revenue', desc: 'File your taxes securely through our automated portal.' }
          ].map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-colors cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-bold font-display mb-3">{service.title}</h3>
              <p className="text-slate-400 font-sans leading-relaxed mb-6">{service.desc}</p>
              <div className="text-sm font-bold text-blue-400 flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                Access Portal <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
