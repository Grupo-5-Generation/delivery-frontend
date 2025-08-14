/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { FaCheck, FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
import type Produto from "../../../models/Produto";
import { aplicarDesconto } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlesta";

interface CardProdutoProps {
  produto: Produto;
  atualizarProdutoAtualizado: (produto: Produto) => void;
}

function CardProduto({
  produto,
  atualizarProdutoAtualizado,
}: CardProdutoProps) {
  const [produtoDesconto, setProdutoDesconto] = useState<Produto>(
    {} as Produto
  );

  function formatarPreco(valor: number) {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  async function darDesconto() {
    try {
      const token = localStorage.getItem("token");
      const resposta = await aplicarDesconto(
        `/produto/desconto-saudavel/${produto.id}`,
        setProdutoDesconto,
        { headers: { Authorization: token } }
      );

      // Atualiza o produto na lista do componente pai
      atualizarProdutoAtualizado(resposta);

      ToastAlerta("Desconto aplicado com sucesso!", "sucesso");
    } catch (error) {
      console.error(error);
      ToastAlerta("Erro ao aplicar o desconto", "erro");
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
              <Link
                to={`/mostrarproduto/${produto.id}`}
                className="block px-4 py-2 hover:bg-gray-100"
              >
                <i className="fa-solid fa-eye text-1xl p-2"></i>
                Visualizar
              </Link>
              <Link
                to={`/editarproduto/${produto.id}`}
                className="block px-4 py-2 hover:bg-gray-100"
              >
                <i className="fa-solid fa-edit text-1xl p-2"></i>
                Alterar
              </Link>
              <button
                onClick={darDesconto}
                className="w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                <i className="fa-solid fa-usd text-1xl p-2"></i>
                Aplicar Desconto
              </button>
              <Link
                to={`/deletarproduto/${produto.id}`}
                className="block px-4 py-2 hover:bg-gray-100"
              >
                <i className="fa-solid fa-trash text-1xl p-2"></i>
                Deletar
              </Link>
            </div>
          </details>
        </div>
      </td>

      <td className="px-4 py-3 ">{produto.nome}</td>
      <td className="px-4 py-3">{produto.quantidade}</td>
      <td className="px-4 py-3">{formatarPreco(produto.precoAtual)}</td>
      <td className="px-4 py-3">{formatarPreco(produto.desconto || 0)}</td>
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
  );
}

export default CardProduto;
