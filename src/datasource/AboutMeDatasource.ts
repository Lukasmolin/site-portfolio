import StackInfo from "../model/stackInfo/StackInfo";
import AboutMeData from "../pages/aboutMe/AboutMeData";

const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const javaBackend: StackInfo = {
    badgeIcon: 'java',
    title: 'Java Backend',
    items: [
        'Spring Boot', 'JDBC', 'JPA', 'jUnit', 'Mockito', 'Gradle'
    ]
};

const nodeBackend: StackInfo = {
    badgeIcon: 'java',
    title: 'NodeJS Backend',
    items: [
        'Express', 'Knex', 'TypeORM', 'Jest', 'NPM'
    ]
}

const frontEnd: StackInfo = {
    badgeIcon: 'java',
    title: 'Frontend',
    items: [
        'Thymeleaf', 'React', 'Bootstrap', 'HTML5', 'CSS'
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
        'Docker', 'Linux Debian', 'AWS EC2', 'AWS S3'
    ]
}

export default class AboutMeDatasource implements AboutMeData {
    public text = description;
    public cards = {
        left: { up: frontEnd, down: otherTools },
        centerLeft: nodeBackend,
        centerRight: javaBackend,
        right: { up: persistence, down: deploy }
    }

}