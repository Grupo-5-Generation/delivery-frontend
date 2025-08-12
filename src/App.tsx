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
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Doacao from "./pages/doacao/Doacao";

function App() {
  return (
    <AuthProvider>
      <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh] bg-[#efe9e2]">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/login" element={<Login />} />
            <Route path="/categoria" element={<ListaCategoria />} />
            <Route path="/cadastrarcategoria" element={<FormCategoria />} />
            <Route path="/editarcategoria/:id" element={<FormCategoria />} />
            <Route
              path="/deletarcategoria/:id"
              element={<DeletarCategoria />}
            />
            <Route path="/listaproduto" element={<ListaProduto />} />
            <Route path="/cadastrarproduto" element={<FormProduto />} />
            <Route path="/editarproduto/:id" element={<FormProduto />} />
            <Route path="/deletarproduto/:id" element={<DeletarProduto />} />
            <Route path="/doacao" element={<Doacao />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
