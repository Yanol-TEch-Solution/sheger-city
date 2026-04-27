import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GoogleGenerativeAI } from '@google/generative-ai';

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

interface Message {
  role: 'user' | 'model';
  content: string;
}

interface ChatBotProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const ChatBot = ({ isOpen: externalIsOpen, onClose: externalOnClose }: ChatBotProps) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;

  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', content: "Hello! I'm the Sheger City AI Assistant. How can I help you today?" }
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
        console.error(`Config failed (${config.model} @ ${config.version}):`, error);
        lastError = error.message || "Unknown error";
        
        if (error.message?.includes("403") || error.message?.includes("API key")) {
          break; 
        }
      }
    }

    if (!success) {
      setMessages(prev => [...prev, { 
        role: 'model', 
        content: `Connection failed after multiple attempts. Last error: ${lastError}. This usually happens if the 'Generative Language API' is not enabled for this specific key's project in Google Cloud Console. Please check your settings or try a fresh key.` 
      }]);
    }
    
    setIsLoading(false);
  };

  const toggleOpen = () => {
    if (externalOnClose && externalIsOpen) {
      externalOnClose();
    } else {
      setInternalIsOpen(!internalIsOpen);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-4">
        {/* Chat window */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="w-[calc(100vw-3rem)] sm:w-[400px] max-w-[400px] h-[500px] max-h-[calc(100vh-8rem)] bg-white rounded-3xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden mb-2"
          >
            {/* Header */}
            <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-400/30">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-sm">Sheger Assistant</h3>
                  <p className="text-[10px] text-blue-400 font-medium">AI Powered • Online</p>
                </div>
              </div>
              <button 
                onClick={() => externalOnClose ? externalOnClose() : setInternalIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-xl transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-grow overflow-y-auto p-4 space-y-4 bg-slate-50/50"
            >
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                    msg.role === 'user' 
                      ? 'bg-blue-600 text-white rounded-tr-none' 
                      : 'bg-white text-slate-700 shadow-sm border border-slate-100 rounded-tl-none'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 rounded-tl-none">
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <form 
              onSubmit={(e) => { e.preventDefault(); handleSend(); }}
              className="p-4 bg-white border-t border-slate-100 flex gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-grow bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="p-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:opacity-50 transition-colors shadow-lg shadow-blue-600/20"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
          </motion.div>
        )}

        {/* Trigger Button - Only show if not controlled externally */}
        {externalIsOpen === undefined && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleOpen}
            className="w-14 h-14 bg-slate-900 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-slate-800 transition-colors relative group"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            )}
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-white animate-pulse" />
          </motion.button>
        )}
      </div>
    </AnimatePresence>
  );
};

export default ChatBot;
