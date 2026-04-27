import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useParams, Link } from 'react-router-dom';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const SECTORS: Record<string, { title: string; icon: string; desc: string; color: string; bgImage: string; features: { label: string; detail: string }[] }> = {
  land: {
    title: 'Land & Property Administration',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    desc: 'Manage your land title registration, building permits, and property transfers fully online without visiting an office.',
    color: 'blue',
    bgImage: '/city-1.jpg',
    features: [
      { label: 'Title Deed Registration', detail: 'Apply for or transfer land title deeds securely.' },
      { label: 'Building Permits', detail: 'Submit architectural plans and get building approvals.' },
      { label: 'Property Tax', detail: 'View and pay annual property tax assessments.' },
    ],
  },
  health: {
    title: 'Health & Medical Services',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    desc: 'Access healthcare facilities directories, emergency medical services, and public health campaigns.',
    color: 'rose',
    bgImage: '/hero-1.jpg',
    features: [
      { label: 'Find a Clinic', detail: 'Locate public health centers across all sub-cities.' },
      { label: 'Emergency Response', detail: 'Direct access to ambulance dispatch protocols.' },
      { label: 'Vaccination Programs', detail: 'Schedules for child and adult immunization.' },
    ],
  },
  transport: {
    title: 'Transport & Vehicles',
    icon: 'M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2',
    desc: 'Apply for driver licenses, renew vehicle registration, and get updates on public transport routes.',
    color: 'violet',
    bgImage: '/city-2.jpg',
    features: [
      { label: 'License Renewal', detail: 'Renew driving licenses and book driving tests.' },
      { label: 'Vehicle Registration', detail: 'Annual plate inspection and registration.' },
      { label: 'Traffic Fines', detail: 'Check and pay traffic penalties online.' },
    ],
  },
  education: {
    title: 'Education & Schools',
    icon: 'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222',
    desc: 'School enrollment portals, scholarship opportunities, and public library access.',
    color: 'amber',
    bgImage: '/city-3.jpg',
    features: [
      { label: 'Student Enrollment', detail: 'Register children for public primary and secondary schools.' },
      { label: 'Scholarships', detail: 'Apply for city-sponsored higher education grants.' },
      { label: 'Adult Education', detail: 'Night classes and vocational training programs.' },
    ],
  },
  finance: {
    title: 'Revenue & Taxes',
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    desc: 'Pay business taxes, utility bills, and municipal service fees through our secure payment gateway.',
    color: 'emerald',
    bgImage: '/hero-3.jpg',
    features: [
      { label: 'Tax Declaration', detail: 'Submit monthly and annual business tax returns.' },
      { label: 'Utility Bills', detail: 'Pay water and waste management bills.' },
      { label: 'Tax Clearance', detail: 'Request official tax clearance certificates.' },
    ],
  },
  business: {
    title: 'Trade & Commerce',
    icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    desc: 'Start a new business, renew trade licenses, and access the investor support desk.',
    color: 'sky',
    bgImage: '/hero-4.jpg',
    features: [
      { label: 'Trade License', detail: 'New business registration and annual renewals.' },
      { label: 'Commercial Permits', detail: 'Signage, outdoor dining, and special event permits.' },
      { label: 'Investor Support', detail: 'Dedicated desk for medium to large scale investors.' },
    ],
  },
};

const Sector = () => {
  const { t } = useTranslation();
  const { name } = useParams<{ name: string }>();
  const sector = SECTORS[name || 'land'] || SECTORS.land;

  return (
    <div className="bg-slate-50">

      {/* ─── Hero ─── */}
      <section className="relative bg-slate-950 text-white overflow-hidden min-h-[45vh] flex items-center">
        <div className={`absolute inset-0 bg-cover bg-center opacity-25`} style={{ backgroundImage: `url('${sector.bgImage}')` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <Link to="/administrative" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm font-medium mb-8">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            {t('sector_page.back')}
          </Link>
          <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-3 uppercase tracking-[0.35em] text-[10px] font-semibold text-amber-400 mb-6">
            <span className="w-10 h-px bg-amber-400/50" />
            {t('sector_page.portal')}
          </motion.div>
          <motion.h1 {...fadeUp(0.2)} className="text-4xl sm:text-6xl font-bold leading-tight tracking-tight font-display mb-6 max-w-3xl">
            {sector.title}
          </motion.h1>
          <motion.p {...fadeUp(0.4)} className="text-white/70 text-lg max-w-xl leading-relaxed">
            {sector.desc}
          </motion.p>
        </div>
      </section>

      {/* ─── Actions ─── */}
      <section className="py-20 -mt-16 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <motion.div {...fadeUp(0)} className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-display mb-3">{t('sector_page.apply')}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">{t('sector_page.apply_desc')}</p>
              <button className="mt-auto w-full py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
                {t('sector_page.start_app')}
              </button>
            </motion.div>

            <motion.div {...fadeUp(0.1)} className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-display mb-3">{t('sector_page.book')}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">{t('sector_page.book_desc')}</p>
              <button className="mt-auto w-full py-3 bg-slate-100 text-slate-900 font-semibold rounded-xl hover:bg-slate-200 transition-colors">
                {t('sector_page.schedule')}
              </button>
            </motion.div>

            <motion.div {...fadeUp(0.2)} className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-display mb-3">{t('sector_page.contact_desk')}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">Have specific questions regarding {sector.title.toLowerCase()}? Speak to a department agent directly.</p>
              <button className="mt-auto w-full py-3 border-2 border-slate-200 text-slate-700 font-semibold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-colors">
                Contact Agent
              </button>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── Services List ─── */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 font-display mb-8">{t('sector_page.sub_services')}</h2>
            <div className="space-y-4">
              {sector.features.map((feat, i) => (
                <motion.div key={feat.label} {...fadeUp(i * 0.1)} className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors cursor-pointer group">
                  <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 group-hover:border-blue-500 group-hover:text-blue-600 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1 group-hover:text-blue-700 transition-colors">{feat.label}</h4>
                    <p className="text-sm text-slate-500">{feat.detail}</p>
                  </div>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Sector;
