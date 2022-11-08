import './App.css';
import './css/reset.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/style.css'


import Navigation from './components/Nav';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <div className="App">
          <Navigation />
      </div>
    </HashRouter>
  );
}

export default App;
