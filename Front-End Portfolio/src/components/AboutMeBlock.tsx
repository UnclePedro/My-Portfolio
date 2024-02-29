function AboutMeBlock(props: { title: string; description1: string; description2: string; img: string }) {
  return (
    <>
      <div className={'font-poppins flex justify-center'}>
        <div className={'w-[650px]'}>
          <h2 className="text-6xl font-semibold">
            <span className={'text-amber-400 font-extrabold'}>&gt; </span>
            {props.title}
          </h2>
          <p className={'text-2xl my-8'}>{props.description1}</p>
          <p className={'text-2xl'}>{props.description2}</p>
          <h1 className={'text-3xl font-semibold mt-8'}>My Tools:</h1>

          <div className={'flex'}>
            <ol className={'text-2xl my-8'}>
              <li>
                <span className={'text-amber-400 font-extrabold'}>&gt;</span> JavaScript
              </li>
              <li>
                <span className={'text-amber-400 font-extrabold'}>&gt;</span> React
              </li>
              <li>
                <span className={'text-amber-400 font-extrabold'}>&gt;</span> CSS
              </li>
            </ol>
            <ol className={'text-2xl my-8 inline-flex flex-col pl-20'}>
              <li>
                <span className={'text-amber-400 font-extrabold'}>&gt;</span> TypeScript
              </li>
              <li>
                <span className={'text-amber-400 font-extrabold'}>&gt;</span> Tailwind
              </li>
              <li>
                <span className={'text-amber-400 font-extrabold'}>&gt;</span> HTML
              </li>
            </ol>
          </div>
        </div>
        <div
          className={
            'bg-yellow-500 relative w-[300px] h-[500px] max-w-full flex justify-center shadow-lg shadow-yellow-500 rounded-xl'
          }
        >
          <img
            src={props.img}
            alt="headshot"
            className={'absolute w-full h-full ml-16 mix-blend-overlay hover:mix-blend-normal rounded-xl object-cover'}
          />
        </div>
      </div>
    </>
  );
}

export default AboutMeBlock;
