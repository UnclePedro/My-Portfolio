function LandingPageBanner(props: { heading1: string; heading2: string }) {
  return (
    <header className={'font-poppins flex flex-col justify-center items-center p-4 w-full h-screen'}>
      <h1 className={'text-8xl font-bold'}>
        {props.heading1}
        <span className={'text-yellow-300'}>.</span>
      </h1>
      <p className={'text-4xl'}>
        <span className={'text-yellow-300 font-extrabold animate-pulse'}>&gt;</span> {props.heading2}
      </p>
    </header>
  );
}

export default LandingPageBanner;
