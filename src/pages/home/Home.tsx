function Home() {
  return (
    <>
      {/* ===========================================================
        🌆 Seção 1 - Banner principal (imagem de fundo)
        Responsividade:
        - Mantém o banner fixo e cobrindo toda a largura.
        - Reduz a altura em telas menores para melhor adaptação.
      ============================================================ */}
      <div className="relative w-full overflow-hidden">
        <div className="bg-[url(https://ik.imagekit.io/maridevdata/Terminal%20Gourmet.png?updatedAt=1755023249713)] 
                        bg-no-repeat bg-cover min-h-[70vh] md:min-h-[80vh] 
                        shadow opacity-90 animate-[zoomIn_3s_ease_forwards]">
        </div>
      </div>

      {/* ===========================================================
        📖 Seção 2 - Nossa História
        Responsividade:
        - Centraliza texto e adiciona margens laterais menores no mobile.
      ============================================================ */}
      <section className="flex flex-col justify-center text-center p-5 max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl text-[#434522] font-bold my-5 leading-relaxed">
          Nossa História
        </h1>
        <p className="mx-2 md:mx-10 text-lg md:text-2xl text-balance">
          Fundado em 2025, o Terminal Gourmet nasceu do sonho de levar comida
          saborosa, saudável e preparada com carinho para o dia a dia corrido
          das pessoas. Tudo começou na cozinha da nossa família, onde cada
          receita era feita com ingredientes frescos, selecionados e temperos
          que carregam memórias afetivas. Hoje, mantemos a mesma essência:
          oferecer pratos com qualidade, entrega rápida e um toque especial que
          faz cada refeição ser um momento único.
        </p>
      </section>

      {/* ===========================================================
        🍲 Seção 3 - Cards de culinária
        Responsividade:
        - Empilha os cards no mobile (1 por linha).
        - No desktop, usa grid com 3 colunas.
      ============================================================ */}
      <section className="px-5 md:px-20 py-10">
        <h1 className="text-3xl md:text-4xl text-center mb-10 text-[#434522] font-bold">
          Conheça Nossa Culinária
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* ===== Card 1 ===== */}
          <div className="bg-[#7f6748] rounded-lg shadow-lg p-4 text-white flex flex-col items-center hover:opacity-80 transition">
            <img
              src="https://ik.imagekit.io/maridevdata/Foto%20Saudavel.jpeg?updatedAt=1755025581337"
              alt="Saudável"
              className="w-56 h-36 rounded-md mb-4 object-cover"
            />
            <h2 className="text-lg font-semibold mb-2">Saudável</h2>
            <p className="text-center">
              Receitas equilibradas, frescas e nutritivas, preparadas para cuidar do seu corpo sem abrir mão do prazer de uma boa refeição.
            </p>
          </div>

          {/* ===== Card 2 ===== */}
          <div className="bg-[#7f6748] rounded-lg shadow-lg p-4 text-white flex flex-col items-center hover:opacity-80 transition">
            <img
              src="https://ik.imagekit.io/maridevdata/Prato%20Saudavel2.jpg?updatedAt=1755026274300"
              alt="Sofisticada"
              className="w-56 h-36 rounded-md mb-4 object-cover"
            />
            <h2 className="text-lg font-semibold mb-2">Sofisticada</h2>
            <p className="text-center">
              Cada prato é preparado com ingredientes selecionados e técnicas refinadas, trazendo à mesa uma experiência gastronômica única.
            </p>
          </div>

          {/* ===== Card 3 ===== */}
          <div className="bg-[#7f6748] rounded-lg shadow-lg p-4 text-white flex flex-col items-center hover:opacity-80 transition">
            <img
              src="https://ik.imagekit.io/maridevdata/Prato%20Saboroso.jpeg?updatedAt=1755025581293"
              alt="Saborosa"
              className="w-56 h-36 rounded-md mb-4 object-cover"
            />
            <h2 className="text-lg font-semibold mb-2">Saborosa</h2>
            <p className="text-center">
              Sabores ricos e equilibrados, criados com técnicas refinadas para proporcionar uma experiência memorável do início ao fim da refeição.
            </p>
          </div>
        </div>
      </section>

      {/* ===========================================================
        ☎️ Seção 4 - Contatos e localização
        Responsividade:
        - Empilha texto e imagem no mobile.
        - Mantém lado a lado em telas grandes.
      ============================================================ */}
      <section className="flex flex-col md:flex-row justify-center items-center gap-10 py-16 px-5 bg-[#434522]/30">
        {/* Texto e informações */}
        <div className="space-y-8 text-center md:text-left">
          <p className="text-[#434522] text-4xl md:text-6xl font-bold">Faça seu pedido</p>

          <div>
            <p className="text-2xl md:text-3xl text-[#434522] font-bold">Reservas</p>
            <span className="text-xl md:text-2xl text-[#434522]">(11) 99999-9999</span>
          </div>

          <div>
            <p className="text-2xl md:text-3xl text-[#434522] font-bold">Delivery</p>
            <span className="text-xl md:text-2xl text-[#434522] break-all">https://terminalgourmet.netlify.app/</span>
          </div>

          <div>
            <p className="text-2xl md:text-3xl text-[#434522] font-bold">Como chegar</p>
            <iframe
              title="Mapa Terminal Gourmet"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.1234567890!2d-46.6531234!3d-23.5645678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59b123456789%3A0xabcdef123456789!2sRua Teodoro Sampaio, 1629, Pinheiros, São Paulo - SP, CEP 05405-150!5e0!3m2!1spt-BR!2sbr!4v1691913600000!5m2!1spt-BR!2sbr"
              width="100%"
              height="200"
              style={{ border: 0 }}
              loading="lazy"
              className="rounded-lg mt-4"
            ></iframe>
          </div>
        </div>

        {/* Imagem lateral */}
        <img
          src="https://ik.imagekit.io/maridevdata/Restaurante%20Home.jpg?updatedAt=1755106030159"
          alt="Foto da div"
          className="h-[40vh] md:h-[65vh] rounded-xl object-cover"
        />
      </section>

      {/* ===========================================================
        👥 Seção 5 - Nossos clientes
        Responsividade:
        - Empilha os cards no mobile (2 por linha em tablets, 1 no celular).
        - No desktop, mantém 4 colunas.
      ============================================================ */}
      <section className="max-w-6xl mx-auto py-16 text-[#434522] px-5">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Nossos clientes
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Cliente 1 */}
          <div className="bg-[#7f6748] rounded-lg shadow-lg p-4 text-white flex flex-col items-center hover:opacity-80 transition">
            <img
              src="https://ik.imagekit.io/vtdzeofuq/douglas2.jpg?updatedAt=1755173688168"
              alt="Imagem cliente 1"
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">Douglas</h2>
            <p className="text-center text-gray-200 text-sm md:text-base">
              "Cada prato é uma obra de arte no sabor e na apresentação. Uma experiência gastronômica inesquecível."
            </p>
          </div>

          {/* Cliente 2 */}
          <div className="bg-[#7f6748] rounded-lg shadow-lg p-4 text-white flex flex-col items-center hover:opacity-80 transition">
            <img
              src="https://ik.imagekit.io/maridevdata/Image%20(2).jpg?updatedAt=1753313747315"
              alt="Imagem cliente 2"
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">Mariana</h2>
            <p className="text-center text-gray-200 text-sm md:text-base">
              "Finalmente encontrei um lugar onde comer saudável é também uma experiência deliciosa e cheia de sabor."
            </p>
          </div>

          {/* Cliente 3 */}
          <div className="bg-[#7f6748] rounded-lg shadow-lg p-4 text-white flex flex-col items-center hover:opacity-80 transition">
            <img
              src="https://ik.imagekit.io/7lmae3nvh/image.png?updatedAt=1759864236039"
              alt="Imagem cliente 3"
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">Giulia</h2>
            <p className="text-center text-gray-200 text-sm md:text-base">
              "Os temperos, as combinações e a textura… tudo é pensado nos mínimos detalhes. Simplesmente impecável!"
            </p>
          </div>

          {/* Cliente 4 */}
          <div className="bg-[#7f6748] rounded-lg shadow-lg p-4 text-white flex flex-col items-center hover:opacity-80 transition">
            <img
              src="https://ik.imagekit.io/vtdzeofuq/fotoYsabella.jpeg?updatedAt=1755175639233"
              alt="Imagem cliente 4"
              className="w-32 h-32 rounded-full object-cover mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">Ysabella</h2>
            <p className="text-center text-gray-200 text-sm md:text-base">
              "O site é lindo e fácil de navegar, já dá água na boca antes mesmo de fazer o pedido."
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
