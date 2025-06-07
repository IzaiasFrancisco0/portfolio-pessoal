import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-scroll';

export default function NavBar() {
  const { i18n, t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 flex w-full h-16 items-center px-4 bg-gray-900 lg:justify-around shadow-md">

      <ul className="hidden md:flex gap-6 text-xl text-white">
        <li className="cursor-pointer">
          <Link to="sobre" smooth={true} duration={800} className="hover:border-b-2 border-blue-800 transition duration-300">
            {t('menu-about')}
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link to="projetos" smooth={true} duration={800} className="hover:border-b-2 border-blue-800 transition duration-300">
            {t('menu-projects')}
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link to="tecnologias" smooth={true} duration={800} className="hover:border-b-2 border-blue-800 transition duration-300">
            {t('menu-tecnologia')}
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link to="contato" smooth={true} duration={800} className="hover:border-b-2 border-blue-800 transition duration-300">
            {t('menu-contact')}
          </Link>
        </li>
      </ul>

      <div className="flex gap-2 text-white md:order-2">
        <button onClick={() => i18n.changeLanguage('pt')} className="hover:border-b-2 border-blue-800">
          🇧🇷 Português
        </button>
        <button onClick={() => i18n.changeLanguage('en')} className="hover:border-b-2 border-blue-800 lg:ml-4">
          🇺🇸 English
        </button>
      </div>

      <div className="md:hidden text-white absolute right-4 transition-opacity duration-300 ease-in-out">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-gray-900 text-white p-10 z-40 flex flex-col gap-8 items-center justify-center md:hidden transition-all duration-500">
          <Link
            to="sobre"
            smooth={true}
            duration={800}
            onClick={() => setMenuOpen(false)}
            className="text-2xl cursor-pointer"
          >
            {t('menu-about')}
          </Link>
          <Link
            to="projetos"
            smooth={true}
            duration={800}
            onClick={() => setMenuOpen(false)}
            className="text-2xl cursor-pointer"
          >
            {t('menu-projects')}
          </Link>
          <Link
            to="tecnologias"
            smooth={true}
            duration={800}
            onClick={() => setMenuOpen(false)}
            className="text-2xl cursor-pointer"
          >
            {t('menu-tecnologia')}
          </Link>
          <Link
            to="contato"
            smooth={true}
            duration={800}
            onClick={() => setMenuOpen(false)}
            className="text-2xl cursor-pointer"
          >
            {t('menu-contact')}
          </Link>
        </div>

      )}
    </nav>

  );
}
