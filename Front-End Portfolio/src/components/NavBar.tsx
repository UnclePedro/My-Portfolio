function NavBar(props: { heading1: string; heading2: string; heading3: string }) {
  return (
    <div className="justify-between p-8 mr-4">
      <img src="/src/assets/favicon-p3.png" className="w-24" alt="P favicon" />
      <div className={'text-2xl font-poppins flex flex-row w-full space-x-4 justify-end'}>
        <p>{props.heading1}</p>
        <p>{props.heading2}</p>
        <p>{props.heading3}</p>
      </div>
    </div>
  );
}

export default NavBar;
