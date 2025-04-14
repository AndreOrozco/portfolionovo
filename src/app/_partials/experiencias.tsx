import { BsBookmarkFill } from "react-icons/bs"

var json : any = {
    "experiencias": [
      {
        "empresa": "O`Roza",
        "cargo": "Chefe de cozinha",
        "periodo": "06/2024 - atual",
        "descricao": "Desenvolvimento de Aplicações e Serviços Utilizando JavaScript (EcmaScript), ASP.NET Core, React.js, Next.js, MongoDB. Criação de wireframes e mockups para apresentação ao cliente. Gestão de equipe pelos trabalhos executados."
      },     {
        "empresa": "Takel",
        "cargo": "Co-Founder",
        "periodo": "09/2023 - 03/2024",
        "descricao": "Desenvolvimento de Aplicações e Serviços Utilizando JavaScript (EcmaScript), ASP.NET Core, React.js, Next.js, MongoDB. Criação de wireframes e mockups para apresentação ao cliente. Gestão de equipe pelos trabalhos executados."
      },   {
        "empresa": "Oroz Global",
        "cargo": "Full Stack Developer",
        "periodo": "09/2023 - 03/2024",
        "descricao": "Desenvolvimento de Aplicações e Serviços Utilizando JavaScript (EcmaScript), ASP.NET Core, React.js, Next.js, MongoDB. Criação de wireframes e mockups para apresentação ao cliente. Gestão de equipe pelos trabalhos executados."
      },
      {
        "empresa": "Toledo Piza Advogados Associados",
        "cargo": "Fullstack Developer",
        "periodo": "12/2016 - 04/2023",
        "descricao": "Desenvolvimento de Aplicações e Serviços Utilizando JavaScript, ASP.NET MVC, ASP.NET Core, React.js, Vue.js e jQuery e desenvolvimento de toda parte de frontend e prototipação das aplicações. Experiência na análise e mapeamento de requisitos para o desenvolvimento das aplicações. Profundo conhecimento em times ágeis, serviços Azure e na plataforma DevOps do Azure DevOps, além de vasta experiência em UX e interface do usuário."
      },
      {
        "empresa": "Robbu",
        "site": "www.robbu.global",
        "cargo": "Frontend Web Developer",
        "periodo": "08/2016 - 06/2017",
        "descricao": "Desenvolvimento do Frontend da Plataforma Omni-Channel de Chatbot e Comunicação B2B B2C, incluindo a parte de UX/UI."
      },
      {
        "empresa": "Radio Connect Music",
        "cargo": "Web designer sênior",
        "periodo": "06/2014 - 01/2015",
        "descricao": "Desenvolvimento e gestão das aplicações web e android e do portal da webradio e criação de conteúdo digital."
      },
      {
        "empresa": "i7web",
        "cargo": "Co-Founder",
        "periodo": "08/2016 - 06/2017",
        "descricao": "Fundador da empresa com o propósito de oferecer serviços abrangentes, incluindo criação de sites, gestão de tráfego e administração de redes sociais para empresas. Desenvolvimento de toda a identidade visual da empresa, desde a papelaria institucional, passando pela definição de modelos padrão de postagens e elaboração de contratos e apostilas. E para desenvolvimento dos sites e landing pages, empregamos uma combinação de linguagens como PHP, jQuery, HTML e CSS."
      }
    ]
  }

  export default function Experiencias() {
    return <div className="grid-cols:1 grid-cols:1@xs grid-cols:2@sm grid-cols:2@md @shake|1s|infinite>div:first ">
        
    {json.experiencias.map((item : any,i: number) => (
        <div key={i} className="m:10 s:0|0|10|rgba(192,184,211,.6) p:20 fg:#7b6a8c r:10 flex:column mb:auto gap:20 bg:white bg:#fafbfe:hover">
        <div className="fg:#6c4c8b font:12 mb:8 font:semibold" >{item.empresa}</div>
        <div className=" d:flex font:16 font:semibold fg:#4d207a"> 
          <p>{item.cargo}</p>

        </div>
        <div className="bg:linear-gradient(90deg,#FF6666,#665CDD)  fg:#fff p:5|10 font:10 font:semibold r:20 m:auto d:inline-flex my:10">{item.periodo}</div>

        <div className=" font:11" >{item.descricao}</div>
        </div>
    ))}
    </div>
    
  }
  
  