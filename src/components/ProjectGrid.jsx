import { config } from '../config';

/**
 * ProjectGrid component - displays projects with heading + small cards grid
 * No large card wrapper, follows new single-column design
 */
export function ProjectGrid() {
  return (
    <section className="content-section">
      <h2 className="section-heading">Operations <span className="section-badge">Active</span></h2>
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
