import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function Icon(props: { iconImg: string; href: string; alt: string }) {
  return (
    <a href={props.href} target="_blank" rel="noreferrer" className={'mx-2'}>
      {/* <DotLottieReact src="../../src/assets/p-favicon-json2.json" autoplay playOnHover /> */}
      <img src={props.iconImg} alt={props.alt} className={'w-14 md:w-20 animation-reverse-bounce'} />
    </a>
  );
}

export default Icon;
