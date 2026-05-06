import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import BackButton from '../components/BackButton';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
});



const Contact = () => {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const OFFICES = [
    {
      name: t('contact.offices.main.name'),
      address: t('contact.offices.main.address'),
      mapUrl: 'https://maps.app.goo.gl/kCJEKKpiWf7zbq9k6',
      phone: '+251 11 123 4567',
      email: 'main@shegercity.gov.et',
      hours: t('contact.offices.main.hours'),
      color: 'red',
      icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    },
    {
      name: t('contact.offices.citizens.name'),
      address: t('contact.offices.citizens.address'),
      mapUrl: 'https://www.google.com/maps/search/Citizens+Services+Centre+Sululta+Ethiopia',
      phone: '+251 11 234 5678',
      email: 'citizens@shegercity.gov.et',
      hours: t('contact.offices.citizens.hours'),
      color: 'red',
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0',
    },
    {
      name: t('contact.offices.digital.name'),
      address: t('contact.offices.digital.address'),
      mapUrl: 'https://www.google.com/maps/search/Digital+Services+Hub+Burayu+Ethiopia',
      phone: '+251 11 345 6789',
      email: 'digital@shegercity.gov.et',
      hours: t('contact.offices.digital.hours'),
      color: 'emerald',
      icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2',
    },
  ];

  return (
    <div className="bg-slate-50">

      {/* ─── Hero Banner ─── */}
      <section className="relative bg-slate-950 text-white overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-[url('/city-4.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
        
        {/* Back Button */}
        <div className="absolute top-20 sm:top-24 left-4 sm:left-8 z-20">
          <BackButton to="/" className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white" />
        </div>
        
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute right-1/3 top-1/4 w-[500px] h-[500px] bg-red-500/15 rounded-full blur-[130px] pointer-events-none hidden lg:block"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 w-full">
          <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-3 tracking-tight text-xs font-medium text-red-400 mb-6">
            <span className="w-10 h-px bg-red-400/50" />
            {t('contact.hero_desc')}
          </motion.div>
          <motion.h1 {...fadeUp(0.2)} className="text-3xl sm:text-5xl font-bold leading-tight tracking-tight font-display mb-6 max-w-3xl">
            {t('contact.hero_title')}
          </motion.h1>
          <motion.p {...fadeUp(0.4)} className="text-white/70 text-sm sm:text-base max-w-xl leading-relaxed">
            {t('contact.hero_desc')}
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 translate-y-[1px]">
          <svg viewBox="0 0 1440 80" className="w-full h-auto" fill="none">
            <path d="M0 80L60 70C120 60 240 40 360 30C480 20 600 20 720 25C840 30 960 40 1080 45C1200 50 1320 50 1380 50L1440 50V80H0Z" fill="#f8fafc" />
          </svg>
        </div>
      </section>

      {/* ─── Integrated Contact & Map ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left: Contact Info & Offices (5 cols) */}
            <div className="lg:col-span-5 space-y-16">
              <div>
                <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-3 uppercase tracking-[0.3em] text-[10px] font-bold text-red-600 mb-6">
                  <span className="w-8 h-px bg-red-600" />
                  {t('contact.hero_desc')}
                </motion.div>
                <h2 className="text-3xl sm:text-5xl font-black text-slate-900 font-display tracking-tight mb-8 leading-tight">
                  {t('contact.location_title')}
                </h2>
                
                <div className="space-y-10">
                  {/* Global Channels */}
                  <div className="space-y-6">
                    <div className="flex gap-6 group">
                      <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100 group-hover:bg-red-600 group-hover:text-white transition-all duration-500">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                      </div>
                      <div>
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{t('contact.call_us')}</h4>
                        <p className="text-slate-900 font-bold text-lg">+251 11 123 4567</p>
                        <p className="text-[10px] text-slate-500 mt-1">{t('contact.mon_fri')}, 8AM–5PM</p>
                      </div>
                    </div>

                    <div className="flex gap-6 group">
                      <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100 group-hover:bg-red-600 group-hover:text-white transition-all duration-500">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      </div>
                      <div>
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{t('contact.email_us')}</h4>
                        <p className="text-slate-900 font-bold text-lg">info@shegercity.gov.et</p>
                        <p className="text-[10px] text-slate-500 mt-1">24/7 Digital Support</p>
                      </div>
                    </div>
                  </div>

                  <div className="h-px w-full bg-slate-100" />

                  {/* Office Network */}
                  <div className="space-y-8">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900">{t('contact.office_network')}</h3>
                    <div className="space-y-8">
                      {OFFICES.map((office, idx) => (
                        <motion.div key={idx} {...fadeUp(idx * 0.1)} className="group cursor-default">
                          <div className="flex items-start gap-6">
                            <div className="mt-1 w-2 h-2 rounded-full bg-red-600 shrink-0 group-hover:scale-150 transition-transform" />
                            <div className="flex-1">
                              <h5 className="font-bold text-slate-900 mb-2 font-display">{office.name}</h5>
                              <div className="grid grid-cols-1 gap-2">
                                <a href={office.mapUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-xs text-slate-500 hover:text-red-600 transition-colors">
                                  <svg className="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                  <span className="leading-relaxed underline decoration-slate-200 underline-offset-4 decoration-1">{office.address}</span>
                                </a>
                                <div className="flex items-center gap-2 text-xs text-slate-500 pl-6">
                                  <span>{office.hours}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Map & Form (7 cols) */}
            <div className="lg:col-span-7 space-y-12">
              {/* Map Embed */}
              <motion.div {...fadeUp(0.2)} className="relative group">
                <div className="absolute -inset-4 bg-slate-50 rounded-[3rem] -z-10 transition-colors group-hover:bg-red-50" />
                <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white aspect-video relative">
                  <iframe
                    title="Sheger City Administration Mayor's Office"
                    src="https://maps.google.com/maps?q=8.9717114,38.7636713&z=17&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                  />
                  <div className="absolute top-6 left-6 right-6 flex items-center justify-between pointer-events-none">
                    <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-white/20 pointer-events-auto">
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-900 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                        Administration Hub
                      </span>
                    </div>
                    <a href="https://maps.app.goo.gl/kCJEKKpiWf7zbq9k6" target="_blank" rel="noopener noreferrer" className="bg-slate-900 text-white px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-red-600 transition-all pointer-events-auto">
                      Route
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Message Form */}
              <motion.div {...fadeUp(0.4)} className="bg-slate-50 rounded-[3rem] p-8 sm:p-12 border border-slate-100">
                <div className="max-w-xl">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-red-600 mb-3">{t('contact.message_badge')}</p>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display tracking-tight mb-8">
                    {t('contact.message_title')}
                  </h3>

                  {submitted ? (
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-10">
                      <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                      </div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">{t('contact.message_success')}</h4>
                      <p className="text-slate-500 text-sm mb-8">{t('contact.message_success_desc')}</p>
                      <button onClick={() => setSubmitted(false)} className="px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-red-600 transition-all">
                        New Message
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 pl-1">{t('contact.form.name')}</label>
                          <input required type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full px-6 py-4 bg-white border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500/20 transition-all text-sm font-medium" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 pl-1">{t('contact.form.email')}</label>
                          <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full px-6 py-4 bg-white border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500/20 transition-all text-sm font-medium" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 pl-1">{t('contact.form.subject')}</label>
                        <select required value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} className="w-full px-6 py-4 bg-white border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500/20 transition-all text-sm font-medium appearance-none">
                          <option value="">Select Category</option>
                          <option>General Inquiry</option>
                          <option>Municipal Service</option>
                          <option>Investment Support</option>
                          <option>Media Inquiry</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 pl-1">{t('contact.form.message')}</label>
                        <textarea required rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className="w-full px-6 py-4 bg-white border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500/20 transition-all text-sm font-medium resize-none" />
                      </div>
                      <button type="submit" className="w-full py-5 bg-red-600 text-white font-black uppercase tracking-widest text-[11px] rounded-2xl shadow-xl shadow-red-600/20 hover:bg-red-700 transition-all hover:-translate-y-1">
                        {t('contact.form.send')}
                      </button>
                    </form>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
