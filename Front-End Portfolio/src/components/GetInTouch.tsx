function GetInTouch(props: { title: string; bodyText: string; buttonText: string }) {
  return (
    <div className={'flex justify-center pt-32'}>
      <div className={'w-[650px] flex-col align-center text-center'}>
        <h2 className="text-6xl font-semibold">{props.title}</h2>
        <p className={'text-2xl my-8'}>{props.bodyText}</p>
        <button className={' bg-black border-[2px] border-yellow-300 h-14 w-32 rounded-md font-semibold'}>
          {props.buttonText}
        </button>
      </div>
    </div>
  );
}

export default GetInTouch;
