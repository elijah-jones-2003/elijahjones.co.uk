const Projects = () => {
  // You can move this to a separate file later
  const projectList = [
    { id: 1, title: 'PROJECT_ALPHA', tech: 'React, Node.js', desc: 'Lorem ipsum...' },
    { id: 2, title: 'HARDWARE_BETA', tech: 'C++, Arduino', desc: 'Blah blah blah...' },
    { id: 3, title: 'SYSTEM_GAMMA', tech: 'Python, AWS', desc: 'Lorem et dolor...' },
  ];

  return (
    <div className="projects-container">
      <header className="projects-header">
        <h1 className="page-title">REPOSITORY // PROJECTS</h1>
        <p className="subtitle">Selected works and prototypes</p>
      </header>

      <div className="projects-grid">
        {projectList.map((project) => (
          <div key={project.id} className="project-card">
            <div className="card-browser-bar">
              <span className="dot"></span><span className="dot"></span><span className="dot"></span>
            </div>
            <div className="card-content">
              <h3>{project.title}</h3>
              <p className="project-tech">{project.tech}</p>
              <p className="project-desc">{project.desc}</p>
              <div className="card-links">
                <a href="#" className="card-link">VIEW_CODE</a>
                <a href="#" className="card-link">LIVE_DEMO</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;