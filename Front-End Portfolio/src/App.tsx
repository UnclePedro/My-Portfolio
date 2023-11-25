//import { useState } from 'react';
import styles from './App.module.css';
import headshot from '/Users/peter/Documents/VS Code Files/231125 - Front-End Portfolio/Front-End Portfolio/src/assets/temp-headshot.jpeg';
import tempProject from '/Users/peter/Documents/VS Code Files/231125 - Front-End Portfolio/Front-End Portfolio/src/assets/project-placeholder.png';

// need to fix font weight issues

function App() {
  return (
    <>
      <header className={'flex flex-col justify-center items-center p-4 w-full h-screen'}>
        <h1 className={styles['app-heading']}>
          Hi, I'm Peter<span className={'text-yellow-300'}>.</span>
        </h1>
        <p className={'text-4xl'}>
          <span className={'text-yellow-300 font-extrabold animate-pulse'}>&gt;</span> Welcome to my front-end portfolio
        </p>
      </header>

      <body>
        <div className={'rotate-90 pl-10'}>
          <span className={'flex justify-center text-yellow-300 font-extrabold text-5xl w-screen fixed -mx-20'}>
            &gt;
          </span>
        </div>

        <div className={'flex justify-center'}>
          <div className={'w-[650px]'}>
            <h2 className="text-6xl font-semibold">
              <span className={'text-yellow-300 font-extrabold'}>&gt;</span> About Me
            </h2>
            <p className={'text-3xl my-8 font-regular'}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet consectetur felis quis porta. Nam
              eleifend accumsan ultrices.
            </p>
            <p className={'text-2xl my-8'}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet consectetur felis quis porta. Nam
              eleifend accumsan ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet
              consectetur felis quis porta. Nam eleifend accumsan ultrices.
            </p>
            <div className={'flex'}>
              <ol className={'text-2xl my-8'}>
                <li>
                  <span className={'text-yellow-300 font-extrabold'}>&gt;</span> JavaScript
                </li>
                <li>
                  <span className={'text-yellow-300 font-extrabold'}>&gt;</span> React
                </li>
                <li>
                  <span className={'text-yellow-300 font-extrabold'}>&gt;</span> Node.js
                </li>
              </ol>
              <ol className={'text-2xl my-8 inline-flex flex-col pl-20'}>
                <li>
                  <span className={'text-yellow-300 font-extrabold'}>&gt;</span> TypeScript
                </li>
                <li>
                  <span className={'text-yellow-300 font-extrabold'}>&gt;</span> Tailwind
                </li>
                <li>
                  <span className={'text-yellow-300 font-extrabold'}>&gt;</span> HTML
                </li>
              </ol>
            </div>
          </div>
          <img
            src={headshot}
            alt="headshot"
            className={'flex flex-end h-[520px] ml-16 mt-24 border-2 border-amber-400'}
          />
        </div>

        <div className={'rotate-90 pl-52'}>
          <span className={'flex justify-center text-yellow-300 font-extrabold text-5xl w-screen fixed -mx-20'}>
            &gt;
          </span>
        </div>

        <div>
          <div className={'flex justify-center mt-56'}>
            <div className={'w-[550px]'}>
              <h2 className="text-5xl font-semibold">Project #1</h2>
              <p className={'text-2xl my-8'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet consectetur felis quis porta.
                Nam eleifend accumsan ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet
                consectetur felis quis porta. Nam eleifend accumsan ultrices.
              </p>
            </div>
            <div className={'flex'}>
              <img
                src={tempProject}
                alt="headshot"
                className={'flex flex-end h-[300px] ml-16 border-2 border-amber-400'}
              />
            </div>
          </div>
          <hr className={'flex justify-center border-t border-4 mt-24 ml-[20%] border-amber-400 w-[540px]'} />
        </div>

        <div>
          <div className={'flex justify-center flex-row-reverse mt-36'}>
            <div className={'w-[550px] ml-[120px]'}>
              <h2 className="text-5xl font-semibold">Project #2</h2>
              <p className={'text-2xl my-8'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet consectetur felis quis porta.
                Nam eleifend accumsan ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet
                consectetur felis quis porta. Nam eleifend accumsan ultrices.
              </p>
            </div>
            <div className={'flex'}>
              <img
                src={tempProject}
                alt="headshot"
                className={'flex flex-end h-[300px] ml-16 border-2 border-amber-400'}
              />
            </div>
          </div>
          <hr className={'flex justify-center border-t border-4 mt-24 ml-[54%] border-amber-400 w-[540px]'} />
        </div>

        <div>
          <div className={'flex justify-center mt-36'}>
            <div className={'w-[550px]'}>
              <h2 className="text-5xl font-semibold">Project #3</h2>
              <p className={'text-2xl my-8'}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet consectetur felis quis porta.
                Nam eleifend accumsan ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet
                consectetur felis quis porta. Nam eleifend accumsan ultrices.
              </p>
            </div>
            <div className={'flex'}>
              <img
                src={tempProject}
                alt="headshot"
                className={'flex flex-end h-[300px] ml-16 border-2 border-amber-400'}
              />
            </div>
          </div>
        </div>

        <div className={'rotate-90 pl-52'}>
          <span className={'flex justify-center text-yellow-300 font-extrabold text-5xl w-screen fixed -mx-20'}>
            &gt;
          </span>
        </div>
      </body>
    </>
  );
}

export default App;
