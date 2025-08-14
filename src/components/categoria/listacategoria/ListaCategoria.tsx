/* eslint-disable @typescript-eslint/no-explicit-any */
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import type Categoria from "../../../models/Categoria";
import { buscar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlesta";
import CardCategoria from "../cardcategoria/CardCategoria";

function ListaCategoria() {

    const navigate = useNavigate();

    const [categoria, setCategoria] = useState<Categoria[]>([]);

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    async function buscarCategoria() {
        try {
            await buscar('/categoria', setCategoria, {
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
        buscarCategoria()
    }, [categoria.length])

    return (
        <div className="max-w-7xl mx-auto px-4 py-6 text-green-950 ">
            {categoria.length === 0 ? (
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
                <>
                <div className="flex justify-between items-center mb-4 pt-20">
                    <Link to="/cadastrarcategoria" className="bg-[#434522] hover:bg-[#5b5c38] text-white px-4 py-2 font-bold">
                        <i className="fa fa-plus text-white text-base p-1"></i>
                        Inserir Categoria
                    </Link>
                </div>
                <div className="bg-white shadow w-full ">
                        <table className="w-full text-sm text-left text-gray-700 ">
                            <thead className="bg-[#ac906c] text-white ">
                            <tr>
                            <th scope="col" className="px-4 py-3">Ações</th>  
                            <th scope="col" className="px-4 py-3">Tipo</th>
                            <th scope="col" className="px-4 py-3">Descrição</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categoria.map((categoria) => (
                            <CardCategoria
                                key={categoria.id}
                                categoria={categoria}
                            />
                            ))}
                        </tbody>
                    </table>
                </div>
                </>
            )}
        </div>     
    );
}

export default ListaCategoria;