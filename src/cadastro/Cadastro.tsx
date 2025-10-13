/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import type Usuario from "../models/Usuario";
import { cadastrarUsuario } from "../services/Service";
import { ToastAlerta } from "../utils/ToastAlesta";
import "./Cadastro.css";

function Cadastro() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [confirmaSenha, setConfirmaSenha] = useState<string>("");
  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
  });

  useEffect(() => {
    if (usuario.id !== 0) retornar();
  }, [usuario]);

  function retornar() {
    navigate("/login");
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value);
  }

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {
      setIsLoading(true);
      try {
        await cadastrarUsuario(`/usuario/cadastrar`, usuario, setUsuario);
        ToastAlerta("Usuário cadastrado com sucesso!", "sucesso");
      } catch {
        ToastAlerta("Erro ao cadastrar o usuário!", "erro");
      }
    } else {
      ToastAlerta(
        "Dados inconsistentes! Verifique as informações do cadastro.",
        "erro"
      );
      setUsuario({ ...usuario, senha: "" });
      setConfirmaSenha("");
    }
    setIsLoading(false);
  }

  return (
    <div className="flex justify-center items-center min-h-[85vh] px-4">
      <div className="w-full max-w-[550px] bg-[#434522]/30 p-10 rounded-2xl text-center shadow-md">
        <form
          className="flex flex-col gap-4 text-[#473e31]"
          onSubmit={cadastrarNovoUsuario}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cadastrar</h1>

          {[
            { id: "nome", label: "Nome" },
            { id: "usuario", label: "Usuário" },
            { id: "foto", label: "Foto" },
            { id: "senha", label: "Senha", type: "password" },
          ].map(({ id, label, type = "text" }) => (
            <div key={id} className="flex flex-col text-left">
              <label htmlFor={id}>{label}</label>
              <input
                type={type}
                id={id}
                name={id}
                placeholder={label}
                className="border-2 border-[#675947] bg-white rounded p-2"
                value={(usuario as any)[id]}
                onChange={atualizarEstado}
              />
            </div>
          ))}

          <div className="flex flex-col text-left">
            <label htmlFor="confirmarSenha">Confirmar Senha</label>
            <input
              type="password"
              id="confirmarSenha"
              placeholder="Confirmar Senha"
              className="border-2 border-[#675947] bg-white rounded p-2"
              value={confirmaSenha}
              onChange={handleConfirmarSenha}
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <button
              type="submit"
              className="rounded text-white bg-[#434522] hover:bg-[#5b5c38] py-2 flex-1 flex justify-center"
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
                <span>Cadastrar</span>
              )}
            </button>

            <button
              type="reset"
              className="rounded text-white bg-[#ac906c] hover:bg-[#c5a67e] py-2 flex-1"
              onClick={retornar}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
