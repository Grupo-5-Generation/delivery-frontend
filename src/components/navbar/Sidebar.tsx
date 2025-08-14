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
    <aside className="fixed top-0 left-0 h-screen w-52 bg-[#434522] text-white shadow-lg p-6 z-50">
      <h2 className="text-2xl font-bold mb-6">Menu</h2>
      <nav className="flex flex-col gap-6 text-lg">
        <Link to="/home" className="flex items-center gap-2 hover:text-[#e0c59b]">
          <FaHome />
          Home
        </Link>
        <Link to="/listaproduto" className="flex items-center gap-2 hover:text-[#e0c59b]">
          <FaBoxOpen />
          Produtos
        </Link>
        <Link to="/categoria" className="flex items-center gap-2 hover:text-[#e0c59b]">
          <FaTags />
          Categoria
        </Link>
        <Link to="/doacao" className="flex items-center gap-2 hover:text-[#e0c59b]">
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
