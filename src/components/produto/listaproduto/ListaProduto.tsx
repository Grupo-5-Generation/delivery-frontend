/* eslint-disable @typescript-eslint/no-explicit-any */
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import type Produto from "../../../models/Produto";
import { buscar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlesta";
import CardProduto from "../cardproduto/CardProduto";

function ListaProduto() {
    const navigate = useNavigate();
    const [produto, setProduto] = useState<Produto[]>([]);
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    async function buscarProduto() {
        try {
            await buscar('/produto', setProduto, {
                headers: {
                    Authorization: token,
                },
            });
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout();
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado!', 'info');
            navigate('/');
        }
    }, [token]);

    useEffect(() => {
        buscarProduto();
    }, [produto.length]);

    return (
        <div className="max-w-7xl mx-auto px-4 py-6 text-green-950 ">
            {produto.length === 0 ? (
                <div className="flex items-center justify-center min-h-[300px]">
                    <div className="w-48 h-48">
                        <DotLottieReact
                            src="https://lottie.host/862431d3-1226-4b15-a706-640cb147eba3/xMBPARvpSA.lottie"
                            loop
                            autoplay
                            speed={2.3}
                        />
                    </div>
                </div>
            ) : (
                <div className="bg-white shadow w-full ">
                    <table className="w-full text-sm text-left text-gray-700 ">
                        <thead className="bg-[#ac906c] text-white ">
                            <tr>
                                <th scope="col" className="px-4 py-3">Ações</th>  
                                <th scope="col" className="px-4 py-3">Nome</th>
                                <th scope="col" className="px-4 py-3">Quantidade</th>
                                <th scope="col" className="px-4 py-3">Preço Atual</th>
                                <th scope="col" className="px-4 py-3">Desconto</th>
                                <th scope="col" className="px-4 py-3">Preço com desconto</th>
                                <th scope="col" className="px-4 py-3">Categoria</th>
                                <th scope="col" className="px-4 py-3">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {produto.map((produto) => (
                                <CardProduto
                                    key={produto.id}
                                    produto={produto}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default ListaProduto;
