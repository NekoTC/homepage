import { config } from '../config';

/**
 * ProjectGrid component - displays projects in a grid layout
 * Uses original MD3 card styling
 */
export function ProjectGrid() {
  return (
    <section className="md-card">
      <h2 className="section-title">Operations <span>Active</span></h2>
      <div className="project-grid">
        {config.projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="project-item"
          >
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default ProjectGrid;
