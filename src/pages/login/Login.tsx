import { type ChangeEvent, useContext, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import type UsuarioLogin from "../../models/Usuariologin";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const { usuario, handleLogin, isLoading } = useContext(AuthContext);
  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin
  );

  useEffect(() => {
    if (usuario.token !== "") {
      navigate("/home");
    }
  }, [usuario]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value,
    });
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(usuarioLogin);
  }

  return (
    <div className="flex justify-center items-center min-h-[80vh] px-4">
      <div className="w-full max-w-[500px] bg-[#434522]/30 p-10 rounded-2xl text-center shadow-md">
        <form
          className="flex flex-col gap-4 text-[#473e31]"
          onSubmit={login}
        >
          <h2 className="text-4xl md:text-5xl font-bold">Entrar</h2>

          <div className="flex flex-col text-left">
            <label htmlFor="usuario">Usuário</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Usuário"
              className="border-2 border-[#675947] bg-white rounded p-2"
              value={usuarioLogin.usuario}
              onChange={atualizarEstado}
            />
          </div>

          <div className="flex flex-col text-left">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="border-2 border-[#675947] bg-white rounded p-2"
              value={usuarioLogin.senha}
              onChange={atualizarEstado}
            />
          </div>

          <button
            type="submit"
            className="rounded bg-[#434522] hover:bg-[#5b5c38] flex justify-center text-white py-2 mt-4"
          >
            {isLoading ? (
              <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              />
            ) : (
              <span>Entrar</span>
            )}
          </button>

          <hr className="border-[#473e31] w-full my-4" />

          <p className="text-sm md:text-base">
            Ainda não tem uma conta?{" "}
            <Link to="/cadastro" className="text-[#473e31] hover:underline">
              Cadastre-se
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
