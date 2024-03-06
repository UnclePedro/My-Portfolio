import { useRef } from 'react';

function NavBar(props: { heading1: string; heading2: string; heading3: string; heading4: string }) {
  const aboutRef = useRef<HTMLDivElement>(null);

  const executeScroll = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-row w-full justify-end align-middle p-8 mr-4 absolute">
      <img src="/src/assets/favicon-p.png" className="w-24" alt="P favicon" />
      <div className={'text-2xl font-poppins flex flex-row w-full space-x-6 justify-end mr-12'}>
        <button
          onClick={() => (window.location.pathname = 'about')}
          className="transition ease-in-out duration-500 hover:text-amber-400"
        >
          {props.heading1}
        </button>
        <button
          onClick={() => (window.location.pathname = 'code')}
          className="transition ease-in-out duration-500 hover:text-amber-400"
        >
          {props.heading2}
        </button>
        <button
          onClick={() => (window.location.pathname = 'creative')}
          className="transition ease-in-out duration-500 hover:text-amber-400"
        >
          {props.heading3}
        </button>
        <button
          onClick={() => (window.location.pathname = 'contact')}
          className="transition ease-in-out duration-500 hover:text-amber-400"
        >
          {props.heading4}
        </button>
      </div>
    </div>
  );
}

export default NavBar;
