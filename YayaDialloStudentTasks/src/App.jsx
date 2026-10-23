import { Routes, Route } from 'react-router-dom'
import Navbarre from './components/Navbarre'
import Home from './pages/Home'
import Tasks from './pages/Tasks'
import About from './pages/About'

function App() {
  return (
    <>
      {/* La barre de navigation est visible sur les trois pages */}
      <Navbarre />
      <main className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </>
  )
}

export default App
