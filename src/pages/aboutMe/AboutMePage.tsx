import React from "react";
import getHeaderMenuData from "../datasourceGetters/getHeaderMenuData";
import StackInfoCard from "../../components/modelData/stackInfoCard/StackInfoCard";
import getAboutMeData from "../datasourceGetters/getAboutMeData";
import './AboutMePage.css';
import HeaderMenu from "../../components/gui/headerMenu/HeaderMenu";
import StackInfo from "../../model/stackInfo/StackInfo";
import { StackColor } from "./AboutMeData";
const data = getAboutMeData();
const headerData = getHeaderMenuData();

export default function AboutMePage() {
    function createCardFromInfo(info: StackInfo, style?: StackColor) {
        const glow = !!style?.glow;
        const color = style?.color;
        return <StackInfoCard
            highlighColor={color}
            glow={glow}
            stackInfo={info}
        ></StackInfoCard>
    }

    const { title } = data;
    const { left, centerLeft, centerRight, right } = data.cards;
    return <>
        <HeaderMenu data={headerData}></HeaderMenu>
        <main>
            <h1 className='aboutMePageHeader'>{title.toString()}</h1>
            <div className='aboutMePageContent'>
                <div className='left'>
                    {createCardFromInfo(left.up, data.style?.left?.up)}
                    {createCardFromInfo(left.down, data.style?.left?.down)}
                </div>
                <div className='centerLeft'>
                    {createCardFromInfo(centerLeft, data.style?.centerLeft)}
                </div>
                <div className='centerRigth'>
                    {createCardFromInfo(centerRight, data.style?.centerRight)}
                </div>
                <div className='right'>
                    {createCardFromInfo(right.up, data?.style?.right?.up)}
                    {createCardFromInfo(right.down, data?.style?.right?.down)}
                </div>
            </div>
        </main>
    </>;
}