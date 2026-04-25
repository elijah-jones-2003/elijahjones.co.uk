import './App.css';
import { useState } from 'react';
import Pi from './components/Pi';
import About from './pages/About';
import Projects from './pages/Projects';
import elijah from './assets/elijah.jpeg';

function App() {
  const [view, setView] = useState('home');

  if (view === 'projects') {
    return (
      <div className="full-theme-wrapper terminal-theme">
        <button className="terminal-exit-btn" onClick={() => setView('home')}>
          RETURN_TO_BENCH
        </button>
        <Projects />
      </div>
    );
  }

  if (view === 'about') {
    return (
      <div className="full-theme-wrapper about-theme">
        <button className="coruscant-exit-btn" onClick={() => setView('home')}>
          Return to the Bench
        </button>
        <About />
      </div>
    );
  }
  return (
    <main className="workbench">
      <div className="center-container">
        <header className="portfolio-header">
          <h1>ELIJAH JONES</h1>
        </header>
        <div className="main-content-row">
          <section className="me-section">
            <img src={elijah} alt="Elijah Jones" className="profile-pic" />
            <div className="bio-text">
              <p>
                Hello and welcome to my website! <br /> 
                My name is Elijah and I'm a computer science student based in York.
              </p>
            </div>
          </section>
          <section className="pi-section">
            <div className="pi-wrapper">
              <Pi onNavigate={(v) => setView(v)} />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default App;