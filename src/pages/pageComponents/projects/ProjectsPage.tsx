import React from 'react';
import './ProjectsPage.css';
import HeaderMenu from '../../../components/gui/headerMenu/HeaderMenu';
import getHeaderMenuData from '../../datasourceGetters/getHeaderMenuData';
import getProjectsData from '../../datasourceGetters/getProjectsData';
import ProjectInfoCard from '../../../components/modelData/projectInfoCard/ProjectInfoCard';

const menuData = getHeaderMenuData();
const data = getProjectsData();

export default function ProjectsPage(): React.ReactElement {
    return <>
        <HeaderMenu data={menuData}></HeaderMenu>
        <main className='projectsPageContent'>
            <h1>Meus projetos:</h1>
            <div className='projectCardsGrid'>
                {data.projects.map(project => {
                    return <ProjectInfoCard key={project.projectTitle} projectInfo={project}></ProjectInfoCard>;
                })}
            </div>
        </main>
    </>;
}