import React from 'react';
import Badge from '../badge/Badge';
import CardContentHolder from '../cardContentHolder/CardContentHolder';
import './StackBadgeCard.css';

export default function StackBadgeCard(props: { iconName: string, labelText: string }): React.ReactElement {
    const { iconName, labelText } = props;
    return <CardContentHolder className='stackBadgeCard'>
        <Badge iconFileName={iconName}></Badge><div className='stackBadgeCardLabel'>{labelText}</div>
    </CardContentHolder>;
}