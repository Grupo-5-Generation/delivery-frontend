import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Cadastro from "./cadastro/Cadastro";
import DeletarCategoria from "./components/categoria/deletarcategoria/DeletarCategoria";
import FormCategoria from "./components/categoria/formcategoria/FormCategoria";
import ListaCategoria from "./components/categoria/listacategoria/ListaCategoria";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import DeletarProduto from "./components/produto/deletarproduto/DeletarProduto";
import FormProduto from "./components/produto/formproduto/FormProduto";
import ListaProduto from "./components/produto/listaproduto/ListaProduto";

import Sidebar from "./components/navbar/Sidebar";
import MostrarProduto from "./components/produto/mostrarproduto/MostrarProduto";
import { AuthContext, AuthProvider } from "./context/AuthContext";
import Doacao from "./pages/doacao/Doacao";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

function AppContent() {
  const { usuario } = useContext(AuthContext);

  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        {/* Mostrar Navbar apenas se NÃO estiver logado */}
        {usuario.token === "" && <Navbar />}

        {/* Mostrar Sidebar apenas se estiver logado */}
        {usuario.token !== "" && <Sidebar />}

        {/* Adiciona padding à esquerda se a sidebar estiver visível */}
        <div className={`bg-[url(https://ik.imagekit.io/maridevdata/Fundo%20de%20Tela.png?updatedAt=1755115852401)] ${usuario.token !== "" ? "pl-52 min-h-[94vh]" : "min-h[80vh]"}`}>
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/doacao" element={<Doacao />} />
            <Route path="/categoria" element={<ListaCategoria />} />
            <Route path="/cadastrarcategoria" element={<FormCategoria />} />
            <Route path="/editarcategoria/:id" element={<FormCategoria />} />
            <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
            <Route path="/listaproduto" element={<ListaProduto />} />
            <Route path="/cadastrarproduto" element={<FormProduto />} />
            <Route path="/editarproduto/:id" element={<FormProduto />} />
            <Route path="/deletarproduto/:id" element={<DeletarProduto />} />
            <Route path="/mostrarproduto/:id" element={<MostrarProduto />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
