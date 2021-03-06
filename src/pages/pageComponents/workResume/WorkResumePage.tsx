import React, { useLayoutEffect } from 'react';
import HeaderMenu from '../../../components/gui/headerMenu/HeaderMenu';
import getHeaderMenuData from '../../datasourceGetters/getHeaderMenuData';
import getWorkResumePageData from '../../datasourceGetters/getWorkResumePageData';
import WorkResumeInfoCard from '../../../components/gui/workResumeInfoCard/WorkResumeInfoCard';
import './WorkResumePage.css';
import WorkResumeTitle from '../../../components/gui/workResumeTitle/WorkResumeTitle';

const menuData = getHeaderMenuData();
const data = getWorkResumePageData();
const { person, workResume } = data;

export default function WorkResumePage(): React.ReactElement {
    useLayoutEffect(() => window.scrollTo(0, 0));

    return <>
        <HeaderMenu data={menuData}></HeaderMenu>
        <main className='workResumePage'>
            <section className='workResumeTitle'>
                <WorkResumeTitle data={{ person }}></WorkResumeTitle>
            </section>
            <section className='workResumeQuote'>
                <figure>
                    <blockquote>"{workResume.quote.text}"</blockquote>
                    <figcaption>{workResume.quote.authorName}</figcaption>
                </figure>
            </section>
            {workResume.content.map(section => {
                return <section key={section.label}>
                    {section.heading && <h1>{section.heading}</h1>}
                    {section.items.map((item, index) => {
                        const key = item.content && item.content[0] ? item.content[0] : index;
                        return <WorkResumeInfoCard 
                            key={key}
                            data={item}
                        ></WorkResumeInfoCard>
                    })}
                </section>;
            })}
        </main>
    </>;
}