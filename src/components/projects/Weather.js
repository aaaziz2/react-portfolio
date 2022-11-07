import Section from "../original/Section"
import Footer from "../original/Footer"

function Weather() {
    return(
        <>
            <Section />
            <div className="proj">
                <h3>Weather Dashboard</h3>
                <a href="https://github.com/aaaziz2/weatherDashboard">Github</a>
                <iframe  
                title="Weather Dashboard"
                src="https://aaaziz2.github.io/weatherDashboard/"></iframe>
            </div>
            <Footer />
        </>
    )
}

export default Weather