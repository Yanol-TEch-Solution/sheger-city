import { useEffect } from 'react';

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

interface GoogleTranslateHeaderProps {
  onLanguageChange?: (lang: string) => void;
}

export default function GoogleTranslateHeader(_props: GoogleTranslateHeaderProps) {
  useEffect(() => {
    // Remove Google Translate hash from URL
    const removeGoogleTranslateHash = () => {
      if (window.location.hash.includes('googtrans')) {
        // Store the translation preference
        const match = window.location.hash.match(/#googtrans\(([^)]+)\)/);
        if (match) {
          const langs = match[1].split('|');
          if (langs[1]) {
            localStorage.setItem('googtrans', langs[1]);
          }
        }
        // Clean the URL
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
      }
    };

    // Initialize Google Translate
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,am,om,ti,so,ar,fr,es,zh-CN',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        'google_translate_element_header'
      );
    };

    // Load script if not already loaded
    if (!document.querySelector('script[src*="translate.google.com"]')) {
      const script = document.createElement('script');
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    } else if (window.google && window.google.translate) {
      window.googleTranslateElementInit();
    }

    // Clean URL on mount and when hash changes
    removeGoogleTranslateHash();
    window.addEventListener('hashchange', removeGoogleTranslateHash);

    return () => {
      window.removeEventListener('hashchange', removeGoogleTranslateHash);
    };
  }, []);

  return (
    <div id="google_translate_element_header" className="hidden"></div>
  );
}

// Helper function to trigger Google Translate programmatically
export const triggerGoogleTranslate = (langCode: string) => {
  // Map language codes
  const langMap: Record<string, string> = {
    'en': 'en',
    'am': 'am',
    'om': 'om', 
    'ti': 'ti',
    'hi': 'hi',
    'ar': 'ar',
    'fr': 'fr',
    'es': 'es'
  };

  const targetLang = langMap[langCode] || 'en';
  
  // Set cookie for Google Translate
  const domain = window.location.hostname;
  document.cookie = `googtrans=/en/${targetLang}; path=/; domain=${domain}`;
  document.cookie = `googtrans=/en/${targetLang}; path=/`;
  
  // Reload to apply translation
  window.location.reload();
};
