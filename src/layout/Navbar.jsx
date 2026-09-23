import { Menu, X } from "lucide-react"
import { useState } from "react"

const navLinks = [
    { href: '#areaatuacao', label: 'Áreas de Atuação' },
    { href: '#escritorio', label: 'O Escritório' }
]

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 right-0 py-5 border-b-foreground border-b">
            <nav className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="">
                    <img src="logo.png" alt="" />
                </a>

                {/* Desktop navigation */}
                <div>
                    <ul className="hidden md:flex gap-16 items-center">
                        {navLinks.map((item, index) => (
                            <li key={index}>
                                <a
                                    href={item.href}
                                    className="hover:text-muted font-semibold text-lg"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}

                        {/* CTA */}
                        <a
                            className="text-white bg-button hover:bg-button/90 px-6 py-2.5 text-center font-medium text-lg"
                            href="#contato"
                        >
                            Fale Conosco
                        </a>
                    </ul>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-foreground"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-black/10 backdrop-blur-sm md:hidden" onClick={() => setIsMenuOpen(false)}></div>
            )}
            <div
                className={`fixed top-0 right-0 h-full w-80 bg-white Z-10 transition-transform duration-300 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} p-8 flex flex-col`
                }>
                <button className="self-end text-foreground mb-10"
                    onClick={() => setIsMenuOpen(false)}>
                    <X size={32} />
                </button>
                <ul className="flex flex-col gap-16">
                    {navLinks.map((item, index) => (
                        <li key={index}>
                            <a
                                href={item.href}
                                className="text-xl"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                    <a
                        className="text-white bg-button hover:bg-button/90 px-6 py-2.5 text-center"
                        href="#contato"
                    >
                        Fale Conosco
                    </a>
                </ul>
            </div>
        </header>
    )
}

export default Navbar