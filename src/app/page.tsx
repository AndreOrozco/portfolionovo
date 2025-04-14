import Image from "next/image";
import styles from "./page.module.css";
import Experiencias from "./_partials/experiencias";
import Skills from "./_partials/skills";
import { BsBookmarkFill } from "react-icons/bs";
import { FaBullhorn, FaCircleChevronRight, FaClock, FaCode, FaDesktop, FaDeviantart, FaGraduationCap, FaLinkedin, FaMapLocation, FaMarker, FaRegIdBadge, FaServer, FaTimeline, FaWhatsapp } from "react-icons/fa6";
import { FaChevronRight, FaFacebookF, FaPaintBrush } from "react-icons/fa";
import LanguageSelector from "./_components/LanguageSelector";
const mountains = [
  {
    "id": 1,
    "src": "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
  },
  {
    "id": 2,
    "src": "https://images.unsplash.com/photo-1494253188410-ff0cdea5499e"
  },
  {
    "id": 3,
    "src": "https://images.unsplash.com/photo-1519681393784-d120267933ba"
  },
  {
    "id": 4,
    "src": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  },
  {
    "id": 5,
    "src": "https://images.unsplash.com/photo-1521747116042-5a810fda9664"
  },
  {
    "id": 6,
    "src": "https://images.unsplash.com/photo-1470770841072-f978cf4d019e"
  },
  {
    "id": 7,
    "src": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
  },

  {
    "id": 11,
    "src": "https://images.unsplash.com/photo-1519125323398-675f0ddb6308"
  },
  {
    "id": 12,
    "src": "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7"
  },

  {
    "id": 15,
    "src": "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f"
  }]

const expertises = ["Process Flows", "Storyboards", "Creativity", "Wireframes", "Management Skills", "Digital Marketing", "Negotiation"]
const cursos = [
  {
    "title": "SEO",
    "issuer": "Alura",
    "verification_date": "Finalizado em 29 de maio de 2019",
    "link": "https://cursos.alura.com.br/degree/certificate/6ee58d98-060e-4e05-a7ae-6de4f5250dc6"
  },
  {
    "title": "DESENVOLVEDOR VUE.JS",
    "issuer": "Alura",
    "verification_date": "Finalizado em 07 de fevereiro de 2019",
    "link": "https://cursos.alura.com.br/user/andreorozco/career/desenvolvedor-vuejs/certificate"
  },
  {
    "title": "Email Marketing Responsivo",
    "issuer": "Alura",
    "verification_date": "Finalizado em 13 de dezembro de 2018",
    "link": "https://cursos.alura.com.br/certificate/6e6752c3-d948-4ede-9c98-89c989b3446b"
  },
  {
    "title": "UX DESIGNER",
    "issuer": "Alura",
    "verification_date": "Finalizado em 21 de dezembro de 2018",
    "link": "https://cursos.alura.com.br/user/andreorozco/career/ux-designer/certificate"
  },
  {
    "title": "Bootstrap",
    "issuer": "Alura",
    "verification_date": "Finalizado em 14 de dezembro de 2018",
    "link": "https://cursos.alura.com.br/certificate/df871eac-e85e-4fdf-aa46-80c6dcbaba1e"
  },
  {
    "title": "ESPECIALISTA EM ACESSIBILIDADE WEB",
    "issuer": "Alura",
    "verification_date": "Finalizado em 14 de dezembro de 2018",
    "link": "https://cursos.alura.com.br/user/andreorozco/career/acessibilidade-web/certificate"
  },
  {
    "title": "HTML5 e CSS3",
    "issuer": "Alura",
    "verification_date": "Finalizado em 14 de dezembro de 2018",
    "link": "https://cursos.alura.com.br/certificate/a90da649-ef42-45b8-8fa5-b481d422f096"
  }
]
export default function Home() {
  function getAge(dateString: string) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
  return (
    <>

      <div className=" gap:15 bg:#4d207a p:50|20  ">
        <div className="flex max-w:1360  m:auto p:40|20">
          <div className="gap:10">
            <h2 className="fg:#fff mb:5">André Rosa Orozco</h2>
            <p className="font:10 fg:#fff font:semibold">Frontend Fullstack <span className="bg:#5C7EDD fg:#ffffff font:10  p:5 r:10">UX|UI</span></p>
          </div>

          <div className="mx:auto flex">
            <FaMapLocation className="fg:#fff m:auto|10" />
            <p className="fg:#fff my:auto font:12">Indaiatuba - São Paulo </p>
          </div>
     
          <div>
            <LanguageSelector />
          </div>
        </div>
        <div className="max-w:1360 flex m:auto grid-cols:2 gap:15">
          <div >
            <h2 className="flex gap:10 p:20 fg:#fff r:3 flex ">
              <BsBookmarkFill className="mb:auto" />
              <p className="font:16 mb:auto"> Experiência</p></h2>
            <Experiencias />
          </div>
          <div >
            <Skills />
          </div>

        </div>
        <div className="flex jc:center p:10 gap:20 flex:wrap max-w:1360 m:auto pb:40  ">
          <div className="w:100% flex jc:center">
            <h2 className="flex gap:10 p:20 fg:#fff r:3 flex ">
              <FaGraduationCap className="mb:auto" />
              <p className="font:16 mb:auto"> Cursos</p></h2>
          </div>
          {cursos.map((curso,i) => <>
            <a key={i} href={curso.link} target="_blank" className="bg:linear-gradient(90deg,rgba(255,255,255,0.9),rgba(255,255,255,0.8)) b:1px|solid|rgba(255,255,255,1) p:10|15 r:10 font:12 ">
              <p className="opacity:0.9 font:8" >{curso.issuer}</p>
              <p className="fg:rgb(47,36,128) font:semibold">{curso.title}</p>
              <p className="font:normal mt:2 font:10 fg:#9c4a55 flex m:auto|5|auto|0>svg">
                <FaClock className=" fg:#d2c4c6 " />
                {curso.verification_date}</p>
            </a>
          </>)}
          <div className="w:100% flex jc:center">
            <h2 className="flex gap:10 p:20 fg:#fff r:3 flex ">
              <FaGraduationCap className="mb:auto" />
              <p className="font:16 mb:auto"> Expertise</p></h2>
          </div>
          {expertises.map(expertise => <>
            <div className="bg:linear-gradient(90deg,rgba(255,255,255,0.3),rgba(255,255,255,0.2)) b:1px|solid|rgba(255,255,255,0.2) p:10|15 r:10 font:12 font:semibold">
              <FaChevronRight className="fg:rgb(255,201,94) mr:5" />
              <span className="fg:rgb(255,250,240)">{expertise}</span></div>
          </>)}
        </div>


      </div>
      <div>

        <div className="grid-cols:2 max-w:1360 m:auto p:200|40|100">
          <div className="flex rel ">

              <Image src={'./1705946939844.jpeg'}  height={500}  width={500} className="m:auto transform:scale(.8) overflow:hidden h:500 w:500 r:100% " alt="foto"/>
              <div className="h:400 w:400 bg:linear-gradient(120deg,#FF6666,#665CDD) abs r:100% z:-1 top:0 bottom:0 right:0 left:0 m:auto"></div>
              <div className="h:200 w:200 bg:linear-gradient(120deg,#FF6666,#c0c0c0) abs opacity:.3 r:100% z:-1 top:5 right:0 m:auto blur(10)"></div>
              <div className="h:200 w:200 bg:linear-gradient(120deg,#FF6666,#c0c0c0) abs opacity:.3 r:100% z:-1 bottom:90 left:0 z-index:3 m:auto blur(10)"></div>
          </div>
          <div className="p:10>p m:auto">
            <h2 className="p:0|10 font:55 ls:-.4">
                  Um pouco de minha pessoa!
            </h2>
            <p>
              Minha paixão por tecnologia começou cedo, aos sete anos. Aos treze, já criava websites e servidores para jogos como Ragnarok, Mu Online, Habbo e Tibia. O que começou como uma brincadeira virou profissão.
            </p>
            <p>
              Acredito que cada detalhe no meu trabalho deve ter um propósito claro. Não se trata apenas de escrever código; é sobre criar algo que realmente faça a diferença. Vejo a programação como uma combinação de estratégia e arte, onde cada linha de código é como um movimento bem calculado.
            </p>
            <p>
              Minha missão é estar sempre à frente do mercado e inovar constantemente. Recentemente, adicionei uma nova paixão ao meu caminho profissional: a gastronomia. Hoje, além de programador, sou chef de cozinha.

            </p>
            <p>
              Minha trajetória une tecnologia e criatividade, seja resolvendo problemas com código ou criando novas receitas. Para mim, cada projeto é uma chance de fazer algo que não só funcione, mas também inspire.

            </p>


          </div>
        </div>
      </div>
      <div className="max-w:1360 m:auto">
        <div className="r:5>div>img grid-cols:2 grid-cols:3@xs grid-cols:@sm grid-cols:3@md gap:15 gap:20@sm mt:20 max-w:1360 m:auto">
          <div className="flex grid-col-span:1 grid-row-span:2 obj:cover>img">
            <ul className="p:20>li list-style:none>li bg:#eeecfb>li fg:#4a4565>li>a s:0|0|0|1|#b2aec7>li  gap:20>li>a d:flex>li>a flex gap:10 flex:column w:100% r:10>li fg:#fff>li>a font:semibold fg:#ffffff>li:hover>a ">
              <li className="bg:linear-gradient(90deg,#FF6666,#665CDD):hover" ><a>
                <FaCode /> <span>Frontend</span></a></li>
              <li className="bg:linear-gradient(90deg,#4B8B3B,#003366):hover"><a>
                <FaServer />
                <span>Backend</span></a></li>
              <li className="bg:linear-gradient(90deg,#FF99CC,#665CDD):hover"><a>
                <FaDesktop />
                <span>UX | UI</span></a></li>
              <li className="bg:linear-gradient(90deg,#87CEEB,#665CDD):hover"><a>
                <FaPaintBrush />
                <span> Web Designer</span></a></li>
              <li className="bg:linear-gradient(90deg,#FF1B51,#FFD700):hover"><a>
                <FaBullhorn />
                <span>Publicidade</span></a></li>
            </ul>
          </div>
          {mountains.splice(1).map((mountain: any) =>
            <div className="flex obj:cover>img" key={mountain.id}>
              <img src={mountain.src} width="440" height="150" alt={mountain}  />
            </div>
          )}
        </div>
      </div>
      <footer className="p:80|40 flex w:100% flex bg:#f8f6ff mt:40 ">
            <ul className="list-style:none flex gap:10 m:auto fg:#544883 h:70>li>a>svg  w:70>li>a>svg  p:20>li>a>svg m:10>li>a>p  r:50>li>a>svg bg:#ffffff>li>a>svg flex:column>li>a  flex>li>a  m:auto>li>a>svg " >
            <li>
                <a href="https://wa.me/5511977836066">
                <FaWhatsapp/>
                  <p>(55) 11 9778-36066</p>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/andre-orozco/">
                <FaLinkedin/>
                  <p>in/andre-orozco</p>
                </a>
              </li>
              <li>
                <a href="https://www.deviantart.com/mistck">
                <FaDeviantart/>
                  <p>deviantart.com/mistck</p>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/andreorozcodsg">
                <FaFacebookF/>
                  <p>/andreorozcodsg</p>
                </a>
              </li>
            </ul>
   
      </footer>
    </>
  );
}
