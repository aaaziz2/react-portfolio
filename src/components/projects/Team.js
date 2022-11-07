import Section from "../original/Section"
import Footer from "../original/Footer"
import YoutubeEmbed from "../YoutubeEmbed"
import github from '../../data/images/github.png'

function Team() {
    return(
        <>
            <Section />
            <div className="proj">
                <h3>Team Profile Generator</h3>
                <a href="https://github.com/aaaziz2/teamProfileGenerator"><img alt="github" src={github}></img></a>
                <YoutubeEmbed embedId="qmDL1iyoAmY"/>
            </div>
            <Footer />
        </>
    )
}

export default Team