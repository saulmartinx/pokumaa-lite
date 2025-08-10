import { useEffect, useState } from 'react';
import PokumaaLanding from './components/PokumaaLanding.jsx';
import Quiz from './components/Quiz.jsx';
import { CartProvider } from './contexts/CartContext.jsx';

function App() {
  const [lang, setLang] = useState('et');
  useEffect(() => {
    const saved = localStorage.getItem('pokumaa_lang');
    if (saved) setLang(saved);
  }, []);
  const toggleLang = () => {
    const next = lang === 'et' ? 'en' : 'et';
    setLang(next);
    localStorage.setItem('pokumaa_lang', next);
  };
  return (
    <CartProvider>
      <div className="p-2 text-right">
        <button onClick={toggleLang} className="text-sm underline" aria-label="Toggle language">
          {lang === 'et' ? 'EN' : 'ET'}
        </button>
      </div>
      <PokumaaLanding lang={lang} />
      <div className="py-12 px-4">
        <Quiz />
      </div>
    </CartProvider>
  );
}

export default App;

