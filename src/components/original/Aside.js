import profile from '../../data/images/profile.jpg'

function Aside() {
    return(
        <aside id="aboutme">
            <h2>About Me</h2>
            <div id="about">
                <img id="profile" src={profile} alt="Aumio"></img>
                <p>
                    I am an aspiring Developer.<br></br>
                    This is a rough draft of a potential Portfolio.<br></br>
                    Hopefully I'll have some of these projects soon.<br></br>
                    Future NU Coding Bootcamp Grad.
                </p>
            </div>
        </aside>
    )
}

export default Aside