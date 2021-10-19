import React from 'react';
import CardContentHolder from '../../components/gui/cardContentHolder/CardContentHolder';
import HeaderMenu from '../../components/gui/headerMenu/HeaderMenu';
import getHeaderMenuData from '../datasourceGetters/getHeaderMenuData';
import getWorkResumeData from '../datasourceGetters/getWorkResumeData';
import WorkResumeInfoCard from './workResumeInfoCard/WorkResumeInfoCard';
import './WorkResumePage.css';
import WorkResumeTitle from './workResumeTitle/WorkResumeTitle';

const menuData = getHeaderMenuData();
const data = getWorkResumeData();
const { title, quote, mainObjective, experiencesHeading, experiences,
        educationHeading, education, softSkillsHeading, softSkills } = data;

export default function WorkResumePage(): React.ReactElement {
    return <>
        <HeaderMenu data={menuData}></HeaderMenu>
        <main className='workResumePage'>
            <section className='workResumeTitle'>
                <WorkResumeTitle data={title}></WorkResumeTitle>
            </section>
            <section className='workResumeQuote'>
                <figure>
                    <blockquote>
                        "{quote.text}"
                    </blockquote>
                    <figcaption>{quote.authorName}</figcaption>
                </figure>
            </section>
            <section className='workObjective'>
                <WorkResumeInfoCard data={{
                    paragraph: mainObjective
                }}
                ></WorkResumeInfoCard>
            </section>
            <section className='workSkills'>
                <h1>{softSkillsHeading}</h1>
                <CardContentHolder className='workSkillsCard'>
                    <ul>
                        {softSkills.map(text => <li key={text}>{text}</li>)}
                    </ul>
                </CardContentHolder>
            </section>
            <section className='workExperience'>
                <h1>{experiencesHeading}</h1>
                {experiences.map(edu => {
                    return <WorkResumeInfoCard
                        className='workExperienceCard'
                        data={edu}
                    ></WorkResumeInfoCard>
                })}
            </section>
            <section className='education'>
                <h1>{educationHeading}</h1>
                {education.map(edu => {
                    return <WorkResumeInfoCard
                        className='educationCard'
                        data={edu}
                    ></WorkResumeInfoCard>
                })}
            </section>
        </main>
    </>;
}