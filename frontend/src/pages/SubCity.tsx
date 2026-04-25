import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SubCity = () => {
  const { id } = useParams();
  const { t } = useTranslation();

  const subCityKeys = [
    'furii', 'galaan', 'galaan_guddaa', 'gafarsa_gujee', 
    'buraayyuu', 'sabbataa', 'mana_abbichuu', 'malkaa_noonnoo', 
    'kooyyee_faccee', 'kuraa_jiddaa', 'sulultaa', 'lagaxafoo'
  ];

  const currentSubCityName = id ? t(`subcities.${subCityKeys[parseInt(id) - 1]}`) : '';

  if (!id) {
    return (
      <div className="bg-slate-50 min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 font-display">Explore Our Sub Cities</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Sheger City is divided into {subCityKeys.length} administrative sub-cities to provide closer and more efficient services to all residents.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {subCityKeys.map((key, index) => (
              <Link 
                key={key} 
                to={`/subcity/${index + 1}`}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 p-6 flex flex-col items-center text-center hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">Sub City {index + 1}</h3>
                <p className="text-sm text-slate-500 mb-4">View local offices and specific administrative details.</p>
                <span className="text-blue-600 font-semibold text-sm group-hover:underline">Explore &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <Link to="/subcity" className="text-blue-600 hover:underline mb-4 inline-block">&larr; Back to all Sub Cities</Link>
          <h1 className="text-4xl font-bold mb-4">Sub City {id}</h1>
          <p className="text-gray-600 text-lg">
            Welcome to {currentSubCityName} - serving our local community with dedicated services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Overview */}
          <div className="bg-slate-50 rounded-2xl border border-slate-100 p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h3 className="text-xl font-black mb-4 font-display">Overview</h3>
            <p className="text-gray-600">
              {currentSubCityName} is home to diverse communities and offers comprehensive local administrative services, ensuring swift delivery and resident satisfaction.
            </p>
          </div>

          {/* Offices */}
          <div className="bg-slate-50 rounded-2xl border border-slate-100 p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
            </div>
            <h3 className="text-xl font-black mb-4 font-display">Local Offices</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-2">📍 Main Administration Office</li>
              <li className="flex items-center gap-2">📍 Document Authentication Center</li>
              <li className="flex items-center gap-2">📍 Health & Welfare Hub</li>
            </ul>
          </div>

          {/* Services */}
          <div className="bg-slate-50 rounded-2xl border border-slate-100 p-8 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
            </div>
            <h3 className="text-xl font-black mb-4 font-display">Available Services</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-2">✓ Resident ID Services</li>
              <li className="flex items-center gap-2">✓ Property Registration</li>
              <li className="flex items-center gap-2">✓ Local Business Licensing</li>
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white shadow-xl">
          <h3 className="text-2xl font-black mb-6 font-display">Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <div>
                <p className="font-semibold text-blue-100 mb-1">Address</p>
                <p>{currentSubCityName} Administration Complex,<br/>Sheger City</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <div>
                <p className="font-semibold text-blue-100 mb-1">Phone & Support</p>
                <p>+251 11 XXX XXXX<br/>support.subcity{id}@shegercity.gov.et</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubCity;
