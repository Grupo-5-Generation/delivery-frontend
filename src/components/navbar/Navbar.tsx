import { type ReactNode, useContext } from "react";
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
      <div className="w-full bg-sky-900 text-white py-4">
        <div className="container mx-auto flex justify-between text-lg px-8">
          <Link
            to="/home"
            className="text-2xl font-bold px-2 hover:bg-[#275292]"
          >
            Terminal Gourmet
          </Link>

          <div className="flex gap-4">
            <Link to="/home" className="rounded-md px-2 hover:bg-[#275292]">
              Home
            </Link>
            <Link
              to="/listaproduto"
              className="rounded-md px-2 hover:bg-[#275292]"
            >
              Produtos
            </Link>
            <Link
              to="/categoria"
              className="rounded-md px-2 hover:bg-[#275292]"
            >
              Categoria
            </Link>
            <Link to="/doacao" className="hover:underline">
              Doação
            </Link>
            <button
              onClick={logout}
              className="rounded-md px-2 hover:bg-[#275292] flex items-center"
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
      <div className="w-full bg-sky-900 text-white py-4">
        <div className="container mx-auto flex justify-between text-lg px-8">
          <Link
            to="/home"
            className="text-2xl font-bold px-2 hover:bg-[#275292]"
          >
            Terminal Gourmet
          </Link>

          <div className="flex gap-4">
            <Link to="/home" className="rounded-md px-2 hover:bg-[#275292]">
              Home
            </Link>
            <Link to="/doacao" className="hover:underline">
              Doação
            </Link>
            <Link
              to="/login"
              className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
            >
              Login
            </Link>
            <Link
              to="/cadastro"
              className="bg-green-500 px-4 py-2 rounded hover:bg-green-600"
            >
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