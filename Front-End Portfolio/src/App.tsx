//import { useState } from 'react';
import styles from './App.module.css';
import headshot from '../src/assets/temp-headshot.jpeg';
import tempProjectImg from '../src/assets/project-placeholder.png';
import ProjectBlock from './components/ProjectBlock';
import AboutMeBlock from './components/AboutMeBlock';

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

        <AboutMeBlock
          title={'About Me'}
          description1={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet consectetur felis quis porta. Nam eleifend accumsan ultrices.'
          }
          description2={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet consectetur felis quis porta. Nam eleifend accumsan ultrices.'
          }
          img={headshot}
        />

        <div className={'rotate-90 pl-52'}>
          <span className={'flex justify-center text-yellow-300 font-extrabold text-5xl w-screen fixed -mx-20'}>
            &gt;
          </span>
        </div>

        <div className={'mt-56'}>
          <ProjectBlock
            description={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet consectetur felis quis porta. Nam eleifend accumsan ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet consectetur felis quis porta. Nam eleifend accumsan ultrices.'
            }
            title={'Project #1'}
            img={tempProjectImg}
            isImgOnLeft={false}
          />
          <ProjectBlock
            description={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet consectetur felis quis porta. Nam eleifend accumsan ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet consectetur felis quis porta. Nam eleifend accumsan ultrices.'
            }
            title={'Project #2'}
            img={tempProjectImg}
            isImgOnLeft={true}
          />
          <ProjectBlock
            description={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet consectetur felis quis porta. Nam eleifend accumsan ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet consectetur felis quis porta. Nam eleifend accumsan ultrices.'
            }
            title={'Project #3'}
            img={tempProjectImg}
            isImgOnLeft={false}
          />
        </div>

        <div className={'rotate-90 pl-52'}>
          <span className={'flex justify-center text-yellow-300 font-extrabold text-5xl w-screen fixed -mx-20'}>
            &gt;
          </span>
        </div>

        <div className={'flex justify-center pt-56'}>
          <div className={'w-[650px] flex flex-col text-center'}>
            <h2 className="text-6xl font-semibold">Get In Touch!</h2>
            <p className={'text-2xl my-8'}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet consectetur felis quis porta. Nam
              eleifend accumsan ultrices.
            </p>
            <button className={'bg-black border border-yellow-300 h-14 w-28'}>Say Hello!</button>
          </div>
        </div>
      </body>
    </>
  );
}

export default App;
