/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";
import { buscar } from "../../../services/Service";
import { AuthContext } from "../../../context/AuthContext";
import { ToastAlerta } from "../../../utils/ToastAlesta";
import CardCategoria from "../cardcategoria/CardCategoria";
import type Categoria from "../../../models/Categoria";


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
        <div className="max-w-7xl mx-auto px-4 py-6 text-sky-900">
            {categoria.length === 0 && (
                <DNA
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper mx-auto"
                />
            )}
       
            <div className="w-full bg-white shadow">
                <table className="w-full text-sm text-left text-gray-700">
                <thead className=" bg-[#434522] text-<twhite">
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
        </div>     
    );
}

export default ListaCategoria;