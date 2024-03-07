import { useState, useEffect } from 'react';

function NavBar(props: {
  heading1: string;
  heading2: string;
  heading3: string;
  heading4: string;
  landingBannerRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  projectRef: React.RefObject<HTMLDivElement>;
  creativeRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}) {
  // needs to be seperated into helper function
  const scrollToSection = (elementRef: React.RefObject<HTMLDivElement>) => {
    if (elementRef.current != null) {
      window.scrollTo({
        top: elementRef.current.offsetTop - window.innerHeight * 0.1,
        behavior: 'smooth',
      });
    }
  };

  // logic for scrollToTop
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

  return (
    <div className="flex flex-row w-full justify-end align-middle p-8 mr-4 absolute">
      <img src="/src/assets/favicon-p.png" className="w-24" alt="P favicon" />
      <div className={'text-2xl font-poppins flex flex-row w-full space-x-6 justify-end mr-12'}>
        <button
          onClick={() => scrollToSection(props.aboutRef)}
          className="transition ease-in-out duration-500 hover:text-amber-400"
        >
          {props.heading1}
        </button>
        <button
          onClick={() => scrollToSection(props.projectRef)}
          className="transition ease-in-out duration-500 hover:text-amber-400"
        >
          {props.heading2}
        </button>
        <button
          onClick={() => scrollToSection(props.creativeRef)}
          className="transition ease-in-out duration-500 hover:text-amber-400"
        >
          {props.heading3}
        </button>
        <button
          onClick={() => scrollToSection(props.contactRef)}
          className="transition ease-in-out duration-500 hover:text-amber-400"
        >
          {props.heading4}
        </button>
        <div className={'fixed'}>
          {showBackToTop && (
            <button
              className="transition ease-in-out duration-500 hover:text-amber-400 ${showBackToTop ? 'opacity-100' : 'opacity-0 hidden'"
              onClick={() => scrollToSection(props.landingBannerRef)}
            >
              Back to top
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
