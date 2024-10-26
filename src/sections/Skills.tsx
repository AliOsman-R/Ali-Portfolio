import { useTranslation } from "react-i18next"
import { skillsListFunction } from "../data/data"

const Skills = () => {
  const {t} = useTranslation()

  return (
    <div className="dark:text-white">
      <h1 className="text-4xl font-bold w-full">{t("nav_bar.skills")}</h1>
      <div className="flex max-md:flex-col gap-10 mt-20">
        {skillsListFunction(t).map((item, idx) => (
          <div key={idx} className="flex-grow flex flex-col gap-10">
            <h1 className="text-xl font-bold text-center">{item.header}</h1>
            <div className="grid grid-cols-2 w-full max-sm:grid-cols-1 max-sm:gap-5 gap-10">
              {item.skills.map((skill,index) => (
                <div key={index} className="skill-card-style">
                  <img src={skill.image} alt={skill.name} className="rounded-full w-[55px] h-[50px] object-cover" />
                  <h2 className="font-bold text-lg">{skill.name}</h2>
                  <p className="text-sm dark:text-textColor">{skill.level}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
