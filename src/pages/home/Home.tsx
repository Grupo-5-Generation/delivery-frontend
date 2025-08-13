import { FaBuilding, FaMoneyBillWave } from "react-icons/fa";

function Home() {
  return (
    <>
      {/* Seção 1 - Banner */}
      <div className="bg-[url(https://ik.imagekit.io/maridevdata/Terminal%20Gourmet.png?updatedAt=1755023249713)] overflow-hidden bg-no-repeat bg-cover p-60 shadow opacity-90 animate-[zoomIn_3s_ease_forwards]">
        <div className="flex flex-col gap-5 text-right">
          <div className="flex justify-end mx-15 p-4 text-orange-400 font-bold">
            <div className="flex">
              {/* <ModalFuncionario /> */}
            </div>
          </div>
        </div>
      </div>

      {/* Seção 2 - Nossa História */}
      <div className="flex justify-center flex-col text-center p-5">
        <h1 className="text-4xl text-[#434522] font-bold my-5 leading-relaxed">
          Nossa História
        </h1>
        <p className="mx-10 text-balance">
          Fundado em 2025, o Terminal Gourmet nasceu do sonho de levar comida saborosa, saudável e preparada com carinho para o dia a dia corrido das pessoas. Tudo começou na cozinha da nossa família, onde cada receita era feita com ingredientes frescos, selecionados e temperos que carregam memórias afetivas. Hoje, mantemos a mesma essência: oferecer pratos com qualidade, entrega rápida e um toque especial que faz cada refeição ser um momento único.
        </p>
      </div>

      {/* Seção 3 - Cards */}
      <div className="p-15">
        <h1 className="text-4xl text-center my-10 text-[#434522] font-bold pb-8">
          Conheça Nossa Culinária
        </h1>

        <div className="max-w-3xl max-h-1/2 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pb-26">
          {/* Card 1 */}
          <div className="bg-[#7f6748] rounded-lg shadow-lg p-2 text-white flex flex-col items-center">
            <img
              src="https://ik.imagekit.io/maridevdata/Prato%20Saudavel2.jpg?updatedAt=1755026274300"
              alt="Sofisticada"
              className="w-60 h-30 rounded-md mb-4 flex items-center justify-center"
            />
            <h2 className="text-lg font-semibold mb-2">Sofisticada</h2>
            <p className="text-sm text-white text-center">
              Corpo de texto para adicionar mais informações, além do subtítulo.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#7f6748] rounded-lg shadow-lg p-2 text-white flex flex-col items-center">
            <img
              src="https://ik.imagekit.io/maridevdata/Foto%20Saudavel.jpeg?updatedAt=1755025581337"
              alt="Saudável"
              className="w-60 h-30 rounded-md mb-4 flex items-center justify-center"
            />
            <h2 className="text-lg font-semibold mb-2">Saudável</h2>
            <p className="text-sm text-white text-center">
              Corpo de texto para adicionar mais informações, além do subtítulo.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#7f6748] rounded-lg shadow-lg p-2 text-white flex flex-col items-center">
            <img
              src="https://ik.imagekit.io/maridevdata/Prato%20Saboroso.jpeg?updatedAt=1755025581293"
              alt="Sofisticada"
              className="w-60 h-30 rounded-md mb-4 flex items-center justify-center"
            />
            <h2 className="text-lg font-semibold mb-2">Sofisticada</h2>
            <p className="text-sm text-white text-center">
              Corpo de texto para adicionar mais informações, além do subtítulo.
            </p>
          </div>
        </div>
      </div>

      {/* Seção 4 - Texto, imagem e clientes */}
      <div className="grid grid-cols-2 gap-4 pt-26 bg-[#a4a78e] ">
        {/* Texto */}
        <div className="text-sky-900 text-3xl p-25 text-center text-shadow-xs font-bold flex items-center justify-center">
          <p>Faça seu pedido</p>
        </div>

        {/* Imagem */}
        <div className="flex justify-center items-center ">
          <img
            src="https://ik.imagekit.io/maridevdata/Restaurante%20Home.jpg?updatedAt=1755106030159"
            alt="Foto da div"
            className="w-[500px] h-[380px] mx-10 object-contain"
          />
        </div>
      </div>

      {/* Seção 5 - Nossos Clientes */}
      <div className="w-7xl h-5xl mx-auto pb-16 my-5 text-[#434522]">
        <h2 className="text-4xl font-bold text-center mb-8">
          Nossos clientes
        </h2>
        <div className="grid grid-cols-5 gap-4 pl-55">
          {/* Cliente 1 */}
          <div className="bg-[#7f6748] rounded-lg shadow-lg p-2 text-white flex flex-col items-center hover:opacity-55">
            <img
              src="https://ik.imagekit.io/zddqh4rhi/homi_2.png?updatedAt=1755099394672"
              alt="Imagem cliente 1"
              className="w-30 h-40 rounded-md mb-4 flex items-center justify-center"
            />
            <h2 className="text-lg font-semibold mb-2">André Silva</h2>
            <p className="text-sm text-gray-200 text-center">
              "Melhor marmita gourmet que já pedi!"
            </p>
          </div>

          {/* Cliente 2 */}
          <div className="bg-[#7f6748] rounded-lg shadow-lg p-2 text-white flex flex-col items-center hover:opacity-55">
            <img
              src="https://ik.imagekit.io/zddqh4rhi/homi_3.png?updatedAt=1755099481795"
              alt="Imagem cliente 2"
              className="w-60 h-40 rounded-md mb-4 flex items-center justify-center"
            />
            <h2 className="text-lg font-semibold mb-2">Thiago Souza</h2>
            <p className="text-sm text-gray-200 text-center">
              "Já recomendei para todos meus amigos!"
            </p>
          </div>

          {/* Cliente 3 */}
          <div className="bg-[#7f6748] rounded-lg shadow-lg p-2 text-white flex flex-col items-center hover:opacity-55">
            <img
              src="https://ik.imagekit.io/zddqh4rhi/muie_1.png?updatedAt=1755099619412"
              alt="Imagem cliente 3"
              className="w-30 h-40 rounded-md mb-4 flex items-center justify-center"
            />
            <h2 className="text-lg font-semibold mb-2">Patricia Lima</h2>
            <p className="text-sm text-gray-200 text-center">
              "Site fácil de usar, fiz meu pedido em segundos."
            </p>
          </div>

          {/* Cliente 4 */}
          <div className="bg-[#434522] rounded-lg shadow-lg p-2 text-white flex flex-col items-center hover:opacity-55">
            <img
              src="https://ik.imagekit.io/zddqh4rhi/muie_2.png?updatedAt=1755099690952"
              alt="Imagem cliente 4"
              className="w- h-40 rounded-md mb-4 flex items-center justify-center"
            />
            <h2 className="text-lg font-semibold mb-2">Bruna Tavares</h2>
            <p className="text-sm text-gray-200 text-center">
              "Entrega super rápida e comida deliciosa!"
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
