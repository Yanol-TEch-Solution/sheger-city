import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

export default function GoogleTranslate() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Clean up Google Translate URL parameters
    const cleanUrl = () => {
      const url = new URL(window.location.href);
      if (url.hash.includes('#googtrans')) {
        // Remove the hash parameter
        url.hash = '';
        window.history.replaceState({}, '', url.pathname + url.search);
      }
    };

    // Define the initialization function
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,am,om,ti,so,ar,fr,es,zh-CN', // English, Amharic, Oromo, Tigrinya, Somali, Arabic, French, Spanish, Chinese
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          autoDisplay: false,
        },
        'google_translate_element'
      );
    };

    // Load the Google Translate script
    const script = document.createElement('script');
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);

    // Clean URL on mount
    cleanUrl();

    return () => {
      // Cleanup
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="flex items-center gap-2">
      <svg className="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
      <div id="google_translate_element" className="inline-block"></div>
    </div>
  );
}
