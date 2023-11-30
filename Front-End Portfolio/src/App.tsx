//import { useState } from 'react';
//import styles from './App.module.css';
import headshot from '../src/assets/temp-headshot.jpeg';
import tempProjectImg from '../src/assets/project-placeholder.png';
import ProjectBlock from './components/ProjectBlock';
import AboutMeBlock from './components/AboutMeBlock';
import LandingPageBanner from './components/LandingPageBanner';
import GetInTouch from './components/GetInTouch';

// need to fix font weight issues

function App() {
  return (
    <>
      <LandingPageBanner heading1={'Hi, Im Peter'} heading2={'Welcome to my front-end portfolio.'} />

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

      <GetInTouch
        title={'Get in touch!'}
        bodyText={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet consectetur felis quis porta. Nam eleifend accumsan ultrices.'
        }
        buttonText={'Say Hello!'}
      />
    </>
  );
}

export default App;
