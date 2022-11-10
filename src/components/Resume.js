
import Footer from "./original/Footer"
import Section from "./original/Section"


function Resume(){
    return(
        <>
            <Section />
            <div className="resume">
                <a href="https://drive.google.com/file/d/1xx_TriGvpHKR_wErslwBW920XnqRW0v4/view?usp=share_link">Download Resume Here</a>
                <br></br>
                <br></br>
                <h4>Proficiencies</h4>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JS</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                    <li>mySQL</li>
                    <li>mongoDB</li>
                    <li>Express</li>
                    <li>Node</li>
                </ul>
            </div>
            <Footer />
        </>
    )
}

export default Resume