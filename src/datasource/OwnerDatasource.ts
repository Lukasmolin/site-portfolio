import Person from "../model/person/Person";

const owner: Person = {
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

export default owner;