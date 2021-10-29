import React from "react";
import HomePageData from "../../../pages/pageComponents/home/HomePageData";
import ProjectInfoCard from "../projectInfoCard/ProjectInfoCard";
import './HomeFavoriteProjects.css';

export default function HomeFavoriteProjects(props: { style?: React.CSSProperties, projects: HomePageData['favoriteProjects'] }): React.ReactElement {
    const { style, projects } = props;

    return <section style={style} className='favoriteProjects'>
        <h1>{projects.headingText}</h1>
        <ul className='favoriteProjectsList'>
            {projects.projects.map(proj => {
                return <li key={proj.projectTitle}>
                    <ProjectInfoCard projectInfo={proj}></ProjectInfoCard>
                </li>;
            })}
        </ul>
    </section>;
}