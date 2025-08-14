import { Link } from 'react-router-dom';
import type Categoria from '../../../models/Categoria';

interface CardCategoriaProps {
    categoria: Categoria
}

function CardCategoria({ categoria}: CardCategoriaProps) {

    return (
        <tr className="border-b border-b-[#ac906c] hover:bg-gray-50 text-green-950">
    
       <td className="px-4 py-3">
            <div className="relative inline-block text-left">
            <details className="group">
                <summary className="list-none cursor-pointer p-2 rounded-lg hover:bg-gray-300">
                ☰
                </summary>
                <div className="absolute mt-1 bg-white border rounded-lg shadow-lg w-40 z-10">
                <Link to={`/editarcategoria/${categoria.id}`} className="block px-4 py-2 hover:bg-gray-100">
                    <i className="fa-solid fa-edit text-1xl p-2"></i>
                    Alterar
                </Link>
                
                <Link to={`/deletarcategoria/${categoria.id}`} className="block px-4 py-2 hover:bg-gray-100">
                <i className="fa-solid fa-trash text-1xl p-2"></i>
                    Deletar
                </Link>
                </div>
            </details>
            </div>
        </td> 

            <td className="px-4 py-3 ">{categoria.tipo}</td>
                
            <td className="px-4 py-3">{categoria.descricao}</td>

        </tr>
    )
}

export default CardCategoria