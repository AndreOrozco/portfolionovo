import { FaCode } from "react-icons/fa6";

const skills = [
  {
    "title": "Front-End",
    "color": "#1D8B3C",
    "Linguagens": [
      { "nome": "JavaScript", "icone": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { "nome": "TypeScript", "icone": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { "nome": "HTML", "icone": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { "nome": "CSS", "icone": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { "nome": "ES6", "icone": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" }
    ],
    "Frameworks/Bibliotecas": [
      { "nome": "Next.js", "icone": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" },
      { "nome": "React.js", "icone": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { "nome": "Vue.js", "icone": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
      { "nome": "Angular", "icone": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
      { "nome": "Redux", "icone": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
      { "nome": "React Query", "icone": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { "nome": "jQuery", "icone": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" },
      { "nome": "Sass", "icone": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
      { "nome": "Tailwind css", "icone": "https://cdn.changelog.com/uploads/icons/topics/OEL/icon_small.jpg?v=63837039233" },
      { "nome": "Master.css", "icone": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKvuxxJuTmjQnm5398OuiQpZ7Qe2ryQQXfss99_XW1rJXbOO0g22hc3Bs5RRwsuUhy7RI&usqp=CAU" }
    ]
  },
  {
    "title": "Backend",
    "color": "#1C6FEC",
    "Linguagens": [
      { "nome": "C#", "icone": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
      { "nome": "PHP", "icone": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" }
    ],
    "Frameworks": [
      { "nome": "ASP.NET MVC", "icone": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" },
      { "nome": "ASP.NET Core", "icone": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" },
      { "nome": "Laravel", "icone": "https://cdn.icon-icons.com/icons2/2415/PNG/512/laravel_plain_logo_icon_146438.png" },
      { "nome": "Nest.js", "icone": "https://cdn.worldvectorlogo.com/logos/nestjs.svg" }
    ],
    "ORM": [
      { "nome": "Prisma", "icone": "https://avatars.githubusercontent.com/u/17219288?s=200&v=4" },
      { "nome": "Entity Framework", "icone": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" }
    ]
  },
  {
    "title": "Designer",
    "color": "#9F35F2",
    "Ferramentas": [
      { "nome": "Photoshop", "icone": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" },
      { "nome": "Illustrator", "icone": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" },
      { "nome": "Adobe XD", "icone": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg" },
      { "nome": "Figma", "icone": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" }
    ]
  },
  {
    "title": "Banco de dados",
    "color": "#FC1A27",
    "Sistemas": [
      { "nome": "Postgres SQL", "icone": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { "nome": "SQL Server", "icone": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
      { "nome": "MySQL", "icone": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { "nome": "MongoDB", "icone": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
    ]
  },
  {
    "title": "Designer",
    "color": "#4d207a",
    "Metodologias Ágeis": [{ "nome": "Scrum", "icone": "https://upload.wikimedia.org/wikipedia/commons/5/58/Scrum_process.svg" },
    { "nome": "Kanban", "icone": "https://upload.wikimedia.org/wikipedia/commons/d/d3/Kanban-system.svg" }
    ]
  },

  {
    "title": "Designer",
    "color": "#4d207a",
    "Serviços": [
      { "nome": "AWS", "icone": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
      { "nome": "Microsoft Azure", "icone": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" }
    ], "Sistemas Operacionais": ["Linux"],
  }

]
const git = {
  "Ferramentas": ["GIT", "GULP"],

}


const cloud = {
  "Serviços": [
    { "nome": "AWS", "icone": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
    { "nome": "Microsoft Azure", "icone": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" }
  ], "Sistemas Operacionais": ["Linux"],
}
const methods = {
  "Metodologias Ágeis": [{ "nome": "Scrum", "icone": "https://upload.wikimedia.org/wikipedia/commons/5/58/Scrum_process.svg" },
  { "nome": "Kanban", "icone": "https://upload.wikimedia.org/wikipedia/commons/d/d3/Kanban-system.svg" }
  ]
}




export default function Skills() {
  return (
    <div className="flex:column gap:10 d:flex r:10  bg:#fff  my:10">
      <h2 className="flex gap:10 bg:linear-gradient(90deg,#FF6666,#665CDD) p:20 fg:#ffffff r:10 ">
      <FaCode />
         <p className="font:16 my:auto"> Habilidades profissionais</p></h2>
         <div>

         {skills.map((item: any) => (<>
        <div className={`fg:${item.color}>ul>li>p fg:${item.color}>h3 fg:#4d207a px:10 pt:5 `}>
          <h2 className=" f:14 p:5|10 "> {item.title}</h2>
            {Object.keys(item).filter(f => f !== "color" && f !== "title").map((categoria: any) => <div className="px:10 mb:5">
           
                <ul className="flex gap:5 list-style:none  flex:wrap">
                <p className=" f:11 my:auto opacity:0.8">
                {categoria} : 
                </p>
              {item[categoria]?.map((l: any) =>
                <li key={item} className="flex gap:10 p:5|5 bg:rgb(255,255,255) r:10 s:0|0|7|rgba(192,184,211,.2)">
                  <img src={l.icone} width={20} className="d:block" /> <p className="font:10 my:auto">{l.nome}</p>
                </li>)}
                </ul>

            </div>)}
            
        </div>

      </>))}




      </div>
      </div>
    );
}



