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
    <section
      id="contato"
      className="py-32 relative overflow-hidden"
      aria-labelledby="contact-title"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left Column */}
          <div className="flex flex-col justify-around">
            <div className="flex flex-col gap-5">
              <span className="text-muted font-secondary">
                CONTATO
              </span>

              <h2
                id="contact-title"
                className="text-5xl font-title"
              >
                Vamos conversar sobre{" "}
                <span className="text-muted">seu caso?</span>
              </h2>

              <p className="text-foreground/90 text-base font-semibold pb-5">
                Entre em contato para apresentar sua situação e verificar
                como podemos ajudar.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              {/* Telefones */}
              <div>
                <h3 className="text-muted text-sm">
                  TELEFONES:
                </h3>

                <p className="text-foreground font-extrabold text-lg">
                  <a
                    href="tel:+551132074780"
                    className="hover:text-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
                  >
                    (11) 3207-4780
                  </a>
                  {" | "}
                  <a
                    // href="tel:+551132778243"
                    className="hover:text-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
                  >
                    (11) 3277-8243
                  </a>
                </p>
              </div>

              {/* E-mail */}
              <div>
                <h3 className="text-muted text-sm">
                  EMAIL:
                </h3>

                <a
                  // href="mailto:caires.silva@terra.com.br"
                  className="text-foreground font-extrabold text-lg hover:text-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
                >
                  caires.silva@terra.com.br
                </a>
              </div>

              {/* Endereço */}
              <div>
                <h3 className="text-muted text-sm">
                  ENDEREÇO:
                </h3>

                <address className="text-foreground font-extrabold text-lg not-italic">
                  Rua Bueno de Andrade, 834, Sobreloja 2
                  <br />
                  Aclimação, São Paulo - SP
                  <br />
                  01526-000
                </address>
              </div>

              {/* Links de contato */}
              <div
                className="flex gap-4"
                aria-label="Outras formas de contato"
              >
                <a
                  href="https://wa.me/551132074780"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Entrar em contato pelo WhatsApp"
                  className="text-background bg-foreground rounded-full p-2.5 hover:bg-button focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
                >
                  <FaWhatsapp
                    aria-hidden="true"
                    size={40}
                  />
                </a>

                <a
                  href="mailto:caires.silva@terra.com.br"
                  aria-label="Enviar e-mail"
                  className="text-background bg-foreground rounded-full p-2.5 hover:bg-button focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
                >
                  <MdOutlineEmail
                    aria-hidden="true"
                    size={40}
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="p-8 border-foreground border-2">
            <form className="space-y-6">
              {/* Nome */}
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
                  autoComplete="name"
                  required
                  placeholder="Seu nome..."
                  className="w-full px-4 py-3 border border-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
                />
              </div>

              {/* E-mail */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  E-mail:
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="seunome@email.com"
                  className="w-full px-4 py-3 border border-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
                />
              </div>

              {/* Telefone */}
              <div>
                <label
                  htmlFor="tel"
                  className="block text-sm font-medium mb-2"
                >
                  Telefone:
                </label>

                <input
                  id="tel"
                  name="tel"
                  type="tel"
                  autoComplete="tel"
                  required
                  placeholder="(11) 9 1234-5678"
                  className="w-full px-4 py-3 border border-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
                />
              </div>

              {/* Área */}
              <div>
                <label
                  htmlFor="area"
                  className="block text-sm font-medium mb-2"
                >
                  Área desejada:
                </label>

                <select
                  id="area"
                  name="area"
                  required
                  defaultValue=""
                  className="w-full px-4 py-3 border border-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
                >
                  <option value="" disabled>
                    Selecione uma área
                  </option>

                  {areaOptions.map((choice) => (
                    <option key={choice} value={choice}>
                      {choice}
                    </option>
                  ))}
                </select>
              </div>

              {/* Mensagem */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Mensagem:
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  required
                  placeholder="Digite sua mensagem"
                  className="w-full px-4 py-3 border border-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full text-white bg-button hover:bg-button/90 px-6 py-2.5 text-center font-medium text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2"
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
