import './Projects.css';

const projects = [
  { name: 'home_server.config', status: 'Ongoing', date: 'JAN-2024', type: 'Networking' },
  { name: 'rag_note_analiser.py', status: 'Complete', date: 'MAR-2024', type: 'AI' },
  { name: 'teaching_ai_to_drive.py', status: 'Legacy', date: 'APR-2024', type: 'AI' },
  { name: 'portfolio.html', status: 'ongoing', date: 'idk', type: 'frontend' },
  { name: 'allycam.py', status: 'Complete', date: 'idk', type: 'Hardware' },
];

const Projects = () => {
  return (
    <div className="crt-container">
      {/* The CRT Screen effects */}
      <div className="scanlines"></div>
      <div className="terminal-screen">
        <header className="terminal-header">
          <p>ELI_OS v0.0.4 - SYSTEM DIRECTORY</p>
          <p>Copyright (C) 2003, Jones Industries</p>
          <div className="terminal-divider-repeater"></div>
        </header>

        <div className="directory-listing">
          <div className="dir-row header">
            <span>NAME</span>
            <span>TYPE</span>
            <span>STATUS</span>
            <span>DATE</span>
          </div>
          
          {projects.map((project, index) => (
            <div key={index} className="dir-row project-entry">
              <span className="project-name">{project.name}</span>
              <span>{project.type}</span>
              <span>{project.status}</span>
              <span>{project.date}</span>
            </div>
          ))}
        </div>

        <div className="terminal-footer">
          <p>{projects.length} File(s)    6.7kb free</p>
          <p className="cursor-line">C:\PROJECTS\ <span className="blink">_</span></p>
        </div>
      </div>
    </div>
  );
};

export default Projects;