function Doacao() {
 
  const locaisDoacao = [
    {
      nome: "Banco de Alimentos Santos",
      imagem: "https://ik.imagekit.io/7lmae3nvh/alimentos/banco1.png",
      endereco: "https://www.google.com/maps?q=Banco+de+Alimentos+Santos",
    },
    {
      nome: "Associação Atlética Portuguesa Santista",
      imagem: "https://ik.imagekit.io/7lmae3nvh/alimentos/image.png?updatedAt=1755089011146",
      endereco:
        "https://maps.app.goo.gl/HmRqMxRKruJhjnse6",
    },
    {
      nome: "ONG Marmita Solidária",
      imagem: "https://ik.imagekit.io/7lmae3nvh/alimentos/marmita.png",
      endereco:
        "https://www.google.com/maps?q=Rua+da+Solidariedade,+Santos,+SP",
    },
  ];

  return (
    <div className="flex flex-col items-center mx-4">
      <div className="container mx-auto my-4 rounded-2xl overflow-hidden">
        <img
          className="w-full object-cover border-b-8 border-white"
          src="https://ik.imagekit.io/7lmae3nvh/alimentos/image.png?updatedAt=1755087954982"
          alt="Capa do Perfil"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {locaisDoacao.map((local, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <img
              src={local.imagem}
              alt={`Imagem de ${local.nome}`}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col items-center">
              <h3 className="text-xl font-bold text-sky-900 mb-2">
                {local.nome}
              </h3>
              <a
                href={local.endereco}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sky-900 text-white px-4 py-2 rounded hover:bg-sky-700 transition"
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
