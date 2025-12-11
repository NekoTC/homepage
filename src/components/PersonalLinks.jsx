import { config } from '../config';

/**
 * PersonalLinks component - displays additional personal links
 * Material You 3 design
 */
export function PersonalLinks() {
  const links = [
    {
      label: config.links.github.username,
      url: config.links.github.url,
      icon: 'open_in_new'
    },
    {
      label: config.links.email.address,
      url: config.links.email.url,
      icon: 'mail'
    }
  ];

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-md-large p-8 shadow-lg border border-white/50">
      <h3 className="text-2xl font-roboto font-medium text-md-on-surface mb-6">
        Links
      </h3>
      
      <div className="space-y-3">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between px-4 py-3 bg-md-surface-variant/30 hover:bg-md-secondary-container rounded-md-medium transition-colors duration-200 group"
          >
            <span className="text-md-on-surface font-medium text-sm">
              {link.label}
            </span>
            <span className="material-symbols-outlined text-md-on-surface-variant text-sm group-hover:translate-x-1 transition-transform duration-200">
              {link.icon}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default PersonalLinks;
