//import { useState } from 'react';
//import styles from './App.module.css';
import headshot from '../src/assets/temp-headshot.jpeg';
import tempProjectImg from '../src/assets/project-placeholder.png';
import ProjectBlock from './components/ProjectBlock';
import AboutMeBlock from './components/AboutMeBlock';
import LandingPageBanner from './components/LandingPageBanner';
import GetInTouch from './components/GetInTouch';
import ArrowElement from './components/ArrowElement';
import Footer from './components/Footer';

// need to fix font weight issues

function App() {
  return (
    <>
      <LandingPageBanner heading1={"Hi, I'm Peter"} heading2={'Welcome to my front-end portfolio'} />
      <div className={'-mt-[120px]'}>
        <ArrowElement />
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

      <div>
        <ArrowElement />
      </div>

      <div className={'mt-56'}>
        <ProjectBlock
          description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet consectetur felis quis porta. Nam eleifend accumsan ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet consectetur felis quis porta. Nam eleifend accumsan ultrices.'
          }
          title={'Project #1'}
          img={tempProjectImg}
          isImgOnLeft={false}
          displayLine={true}
        />
        <ProjectBlock
          description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet consectetur felis quis porta. Nam eleifend accumsan ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet consectetur felis quis porta. Nam eleifend accumsan ultrices.'
          }
          title={'Project #2'}
          img={tempProjectImg}
          isImgOnLeft={true}
          displayLine={true}
        />
        <ProjectBlock
          description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet consectetur felis quis porta. Nam eleifend accumsan ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet consectetur felis quis porta. Nam eleifend accumsan ultrices.'
          }
          title={'Project #3'}
          img={tempProjectImg}
          isImgOnLeft={false}
          displayLine={false}
        />
      </div>
      {/* 
      <div className="h-8">
        <ArrowElement />
      </div> */}

      <div className="mb-[300px] mt-[150px]">
        <GetInTouch
          title={'Get in touch'}
          bodyText={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet consectetur felis quis porta. Nam eleifend accumsan ultrices.'
          }
          buttonText={'Say Hello!'}
        />
      </div>

      <Footer />
    </>
  );
}

export default App;
