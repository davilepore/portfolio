function Navbar() {
  return (
    <header className="h-24 flex items-center justify-center">
      <ul className="border-2 border-[#2D1C7F] rounded-3xl px-6 py-2 flex flex-row gap-10 text-[#E5E7EB] font-semibold">
        <li>
          <a href="#">Início</a>
        </li>
        <li>
          <a href="#">Sobre Mim</a>
        </li>
        <li>
          <a href="#">Projetos</a>
        </li>
        <li>
          <a href="#">Contato</a>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
