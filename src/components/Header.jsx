import { Menu, X } from "lucide-react"
import { useState } from "react"

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const menuItems = [
        { name: 'Áreas de Atuação', href: '#areasatuacao' },
        { name: 'O Escritório', href: '#escritorio' }
    ]

    return (
        <header className="relative z-50 px-6 py-7">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <img src="logo.png" alt="" />

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-10">
                    <ul className="flex gap-8">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <a href={item.href}>
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <a className="text-white bg-[#7A191A] hover:bg-[#7A191A]/90 px-6 py-2.5" href="#contato">Fale Conosco</a>
                </nav>

                {/* Mobile Menu */}
                <button className="md:hidden text-[#0D1821] cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={32}/> : <Menu size={32}/>}
                </button>
            </div>
            {isMenuOpen && (
                <div className="fixed inset-0 bg-white backdrop-blur-sm md:hidden" onClick={() => setIsMenuOpen(false)}></div>
            )}
        </header>
    )
}

export default Header