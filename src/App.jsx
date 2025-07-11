import Features from "./components/Features"
import Hero from "./components/Hero"
import InteractiveNeuralUI from "./components/InteractiveNeuralUI"
import Navbar from "./components/Navbar"
import NeuralOverview from "./components/NeuralOverview"
function App() {
  return (
    <>
<main className="min-h-screen w-screen overflow-x-hidden relative" >
<Navbar/>
<Hero/>
<NeuralOverview/>
<InteractiveNeuralUI/>
<Features/>
</main>
    </>
  )
}

export default App
