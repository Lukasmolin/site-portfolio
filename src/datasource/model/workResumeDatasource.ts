import WorkResume from '../../model/workResume/WorkResume';
import ownerDatasource from './ownerDatasource';

const workResumeDatasource: WorkResume = {
    owner: ownerDatasource,
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
    }, {
        label: 'otherCourses',
        heading: `Cursos livres`,
        items: [{
            heading: `TreinaWeb - C# Básico`,
            duration: {
                start: new Date(2017, 9, 28),
                end: new Date(2017, 10, 26)
            },
            referenceLink: {
                href: 'https://www.treinaweb.com.br/certificado/XJ8YD4AJ',
                label: 'Certificado'
            }
        }, {
            heading: `TreinaWeb - Lógica Orientada a Objetos`,
            duration: {
                start: new Date(2017, 4, 3),
                end: new Date(2017, 4, 6)
            },
            referenceLink: {
                href: 'https://www.treinaweb.com.br/certificado/W668OGI4',
                label: 'Certificado'
            }
        }]
    }]
}

export default workResumeDatasource;