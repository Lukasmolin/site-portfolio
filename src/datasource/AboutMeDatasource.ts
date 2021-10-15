import StackInfo from "../model/stackInfo/StackInfo";
import AboutMeData, { StackColor } from "../pages/aboutMe/AboutMeData";

const title = `Meu stack:`;

const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const javaBackend: StackInfo = {
    badgeIcon: 'java',
    title: 'Java Backend',
    items: [
        'Java', 'Clojure', 'Spring Boot', 'JDBC', 'JPA', 'jUnit', 'Mockito', 'Gradle'
    ]
};

const nodeBackend: StackInfo = {
    badgeIcon: 'java',
    title: 'NodeJS Backend',
    items: [
        'Typescript','Javascript', 'Knex', 'TypeORM', 'Jest', 'NPM'
    ]
}

const frontEnd: StackInfo = {
    badgeIcon: 'java',
    title: 'Frontend',
    items: [
        'Thymeleaf', 'React', 'Bootstrap', 'HTML5 e CSS'
    ]
}

const otherTools: StackInfo = {
    badgeIcon: 'java',
    title: 'Ferramentas',
    items: [
        'GIT', 'Selenium', 'Certbot'
    ]
}

const persistence: StackInfo = {
    badgeIcon: 'java',
    title: 'Bancos de Dados',
    items: [
        'PostgreSQL', 'MongoDB', 'RedisDB', 'SQLite'
    ]
}

const deploy: StackInfo = {
    badgeIcon: 'java',
    title: 'Deploy',
    items: [
        'Docker', 'Linux Debian', 'AWS EC2'
    ]
}

const javaBackendStyle: StackColor = {
    glow: true, color: '#E86F00'
}

const nodeBackendStyle: StackColor = {
    glow: true, color: 'green'
};
    

export default class AboutMeDatasource implements AboutMeData {
    public title = title;
    public text = description;
    public cards = {
        left: { up: frontEnd, down: otherTools },
        centerLeft: nodeBackend,
        centerRight: javaBackend,
        right: { up: persistence, down: deploy }
    }
    public style = {
        centerLeft: nodeBackendStyle,
        centerRight: javaBackendStyle
    }
}