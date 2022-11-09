import './css/reset.css'
import './App.css';
import './css/style.css'
import React from 'react'

import { Routes, Route, HashRouter } from 'react-router-dom'
import Header from './components/menu/Header';
import Home from './components/Home';
import About from './components/About';
import Project from './components/projects/Project';
import Team from './components/projects/Team';


function App() {
  return (
      <HashRouter>
        <div className="App">
          <Header />
        </div>
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='password' element={<Project 
                    title={"Password Generator"} 
                    href={"https://github.com/aaaziz2/passwordGenerator"} 
                    src={"https://aaaziz2.github.io/passwordGenerator/"}/>} />
            <Route path='weather' element={<Project
                    title={"Weather Dashboard"} 
                    href={"https://github.com/aaaziz2/weatherDashboard"} 
                    src={"https://aaaziz2.github.io/weatherDashboard/"}/>} />
            <Route path='team' element={<Team />} />
        </Routes>
      </HashRouter>
  );
}

export default App;
