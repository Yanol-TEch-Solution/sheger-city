import { type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ChatBot from '../ChatBot';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const { t } = useTranslation();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showGreeting, setShowGreeting] = useState(true);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className={`flex-1 ${!isHome ? 'pt-20' : ''}`}>
        {children}
      </main>

      {/* Global Floating Communication Hub */}
      <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 flex flex-col items-center gap-3">
        {/* Social Icons Stack */}
        <div className="flex flex-col items-center gap-3 mb-1">
          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/251911000000"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 h-8 bg-[#25D366] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#128C7E] transition-all group relative"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span className="absolute right-full mr-3 px-2 py-1 bg-slate-900 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {t("home.social.whatsapp")}
            </span>
          </motion.a>

          {/* Telegram */}
          <motion.a
            href="https://t.me/ShegerCity"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 h-8 bg-[#0088cc] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#0077b3] transition-all group relative"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.51.35-.98.53-1.4.52-.46-.01-1.35-.26-2.01-.48-.81-.27-1.45-.42-1.39-.89.03-.24.37-.49 1.02-.75 4-.1.1.1 0 0z" />
            </svg>
            <span className="absolute right-full mr-3 px-2 py-1 bg-slate-900 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              {t("home.social.telegram")}
            </span>
          </motion.a>
        </div>

        <div className="relative">
          {showGreeting && !isChatOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className="absolute bottom-[calc(100%+12px)] right-0 bg-white px-4 py-2 rounded-2xl shadow-2xl border border-slate-100 whitespace-nowrap z-50 flex items-center gap-3"
            >
              <p className="text-[11px] font-bold text-slate-800">Hi, I'm ShegerCity Ai 👋</p>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setShowGreeting(false);
                }}
                className="text-slate-400 hover:text-slate-600 transition-colors p-0.5"
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              {/* Tooltip Arrow */}
              <div className="absolute -bottom-1 right-6 w-2 h-2 bg-white border-r border-b border-slate-100 rotate-45"></div>
            </motion.div>
          )}
          <button
            onClick={() => setIsChatOpen(!isChatOpen)}
            className="w-12 h-12 sm:w-14 sm:h-14 bg-slate-900 rounded-full shadow-2xl z-50 flex items-center justify-center active:scale-90 transition-all border-2 border-white group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            <img
              src="/chatboticon.png"
              alt="ChatBot"
              className="w-full h-full relative z-10 object-cover p-1"
            />
            {/* Pulsing indicator */}
            <div className="absolute top-3 right-3 w-3 h-3 bg-emerald-500 border-2 border-slate-900 rounded-full shadow-sm">
              <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-75"></div>
            </div>
          </button>
        </div>
      </div>

      <ChatBot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      <Footer />
    </div>
  );
};

export default Layout;
