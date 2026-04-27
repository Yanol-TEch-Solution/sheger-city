import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GoogleGenerativeAI } from '@google/generative-ai';

interface Message {
  role: 'user' | 'model';
  content: string;
}

const GEMINI_API_KEY = "AIzaSyDp4Zl7TFsLet7y4wlOm22e4NLw1ENsTtg".trim(); 

const ChatBot = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', content: "Hello! I am the Sheger City AI Assistant. How can I help you discover our smart city today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    const newMessages = [...messages, { role: 'user' as const, content: userMsg }];
    
    setInput('');
    setMessages(newMessages);
    setIsLoading(true);

    const configs = [
      { model: "gemini-1.5-flash", version: "v1" },
      { model: "gemini-1.5-flash", version: "v1beta" },
      { model: "gemini-pro", version: "v1" },
      { model: "models/gemini-1.5-flash", version: "v1" }
    ];
    
    let success = false;
    let lastError = "";

    for (const config of configs) {
      if (success) break;
      
      try {
        const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: config.model }, { apiVersion: config.version });
        
        const result = await model.generateContent({
          contents: [
            { 
              role: 'user', 
              parts: [{ text: `You are the Sheger City AI Assistant. Answer this: ${userMsg}` }] 
            }
          ],
        });

        const response = await result.response;
        const text = response.text();
        
        setMessages(prev => [...prev, { role: 'model', content: text }]);
        success = true;
      } catch (error: any) {
        console.error(`Config failed (\${config.model} @ \${config.version}):`, error);
        lastError = error.message || "Unknown error";
        
        if (error.message?.includes("403") || error.message?.includes("API key")) {
          break; 
        }
      }
    }

    if (!success) {
      setMessages(prev => [...prev, { 
        role: 'model', 
        content: `Connection failed after multiple attempts. Last error: \${lastError}. This usually happens if the 'Generative Language API' is not enabled for this specific key's project in Google Cloud Console. Please check your settings or try a fresh key.` 
      }]);
    }
    
    setIsLoading(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          className="fixed bottom-0 right-0 sm:bottom-24 sm:right-8 w-full sm:w-[420px] h-[100dvh] sm:h-[620px] bg-white sm:rounded-[32px] shadow-[0_40px_80px_-16px_rgba(0,0,0,0.15)] z-[100] flex flex-col overflow-hidden border border-slate-100"
        >
          {/* Header */}
          <div className="p-6 flex items-center justify-between border-b border-slate-50">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-600/20 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-slate-900 font-semibold text-lg leading-none font-display">AI Assistant</h3>
                <div className="flex items-center gap-1.5 mt-1.5">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-[11px] text-slate-400 font-medium">System Online</span>
                </div>
              </div>
            </div>
            <button onClick={onClose} className="p-2.5 hover:bg-slate-50 rounded-full text-slate-400 transition-all">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          {/* Messages Area */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-5 custom-scrollbar bg-[#fdfdfd]">
            {messages.map((msg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex \${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[88%] p-4 rounded-3xl text-[14px] font-sans leading-relaxed \${
                  msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-br-none shadow-lg shadow-blue-600/10' 
                    : 'bg-white text-slate-600 border border-slate-100 rounded-bl-none shadow-sm'
                }`}>
                  {msg.content}
                </div>
              </motion.div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-100 px-4 py-3 rounded-2xl rounded-bl-none flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-6 bg-white border-t border-slate-50">
            <div className="relative group">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything..."
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 pr-14 focus:outline-none focus:border-blue-600 focus:bg-white transition-all text-[14px]"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-11 h-11 bg-blue-600 text-white rounded-xl flex items-center justify-center hover:bg-blue-700 transition-all disabled:opacity-20"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ChatBot;
