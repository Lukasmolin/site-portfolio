import React from 'react';
import CardButton from '../../components/gui/cardButton/CardButton';
import CardContentHolder from '../../components/gui/cardContentHolder/CardContentHolder';
import HeaderMenu from '../../components/gui/headerMenu/HeaderMenu';
import getHeaderMenuData from '../datasourceGetters/getHeaderMenuData';
import getWorkResumeData from '../datasourceGetters/getWorkResumeData';
import './WorkResumePage.css';
import WorkResumeTitle from './workResumeTitle/WorkResumeTitle';

const data = getWorkResumeData();
const { title } = data;
const menuData = getHeaderMenuData();

export default function WorkResumePage(): React.ReactElement {
    return <>
        <HeaderMenu data={menuData}></HeaderMenu>
        <main className='workResumePage'>
            <section className='workResumeTitle'>
                <WorkResumeTitle data={title}></WorkResumeTitle>
            </section>
        </main>
    </>;
}