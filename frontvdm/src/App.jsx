import Home from './pages/Home'
import Catalog from './pages/Catalog'
import Announcement from './components/Announcement'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Announcement/>
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalog" element={<Catalog/>} />
    </Routes>
    <Footer/>
  </Router>
  )
}

export default App
