import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* LOGO */}
      <div className="flex items-center gap-4">
        <a href="#">
          <img className="max-w-14" src="/images/logo.png" alt="Logo FeeIU" />
        </a>
        <h1 className="text-principal font-bold text-2xl tracking-tighter">
          FeeIU
        </h1>
      </div>

      {/* NAVIGATION */}
      <div className="hidden md:flex">
        <Navigation />
      </div>

      {/* MENU BURGER */}
      <Menu toggleMenu={() => setMenuOpen((c) => !c)} />

      {/* NAVIGATION MOBILE */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#030e19] border-slate-900 border-2 mt-6 rounded-2xl md:hidden">
          <Navigation closeMenu={() => setMenuOpen(false)} />
        </div>
      )}
    </header>
  );
};

// NAVIGATION
const Navigation = ({ closeMenu }) => {
  const handleClick = () => {
    if (closeMenu) closeMenu(); // MOVILE CLOSE
  };

  return (
    <ul className="flex flex-col items-center gap-4 py-4 md:flex-row md:gap-7 md:py-0">
      <li>
        <a
          href="#home"
          className="text-principal visited:text-principal hover:text-emerald-400 active:text-emerald-200 md:text-[12px] lg:text-[16px]"
          onClick={handleClick}
        >
          Inicio
        </a>
      </li>
      <li>
        <a
          href="#historia"
          className="text-principal visited:text-principal hover:text-emerald-400 active:text-emerald-200 md:text-[12px] lg:text-[16px]"
          onClick={handleClick}
        >
          Historia
        </a>
      </li>
      <li>
        <a
          href="#cartas"
          className="text-principal visited:text-principal hover:text-emerald-400 active:text-emerald-200 md:text-[12px] lg:text-[16px]"
          onClick={handleClick}
        >
          Carta
        </a>
      </li>
      <li>
        <a
          href="#galeria"
          className="text-principal visited:text-principal hover:text-emerald-400 active:text-emerald-200 md:text-[12px] lg:text-[16px]"
          onClick={handleClick}
        >
          Galeria
        </a>
      </li>
      <li>
        <a
          href="#regalos"
          className="text-principal visited:text-principal hover:text-emerald-400 active:text-emerald-200 md:text-[12px] lg:text-[16px]"
          onClick={handleClick}
        >
          Regalos
        </a>
      </li>
    </ul>
  );
};

// MENU BURGER
const Menu = ({ toggleMenu }) => {
  return (
    <button
      className="text-principal text-4xl leading-0 md:hidden cursor-pointer border-none"
      onClick={toggleMenu}
    >
      <ion-icon name="menu-outline"></ion-icon>
    </button>
  );
};

export default Header;
