import { useTranslation } from 'react-i18next'
import { useRef } from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'

const Hero = () => {
  const textRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const {t, i18n} = useTranslation()
  const imageAnimate = window.innerWidth >= 769? 
  i18n.language === 'en'? 'animate-slideInFromLeft' : 'animate-slideInFromRight' : ""
  const textAnimate = window.innerWidth >= 769? 
  i18n.language === 'en'? 'animate-slideInFromRight' : 'animate-slideInFromLeft' : ""

  

  return (
    <div className='flex xl:flex-row max-xl:flex-col justify-between'>
      <div ref={textRef} className={`flex flex-col py-[60px] gap-5 xl:w-2/3 w-full max-xl:text-center ${textAnimate}`}>
        <h1 className='hero-name-style'>{
        t("name")}
        </h1>
        <p className='hero-full-stack-name-style'>
          {t('full_stack_developer')}
        </p>
        <p className='max-xl:w-full w-[80%] overflow-hidden dark:text-textColor text-lg'>
          {t('description')}
        </p>
        <div className="flex justify-between items-center w-[80%] max-xl:w-full pt-5 dark:text-textColor">
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
          <a 
            href='/Ali Osman Cv.pdf'
            download={'/Ali Osman CV.pdf'}
            className=' bg-blue-500 px-3 py-2 text-white rounded-md hover:bg-blue-400'
          >
            {t("download_CV")}
          </a>
        </div>
        <a 
          href='/FYP Cert_S2 23-24_ALI OSMAN RAHMA GIBRAIL.pdf'
          download={'/FYP Cert_S2 23-24_ALI OSMAN RAHMA GIBRAIL.pdf'}
          className={`bg-blue-500 px-3 py-2 text-white rounded-md hover:bg-blue-400 text-center w-[80%] max-xl:w-full`}
        >
          {t("download_CR")}
        </a>
      </div>
      <img 
        ref={imageRef} 
        src={'/Ali-pic.jpg'} 
        alt="Ali's image" 
        className={` max-h-[500px] max-w-[500px] max-xl:max-w-[1000px] w-full rounded-lg object-cover ${imageAnimate}`} 
      />
    </div>
  )
}

export default Hero