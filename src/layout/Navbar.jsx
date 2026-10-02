import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import logo from "/logo.png";

const navLinks = [
  { href: "#areasatuacao", label: "Áreas de Atuação" },
  { href: "#escritorio", label: "O Escritório" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuButtonRef = useRef(null);
  const closeButtonRef = useRef(null);

  const closeMenu = () => {
    setIsMenuOpen(false);
    menuButtonRef.current?.focus();
  };

  useEffect(() => {
    if (!isMenuOpen) return;

    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header className="lg:fixed top-0 left-0 right-0 py-3 bg-background border-b border-b-foreground z-50">
      <nav
        className="container mx-auto px-6 flex items-center justify-between"
        aria-label="Navegação principal"
      >
        {/* Logo */}
        <a
          href="/"
          aria-label="Caires e Barreto Advogados Associados - Página inicial"
        >
          <img
            className="w-50 md:w-60"
            src={logo}
            alt=""
          />
        </a>

        {/* Desktop navigation */}
        <ul className="hidden lg:flex gap-16 items-center">
          {navLinks.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="hover:text-muted font-bold text-xl"
              >
                {item.label}
              </a>
            </li>
          ))}

          <li>
            <a
              className="text-white bg-button hover:bg-button/90 px-6 py-2.5 text-center font-bold text-xl"
              href="#contato"
            >
              Fale Conosco
            </a>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          ref={menuButtonRef}
          type="button"
          className="lg:hidden text-foreground"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setIsMenuOpen((previous) => !previous)}
        >
          {isMenuOpen ? (
            <X aria-hidden="true" size={28} />
          ) : (
            <Menu aria-hidden="true" size={28} />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/10 backdrop-blur-sm lg:hidden"
            aria-hidden="true"
          />

          {/* Navigation panel */}
          <nav
            id="mobile-menu"
            aria-label="Menu mobile"
            className="fixed top-0 right-0 h-full w-80 bg-white z-100 lg:hidden p-8 flex flex-col"
          >
            <button
              ref={closeButtonRef}
              type="button"
              className="self-end text-foreground mb-10"
              aria-label="Fechar menu"
              onClick={closeMenu}
            >
              <X aria-hidden="true" size={28} />
            </button>

            <ul className="flex flex-col gap-16">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="font-bold text-xl"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                </li>
              ))}

              <li>
                <a
                  className="text-white bg-button hover:bg-button/90 px-6 py-2.5 text-center font-bold text-xl"
                  href="#contato"
                  onClick={closeMenu}
                >
                  Fale Conosco
                </a>
              </li>
            </ul>
          </nav>
        </>
      )}
    </header>
  );
};

export default Navbar;
