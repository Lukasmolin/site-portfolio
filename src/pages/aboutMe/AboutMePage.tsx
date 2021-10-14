import React from "react";
import StackInfoCard from "../../components/modelData/stackInfoCard/StackInfoCard";
import getAboutMeData from "./getAboutMeData";
import './AboutMePage.css';
const data = getAboutMeData();

export default function AboutMePage() {
    return <main className='aboutMePageContent'>
        <div className='left'>
            <StackInfoCard stackInfo={data.cards.left.up}></StackInfoCard>
            <StackInfoCard stackInfo={data.cards.left.down}></StackInfoCard>
        </div>
        <div className='centerLeft'>
            <StackInfoCard glow stackInfo={data.cards.centerLeft}></StackInfoCard>
        </div>
        <div className='centerRigth'>
            <StackInfoCard glow stackInfo={data.cards.centerRight}></StackInfoCard>
        </div>
        <div className='right'>
            <StackInfoCard stackInfo={data.cards.right.up}></StackInfoCard>
            <StackInfoCard stackInfo={data.cards.right.down}></StackInfoCard>
        </div>
    </main>;
}