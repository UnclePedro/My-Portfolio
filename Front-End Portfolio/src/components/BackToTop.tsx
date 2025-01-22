import { useState, useEffect } from 'react';

function BackToTop() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const scrollToTop = () => {
      if (window.scrollY > 700) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', scrollToTop);

    // *** Need to understand the below - Clean up the event listener
    return () => {
      window.removeEventListener('scroll', scrollToTop);
    };
  });

  return <div className={'fixed'}>{showBackToTop && <button>Back to top</button>}</div>;
}

export default BackToTop;
