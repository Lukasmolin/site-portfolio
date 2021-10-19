import { HeaderButtonData } from '../components/gui/headerButton/HeaderButton';
import { HeaderMenuData } from '../components/gui/headerMenu/HeaderMenu';

const buttons: Array<HeaderButtonData> = [
    { href: '/about', text: 'Sobre mim'},
    { href: '/projects', text: 'Projetos'},
    { href: '/resume', text: 'Currículo' }
];

export default class HeaderMenuButtonsDatasource implements HeaderMenuData {
    public readonly buttons = buttons;
}