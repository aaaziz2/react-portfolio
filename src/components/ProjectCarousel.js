import Carousel from 'react-bootstrap/Carousel';
import password from '../data/images/pwGenerator.png'
import weather from '../data/images/weather.png'
import team from '../data/images/team.png'


function ProjectCarousel() {
  return (
    
        <Carousel fade variant='dark'>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={password}
            alt="Password Generator"
            />
            <Carousel.Caption>
            <a href='password'> <h3>passwordGenerator</h3> </a>
            <p>
                Given a webpage with starter code including finished HTML and CSS; 
                write the needed Javascript to generate a password meeting the users requirements.
            </p>    
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={weather}
            alt="Weather Generator"
            />

            <Carousel.Caption>
            <a href='weather'><h3>weatherDashboard</h3> </a>
            <p>Create a weather dashboard using the OpenWeather API to retrieve weather data for cities.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={team}
            alt="Third slide"
            />

            <Carousel.Caption>
            <a href='team'><h3>teamProfileGenerator</h3> </a>
            <p>
            Quickly generate an HTML page with information about the team that is entered by the user 
            </p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
        
  );
}

export default ProjectCarousel;

/* 
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Team from './projects/Team';
import Password from './projects/Password';
import Weather from './projects/Weather';

<BrowserRouter>
<Routes>
            <Route path='password' element={<Password />} />
            <Route path='weather' element={<Weather />} />
            <Route path='team' element={<Team />} />
        </Routes>
    </BrowserRouter> */