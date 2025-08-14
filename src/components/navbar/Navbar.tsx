import { type ReactNode, useContext } from "react";
import { FaHome, FaSignInAlt } from "react-icons/fa";
import { FaAddressBook, FaHeart } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {
  const navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    alert("O Usuário foi desconectado com sucesso!");
    navigate("/");
  }

  let component: ReactNode;

  // Se está logado → menu administrativo
  if (usuario.token !== "") {
    component = (
      <div className="w-full bg-[#434522] text-white py-4">
        <div className="container mx-auto flex justify-between text-lg px-8">
          <Link
            to="/home"
            className="text-2xl font-bold px-2 hover:bg-[#5b5c38]"
          >
            Terminal Gourmet
          </Link>
          

          <div className="flex gap-4">
            <Link to="/home" className="rounded-md px-2 hover:bg-[#5b5c38]">
              Home
            </Link>
            <Link
              to="/listaproduto"
              className="rounded-md px-2 hover:bg-[#5b5c38]"
            >
              Produtos
            </Link>
            <Link
              to="/categoria"
              className="rounded-md px-2 hover:bg-[#5b5c38]"
            >
              Categoria
            </Link>
            <Link to="/doacao" className="rounded-md px-2 hover:bg-[#5b5c38]">
              Doação
            </Link>
            <button
              onClick={logout}
              className="rounded-md px-2 hover:bg-[#5b5c38] flex items-center"
            >
              Sair
              <i className="fa fa-sign-out pl-2 text-white text-base p-1"></i>
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    // Não logado → menu público
    component = (
      <div className="w-full bg-[#434522] text-white py-4">
        <div className="container mx-auto flex justify-between text-lg px-8">
          <Link
            to="/home"
            className="text-2xl font-bold px-4 py-2 rounded hover:text-[#e0c59b]">
          <img
            src="https://ik.imagekit.io/zddqh4rhi/1-ad089607.ico?updatedAt=1755174045314"
            alt="Logo Terminal Gourmet"
            className=""
          />
          </Link>

          <div className="flex gap-4">
            <Link to="/home" className="flex items-center gap-2 hover:underline hover:text-[#e0c59b]">
              <FaHome />
              Home
            </Link>
            <Link to="/doacao" className="flex items-center gap-2 hover:underline hover:text-[#e0c59b]">
              <FaHeart />
              Doação
            </Link>
            <Link to="/login" className="flex items-center gap-2 hover:underline hover:text-[#e0c59b]">
              <FaSignInAlt />
              Login
            </Link>
            <Link to="/cadastro" className="flex items-center gap-2 hover:underline hover:text-[#e0c59b]">
              <FaAddressBook />
              Cadastro
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return <>{component}</>;
}

export default Navbar;