import { HeaderButtonData } from "../components/gui/headerButton/HeaderButton";
import { HeaderMenuData } from "../components/gui/headerMenu/HeaderMenu";

const buttons: Array<HeaderButtonData> = [
    { href: '/home', text: 'Home' },
    { href: '/sobre', text: 'Sobre mim'},
    { href: '/portfolio', text: 'Portfólio'}
];

export default class HeaderMenuButtonsDatasource implements HeaderMenuData {
    public readonly buttons = buttons;
}