import WorkResumeData from '../pages/pageComponents/workResume/WorkResumeData';

const title: WorkResumeData['title'] = {
    personName: 'Lucas Molin',
    personRole: 'Desenvolvedor Web',
    personAddress: 'Juiz de Fora, Minas Gerais, Brasil',
    profilePicURL: 'https://avatars.githubusercontent.com/u/38398230?v=4',
    personSocial: [
        {
            btnText: 'Github',
            href: 'https://github.com',
            svgIcon: 'frontend'
        }, {
            btnText: 'LinkedIN',
            href: 'https://linkedin.com',
            svgIcon: 'deploy'
        }, {
            btnText: 'Whatsapp',
            href: 'https://google.com',
            svgIcon: 'deploy'
        }
    ]
};

const quote: WorkResumeData['quote'] = {
    text: 'Em algum lugar, algo incrível está esperando para ser descoberto.',
    authorName: 'Carl Sagan'
};

const mainObjective: WorkResumeData['mainObjective'] = 'Computação é uma das duas paixões que sempre estiveram presentes na minha vida junto com a música. Aprendi programação aos onze anos com meu pai. Já fiz manutenção de PCs, tive blog de notícias de tecnologia, fui professor de teclado e músico. Meu foco é me desenvolver como programador e busco uma oportunidade onde eu possa dar os primeiros passos pra me tornar um profissional de ponta.';

const experienceHeading: WorkResumeData['experiencesHeading'] = `Experiência:`;

const experiences: WorkResumeData['experiences'] = [
    {
        heading: 'Núcleo de Práticas Jurídicas da UFJF - Desenvolvedor Java (Bolsista)',
        subtitle: 'Julho de 2019 - Atualmente',
        paragraph: 'Informatização da gestão de processos judiciais, atividades acadêmicas e fluxo interno do Núcleo onde executo um amplo espectro de tarefas desde a análise de requisitos, desenvolvimento com Spring, Hibernate (JPA), Postgres e Thymeleaf, elaboração de testes com JUnit, Mockito e Selenium até a implantação com Docker na AWS EC2 em Linux Debian.'
    }
];

const educationHeading: WorkResumeData['educationHeading'] = `Educação:`;

const education: WorkResumeData['education'] = [
    {
        heading: 'Universidade Federal de Juiz de Fora, UFJF - Bacharelado em Sistemas de Informação',
        subtitle: 'Julho de 2019 - Atualmente',
        paragraph: 'Informatização da gestão de processos judiciais, atividades acadêmicas e fluxo interno do Núcleo onde executo um amplo espectro de tarefas desde a análise de requisitos, desenvolvimento com Spring, Hibernate (JPA), Postgres e Thymeleaf, elaboração de testes com JUnit, Mockito e Selenium até a implantação com Docker na AWS EC2 em Linux Debian.'
    }
];

const softSkillsHeading: WorkResumeData['softSkillsHeading'] = `Competências:`;

const softSkills: WorkResumeData['softSkills'] = [
    'Criativo, curioso, flexível, comunicativo e colaborativo',
    'Inglês fluente para conversação, textos e documentos técnicos',
    'Noções de TDD e Arquitetura Limpa'
];

export default class WorkResumeDatasource implements WorkResumeData {
    public readonly title = title;
    public readonly quote = quote;
    public readonly educationHeading = educationHeading;
    public readonly education = education;
    public readonly experiencesHeading = experienceHeading;
    public readonly experiences = experiences;
    public readonly mainObjective = mainObjective;
    public readonly softSkillsHeading = softSkillsHeading;
    public readonly softSkills = softSkills;
}