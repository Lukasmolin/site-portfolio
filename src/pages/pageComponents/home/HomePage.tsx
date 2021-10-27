import getHeaderMenuData from '../../datasourceGetters/getHeaderMenuData';
import './HomePage.css';
import HeaderMenu from '../../../components/gui/headerMenu/HeaderMenu';
import getHomePageData from '../../datasourceGetters/getHomePageData';
import React, { useState } from 'react';
import HomeWelcome from '../../../components/gui/homeWelcome/HomeWelcome';
import HomeStack from '../../../components/gui/homeStack/HomeStack';
import ProjectInfoCard from '../../../components/gui/projectInfoCard/ProjectInfoCard';
import CardButton from '../../../components/gui/cardButton/CardButton';
import CardContentHolder from '../../../components/gui/cardContentHolder/CardContentHolder';
import BaseButton from '../../../components/gui/baseButton/BaseButton';

const menuData = getHeaderMenuData();
const data = getHomePageData();

export default function HomePage(): React.ReactElement {
    const { welcomeMessage, profilePicUrl, favoriteTechs, favoriteProjects } = data;
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
            <section className='favoriteProjects'>
                <h1>{favoriteProjects.headingText}</h1>
                <ul className='favoriteProjectsList'>
                    {favoriteProjects.projects.map(proj => {
                        return <li>
                            <ProjectInfoCard projectInfo={proj}></ProjectInfoCard>
                        </li>;
                    })}
                </ul>
            </section>
            <footer>
                <CardContentHolder>
                    {menuData.buttons.map(btn => <CardButton label={btn.text} href={btn.href}></CardButton>)}
                    <div className='socialButtons'>
                        {menuData.social.map(btn => <CardButton iconName={btn.iconName} label={btn.label} href={btn.href}></CardButton>)}
                    </div>
                </CardContentHolder>
            </footer>
        </main>
    </>
}