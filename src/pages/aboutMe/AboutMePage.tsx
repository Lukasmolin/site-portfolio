import React from "react";
import getHeaderMenuData from "../datasourceGetters/getHeaderMenuData";
import StackInfoCard from "../../components/modelData/stackInfoCard/StackInfoCard";
import getAboutMeData from "../datasourceGetters/getAboutMeData";
import './AboutMePage.css';
import HeaderMenu from "../../components/gui/headerMenu/HeaderMenu";
import StackInfo from "../../model/stackInfo/StackInfo";
import { StackColor } from "./AboutMeData";
import CardContentHolder from "../../components/gui/cardContentHolder/CardContentHolder";
const data = getAboutMeData();
const headerData = getHeaderMenuData();

export default function AboutMePage() {
    function createCardFromInfo(info: StackInfo, style?: StackColor, smallbadge?: boolean) {
        const glow = !!style?.glow;
        const color = style?.color;
        return <StackInfoCard
            highlighColor={color}
            smallBadge={smallbadge}
            glow={glow}
            stackInfo={info}
        ></StackInfoCard>
    }

    const { title, text, cardsTitle } = data;
    const { left, centerLeft, centerRight, right } = data.cards;
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
                        {createCardFromInfo(left.up, data.style?.left?.up, true)}
                        {createCardFromInfo(left.down, data.style?.left?.down, true)}
                    </div>
                    <div className='centerLeft'>
                        {createCardFromInfo(centerLeft, data.style?.centerLeft)}
                    </div>
                    <div className='centerRight'>
                        {createCardFromInfo(centerRight, data.style?.centerRight)}
                    </div>
                    <div className='right'>
                        {createCardFromInfo(right.up, data?.style?.right?.up, true)}
                        {createCardFromInfo(right.down, data?.style?.right?.down, true)}
                    </div>
                </div>
            </section>
        </main>
    </>;
}