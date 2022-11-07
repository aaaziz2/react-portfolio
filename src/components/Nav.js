import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home';
import About from './About'
import Team from './projects/Team'
import Project from './projects/Project';

function Navigation() {
  return (
    <BrowserRouter>
        <Navbar bg="blue" expand="lg">
        <Container>
            <Navbar.Brand>Aumio Aziz</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="react-porfolio">Home</Nav.Link>
                <Nav.Link href="react-porfolio/about">About</Nav.Link>
                <NavDropdown title="Projects" id="basic-nav-dropdown">
                <NavDropdown.Item href="react-porfolio/password">Password Generator</NavDropdown.Item>
                <NavDropdown.Item href="react-porfolio/weather">Weather Dashboard</NavDropdown.Item>
                <NavDropdown.Item href="react-porfolio/team">Team Profile Generator</NavDropdown.Item>
                
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>  
        <Routes>
            <Route path='react-porfolio' element={<Home />} />
            <Route path='react-porfolio/about' element={<About />} />
            <Route path='react-porfolio/password' element={<Project 
                    title={"Password Generator"} 
                    href={"https://github.com/aaaziz2/passwordGenerator"} 
                    src={"https://aaaziz2.github.io/passwordGenerator/"}/>} />
            <Route path='react-porfolio/weather' element={<Project
                    title={"Weather Dashboard"} 
                    href={"https://github.com/aaaziz2/weatherDashboard"} 
                    src={"https://aaaziz2.github.io/weatherDashboard/"}/>} />
            <Route path='react-porfolio/team' element={<Team />} />
        </Routes> 
    </BrowserRouter>
  );
}

export default Navigation;