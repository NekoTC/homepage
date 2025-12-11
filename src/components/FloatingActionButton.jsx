import { useState, useEffect } from 'react';

/**
 * FloatingActionButton component - scroll to top button
 * Material You 3 design with smooth animations
 */
export function FloatingActionButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-md-primary hover:bg-md-primary/90 text-md-on-primary rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
          aria-label="Scroll to top"
        >
          <span className="material-symbols-outlined text-2xl group-hover:-translate-y-0.5 transition-transform duration-300">
            arrow_upward
          </span>
        </button>
      )}
    </>
  );
}

export default FloatingActionButton;
