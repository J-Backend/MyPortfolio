import { createContext } from "react"

export const LangContext = createContext()

export const initialLang = "en"

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
                    item:"Sobre mí",
                    target:"#about"
                },
                {
                    id:3,
                    item:"Habilidades",
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
            title: "Hola, soy Jeff",
            subtitle:"Desarrollador de Software",
            action:"Descargar CV"
        },
        about: {
            title: "Sobre mí",
            description: [
                {
                    id:1,
                    text:"Apasionado",
                    style:""
                },
                {
                    id:2,
                    text:"Desarrollador de Software Junior",
                    style:"primary"
                },{
                    id:3,
                    text:"con enfoque en",
                    style:""
                },{
                    id:4,
                    text:"soluciones tecnológicas.",
                    style:""
                },{
                    id:5,
                    text:"Mi camino",
                    style:""
                },{
                    id:6,
                    text:"ha comenzado con",
                    style:""
                },{
                    id:7,
                    text:"proyectos personales.",
                    style:""
                },{
                    id:8,
                    text:"He aprendido",
                    style:""
                },{
                    id:9,
                    text:"tecnologías y conceptos,",
                    style:"primary"
                },{
                    id:10,
                    text:"con este",
                    style:""
                },{
                    id:11,
                    text:"entrenamiento",
                    style:""
                },{
                    id:12,
                    text:"he adquirido",
                    style:""
                },{
                    id:13,
                    text:"habilidades tanto en",
                    style:""
                },{
                    id:14,
                    text:"front-end como en back-end",
                    style:"primary"
                },{
                    id:15,
                    text:"además de",
                    style:""
                },{
                    id:16,
                    text:"diseño de bases de datos.",
                    style:""
                },{
                    id:17,
                    text:"Mi objetivo es",
                    style:""
                },{
                    id:18,
                    text:"convertirme en un",
                    style:"primary"
                },{
                    id:19,
                    text:"competente",
                    style:""
                },{
                    id:20,
                    text:"Desarrollador Fullstack.",
                    style:"secondary"
                }
            ]
        },
        skills:{
            title:"Habilidades",
            frontend:"Interfaz Usuario",
            backend:"Servidor",
            tools:"Herramientas"
        },
        projects:{
            title:"Proyectos",
            portfolio:[
                {
                    id:1,
                    name:"Mi Portafolio",
                    description:"Página para compartir mi perfil.",
                    technologies:[
                        "Javascript",
                        "React JS",
                        "HTML",
                        "CSS",
                        "Hooks"
                    ],
                    github:"https://github.com/J-Backend/MyPortfolio"
                },
                {
                    id:2,
                    name:"API REST Hostales",
                    description:"API REST para gestionar reservaciones, clientes y hostales.",
                    technologies:[
                        "C#",
                        ".NET 6",
                        "API REST",
                        "Unit of Work",
                        "Repository",
                        "Store Procedures",
                        "Auto Mapper",
                        "ADO.NET",
                        "SQL"
                    ],
                    github:"https://github.com/J-Backend/HostelApiRest"
                },
                {
                    id:3,
                    name:"API de Gestión de Tareas",
                    description: "API para gestionar usuarios, tareas y proyectos.",
                    technologies:[
                        "Javascript",
                        "Node JS",
                        "Express",
                        "MVC",
                        "Authentication",
                        "Mongo",
                        "Mongoose"
                    ],
                    github:"https://github.com/J-Backend/TaskManagmentApi"
                },
                {
                    id:4,
                    name:"Aplicación de Modismos",
                    description:"Aplicación para consumir y gestionar el servicio de la API de Modismos.",
                    technologies:[
                        "C#",
                        "Blazor WebAssembly",
                        "HTML",
                        "CSS",
                        "Bootstrap",
                        ".NET 6"
                    ],
                    github:"https://github.com/J-Backend/SlangsWeb"
                },
                {
                    
                    id:5,
                    name:"API de Modismos",
                    description:"API para gestionar frases coloquiales en inglés estadounidense.",
                    technologies:[
                        "C#",
                        ".NET 6",
                        "Swagger",
                        "ASP.NET Core",
                        "Entity Framework Core"
                    ],
                    github:"https://github.com/J-Backend/SlangApiRest"
                },
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
            title: "Hi There, I’m Jeff",
            subtitle:"Software Developer",
            action:"Download CV"
        },
        about: {
            title: "About",
            description: [
                {
                    id:1,
                    text:"Passionate",
                    style:""
                },
                {
                    id:2,
                    text:"Junior Software Developer",
                    style:"primary"
                },{
                    id:3,
                    text:"focus on",
                    style:""
                },{
                    id:4,
                    text:"technological solutions.",
                    style:""
                },{
                    id:5,
                    text:"My journey",
                    style:""
                },{
                    id:6,
                    text:"has begun with",
                    style:""
                },{
                    id:7,
                    text:"personal projects.",
                    style:""
                },{
                    id:8,
                    text:"I've learned",
                    style:""
                },{
                    id:9,
                    text:"technologies & concepts,",
                    style:"primary"
                },{
                    id:10,
                    text:"with this",
                    style:""
                },{
                    id:11,
                    text:"training",
                    style:""
                },{
                    id:12,
                    text:"I've gained",
                    style:""
                },{
                    id:13,
                    text:"skills in both",
                    style:""
                },{
                    id:14,
                    text:"front-end & back-end",
                    style:"primary"
                },{
                    id:15,
                    text:"also",
                    style:""
                },{
                    id:16,
                    text:"database design.",
                    style:""
                },{
                    id:17,
                    text:"My goal is",
                    style:""
                },{
                    id:18,
                    text:"to become a",
                    style:"primary"
                },{
                    id:19,
                    text:"competent",
                    style:""
                },{
                    id:20,
                    text:"Fullstack Developer.",
                    style:"secondary"
                }
            ]
        },
        skills:{
            title:"Skills",
            frontend:"Front-End",
            backend:"Back-End",
            tools:"Tools"
        },
        projects:{
            title:"Projects",
            portfolio:[
                {
                    id:1,
                    name:"My Portfolio",
                    description:"Web to share my profile.",
                    technologies:[
                        "Javascript",
                        "React JS",
                        "HTML",
                        "CSS",
                        "Hooks"
                    ],
                    github:"https://github.com/J-Backend/MyPortfolio"
                },
                {
                    id:2,
                    name:"Hostel REST API",
                    description:"REST API to manage reservations, clients, and hostels.",
                    technologies:[
                        "C#",
                        ".NET 6",
                        "REST API",
                        "Unit of Work",
                        "Repository",
                        "Store Procedures",
                        "Auto Mapper",
                        "ADO.NET",
                        "SQL"
                    ],
                    github:"https://github.com/J-Backend/HostelApiRest"
                },
                {
                    id:3,
                    name:"Task Managment API",
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
                    github:"https://github.com/J-Backend/TaskManagmentApi"
                },
                {
                    id:4,
                    name:"Slangs App",
                    description:"Application to consume and manage the Slangs API service.",
                    technologies:[
                        "C#",
                        "Blazor WebAssembly",
                        "HTML",
                        "CSS",
                        "Bootstrap",
                        ".NET 6"
                    ],
                    github:"https://github.com/J-Backend/SlangsWeb"
                },
                {
                    
                    id:5,
                    name:"Slangs API",
                    description:"API to manage slang phrases in American English.",
                    technologies:[
                        "C#",
                        ".NET 6",
                        "Swagger",
                        "ASP.NET Core",
                        "Entity Framework Core"
                    ],
                    github:"https://github.com/J-Backend/SlangApiRest"
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


