import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const areaOptions = [
  "Cível",
  "Empresarial",
  "Trabalhista",
  "Previdenciária",
  "Defesa do Consumidor",
  "Família",
  "Não sei / Outra",
];

const Contact = () => {
  return (
    <section id="contato" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left Column */}
          <div className="flex flex-col justify-around">
            <div className="flex flex-col gap-5">
              <span className="text-muted font-secondary ">CONTATO</span>
              <h2 className="text-5xl font-title ">
                Vamos conversar sobre{" "}
                <span className="text-muted"> seu caso ?</span>
              </h2>
              <p className="text-foreground/90 text-base font-semibold pb-5 ">
                Entre em contato para apresentar sua situação e verificar como
                podemos ajudar.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <div className="">
                <h3 className="text-muted text-sm">TELEFONES: </h3>
                <p className="text-foreground font-extrabold text-lg">
                  (11) 3207-4780 | (11) 3277-8243
                </p>
              </div>
              <div className="">
                <h3 className="text-muted text-sm">EMAIL: </h3>
                <p className="text-foreground font-extrabold text-lg">
                  caires.silva@terra.com.br{" "}
                </p>
              </div>
              <div className="">
                <h3 className="text-muted text-sm">ENDEREÇO: </h3>
                <p className="text-foreground font-extrabold text-lg">
                  Rua Bueno de Andrade, 834, Sobreloja 2 <br /> Aclimação, São
                  Paulo - SP <br /> 01526-000{" "}
                </p>
              </div>
              <div className="flex gap-4">
                <FaWhatsapp className=" text-background bg-foreground rounded-full  z-50 p-2.5 cursor-pointer" size={40} />
                <MdOutlineEmail className=" text-background bg-foreground rounded-full  z-50 p-2.5 cursor-pointer" size={40}  />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="p-8 border-foreground border-2">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Nome:
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Seu nome..."
                  className="w-full px-4 py-3 border border-foreground focus:ring-1"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email:
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="seunome@email.com"
                  className="w-full px-4 py-3 border border-foreground focus:ring-1"
                />
              </div>

              <div>
                <label htmlFor="tel" className="block text-sm font-medium mb-2">
                  Telefone:
                </label>

                <input
                  id="tel"
                  name="tel"
                  type="tel"
                  required
                  placeholder="(11) 9 1234-5678"
                  className="w-full px-4 py-3 border border-foreground focus:ring-1"
                />
              </div>

              <div>
                <label
                  htmlFor="area"
                  className="block text-sm font-medium mb-2"
                >
                  Área desejada:
                </label>

                <select
                  name="area"
                  id="area"
                  required
                  className="w-full px-4 py-3 border border-foreground focus:ring-1"
                >
                  <option value="">Selecione uma área</option>

                  {areaOptions.map((choice) => (
                    <option key={choice} value={choice}>
                      {choice}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Mensagem:
                </label>

                <textarea
                  rows={3}
                  id="message"
                  name="message"
                  required
                  placeholder="Digite sua mensagem"
                  className="w-full px-4 py-3 border border-foreground focus:ring-1 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-button hover:bg-button/90 px-6 py-2.5 text-center font-medium text-lg"
              >
                Enviar
              </button>
            </form>
          </div>
         
        </div>

      </div>
    </section>
  );
};

export default Contact;
