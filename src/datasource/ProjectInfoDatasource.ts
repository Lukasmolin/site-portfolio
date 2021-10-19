import ProjectInfo from "../model/projectInfo/ProjectInfo";
import Tech from "../model/tech/Tech";

export abstract class Techs {
    public static readonly java: Tech = {
        category: 'Back-end',
        iconName: 'java',
        name: 'Java'
    }

    public static readonly node: Tech = {
        category: 'Back-end',
        iconName: 'node',
        name: 'Node'
    }

    /*
    Typescript, Javascript, HTML, CSS
    React, Thymeleaf, Bootstrap
    Spring, Express, JPA, TypeORM, JDBC, Knex
    jUnit, Mockito, Jest, Selenium
    NPM, Gradle, Docker, AWS
    */
}

const projects: ProjectInfo[] = [
    {
        projectTitle: `Esse portfolio`,
        projectDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident`,
        techs: [Techs.java, Techs.node],
        relatedLinks: [{
            href: 'https://github.com/',
            label: 'Ver Reposiório',
            iconName: 'java'
        }]
    }, {
        projectTitle: `Esse portfolio`,
        projectDescription: `Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        techs: [Techs.java, Techs.node],
        relatedLinks: [{
            href: 'https://github.com/',
            label: 'Ver Reposiório',
            iconName: 'java'
        }]
    }, {
        projectTitle: `Esse portfolio`,
        projectDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident`,
        techs: [Techs.java, Techs.node],
        relatedLinks: [{
            href: 'https://github.com/',
            label: 'Ver Reposiório',
            iconName: 'java'
        }]
    }, {
        projectTitle: `Esse portfolio`,
        projectDescription: `Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        techs: [Techs.java, Techs.node],
        relatedLinks: [{
            href: 'https://github.com/',
            label: 'Ver Reposiório',
            iconName: 'java'
        }]
    }, {
        projectTitle: `Esse portfolio`,
        projectDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident`,
        techs: [Techs.java, Techs.node],
        relatedLinks: [{
            href: 'https://github.com/',
            label: 'Ver Reposiório',
            iconName: 'java'
        }]
    }, {
        projectTitle: `Esse portfolio`,
        projectDescription: `Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        techs: [Techs.java, Techs.node],
        relatedLinks: [{
            href: 'https://github.com/',
            label: 'Ver Reposiório',
            iconName: 'java'
        }]
    }, {
        projectTitle: `Esse portfolio`,
        projectDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident`,
        techs: [Techs.java, Techs.node],
        relatedLinks: [{
            href: 'https://github.com/',
            label: 'Ver Reposiório',
            iconName: 'java'
        }]
    }, {
        projectTitle: `Esse portfolio`,
        projectDescription: `Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        techs: [Techs.java, Techs.node],
        relatedLinks: [{
            href: 'https://github.com/',
            label: 'Ver Reposiório',
            iconName: 'java'
        }]
    }, {
        projectTitle: `Esse portfolio`,
        projectDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident`,
        techs: [Techs.java, Techs.node],
        relatedLinks: [{
            href: 'https://github.com/',
            label: 'Ver Reposiório',
            iconName: 'java'
        }]
    }, {
        projectTitle: `Esse portfolio`,
        projectDescription: `Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        techs: [Techs.java, Techs.node],
        relatedLinks: [{
            href: 'https://github.com/',
            label: 'Ver Reposiório',
            iconName: 'java'
        }]
    }
];

export default projects;