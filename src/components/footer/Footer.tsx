
function Footer() {
  const data = new Date().getFullYear();

  return (
    <>
      

    <footer className="shadow-sm p-2 bg-[#434522]">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-white sm:text-center font-bold"><a href="https://github.com/Grupo-5-Generation/delivery-frontend">Terminal Gourmet</a>
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white sm:mt-0">
            <li>
                <a href="#" className="hover:underline me-4 md:me-6">Home</a>
            </li>
            <li>
                <a href="#" className="hover:underline me-4 md:me-6">Doação</a>
            </li>
            <li>
                <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
            </li>
            <li>
                <a href="#Sobre" className="hover:underline">Sobre Nós</a>
            </li>
        </ul>
        </div>
    </footer>

    </>
  );
}

export default Footer;
