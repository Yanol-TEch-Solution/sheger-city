import { useState } from 'react';
import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
});

const OFFICES = [
  {
    name: 'Main City Administration',
    address: 'Legetafo-Legedadi, Sheger City',
    mapUrl: 'https://maps.app.goo.gl/kCJEKKpiWf7zbq9k6',
    phone: '+251 11 123 4567',
    email: 'main@shegercity.gov.et',
    hours: 'Mon–Fri: 8:00 AM – 5:00 PM\nSat: 9:00 AM – 1:00 PM',
    color: 'blue',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
  },
  {
    name: 'Citizens Services Centre',
    address: 'Sululta Town, Sheger City',
    mapUrl: 'https://www.google.com/maps/search/Citizens+Services+Centre+Sululta+Ethiopia',
    phone: '+251 11 234 5678',
    email: 'citizens@shegercity.gov.et',
    hours: 'Mon–Fri: 8:00 AM – 6:00 PM\nSat: 9:00 AM – 2:00 PM',
    color: 'amber',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0',
  },
  {
    name: 'Digital Services Hub',
    address: 'Burayu, Sheger City',
    mapUrl: 'https://www.google.com/maps/search/Digital+Services+Hub+Burayu+Ethiopia',
    phone: '+251 11 345 6789',
    email: 'digital@shegercity.gov.et',
    hours: 'Mon–Fri: 8:00 AM – 8:00 PM\nSat–Sun: 10:00 AM – 4:00 PM',
    color: 'emerald',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2',
  },
];

const colorRing: Record<string, string> = {
  blue: 'border-blue-500 bg-blue-500/10 text-blue-500',
  amber: 'border-amber-500 bg-amber-500/10 text-amber-500',
  emerald: 'border-emerald-500 bg-emerald-500/10 text-emerald-500',
};

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50">

      {/* ─── Hero Banner ─── */}
      <section className="relative bg-slate-950 text-white overflow-hidden min-h-[48vh] flex items-center">
        <div className="absolute inset-0 bg-[url('/city-4.jpg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute right-1/3 top-1/4 w-[500px] h-[500px] bg-blue-500/15 rounded-full blur-[130px] pointer-events-none hidden lg:block"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-3 uppercase tracking-[0.35em] text-[10px] font-semibold text-amber-400 mb-6">
            <span className="w-10 h-px bg-amber-400/50" />
            We're Here to Help
          </motion.div>
          <motion.h1 {...fadeUp(0.2)} className="text-5xl sm:text-7xl font-bold leading-tight tracking-tight font-display mb-6 max-w-3xl">
            Get in <span className="text-amber-400 drop-shadow-[0_0_30px_rgba(245,158,11,0.3)]">Touch</span>
          </motion.h1>
          <motion.p {...fadeUp(0.4)} className="text-white/70 text-lg sm:text-xl max-w-xl leading-relaxed">
            Reach out to Sheger City government offices for inquiries, support, or general information.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 translate-y-[1px]">
          <svg viewBox="0 0 1440 80" className="w-full h-auto" fill="none">
            <path d="M0 80L60 70C120 60 240 40 360 30C480 20 600 20 720 25C840 30 960 40 1080 45C1200 50 1320 50 1380 50L1440 50V80H0Z" fill="#f8fafc" />
          </svg>
        </div>
      </section>

      {/* ─── Quick Contact Cards ─── */}
      <section className="py-16 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z', label: 'Call Us', value: '+251 11 123 4567', sub: 'Mon–Fri, 8AM–5PM', color: 'blue' },
              { icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', label: 'Email Us', value: 'info@shegercity.gov.et', sub: 'Reply within 24 hours', color: 'amber' },
              { icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z', label: 'Visit Us', value: 'Legetafo-Legedadi', sub: 'Sheger City, Ethiopia', color: 'emerald' },
            ].map((card, i) => (
              <motion.div key={card.label} {...fadeUp(i * 0.1)} className="bg-white rounded-2xl border border-slate-100 p-7 shadow-sm hover:shadow-lg transition-all text-center group">
                <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mx-auto mb-5 transition-all group-hover:scale-110 ${colorRing[card.color]}`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={card.icon} /></svg>
                </div>
                <div className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1">{card.label}</div>
                <div className="text-slate-900 font-bold text-base mb-1">{card.value}</div>
                <div className="text-xs text-slate-400">{card.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Map + Form ─── */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Map */}
            <motion.div {...fadeUp(0)}>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-500 mb-3">Our Location</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-display tracking-tight mb-6">
                Find Our Main Office
              </h2>
              <p className="text-slate-500 mb-6 leading-relaxed">
                The Sheger City Administration Headquarters is located in the Legetafo-Legedadi area — easily accessible from the Addis Ababa outer ring road.
              </p>

              {/* Google Maps embed — exact pin from shared link */}
              <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
                {/* Label bar above the map */}
                <div className="flex items-center justify-between bg-slate-900 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-red-400 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    <span className="text-white text-sm font-bold truncate">Sheger City Administration Mayor&apos;s Office</span>
                  </div>
                  <a
                    href="https://maps.app.goo.gl/kCJEKKpiWf7zbq9k6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-3 shrink-0 text-[10px] font-semibold uppercase tracking-widest bg-blue-600 text-white px-3 py-1.5 rounded-full hover:bg-blue-500 transition-colors"
                  >
                    Open Maps
                  </a>
                </div>
                <iframe
                  title="Sheger City Administration Mayor's Office"
                  src="https://maps.google.com/maps?q=8.9717114,38.7636713&z=17&output=embed"
                  width="100%"
                  height="400"
                  style={{ border: 0, display: 'block' }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Open in Google Maps link */}
              <a
                href="https://maps.app.goo.gl/kCJEKKpiWf7zbq9k6"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-xs text-slate-400 hover:text-blue-600 transition-colors"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                Open in Google Maps
              </a>
            </motion.div>

            {/* Contact Form */}
            <motion.div {...fadeUp(0.2)}>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-500 mb-3">Send a Message</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-display tracking-tight mb-6">
                We'd Love to Hear From You
              </h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-50 border border-emerald-200 rounded-3xl p-12 text-center"
                >
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-2xl font-semibold text-emerald-800 font-display mb-2">Message Sent!</h3>
                  <p className="text-emerald-600">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  <button onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }); }} className="mt-6 px-6 py-3 bg-emerald-600 text-white font-bold rounded-full hover:bg-emerald-700 transition-all">
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Full Name *</label>
                      <input required type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Email Address *</label>
                      <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                      <input type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                        placeholder="+251 911 XXX XXX"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Subject *</label>
                      <select required value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                      >
                        <option value="">Select a subject</option>
                        <option>General Inquiry</option>
                        <option>Service Request</option>
                        <option>Complaint</option>
                        <option>Feedback</option>
                        <option>Investment & Business</option>
                        <option>Media & Press</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Message *</label>
                    <textarea required rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                      placeholder="How can we help you today?"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all resize-none"
                    />
                  </div>
                  <button type="submit"
                    className="w-full py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2 group"
                  >
                    Send Message
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                  </button>
                </form>
              )}
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── Office Locations ─── */}
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-500 mb-4">Office Network</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 font-display tracking-tight">Our Office Locations</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {OFFICES.map((office, i) => (
              <motion.div key={office.name} {...fadeUp(i * 0.1)} whileHover={{ y: -6 }} className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mb-6 ${colorRing[office.color]}`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={office.icon} /></svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 font-display mb-4">{office.name}</h3>
                <div className="space-y-3 text-sm text-slate-500">
                  <a
                    href={office.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2 group/loc hover:text-blue-600 transition-colors"
                    title="Open in Google Maps"
                  >
                    <svg className="w-4 h-4 mt-0.5 shrink-0 text-slate-400 group-hover/loc:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <span className="group-hover/loc:underline">{office.address}</span>
                  </a>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 shrink-0 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    <span>{office.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 shrink-0 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    <span>{office.email}</span>
                  </div>
                  <div className="flex items-start gap-2 pt-2 border-t border-slate-100">
                    <svg className="w-4 h-4 mt-0.5 shrink-0 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span className="whitespace-pre-line">{office.hours}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
};

export default Contact;
