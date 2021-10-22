import ProjectInfo from "../../model/projectInfo/ProjectInfo";
import { Techs } from "./Techs";

const projectInfoDatasource: ProjectInfo[] = [
    {
        projectTitle: `Simples vinhos`,
        projectDescription: `Site responsivo com preços e contatos que desenvolvi para um serviço local de delivery de vinhos utilizando Typescript e React.`,
        techs: [Techs.typescript, Techs.react, Techs.html5, Techs.css3, Techs.npm],
        relatedLinks: [{
            href: 'https://lukasmolin.github.io/simples-vinhos-web/',
            label: 'Demo',
            iconName: 'github'
        }, {
            href: 'https://github.com/Lukasmolin/simples-vinhos-web',
            label: 'Repositório',
            iconName: 'github'
        }]
    }, {
        projectTitle: `Núcleo de Práticas Jurídicas`,
        projectDescription: `Sistema de gestão interna núcleo de apoio a práticas jurídicas da UFJF. Entre outras coisas usamos Spring, Thymeleaf, JPA, jUnit e Mockito.`,
        techs: [Techs.java, Techs.springBoot, Techs.springSecurity, Techs.hibernateJpa, Techs.postgres, Techs.junit, Techs.javascript, Techs.thymeleaf, Techs.html5, Techs.css3, Techs.gradle, Techs.docker],
        relatedLinks: [{
            href: 'https://github.com/',
            label: 'Vídeo',
            iconName: 'youtube'
        }]
    }, {
        projectTitle: `Site Pessoal`,
        projectDescription: `É esse site aqui com meu currículo, projetos e um pouco sobre mim.`,
        techs: [Techs.typescript, Techs.react, Techs.html5, Techs.css3, Techs.npm],
        relatedLinks: [{
            href: 'https://github.com/',
            label: 'Repositório',
            iconName: 'github'
        }]
    }
];

export default projectInfoDatasource;