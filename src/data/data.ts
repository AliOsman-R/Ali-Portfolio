import { TFunction } from "i18next"
import { NavBarType } from "../types/types";
import htmlImage from '../assets/html.png'
import cssImage from '../assets/css.jpeg'
import typeScriptImage from '../assets/typeScript.png'
import tailwindImage from '../assets/tailwind.png'
import javaScriptImage from '../assets/javaScript.png'
import reactImage from '../assets/reactJS.png'
import pythonImage from '../assets/python.png'
import fastApiImage from '../assets/FastAPI.png'
import gitImage from '../assets/Git.png'
import mongoDbImage from '../assets/MongoDB.png'
import expressImage from '../assets/ExpressJS.png'
import jwtImage from '../assets/JWT.jpeg'
import notesApp from '../assets/notesApp.png'

export const navBarListFunction = (t:TFunction<"translation", undefined>) => {

    const navBarList: NavBarType[] = [
        { name: t("nav_bar.home"), to: '/', isHomeSection: true }, 
        { name: t("nav_bar.about"), to: 'about', isHomeSection: false },
        { name: t("nav_bar.skills"), to: 'skills', isHomeSection: true },
        { name: t("nav_bar.projects"), to: 'projects', isHomeSection: true },
        { name: t("nav_bar.contact"), to: 'contact', isHomeSection: true }
      ];

    return navBarList
}

export const skillsListFunction = (t:TFunction<"translation", undefined>) => {

    const skillsList = [
        {
          header:t('front_end'), 
          skills:
          [
            {image:htmlImage, name:"HTML", level:t('level.advanced')},
            {image:cssImage, name:"CSS", level:t('level.advanced')},
            {image:typeScriptImage, name:"TypeScript", level:t('level.experienced')},
            {image:tailwindImage, name:"Tailwind", level:t('level.experienced')},
            {image:javaScriptImage, name:"JavaScript", level:t('level.advanced')},
            {image:reactImage, name:"React JS", level:t('level.advanced')},
          ]
        },
        {
          header:t('back-end_&_other_tools'), 
          skills:
          [
            {image:pythonImage, name:"Python", level:t('level.advanced')},
            {image:fastApiImage, name:"FastAPI", level:t('level.intermediate')},
            {image:gitImage, name:"Git", level:t('level.experienced')},
            {image:mongoDbImage, name:"MongoDB", level:t('level.experienced')},
            {image:expressImage, name:"Express JS", level:t('level.intermediate')},
            {image:jwtImage, name:"JWT, Sessions", level:t('level.intermediate')},
          ]
        }
        ]
    
    return skillsList
}


export const projectsListFunction = (t:TFunction<"translation", undefined>) => {

  const projectsList = [
    {
      projectName:"Notes App",
      description:t("projects.notesApp"),
      link:"https://alinotesweb.netlify.app/",
      github:"https://github.com/AliOsman-R/Notes-App",
      tools:["React.js", "Tailwind"],
      image:notesApp
    },
  ]

  return projectsList
}