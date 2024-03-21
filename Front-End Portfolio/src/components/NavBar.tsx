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
      toggleHamburger();
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

    // Need to understand the below - Purpose of cleaning up the event listener
    return () => {
      window.removeEventListener('scroll', scrollToTop);
    };
  });

  // hamburger menu logic and function. This is called in scrollToSection to hide hamburger on button tap
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <div className="flex w-full p-8 absolute">
      <div className={'flex justify-between w-full'}>
        <img src="/src/assets/favicon-p.png" className="w-16 md:w-24 animation-reverse-bounce" alt="P favicon" />
        <button onClick={toggleHamburger}>
          <img
            src="/src/assets/icons/hamburger.svg"
            className="justify-end right-8 top-10 fixed w-12 bg-neutral-800 rounded-lg p-2 md:hidden"
            alt="Hamburger"
          />
        </button>
      </div>
      {hamburgerOpen && (
        <div className={'flex flex-col text-left fixed text-2xl font-poppins bg-neutral-700 rounded-xl p-4 md:hidden'}>
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

          {showBackToTop && (
            <button
              className="transition ease-in-out duration-500 hover:text-amber-400 ${showBackToTop ? 'opacity-100' : 'opacity-0 hidden'"
              onClick={() => scrollToSection(props.landingBannerRef)}
            >
              Back to top
            </button>
          )}
        </div>
      )}

      <div className={'hidden md:flex text-2xl font-poppins w-full space-x-6 justify-end mr-12'}>
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
          className="transition ease-in-out duration-500 hover:text-amber-400 "
        >
          {props.heading4}
        </button>
        <div className={'fixed'}>
          {showBackToTop && (
            <button
              className="transition ease-in-out duration-500 hover:text-amber-400 bg-neutral-700 rounded-lg py-2 px-4 //${showBackToTop ? 'opacity-100' : 'opacity-0 hidden'"
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
