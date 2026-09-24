const areas = [
  {
    title: "Direito Civil",
    description:
      "Atuação em relações civis, contratos, obrigações, indenizações e demandas judiciais.",
    icon: "/map_courthouse.svg",
  },
  {
    title: "Direito Trabalhista",
    description:
      "Orientação e representação em questões relacionadas às relações de trabalho.",
    icon: "/map_courthouse.svg",
  },
  {
    title: "Direito Previdenciário",
    description:
      "Orientação sobre benefícios e questões relacionadas à Previdência Social.",
    icon: "/map_courthouse.svg",
  },
  {
    title: "Direito de Família",
    description:
      "Atuação cuidadosa em questões familiares, patrimoniais e sucessórias.",
    icon: "/map_courthouse.svg",
  },
  {
    title: "Direito do Consumidor",
    description:
      "Proteção dos direitos do consumidor e atuação em conflitos de consumo.",
    icon: "/map_courthouse.svg",
  },
  {
    title: "Direito Criminal",
    description:
      "Atuação e defesa em questões relacionadas a investigações e processos criminais.",
    icon: "/map_courthouse.svg",
  },
];

const PracticeAreas = () => {
  return (
    <section
      id="areasatuacao"
      className="min-h-screen bg-background overflow-hidden font-title mb-15 mt-10 md:px-30 lg:px-50"
    >
      <div className="text-center mx-auto max-w-3xl mb-16">
        <h2 className="text-4xl text-foreground italic font-bold mt-4 mb-4">
          <span className="text-muted">Áreas</span> de Atuação
        </h2>
        <p className="text-foreground">
          Conheça as principais áreas em que prestamos assessoria e
          representação jurídica.
        </p>
      </div>

      {/* Practice Areas */}
      <div className="grid items-center gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {areas.map((area, idx) => (
          <div
            key={idx}
            className="shadow-lg place-self-center w-50 h-full py-8 px-4 bg-card-background overflow-hidden flex flex-col items-center rounded-tr-2xl rounded-bl-2xl  lg:w-60"
          >
            <img className="w-10 fill-red-600" src={area.icon} alt="" />
            <h3 className="text-2xl font-extrabold text-center">{area.title}</h3>
            <p className="text-left pt-5 font-medium">{area.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PracticeAreas;
