import Aside from './Aside';
import Header from './Header'
import Section from './Section';
import Footer from './Footer'
import ProjectCarousel from './ProjectCarousel';

function Home(){
    return (
        <>
            <Header />
            <Section />
            <Aside />
            <ProjectCarousel />
            <Footer />
        </>
    )
}

export default Home