import { type ReactNode, useContext, useState } from "react";
import { FaBars, FaHome, FaSignInAlt, FaTimes } from "react-icons/fa";
import { FaAddressBook, FaHeart } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {
  const navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);

  // Estado para controlar o menu mobile
  const [menuAberto, setMenuAberto] = useState(false);

  // Função de logout
  function logout() {
    handleLogout();
    navigate("/");
  }

  // Função que alterna o menu hambúrguer no mobile
  function toggleMenu() {
    setMenuAberto(!menuAberto);
  }

  let component: ReactNode;

  // ==========================
  // 1️⃣ Navbar quando LOGADO
  // ==========================
  if (usuario.token !== "") {
    component = (
      <nav className="w-full bg-[#434522] text-white py-4 fixed top-0 left-0 z-50 shadow-md">
        <div className="container mx-auto flex justify-between items-center text-lg px-8">

          {/* LOGO / NOME */}
          <Link to="/home" className="text-2xl font-bold hover:text-[#e0c59b]">
            Terminal Gourmet
          </Link>

          {/* Ícone hambúrguer (só aparece em telas pequenas) */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-2xl focus:outline-none"
          >
            {menuAberto ? <FaTimes /> : <FaBars />}
          </button>

          {/* Menu Desktop */}
          <div className="hidden md:flex gap-4">
            <Link to="/home" className="rounded-md px-2 hover:bg-[#5b5c38]">Home</Link>
            <Link to="/listaproduto" className="rounded-md px-2 hover:bg-[#5b5c38]">Produtos</Link>
            <Link to="/categoria" className="rounded-md px-2 hover:bg-[#5b5c38]">Categoria</Link>
            <Link to="/doacao" className="rounded-md px-2 hover:bg-[#5b5c38]">Doação</Link>
            <button
              onClick={logout}
              className="rounded-md px-2 hover:bg-[#5b5c38] flex items-center"
            >
              Sair
              <i className="fa fa-sign-out pl-2 text-white text-base p-1"></i>
            </button>
          </div>
        </div>

        {/* Menu Mobile (semi-transparente) */}
        {menuAberto && (
          <div className="md:hidden bg-[#434522]/90 backdrop-blur-sm flex flex-col items-center gap-3 py-4">
            <Link to="/home" onClick={toggleMenu}>Home</Link>
            <Link to="/listaproduto" onClick={toggleMenu}>Produtos</Link>
            <Link to="/categoria" onClick={toggleMenu}>Categoria</Link>
            <Link to="/doacao" onClick={toggleMenu}>Doação</Link>
            <button onClick={() => { logout(); toggleMenu(); }}>Sair</button>
          </div>
        )}
      </nav>
    );
  }

  // ==========================
  // 2️⃣ Navbar quando NÃO LOGADO
  // ==========================
  else {
    component = (
      <nav className="w-full bg-[#434522] text-white py-4 fixed top-0 left-0 z-50 shadow-md">
        <div className="container mx-auto flex justify-between items-center text-lg px-8">

          {/* LOGO */}
          <Link to="/home" className="text-2xl font-bold">
            <img
              src="https://ik.imagekit.io/vtdzeofuq/fotoicone.png?updatedAt=1755176875563"
              alt="Logo Terminal Gourmet"
              className="w-40"
            />
          </Link>

          {/* Ícone hambúrguer (mobile) */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-2xl focus:outline-none"
          >
            {menuAberto ? <FaTimes /> : <FaBars />}
          </button>

          {/* Menu Desktop */}
          <div className="hidden md:flex gap-4">
            <Link to="/home" className="flex items-center gap-2 hover:text-[#e0c59b]"><FaHome /> Home</Link>
            <Link to="/doacao" className="flex items-center gap-2 hover:text-[#e0c59b]"><FaHeart /> Doação</Link>
            <Link to="/login" className="flex items-center gap-2 hover:text-[#e0c59b]"><FaSignInAlt /> Login</Link>
            <Link to="/cadastro" className="flex items-center gap-2 hover:text-[#e0c59b]"><FaAddressBook /> Cadastro</Link>
          </div>
        </div>

        {/* Menu Mobile (semi-transparente) */}
        {menuAberto && (
          <div className="md:hidden bg-[#434522]/90 backdrop-blur-sm flex flex-col items-center gap-3 py-4">
            <Link to="/home" onClick={toggleMenu}>Home</Link>
            <Link to="/doacao" onClick={toggleMenu}>Doação</Link>
            <Link to="/login" onClick={toggleMenu}>Login</Link>
            <Link to="/cadastro" onClick={toggleMenu}>Cadastro</Link>
          </div>
        )}
      </nav>
    );
  }

  return <>{component}</>;
}

export default Navbar;
