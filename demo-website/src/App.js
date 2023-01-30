import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';

import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About'
import MenuList  from './pages/Menu';
import Contact from './pages/Contact'
import Menu from './pages/Menu';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
          <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/menu" element={<Menu/>} />
          </Routes>
          <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
