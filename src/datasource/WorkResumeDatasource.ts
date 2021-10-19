import WorkResume from '../model/workResume/WorkResume';
import WorkResumeData from '../pages/pageComponents/workResume/WorkResumeData';

const person: WorkResumeData['person'] = {
    name: 'Lucas Molin',
    role: 'Desenvolvedor Web',
    adress: 'Juiz de Fora, Minas Gerais, Brasil',
    profilePictureUrl: 'https://avatars.githubusercontent.com/u/38398230?v=4',
    aboutMe: '',
    social: [
        {
            label: 'Github',
            href: 'https://github.com',
            iconName: 'frontend'
        }, {
            label: 'LinkedIN',
            href: 'https://linkedin.com',
            iconName: 'deploy'
        }, {
            label: 'Whatsapp',
            href: 'https://google.com',
            iconName: 'deploy'
        }
    ]
};

const workResume: WorkResume = {
    owner: {
        name: `Lucas Molin`,
        aboutMe: ``, //Todo
        adress: `Juiz de Fora, Minas Gerais, Brasil`,
        role: `Desenvolvedor Web`,
        profilePictureUrl: `https://avatars.githubusercontent.com/u/38398230?v=4`,
        social: [
            {
                label: 'Github',
                href: 'https://github.com',
                iconName: 'frontend'
            }, {
                label: 'LinkedIN',
                href: 'https://linkedin.com',
                iconName: 'deploy'
            }, {
                label: 'Whatsapp',
                href: 'https://google.com',
                iconName: 'deploy'
            }
        ]
    },
    quote: {
        text: `Em algum lugar, algo incrível está esperando para ser descoberto.`,
        authorName: `Carl Sagan`
    },
    content: [{
        label: 'objective',
        items: [{
            content: [
                `Computação é uma das duas paixões que sempre estiveram presentes na minha vida junto com a música. Aprendi programação aos onze anos com meu pai. Já fiz manutenção de PCs, tive blog de notícias de tecnologia, fui professor de teclado e músico. Meu foco é me desenvolver como programador e busco uma oportunidade onde eu possa dar os primeiros passos pra me tornar um profissional de ponta.`
            ]
        }]
    }, {
        label: 'skills',
        heading: `Competências`,
        items: [{
            content: [
                'Criativo, curioso, flexível, comunicativo e colaborativo',
                'Inglês fluente para conversação, textos e documentos técnicos',
                'Noções de TDD e Arquitetura Limpa'
            ]
        }]
    }, {
        label: 'experience',
        heading: `Experiência`,
        items: [{
            heading: `Núcleo de Práticas Jurídicas da UFJF - Desenvolvedor Java (Bolsista)`,
            duration: {
                start: new Date(2019, 6)
            },
            content: [
                `Informatização da gestão de processos judiciais, atividades acadêmicas e fluxo interno do Núcleo onde executo um amplo espectro de tarefas desde a análise de requisitos, desenvolvimento com Spring, Hibernate (JPA), Postgres e Thymeleaf, elaboração de testes com JUnit, Mockito e Selenium até a implantação com Docker na AWS EC2 em Linux Debian.`
            ]
        }]
    }, {
        label: 'education',
        heading: `Educação`,
        items: [{
            heading: `Universidade Federal de Juiz de Fora, UFJF - Bacharelado em Sistemas de Informação`,
            duration: {
                start: new Date(2017, 6)
            },
            content: [
                `Informatização da gestão de processos judiciais, atividades acadêmicas e fluxo interno do Núcleo onde executo um amplo espectro de tarefas desde a análise de requisitos, desenvolvimento com Spring, Hibernate (JPA), Postgres e Thymeleaf, elaboração de testes com JUnit, Mockito e Selenium até a implantação com Docker na AWS EC2 em Linux Debian.`
            ]
        }]
    }]
}

export default class WorkResumeDatasource implements WorkResumeData {
    public readonly workResume = workResume;
    public readonly person = person;
}