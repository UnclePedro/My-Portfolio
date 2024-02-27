function NavBar(props: { heading1: string; heading2: string; heading3: string }) {
  return (
    <div className="justify-between items-center p-8 mr-4">
      <img src="/src/assets/favicon-p3.png" className="w-24" alt="P favicon" />
      <div className={'text-2xl font-poppins flex flex-row w-full space-x-4 justify-end'}>
        <button>{props.heading1}</button>
        <button>{props.heading2}</button>
        <button>{props.heading3}</button>
      </div>
    </div>
  );
}

export default NavBar;
