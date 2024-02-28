function NavBar(props: { heading1: string; heading2: string; heading3: string }) {
  return (
    <div className="flex flex-row w-full justify-end align-middle p-8 mr-4 absolute">
      <img src="/src/assets/favicon-p3.png" className="w-24" alt="P favicon" />
      <div className={'text-2xl font-poppins flex flex-row w-full space-x-6 justify-end mr-12'}>
        <button className="transition ease-in-out duration-500 hover:text-yellow-300">{props.heading1}</button>
        <button className="transition ease-in-out duration-500 hover:text-yellow-300">{props.heading2}</button>
        <button className="transition ease-in-out duration-500 hover:text-yellow-300">{props.heading3}</button>
      </div>
    </div>
  );
}

export default NavBar;
