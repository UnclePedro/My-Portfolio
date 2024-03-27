import Icon from './Icon';
import linkedin from '../../src/assets/icons/linkedin.svg';
import instagram from '../../src/assets/icons/instagram.svg';
// import email from '../../src/assets/icons/email.svg';
import githubIcon from '../../src/assets/icons/github.svg';

function GetInTouch(props: { title: string; bodyText: string; buttonText: string }) {
  return (
    <div className={'font-poppins flex justify-center pt-48 m-12'}>
      <div className={'w-[650px] flex-col align-center text-center'}>
        <h2 className="text-5xl md:text-6xl font-semibold">
          <span className={'text-amber-400 font-extrabold'}>&gt; </span>
          {props.title}
        </h2>
        <p className={'text-lg md:text-2xl my-8'}>{props.bodyText}</p>
        <div className={'flex justify-center'}>
          <Icon iconImg={linkedin} href={'https://www.linkedin.com/in/peter-forsyth-a89590175/'} alt={'linkedIn'} />
          <Icon iconImg={instagram} href={'https://www.instagram.com/peterforsyth_/'} alt={'Instagram'} />
          {/* <Icon img={email} href={'https://www.instagram.com/peterforsyth_/'} alt={'email'} /> */}
          <Icon iconImg={githubIcon} href={'https://github.com/UnclePedro'} alt={'Github'} />
        </div>
        {/* <button className={' bg-amber-400 text-gray-800 h-14 w-32 rounded-md font-semibold'}>{props.buttonText}</button> */}
      </div>
    </div>
  );
}

export default GetInTouch;
