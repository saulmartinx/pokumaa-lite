import PokumaaLanding from './components/PokumaaLanding.jsx'
import Quiz from './components/Quiz.jsx'

function App() {
  return (
    <>
      <PokumaaLanding />
      <div className="py-12 px-4">
        <Quiz />
      </div>
    </>
  )
}

export default App
