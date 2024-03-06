//import { useState } from 'react';
//import styles from './App.module.css';
import headshot from '../src/assets/temp-headshot.jpeg';
import tempProjectImg from '../src/assets/project-placeholder.png';
import ProjectBlock from './components/ProjectBlock';
import AboutMeBlock from './components/AboutMeBlock';
import LandingPageBanner from './components/LandingPageBanner';
import GetInTouch from './components/GetInTouch';
// import ArrowElement from './components/ArrowElement';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { useRef } from 'react';
function App() {
  // refs for NavBar scroll feature
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  // const creativeRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <>
      <NavBar
        heading1={'About Me'}
        heading2={'Code'}
        heading3={'Creative'}
        heading4={'Contact'}
        aboutRef={aboutRef}
        projectRef={projectRef}
        contactRef={contactRef}
      />

      <LandingPageBanner heading1={"Hi, I'm Peter"} heading2={'Welcome to my front-end portfolio'} />
      {/* <div className={'-mt-[120px]'}>
        <ArrowElement />
      </div> */}

      <AboutMeBlock
        title={'About Me'}
        description1={
          'I’m branching out - I’m learning to code. The past decade of my life has revolved around digital marketing, video production and photography. Now, I’m eager to grow my skillset and help build great tech solutions as a programmer.'
        }
        description2={
          'This change comes as an exploration, a challenge to myself, to never stagnate! Front-end developer loading…'
        }
        img={headshot}
        aboutRef={aboutRef}
      />

      <div className={'mt-56'} ref={projectRef}>
        <div className={'text-6xl font-semibold font-poppins flex justify-center'}>
          <h1>
            <span className={'text-amber-400 font-extrabold'}>&gt; </span>Projects
          </h1>
        </div>

        <ProjectBlock
          description={
            'Curate a Spotify playlist with your favourite tunes through this interactive web app! Give it a custom name and save it to your own Spotify account.'
          }
          title={'Play-This'}
          img={tempProjectImg}
          isImgOnLeft={false}
          displayLine={true}
        />

        <ProjectBlock
          description={
            'Ever wanted to communicate via encrypted messages? Here’s a fun project that will mash your messages, or un-mash messages from your friends.'
          }
          title={'Message Masher'}
          img={tempProjectImg}
          isImgOnLeft={true}
          displayLine={true}
        />
        <ProjectBlock
          description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet consectetur felis quis porta. Nam eleifend accumsan ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet consectetur felis quis porta. Nam eleifend accumsan ultrices.'
          }
          title={'Find Your Hat'}
          img={tempProjectImg}
          isImgOnLeft={false}
          displayLine={false}
        />
      </div>

      <div className="mb-[300px] mt-[150px]">
        <GetInTouch
          title={'Get in touch'}
          bodyText={'If you’ve found my work interesting and would like to chat further, don’t hesitate.'}
          buttonText={'Say Hello!'}
          contactRef={contactRef}
        />
      </div>

      <Footer />
    </>
  );
}

export default App;
