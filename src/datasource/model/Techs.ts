import Tech from "../../model/tech/Tech"

export abstract class Techs {
    public static readonly java: Tech = {
        category: 'Language',
        iconName: 'java',
        name: 'Java'
    }

    public static readonly typescript: Tech = {
        category: 'Language',
        iconName: 'typescript',
        name: 'Typescript'
    }

    public static readonly javascript: Tech = {
        category: 'Language',
        iconName: 'javascript',
        name: 'Javascript'
    }

    public static readonly html5: Tech = {
        category: 'Front-end',
        iconName: 'html5',
        name: 'HTML'
    }

    public static readonly css3: Tech = {
        category: 'Front-end',
        iconName: 'css3',
        name: 'CSS'
    }

    public static readonly node: Tech = {
        category: 'Back-end',
        iconName: 'node',
        name: 'Node'
    }
    public static readonly react: Tech = {
        category: 'Front-end',
        iconName: 'react',
        name: 'React'
    }

    public static readonly spring: Tech = {
        category: 'Back-end',
        iconName: 'spring',
        name: 'Spring Framework'
    }
    public static readonly springBoot: Tech = {
        category: 'Back-end',
        iconName: 'springBoot',
        name: 'Spring Boot'
    }
    public static readonly springSecurity: Tech = {
        category: 'Back-end',
        iconName: 'springSecurity',
        name: 'Spring Security'
    }
    public static readonly hibernateJpa: Tech = {
        category: 'Back-end',
        iconName: 'hibernateJpa',
        name: 'Hibernate JPA'
    }
    public static readonly junit: Tech = {
        category: 'Test',
        iconName: 'junit',
        name: 'JUnit5'
    }
    public static readonly thymeleaf: Tech = {
        category: 'Front-end',
        iconName: 'thymeleaf',
        name: 'Thymeleaf'
    }
    public static readonly postgres: Tech = {
        category: 'Database',
        iconName: 'postgres',
        name: 'PostgreSQL'
    }
    public static readonly docker: Tech = {
        category: 'Deploy',
        iconName: 'docker',
        name: 'Docker'
    }
    public static readonly gradle: Tech = {
        category: 'Tool',
        iconName: 'gradle',
        name: 'Gradle'
    }
    public static readonly npm: Tech = {
        category: 'Tool',
        iconName: 'npm',
        name: 'NPM'
    }

}