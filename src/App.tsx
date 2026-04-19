import './App.css';
import { useState } from 'react';
import Pi from './components/Pi';
import About from './components/About';
import Projects from './components/Projects';
import elijah from './assets/elijah.jpeg';

function App() {
  const [view, setView] = useState('home');

  if (view === 'about') {
    return (
      <div className="content-page-wrapper">
        <button className="back-to-pi" onClick={() => setView('home')}>← Back</button>
        <About />
      </div>
    );
  }
  
  if (view === 'projects') {
    return (
      <div className="content-page-wrapper">
        <button className="back-to-pi" onClick={() => setView('home')}>← Back</button>
        <Projects />
      </div>
    );
  } 

  return (
    <main className="workbench">
      <div className="center-container">
        
        {/* Title spans the full width of the container */}
        <header className="portfolio-header">
          <h1>ELIJAH JONES</h1>
        </header>

        {/* This new container holds the two columns */}
        <div className="main-content-row">
          
          <section className="me-section">
            <img src={elijah} alt="Elijah Jones" className="profile-pic" />
            <div className="bio-text">
              <p>
                I'm a computer science student based in York. 
                Hardware enthusiast and developer.
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