import YoutubeEmbed from "../YoutubeEmbed"
import weather from '../../data/images/weather.png'
import password from '../../data/images/pwGenerator.png'
import github from '../../data/images/github.png'
import scheduler from '../../data/images/noonEvents.png'

function Projects(){
    return(
        <section id="projects">
        <h2 class>Portfolio</h2>
               
        <div id="projectContainer">
            <div class="card">
                <YoutubeEmbed embedId="D47S-_KNm44" />
                <br></br>
                <h3>eCommerce Backend</h3>
                <p> <br></br>
                Create a working backend for an e-commerce site given some starter code. 
                This project demonstrates my knowledge of mySQL and CRUD. 
                I utilized POSTMAN instead of Insomnia because I have more familiarity with the software.
                </p>
                <a href="https://github.com/aaaziz2/ecommerceBackEnd"><img className="githublogo" alt="github" src={github}></img></a>
            </div>

            <div class="card">
                <YoutubeEmbed embedId="qmDL1iyoAmY" />
                <br></br>
                <h3>teamProfileGenerator</h3>
                <p><br></br>
                Quickly generate an HTML page with information about the team that is entered by the user 
                </p>
                <a href="https://github.com/aaaziz2/teamProfileGenerator"><img className="githublogo" alt="github" src={github}></img></a>
            </div>
            <div class="card">
                <YoutubeEmbed embedId="baFJl1GIAY4"/>
                <br></br>
                <h3>Professional README generator</h3>
                <p> <br></br>
                Quickly generate a README file based on answers provided by the user.
                </p>
                <a href="https://github.com/aaaziz2/proREADMEgenerator"><img className="githublogo" alt="github" src={github}></img></a>
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
                
                <a href="https://github.com/aaaziz2/weatherDashboard"><img className="githublogo" alt="github" src={github}></img></a>
            </div>
            <div class="card">
                <a href="https://aaaziz2.github.io/passwordGenerator/">
                    <img src={password} alt="password generator"></img>
                </a>
                <br></br>
                
                <h3>passwordGenerator</h3>
                
                <p><br></br>
                Given a webpage with starter code including finished HTML and CSS; 
                write the needed Javascript to generate a password meeting the users requirements.
                </p>
                <a href="https://github.com/aaaziz2/passwordGenerator"><img className="githublogo" alt="github" src={github}></img></a>
            </div>
            <div class="card">
                <a href="https://aaaziz2.github.io/workDayScheduler/">
                    <img src={scheduler} alt="example schedule"></img>
                </a>
                <br></br>
                
                <h3>Work Day Scheduler</h3>
                
                <p><br></br>
                Create a simple calendar application to save events to the hour given some starter code.
                </p>
                <a href="https://github.com/aaaziz2/workDayScheduler"><img className="githublogo" alt="github" src={github}></img></a>
            </div>
        </div>    
    </section>
    )
}

export default Projects