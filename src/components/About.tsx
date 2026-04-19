const About = () => {
  return (
    <div className="about-container">
      {/* Header Section */}
      <header className="about-header">
        <h1 className="page-title">SYSTEM_SPEC: ABOUT_ME</h1>
        <p className="subtitle">Revision 1.0.4 // Elijah Jones</p>
      </header>

      <div className="about-grid">
        {/* Main Bio Section */}
        <section className="about-section">
          <h3>[01] THE_MISSION</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
          <p>
            Blah blah blah, and then I realized that programming was my passion. 
            Lorem ipsum details go here about your background and interests.
          </p>
        </section>

        {/* Technical Stack / Skills Section */}
        <section className="about-section">
          <h3>[02] TECH_STACK</h3>
          <div className="skills-grid">
            <div className="skill-category">
              <h4>FRONTEND</h4>
              <p>React, TypeScript, CSS3, Vite</p>
            </div>
            <div className="skill-category">
              <h4>BACKEND</h4>
              <p>Node.js, PostgreSQL, REST APIs</p>
            </div>
            <div className="skill-category">
              <h4>HARDWARE</h4>
              <p>Raspberry Pi, Arduino, PCB Design</p>
            </div>
          </div>
        </section>

        {/* Experience/Education Section */}
        <section className="about-section">
          <h3>[03] HISTORY_LOG</h3>
          <div className="history-item">
            <span className="date">2024 - PRESENT</span>
            <p><strong>Job Title / Degree</strong> - Lorem ipsum company name.</p>
          </div>
          <div className="history-item">
            <span className="date">2022 - 2024</span>
            <p><strong>Previous Role</strong> - Blah blah details about what I did.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;