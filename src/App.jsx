import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import KitchenSink from './KitchenSink'
import RootCause from './RootCause'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kitchen-sink" element={<KitchenSink />} />
        <Route path="/root-cause" element={<RootCause />} />
      </Routes>
    </Router>
  )
}

export default App

