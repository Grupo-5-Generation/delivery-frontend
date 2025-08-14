import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import type Categoria from "../../../models/Categoria";
import type Produto from "../../../models/Produto";
import { buscar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlesta";

function MostrarProduto() {
    const navigate = useNavigate();

    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [categoria] = useState<Categoria>({ id: 0, descricao: '', tipo: '' });
    const [produto, setProduto] = useState<Produto>({} as Produto);

    const { id } = useParams<{ id: string }>();

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    async function buscarProdutoPorId(id: string) {
        try {
            await buscar(`/produto/${id}`, setProduto, {
                headers: { Authorization: token }
            });
        } catch (error: any) {
            if (error.toString().includes("401")) {
                handleLogout();
            }
        }
    }

    async function buscarTemas() {
        try {
            await buscar("/categoria", setCategorias, {
                headers: { Authorization: token }
            });
        } catch (error: any) {
            if (error.toString().includes("401")) {
                handleLogout();
            }
        }
    }

    useEffect(() => {
        if (token === "") {
            ToastAlerta("Você precisa estar logado!", "info");
            navigate("/");
        }
    }, [token]);

    useEffect(() => {
        buscarTemas();

        if (id !== undefined) {
            buscarProdutoPorId(id);
        }
    }, [id]);

    useEffect(() => {
        setProduto({
            ...produto,
            categoria: categoria,
        });
    }, [categoria]);

    function retornar() {
        navigate('/listaproduto');
    }

    const fotoExibir = produto.foto && produto.foto.trim() !== ""
        ? produto.foto
        : "https://ik.imagekit.io/mateuscamargo/image.png?updatedAt=1755137639953"; // FOTO PADRÃO

    return (
        <>
        <div className="max-w-7xl mx-auto px-4 py-6 pt-30" >
            <div className="font-bold bg-[#434522]/30 p-8 rounded-2xl flex flex-col items-center gap-6">
                <img
                    src={fotoExibir}
                    alt={produto.nome}
                    className="max-h-60 object-contain border rounded"
                />

                <div className="flex flex-col text-[#473e31] gap-2 text-left">
                    <span className="font-semibold">
                        Produto: <span className="font-normal">{produto.nome}</span>
                    </span>
                    <span className="font-semibold">
                        Preço: <span className="font-normal">R$ {produto.precoAtual}</span>
                    </span>
                    <span className="font-semibold">
                        Quantidade: <span className="font-normal">{produto.quantidade}</span>
                    </span>
                    <span className="font-semibold">
                        Status: <span className="font-normal">{produto.status ? "Disponível" : "Indisponível"}</span>
                    </span>
                    {produto.categoria && (
                        <span className="font-semibold">
                            Categoria: <span className="font-normal">{produto.categoria.descricao}</span>
                        </span>
                    )}
                </div>

                <button type="reset" className="rounded text-white bg-[#ac906c] hover:bg-[#c5a67e] w-1/6 py-2" onClick={retornar} >
                    Voltar
                </button>
            </div>
        </div>
        </>
    );
}

export default MostrarProduto;