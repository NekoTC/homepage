import { config } from '../config';

/**
 * ProjectGrid component - displays projects in a grid layout
 * Material You 3 design
 */
export function ProjectGrid() {
  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-md-large p-8 shadow-lg border border-white/50">
      <div className="flex items-center gap-3 mb-6">
        <h3 className="text-2xl font-roboto font-medium text-md-primary">
          Operations
        </h3>
        <span className="px-3 py-1 bg-md-secondary-container text-md-secondary text-xs font-medium rounded">
          Active
        </span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {config.projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-md-background hover:bg-md-secondary-container rounded-md-medium p-6 transition-all duration-300 group border border-transparent hover:border-md-primary/20"
          >
            <h4 className="text-lg font-medium text-md-on-surface mb-2 group-hover:text-md-primary transition-colors">
              {project.name}
            </h4>
            <p className="text-md-on-surface-variant text-sm mb-3">
              {project.description}
            </p>
            {project.tags && project.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 bg-md-surface-variant text-md-on-surface-variant text-xs rounded-md-small"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}

export default ProjectGrid;
