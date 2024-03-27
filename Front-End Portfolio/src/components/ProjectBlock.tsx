import Icon from './Icon';
import githubIcon from '../../src/assets/icons/github.svg';
import external from '../../src/assets/icons/external.svg';

function ProjectBlock(props: {
  title: string;
  description: string;
  img: string;
  projectLink: string;
  githubLink: string;
  isImgOnLeft: boolean;
}) {
  return (
    <>
      <div className={'flex justify-center mt-14'}>
        <div
          className={
            'w-9/12 xl:w-[1000px] font-poppins flex justify-center bg-neutral-900 p-10 rounded-lg shadow-goldenSmall hover:shadow-goldenMedium transition-shadow duration-300' +
            (props.isImgOnLeft ? ' flex-row-reverse' : '')
          }
        >
          <div className={'max-w-[550px]'}>
            <h2 className="text-3xl md:text-4xl font-semibold">{props.title}</h2>
            <p className={'text-lg md:text-2xl my-6'}>{props.description}</p>
            <div className={'flex flex-row -ml-3 w-28 md:w-36'}>
              <Icon iconImg={external} href={props.projectLink} alt={'Live Project'} />
              <Icon iconImg={githubIcon} href={props.githubLink} alt={'Github Repo'} />
            </div>
          </div>
          <div className={'hidden xl:flex flex-col' + (props.isImgOnLeft ? ' mr-12' : '')}>
            <img
              src={props.img}
              alt="headshot"
              className={'hidden xl:flex flex-end h-[300px] object-cover aspect-square rounded-lg'}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectBlock;
