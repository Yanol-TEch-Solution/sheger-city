import { useTranslation } from 'react-i18next';
import { FaBolt, FaLock, FaMobileAlt, FaComments } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function MobileAppSection() {
  const { t } = useTranslation();

  return (
    <>
      <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-20">
            {/* Left Content - Slides from Left */}
            <motion.div 
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full lg:w-1/2 space-y-6 sm:space-y-8 text-center lg:text-left"
            >
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  {t("home.mobile_app.title")} <span className="text-red-600">Super App</span>
                </h2>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  {t("home.mobile_app.desc")}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
                <button className="px-6 sm:px-8 py-3 sm:py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-3 shadow-lg">
                  Download App
                </button>
                <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white border-2 border-slate-200 hover:border-slate-300 text-slate-900 font-bold rounded-xl transition-all flex items-center justify-center gap-3">
                  Learn More
                </button>
              </div>

              {/* Features List */}
              <div className="pt-4 space-y-3 max-w-md mx-auto lg:mx-0">
                {[
                  { icon: FaBolt, text: 'Instant service access' },
                  { icon: FaLock, text: 'Secure digital documents' },
                  { icon: FaMobileAlt, text: 'Track applications in real-time' },
                  { icon: FaComments, text: '24/7 support available' }
                ].map((feature, i) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
                      className="flex items-center gap-3 justify-center lg:justify-start"
                    >
                      <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center text-red-600 shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-slate-700 font-medium text-sm sm:text-base">{feature.text}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Right Mockup - Multiple Overlapping Screens */}
            <div className="w-full lg:w-1/2 relative h-[500px] sm:h-[550px] md:h-[550px] lg:h-[600px] mt-8 lg:mt-0">
              {/* Tablet - Main Device - Slides from Right */}
              <motion.div 
                initial={{ opacity: 0, x: 200, rotateY: -30 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                style={{ transformStyle: "preserve-3d" }}
                className="absolute left-1/2 -translate-x-1/2 top-0 w-[85%] sm:w-[380px] md:w-[450px] lg:w-[500px] h-[220px] sm:h-[300px] md:h-[340px] lg:h-[380px] bg-white rounded-lg sm:rounded-xl md:rounded-[1.5rem] border-3 sm:border-4 md:border-[8px] border-slate-900 shadow-2xl z-20 overflow-hidden"
              >
                <div className="h-full bg-white flex flex-col">
                  {/* Services Portal Content */}
                  <div className="flex-1 overflow-hidden">
                    {/* Hero Section */}
                    <div className="bg-black text-white px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 md:py-3">
                      <div className="text-[6px] sm:text-[7px] md:text-[8px] text-red-500 font-bold mb-0.5 sm:mb-1">E-SERVICES PORTAL</div>
                      <div className="text-[9px] sm:text-xs md:text-sm font-bold mb-0.5 sm:mb-1">Fast. Easy. Reliable.</div>
                      <div className="text-[6px] sm:text-[7px] md:text-[8px] text-slate-400 mb-1 sm:mb-2">Access government permits, online anytime, anywhere.</div>
                      <div className="flex gap-1 sm:gap-2">
                        <input 
                          type="text" 
                          placeholder="Search services..." 
                          className="flex-1 px-1 sm:px-1.5 md:px-2 py-0.5 sm:py-0.5 md:py-1 rounded text-[6px] sm:text-[7px] md:text-[8px] text-slate-900"
                          readOnly
                        />
                        <button className="px-1.5 sm:px-2 md:px-3 py-0.5 sm:py-0.5 md:py-1 bg-red-600 rounded text-[6px] sm:text-[7px] md:text-[8px] font-bold">Search</button>
                      </div>
                    </div>

                    {/* Services Grid */}
                    <div className="p-1.5 sm:p-2 md:p-4 bg-slate-50">
                      <div className="flex items-center justify-between mb-1.5 sm:mb-2 md:mb-3">
                        <div className="text-[7px] sm:text-[8px] md:text-[10px] font-bold text-slate-900">AVAILABLE SERVICES</div>
                        <div className="text-[6px] sm:text-[7px] md:text-[8px] text-red-600 font-bold">View All →</div>
                      </div>
                      
                      <div className="grid grid-cols-4 gap-0.5 sm:gap-1 md:gap-2">
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
                          <div key={i} className="bg-white rounded sm:rounded-md md:rounded-lg border border-slate-200 p-0.5 sm:p-1 md:p-2 hover:shadow-md transition-shadow">
                            <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 rounded-full bg-red-600 flex items-center justify-center mb-0.5 sm:mb-1 md:mb-2">
                              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 bg-white rounded-sm"></div>
                            </div>
                            <div className="text-[5px] sm:text-[6px] md:text-[8px] text-slate-400 uppercase mb-0.5 sm:mb-0.5 md:mb-1">{service.category}</div>
                            <div className="text-[6px] sm:text-[7px] md:text-[9px] font-bold text-slate-900 mb-0.5 sm:mb-1 md:mb-2 leading-tight line-clamp-2">{service.title}</div>
                            <div className="flex items-center justify-between text-[4px] sm:text-[5px] md:text-[7px] mb-0.5 sm:mb-1 md:mb-2">
                              <span className="text-slate-500">⏱ {service.time}</span>
                              <span className="text-red-600 font-bold">{service.price}</span>
                            </div>
                            <button className="w-full py-0.5 sm:py-0.5 md:py-1 bg-red-50 text-red-600 rounded text-[4px] sm:text-[5px] md:text-[7px] font-bold hover:bg-red-100">
                              Apply Now →
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Mobile Phone - Bottom Left - Slides from Bottom Left */}
              <motion.div 
                initial={{ opacity: 0, x: -150, y: 150, rotateZ: -15 }}
                whileInView={{ opacity: 1, x: 0, y: 0, rotateZ: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                style={{ transformStyle: "preserve-3d" }}
                className="absolute left-1/2 -translate-x-1/2 sm:left-2 sm:translate-x-0 md:-left-8 lg:-left-20 top-[260px] sm:top-[280px] md:top-[200px] lg:top-[180px] w-[110px] sm:w-[130px] md:w-[160px] lg:w-[180px] h-[220px] sm:h-[260px] md:h-[320px] lg:h-[360px] bg-white rounded-lg sm:rounded-xl md:rounded-[2rem] border-3 sm:border-4 md:border-[8px] border-slate-900 shadow-2xl z-30 overflow-hidden"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 sm:w-10 md:w-14 lg:w-16 h-2.5 sm:h-3 md:h-4 bg-slate-900 rounded-b-md sm:rounded-b-lg md:rounded-b-xl z-20"></div>
                <div className="h-full bg-gradient-to-br from-slate-50 to-white p-1.5 sm:p-2 md:p-3 flex flex-col">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-1.5 sm:mb-2 md:mb-4">
                    <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 rounded-full bg-red-600"></div>
                      <div className="text-[7px] sm:text-[8px] md:text-[10px] font-bold">Sheger</div>
                    </div>
                    <div className="flex gap-0.5">
                      <div className="w-0.5 h-0.5 sm:w-0.5 sm:h-0.5 md:w-1 md:h-1 rounded-full bg-slate-400"></div>
                      <div className="w-0.5 h-0.5 sm:w-0.5 sm:h-0.5 md:w-1 md:h-1 rounded-full bg-slate-400"></div>
                      <div className="w-0.5 h-0.5 sm:w-0.5 sm:h-0.5 md:w-1 md:h-1 rounded-full bg-slate-400"></div>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="grid grid-cols-3 gap-0.5 sm:gap-1 md:gap-2 mb-1.5 sm:mb-2 md:mb-4">
                    {[1,2,3,4,5,6].map((i) => (
                      <div key={i} className="aspect-square bg-white rounded sm:rounded-md md:rounded-lg border border-slate-200 shadow-sm flex items-center justify-center">
                        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-4 md:h-4 rounded bg-gradient-to-br from-red-500 to-red-600"></div>
                      </div>
                    ))}
                  </div>

                  {/* Recent Services */}
                  <div className="flex-1 space-y-0.5 sm:space-y-1 md:space-y-2">
                    <div className="text-[5px] sm:text-[6px] md:text-[8px] font-bold text-slate-500 uppercase">Recent</div>
                    {[1,2].map((i) => (
                      <div key={i} className="bg-white rounded sm:rounded-md md:rounded-lg border border-slate-200 p-0.5 sm:p-1 md:p-2">
                        <div className="flex items-center gap-0.5 sm:gap-1 md:gap-2 mb-0.5 sm:mb-0.5 md:mb-1">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 rounded bg-red-600"></div>
                          <div className="text-[5px] sm:text-[6px] md:text-[8px] font-bold text-slate-900">Service {i}</div>
                        </div>
                        <div className="text-[4px] sm:text-[5px] md:text-[7px] text-slate-500">In Progress</div>
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <button className="w-full py-0.5 sm:py-1 md:py-2 bg-red-600 text-white font-bold rounded sm:rounded-md md:rounded-lg text-[6px] sm:text-[7px] md:text-[9px] mt-0.5 sm:mt-1 md:mt-2">
                    View All Services
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
