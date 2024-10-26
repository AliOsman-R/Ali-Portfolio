import { MdOutlineEmail } from "react-icons/md"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { navBarListFunction } from "../data/data"
import { Link} from "react-router-dom"
import { useTranslation } from "react-i18next"
import useActivateLink from "../hooks/useActiveLink"


const Footer = () => {
  const {handleActiveLink} = useActivateLink()
  const {t } = useTranslation();

  return (
    <div className="flex flex-col justify-center items-center w-full mt-10 border-t-2 p-5 pt-10 gap-10 dark:text-textColor">
      <div className="flex flex-col max-xl:items-center max-xl:gap-10 xl:flex-row xl:justify-around w-full">
        <div className="flex justify-between h-[40px] w-[50%] xl:w-[30%]">
          <a 
            href="https://github.com/AliOsman-R" 
            target='_blank'
            className="icon-hover-style"
          > 
            <FaGithub size={23}/>
          </a>
          <a 
            href="mailto:ali.osman.0302@gmail.com"
            className="icon-hover-style"
          >
            <MdOutlineEmail size={23}/>
          </a>
          <a 
            href="https://www.linkedin.com/in/ali-gibrail-34894726a/" 
            target="_blank"
            className="icon-hover-style"
          >
            <FaLinkedinIn size={23}/>
          </a>
        </div>
        <div className="grid grid-cols-3 gap-10 gap-x-[100px]">
        {navBarListFunction(t).map((item,index) => (
          <Link  
            key={index} 
            to={item.isHomeSection ? '/' : `/${item.to}`}
            onClick={() => handleActiveLink(item.to, item.isHomeSection, index)}
            className={`navbar-link-style`} 
          >
            {item.name}
          </Link >
        ))}
        </div>
      </div>
      <span className="text-xl">&copy; Ali Osman 2024</span>
    </div>
  )
}

export default Footer