import headshot from '../src/assets/headshot-assets/Headshot-square.png';
import tempProjectImg from '../src/assets/project-placeholder.png';
import playThisProjectImg from '../src/assets/play-this-project.png';
import climbHarderProjectImg from '../src/assets/climb-harder-project.png';
import mindfulMemosProjectImg from '../src/assets/mindful-memos-img.png';
import ProjectBlock from './components/ProjectBlock';
import AboutMeBlock from './components/AboutMeBlock';
import LandingPageBanner from './components/LandingPageBanner';
import GetInTouch from './components/GetInTouch';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { useRef } from 'react';
import VideoWall from './components/VideoWall';
import { Analytics } from '@vercel/analytics/react';

function App() {
  // refs for NavBar scroll feature
  const landingBannerRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const creativeRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <>
      <NavBar
        heading1={'About'}
        heading2={'Code'}
        heading3={'Creative'}
        heading4={'Contact'}
        landingBannerRef={landingBannerRef}
        aboutRef={aboutRef}
        projectRef={projectRef}
        creativeRef={creativeRef}
        contactRef={contactRef}
      />

      <LandingPageBanner
        heading1={"Hi, I'm Peter"}
        heading2={'Welcome to my programming portfolio'}
        landingBannerRef={landingBannerRef}
      />
      <div className={'pt-4 md:pt-20'} ref={aboutRef}>
        <AboutMeBlock
          title={'Who am I?'}
          description1={
            'I thought you’d never ask! I’m a Full Stack Developer passionate about building elegant software solutions for real-world problems. I believe finding a better way to do something through code is one of life’s (not so) simple pleasures.'
          }
          description2={
            'Enjoy my programming projects, along with a glimpse at my digital marketing and video production work.'
          }
          img={headshot}
        />
      </div>

      <div className={'mt-24 md:mt-56'} ref={projectRef}>
        <div className={'text-5xl md:text-6xl font-semibold font-poppins flex justify-center'}>
          <h1>
            <span className={'text-amber-400 font-extrabold'}>&gt; </span>Projects
          </h1>
        </div>

        <ProjectBlock
          description={
            'Keep track of your climbing training, goals and achievements across seasons in one place. Data analysis features are under development.'
          }
          title={'Climb Harder'}
          img={climbHarderProjectImg}
          isImgOnLeft={false}
          projectLink={'https://climb-harder.peterforsyth.dev'}
          githubLink={'https://github.com/UnclePedro/Climb-Harder'}
        />

        <ProjectBlock
          description={
            'An elegant full stack web app to read and curate thoughts worth sharing. Created with React, TypeScript, Node.js, Express.js and PostgreSQL.'
          }
          title={'Mindful Memos'}
          img={mindfulMemosProjectImg}
          isImgOnLeft={true}
          projectLink={'https://mindful-memos.peterforsyth.dev'}
          githubLink={'https://github.com/UnclePedro/Mindful-Memos'}
        />

        <ProjectBlock
          description={
            'Curate a Spotify playlist with your favourite tunes through this interactive web app that leverages the Spotify API! Give it a custom name and save it to your own Spotify account.'
          }
          title={'Play-This'}
          img={playThisProjectImg}
          isImgOnLeft={false}
          projectLink={'https://youtu.be/1hcrog90G5c'}
          githubLink={'https://github.com/UnclePedro/Spotify-Playlist-App'}
        />
      </div>

      <div className={'mt-32 md:mt-56'} ref={creativeRef}>
        <div className={'text-5xl mb-8 md:text-6xl font-semibold font-poppins flex justify-center'}>
          <h1>
            <span className={'text-amber-400 font-extrabold'}>&gt; </span>Creative
          </h1>
        </div>
        <VideoWall
          url1={'https://youtu.be/KikH6OoOjQM'}
          url2={'https://youtu.be/6e62HmtnXeA'}
          url3={'https://youtu.be/MJDwShoXEKo'}
        />
      </div>

      <div className="mb-[300px] mt-[100px]" ref={contactRef}>
        <GetInTouch
          title={'My other things'}
          bodyText={'If you’d like to chat on LinkedIn, peruse my photography or peep my code, jump into the links.'}
          buttonText={'Say Hello!'}
        />
      </div>

      <Footer />
      <Analytics />
      {/* <SpeedInsights /> */}
    </>
  );
}

export default App;
