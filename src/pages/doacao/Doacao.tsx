function Doacao() {
 
  const locaisDoacao = [
    {
      nome: "Instituto Alimentar",
      imagem: "https://ik.imagekit.io/maridevdata/Instituto%20Alimentar.jpeg?updatedAt=1755123007021",
      endereco: "https://maps.app.goo.gl/5qQPuzcUCRm8YnSY9",
    },
    {
      nome: "SP Invisível",
      imagem: "https://ik.imagekit.io/maridevdata/Logo%20SP%20invisivel%20-%20ok.png?updatedAt=1755123071763",
      endereco:
        "https://maps.app.goo.gl/ZKEisSYzPuGYrMFCA",
    },
    {
      nome: "Amigos do Bem",
      imagem: "https://ik.imagekit.io/maridevdata/Amigos%20do%20Bem.jpeg?updatedAt=1755123007075",
      endereco:
        "https://maps.app.goo.gl/5UogH9RyVee82hhCA",
    },
  ];

  return (
    <div className="flex flex-col items-center mx-4">
      <div className="container mx-auto my-4 rounded-2xl overflow-hidden">
        <img
          className="w-full object-cover h-150 border-white"
          src="https://ik.imagekit.io/maridevdata/Doa%C3%A7%C3%A3o%20de%20Alimentos.png?updatedAt=1755121848344"
          alt="Capa do Perfil"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {locaisDoacao.map((local, index) => (
          <div
            key={index}
            className="bg-white h-80 w-60 rounded-xl shadow-lg overflow-hidden"
          >
            <img
              src={local.imagem}
              alt={`Imagem de ${local.nome}`}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col items-center">
              <h3 className="text-xl font-bold text-[#434522] mb-2">
                {local.nome}
              </h3>
              <a
                href={local.endereco}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#949675] font-bold text-white px-4 py-2 rounded hover:bg-[#434522] transition"
              >
                Ver no Google Maps
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Doacao;
