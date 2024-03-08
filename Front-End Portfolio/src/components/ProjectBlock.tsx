function ProjectBlock(props: {
  title: string;
  description: string;
  img: string;
  isImgOnLeft: boolean;
  displayLine: boolean;
}) {
  return (
    <>
      <div className={'flex justify-center mt-14'}>
        <div
          className={
            'w-9/12 xl:w-[1000px] font-poppins flex justify-center bg-neutral-900 p-10 rounded-lg shadow-[rgb(251,191,36,0.5)_2px_2px_10px_4px] hover:shadow-[rgb(251,191,36,0.5)_4px_4px_12px_6px] transition-shadow' +
            (props.isImgOnLeft ? ' flex-row-reverse' : '')
          }
        >
          <div className={'max-w-[550px]' + (props.isImgOnLeft ? ' ml-16' : '')}>
            <h2 className="text-5xl font-semibold">{props.title}</h2>
            <p className={'text-2xl my-8'}>{props.description}</p>
          </div>
          <div className={'flex flex-col'}>
            <img
              src={props.img}
              alt="headshot"
              className={'flex flex-end h-[300px] object-cover aspect-square rounded-lg'}
            />
            {/* <hr
            className={
              'flex justify-center border-t border-4 mt-24 border-amber-400 w-[540px]' +
              (props.displayLine ? '' : ' hidden')
            }
          /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectBlock;
