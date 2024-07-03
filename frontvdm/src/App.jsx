import Home from './pages/Home'
import Catalog from './pages/Catalog'
import Cart from "./pages/Cart"
import Login from './pages/Login'
import Register from "./pages/Register"
import ProductPage from "./pages/ProductPage"
import Announcement from './components/Announcement'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Copyrights from './components/Copyrights'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AddProduct from "./pages/AddProduct"


function App() {
  return (
    <Router>
      <Announcement/>
      <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalog" element={<Catalog/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/product/:id" element={<ProductPage/>} />
      <Route path="/AddProduct" element={<AddProduct/>} />
    </Routes>
    <Footer/>
    <Copyrights/>
  </Router>
  )
}

export default App
