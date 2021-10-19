import React from 'react';
import './WorkResumeInfoCard.css';
import CardContentHolder from '../../../../components/gui/cardContentHolder/CardContentHolder';
import WorkResumeInfoCardData from './WorkResumeInfoCardData';

export default function WorkResumeInfoCard(props: { data: WorkResumeInfoCardData, className?: string }) {
    const { heading, subtitle, paragraph } = props.data;
    const { className } = props;
    const appendClass = className ? ' ' + className : '';
    return <CardContentHolder className={'workResumeInfoCard' + appendClass}>
        {heading && <h2>{heading}</h2>}
        {subtitle && <div className='subtitle'>{subtitle}</div>}
        <p>{paragraph}</p>
    </CardContentHolder>;
}