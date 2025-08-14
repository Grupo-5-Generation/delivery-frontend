
function Home() {
  return (
    <>
      {/* Seção 1 - Banner */}
      <div className="max-w-screen overflow-hidden">
        <div className="bg-[url(https://ik.imagekit.io/maridevdata/Terminal%20Gourmet.png?updatedAt=1755023249713)] bg-no-repeat bg-cover min-h-[70vh] shadow opacity-90 animate-[zoomIn_3s_ease_forwards] "></div>
      </div>

      {/* Seção 2 - Nossa História */}
      <div className="flex justify-center flex-col text-center p-5">
        <h1 className="text-4xl text-[#434522] font-bold my-5 leading-relaxed">
          Nossa História
        </h1>
        <p className="mx-10 text-2xl text-balance">
          Fundado em 2025, o Terminal Gourmet nasceu do sonho de levar comida
          saborosa, saudável e preparada com carinho para o dia a dia corrido
          das pessoas. Tudo começou na cozinha da nossa família, onde cada
          receita era feita com ingredientes frescos, selecionados e temperos
          que carregam memórias afetivas. Hoje, mantemos a mesma essência:
          oferecer pratos com qualidade, entrega rápida e um toque especial que
          faz cada refeição ser um momento único.
        </p>
      </div>

      {/* Seção 3 - Cards */}
      <div className="p-15">
        <h1 className="text-4xl text-center my-10 text-[#434522] font-bold pb-8">
          Conheça Nossa Culinária
        </h1>

        <div className="max-w-3xl h-100 max-h-1/2 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pb-26">
         
          {/* Card 1 */}
          <div className="bg-[#7f6748] rounded-lg shadow-lg p-2 text-white flex flex-col items-center">
            <img
              src="https://ik.imagekit.io/maridevdata/Foto%20Saudavel.jpeg?updatedAt=1755025581337"
              alt="Saudável"
              className="w-60 h-30 rounded-md mb-4 flex items-center justify-center"
            />
            <h2 className="text-lg font-semibold mb-2">Saudável</h2>
            <p className="text-1xl text-white text-center">
              Receitas equilibradas, frescas e nutritivas, preparadas para cuidar do seu corpo sem abrir mão do prazer de uma boa refeição.
            </p>
          </div>

           {/* Card 2 */}
          <div className="bg-[#7f6748] rounded-lg p-2 shadow-lg text-white flex flex-col items-center">
            <img
              src="https://ik.imagekit.io/maridevdata/Prato%20Saudavel2.jpg?updatedAt=1755026274300"
              alt="Sofisticada"
              className="w-60 h-30 rounded-md mb-4 flex items-center justify-center"
            />
            <h2 className="text-lg font-semibold mb-2">Sofisticada</h2>
            <p className="text-1xl text-white text-center">
              Cada prato é preparado com ingredientes selecionados e técnicas refinadas, trazendo à mesa uma experiência gastronômica única, onde sofisticação e sabor se encontram.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#7f6748] rounded-lg shadow-lg p-2 text-white flex flex-col items-center">
            <img
              src="https://ik.imagekit.io/maridevdata/Prato%20Saboroso.jpeg?updatedAt=1755025581293"
              alt="Saborosa"
              className="w-60 h-30 rounded-md mb-4 flex items-center justify-center"
            />
            <h2 className="text-lg font-semibold mb-2">Saborosa</h2>
            <p className="text-1xl text-white text-center">
              Sabores ricos e equilibrados, criados com técnicas refinadas para proporcionar uma experiência memorável do início ao fim da refeição.
            </p>
          </div>
        </div>
      </div>

      {/* Seção 4 - Texto, imagem e clientes */}
      <div className="flex justify-center gap-50 py-18 bg-[#434522]/30 ">
        {/* Texto */}
        <div className="my-auto space-y-8">
          <p className="text-[#434522] text-6xl text-between text-shadow-xs font-bold py-10">Faça seu pedido</p>

          <div>
            <p className="text-3xl text-[#434522] font-bold">Reservas</p>
            <span className="text-[#434522] text-2xl">(11) 99999-9999</span>
          </div>
          <div>
            <p className="text-3xl text-[#434522] font-bold">Delivery</p>
            <span className="text-[#434522] text-2xl">link muito doido aqui mas vamo colocar alguma coisa só pra ocupar espaço</span>
          </div>
          <div>
            <div>
              <p className="text-3xl text-[#434522] font-bold">Como chegar</p>
              <iframe
                title="Mapa Terminal Gourmet"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.1234567890!2d-46.6531234!3d-23.5645678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59b123456789%3A0xabcdef123456789!2sRua Teodoro Sampaio, 1629, Pinheiros, São Paulo - SP, CEP 05405-150!5e0!3m2!1spt-BR!2sbr!4v1691913600000!5m2!1spt-BR!2sbr"
                width="400"
                height="200"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg mt-4"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Imagem */}
          <img
            src="https://ik.imagekit.io/maridevdata/Restaurante%20Home.jpg?updatedAt=1755106030159"
            alt="Foto da div"
            className="h-[65vh] mx-10 rounded-xl object-contain"
          />
      </div>

      {/* Seção 5 - Nossos Clientes */}
      <div className="w-7xl h-5xl mx-auto py-45 text-[#434522]">
        <h2 className="text-4xl font-bold text-center mb-8">Nossos clientes</h2>
        <div className="grid grid-cols-5 gap-4 pl-55">
          {/* Cliente 1 */}
          <div className="bg-[#7f6748] rounded-lg shadow-lg p-2 text-white flex flex-col items-center hover:opacity-55">
            <img
              src="https://ik.imagekit.io/zddqh4rhi/businessman.png?updatedAt=1755105724971"
              alt="Imagem cliente 1"
              className="w-60 h-40 rounded-md mb-4 flex items-center justify-center"
            />
            <h2 className="text-lg font-semibold mb-2">André Silva</h2>
            <p className="text-1xl font-semibold text-gray-200 text-center">
              "Cada prato é uma obra de arte no sabor e na apresentação. Uma experiência gastronômica inesquecível"
            </p>
          </div>

          {/* Cliente 2 */}
          <div className="bg-[#7f6748] rounded-lg shadow-lg p-2 text-white flex flex-col items-center hover:opacity-55">
            <img
              src="https://ik.imagekit.io/zddqh4rhi/man.png?updatedAt=1755105710891"
              alt="Imagem cliente 2"
              className="w-60 h-40 rounded-md mb-4 flex items-center justify-center"
            />
            <h2 className="text-lg font-semibold mb-2">Thiago Souza</h2>
            <p className="text-1xl font-semibold text-gray-200 text-center">
              "Finalmente encontrei um lugar onde comer saudável é também uma experiência deliciosa e cheia de sabor."
            </p>
          </div>

          {/* Cliente 3 */}
          <div className="bg-[#7f6748] rounded-lg shadow-lg p-2 text-white flex flex-col items-center hover:opacity-55">
            <img
              src="https://ik.imagekit.io/zddqh4rhi/woman%20(1).png?updatedAt=1755105698580"
              alt="Imagem cliente 3"
              className="w-60 h-40 rounded-md mb-4 flex items-center justify-center"
            />
            <h2 className="text-lg font-semibold mb-2">Patricia Lima</h2>
            <p className="text-1xl font-semibold text-gray-200 text-center">
              "Os temperos, as combinações e a textura… tudo é pensado nos mínimos detalhes. Simplesmente impecável!"
            </p>
          </div>

          {/* Cliente 4 */}
          <div className="bg-[#7f6748] rounded-lg shadow-lg p-2 text-white flex flex-col items-center hover:opacity-55">
            <img
              src="https://ik.imagekit.io/zddqh4rhi/woman.png?updatedAt=1755105683820"
              alt="Imagem cliente 4"
              className="w- h-40 rounded-md mb-4 flex items-center justify-center"
            />
            <h2 className="text-lg font-semibold mb-2">Bruna Tavares</h2>
            <p className="text-1xl font-semibold text-gray-200 text-center">
              "O site é lindo e fácil de navegar, já dá água na boca antes mesmo de fazer o pedido."
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
