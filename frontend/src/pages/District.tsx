import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
});

interface DistrictData {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  population: string;
  area: string;
  woredas: number;
  kebeles: number;
  heroImage: string;
  highlights: { title: string; value: string; icon: string }[];
  services: string[];
  offices: { name: string; phone: string }[];
  projects: { title: string; status: string; progress: number }[];
}

const DISTRICTS: Record<string, DistrictData> = {
  'aanaa-galaan': {
    name: 'Aanaa Galaan',
    slug: 'aanaa-galaan',
    tagline: 'The Heart of Commerce & Community',
    description: 'Aanaa Galaan is one of the most vibrant and economically active districts in Sheger City. Known for its thriving marketplaces, diverse communities, and rapidly modernizing infrastructure, it serves as a key commercial hub connecting the eastern and central zones of the city.',
    population: '285,000+',
    area: '78 km²',
    woredas: 8,
    kebeles: 42,
    heroImage: '/city-2.jpg',
    highlights: [
      { title: 'Schools', value: '45+', icon: 'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' },
      { title: 'Health Centers', value: '12', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
      { title: 'Green Spaces', value: '18', icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' },
      { title: 'Markets', value: '6', icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z' },
    ],
    services: ['Resident ID & Registration', 'Property Tax & Land Services', 'Business Licensing', 'Birth & Marriage Certificates', 'Local Court Services', 'Community Policing', 'Waste Management', 'Road Maintenance Requests'],
    offices: [
      { name: 'Aanaa Galaan Main Office', phone: '+251 11 234 5678' },
      { name: 'Land Administration', phone: '+251 11 234 5679' },
      { name: 'Revenue Collection', phone: '+251 11 234 5680' },
    ],
    projects: [
      { title: 'Market Modernization Phase II', status: 'In Progress', progress: 65 },
      { title: 'Road Expansion — Galaan Avenue', status: 'In Progress', progress: 40 },
      { title: 'Community Health Center', status: 'Completed', progress: 100 },
      { title: 'Digital Service Kiosk Rollout', status: 'Planning', progress: 15 },
    ],
  },
  'aanaa-andoodee': {
    name: 'Aanaa Andoodee',
    slug: 'aanaa-andoodee',
    tagline: 'Gateway to Green Living',
    description: 'Aanaa Andoodee is celebrated for its lush green landscapes, eco-parks, and sustainable urban planning initiatives. This district is at the forefront of Sheger City\'s environmental preservation efforts, blending modern residential development with nature conservation.',
    population: '198,000+',
    area: '95 km²',
    woredas: 6,
    kebeles: 34,
    heroImage: '/city-4.jpg',
    highlights: [
      { title: 'Schools', value: '32+', icon: 'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' },
      { title: 'Health Centers', value: '8', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
      { title: 'Eco-Parks', value: '24', icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' },
      { title: 'Libraries', value: '5', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
    ],
    services: ['Resident ID & Registration', 'Environmental Permits', 'Property Tax & Land Services', 'Birth & Marriage Certificates', 'Parks & Recreation Booking', 'Community Events', 'Agricultural Support', 'Water & Sanitation'],
    offices: [
      { name: 'Aanaa Andoodee Main Office', phone: '+251 11 345 6789' },
      { name: 'Environmental Affairs', phone: '+251 11 345 6790' },
      { name: 'Community Development', phone: '+251 11 345 6791' },
    ],
    projects: [
      { title: 'Andoodee Eco-Park Expansion', status: 'In Progress', progress: 72 },
      { title: 'Solar Street Lighting Project', status: 'In Progress', progress: 55 },
      { title: 'Community Library & Youth Center', status: 'Planning', progress: 20 },
      { title: 'Organic Farm Initiative', status: 'Completed', progress: 100 },
    ],
  },
  'aanaa-siidaa-awaash': {
    name: 'Aanaa Siidaa Awaash',
    slug: 'aanaa-siidaa-awaash',
    tagline: 'Where Innovation Meets Heritage',
    description: 'Aanaa Siidaa Awaash is a dynamic district known for its unique blend of historical landmarks and cutting-edge development. Positioned along the Awaash corridor, it benefits from strategic transportation links and is rapidly emerging as a tech and innovation hub within Sheger City.',
    population: '156,000+',
    area: '112 km²',
    woredas: 5,
    kebeles: 28,
    heroImage: '/city-3.jpg',
    highlights: [
      { title: 'Schools', value: '28+', icon: 'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' },
      { title: 'Health Centers', value: '6', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
      { title: 'Tech Hubs', value: '3', icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
      { title: 'Heritage Sites', value: '7', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
    ],
    services: ['Resident ID & Registration', 'Tech Startup Licensing', 'Property Tax & Land Services', 'Birth & Marriage Certificates', 'Tourism & Heritage Permits', 'Transportation Services', 'Innovation Grants', 'Cultural Event Coordination'],
    offices: [
      { name: 'Aanaa Siidaa Awaash Main Office', phone: '+251 11 456 7890' },
      { name: 'Innovation & Technology', phone: '+251 11 456 7891' },
      { name: 'Heritage & Tourism', phone: '+251 11 456 7892' },
    ],
    projects: [
      { title: 'Awaash Tech Innovation Campus', status: 'In Progress', progress: 35 },
      { title: 'Heritage Walkway Restoration', status: 'In Progress', progress: 80 },
      { title: 'Smart Transit Hub', status: 'Planning', progress: 10 },
      { title: 'Community Sports Complex', status: 'Completed', progress: 100 },
    ],
  },
};

const District = () => {
  
  const { id } = useParams();
  const district = id ? DISTRICTS[id] : null;

  if (!district) {
    return (
      <div className="bg-slate-50 min-h-screen">
        <section className="relative bg-slate-950 text-white overflow-hidden min-h-[40vh] flex items-center">
          <div className="absolute inset-0 bg-[url('/city-1.jpg')] bg-cover bg-center opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full text-center">
            <motion.h1 {...fadeUp(0.2)} className="text-4xl sm:text-6xl font-bold font-display mb-4">District Not Found</motion.h1>
            <motion.p {...fadeUp(0.3)} className="text-white/70 text-lg mb-8">The district you're looking for doesn't exist.</motion.p>
            <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-slate-900 font-bold rounded-full hover:bg-amber-400 transition-all">&larr; Back to Home</Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="relative bg-slate-950 text-white overflow-hidden min-h-[55vh] flex items-end">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url('${district.heroImage}')` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-3 uppercase tracking-[0.35em] text-[10px] font-semibold text-amber-400 mb-4">
            <span className="w-10 h-px bg-amber-400/50" />
            Municipal District
          </motion.div>
          <motion.h1 {...fadeUp(0.2)} className="text-4xl sm:text-6xl font-bold leading-tight tracking-tight font-display mb-3">{district.name}</motion.h1>
          <motion.p {...fadeUp(0.3)} className="text-amber-400 text-lg sm:text-xl font-medium mb-4">{district.tagline}</motion.p>
          <motion.p {...fadeUp(0.4)} className="text-white/70 text-base sm:text-lg max-w-2xl leading-relaxed">{district.description}</motion.p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="relative z-20 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: 'Population', value: district.population, color: 'blue' },
              { label: 'Area', value: district.area, color: 'emerald' },
              { label: 'Woredas', value: String(district.woredas), color: 'violet' },
              { label: 'Kebeles', value: String(district.kebeles), color: 'amber' },
            ].map((stat, i) => (
              <motion.div key={stat.label} {...fadeUp(i * 0.08)} className="bg-white rounded-2xl border border-slate-100 shadow-lg p-6 text-center">
                <p className={`text-2xl sm:text-3xl font-bold text-${stat.color}-600 font-display`}>{stat.value}</p>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-500 mb-3">At a Glance</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-display">District Highlights</h2>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {district.highlights.map((h, i) => (
              <motion.div key={h.title} {...fadeUp(i * 0.08)} className="bg-white rounded-2xl border border-slate-100 p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={h.icon} /></svg>
                </div>
                <p className="text-3xl font-bold text-slate-900 font-display mb-1">{h.value}</p>
                <p className="text-sm text-slate-500 font-medium">{h.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Projects */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Services */}
            <motion.div {...fadeUp(0)}>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-500 mb-3">What We Offer</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display mb-8">Available Services</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {district.services.map((s, i) => (
                  <motion.div key={s} {...fadeUp(i * 0.05)} className="flex items-center gap-3 bg-slate-50 rounded-xl px-5 py-4 border border-slate-100 hover:border-blue-200 hover:bg-blue-50 transition-all group">
                    <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-sm font-semibold text-slate-700">{s}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Projects */}
            <motion.div {...fadeUp(0.1)}>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-500 mb-3">Development</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display mb-8">Active Projects</h2>
              <div className="space-y-5">
                {district.projects.map((p, i) => (
                  <motion.div key={p.title} {...fadeUp(i * 0.08)} className="bg-slate-50 rounded-2xl border border-slate-100 p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-bold text-slate-900">{p.title}</h4>
                      <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full ${p.status === 'Completed' ? 'bg-emerald-50 text-emerald-700' : p.status === 'In Progress' ? 'bg-blue-50 text-blue-700' : 'bg-amber-50 text-amber-700'}`}>{p.status}</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2.5">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: `${p.progress}%` }} viewport={{ once: false }} transition={{ duration: 1.2, delay: i * 0.1 }} className={`h-2.5 rounded-full ${p.status === 'Completed' ? 'bg-emerald-500' : p.status === 'In Progress' ? 'bg-blue-500' : 'bg-amber-400'}`} />
                    </div>
                    <p className="text-xs text-slate-400 mt-2 font-medium">{p.progress}% complete</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)} className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[2rem] p-8 sm:p-12 text-white shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="relative z-10">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400 mb-3">Get in Touch</p>
              <h2 className="text-2xl sm:text-4xl font-bold font-display mb-8">Contact {district.name}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {district.offices.map((office) => (
                  <div key={office.name} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                    <div className="w-10 h-10 bg-amber-500/20 text-amber-400 rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                    </div>
                    <h4 className="font-bold text-white mb-2 text-sm">{office.name}</h4>
                    <p className="text-white/60 text-sm">{office.phone}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default District;
