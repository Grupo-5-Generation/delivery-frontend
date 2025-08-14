import { useContext, useEffect, useState, type ChangeEvent } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import type Categoria from "../../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlesta";

function FormCategoria() {
  const navigate = useNavigate();

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categoria/${id}`, setCategoria, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes("401")) {
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (token === "") {
      ToastAlerta('Você precisa estar logado!', 'info')
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  function retornar() {
    navigate("/categoria");
  }

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      try {
        await atualizar(`/categoria`, categoria, setCategoria, {
          headers: { Authorization: token },
        });
        ToastAlerta("A Categoria foi atualizada com sucesso!", "sucesso")
      } catch (error: any) {
        if (error.toString().includes("401")) {
          handleLogout();
        } else {
          ToastAlerta("Erro ao atualizar a categoria.", "erro")
        }
      }
    } else {
      try {
        await cadastrar(`/categoria`, categoria, setCategoria, {
          headers: { Authorization: token },
        });
        ToastAlerta("A Categoria foi cadastrada com sucesso!", "sucesso")
      } catch (error: any) {
        if (error.toString().includes("401")) {
          handleLogout();
        } else {
          ToastAlerta("Erro ao cadastrar a categoria.", "erro")
        }
      }
    }

    setIsLoading(false);
    retornar();
  }

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-6" >
        <div className="place-items-center font-bold bg-[#434522]/30 py-30 m-30 rounded-2xl">
        <form className="flex justify-center items-center flex-col w-1/2 gap-4" onSubmit={gerarNovaCategoria}>
      <h1 className="text-[#473e31] text-5xl ">
        {id === undefined ? "Cadastrar Categoria" : "Editar Categoria"}
      </h1>

      
        <div className="flex flex-col text-[#473e31] w-full">
          <label htmlFor="descricao">Descrição da Categoria</label>
          <input
            type="text"
            placeholder="Descreva aqui sua Categoria"
            name="descricao"
            className="border-2 border-[#675947] bg-white rounded p-2"
            value={categoria.descricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col text-[#473e31] w-full">
          <label htmlFor="tipo">Tipo da Categoria</label>
          <input
            type="text"
            placeholder="Descreva o tipo da sua Categoria"
            name="tipo"
            className="border-2 border-[#675947] bg-white rounded p-2"
            value={categoria.tipo}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex justify-around w-full gap-8">
        <button type="submit" className="rounded text-white bg-[#434522] hover:bg-[#5b5c38] w-1/2 py-2 flex justify-center">
          {isLoading ? (
            <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="24"
              visible={true}
            />
          ) : (
            <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
          )}
        </button>

        <button type="reset" className="rounded text-white bg-[#ac906c] hover:bg-[#c5a67e] w-1/2 py-2" onClick={retornar}>
                Cancelar
              </button>
        </div>
      </form>
      </div>
    </div>
    </>
  );
}

export default FormCategoria;
