// import logo from './logo.svg';
import './App.css';
import React from 'react';

import 'semantic-ui-css/semantic.min.css'
import PortfolioHeader from './components/Header';
import AboutMe from './components/AboutMe';
import Technology from './components/Technology';
import Projects from './components/Projects';
import EmailMe from './components/EmailMe';

function App() {
  return (
    <div>
      <PortfolioHeader />
      <AboutMe />
      <Projects />
      <Technology />
      <EmailMe />
    </div>
  );
}

export default App;
