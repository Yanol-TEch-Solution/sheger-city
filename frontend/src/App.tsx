import { useEffect } from 'react';
import AppRoutes from './routes/AppRoutes';

declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

function App() {
  useEffect(() => {
    // Initialize Google Translate
    const initGoogleTranslate = () => {
      // Define the callback function
      window.googleTranslateElementInit = function() {
        if (window.google?.translate?.TranslateElement) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: 'en',
              includedLanguages: 'en,am,om,ti,hi,ar,fr,es',
              layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            },
            'google_translate_element'
          );
        }
      };

      // Add the script
      const existingScript = document.getElementById('google-translate-script');
      if (!existingScript) {
        const script = document.createElement('script');
        script.id = 'google-translate-script';
        script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        script.async = true;
        document.body.appendChild(script);
      }
    };

    // Wait for DOM to be ready
    if (document.readyState === 'complete') {
      initGoogleTranslate();
    } else {
      window.addEventListener('load', initGoogleTranslate);
      return () => window.removeEventListener('load', initGoogleTranslate);
    }
  }, []);

  return (
    <>
      {/* Hidden Google Translate Widget */}
      <div 
        id="google_translate_element" 
        style={{ 
          position: 'fixed',
          top: '-1000px',
          left: '-1000px',
          zIndex: -1,
          opacity: 0,
          pointerEvents: 'none'
        }}
      />
      <AppRoutes />
    </>
  );
}

export default App;
