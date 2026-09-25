const Office = () => {
  return (
    <section
  id="escritorio"
  className="min-h-screen bg-foreground relative overflow-hidden flex items-center py-15 lg:py-0"
>
  <div className="container mx-auto px-6 relative z-10">
    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Left Column */}
      <div className="space-y-12">
        <h2 className="text-text-muted font-title italic text-3xl tracking-wide">
          O Escritório
        </h2>

        <div className="space-y-4 text-text text-2xl font-secondary text-background">
          <p>
            A Caires & Barreto Associados atua na prestação de serviços de
            consultoria e assistência jurídica, nas esferas preventiva e
            contenciosa, atendendo pessoas e empresas.
          </p>

          <p>
            Com mais de 19 anos de atuação, o escritório está localizado na
            Aclimação, região central de São Paulo, e mantém seu trabalho
            pautado pela ética profissional, pelo atendimento personalizado
            e pelo acompanhamento próximo de seus clientes.
          </p>
        </div>
      </div>

      {/* Right Column */}
      <div className="text-center">
        <h3 className="relative text-text-muted italic pb-5">
          QUEM ESTÁ À FRENTE DO ESCRITÓRIO

          <span className="absolute w-5 h-2 bg-text-muted bottom-1 left-1/2 -translate-x-1/2 -skew-x-12" />
        </h3>

        <div className="mt-5 flex flex-col items-center gap-10 md:flex-row md:justify-center">
          
          <div className="flex flex-col items-center gap-2">
            <img src="/doutor.png" alt="" />

            <p className="text-text text-center">
              Dr. Genivaldo Barreto <br />
              <span className="text-text-muted">
                Sócio-Administrador
              </span>
            </p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img src="/doutor.png" alt="" />

            <p className="text-text text-center">
              Dra. Maristela Caires <br />
              <span className="text-text-muted">
                Sócia-Administradora
              </span>
            </p>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>
  );
};

export default Office;
