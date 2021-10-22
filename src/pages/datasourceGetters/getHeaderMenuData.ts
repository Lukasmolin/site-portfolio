import { HeaderMenuData } from '../../components/gui/headerMenu/HeaderMenu';
import headerMenuDatasource from '../../datasource/pages/headerMenuDatasource';

export default function getHeaderMenuData(): HeaderMenuData {
    return headerMenuDatasource;
}