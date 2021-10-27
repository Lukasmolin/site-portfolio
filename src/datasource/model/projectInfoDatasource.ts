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
        projectTitle: `Núcleo de Práticas Jurídicas - UFJF`,
        projectDescription: `Como bolsista ajudo a desenvolver o sistema de gestão interna e processos judiciais do núcleo de apoio a práticas jurídicas da UFJF.`,
        techs: [
            Techs.java, Techs.springBoot, Techs.springSecurity, Techs.hibernateJpa,
            Techs.postgres, Techs.junit, Techs.selenium, Techs.javascript, Techs.thymeleaf, Techs.html5,
            Techs.css3, Techs.gradle, Techs.debian, Techs.docker, Techs.aws
        ],
        relatedLinks: [{
            href: 'https://www.youtube.com/watch?v=3fJUln6eLFY',
            label: 'Vídeo',
            iconName: 'youtube'
        }]
    }, {
        projectTitle: `Site Pessoal`,
        projectDescription: `É o site aqui que você tá agora com um pouco sobre mim, meus projetos e as tecnologias que eu curto.`,
        techs: [Techs.typescript, Techs.react, Techs.html5, Techs.css3, Techs.npm],
        relatedLinks: [{
            href: 'https://github.com/',
            label: 'Código',
            iconName: 'github'
        }]
    }, {
        projectTitle: `Partilhador de Contas`,
        projectDescription: `Pequeno protótipo pra dividir contas da casa como luz e mercado entre seus moradores.`,
        techs: [
            Techs.javascript, Techs.node, Techs.express, Techs.postgres, Techs.react, Techs.html5, Techs.css3, Techs.npm, Techs.docker
        ],
        relatedLinks: [{
            href: 'https://github.com/Lukasmolin/homeorg',
            label: 'Código',
            iconName: 'github'
        }]
    }
];

export default projectInfoDatasource;