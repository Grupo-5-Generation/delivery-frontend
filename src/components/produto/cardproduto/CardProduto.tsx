import { useState } from 'react';
import { FaCheck, FaXmark } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';
import type Produto from '../../../models/Produto';
import { aplicarDesconto } from '../../../services/Service';

interface CardProdutoProps {
    produto: Produto
}

function CardProduto({ produto }: CardProdutoProps) {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [produtoDesconto, setProdutoDesconto] = useState<Produto>(
        {} as Produto



        
    );
    const navigate = useNavigate();

    function formatarPreco(valor: number) {
        return valor.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });

    }
    async function darDesconto() {
        try {
            await aplicarDesconto(
                `/produto/${produto.id}`,
                setProdutoDesconto
            );
            alert("Desconto aplicado com sucesso!");
            navigate("/listaproduto");
        } catch (error) {
            console.error(error);
            alert("Erro ao aplicar o desconto.");
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
                            <Link to={`/cadastrarproduto`} className="block px-4 py-2 hover:bg-gray-100">
                                <i className="fa-solid fa-plus text-1xl p-2"></i>
                                Adicionar
                            </Link>
                            <Link to={`/editarproduto/${produto.id}`} className="block px-4 py-2 hover:bg-gray-100">
                                <i className="fa-solid fa-edit text-1xl p-2"></i>
                                Alterar
                            </Link>
                            <button onClick={darDesconto} className="w-full text-left px-4 py-2 hover:bg-gray-100">
                                <i className="fa-solid fa-usd text-1xl p-2"></i>
                                Aplicar Desconto
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