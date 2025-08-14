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
    <>
    <div className="max-w-7xl mx-auto px-4 py-6" >
      <div className="place-items-center font-bold bg-[#434522]/30 py-30 m-30 rounded-2xl">
        <form className="flex justify-center items-center flex-col w-1/2 gap-4" onSubmit={login}>
          <h2 className="text-[#473e31] text-5xl ">Entrar</h2>
          <div className="flex flex-col text-[#473e31] w-full">
            <label htmlFor="usuario">Usuário</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Usuario"
              className="border-2 border-[#675947] bg-white rounded p-2"
              value={usuarioLogin.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
          </div>
          <div className="flex flex-col text-[#473e31] w-full">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="border-2 border-[#4d4235] bg-white rounded p-2"
              value={usuarioLogin.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                atualizarEstado(e)
              }
            />
          </div>
          <button type="submit" className="rounded bg-[#434522] hover:bg-[#5b5c38] flex justify-center text-white w-1/2 py-2" >
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

          <hr className="border-[#473e31] w-full" />

          <p>
            Ainda não tem uma conta?{" "}
            <Link to="/cadastro" className="text-[#473e31] hover:underline">
              Cadastre-se
            </Link>
          </p>
        </form>
        <div className="fundoLogin hidden lg:block"></div>
      </div>
      </div>
    </>
  );
}

export default Login;
