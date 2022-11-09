import Section from './original/Section';
import Footer from './original/Footer'

function Home(){
    return (
        <>
            <Section />
            <div className='homepage'>
                <h3>Welcome to my Portfolio built in React!</h3>
                <br></br>
                <p>Feel free to browse through some of my projects located in the Navigation bar.</p>
                <br></br>
                <p>Thanks for Stopping by!</p>
            </div>
            <Footer />
        </>
    )
}

export default Home