import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full bg-sky-900 text-white py-4'>
                <div className="container mx-auto flex justify-between text-lg px-8">
                    <Link to='/home' className="text-2xl font-bold px-2 hover:bg-[#275292]">Terminal Gourmet</Link>

                    <div className='flex gap-4'>
                        <Link to='/home' className='rounded-md px-2 hover:bg-[#275292]'>Home</Link>
                        {/* <Link to='/funcionarios' className='hover:bg-amber-500'> Cadastrar Funcionários</Link> */}
                        <Link to='/listarfuncionarios' className='rounded-md px-2 hover:bg-[#275292]'>Funcionários </Link>
                        <Link to='/listarcategorias' className='rounded-md px-2 hover:bg-[#275292]'>Categoria</Link>
                        {/* <Link to='/setores' className='hover:bg-amber-500'> Cadastrar Setor</Link> */}
                        <Link to='/login' className='rounded-md px-2 hover:bg-[#275292]'>Sair<i className="fa fa-sign-out pl-2 text-white text-base p-1"></i></Link>
                        
      
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar