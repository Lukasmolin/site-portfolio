import React from 'react';
import ProjectInfo from '../../../../model/projectInfo/ProjectInfo';
import CardButton from '../../../../components/gui/cardButton/CardButton';
import CardContentHolder from '../../../../components/gui/cardContentHolder/CardContentHolder';
import Icon from '../../../../components/gui/SVGElement/Icon';
import './ProjectInfoCard.css';

export default function ProjectInfoCard(props: { projectInfo: ProjectInfo }): React.ReactElement {
    const { projectInfo } = props;
    return <CardContentHolder className='projectInfoCard'>
        <article className='projectInfoCardContent'>
            <h1>{projectInfo.projectTitle}</h1>
            <p>{projectInfo.projectDescription}</p>
            <ul className='techIconsList'>
                {projectInfo.techs.map(tech => {
                    return <li key={tech.name} className='projectTechIcon'>
                        <Icon iconFileName={tech.iconName}></Icon>
                    </li>
                })}
            </ul>
            <ul className='relatedLinksList'>
                {projectInfo.relatedLinks?.map(link => {
                    return <li key={link.href}>{CardButton({
                        ...link
                    })}</li>
                })}
            </ul>
        </article>
    </CardContentHolder>;
}