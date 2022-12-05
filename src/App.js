import logo from './logo.svg';
import './App.css';

import 'semantic-ui-css/semantic.min.css'
import PortfolioHeader from './components/Header';
import AboutMe from './components/AboutMe'
import Technology from './components/Technology'
import Projects from './components/Projects'

function App() {
  return (
    <div>
      <PortfolioHeader />
      <AboutMe />
      <Projects />
      <Technology />
    </div>
  );
}

export default App;
