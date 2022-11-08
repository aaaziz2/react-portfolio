import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { Routes, Route } from 'react-router-dom'
import Home from './Home';
import About from './About'
import Team from './projects/Team'
import Project from './projects/Project';

function Navigation() {
  return (
    <>
        <Navbar bg="blue" expand="lg">
        <Container>
            <Navbar.Brand>Aumio Aziz</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="about">About</Nav.Link>
                <NavDropdown title="Projects" id="basic-nav-dropdown">
                <NavDropdown.Item href="password">Password Generator</NavDropdown.Item>
                <NavDropdown.Item href="weather">Weather Dashboard</NavDropdown.Item>
                <NavDropdown.Item href="team">Team Profile Generator</NavDropdown.Item>
                
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>  
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
        </>
  );
}

export default Navigation;