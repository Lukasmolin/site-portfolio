import { HeaderButtonData } from '../components/gui/headerButton/HeaderButton';
import { HeaderMenuData } from '../components/gui/headerMenu/HeaderMenu';
import ownerDatasource from './ownerDatasource';

const buttons: Array<HeaderButtonData> = [
    { href: '/home', text: 'Home'},
    { href: '/about', text: 'Sobre'},
    { href: '/projects', text: 'Projetos'},
    { href: '/resume', text: 'Currículo' }
];


const headerMenuDatasource: HeaderMenuData = {
    buttons : buttons,
    social : ownerDatasource.social
}
export default headerMenuDatasource;