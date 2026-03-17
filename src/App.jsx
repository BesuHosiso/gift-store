import './App.css'
import './index.css'
import { Routes, Route } from 'react-router-dom';
import React from 'react'
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Home from './pages/home.jsx';
import Products from './pages/product.jsx';
import About from './pages/about.jsx';
import Contact from './pages/contact.jsx';
import { useState } from 'react'

const App = () => {
  const [cartCount, setCartCount] = useState(0);

  const handleIncrease = () => setCartCount(prev => prev + 1);
  const handleDecrease = () => setCartCount(prev => prev - 1);

  return (
    <>
      <Header count={cartCount} />
      <Routes>
        <Route path="/" element={<Home  onAdd={handleIncrease} onRemove={handleDecrease} />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;