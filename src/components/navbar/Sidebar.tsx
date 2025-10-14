import { useContext, useState } from "react";
import {
  FaBoxOpen,
  FaHeart,
  FaHome,
  FaSignOutAlt,
  FaTags,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Sidebar() {
  const navigate = useNavigate();
  const { handleLogout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  function logout() {
    handleLogout();
    navigate("/");
  }

  return (
    <>
      {/* Botão Hamburguer (mobile) */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-[#434522] text-white p-2 rounded-lg shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-52 bg-[#434522] text-white shadow-lg p-6 z-40 
        transform transition-transform duration-300 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0`}
      >
        <h2 className="text-2xl font-bold mb-6">Menu</h2>
        <nav className="flex flex-col gap-6 text-lg">
          <Link
            to="/home"
            className="flex items-center gap-2 hover:text-[#e0c59b]"
            onClick={() => setIsOpen(false)}
          >
            <FaHome />
            Home
          </Link>
          <Link
            to="/listaproduto"
            className="flex items-center gap-2 hover:text-[#e0c59b]"
            onClick={() => setIsOpen(false)}
          >
            <FaBoxOpen />
            Produtos
          </Link>
          <Link
            to="/categoria"
            className="flex items-center gap-2 hover:text-[#e0c59b]"
            onClick={() => setIsOpen(false)}
          >
            <FaTags />
            Categoria
          </Link>
          <Link
            to="/doacao"
            className="flex items-center gap-2 hover:text-[#e0c59b]"
            onClick={() => setIsOpen(false)}
          >
            <FaHeart />
            Doação
          </Link>
          <button
            onClick={() => {
              logout();
              setIsOpen(false);
            }}
            className="flex items-center gap-2 hover:text-red-400 mt-4"
          >
            <FaSignOutAlt />
            Sair
          </button>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
