import getHeaderMenuData from '../../datasourceGetters/getHeaderMenuData';
import './HomePage.css';
import HeaderMenu from '../../../components/gui/headerMenu/HeaderMenu';
import TypedFxText from '../../../components/fx/typedFxText/TypedFxText';
import ConsoleTypedFxText from '../../../components/fx/consoleTypedFxText/ConsoleTypedFxText';

const menuData = getHeaderMenuData();


export default function HomePage(): React.ReactElement {
    
    return <>
        <HeaderMenu data={menuData}></HeaderMenu>
        <main className='homePage'>
            <h1><ConsoleTypedFxText>Oi, eu sou o Lucas ;)</ConsoleTypedFxText></h1>
        </main>
    </>
}