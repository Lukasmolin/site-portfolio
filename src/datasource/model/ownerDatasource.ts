import Person from "../../model/person/Person";
import { Techs } from "./Techs";

const ownerDatasource: Person = {
    name : `Lucas Molin`,
    role : `Desenvolvedor Web`,
    adress : `Juiz de Fora, Minas Gerais, Brasil`,
    profilePictureUrl : `https://avatars.githubusercontent.com/u/38398230?v=4`,
    aboutMe : `Sou dev, músico, gamer e aluno de Sistemas de Informação.
    Puxei do meu pai a paixão por computação desde novinho. Já tive um blog de tecnologia chamado 
    Combo Digital e já trabalhei com manutenção de PC antes de entrar na faculdade. Hoje foco 
    principalmente em web com Node ou Java no back e React no front. Curioso e autodidata, desde 
    pequeno aprendo as coisas conforme faço, experimentando e pesquisando. Fico motivado quando 
    me sinto útil por isso tô sempre disposto a mudar e aprender coisas novas quando acredito 
    que isso vá agregar.`,
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