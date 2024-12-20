import { MdOutlineEmail } from "react-icons/md"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { NavLinks } from "../components/Navbar"

const Footer = () => {

  return (
    <div className="flex flex-col justify-center items-center w-full mt-10 border-t p-5 pt-10 gap-10 dark:text-textColor">
      <div className="flex flex-col max-xl:items-center max-xl:gap-10 xl:flex-row xl:justify-around w-[70%]">
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
        <div className="grid grid-cols-3 gap-10 gap-x-[100px] max-xs:grid-cols-2">
          <NavLinks/>
        </div>
      </div>
      <span className="text-lg">&copy; Ali Osman 2024</span>
    </div>
  )
}

export default Footer