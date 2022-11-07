import Section from "../original/Section"
import Footer from "../original/Footer"

function Password() {
    return(
        <>
            <Section />
            <div className="proj">
                <h3>Password Generator</h3>
                <a href="https://github.com/aaaziz2/passwordGenerator">Github</a>
                <iframe  
                title="password generator"
                src="https://aaaziz2.github.io/passwordGenerator/"></iframe>
            </div>
            <Footer />
        </>
    )
}

export default Password