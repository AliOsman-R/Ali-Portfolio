import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { navBarList } from "../data/data";
import { useActiveLink } from "../services/context/GlobalStates";
import Cookies from 'js-cookie';

const Navbar = () => {
  const {i18n} = useTranslation();
  const selectPosition = i18n.language === 'en'? "ml-auto" : "mr-auto"
  
  useEffect(() => {
   document.body.dir = i18n.dir()
  }, [i18n, i18n.language])

  const handleLangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value
    const dir = lang === 'en'? 'ltr' : 'rtl'
    i18n.changeLanguage(lang)
    Cookies.set('i18next', lang, { expires: 30 });
    Cookies.set('langDir', dir, { expires: 30 });
  }

  return(
    <>
      <div className={`flex md:flex-row items-center w-full flex-col max-md:gap-10 gap-3 md:text-sm `}>
        <NavLinks/> 
        <select 
          onChange={handleLangChange}
          value={i18n.language}
          className={`navbar-select-lang-style max-md:w-[50%] max-md:mx-auto ${selectPosition}`}
        >
          <option value="en">English</option>
          <option value="ar">العربية</option>
        </select>
      </div>
    </>
  )
}

export default Navbar


export const NavLinks = () => {
  const {activeLink, setActiveLink} = useActiveLink()
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, to: string) => {
    e.preventDefault();
    hanldeSlectedLink(to)

    if (location.pathname === "/about") {
      navigate("/");  
      setTimeout(() => {
        window.location.hash = to;  
      }, 0); 
    } else {
      window.location.hash = to;  
    }
  };

  const hanldeSlectedLink = (to: string) => {
    setActiveLink(to)
    if (location.pathname === "/") {
        window.location.hash = to;  
    }
  }

  const hanldeLinkStyle = (to: string) => {
    return `navbar-link-style ${to === activeLink ?
                'text-black dark:text-white' : 'text-btnColor dark:text-[#c7c7c7]'}`
  }

  return(
    <>
      {navBarList.map(({to, name, isRouteLink},index) => (
        isRouteLink? (
          <Link  
            key={index} 
            to={to}
            onClick={()=> hanldeSlectedLink(to)}
            className={hanldeLinkStyle(to)} 
          >
            {t(name)}
          </Link >
        ):(
          <a 
          key={index} 
          href={`#${to}`} 
          onClick={(e) =>handleLinkClick(e, to)}
          className={hanldeLinkStyle(to)} 
          >
            {t(name)}
          </a>
        )
      ))}
    </>
  )
}