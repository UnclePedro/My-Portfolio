import headshot from '../src/assets/headshot-assets/Headshot-square.png';
import tempProjectImg from '../src/assets/project-placeholder.png';
import playThisProjectImg from '../src/assets/play-this-project.png';
import appointmentProjectImg from '../src/assets/appointment-planner1.png';
import climbHarderProjectImg from '../src/assets/climb-harder-project.png';
import ProjectBlock from './components/ProjectBlock';
import AboutMeBlock from './components/AboutMeBlock';
import LandingPageBanner from './components/LandingPageBanner';
import GetInTouch from './components/GetInTouch';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { useRef } from 'react';
import VideoWall from './components/VideoWall';
import { Analytics } from '@vercel/analytics/react';
// import { SpeedInsights } from '@vercel/speed-insights/next';

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
        heading2={'Welcome to my developer portfolio'}
        landingBannerRef={landingBannerRef}
      />
      <div className={'pt-4 md:pt-20'} ref={aboutRef}>
        <AboutMeBlock
          title={'Who am I?'}
          description1={
            'I’m branching out - I’m learning to code. The past decade of my life has revolved around digital marketing, video production and photography. Now, I’m eager to grow my skillset and help build great software solutions as a programmer.'
          }
          description2={
            'This change comes as an exploration, a challenge to myself, to never stagnate! Software developer loading…'
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
            'Curate a Spotify playlist with your favourite tunes through this interactive web app that leverages the Spotify API! Give it a custom name and save it to your own Spotify account.'
          }
          title={'Play-This'}
          img={playThisProjectImg}
          isImgOnLeft={false}
          projectLink={'https://youtu.be/1hcrog90G5c'}
          githubLink={'https://github.com/UnclePedro/Spotify-Playlist-App'}
        />

        <ProjectBlock
          description={
            'Keep track of your climbing training, goals and achievements across seasons in one place. Data analysis and season history features are under development.'
          }
          title={'Climb Harder v1.0'}
          img={climbHarderProjectImg}
          isImgOnLeft={true}
          projectLink={'https://climb-harder.vercel.app'}
          githubLink={'https://github.com/UnclePedro/Climb-Harder'}
        />

        <ProjectBlock
          description={
            'Add contacts to your patient list with their details, then use the appointment form to book appointments with their now saved contact information.'
          }
          title={'Appointment Planner'}
          img={appointmentProjectImg}
          isImgOnLeft={false}
          projectLink={'https://appointment-planning.vercel.app/contacts'}
          githubLink={'https://github.com/UnclePedro/Appointment-Planner'}
        />

        <ProjectBlock
          description={
            'Ever wanted to communicate via encrypted messages? Here’s a fun app that will mash your messages, or un-mash messages from your friends.'
          }
          title={'Message Masher'}
          img={tempProjectImg}
          isImgOnLeft={true}
          projectLink={'https://message-masher.vercel.app/'}
          githubLink={'https://github.com/UnclePedro/message-masher'}
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
