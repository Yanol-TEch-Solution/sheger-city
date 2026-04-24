import { Link } from 'react-router-dom';

const Services = () => {
  const serviceCategories = [
    {
      title: "Property & Land",
      description: "Manage your land administration, property registration, and building permits online.",
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      links: [
        { name: "Land Administration", path: "/sector/land" },
        { name: "Building Permits", path: "/sector/land/permits" }
      ],
      color: "blue"
    },
    {
      title: "Health & Welfare",
      description: "Access healthcare facilities, emergency services, and welfare programs.",
      icon: (
        <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      links: [
        { name: "Health Services", path: "/sector/health" },
        { name: "Emergency Services", path: "/sector/health/emergency" }
      ],
      color: "red"
    },
    {
      title: "Transport",
      description: "Apply for driver's licenses, register vehicles, and manage transport services.",
      icon: (
        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
        </svg>
      ),
      links: [
        { name: "Transport Services", path: "/sector/transport" },
        { name: "Driver's License", path: "/sector/transport/license" }
      ],
      color: "purple"
    },
    {
      title: "Business & Trade",
      description: "Register businesses, apply for trade licenses, and access commercial services.",
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      links: [
        { name: "Business Services", path: "/sector/business" },
        { name: "Business License", path: "/sector/business/license" }
      ],
      color: "green"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Government Services Portal</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Access a comprehensive range of digital government services designed for efficiency, transparency, and convenience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceCategories.map((category, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden group">
              <div className="p-8">
                <div className={`w-16 h-16 rounded-2xl bg-${category.color}-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">{category.title}</h2>
                <p className="text-slate-600 mb-8">{category.description}</p>
                
                <div className="space-y-3">
                  {category.links.map((link, lIdx) => (
                    <Link
                      key={lIdx}
                      to={link.path}
                      className={`block w-full py-3 px-4 rounded-xl bg-slate-50 text-slate-700 font-medium hover:bg-${category.color}-50 hover:text-${category.color}-700 transition-colors flex items-center justify-between`}
                    >
                      {link.name}
                      <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
