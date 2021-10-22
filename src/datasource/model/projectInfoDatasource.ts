import ProjectInfo from "../../model/projectInfo/ProjectInfo";
import { Techs } from "./Techs";

const projectInfoDatasource: ProjectInfo[] = [
    {
        projectTitle: `Simples vinhos`,
        projectDescription: `Site responsivo que desenvolvi para um serviço de delivery de vinhos local utilizando Typescript e React.`,
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
        projectDescription: `Desenvolvimento do sistema de gestão interna núcleo de apoio a práticas jurídicas da UFJF. Entre outras coisas usamos Spring, Thymeleaf, JPA, jUnit e Mockito. O deploy é feito com Docker em cima de um Linux Debian na AWS EC2`,
        techs: [Techs.java, Techs.springBoot, Techs.springSecurity, Techs.hibernateJpa, Techs.postgres, Techs.junit, Techs.javascript, Techs.thymeleaf, Techs.html5, Techs.css3, Techs.gradle, Techs.docker],
        relatedLinks: [{
            href: 'https://github.com/',
            label: 'Vídeo',
            iconName: 'youtube'
        }]
    }
];

export default projectInfoDatasource;