function Navbar() {
  return (
    <nav
      className="fixed top-4.5 left-1/2 -translate-x-1/2 z-100 flex items-center gap-1 bg-[rgba(10,15,10,0.75)] backdrop-blur-[14px] border border-[rgba(57,255,100,0.18)] rounded-full px-2 py-1.5"
      style={{
        WebkitBackdropFilter: "blur(14px)",
        boxShadow: "0 0 24px rgba(57,255,100,0.06), 0 4px 24px rgba(0,0,0,0.5)",
      }}
    >
      {[
        { label: "início", href: "#inicio" },
        { label: "sobre mim", href: "#sobre" },
        { label: "projetos", href: "#projetos" },
        { label: "contato", href: "#contato" },
      ].map(({ label, href }) => (
        <NavLink key={label} label={label} href={href} />
      ))}
    </nav>
  );
}

function NavLink({ label, href }) {
  return (
    <a
      href={href}
      className="font-mono text-[11px] tracking-widest text-[#b0d4b0] no-underline px-4.5 py-1.75 rounded-full transition-all duration-200 block hover:bg-[rgba(57,255,100,0.12)] hover:text-[#39ff64] hover:shadow-[0_0_12px_rgba(57,255,100,0.2)]"
    >
      {label}
    </a>
  );
}

export default Navbar;
