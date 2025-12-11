import { useEffect, useRef, useState } from 'react';
import { config } from '../config';

/**
 * ActivitySection component - displays skills/capabilities with animated progress bars
 * Material You 3 design
 */
export function ActivitySection() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = ref.current;
    
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div 
      ref={ref}
      className="bg-white/80 backdrop-blur-xl rounded-md-large p-8 shadow-lg border border-white/50"
    >
      <div className="flex items-center gap-3 mb-6">
        <h3 className="text-2xl font-roboto font-medium text-md-primary">
          Capabilities
        </h3>
        <span className="px-3 py-1 bg-md-secondary-container text-md-secondary text-xs font-medium rounded">
          Synced
        </span>
      </div>
      
      <div className="space-y-5">
        {config.skills.map((skill, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-md-on-surface font-medium">
                {skill.name}
              </span>
              <span className="text-md-on-surface-variant text-sm">
                {skill.level}%
              </span>
            </div>
            <div className="h-2.5 bg-md-surface-variant rounded-full overflow-hidden">
              <div
                className="h-full bg-md-primary rounded-full transition-all duration-1000 ease-out"
                style={{
                  width: isVisible ? `${skill.level}%` : '0%',
                  transitionDelay: `${index * 100}ms`
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivitySection;
