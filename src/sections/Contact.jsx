const areaOptions = [
    "Cível",
    "Empresarial",
    "Trabalhista",
    "Previdenciária",
    "Defesa do Consumidor",
    "Família",
    "Não sei / Outra"
]

const Contact = () => {
    return (
        <section id="contato" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="">
                    {/* Left Column */}
                    <div className="">
                        <span>CONTATO</span>
                        <h2>Vamos conversar sobre <span> seu caso ?</span></h2>
                        <p>Entre em contato para apresentar sua situação e verificar como podemos ajudar.</p>
                    </div>

                    {/* Right Column */}
                    <div className="">
                        <form>
                            <div>
                                <label>Nome: </label>
                                <input />
                            </div>
                            <div>
                                <label>Email: </label>
                                <input />
                            </div>
                            <div>
                                <label>Telefone: </label>
                                <input />
                            </div>
                            <div>
                                <label>Área desejada: </label>
                                <select name="" id="">
                                    {areaOptions.map((choice, idx) => {
                                        <option key={choice} value={choice}>
                                            {choice}
                                        </option>

                                    })}
                                </select>
                            </div>
                            <div>
                                <label>Message: </label>
                                <input />
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Contact