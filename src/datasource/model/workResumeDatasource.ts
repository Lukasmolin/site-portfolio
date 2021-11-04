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
                'Criativo, curioso, flexível, comunicativo e colaborativo.',
                'Inglês fluente para conversação, textos e documentos técnicos.',
                'Noções de TDD e Arquitetura Limpa.'
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
        },{
            heading: `Músico (Freelancer)`,
            duration: {
                start: new Date(2016, 3),
                end: new Date(2018, 7)
            },
            content: [
                `Desempenhava diversas funções como músico freelancer: dava aulas de teclado presencialmente e pela internet, tocava e cantava em estabelecimentos e também performava como músico contratado em projetos artísticos de terceiros.`
            ]
        },{
            heading: `Técnico em manutenção de computadores (Freelancer)`,
            duration: {
                start: new Date(2014, 3),
                end: new Date(2016, 12)
            },
            content: [
                `Respondia a chamados na casa de clientes para realizar serviços como diagnóstico de problemas, formatação, remoção de malware, reparos a nível de software, diagnóstico de problemas de hardware e encaminhamento para reparos eletrônicos.`
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
                `Aprender sobre uma paixão pessoal em uma instituição de qualidade como a UFJF é na verdade a realização do meus sonhos de vestibulando.`
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