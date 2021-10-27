import ProjectInfo from "../../model/projectInfo/ProjectInfo";
import { Techs } from "./Techs";

const projectInfoDatasource: ProjectInfo[] = [
    {
        projectTitle: `Simples vinhos`,
        projectDescription: `Site responsivo com preços e contatos que desenvolvi para um serviço local de delivery de vinhos.`,
        techs: [Techs.typescript, Techs.react, Techs.html5, Techs.css3, Techs.npm],
        relatedLinks: [{
            href: 'https://lukasmolin.github.io/simples-vinhos-web/',
            label: 'Demo',
            iconName: 'github'
        }, {
            href: 'https://github.com/Lukasmolin/simples-vinhos-web',
            label: 'Código',
            iconName: 'github'
        }]
    }, {
        projectTitle: `Núcleo de Práticas Jurídicas`,
        projectDescription: `Sistema de gestão interna, acadêmica e de processos do núcleo de apoio a práticas jurídicas da UFJF.`,
        techs: [
            Techs.java, Techs.springBoot, Techs.springSecurity, Techs.hibernateJpa,
            Techs.postgres, Techs.junit, Techs.selenium, Techs.javascript, Techs.thymeleaf, Techs.html5,
            Techs.css3, Techs.gradle, Techs.debian, Techs.docker, Techs.aws
        ],
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
            label: 'Código',
            iconName: 'github'
        }]
    }
];

export default projectInfoDatasource;