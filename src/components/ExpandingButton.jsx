import { useState } from 'react';

/**
 * ExpandingButton component - A button that expands to show additional content
 * Material You 3 design with smooth transitions
 * @param {Object} props
 * @param {string} props.icon - Material Symbol icon name
 * @param {string} props.label - Button label
 * @param {string} props.href - Link URL
 * @param {React.ReactNode} props.children - Additional content to show when expanded
 */
export function ExpandingButton({ icon, label, href, children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = (e) => {
    if (children) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div className="w-full">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="flex items-center justify-between w-full px-5 py-3 bg-md-background hover:bg-md-primary hover:text-md-on-primary text-md-on-surface rounded-full transition-all duration-300 font-medium group"
      >
        <div className="flex items-center gap-3">
          {icon && (
            <span className="material-symbols-outlined text-xl">
              {icon}
            </span>
          )}
          <span>{label}</span>
        </div>
        {children && (
          <span className={`material-symbols-outlined text-xl transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
            expand_more
          </span>
        )}
      </a>
      
      {children && (
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isExpanded ? 'max-h-96 mt-2' : 'max-h-0'
          }`}
        >
          <div className="px-5 py-3 bg-md-surface-variant/50 rounded-md-medium">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

export default ExpandingButton;
