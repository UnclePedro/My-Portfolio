function Icon(props: { img: string; href: string; alt: string }) {
  return (
    <a href={props.href} target="_blank" rel="noreferrer" className={'mx-2'}>
      <img src={props.img} alt={props.alt} className={'rounded-xl object-cover w-20 animation-reverse-bounce'} />
    </a>
  );
}

export default Icon;
