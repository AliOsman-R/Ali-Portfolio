import { useEffect } from "react"
import { useTranslation } from "react-i18next"

const About = () => {
  const {t, i18n} = useTranslation()
  const cvPosition = i18n.language === "en"? "ml-auto" : "mr-auto"

  useEffect(() => {
    window.scroll({top:0, behavior:'smooth'})
  }, [])

  return (
    <div className="min-h-screen dark:text-white">
      <h1 className="text-4xl font-bold w-full">{t("about.title")}</h1>
      <div className="flex max-md:flex-col max-md:mt-10 mt-[60px] gap-20">

        <div className="flex flex-grow flex-col gap-5 w-full">
          <div className="flex max-sm:flex-col gap-5 max-md:flex-row md:flex-col max-md:items-center">
            <img 
            src={"/Ali-pic.jpg"} 
            alt="Ali's image" 
            className=" rounded-full size-[200px] object-cover"
            />
            <p className='hero-full-stack-name-style'>
              {t('full_stack_developer')}
            </p>
          </div>
          <p className='max-xl:w-full w-full overflow-hidden  text-lg xl:text-xl'>
            {t('about.description')}
          </p>
          <a 
            href='/Ali Osman Cv.pdf'
            download={'/Ali Osman Cv.pdf'}
            className={`max-w-[50%] bg-blue-500 px-3 py-2 text-white rounded-md hover:bg-blue-400 ${cvPosition}`}
          >
            {t("download_CV")}
          </a>
        </div>
        
        <div className="flex-grow w-full flex flex-col gap-5">
          <h1 className="text-2xl font-bold">{t("about.personal_information.title")}</h1>
          <ul className="flex flex-col gap-3 px-5 list-disc">
            <li className="text-lg font-medium">{t("about.personal_information.name")}</li>
            <li className="text-lg font-medium">{t("about.personal_information.age")}</li>
            <li className="text-lg font-medium">{t("about.personal_information.nationality")}</li>
            <li className="text-lg font-medium">{t("about.personal_information.major")}</li>
          </ul>

          <h1 className="text-2xl font-bold mt-10">{t("about.links.title")}</h1>
          <ul className="flex flex-col gap-4 px-5 list-disc">
            <li className="text-lg font-medium">
              {t("about.links.email")}: {" "}
              <a 
              className="text-blue-500 hover:underline" 
              href="mailto:ali.osman.0302@gmail.com"
              >
                ali.osman.0302@gmail.com
              </a>
            </li>
            <li className="text-lg font-medium">
              {t("about.links.linkedIn")}: {" "}
              <a 
              className="text-blue-500 hover:underline" 
              href="https://www.linkedin.com/in/ali-gibrail-34894726a/"
              target="_blank"
              >
                @Ali Gibrail
              </a>
            </li>
            <li className="text-lg font-medium">
              {t("about.links.github")}: {" "}
              <a 
              className="text-blue-500 hover:underline" 
              href="https://github.com/AliOsman-R"
              target="_blank"
              >
                @AliOsman-R
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About