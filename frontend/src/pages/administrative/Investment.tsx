
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true }
};

const Investment = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans overflow-hidden">
      
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-slate-400 hover:text-red-600 transition-colors bg-slate-100 p-2 rounded-full">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            </Link>
            <div className="flex flex-col">
              <span className="text-[10px] font-medium text-slate-400 tracking-wider font-sans">Sheger City</span>
              <span className="font-semibold text-lg tracking-tight text-slate-900 font-display">{t('administrative_options.investment')}</span>
            </div>
          </div>
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600 font-sans">
            <a href="#about" className="hover:text-red-600 transition-colors">About Us</a>
            <a href="#services" className="hover:text-red-600 transition-colors">Services</a>
            <a href="#initiatives" className="hover:text-red-600 transition-colors">Initiatives</a>
            <a href="#leadership" className="hover:text-red-600 transition-colors">Leadership</a>
            <a href="#contact" className="px-5 py-2.5 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors shadow-md shadow-red-600/20">Contact Desk</a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-28 pb-20 lg:pt-32 lg:pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-red-500 opacity-5"></div>
        <div className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-red-400/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left z-10">
            <motion.div {...fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-sm border border-red-100 text-xs font-medium tracking-wide mb-6 text-red-600 font-sans">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              {t('administrative.official_sector')}
            </motion.div>
            
            <motion.h1 
              {...fadeUp} 
              className="text-5xl lg:text-7xl font-bold leading-[1.1] font-display mb-6 tracking-tight text-slate-900"
            >{t('administrative_options.investment')}</motion.h1>
            
            <motion.p 
              {...fadeUp} 
              className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed font-sans"
            >
              {t('administrative.about_desc')} 
            </motion.p>
            
            <motion.div {...fadeUp} className="flex flex-wrap items-center gap-4 font-sans">
              <a href="#services" className="px-8 py-4 bg-red-600 text-white rounded-full font-medium hover:bg-red-700 transition-colors shadow-lg shadow-red-600/20">
                {t('administrative.online_services')}
              </a>
              <a href="#resources" className="px-8 py-4 bg-white text-slate-900 rounded-full font-medium border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm">
                {t('administrative.public_docs')}
              </a>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as const }}
            className="relative h-[400px] lg:h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/50"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-red-400 to-red-500 opacity-30 mix-blend-multiply z-10"></div>
            <img src="https://picsum.photos/seed/investment-hero/1200/800" alt="Investment Commission" className="absolute inset-0 w-full h-full object-cover" />
            
            {/* Floating Stats Card on Hero Image */}
            <div className="absolute bottom-8 left-8 right-8 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/50 flex justify-around">
              <div className="text-center">
                <div className="text-2xl font-semibold font-display text-red-600">24/7</div>
                <div className="text-xs font-medium text-slate-500 tracking-wide font-sans">{t('administrative.support')}</div>
              </div>
              <div className="w-px bg-slate-200"></div>
              <div className="text-center">
                <div className="text-2xl font-semibold font-display text-red-600">100%</div>
                <div className="text-xs font-medium text-slate-500 tracking-wide font-sans">{t('administrative.digital')}</div>
              </div>
              <div className="w-px bg-slate-200"></div>
              <div className="text-center">
                <div className="text-2xl font-semibold font-display text-red-600">12k+</div>
                <div className="text-xs font-medium text-slate-500 tracking-wide font-sans">{t('administrative.resolved')}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* QUICK STATS & MANDATE */}
      <section className="py-16 bg-white border-y border-slate-200 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <h3 className="text-2xl font-semibold font-display text-slate-900 mb-4">Our Mandate</h3>
            <p className="text-slate-600 font-sans leading-relaxed">
              We operate under the Sheger City Charter to regulate, support, and innovate within our sector, ensuring every citizen receives equitable and rapid assistance.
            </p>
          </div>
          <div className="md:w-2/3 grid grid-cols-2 lg:grid-cols-4 gap-6">
            {['Active Projects', 'Citizen Inquiries', 'Permits Issued', 'Staff Members'].map((stat, i) => (
              <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-center hover:border-red-200 transition-colors">
                <div className="text-3xl font-semibold font-display text-red-600 mb-2">{Math.floor(Math.random() * 500) + 50}+</div>
                <div className="text-xs font-medium text-slate-500 tracking-wide font-sans">{stat}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-semibold font-display text-slate-900 mb-4">Department Services</h2>
            <p className="text-slate-600 font-sans text-lg">Access all online portals, submit official forms securely, and track your applications directly through our modern digital infrastructure.</p>
          </div>
          
          <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Digital Public Portal', desc: 'Submit and track forms, applications, and requests without waiting in line.' },
              { title: 'Official Resources & Policy', desc: 'Browse official documents, public guidelines, budgets, and compliance records.' },
              { title: 'Citizen Support Desk', desc: 'Get direct assistance from our department representatives and book appointments.' }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                variants={fadeUp}
                className="p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-red-500/10 hover:border-red-200 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-red-50 shadow-sm border border-red-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-red-100 transition-all text-red-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="text-xl font-semibold font-display text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 font-sans leading-relaxed mb-6">{item.desc}</p>
                <button className="text-sm font-medium flex items-center gap-2 text-red-600 hover:text-red-700 font-sans tracking-wide">
                  Access Portal <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* INITIATIVES */}
      <section id="initiatives" className="py-24 px-6 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-semibold font-display text-slate-900 mb-4">{t('administrative.initiatives')}</h2>
              <p className="text-slate-600 font-sans text-lg">Discover the ongoing projects and transformative programs led by the Investment Commission to modernize our city.</p>
            </div>
            <button className="px-6 py-3 border border-slate-300 rounded-full font-medium text-slate-700 hover:bg-slate-50 hover:text-red-600 hover:border-red-200 transition-colors font-sans whitespace-nowrap">
              View All Projects
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <motion.div key={i} {...fadeUp} className="group cursor-pointer">
                <div className="relative h-64 rounded-[2rem] overflow-hidden mb-6 bg-slate-200 shadow-md">
                  <div className="absolute inset-0 bg-gradient-to-tr from-red-400 to-red-500 opacity-30 mix-blend-multiply group-hover:opacity-10 transition-opacity z-10"></div>
                  <img src={"https://picsum.photos/seed/investment-init" + i + "/800/600"} alt="Initiative" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium font-sans tracking-wide">Ongoing</span>
                  <span className="text-sm text-slate-500 font-sans">Updated 2 days ago</span>
                </div>
                <h3 className="text-2xl font-semibold font-display text-slate-900 mb-3 group-hover:text-red-600 transition-colors">Digital Transformation Roadmap 2026</h3>
                <p className="text-slate-600 font-sans">A comprehensive initiative to digitize 100% of internal processes, reducing citizen wait times and increasing transparency across all administrative levels.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section id="leadership" className="py-24 px-6 bg-red-900 text-white border-t border-red-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-semibold font-display mb-6">{t('administrative.leadership_title')}</h2>
              <p className="text-red-100/80 text-lg leading-relaxed mb-8 font-sans">
                Under the guidance of our experienced directors and administrative heads, the Investment Commission is committed to ethical governance, rapid innovation, and public accountability.
              </p>
              
              <div className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors">
                <div className="w-20 h-20 rounded-full bg-red-800 overflow-hidden shrink-0 border-2 border-white/20">
                  <img src="https://picsum.photos/seed/investment-mayor/400/400" alt="Director" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold font-display mb-1">Ato / W/ro Director Name</h4>
                  <p className="text-sm font-sans text-red-200 mb-3">Head of Investment Commission</p>
                  <div className="flex items-center gap-3">
                    <button className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center hover:bg-white hover:text-red-900 transition-all text-white shadow-md">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                    </button>
                    <button className="text-sm font-medium font-sans hover:text-white text-red-100 transition-colors">{t('administrative.read_bio')}</button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { title: 'Public Feedback', desc: 'Submit complaints or suggestions directly to leadership.' },
                { title: 'Annual Reports', desc: 'Review our yearly financial and operational metrics.' },
              ].map((card, i) => (
                <div key={i} className="p-8 rounded-3xl bg-red-950/50 border border-red-800 hover:border-red-500 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-red-800 flex items-center justify-center mb-6 text-red-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  </div>
                  <h4 className="text-xl font-semibold font-display mb-3">{card.title}</h4>
                  <p className="text-red-100/60 font-sans text-sm mb-6">{card.desc}</p>
                  <button className="text-sm font-medium font-sans text-red-300 hover:text-white flex items-center gap-1">
                    Explore <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-red-950 py-16 px-6 border-t border-red-900 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h4 className="font-semibold font-display text-2xl mb-4">{t('administrative_options.investment')}</h4>
            <p className="text-red-200/60 font-sans max-w-md mb-6">Official administrative department of Sheger City. Committed to excellence, transparency, and serving the public interest.</p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer border border-white/10 hover:border-transparent">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer border border-white/10 hover:border-transparent">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </div>
            </div>
          </div>
          <div>
            <h5 className="font-semibold mb-4 font-display">Quick Links</h5>
            <ul className="space-y-3 text-red-200/60 font-sans">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Public Services</a></li>
              <li><a href="#initiatives" className="hover:text-white transition-colors">Key Initiatives</a></li>
              <li><a href="#leadership" className="hover:text-white transition-colors">Department Leadership</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4 font-display">Contact Info</h5>
            <ul className="space-y-3 text-red-200/60 font-sans">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 shrink-0 mt-0.5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>Sheger City Administrative Block</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 shrink-0 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span>info_investment@shegercity.gov.et</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 shrink-0 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span>+251 11 123 4567</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-red-800/50 mt-12 pt-8 text-center text-red-200/40 font-sans text-sm">
          &copy; {new Date().getFullYear()} Investment Commission, Sheger City Administration. All rights reserved.
        </div>
      </footer>

    </div>
  );
};

export default Investment;
