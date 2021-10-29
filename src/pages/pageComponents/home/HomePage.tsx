import getHeaderMenuData from '../../datasourceGetters/getHeaderMenuData';
import './HomePage.css';
import HeaderMenu from '../../../components/gui/headerMenu/HeaderMenu';
import getHomePageData from '../../datasourceGetters/getHomePageData';
import React, { useState } from 'react';
import HomeWelcome from '../../../components/gui/homeWelcome/HomeWelcome';
import HomeStack from '../../../components/gui/homeStack/HomeStack';
import HomeFavoriteProjects from '../../../components/gui/homeFavoriteProjects/HomeFavoriteProjects';
import HomeFooter from '../../../components/gui/homeFooter/HomeFooter';

const menuData = getHeaderMenuData();
const data = getHomePageData();

export default function HomePage(): React.ReactElement {
    const { welcomeMessage, profilePicUrl, favoriteTechs, favoriteProjects, footerSectionHeading } = data;
    const [isContentVisible, setContentVisible] = useState(false);
    const showContent = () => setContentVisible(true);
    const invisibleCSS = { opacity: 0 };
    const invisibleStyle = !isContentVisible ? invisibleCSS : undefined;
    return <>
        <HeaderMenu data={menuData}></HeaderMenu>
        <main className='homePageContent'>
            <HomeWelcome
                profilePicUrl={profilePicUrl}
                textLines={welcomeMessage}
                onFinishedCallback={showContent}
            ></HomeWelcome>
            <HomeStack
                style={invisibleStyle}
                isContentVisible={isContentVisible}
                techs={favoriteTechs}
            ></HomeStack>
            <HomeFavoriteProjects
                projects={favoriteProjects}
                style={invisibleStyle}
            ></HomeFavoriteProjects>
            <HomeFooter
                data={menuData}
                heading={footerSectionHeading}
                style={invisibleStyle}
            ></HomeFooter>
        </main>
    </>
}