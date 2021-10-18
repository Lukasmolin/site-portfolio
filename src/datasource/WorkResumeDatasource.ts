import WorkResumeData from '../pages/workResume/WorkResumeData';

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
}

export default class WorkResumeDatasource implements WorkResumeData {
    public readonly title = title;
    public readonly quote = quote;
}