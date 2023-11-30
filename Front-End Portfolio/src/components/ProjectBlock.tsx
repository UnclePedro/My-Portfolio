function ProjectBlock(props: {
  title: string;
  description: string;
  img: string;
  isImgOnLeft: boolean;
  displayLine: boolean;
}) {
  return (
    <>
      <div className={'flex justify-center mt-24' + (props.isImgOnLeft ? ' flex-row-reverse' : '')}>
        <div className={'w-[550px]' + (props.isImgOnLeft ? ' ml-16' : '')}>
          <h2 className="text-5xl font-semibold">{props.title}</h2>
          <p className={'text-2xl my-8'}>{props.description}</p>
        </div>
        <div className={'flex flex-col'}>
          <img src={props.img} alt="headshot" className={'flex flex-end h-[300px] border-2 border-amber-400'} />
          <hr
            className={
              'flex justify-center border-t border-4 mt-24 border-amber-400 w-[540px]' +
              (props.displayLine ? '' : ' hidden')
            }
          />
        </div>
      </div>
    </>
  );
}

export default ProjectBlock;
