function GetInTouch(props: { title: string; bodyText: string; buttonText: string }) {
  return (
    <div className={'flex justify-center pt-56'}>
      <div className={'w-[650px] flex flex-col text-center'}>
        <h2 className="text-6xl font-semibold">{props.title}</h2>
        <p className={'text-2xl my-8'}>{props.bodyText}</p>
        <button className={'bg-black border border-yellow-300 h-14 w-28'}>{props.buttonText}</button>
      </div>
    </div>
  );
}

export default GetInTouch;
