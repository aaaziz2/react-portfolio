import github from '../../data/images/github.png'
import Section from "../original/Section"
import Footer from "../original/Footer"

function Project(props){
    const { title, href, src } = props

    return(
        <>
            <Section />
            <div className="proj">
                <h3>{title}</h3>
                <a href={href}><img alt="github" src={github}></img></a>
                <iframe 
                height={"50%"} 
                title={title}
                src={src}></iframe>
            </div>
        <Footer />
    </>
    )
}

export default Project