import StackInfo from "../model/stackInfo/StackInfo";

const stackInfoDatasource: StackInfo[] = [
    {
        badgeIcon: 'java',
        title: 'Java Backend',
        color: '#E86F00',
        items: [
            'Java', 'Spring Boot', 'JDBC', 'JPA', 'jUnit', 'Mockito', 'Gradle'
        ]
    },{
        badgeIcon: 'node',
        title: 'Node Backend',
        color: '#339933',
        items: [
            'Typescript', 'Javascript', 'Knex', 'TypeORM', 'Jest', 'NPM'
        ]
    },{
        badgeIcon: 'frontend',
        title: 'Frontend',
        items: [
            'Thymeleaf', 'React', 'Bootstrap', 'HTML5 e CSS'
        ]
    },{
        badgeIcon: 'tool',
        title: 'Ferramentas',
        items: [
            'GIT', 'Selenium', 'Certbot', 'Trello'
        ]
    },{
        badgeIcon: 'database',
        title: 'Banco de Dados',
        items: [
            'PostgreSQL', 'MongoDB', 'RedisDB', 'SQLite'
        ]
    },{
        badgeIcon: 'deploy',
        title: 'Deploy',
        items: [
            'Docker', 'Linux Debian', 'AWS EC2', 'AWS S3'
        ]
    }
]

export default stackInfoDatasource;