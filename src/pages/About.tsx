import React from 'react';
import './About.css';
import elijah from '../assets/elijah.jpeg';

const About = () => {
  return (
    <div className="about-page-inner orbital-vista">
      
      {/* Background environment is rendered via CSS ::before and ::after */}

      <main className="foreground-manifest">
        <div className="card-grid">
          
          {/* Card 1: Identification */}
          <div className="tech-card personnel-badge">
            <div className="card-header"> PERSONNEL_ID // [EJ-88-04] </div>
            <div className="portrait-frame">
              <img src={elijah} alt="Elijah" className="id-photo" />
              <div className="scan-bar-vertical"></div>
            </div>
            <div className="card-footer">
              <span>UK_SEC</span> // <span>ENGR_COMMAND</span>
            </div>
          </div>

          {/* Card 2: Mission Logs */}
          <div className="tech-card data-log">
            <div className="card-header"> [ MISSION // CHRONICLE ]</div>
            <section className="dossier-text">
              <h4>// DIRECTIVE_SUMMARY</h4>
              <p>Hello!</p>
              
              <h4>// LOG_HISTORY</h4>
              <ul className="log-list">
                <li><span className="cyan-text">[2024]</span> University of York</li>
                <li><span className="cyan-text">[2022]</span> Hardware R&D // Systems Architecture</li>
              </ul>
            </section>
          </div>

          {/* Card 3: System Metrics */}
          <div className="tech-card readout-display">
            <div className="card-header"> [ APTITUDE_DISPLAY ]</div>
            
            <div className="stat-row">
              <label>VISUAL_STRUCTURE</label>
              <div className="level-bar"><div className="fill cyan-glow" style={{width: '92%'}}></div></div>
            </div>

            <div className="stat-row">
              <label>SYSTEMS_LOGIC</label>
              <div className="level-bar"><div className="fill cyan-glow" style={{width: '78%'}}></div></div>
            </div>

            <div className="stat-row">
              <label>HARDWARE_LINK</label>
              <div className="level-bar"><div className="fill cyan-glow" style={{width: '85%'}}></div></div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default About;