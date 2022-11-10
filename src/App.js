import './css/reset.css'
import './App.css';
import './css/style.css'
import React from 'react'

import { Routes, Route, HashRouter } from 'react-router-dom'
import Header from './components/menu/Header';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Projects from './components/original/Projects'

function App() {
  return (
      <HashRouter>
        <div className="App">
          <Header />
        </div>
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='resume' element={<Resume />} />
          <Route path='contact' element={<Contact />} />
          <Route path='portfolio' element={<Projects />} />
        </Routes>
      </HashRouter>
  )
}

export default App;
