import { useTranslation } from 'react-i18next';

export default function MobileAppSection() {
  const { t } = useTranslation();

  return (
    <>
      <section className="py-24 sm:py-32 bg-white relative overflow-hidden z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left Content */}
            <div className="lg:w-1/2 space-y-8">
              <div className="space-y-6">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  {t("home.mobile_app.title")}
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed max-w-xl">
                  {t("home.mobile_app.desc")}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all flex items-center gap-3 shadow-lg">
                  Download App
                </button>
                <button className="px-8 py-4 bg-white border-2 border-slate-200 hover:border-slate-300 text-slate-900 font-bold rounded-xl transition-all flex items-center gap-3">
                  Learn More
                </button>
              </div>

              {/* Features List */}
              <div className="pt-4 space-y-3">
                {[
                  { icon: '⚡', text: 'Instant service access' },
                  { icon: '🔒', text: 'Secure digital documents' },
                  { icon: '📱', text: 'Track applications in real-time' },
                  { icon: '💬', text: '24/7 support available' }
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center text-sm">
                      {feature.icon}
                    </div>
                    <span className="text-slate-700 font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Mockup - Tablet with Services Portal */}
            <div className="lg:w-1/2 relative h-[600px] w-full">
              {/* Tablet - Main Device */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[500px] h-[380px] bg-white rounded-[1.5rem] border-[8px] border-slate-900 shadow-2xl z-20 overflow-hidden">
                <div className="h-full bg-white flex flex-col">
                  {/* Services Portal Content */}
                  <div className="flex-1 overflow-hidden">
                    {/* Hero Section */}
                    <div className="bg-black text-white px-4 py-3">
                      <div className="text-[8px] text-red-500 font-bold mb-1">E-SERVICES PORTAL</div>
                      <div className="text-sm font-bold mb-1">Fast. Easy. Reliable.</div>
                      <div className="text-[8px] text-slate-400 mb-2">Access government permits, online anytime, anywhere.</div>
                      <div className="flex gap-2">
                        <input 
                          type="text" 
                          placeholder="Search services..." 
                          className="flex-1 px-2 py-1 rounded text-[8px] text-slate-900"
                          readOnly
                        />
                        <button className="px-3 py-1 bg-red-600 rounded text-[8px] font-bold">Search</button>
                      </div>
                    </div>

                    {/* Services Grid */}
                    <div className="p-4 bg-slate-50">
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-[10px] font-bold text-slate-900">AVAILABLE SERVICES</div>
                        <div className="text-[8px] text-red-600 font-bold">View All →</div>
                      </div>
                      
                      <div className="grid grid-cols-4 gap-2">
                        {[
                          { title: 'Business Permit', category: 'BUSINESS', time: '5-6 DAYS', price: '500 ETB' },
                          { title: 'Birth Certificate', category: 'CIVIL', time: '1-2 DAYS', price: '50 ETB' },
                          { title: 'Land Ownership', category: 'LAND', time: '5-7 DAYS', price: '300 ETB' },
                          { title: 'Pay Electricity', category: 'UTILITIES', time: 'INSTANT', price: 'VARIES' },
                          { title: 'Vehicle Registration', category: 'TRANSPORT', time: '3-4 DAYS', price: '450 ETB' },
                          { title: 'National ID Card', category: 'CIVIL', time: '7-10 DAYS', price: '100 ETB' },
                          { title: 'Pay Water Bill', category: 'UTILITIES', time: 'INSTANT', price: 'VARIES' },
                          { title: 'Waste Collection', category: 'UTILITIES', time: '1-2 DAYS', price: '200 ETB' }
                        ].map((service, i) => (
                          <div key={i} className="bg-white rounded-lg border border-slate-200 p-2 hover:shadow-md transition-shadow">
                            <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center mb-2">
                              <div className="w-3 h-3 bg-white rounded-sm"></div>
                            </div>
                            <div className="text-[8px] text-slate-400 uppercase mb-1">{service.category}</div>
                            <div className="text-[9px] font-bold text-slate-900 mb-2 leading-tight">{service.title}</div>
                            <div className="flex items-center justify-between text-[7px] mb-2">
                              <span className="text-slate-500">⏱ {service.time}</span>
                              <span className="text-red-600 font-bold">{service.price}</span>
                            </div>
                            <button className="w-full py-1 bg-red-50 text-red-600 rounded text-[7px] font-bold hover:bg-red-100">
                              Apply Now →
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Phone - Bottom Left */}
              <div className="absolute left-0 bottom-0 w-[180px] h-[360px] bg-white rounded-[2rem] border-[8px] border-slate-900 shadow-2xl z-30 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-slate-900 rounded-b-xl z-20"></div>
                <div className="h-full bg-gradient-to-br from-slate-50 to-white p-3 flex flex-col">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-red-600"></div>
                      <div className="text-[10px] font-bold">Sheger</div>
                    </div>
                    <div className="flex gap-0.5">
                      <div className="w-1 h-1 rounded-full bg-slate-400"></div>
                      <div className="w-1 h-1 rounded-full bg-slate-400"></div>
                      <div className="w-1 h-1 rounded-full bg-slate-400"></div>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {[1,2,3,4,5,6].map((i) => (
                      <div key={i} className="aspect-square bg-white rounded-lg border border-slate-200 shadow-sm flex items-center justify-center">
                        <div className="w-4 h-4 rounded bg-gradient-to-br from-red-500 to-red-600"></div>
                      </div>
                    ))}
                  </div>

                  {/* Recent Services */}
                  <div className="flex-1 space-y-2">
                    <div className="text-[8px] font-bold text-slate-500 uppercase">Recent</div>
                    {[1,2].map((i) => (
                      <div key={i} className="bg-white rounded-lg border border-slate-200 p-2">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-3 h-3 rounded bg-red-600"></div>
                          <div className="text-[8px] font-bold text-slate-900">Service {i}</div>
                        </div>
                        <div className="text-[7px] text-slate-500">In Progress</div>
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <button className="w-full py-2 bg-red-600 text-white font-bold rounded-lg text-[9px] mt-2">
                    View All Services
                  </button>
                </div>
              </div>

              {/* Floating Card - Top Right */}
              <div className="absolute right-0 top-20 w-[200px] h-[140px] bg-white rounded-2xl shadow-xl z-10 overflow-hidden border border-slate-200">
                <div className="h-full p-4">
                  <div className="text-[8px] text-slate-500 mb-2 uppercase font-bold">Quick Stats</div>
                  <div className="space-y-2">
                    {[
                      { label: 'Active Services', value: '12', color: 'bg-blue-500' },
                      { label: 'Completed', value: '48', color: 'bg-green-500' },
                      { label: 'Pending', value: '3', color: 'bg-orange-500' }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full ${item.color}`}></div>
                        <div className="flex-1 text-[8px] text-slate-600">{item.label}</div>
                        <div className="text-[9px] font-bold text-slate-900">{item.value}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 pt-3 border-t border-slate-100">
                    <div className="text-[7px] text-slate-400">Total Saved Time</div>
                    <div className="text-sm font-bold text-red-600">24 hrs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
