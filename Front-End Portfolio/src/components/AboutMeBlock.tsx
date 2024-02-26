function AboutMeBlock(props: { title: string; description1: string; description2: string; img: string }) {
  return (
    <>
      <div className={'flex justify-center'}>
        <div className={'w-[650px]'}>
          <h2 className="text-6xl font-semibold">
            <span className={'text-yellow-300 font-extrabold'}>&gt; </span>
            {props.title}
          </h2>
          <p className={'text-2xl my-8'}>{props.description1}</p>
          <p className={'text-2xl'}>{props.description2}</p>
          <div className={'flex'}>
            <ol className={'text-2xl my-8'}>
              <li>
                <span className={'text-yellow-300 font-extrabold'}>&gt;</span> JavaScript
              </li>
              <li>
                <span className={'text-yellow-300 font-extrabold'}>&gt;</span> React
              </li>
              <li>
                <span className={'text-yellow-300 font-extrabold'}>&gt;</span> Node.js
              </li>
            </ol>
            <ol className={'text-2xl my-8 inline-flex flex-col pl-20'}>
              <li>
                <span className={'text-yellow-300 font-extrabold'}>&gt;</span> TypeScript
              </li>
              <li>
                <span className={'text-yellow-300 font-extrabold'}>&gt;</span> Tailwind
              </li>
              <li>
                <span className={'text-yellow-300 font-extrabold'}>&gt;</span> HTML
              </li>
            </ol>
          </div>
        </div>
        <img src={props.img} alt="headshot" className={'flex flex-end h-[520px] ml-16 border-2 border-yellow-300'} />
      </div>
    </>
  );
}

export default AboutMeBlock;
