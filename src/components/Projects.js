import YoutubeEmbed from "./YoutubeEmbed"
import weather from '../data/images/weather.png'
import password from '../data/images/pwGenerator.png'
// <YoutubeEmbed embedId="D47S-_KNm44" />
// 
// 
function Projects(){
    return(
        <section id="projects">
        <h2 class>Projects</h2>
        
        <div class="promo">
            <YoutubeEmbed embedId="D47S-_KNm44" />
            <br></br>
            <h3>eCommerce Backend</h3>
            <p> <br></br>
            Create a working backend for an e-commerce site given some starter code. 
            This project demonstrates my knowledge of mySQL and CRUD. 
            I utilized POSTMAN instead of Insomnia because I have more familiarity with the software.
            </p>
        </div>
        
        <div id="projectContainer">
            <div class="card">
                <YoutubeEmbed embedId="qmDL1iyoAmY" />
                <br></br>
                <h3>teamProfileGenerator</h3>
                <p><br></br>
                Quickly generate an HTML page with information about the team that is entered by the user 
                </p>
            </div>
            <div class="card">
                <YoutubeEmbed embedId="baFJl1GIAY4"/>
                <br></br>
                <h3>Professional README generator</h3>
                <p> <br></br>
                Quickly generate a README file based on answers provided by the user.
                </p>
            </div>
            <div class="card">
                <a href="https://aaaziz2.github.io/weatherDashboard/">
                    <img src={weather} alt="weather Dashboard"></img>
                </a>
                <br></br>
                <h3>weatherDashboard</h3>
                <p>
                     <br></br>
                    Create a weather dashboard using the OpenWeather API to retrieve weather data for cities.
                </p>
            </div>
            <div class="card">
                <a href="https://aaaziz2.github.io/passwordGenerator/">
                    <img src={password} alt="man filling out forms"></img>
                </a>
                <br></br>
                <h3>passwordGenerator</h3>
                <p><br></br>
                Given a webpage with starter code including finished HTML and CSS; 
                write the needed Javascript to generate a password meeting the users requirements.
                </p>
            </div>
        </div>    
    </section>
    )
}

export default Projects