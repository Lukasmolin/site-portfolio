import { HeaderButtonData } from '../components/gui/headerButton/HeaderButton';
import { HeaderMenuData } from '../components/gui/headerMenu/HeaderMenu';

const buttons: Array<HeaderButtonData> = [
    { href: '/sobre', text: 'Sobre mim'},
    { href: '/portfolio', text: 'Projetos'},
    { href: '/resume', text: 'Currículo' }
];

export default class HeaderMenuButtonsDatasource implements HeaderMenuData {
    public readonly buttons = buttons;
}