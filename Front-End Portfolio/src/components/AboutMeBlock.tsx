function AboutMeBlock(props: { title: string; description1: string; description2: string; img: string }) {
  return (
    <>
      <div className={'font-poppins flex flex-col justify-center p-14 lg:flex-row  '}>
        <div className={'lg:w-[650px]'}>
          <h2 className="text-5xl md:text-6xl font-semibold">
            <span className={'text-amber-400 font-extrabold'}>&gt; </span>
            {props.title}
          </h2>
          <p className={'text-lg md:text-2xl my-8'}>{props.description1}</p>
          <p className={'text-lg md:text-2xl'}>{props.description2}</p>
          <h1 className={'text-2xl md:text-3xl font-semibold mt-8'}>My Tools:</h1>

          <div className={'flex'}>
            <ol className={'text-lg md:text-2xl my-8'}>
              <li>
                <span className={'text-amber-400 font-extrabold'}>&gt;</span> TypeScript
              </li>
              <li>
                <span className={'text-amber-400 font-extrabold'}>&gt;</span> Tailwind CSS
              </li>
              <li>
                <span className={'text-amber-400 font-extrabold'}>&gt;</span> HTML
              </li>
            </ol>
            <ol className={'text-lg md:text-2xl my-8 inline-flex flex-col pl-20'}>
              <li>
                <span className={'text-amber-400 font-extrabold'}>&gt;</span> React
              </li>
              <li>
                <span className={'text-amber-400 font-extrabold'}>&gt;</span> Github
              </li>
              <li>
                <span className={'text-amber-400 font-extrabold'}>&gt;</span> Figma
              </li>
            </ol>
          </div>
        </div>

        <div
          className={
            'flex justify-center bg-amber-400 w-[300px] h-[300px] lg:h-[450px] shadow-none md:shadow-goldenMedium hover:shadow-none transition-shadow rounded-xl lg:ml-16 lg:mt-24'
          }
        >
          <img
            src={props.img}
            alt="headshot"
            className={'opacity-100 md:opacity-50 hover:opacity-100 transition-opacity rounded-xl object-cover'}
          />
        </div>
      </div>
    </>
  );
}

export default AboutMeBlock;
