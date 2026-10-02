import { Copyright } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground w-full min-h-20 px-6 flex items-center justify-center">
      <p className="text-text-muted flex items-center justify-center gap-2 text-center text-sm">
        <Copyright size={18} />
        2026 Caires e Barreto Advogados Associados. Todos os direitos
        reservados.
      </p>
    </footer>
  );
};

export default Footer;
