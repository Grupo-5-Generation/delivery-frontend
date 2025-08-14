import { useContext, useState } from 'react';
import { FaCheck, FaXmark } from 'react-icons/fa6';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import type Produto from '../../../models/Produto';
import { aplicarDesconto } from '../../../services/Service';

interface CardProdutoProps {
    produto: Produto
}

function CardProduto({ produto }: CardProdutoProps) {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [produtoDesconto, setProdutoDesconto] = useState<Produto>( {} as Produto);
    const navigate = useNavigate();

    const { id } = useParams<{ id: string }>()

    const { usuario, handleLogout } = useContext(AuthContext)
    const token = usuario.token

    function formatarPreco(valor: number) {
        return valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });

    }
    async function darDesconto() {
    try {
        await aplicarDesconto(
            `/produto/desconto-saudavel/${produto.id}`,
            setProdutoDesconto,
            { headers: { Authorization: token } }
        );
        alert("Desconto aplicado com sucesso!");
        
    } catch (error) {
        console.error(error);
        alert("Erro ao aplicar desconto em produto.");
    }
}

    return (
        <tr className="border-b border-b-[#ac906c] hover:bg-gray-50 text-green-950">
            <td className="px-4 py-3">
                <div className="relative inline-block text-left">
                    <details className="group">
                        <summary className="list-none cursor-pointer p-2 rounded-lg hover:bg-gray-300">
                            ☰
                        </summary>
                        <div className="absolute mt-1 bg-white border rounded-lg shadow-lg w-40 z-10">
                            <Link to={`/mostrarproduto/${produto.id}`} className="block px-4 py-2 hover:bg-gray-100">
                                <i className="fa-solid fa-eye text-1xl p-2"></i>
                                Visualizar
                            </Link>
                            <Link to={`/editarproduto/${produto.id}`} className="block px-4 py-2 hover:bg-gray-100">
                                <i className="fa-solid fa-edit text-1xl p-2"></i>
                                Alterar
                            </Link>
                            <button onClick={darDesconto} className="w-full text-left px-4 py-2 hover:bg-gray-100">
                                <i className="fa-solid fa-usd text-1xl p-2"></i>
                                Desconto saudável
                            </button>
                            <Link to={`/deletarproduto/${produto.id}`} className="block px-4 py-2 hover:bg-gray-100">
                                <i className="fa-solid fa-trash text-1xl p-2"></i>
                                Deletar
                            </Link>
                        </div>
                    </details>
                </div>
            </td>

            <td className="px-4 py-3 ">{produto.nome}</td>

            <td className="px-4 py-3">{produto.quantidade}</td>

            <td className="px-4 py-3">{formatarPreco(produto.precoAnterior)}</td>

            <td className="px-4 py-3">{formatarPreco(produto.desconto)}</td>

            <td className="px-4 py-3">{formatarPreco(produto.precoAtual)}</td>

            <td className="px-4 py-3">{produto.categoria?.descricao}</td>

            <td className="px-4 py-3">
                {produto.status ? (
                    <FaCheck className="text-green-500" />
                ) : (
                    <FaXmark className="text-red-500" />
                )}
            </td>

        </tr>
    )
}

export default CardProduto