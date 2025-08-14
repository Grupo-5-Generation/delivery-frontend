/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AuthContext } from "../../../context/AuthContext"
import type Produto from "../../../models/Produto"
import { buscar, deletar } from "../../../services/Service"
import { ToastAlerta } from "../../../utils/ToastAlesta"


function DeletarProduto() {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [produto, setProduto] = useState<Produto>({} as Produto)

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    async function buscarPorId(id: string) {
        try {
            await buscar(`/produto/${id}`, setProduto, {
                headers: {
                    'Authorization': token
                }
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
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarProduto() {
        setIsLoading(true)

        try {
            await deletar(`/produto/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            ToastAlerta("Produto apagada com sucesso!", "sucesso")

        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }else {
                ToastAlerta("Erro ao deletar produto!", "erro")
            }
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/listaproduto")
    }
    
    return (
       <div className="max-w-7xl mx-auto px-4 py-6" >
        <div className="container mx-auto w-1/2 font-raleway text-green-950">
            <h1 className="text-4xl text-center my-8 font-bold ">Deletar Produto</h1>
            <p className="text-center font-semibold mb-6">
                Você tem certeza de que deseja apagar o Produto?
            </p>

            <div className="border border-slate-900 rounded-2xl shadow-md overflow-hidden bg-white">
                <header className="bg-[#434522] text-white text-3xl font-bold py-3 px-6 flex items-center gap-3">
                    {produto.nome}
                </header>
                <div className=" pl-8 pt-8 text-xl text-slate-700">
                    <p><strong>Quantidade: </strong> {produto.quantidade}</p>
                </div>
                <div className=" pl-8 pt-1 text-xl text-slate-700">
                    <p><strong>Preço: </strong> {produto.precoAtual}</p>
                </div>
                <div className="flex gap-4 p-4">
                    <button onClick={deletarProduto} className="flex-1 rounded text-slate-100 font-bold bg-[#434522] hover:bg-[#5b5c38] w-1/4 py-2 mx-auto my-5 flex justify-center">
                        Sim
                    </button>
                    <button onClick={retornar} className="flex-1 rounded text-slate-100 font-bold bg-[#ac906c] hover:bg-[#c5a67e] w-1/4 py-2 mx-auto my-5 flex justify-center">
                        Não
                    </button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default DeletarProduto