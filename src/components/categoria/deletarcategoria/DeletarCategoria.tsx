import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AuthContext } from "../../../context/AuthContext"
import type Categoria from "../../../models/Categoria"
import { buscar, deletar } from "../../../services/Service"
import { ToastAlerta } from "../../../utils/ToastAlesta"

function DeletarCategoria() {

    const navigate = useNavigate()

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    
    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categoria/${id}`, setCategoria, {
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

    async function deletarCategoria() {
        setIsLoading(true)

        try {
            await deletar(`/categoria/${id}`, {
                headers: {
                    'Authorization': token
                }
            })
            ToastAlerta("Categoria apagada com sucesso!", "sucesso")
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }else {
                ToastAlerta("Erro ao deletar a categoria.", "erro")
            }
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/categoria")
    }
    
    return (
        <div className="max-w-7xl mx-auto px-4 py-6" >
        <div className="container mx-auto w-1/2 font-raleway text-green-950">
            <h1 className="text-4xl text-center my-8 font-bold ">Deletar Categoria</h1>
            <p className="text-center font-semibold mb-6">
                Você tem certeza de que deseja apagar a Categoria?
            </p>

            <div className="border border-slate-900 rounded-2xl shadow-md overflow-hidden bg-white">
                <header className="bg-[#434522] text-white text-3xl font-bold py-3 px-6 flex items-center gap-3">
                    {categoria.descricao}
                </header>
                <div className=" p-8 text-xl text-slate-700">
                    <p><strong>Tipo:</strong> {categoria.tipo}</p>
                </div>
                <div className="flex gap-4 p-4">
                    <button onClick={deletarCategoria} className="flex-1 rounded text-slate-100 font-bold bg-[#434522] hover:bg-[#5b5c38] w-1/4 py-2 mx-auto my-5 flex justify-center">
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
export default DeletarCategoria