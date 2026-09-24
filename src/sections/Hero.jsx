const Hero = () => {
  return (
    <section className="font-title relative min-h-screen flex overflow-hidden border-b-foreground border-b-50 pt-10">
      {/* Content */}
      <div className="container mx-auto px-6 pt-10  relative z-10">
        <div className="h-full grid lg:grid-cols-2 gap-10
         ">
          {/* Left Column - Text Content */}
          <div className="pt-15 space-y-5 max-h-fit place-self-center">
            <h1 className="text-6xl/15 italic md:text-7xl  font-bold text-foreground">
              <span className="text-muted font-medium">Advocacia </span>
              Para <br /> Pessoas e Empresas
            </h1>

            <p className="text-xl font-bold  text-foreground max-w-lg">
              Atuação jurídica preventiva e contenciosa, com atendimento
              personalizado e acompanhamento próximo.
            </p>

            {/* CTA */}
            <div className="pt-10">
              <a
                className="text-lg text-white bg-button hover:bg-button/90 px-9 py-4.5 text-center"
                href="#contato"
              >
                Agende uma conversa
              </a>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="place-self-end relative w-60 md:w-80 aspect-4/5 center mx-auto object-cover">
            <div className="">
                <img src="/justicegirl.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
