import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import NeuralOverview from "./components/NeuralOverview"
function App() {
  return (
    <>
<main className="min-h-screen w-screen overflow-x-hidden relative" >
<Navbar/>
<Hero/>
<NeuralOverview/>
</main>
    </>
  )
}

export default App
