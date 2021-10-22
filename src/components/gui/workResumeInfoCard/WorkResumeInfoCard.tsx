import React from 'react';
import './WorkResumeInfoCard.css';
import CardContentHolder from '../cardContentHolder/CardContentHolder';
import WorkResumeInfoCardData from './WorkResumeInfoCardData';
import CardButton from '../cardButton/CardButton';

export default function WorkResumeInfoCard(props: { data: WorkResumeInfoCardData, className?: string }) {
    const { heading, duration, content, referenceLink } = props.data;
    const { className } = props;
    const appendClass = className ? ' ' + className : '';

    //ToDo: Inject this function dependencies instead of hard coding it
    function createDurationSubtitle() {
        if (!duration)
            throw Error('Cannot create subtitle for undefined duration');

        const formatedStartDate = duration.start.toLocaleDateString('pt-br', { year: 'numeric', month: 'long' });
        const formattedEndDate = duration.end ? duration.end.toLocaleDateString('pt-br', { year: 'numeric', month: 'long' }) : 'atualmente'
        return <div className='subtitle'>{`${formatedStartDate} - ${formattedEndDate}`}</div>;
    }

    function createContent() {
        if (content?.length === 0)
            throw new Error('Content cannot be empty');

        if (content?.length === 1)
            return <p>{content[0]}</p>;

        const items = content?.map(item => {
            return <li key={item}>{item}</li>
        });
        return <ul>{items}</ul>
    }

    return <CardContentHolder className={'workResumeInfoCard' + appendClass}>
        {heading && <h2><span>{heading}</span></h2>}
        {duration && createDurationSubtitle()}
        {content && createContent()}
        {referenceLink && <CardButton
            href={referenceLink.href}
            label={referenceLink.label}
        ></CardButton>}
    </CardContentHolder>;
}