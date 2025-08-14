
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useState, type ChangeEvent } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import type Categoria from "../../../models/Categoria";
import type Produto from "../../../models/Produto";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlesta";


function FormProduto() {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [categorias, setCategorias] = useState<Categoria[]>([])

    const [categoria, setCategoria] = useState<Categoria>({ id: 0, descricao: '', tipo: '' })
    const [produto, setProduto] = useState<Produto>({} as Produto)

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    const [preview, setPreview] = useState<string>("");

    function atualizarFoto(e: ChangeEvent<HTMLInputElement>) {
        const url = e.target.value;
        setProduto({
            ...produto,
            foto: url
        });
        setPreview(url);
    }


    async function buscarProdutoPorId(id: string) {
        try {
            await buscar(`/produto/${id}`, setProduto, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        }
    }

    async function buscarCategoriaPorId(id: string) {
        try {
            await buscar(`/categoria/${id}`, setCategoria, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        }
    }

    async function buscarTemas() {
        try {
            await buscar('/categoria', setCategorias, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado!', 'info')
            navigate('/');
        }
    }, [token])

    useEffect(() => {
        buscarTemas()

        if (id !== undefined) {
            buscarProdutoPorId(id)
        }
    }, [id])

    useEffect(() => {
        setProduto({
            ...produto,
            categoria: categoria,
        })
    }, [categoria])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setProduto({
            ...produto,
            [e.target.name]: e.target.value,
            status: true,
            categoria: categoria,
            usuario: usuario,
            desconto: 0,
            precoAnterior: 0,
        });
    }

    function retornar() {
        navigate('/listaproduto');
    }

    async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/produto`, produto, setProduto, {
                    headers: {
                        Authorization: token,
                    },
                });

                ToastAlerta("Produto atualizado com sucesso!", "sucesso")

            } catch (error: any) {
                if (error.toString().includes('401')) {
                    handleLogout()
                } else {
                    ToastAlerta("Erro ao atualizar produto!", "erro")
                }
            }

        } else {
            try {
                await cadastrar(`/produto`, produto, setProduto, {
                    headers: {
                        Authorization: token,
                    },
                })

                ToastAlerta("Produto cadastrado com sucesso!", "sucesso")

            } catch (error: any) {
                if (error.toString().includes('401')) {
                    handleLogout()
                } else {
                    ToastAlerta("Erro ao cadastrar produto!", "erro")
                }
            }
        }

        setIsLoading(false)
        retornar()
    }

    const carregandoCategoria = categoria.descricao === '';

    return (
        <>
        <div className="max-w-7xl mx-auto px-4 py-6" >
            <div className="place-items-center font-bold bg-[#434522]/30 py-30 m-30 rounded-2xl">
                <form className="flex justify-center items-center flex-col w-1/2 gap-4" onSubmit={gerarNovoProduto}>
                <h1 className="text-[#473e31] text-5xl ">
                    {id !== undefined ? 'Editar Produto' : 'Cadastrar Produto'}
                </h1>
                    <div className="flex flex-col text-[#473e31] w-full">
                        <label htmlFor="foto">Foto (URL)</label>
                        <input
                            type="text"
                            name="foto"
                            placeholder="Cole a URL da imagem"
                            className="border-2 border-[#675947] bg-white rounded p-2"
                            value={produto.foto || ""}
                            onChange={atualizarFoto}
                        />
                        {preview && (
                            <img
                                src={preview}
                                alt="Pré-visualização"
                                className="mt-2 max-h-40 object-contain border rounded"
                            />
                        )}
                    </div>

                
                    <div className="flex flex-col text-[#473e31] w-full">
                        <label htmlFor="nome">Nome do Produto</label>
                        <input
                            type="text"
                            placeholder="Nome"
                            name="nome"
                            required
                            className="border-2 border-[#675947] bg-white rounded p-2"
                            value={produto.nome}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>
                    <div className="flex flex-col text-[#473e31] w-full">
                        <label htmlFor="precoAtual">Preço</label>
                        <input
                            type="text"
                            placeholder="Preço"
                            name="precoAtual"
                            required
                            className="border-2 border-[#675947] bg-white rounded p-2"
                            value={produto.precoAtual}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>
                    <div className="flex flex-col text-[#473e31] w-full">
                        <label htmlFor="quantidade">Quantidade</label>
                        <input
                            type="number"
                            placeholder="Quantidade"
                            name="quantidade"
                            required
                            className="border-2 border-[#675947] bg-white rounded p-2"
                            value={produto.quantidade}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                    </div>
                    <div className="flex flex-col text-[#473e31] w-full">
                        <p>Status do Produto</p>
                        <select
                            name="status"
                            id="status"
                            value={String(produto.status)} // converte para string para não dar erro
                            onChange={(e) =>
                                setProduto({
                                    ...produto,
                                    status: e.target.value === "true", // converte para boolean
                                })
                            }
                            className="border-2 border-[#675947] bg-white rounded p-2" >
                            <option value="" disabled>Selecione o status</option>
                            <option value="true">Disponível</option>
                            <option value="false">Indisponível</option>
                        </select>
                    </div>


                    <div className="flex flex-col text-[#473e31] w-full">
                        <p>Categoria do Produto</p>
                        <select name="categoria" id="categoria" className="border-2 border-[#675947] bg-white rounded p-2"
                            onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
                        >
                            <option value="" selected disabled>Selecione uma Categoria</option>

                            {categorias.map((categoria) => (
                                <>
                                    <option value={categoria.id} >{categoria.descricao}</option>
                                </>
                            ))}

                        </select>
                    </div>
                    <div className="flex justify-around w-full gap-8">
                    <button
                        type='submit'
                        className="rounded text-white bg-[#434522] hover:bg-[#5b5c38] w-1/2 py-2 flex justify-center"
                        disabled={carregandoCategoria}
                    >
                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                            <span>{id !== undefined ? 'Atualizar' : 'Cadastrar'}</span>
                        }
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

export default FormProduto;