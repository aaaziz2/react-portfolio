import profile from '../../data/images/profile.jpg'

function Aside() {
    return(
        <aside id="aboutme">
            <h2>About Me</h2>
            <div id="about">
                <img id="profile" src={profile} alt="Aumio"></img>
                <p>
                    I am a Full Stack Developer.<br></br>
                    This is my first Portfolio built in React.<br></br>
                    Future NU Coding Bootcamp Grad.
                </p>
            </div>
        </aside>
    )
}

export default Aside