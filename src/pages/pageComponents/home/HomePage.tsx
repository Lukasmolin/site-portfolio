import getHeaderMenuData from '../../datasourceGetters/getHeaderMenuData';
import './HomePage.css';
import HeaderMenu from '../../../components/gui/headerMenu/HeaderMenu';
import ConsoleTypedFxText from '../../../components/fx/consoleTypedFxText/ConsoleTypedFxText';
import getHomePageData from '../../datasourceGetters/getHomePageData';
import CardContentHolder from '../../../components/gui/cardContentHolder/CardContentHolder';
import StackInfoCard from '../../../components/gui/stackInfoCard/StackInfoCard';
import StackInfo from '../../../model/stackInfo/StackInfo';
import ProfilePicture from '../../../components/gui/profilePicture/ProfilePicture';

const menuData = getHeaderMenuData();
const data = getHomePageData();

export default function HomePage(): React.ReactElement {
    const { welcomeMessage, aboutMe, profilePicUrl } = data;

    return <>
        <HeaderMenu data={menuData}></HeaderMenu>
        <main className='homePageContent'>
            <h1><ConsoleTypedFxText>{welcomeMessage}</ConsoleTypedFxText></h1>
            <CardContentHolder className='welcomeCard'>
                <ProfilePicture imgUrl={profilePicUrl}></ProfilePicture>
                <p>{aboutMe}</p>
            </CardContentHolder>
            <h2>O que eu curto usar:</h2>
            <CardContentHolder>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem blanditiis alias ut deleniti quia omnis nam explicabo, laborum veniam. Ipsum voluptatibus eum saepe accusamus commodi sint possimus quasi, culpa nihil.</p>
            </CardContentHolder>
        </main>
    </>
}