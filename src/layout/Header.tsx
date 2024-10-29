import { useEffect, useState } from "react"
import { MdOutlineLightMode } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { BiMenu, BiX } from "react-icons/bi";
import Navbar from "../components/Navbar";

const menuCloseBtnStyle = 'absolute transition-all duration-500 ease-out transform'
const savedTheme = localStorage.getItem('theme');
const prefersThemekMode = savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light");

const Header = () => {
  const [pageThemeMode, setPageThemeMode] = useState(prefersThemekMode)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {i18n} = useTranslation();

  useEffect(() => {
    const savedMode = localStorage.getItem('theme');
    if (savedMode) {
      return toggleClass(savedMode)
    }
  }, []);
  
  const handleMode = () => {
    const newMode = pageThemeMode === "light" ? "dark" : "light";
    toggleClass(newMode)
    localStorage.setItem('theme', newMode);
  }

  const toggleClass = (theme: string) => {
    setPageThemeMode(theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };


  return (
  <div className="navbar-style">
    <div className="flex justify-between items-center container mx-auto py-5 w-[90%] max-xs:px-3">
      <div className="md:hidden dark:text-white">
        <button 
          onClick={toggleMenu} 
          className={`flex items-center relative ${i18n.language === "en"? "" : ""}`}
        >
            <span
            className={`${menuCloseBtnStyle} ${
               isMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
            }`}
          >
            <BiMenu size={23} />
          </span>
          <span
            className={` ${menuCloseBtnStyle} ${
            isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-0"
            }`}
          >
            <BiX size={23} />
          </span>
        </button>
      </div>

      {/* Mobile menu with transition */}
      <div
        className={`navbar-menu-style ${isMenuOpen ? 
          "opacity-100 translate-y-0" : "opacity-0 translate-y-full"}`}
      >
        {isMenuOpen && <Navbar/>} 
      </div>

      {/* Desktop menu */}
      <div className="hidden md:flex w-[80%]">
        <Navbar />
      </div>

      <button
        onClick={handleMode}
        className="navbar-change-mode-style"
      >
        {pageThemeMode === "light" ? <FaMoon size={20} /> : <MdOutlineLightMode size={20} />}
      </button>
    </div>
  </div>
  )
}

export default Header

