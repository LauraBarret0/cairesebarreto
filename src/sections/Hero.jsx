const Hero = () => {
  return (
    <section className="relative min-h-screen flex overflow-hidden border-b-foreground border-b-50 md:pt-10">
      {/* Content */}
      <div className="container mx-auto px-6 pt-10 relative z-10">
        <div className="h-full grid lg:grid-cols-3 gap-10">
          {/* Left Column - Text Content */}
          <div className="md:pt-15 space-y-8 max-h-fit place-self-center lg:col-span-2">
            <h1 className="text-6xl italic md:text-7xl 2xl:text-8xl text-foreground font-title">
              <span className="text-muted">Advocacia </span>
              Para <br /> Pessoas e Empresas
            </h1>

            <p className="text-lg  font-medium text-foreground md:text-xl 2xl:text-2xl">
              Atuação jurídica preventiva e contenciosa, com atendimento
              personalizado e acompanhamento próximo.
            </p>

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
          <div className="lg:col-span-1 place-self-end relative w-60 md:w-80 aspect-4/5 mx-auto">
            <img src="/justicegirl.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
