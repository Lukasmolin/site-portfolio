import { HeaderMenuData } from '../../components/gui/headerMenu/HeaderMenu';
import HeaderMenuDatasource from '../../datasource/HeaderMenuDatasource';

const data = new HeaderMenuDatasource();

export default function getHeaderMenuData(): HeaderMenuData {
    return data;
}