/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";
import { buscar } from "../../../services/Service";
import { AuthContext } from "../../../context/AuthContext";
import type Produto from "../../../models/Produto";
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
        buscarProduto()
    }, [produto.length])

    return (
        <>
            {produto.length === 0 && (
                <DNA
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper mx-auto"
                />
            )}
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col mx-2">
                    <div className='container mx-auto my-4 
                        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
                    >
                        {produto.map((produto) => (
                            <CardProduto key={produto.id} produto={produto} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListaProduto;