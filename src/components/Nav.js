import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home';
import About from './About'
import Password from './projects/Password';
import Weather from './projects/Weather';
import Team from './projects/Team'

function Navigation() {
  return (
    <BrowserRouter>
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
            <Route path='password' element={<Password />} />
            <Route path='weather' element={<Weather />} />
            <Route path='team' element={<Team />} />
        </Routes> 
    </BrowserRouter>
  );
}

export default Navigation;