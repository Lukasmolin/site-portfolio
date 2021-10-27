import Tech from "../../model/tech/Tech"

export abstract class Techs {
    public static readonly java: Tech = {
        category: 'Language',
        iconName: 'java',
        name: 'Java',
        standardColor: '#E86F00'
    }

    public static readonly typescript: Tech = {
        category: 'Language',
        iconName: 'typescript',
        name: 'Typescript',
        standardColor: '#3178C6'
    }

    public static readonly javascript: Tech = {
        category: 'Language',
        iconName: 'javascript',
        name: 'Javascript',
        standardColor: '#E4CA08'
    }

    public static readonly html5: Tech = {
        category: 'Front-end',
        iconName: 'html5',
        name: 'HTML',
        standardColor: '#E34F26'
    }

    public static readonly css3: Tech = {
        category: 'Front-end',
        iconName: 'css3',
        name: 'CSS',
        standardColor: '#1572B6'
    }

    public static readonly node: Tech = {
        category: 'Back-end',
        iconName: 'node',
        name: 'Node',
        standardColor: '#339933'
    }
    public static readonly react: Tech = {
        category: 'Front-end',
        iconName: 'react',
        name: 'React',
        standardColor: '#30CEFA'
    }

    public static readonly spring: Tech = {
        category: 'Back-end',
        iconName: 'spring',
        name: 'Spring',
        standardColor: '#6DB33F'
    }
    public static readonly springBoot: Tech = {
        category: 'Back-end',
        iconName: 'springBoot',
        name: 'Spring Boot',
        standardColor: '#6DB33F'
    }
    public static readonly springSecurity: Tech = {
        category: 'Back-end',
        iconName: 'springSecurity',
        name: 'Spring Security',
        standardColor: '#6DB33F'
    }
    public static readonly hibernateJpa: Tech = {
        category: 'Back-end',
        iconName: 'hibernateJpa',
        name: 'Hibernate JPA',
        standardColor: '#BCAE79'
    }
    public static readonly junit: Tech = {
        category: 'Test',
        iconName: 'junit',
        name: 'JUnit5',
        standardColor: '#25A162'
    }
    public static readonly thymeleaf: Tech = {
        category: 'Front-end',
        iconName: 'thymeleaf',
        name: 'Thymeleaf',
        standardColor: '#005F0F'
    }
    public static readonly postgres: Tech = {
        category: 'Database',
        iconName: 'postgres',
        name: 'PostgreSQL',
        standardColor: '#4169E1'
    }
    public static readonly docker: Tech = {
        category: 'Deploy',
        iconName: 'docker',
        name: 'Docker',
        standardColor: '#2496ED'
    }
    public static readonly gradle: Tech = {
        category: 'Tool',
        iconName: 'gradle',
        name: 'Gradle',
        standardColor: '#02303A'
    }
    public static readonly npm: Tech = {
        category: 'Tool',
        iconName: 'npm',
        name: 'NPM',
        standardColor: '#CB3837'
    }
    public static readonly aws: Tech = {
        category: 'Deploy',
        iconName: 'aws',
        name: 'AWS',
        standardColor: '#FF9900'
    }
    public static readonly selenium: Tech = {
        category: 'Test',
        iconName: 'selenium',
        name: 'Selenium',
        standardColor: '#43B02A'
    }
    public static readonly debian: Tech = {
        category: 'OS',
        iconName: 'debian',
        name: 'Debian',
        standardColor: '#A81D33'
    }
}