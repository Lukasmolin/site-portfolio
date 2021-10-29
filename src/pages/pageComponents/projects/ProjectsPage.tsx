import React, { useLayoutEffect } from 'react';
import './ProjectsPage.css';
import HeaderMenu from '../../../components/gui/headerMenu/HeaderMenu';
import getHeaderMenuData from '../../datasourceGetters/getHeaderMenuData';
import getProjectsPageData from '../../datasourceGetters/getProjectsPageData';
import ProjectInfoCard from '../../../components/gui/projectInfoCard/ProjectInfoCard';

const menuData = getHeaderMenuData();
const data = getProjectsPageData();

export default function ProjectsPage(): React.ReactElement {
    useLayoutEffect(() => window.scrollTo(0, 0));

    return <>
        <HeaderMenu data={menuData}></HeaderMenu>
        <main className='projectsPageContent'>
            <h1>{data.heading}</h1>
            <ul className='projectCardsGrid'>
                {data.projects.map(project => {
                    return <li key={project.projectTitle}>
                        <ProjectInfoCard projectInfo={project}></ProjectInfoCard>
                    </li>;
                })}
            </ul>
        </main>
    </>;
}