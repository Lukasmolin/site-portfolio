import StackInfo from '../model/stackInfo/StackInfo';
import AboutMeData, { StackColor } from '../pages/pageComponents/aboutMe/AboutMeData';

const title = `Sobre mim:`;
const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
const cardsTitle = `Tecnologias:`;

const javaBackend: StackInfo = {
    badgeIcon: 'java',
    title: 'Java Backend',
    items: [
        'Java', 'Spring Boot', 'JDBC', 'JPA', 'jUnit', 'Mockito', 'Gradle'
    ]
};

const nodeBackend: StackInfo = {
    badgeIcon: 'node',
    title: 'NodeJS Backend',
    items: [
        'Typescript', 'Javascript', 'Knex', 'TypeORM', 'Jest', 'NPM'
    ]
}

const frontEnd: StackInfo = {
    badgeIcon: 'frontend',
    title: 'Frontend',
    items: [
        'Thymeleaf', 'React', 'Bootstrap', 'HTML5 e CSS'
    ]
}

const otherTools: StackInfo = {
    badgeIcon: 'tool',
    title: 'Ferramentas',
    items: [
        'GIT', 'Selenium', 'Certbot', 'Trello'
    ]
}

const persistence: StackInfo = {
    badgeIcon: 'database',
    title: 'Banco de Dados',
    items: [
        'PostgreSQL', 'MongoDB', 'RedisDB', 'SQLite'
    ]
}

const deploy: StackInfo = {
    badgeIcon: 'deploy',
    title: 'Deploy',
    items: [
        'Docker', 'Linux Debian', 'AWS EC2', 'AWS S3'
    ]
}

const javaBackendStyle: StackColor = {
    color: '#E86F00'
}

const nodeBackendStyle: StackColor = {
    color: '#339933'
};

const aboutMeDatasource: AboutMeData = {
    title : title,
    text : description,
    cardsTitle : cardsTitle,
    cards : {
        left: { up: frontEnd, down: otherTools },
        centerLeft: nodeBackend,
        centerRight: javaBackend,
        right: { up: persistence, down: deploy }
    },
    style : {
        centerLeft: nodeBackendStyle,
        centerRight: javaBackendStyle
    }
}

export default aboutMeDatasource;