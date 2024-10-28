import { useTranslation } from "react-i18next"
import { projectsList } from "../data/data"

const commonStyle = 'dark:text-textColor text-gray-500'

const Projects = () => {
  const {t} = useTranslation()

  return (
    <div className="dark:text-white">
      <h1 className="text-[28px] font-bold w-full">{t("nav_bar.projects")}</h1>
      <div className="flex flex-col items-center gap-5 mt-20">
        {projectsList.map((project, index) => (
          <div key={index} className="project-card-style">
            <a href={project.link} target="_blank">
              <img 
                src={project.image} 
                alt={project.projectName} 
                className="project-image-style" 
              />
            </a>
            <div className="flex flex-col gap-4 w-full">
              <h2 className={commonStyle}>{t("projects.name")}</h2>
              <a 
                href={project.link} 
                target="_blank" 
                className="project-name-style"
              >
                {project.projectName}
              </a>
              <h2 className={commonStyle}>{t("projects.description")}</h2>
              <p className="w-[90%] overflow-hidden">{t(project.description)}</p>
              <h2 className={commonStyle}>{t("projects.github")}</h2>
              <a 
                href={project.github} 
                className="text-blue-500 hover:underline break-all"
                target="_blank"
                >
                {project.github} 
              </a>
              <h2 className={commonStyle}>{t("projects.tools")}</h2>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, index) => (
                  <p key={index} className={"bg-textColor px-2 py-1 rounded-md text-black font-semibold"}>
                    {tool}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects