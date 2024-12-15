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
import portfolioWeb from '../assets/portfolioApp.png'
import cafeX from '../assets/cafeXApp.png'


export const navBarList: NavBarType[] = [
    { name: "nav_bar.home", to: '/', isRouteLink: true }, 
    { name: "nav_bar.about", to: 'about', isRouteLink: true },
    { name: "nav_bar.skills", to: 'skills', isRouteLink: false },
    { name: "nav_bar.projects", to: 'projects', isRouteLink: false },
    { name: "nav_bar.contact", to: 'contact', isRouteLink: false }
  ];



export const skillsList = [
    {
      header:'front_end', 
      skills:
      [
        {image:htmlImage, name:"HTML", level:'level.advanced'},
        {image:cssImage, name:"CSS", level:'level.advanced'},
        {image:typeScriptImage, name:"TypeScript", level:'level.experienced'},
        {image:tailwindImage, name:"Tailwind", level:'level.experienced'},
        {image:javaScriptImage, name:"JavaScript", level:'level.advanced'},
        {image:reactImage, name:"React JS", level:'level.advanced'},
      ]
    },
    {
      header:'back-end_&_other_tools', 
      skills:
      [
        {image:pythonImage, name:"Python", level:'level.advanced'},
        {image:fastApiImage, name:"FastAPI", level:'level.intermediate'},
        {image:gitImage, name:"Git", level:'level.experienced'},
        {image:mongoDbImage, name:"MongoDB", level:'level.experienced'},
        {image:expressImage, name:"Express JS", level:'level.intermediate'},
        {image:jwtImage, name:"JWT, Sessions", level:'level.intermediate'},
      ]
    }
]
    



export const projectsList = [
    {
      projectName:"Books Cafe Management",
      description:"projects.cafeX",
      link:"https://books-cafe-management.vercel.app/",
      github:"https://github.com/AliOsman-R/Books-cafe-frontend",
      tools:["React.js", "Express.js", "MongoDB", "Socket.io", "S3 bucket AWS", "Tailwind"],
      image:cafeX
    },
    {
      projectName:"My Portfolio",
      description:"projects.portfolio",
      link:"https://ali-portfolio-2024.vercel.app/",
      github:"https://github.com/AliOsman-R/Ali-Portfolio",
      tools:["React.js", "Tailwind"],
      image:portfolioWeb
    },
    {
      projectName:"Notes App",
      description:"projects.notesApp",
      link:"https://alinotesweb.netlify.app/",
      github:"https://github.com/AliOsman-R/Notes-App",
      tools:["React.js", "Tailwind"],
      image:notesApp
    },
]
