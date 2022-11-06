
import './App.css';
import './css/reset.css'
import './css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Aside from './components/Aside';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer'
import ProjectCarousel from './components/ProjectCarousel';

function App() {
  return (
    <div className="App">
      <Header />
      <Section />
      <Aside />
      <ProjectCarousel />
      <Footer />
    </div>
  );
}

export default App;
