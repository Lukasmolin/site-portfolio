import Person from "../../model/person/Person";
import { Techs } from "./Techs";

const ownerDatasource: Person = {
    name : `Lucas Molin`,
    role : `Desenvolvedor Web`,
    address : `Juiz de Fora, Minas Gerais, Brasil`,
    profilePictureUrl : `https://avatars.githubusercontent.com/u/38398230?v=4`,
    aboutMe : `Sou dev, músico, gamer e aluno de Sistemas de Informação. Aprendi a programar ainda novinho 
    com meu pai. Tive um blog de tecnologia chamado Combo Digital na adolescência, trabalhei com manutenção 
    de PC e música. Hoje atua com bolsista desenvolvedor fullstack. Curioso e autodidata, desde sempre aprendo 
    as coisas por conta própria, experimentando e pesquisando. Me motivo quando me sinto útil por isso tô 
    sempre disposto a mudar e aprender coisas novas quando acredito que isso vá agregar ao contexto que eu tô.`,
    social: [
        {
            label: 'Github',
            href: 'https://github.com/lukasmolin',
            iconName: 'github'
        }, {
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/in/lucas-molin-dev/',
            iconName: 'linkedin'
        }
    ],
    favoriteStack: [
        Techs.react, Techs.javascript, Techs.thymeleaf,
        Techs.node, Techs.typescript, Techs.java, Techs.spring,
        Techs.docker, Techs.debian, Techs.postgres
    ]
};

export default ownerDatasource;