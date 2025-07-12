import Features from "./components/Features"
import Hero from "./components/Hero"
import InteractiveNeuralUI from "./components/InteractiveNeuralUI"
import Navbar from "./components/Navbar"
import NeuralOverview from "./components/NeuralOverview"
import UseCases from "./components/UseCases"
function App() {
  return (
    <>
<main className="min-h-screen w-screen overflow-x-hidden relative" >
<Navbar/>
<Hero/>
<NeuralOverview/>
<InteractiveNeuralUI/>
<Features/>
<UseCases/>
</main>
    </>
  )
}

export default App
