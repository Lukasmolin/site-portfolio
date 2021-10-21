import { HeaderMenuData } from '../../components/gui/headerMenu/HeaderMenu';
import HeaderMenuDatasource from '../../datasource/headerMenuDatasource';

export default function getHeaderMenuData(): HeaderMenuData {
    return HeaderMenuDatasource;
}