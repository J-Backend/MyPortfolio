import { createContext } from "react"

export const LangContext = createContext()

export const initialLang = "en"

import csharp from '../assets/images/csharp.svg'
import sqlserver from '../assets/images/sqlserver.svg'
import mdotnet from '../assets/images/mdotnet.svg'
import angular from '../assets/images/angular.svg'
import react from '../assets/images/react.svg'
import typescript from '../assets/images/typescript.svg'
import node from '../assets/images/node.svg'
import html from '../assets/images/html.svg'
import css from '../assets/images/css.svg'
import js from '../assets/images/js.svg'
import visual from '../assets/images/visual.svg'
import bootstrap from '../assets/images/bootstrap.svg'
import sql from '../assets/images/sql.svg'
import aspnetcore from '../assets/images/aspnetcore.svg'
import postman from '../assets/images/postman.svg'
import github from '../assets/images/github.svg'
import vscode from '../assets/images/vscode.svg'
import mongodb from '../assets/images/mongodb.svg'
import express from '../assets/images/express.svg'



const listBackend = [
    csharp,
    mdotnet,
    node,
    sql,
    mongodb,
    aspnetcore,
    express

]
const listFrontend = [
    typescript,
    js,
    angular,
    react,
    html,
    css,
    bootstrap,
]
const listTools = [
    sqlserver,
    visual,
    vscode,
    github,
    postman
]

export const translations = {

    es: {

        nav: {
            languaje: "Español",
            menu: [
                {
                    id:1,
                    item:"Principal",
                    target:"#home"
                },
                {
                    id:2,
                    item:"Acerca",
                    target:"#about"
                },
                {
                    id:3,
                    item:"Destrezas",
                    target:"#skills"
                },
                {
                    id:4,
                    item:"Proyectos",
                    target:"#projects"
                },
                {
                    id:5,
                    item:"Contacto",
                    target:"#contact"
                },
            ]
        },
        home: {
            hello: "Hola",
            title: "Soy Jeff",
            subtitle:"Software Developer",
            action:"CV"
        },
        about: {
            title: "Acerca",
            subtitle:"Soy desarrollador, sede en Costa Rica",
            description:"Desde 2022, trabajo en desarrollo de software como freelancer. Me formé como Ingeniero de Biosistemas, pero me gustaba más la programación. En 2020, durante la pandemia, decidí estudiar programación en la universidad. Ahora estoy trabajando en mi proyecto final para graduarme. Estoy creando un sistema de inventario. Cuando no estoy programando, me gusta hacer ejercicio, tocar música o aprender cosas nuevas."
        },
        skills:{
            title:"Destrezas",
            frontend:"Interfaz",
            backend:"Servidor",
            tools:"Herramientas",
            icons:{
                listBackend,
                listFrontend,
                listTools
            }
        },
        projects:{
            title:"Proyectos",
            portfolio:[
                {
                    id: 1,
                    name: "Artículos",
                    type:"Aplicación Web",
                    description: "Web para organizar las reservas de artículos de los clientes.",
                    technologies: [
                      "Typescript",
                      "Angular 18",
                      "HTML",
                      "CSS",
                      "NgBootstrap"
                    ],
                    github: "https://github.com/J-Backend/ArticleBookingApp",
                
                  },
                  {
                    id: 2,
                    name: "Artículos",
                    type:"Api web",
                    description: "API para organizar las reservas de artículos de los clientes.",
                    technologies: [
                      "C#",
                      ".NET 8",
                      "Identity",
                      "Services",
                      "JWT Bearer",
                      "AutoMapper",
                      "Entity Framework",
                      "SQL"
                    ],
                    github: "https://github.com/J-Backend/ArticleBookingApi",
                   
                  },
                  {
                    id: 3,
                    name: "Tareas",
                    type:"Api Web",
                    description: "API para gestionar usuarios, tareas y proyectos.",
                    technologies: [
                      "Javascript",
                      "Node JS",
                      "Express",
                      "MVC",
                      "Authentication",
                      "Mongo",
                      "Mongoose"
                    ],
                    github: "https://github.com/J-Backend/TaskManagmentApi",
                 
                  },
                  {
                    id: 4,
                    name: "Portafolio",
                    type:"Página Web",
                    description: "Web para compartir mi perfil.",
                    technologies: [
                      "Javascript",
                      "React JS",
                      "HTML",
                      "CSS",
                      "Hooks",
                        "Bootstrap"
                    ],
                    github: "https://github.com/J-Backend/MyPortfolio",
                
                  }
          
            ]
        },
        contact:{
            title:"Contacto",
            name:"Nombre",
            email:"Correo",
            message:"Mensaje",
            action:"Enviar",
            alerts:{
                name:"Requiere: [3-30 letras]",
                email:"Ejemplo: joe@mail.com",
                message:"Requiere: [3-200 carácteres]"
            }
        },
        footer:{
            text:"Hecho por",
            autor:"Jeff Monge"
        }

    },
    en: {
        nav: {
            languaje: "English",
            menu: [
                {
                    id:1,
                    item:"Home",
                    target:"#home"
                },
                {
                    id:2,
                    item:"About",
                    target:"#about"
                },
                {
                    id:3,
                    item:"Skills",
                    target:"#skills"
                },
                {
                    id:4,
                    item:"Projects",
                    target:"#projects"
                },
                {
                    id:5,
                    item:"Contact",
                    target:"#contact"
                },
            ]
        },
        home: {
            hello: "Hello",
            title: "I am Jeff",
            subtitle:"Software Developer",
            action:"Get CV"
        },
        about: {
            title: "About",
            subtitle:"I'm developer based in Costa Rica",
            description:"Since 2022, I have been working as a freelance software developer. Although I originally trained as a Biosystems Engineer, I found that I was more passionate about programming. In 2020, during the pandemic, I decided to study programming at university. I am now working on my final project for graduation, which involves developing an inventory system. Outside of programming, I enjoy exercising, playing music, and exploring new topics."
        },
        skills:{
            title:"Skills",
            frontend:"Front-end",
            backend:"Back-end",
            tools:"Tools",
            icons:{
                listBackend,
                listFrontend,
                listTools
            }
        },
        projects:{
            title:"Projects",
            portfolio:[
                
                {
                    id:1,
                    name:"Articles",
                    type:"Web App",
                    description:"Web to organize customer article reservations.",
                    technologies:[
                        "Typescript",
                        "Angular 18",
                        "HTML",
                        "CSS",
                        "NgBootstrap",

                      
                    ],
                    github:"https://github.com/J-Backend/ArticleBookingApp",
             
                },
                {
                    id:2,
                    name:"Articles",
                    type:"Web Api",
                    description:"API to organize customer article reservations.",
                    technologies:[
                        "C#",
                      ".NET 8",
                      "Identity",
                      "Services",
                      "JWT Bearer",
                      "AutoMapper",
                      "Entity Framework",
                      "SQL"
                    ],
                    github:"https://github.com/J-Backend/ArticleBookingApi",
                
                },
                
                {
                    id:3,
                    name:"Tasks",
                    type:"Web Api",
                    description: "API for managing users, tasks, and projects.",
                    technologies:[
                        "Javascript",
                        "Node JS",
                        "Express",
                        "MVC",
                        "Authentication",
                        "Mongo",
                        "Mongoose"
                    ],
                    github:"https://github.com/J-Backend/TaskManagmentApi",
              
                },
                {
                    id:4,
                    name:"Portfolio",
                    type:"Website",
                    description:"Web to share my profile.",
                    technologies:[
                        "Javascript",
                        "React JS",
                        "HTML",
                        "CSS",
                        "Hooks",
                        "Bootstrap"
                    ],
                    github:"https://github.com/J-Backend/MyPortfolio",
                   
                },
 
            ]
        },
        contact:{
            title:"Contact",
            name:"Name",
            email:"Email",
            message:"Message",
            action:"Send",
            alerts:{
                name:"Require: [3-30 letters]",
                email:"Example: joe@mail.com",
                message:"Require: [3-200 characters]"
            }
        },
        footer:{
            text:"Made by",
            autor:"Jeff Monge"
        }
        
    }
}


