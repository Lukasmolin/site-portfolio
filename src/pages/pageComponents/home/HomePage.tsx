import getHeaderMenuData from '../../datasourceGetters/getHeaderMenuData';
import './HomePage.css';
import HeaderMenu from '../../../components/gui/headerMenu/HeaderMenu';
import ConsoleTypedFxText from '../../../components/fx/consoleTypedFxText/ConsoleTypedFxText';
import getHomePageData from '../../datasourceGetters/getHomePageData';
import CardContentHolder from '../../../components/gui/cardContentHolder/CardContentHolder';
import ProfilePicture from '../../../components/gui/profilePicture/ProfilePicture';

const menuData = getHeaderMenuData();
const data = getHomePageData();

export default function HomePage(): React.ReactElement {
    const { welcomeMessage } = data;

    return <>
        <HeaderMenu data={menuData}></HeaderMenu>
        <main className='homePageContent'>
            <h1><ConsoleTypedFxText>{welcomeMessage}</ConsoleTypedFxText></h1>
        </main>
    </>
}