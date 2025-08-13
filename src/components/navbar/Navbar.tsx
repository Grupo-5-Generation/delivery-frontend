import { type ReactNode, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext"; // ajusta o caminho se necessário

function Navbar() {
  const navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    alert("O Usuário foi desconectado com sucesso!");
    navigate("/");
  }

  let component: ReactNode;

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
            <Link
              to=""
              onClick={logout}
              className="rounded-md px-2 hover:bg-[#5b5c38] flex items-center"
            >
              Sair{" "}
              <i className="fa fa-sign-out pl-2 text-white text-base p-1"></i>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return <>{component}</>;
}

export default Navbar;
