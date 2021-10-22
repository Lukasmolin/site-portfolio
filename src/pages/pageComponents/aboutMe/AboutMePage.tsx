import React from 'react';
import './AboutMePage.css';
import getHeaderMenuData from '../../datasourceGetters/getHeaderMenuData';
import getAboutMePageData from '../../datasourceGetters/getAboutMePageData';
import StackInfoCard from '../../../components/gui/stackInfoCard/StackInfoCard';
import HeaderMenu from '../../../components/gui/headerMenu/HeaderMenu';
import StackInfo from '../../../model/stackInfo/StackInfo';
import CardContentHolder from '../../../components/gui/cardContentHolder/CardContentHolder';
const data = getAboutMePageData();
const headerData = getHeaderMenuData();

export default function AboutMePage(): React.ReactElement {
    const { title, text, cardsTitle } = data;
    const { left, centerLeft, centerRight, right } = data.cards;
    
    function createCardFromInfo(info: StackInfo, smallbadge?: boolean) {
        const { color } = info;
        return <StackInfoCard
            highlighColor={color}
            smallBadge={smallbadge}
            stackInfo={info}
        ></StackInfoCard>
    }
    
    return <>
        <HeaderMenu data={headerData}></HeaderMenu>
        <main className='aboutMePage'>
            <section className='aboutText'>
                <h1 className='aboutMePageHeader'>{title}</h1>
                <div className='aboutMePageContent'>
                    <CardContentHolder className='aboutMeTextCard'>
                        <p>{text}</p>
                    </CardContentHolder>
                </div>
            </section>
            <section className='technologies'>
                <h1 className='aboutMePageHeader'>{cardsTitle}</h1>
                <div className='aboutMePageContent'>
                    <div className='left'>
                        {createCardFromInfo(left.up, true)}
                        {createCardFromInfo(left.down, true)}
                    </div>
                    <div className='centerLeft'>
                        {createCardFromInfo(centerLeft)}
                    </div>
                    <div className='centerRight'>
                        {createCardFromInfo(centerRight)}
                    </div>
                    <div className='right'>
                        {createCardFromInfo(right.up, true)}
                        {createCardFromInfo(right.down, true)}
                    </div>
                </div>
            </section>
        </main>
    </>;
}