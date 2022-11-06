
import './App.css';
import './css/reset.css'
import './css/style.css'
import Aside from './components/Aside';
import Header from './components/Header';
import Projects from './components/Projects';
import Section from './components/Section';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Section />
      <Aside />

      <Projects />
      <Footer />
    </div>
  );
}

export default App;
