import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { FaHome, FaBoxOpen, FaTags, FaHeart, FaSignOutAlt } from "react-icons/fa";

function Sidebar() {
  const navigate = useNavigate();
  const { handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    alert("O Usuário foi desconectado com sucesso!");
    navigate("/");
  }

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-sky-900 text-white shadow-lg p-6 z-50">
      <h2 className="text-2xl font-bold mb-6">Menu</h2>
      <nav className="flex flex-col gap-6 text-lg">
        <Link to="/home" className="flex items-center gap-2 hover:text-yellow-400">
          <FaHome />
          Home
        </Link>
        <Link to="/listaproduto" className="flex items-center gap-2 hover:text-yellow-400">
          <FaBoxOpen />
          Produtos
        </Link>
        <Link to="/categoria" className="flex items-center gap-2 hover:text-yellow-400">
          <FaTags />
          Categoria
        </Link>
        <Link to="/doacao" className="flex items-center gap-2 hover:text-yellow-400">
          <FaHeart />
          Doação
        </Link>
        <button
          onClick={logout}
          className="flex items-center gap-2 hover:text-red-400 mt-4"
        >
          <FaSignOutAlt />
          Sair
        </button>
      </nav>
    </aside>
  );
}

export default Sidebar;
