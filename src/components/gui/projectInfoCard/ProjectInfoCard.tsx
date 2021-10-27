import React from 'react';
import ProjectInfo from '../../../model/projectInfo/ProjectInfo';
import CardButton from '../cardButton/CardButton';
import CardContentHolder from '../cardContentHolder/CardContentHolder';
import Icon from '../SVGElement/Icon';
import './ProjectInfoCard.css';

export default function ProjectInfoCard(props: { projectInfo: ProjectInfo }): React.ReactElement {
    const { projectInfo } = props;
    return <CardContentHolder className='projectInfoCard'>
        <article className='projectInfoCardContent'>
            <h1><span>{projectInfo.projectTitle}</span></h1>
            <p>{projectInfo.projectDescription}</p>
            <ul className='techIconsList'>
                {projectInfo.techs.map(tech => {
                    const style = !tech.standardColor ? undefined : {
                        '--main-color': tech.standardColor
                    } as React.CSSProperties;
                    return <li key={tech.name} style={style} className='projectTechIcon'>
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