import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { navBarListFunction } from "../data/data";
import useActivateLink from "../hooks/useActiveLink";

const Navbar = () => {
  const {activeLink, handleActiveLink} = useActivateLink()
  const {i18n, t } = useTranslation();
  const selectPosition = i18n.language === 'en'? "ml-auto" : "mr-auto"
  
  useEffect(() => {
   document.body.dir = i18n.dir()
  }, [i18n, i18n.language])

  const handleLangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value)
  }

  return(
    <>
      <div className={`flex md:flex-row items-center w-full flex-col gap-3 text-[16px]`}>
        {navBarListFunction(t).map((item,index) => (
          <Link  
            key={index} 
            to={item.isHomeSection ? '/' : `/${item.to}`}
            onClick={() => handleActiveLink(item.to, item.isHomeSection, index)}
            className={`navbar-link-style ${index === activeLink ?
                'text-black dark:text-white' : 'text-btnColor dark:text-[#c7c7c7]'}`} 
          >
            {item.name}
          </Link >
        ))}
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