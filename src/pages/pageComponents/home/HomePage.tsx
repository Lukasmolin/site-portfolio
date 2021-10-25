import getHeaderMenuData from '../../datasourceGetters/getHeaderMenuData';
import './HomePage.css';
import HeaderMenu from '../../../components/gui/headerMenu/HeaderMenu';
import getHomePageData from '../../datasourceGetters/getHomePageData';
import CardContentHolder from '../../../components/gui/cardContentHolder/CardContentHolder';
import React, { useState } from 'react';
import Badge from '../../../components/gui/badge/Badge';
import HomeWelcome from '../../../components/gui/homeWelcome/HomeWelcome';
import ComeFromBottomFx from '../../../components/fx/comeFromBottomFx/ComeFromBottomFx';

const menuData = getHeaderMenuData();
const data = getHomePageData();

export default function HomePage(): React.ReactElement {
    const { welcomeMessage, profilePicUrl } = data;
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
            <section className='stackSection' style={invisibleStyle}>
                <h1>O que eu curto usar:</h1>
                <div className='stackSectionCards'>
                    <ul>
                        <li>
                            <ComeFromBottomFx allowMoveUp={isContentVisible} from='left' transitionTime={1}>
                                <CardContentHolder className='favoriteStackCard'>
                                    <Badge iconFileName='node'></Badge><div>Node</div>
                                </CardContentHolder>
                            </ComeFromBottomFx>
                        </li>
                        <li>
                            <ComeFromBottomFx allowMoveUp={isContentVisible} from='down' transitionTime={1}>
                                <CardContentHolder className='favoriteStackCard'>
                                    <Badge iconFileName='node'></Badge><div>Node</div>
                                </CardContentHolder>
                            </ComeFromBottomFx>
                        </li>
                        <li>
                            <ComeFromBottomFx allowMoveUp={isContentVisible} distance='30px' from='down' transitionTime={1.5}>
                                <CardContentHolder className='favoriteStackCard'>
                                    <Badge iconFileName='node'></Badge><div>Node</div>
                                </CardContentHolder>
                            </ComeFromBottomFx>
                        </li>
                        <li>
                            <ComeFromBottomFx allowMoveUp={isContentVisible} from='down' transitionTime={1}>
                                <CardContentHolder className='favoriteStackCard'>
                                    <Badge iconFileName='node'></Badge><div>Node</div>
                                </CardContentHolder>
                            </ComeFromBottomFx>
                        </li>
                        <li>
                            <ComeFromBottomFx allowMoveUp={isContentVisible} from='right' transitionTime={1}>
                                <CardContentHolder className='favoriteStackCard'>
                                    <Badge iconFileName='node'></Badge><div>Node</div>
                                </CardContentHolder>
                            </ComeFromBottomFx>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    </>
}