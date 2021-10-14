import React from 'react';
import ProjectInfo from '../../../model/projectInfo/ProjectInfo';
import CardButton from '../../gui/cardButton/CardButton';
import CardContentHolder from '../../gui/cardContentHolder/CardContentHolder';
import Icon from '../../gui/SVGElement/Icon';
import './ProjectInfoCard.css';

export default function ProjectInfoCard(props: { projectInfo: ProjectInfo }): React.ReactElement {
    const { projectInfo } = props;
    return <CardContentHolder>
        <article>
            <h1>{projectInfo.projectTitle}</h1>
            <p>{projectInfo.projectDescription}</p>
            <ul>
                {projectInfo.techs.map(tech => {
                    return <li key={tech.name} className="projectTechIcon">
                        {Icon(tech.iconName, tech.name)}
                    </li>
                })}
            </ul>
            <ul>
                {projectInfo.relatedLinks?.map(link => {
                    return <li key={link.url}>{CardButton({
                        text: link.label,
                        svgIconPath: link.iconName,
                        href: link.url
                    })}</li>
                })}
            </ul>
        </article>
    </CardContentHolder>;
}