import getHeaderMenuData from '../../datasourceGetters/getHeaderMenuData';
import './HomePage.css';
import HeaderMenu from '../../../components/gui/headerMenu/HeaderMenu';
import getHomePageData from '../../datasourceGetters/getHomePageData';
import React, { useState } from 'react';
import HomeWelcome from '../../../components/gui/homeWelcome/HomeWelcome';
import HomeStack from '../../../components/gui/homeStack/HomeStack';

const menuData = getHeaderMenuData();
const data = getHomePageData();

export default function HomePage(): React.ReactElement {
    const { welcomeMessage, profilePicUrl, favoriteTechs } = data;
    const [isContentVisible, setContentVisible] = useState(false);
    const showContent = () => setContentVisible(true);    

    return <>
        <HeaderMenu data={menuData}></HeaderMenu>
        <main className='homePageContent'>
            <HomeWelcome
                profilePicUrl={profilePicUrl}
                textLines={welcomeMessage}
                onFinishedCallback={showContent}
            ></HomeWelcome>
            <HomeStack
                isContentVisible={isContentVisible}
                techs={favoriteTechs}
            ></HomeStack>
        </main>
    </>
}