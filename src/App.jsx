
import PokumaaLanding from './components/PokumaaLanding.jsx';
import Quiz from './components/Quiz.jsx';
import { CartProvider } from './contexts/CartContext.jsx';

function App() {
  return (
    <CartProvider>
      <PokumaaLanding />
      <div className="py-12 px-4">
        <Quiz />
      </div>
    </CartProvider>
  );
}

export default App;
