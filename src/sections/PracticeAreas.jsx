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
      className="container mx-auto min-h-screen bg-background overflow-hidden font-title mb-9 mt-10 "
    >
      <div className="container mx-auto relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <h2 className="text-4xl text-foreground italic mt-4 mb-4 font-title">
            <span className="text-muted">Áreas</span> de Atuação
          </h2>
          <p className="text-foreground font-secondary font-extrabold text-xl">
            Conheça as principais áreas em que prestamos assessoria e
            representação jurídica.
          </p>
        </div>
        {/* Practice Areas */}
        <div className="grid items-center w-full gap-5 px-5 md:grid-cols-2 lg:grid-cols-3 mb-1">
          {areas.map((area, idx) => (
            <div
              key={idx}
              className="shadow-lg place-self-center w-full h-full py-8 px-5 bg-card-background overflow-hidden flex flex-col items-center rounded-tr-2xl rounded-bl-2xl  2xl:w-full "
            >
              <img className="w-10 fill-red-600" src={area.icon} alt="" />
              <h3 className="text-xl font-extrabold font-secondary text-center lg:text-2xl ">
                {area.title}
              </h3>
              <p className="text-left pt-5 font-bold font-secondary text-foreground/80 lg:text-xl">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
