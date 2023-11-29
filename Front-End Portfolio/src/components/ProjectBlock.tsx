function ProjectBlock(props: { title: string; description: string; img: string; isImgOnLeft: boolean }) {
  return (
    <>
      <div className={'flex justify-center mt-56' + (props.isImgOnLeft ? ' flex-row-reverse' : '')}>
        <div className={'w-[550px]'}>
          <h2 className="text-5xl font-semibold">{props.title}</h2>
          <p className={'text-2xl my-8'}>{props.description}</p>
        </div>
        <img src={props.img} alt="headshot" className={'flex flex-end h-[300px] ml-16 border-2 border-amber-400'} />
      </div>
      <hr className={'flex justify-center border-t border-4 mt-24 ml-[52%] border-amber-400 w-[540px]'} />
    </>
  );
}

export default ProjectBlock;
