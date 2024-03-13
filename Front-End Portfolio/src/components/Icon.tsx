function Icon(props: { img: string; href: string; alt: string }) {
  return (
    <a href={props.href} target="_blank" rel="noreferrer" className={'mx-2'}>
      <img
        src={props.img}
        alt={props.alt}
        className={'w-14 md:w-20 rounded-xl object-cover animation-reverse-bounce'}
      />
    </a>
  );
}

export default Icon;
